# COPY OVER HTTP

## DESCRIPTION
Launches an express server which copies into the clipboard and types any text sent from a client.

I created this tool to not have to type manually the code needed for MFA (Multi Factor Authentication).

## Docker
### Build the image
docker-compose up

## HOW TO
Install dependencies : `yarn` or `npm install`

To run the server : `yarn start` or `npm run start`

It'll show up a QR Code that you can scan with your phone to open up a browser directly into your server's IP local IP address.

You can set some environment variable :
- PORT : port used for serving the express server
- INTERFACE_NAME : network interface name ('en0', 'eth0', ...) used to generate the QR code

### POST
You can send a POST request to copy or write any text containing a json body as such to the `/copy` endpoint :
```json
{
    "text": "text to copy/write"
}
```

### GET
You can send a GET request to copy or write the text that is sent as the request parameter :
```bash
curl http://192.168.1.70:3000/text_to_copy
```

## NEXT STEPS

- Better looking form

## CONTRIBUTING

Do not hesitate to open up an issue and make PRs to improve this tool.