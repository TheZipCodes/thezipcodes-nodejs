const request = require("request");
const searchUrl = "https://www.thezipcodes.com/api/v1/search";
const statesUrl = "https://www.thezipcodes.com/api/v1/states";
const distanceUrl = "https://www.thezipcodes.com/api/v1/distance";

class TheZipCodes {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  makeRequest(params, url) {
    return new Promise((resolve, reject) => {
      request(
        url,
        {
          method: "GET",
          qs: params,
          headers: {
            apikey: this.apiKey,
            "Content-Type": "application/json",
          },
        },
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            resolve(body);
          } else {
            reject(body);
          }
        }
      );
    });
  }

  getZipCodeLocation(zipCode, countryCode) {
    const params = { zipCode: zipCode, countryCode: countryCode };
    const url = searchUrl;
    return this.makeRequest(params, url);
  }
  getStates(countryCode) {
    const params = { countryCode: countryCode };
    const url = statesUrl;
    return this.makeRequest(params, url);
  }
  getDistance(fromZipCode, toZipCode, countryCode, unit) {
    const params = {
      fromZipCode: fromZipCode,
      toZipCode: toZipCode,
      countryCode: countryCode,
      unit: unit
    };
    const url = distanceUrl;
    return this.makeRequest(params, url);
  }
}

module.exports = TheZipCodes;
