const got = require('got');

const endPoint = 'https://f18bf7f01c664942adf0a9ea4e26fd1c-vp1.us.blockchain.ibm.com:5002/'

function makePostRequest (path, query, body) {
  const url = `${endPoint}${path}`;
  const options = {
    json: true,
    body: JSON.stringify(body),
    query
  };

  return got(url, options);
}

function makeGetRequest(path, query) {
  const url = `${endPoint}${path}`;
  const options = {
    json: true,
    query
  };

  return got(url, options);
}

exports.writeToChain = function (args) {
  const body = {
     "jsonrpc":"2.0",
     "method":"invoke",
     "params":{
        "type":1,
        "chaincodeID":{
           "name":"0bded3814498b25fc694ddc53131405d225355b56dbfd522861d57bbaf7041a5c202dd4a0b474bff4d5064fcf4729415d2a76399947dde57c148f68c0bea05c5"
        },
        "ctorMsg":{
           "function":"write",
           "args":args
        },
        "secureContext":"user_type1_0"
     },
     "id":1
  }
  return makePostRequest('/chaincode', {}, body);
}

exports.readFromChain = function (args) {
  const body = {
     "jsonrpc":"2.0",
     "method":"query",
     "params":{
        "type":1,
        "chaincodeID":{
           "name":"0bded3814498b25fc694ddc53131405d225355b56dbfd522861d57bbaf7041a5c202dd4a0b474bff4d5064fcf4729415d2a76399947dde57c148f68c0bea05c5"
        },
        "ctorMsg":{
           "function":"read",
           "args": args
        },
        "secureContext":"user_type1_0"
     },
     "id":1
  }
  return makePostRequest('/chaincode', {}, body);
}
