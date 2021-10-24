import { exec } from 'child_process'

export function createQRCode(url) {
    const command = "curl qrcode.show/" + url
    exec(command, (error, stdout, stderr) => {
        if (error) {
            //some err occurred
            console.error(error)
          } else {
           // the *entire* stdout and stderr (buffered)
           console.log(`${stdout}`)
          }
    })
}