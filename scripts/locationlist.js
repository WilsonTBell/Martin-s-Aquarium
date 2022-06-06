import { getLocations } from "./database.js"

export const LocationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locationCard">
            <div><img  class="location__image image--card" src="${location.image}" /></div>
            <div class="fish__name">${location.location}</div>
            <div class="fish__species">${location.fishFound}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}