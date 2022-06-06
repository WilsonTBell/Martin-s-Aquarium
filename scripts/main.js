// Import the FishList function from the correct module
import { FishList } from './fishlist.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector("#fishList")

fishHTMLElement.innerHTML = FishList()

// Import the LocationList function from the correct module
import { LocationList } from './locationlist.js'

/*
    What is the CSS selector for the element where you
    want to display the locations?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const locationHTMLElement = document.querySelector("#locationList")

locationHTMLElement.innerHTML = LocationList()

// Import the QuoteList function from the correct module
import { QuoteList } from './quotelist.js'

/*
    What is the CSS selector for the element where you
    want to display the locations?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const quoteHTMLElement = document.querySelector("#quoteList")

quoteHTMLElement.innerHTML = QuoteList()