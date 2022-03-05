import { GraphQLClient } from "graphql-request";

// First api endpoint
export const actaDiurnaApi = `https://api-us-east-1.graphcms.com/v2/ckstc3yvb5ka001y20m768917/master`;
export const beaconApi = `https://api-us-east-1.graphcms.com/v2/cl0bhp83r47g401xtbzde093v/master`;
export const dragonApi = `https://api-us-east-1.graphcms.com/v2/cl0dw53tu11h501xsghix5sqx/master`;

// GraphQL Clients
const actaDiurnaGraphQLClient = new GraphQLClient(actaDiurnaApi);
const beaconGraphQLClient = new GraphQLClient(beaconApi);
const dragonGraphQLClient = new GraphQLClient(dragonApi);

// First api fetcher
export function actaFetcher(query, variables) {
  return actaDiurnaGraphQLClient.request(query, variables);
}
// Second api fetcher
export function beaconFetcher(query, variables) {
  return beaconGraphQLClient.request(query, variables);
}

// Third api fetcher
export function dragonFetcher(query, variables) {
  return dragonGraphQLClient.request(query, variables);
}

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// function to truncate text to 200 characters
export function truncate(str, length, ending) {
  if (length == null) {
    length = 200;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}
