# spotify-zeroconf
### Spotify Web API authentication, the easy way.

[![npm version](https://badge.fury.io/js/spotify-zeroconf.svg)](https://www.npmjs.com/package/spotify-zeroconf)

-----

## About this library

`spotify-zeroconf` is a partial rewrite of [`librespot`](https://github.com/librespot-org/librespot) that has one goal:

**To provide you with a Spotify Web API token without having to input your username and password.**

## How does it work

Basically, this library takes advantage of the [`Spotify Connect`](https://www.spotify.com/connect/) protocol and brodcasts itself as a Spotify compatible device on your network. Once you click on the device using any Spotify client (desktop, mobile…), it will perform multiple handshakes and authentication rounds with the Spotify access points, and provide you with a token that you will be able to use with the [`Spotify Web API`](https://developer.spotify.com/documentation/web-api/).

<br/>
<img src ="screenshot.png" width="200" />

*Click me!*

<br/>

There are more details in the `librespot` wiki (especially the [Authentication](https://github.com/librespot-org/librespot/wiki/Authentication) and [Connection](https://github.com/librespot-org/librespot/wiki/Connection) parts).

## Installation

```bash
npm i spotify-zeroconf
```

## Usage

```js
const spotifyZeroconf = require('spotify-zeroconf')

// Only clientId is required.
const credentials = await spotifyZeroconf({
    clientId: // [Required] Id of your spotify application
    scope: // Scopes with a comma separator. Defaults to a list containing every scope. (see here: https://developer.spotify.com/documentation/general/guides/scopes/)
    deviceName: // Name of the device that appears on the network. Defaults to 'Spotify Zeroconf'.
    noCache: // If true, will not store the first handshake credentials and will force the device to appear on the network every time the function is called. Defaults to false.
    authType: // 'token' (default) or 'code'. Code will give you an access code that you can exchange for a token and a refresh_token, but you will need the client_secret. (see here: https://developer.spotify.com/documentation/general/guides/authorization-guide/#2-have-your-application-request-refresh-and-access-tokens-spotify-returns-access-and-refresh-tokens)
})

// Web API token.
console.log(credentials.accessToken)
```