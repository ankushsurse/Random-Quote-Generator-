export const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/Random')
    const data = await response.json()
    return data
}
