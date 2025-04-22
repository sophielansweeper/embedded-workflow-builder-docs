import fs from "node:fs";
import path from "node:path";
import cliProgress from "cli-progress";
import { gql } from "graphql-request";
import { createPrismaticApiClient } from "./graphqlClient";

interface ComponentsResponse {
  components: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    totalCount: number;
    nodes: Component[];
  };
}

export interface Component {
  key: string;
  label: string;
  description: string;
  category: string;
  iconUrl: string;
  connections: { nodes: Connection };
  triggers: { nodes: Trigger[] };
  dataSources: { nodes: DataSource[] };
  actions: { nodes: Action[] };
}

interface Connection {
  key: string;
  label: string;
  type: string;
  default: string;
  comments: string;
}

interface Trigger {
  key: string;
  label: string;
  description: string;
  inputs: { nodes: Input[] };
}

interface DataSource {
  key: string;
  label: string;
  description: string;
  dataSourceType: string;
  inputs: { nodes: Input[] };
}

interface Action {
  key: string;
  label: string;
  description: string;
  dataSourceType?: string;
  inputs: { nodes: Input[] };
}

interface Input {
  key: string;
  label: string;
  type: string;
  collection?: string;
  default?: string;
  comments?: string;
  required: boolean;
  language?: string;
}

interface GetPublicConnectorsParams {
  fromManifest: boolean;
}

export async function getPublicConnectors({
  fromManifest,
}: GetPublicConnectorsParams): Promise<Component[]> {
  if (fromManifest) {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "public-connectors-manifest.json"),
        "utf-8"
      )
    );
  }
  const connectors: Component[] = [];
  const prismaticApiClient = createPrismaticApiClient();

  let cursor = "";

  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  console.log("Fetching connector manifests...");
  progressBar.start(1, 0);

  do {
    const result = await prismaticApiClient.request<ComponentsResponse>(
      gql`
        query getComponents($cursor: String) {
          components(
            public: true
            orderBy: { direction: ASC, field: LABEL }
            first: 25
            after: $cursor
          ) {
            pageInfo {
              hasNextPage
              endCursor
            }
            totalCount
            nodes {
              key
              label
              description
              category
              iconUrl
              connections(orderBy: { direction: ASC, field: LABEL }) {
                nodes {
                  key
                  label
                  comments
                  oauth2Type
                  inputs {
                    nodes {
                      key
                      label
                      type
                      default
                      comments
                    }
                  }
                }
              }
              triggers: actions(
                orderBy: { direction: ASC, field: LABEL }
                isTrigger: true
              ) {
                nodes {
                  key
                  label
                  description
                  inputs {
                    nodes {
                      key
                      label
                      type
                      collection
                      default
                      comments
                      required
                      language
                    }
                  }
                }
              }
              dataSources: actions(
                orderBy: { direction: ASC, field: LABEL }
                isDataSource: true
                isDetailDataSource: false
              ) {
                nodes {
                  key
                  label
                  description
                  dataSourceType
                  inputs {
                    nodes {
                      key
                      label
                      type
                      collection
                      default
                      comments
                      required
                      language
                    }
                  }
                }
              }
              actions: actions(
                orderBy: { direction: ASC, field: LABEL }
                isDataSource: false
                isTrigger: false
              ) {
                nodes {
                  key
                  label
                  description
                  dataSourceType
                  inputs {
                    nodes {
                      key
                      label
                      type
                      collection
                      default
                      comments
                      required
                      language
                    }
                  }
                }
              }
            }
          }
        }
      `,
      { cursor }
    );
    connectors.push(...result.components.nodes);
    progressBar.setTotal(result.components.totalCount);
    progressBar.update(connectors.length);
    cursor = result.components.pageInfo.hasNextPage
      ? result.components.pageInfo.endCursor
      : "";
  } while (cursor);
  progressBar.stop();
  return connectors;
}
