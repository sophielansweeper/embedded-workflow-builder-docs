import type { CommanderStatic } from "commander";
import { getPublicConnectors } from "./getPublicConnectors";
import fs from "node:fs";
import handlebars from "handlebars";
import path from "node:path";
import { kebabCase } from "change-case";

handlebars.registerHelper("cleanDefaultForTable", (value: string) => {
  if (!value) return;
  if (value.startsWith("{") || value.startsWith("[")) {
    return `<code>${value.replaceAll("\n", "<br />")}</code>`;
  }
  return value.replaceAll("\n", "<br />");
});

handlebars.registerPartial(
  "inputsTable",
  fs.readFileSync(path.join(__dirname, "templates", "inputsTable.md.hbs"), {
    encoding: "utf-8",
  })
);

async function generateConnectorDocs({
  publicConnectors,
  privateConnector,
  fromManifest,
}) {
  const connectorTemplate = handlebars.compile(
    fs.readFileSync(path.join(__dirname, "templates", "connector.md.hbs"), {
      encoding: "utf-8",
    })
  );
  if (publicConnectors) {
    const connectors = await getPublicConnectors({ fromManifest });
    fs.writeFileSync(
      path.join(__dirname, "public-connectors-manifest.json"),
      JSON.stringify(connectors, null, 2)
    );
    for (const connector of connectors) {
      if (connector.key !== "customHttp") {
        fs.writeFileSync(
          path.join(
            __dirname,
            "..",
            "..",
            "..",
            "docs",
            "connectors",
            `${kebabCase(connector.label)}.md`
          ),
          connectorTemplate(connector)
        );
      }
    }
  }
}

async function connectorDocsPlugin(context, options) {
  return {
    name: "connector-docs",
    extendCli(cli: CommanderStatic) {
      const command = cli.command("generate-connector-docs");
      command
        .description(
          "Generate connector documentation files for all public connectors or a single private connector."
        )
        .option("--public-connectors", "Generate public connector docs")
        .option(
          "--private-connector <component-key>",
          "Generate docs for a specific private connector by component key"
        )
        .option(
          "--from-manifest",
          "Generate public connector docs from an existing manifest (saves time pulling the API)"
        )
        .parse(process.argv)
        .action(async () => {
          const { publicConnectors, privateConnector, fromManifest } = command;
          await generateConnectorDocs({
            publicConnectors,
            privateConnector,
            fromManifest,
          });
        });
    },
  };
}

module.exports = connectorDocsPlugin;
