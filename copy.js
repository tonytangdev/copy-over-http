import clipboardy from 'clipboardy'

export function copyToClipboard(text) {
    clipboardy.writeSync(text)
}