import { createPrismaticApiClient } from "./graphqlClient";
import { type Component, GET_PRIVATE_COMPONENT } from "./queries";

interface PrivateComponentsResponse {
  components: {
    nodes: Component[];
  };
}

interface GetPrivateConnectorParams {
  componentKey: string;
}

export async function getPrivateConnector({
  componentKey,
}: GetPrivateConnectorParams) {
  const prismaticApiClient = createPrismaticApiClient();
  const result = await prismaticApiClient.request<PrivateComponentsResponse>(
    GET_PRIVATE_COMPONENT,
    { componentKey }
  );
  if (result.components.nodes.length !== 1) {
    throw new Error(
      `A component key of "${componentKey}" did not return exactly one private component`
    );
  }
  return result.components.nodes[0];
}
