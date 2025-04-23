/**
 * Create an GraphQL client that authenticates with the Prismatic API
 * in order to pull metadata about existing connectors
 */
import { Graffle } from "graffle";

export const createPrismaticApiClient = () => {
  const { PRISMATIC_API_KEY, PRISMATIC_URL } = process.env;

  const API_ENDPOINT = PRISMATIC_URL
    ? `${PRISMATIC_URL}/api`
    : "https://app.prismatic.io/api";

  if (!PRISMATIC_API_KEY) {
    throw new Error("You must set a PRISMATIC_API_KEY environment variable.");
  }

  return Graffle.create().transport({
    url: API_ENDPOINT,
    headers: { Authorization: `Bearer ${PRISMATIC_API_KEY}` },
  });
};
