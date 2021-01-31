# TheZipCodes

this package is developed to use www.thezipcodes.com apis.

## Installation

Use the package manager npm to install foobar.

```bash
npm i thezipcodes --save
```

## Usage
##### Initialization

```javascript
const theZipCodes = require("thezipcodes");
const theZipCodesApi = new theZipCodes("apiKey");
```

##### Get Zip Code Location

```javascript
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
```
##### Get States

```javascript
theZipCodesApi
  .getStates("US") // countryCode
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

##### Get distance between zip codes

```javascript
theZipCodesApi
  .getDistance(
    "13040", // fromZipCode
    "13041", // toZipCode
    "US" //  countryCode
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

```
