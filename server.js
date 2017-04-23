var Opc = require('open_payments_cloud_application_api');
Opc.ApiClient.instance.basePath = "https://app-gateway.hackathon.ixaris.com/api";

const express = require('express')
const config = require('./config/config');
const uuid = require('uuid/v1');
const path = require('path');

const bodyParser = require('body-parser')
const cors = require('cors')

const blockchain = require('./blockchain')

const { opc: { programmeKey, programmeId, username, password, managedAccountProfile, managedCardProfile, ownerId} } = config

const server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(express.static('./build'));

// get information about token
const getToken =() => {
  const api = new Opc.AuthApi();
  const request = new Opc.LoginParams(programmeId, username, password)
  return api.authLogin(uuid(), programmeKey, request)
}

// TEMPORARY: BEGIN
var projects = [
    {id: 1, name: 'Human Rights Watch', description: '', funds: '£14.000', icon: 'functions', lat: 51.522, lng: -0.089},
    {id: 2, name: 'Do Something', description: '', funds: '£55.000', icon: 'person', lat: 51.52, lng: -0.08},
    {id: 3, name: 'World Wildlife Fund', description: '', funds: '£22.000', icon: 'star', lat: 51.52, lng: -0.082},
    {id: 4, name: 'Caritas', description: '', funds: '£5.000', icon: 'star', lat: 51.523, lng: -0.085}
];
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// TEMPORARY: END

// create a request for funds
server.get('/api/projects', async (req, res) => {
  try {
      return res.send(projects);
  } catch (err) {
      console.error(err)
      return res.send(err)
  }
})

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// create a request for funds
server.post('/api/project', async (req, res) => {
  try {
      // TEMPORARY: BEGIN
      const project = {
          id: projects.length + 1,
          funds: '£0.00',
          icon: 'star',
          lat: '51.52' + getRandomInt(0,9),
          lng: '-0.082' + getRandomInt(0,9),
          name: req.body.name,
          description: req.body.description
      }
      projects.push(project);
      // TEMPORARY: END
      return res.send(project)
  } catch (err) {
      console.error(err)
      return res.send(err)
  }
})

server.get('/api/transactions', (req, res) => {
  blockchain.readFromChain(["money"])
    .then((res) => {
      console.log(res.body)
      res.json({
        "status": "success",
        "data": [{
          "hash": "00000000b8980ec1fe96bc1b4425788ddc88dd36699521a448ebca2020b38699",
          "confirmations": 450820,
          "strippedsize": 216,
          "size": 216,
          "weight": 864,
          "height": 12345,
          "version": 1,
          "versionHex": "00000001",
          "merkleroot": "fd1dc97a826eb93b485b6bada84a807ee81181f7ab2720cefb5fa96729363157",
          "tx": ["fd1dc97a826eb93b485b6bada84a807ee81181f7ab2720cefb5fa96729363157"],
          "time": 1240784732,
          "mediantime": 1240781715,
          "nonce": 784807199,
          "bits": "1d00ffff",
          "difficulty": 1,
          "chainwork": "0000000000000000000000000000000000000000000000000000303a303a303a",
          "previousblockhash": "0000000076876082384460fb5a231cc5a5e874b9762e15a4e7b1fc068f749cdf",
          "nextblockhash": "00000000a08518aae9f8f95cc295d1331b937b12e1e885b44ed07d95f9a625e5"
        }, {
          "hash": "00000000a08518aae9f8f95cc295d1331b937b12e1e885b44ed07d95f9a625e5",
          "confirmations": 450819,
          "strippedsize": 216,
          "size": 216,
          "weight": 864,
          "height": 12346,
          "version": 1,
          "versionHex": "00000001",
          "merkleroot": "8e7ba9ca47d3bb14cc135e17e778a632e723cdd278e6e36b3eb8c0ad509395f3",
          "tx": ["8e7ba9ca47d3bb14cc135e17e778a632e723cdd278e6e36b3eb8c0ad509395f3"],
          "time": 1240786029,
          "mediantime": 1240782328,
          "nonce": 1533109273,
          "bits": "1d00ffff",
          "difficulty": 1,
          "chainwork": "0000000000000000000000000000000000000000000000000000303b303b303b",
          "previousblockhash": "00000000b8980ec1fe96bc1b4425788ddc88dd36699521a448ebca2020b38699",
          "nextblockhash": "000000008d806e269593e11064e89772def05d622859624d591ff801512a3fe8"
        }],
        "code": 200,
        "message": ""
      })
    })
})

server.post('/api/transactions', (req, res) => {
  blockchain.writeToChain(req.body.tags)
    .then((res) => {
      console.log(res.body)
      res.json(res.body)
    })
})


server.listen(config.general.port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + config.general.port)
})
