export async function formSubmit(event, res, rej, ref, modal) {
    event.preventDefault()
    const data = new FormData(event.target)
    fetch('https://formspree.io/f/mbjweyop', {
        method: 'POST',
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
    .then(response => {
        response.ok
            ? (modal(res), ref.current.reset())
            : modal(rej)
    })
    .catch(error =>
        modal(rej),
    )
}