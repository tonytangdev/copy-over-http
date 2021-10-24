import ks from 'node-key-sender'

export async function writeEvent(text) {
    const textArray = text.split("")
    const formattedTextArray = textArray.map(char => {
        if (char === " ") {
            return "space"
        } else if (char === "\n") {
            return "enter"
        }

        return char
    })

    for (let index = 0; index < formattedTextArray.length; index++) {
        const key = formattedTextArray[index]
        await sleep(ks.sendKey, key)
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function sleep(fn, ...args) {
    await timeout(500)
    return fn(...args)
}