import { getQuotes } from "./database.js"

export const QuoteList = () => {
    // Invoke the function that you imported from the database module
    const quotes = getQuotes()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="quoteList">'

    // Create HTNL representations of each fish here
    for (const quote of quotes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="quoteCard">
            <div class="quote__text">${quote.text}</div>
            <div class="quote__author">${quote.author}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}