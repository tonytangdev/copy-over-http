const form = document.getElementById('form')
const submitButton = document.getElementById('submitBtn')
const text = document.getElementById('text')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const body = {
        text: text.value
    }

    fetch('/copy', {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(e => {
        text.value = '' 
    }).catch(e => {
        console.error({ e })
    })
})