import path from "node:path";
import { Jimp } from "jimp";
import { getPrismaticConnection } from "./graphqlClient";
import type { Component } from "./queries";

export const fetchConnectorIcon = async (connector: Component) => {
  const { PRISMATIC_API_KEY, PRISMATIC_URL } = getPrismaticConnection();
  const assetFilePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "docs",
    "connectors",
    "assets",
    `${connector.key.toLowerCase()}.png`,
  );

  const metadataResponse = await fetch(
    new URL(connector.iconUrl, PRISMATIC_URL).toString(),
    { headers: { Authorization: `Bearer ${PRISMATIC_API_KEY}` } },
  );
  const { url } = await metadataResponse.json();

  const imageResponse = await fetch(url);
  const imageBuffer = await imageResponse.arrayBuffer();
  const image = await Jimp.fromBuffer(imageBuffer);
  image.resize({ h: 32, w: 32 });

  await image.write(assetFilePath as `${string}.${string}`);
};
