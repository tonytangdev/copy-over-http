
import express from 'express'
import { copyToClipboard } from './copy.js'
import { writeEvent } from './keyboard.js'
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello to Copy Over Http !')
})

app.get('/copy', (req, res) => {
  const { text } = req.body
  copyToClipboard(text)
  writeEvent(text)

  res.send('Copied to clipboard !')
})

app.get('/:text', (req, res) => {
  const { text } = req.params
  copyToClipboard(text)
  writeEvent(text)

  res.send('Copied to clipboard !')
})

app.listen(port, () => {
  console.log(`Copy Over Http app listening at http://localhost:${port}`)
})