import config, { validateConfig } from "./helpers";

// Validate config file
validateConfig("api");

const API = {
  /**
   *  Get the requested route from API
   *
   *  @param {string} endpoint Endpoint of API url to be requested
   *  @return {Promise} Promise with JSON parsed response
   */
  async get(endpoint) {
    // Remove leading slash
    if (endpoint.charAt(0) === "/") endpoint = endpoint.substr(1);

    const response = await fetch(config.api + endpoint);

    return await response.json();
  }
};

export default API;
