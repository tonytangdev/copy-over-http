import { networkInterfaces } from 'os'

const INTERFACE_NAME = process.env.INTERFACE_NAME

const DEFAULT_INTERFACES_NAMES = [
    'en0',
    'eth0',
    'Ethernet'
]

// https://stackoverflow.com/a/8440736
export function getLocalIPAddress() {
    const nets = networkInterfaces()
    const results = Object.create({})

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = []
                }
                results[name].push(net.address)
            }
        }
    }

    let supposedlyRightIPAddress = results[INTERFACE_NAME]

    if (!supposedlyRightIPAddress) {
        let index = 0
        while (!supposedlyRightIPAddress && index < DEFAULT_INTERFACES_NAMES.length) {
            const currentInterfaceName = DEFAULT_INTERFACES_NAMES[index]
            supposedlyRightIPAddress = results[currentInterfaceName]

            index++
        }

        return supposedlyRightIPAddress
    }

    throw 'IP address not found.'
}

