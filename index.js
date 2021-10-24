
import express from 'express'
import path from 'path'
import config from './config.json'

import { copyToClipboard } from './copy.js'
import { writeEvent } from './keyboard.js'
import { getLocalIPAddress } from './network.js'
import { createQRCode } from './qrCode.js'

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  const __dirname = path.resolve(path.dirname(''))
  res.sendFile('client/index.html', { root: __dirname })
})

app.get('/script.js', (req, res) => {
  const __dirname = path.resolve(path.dirname(''))
  res.sendFile('client/script.js', { root: __dirname })
})

app.post('/copy', (req, res) => {
  const { text } = req.body

  res.send(copyAndWrite(text))
})

app.get('/:text', (req, res) => {
  const { text } = req.params

  res.send(copyAndWrite(text))
})
app.listen(port, () => {
  const hostAddress = getLocalIPAddress()

  const url = `http://${hostAddress}:${port}`

  console.log(`Copy Over HTTP app listening at ${url}`)

  console.log('Local IP address QR code :')
  createQRCode(url)
})

function copyAndWrite(text) {
  if (config.blacklist.includes(text)) {
    return `value ${text} is blacklisted`
  }

  copyToClipboard(text)
  writeEvent(text)

  return `Copied to clipboard !`
}