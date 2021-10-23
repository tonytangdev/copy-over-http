import ks from 'node-key-sender'

export function writeEvent(text) {
    const textArray = text.split("")
    const formattedTextArray = textArray.map(char => {
        if (char === " ") {
            return "space"
        } else if (char === "\n") {
            return "enter"
        }

        return char
    })
    ks.sendKeys(formattedTextArray)
}