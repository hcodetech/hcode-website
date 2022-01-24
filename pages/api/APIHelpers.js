// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { API_BASE_URL } from "./APIRoutes";

export function getAPIUrl(endpoint) {
  return API_BASE_URL + endpoint;
}