/**
 * Create an GraphQL client that authenticates with the Prismatic API
 * in order to pull metadata about existing connectors
 */
import { GraphQLClient } from "graphql-request";

export const createPrismaticApiClient = () => {
  const { PRISMATIC_API_KEY, PRISMATIC_URL } = process.env;

  const API_ENDPOINT = PRISMATIC_URL
    ? `${PRISMATIC_URL}/api`
    : "https://app.prismatic.io/api";

  if (!PRISMATIC_API_KEY) {
    throw new Error("You must set a PRISMATIC_API_KEY environment variable.");
  }

  return new GraphQLClient(API_ENDPOINT, {
    headers: { Authorization: `Bearer ${PRISMATIC_API_KEY}` },
  });
};
