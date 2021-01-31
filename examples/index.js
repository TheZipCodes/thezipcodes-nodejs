const theZipCodes = require("thezipcodes");

theZipCodesApi = new theZipCodes("apiKey");
// Get Zip code to Location
theZipCodesApi
  .getZipCodeLocation(
    "13040", // zipCode
    "US" // countryCode
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  // get all states of country
theZipCodesApi
  .getStates("US") // countryCode
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  // get distance
theZipCodesApi
  .getDistance(
    "13040", // fromZipCode
    "13041", // toZipCode
    "US", //  countryCode,
    "KM" // unit
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
