/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "Crustaceans",
            species: "Frogfish",
            location: "Great Barrier Reef",
            length: 3,
            image: 'https://www.scubadiving.com/sites/scubadiving.com/files/styles/opengraph_1_91x1/public/images/2017/08/encounters_clown_frogfish_scd0817_teaser.jpg?itok=MBPr5_G4'
        },
        {
            name: "Rocky",
            food: "Anything that moves",
            species: "Mantis Shrimp",
            location: "Arctic",
            length: 0.25,
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/OdontodactylusScyllarus2.jpg/1280px-OdontodactylusScyllarus2.jpg'
        },
        {
            name: "Uruk Hai",
            food: "Manflesh",
            species: "Mother in Law Fish",
            location: "Oregon",
            length: 6,
            image:'https://spacefishreport.com/wp-content/uploads/2019/11/canaveral-offshore-mother.jpg'
        },
        {
            name: "Steve",
            food: "Wildlife Educators",
            species: "Stingray",
            location: "Australia",
            length: 5,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Stingray.jpg/1024px-Stingray.jpg'
        },
        {
            name: "Trump",
            food: "Big Macs",
            species: "Blobfish",
            location: "Florida",
            length: 34,
            image: 'https://lh3.googleusercontent.com/0Ow35lO_eqL7AvKnGeoAole73t-BqT3Mgf-rlt9_QfLtvufRt26V-VLMBReho9mmqcHcb7z00vXTgwBjfjDwUSUNew=w640-h400-e365-rj-sc0x00ffffff'
        },
        {
            name: "Bob",
            food: "Krabby Patties",
            species: "Sponge",
            location: "Bikini Bottom",
            length: 4,
            image: 'https://static.grainger.com/rp/s/is/image/Grainger/5VZZ4_AS01'
        },
        {
            name: "Hercules",
            food: "Smaller Fish",
            species: "Largemouth Bass",
            location: "The Crick out Back",
            length: 8,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/1351_largemouth_bass_%28Micropterus_salmoides%29_300_dpi.jpg/1024px-1351_largemouth_bass_%28Micropterus_salmoides%29_300_dpi.jpg'
        },
        {
            name: "Turtle",
            food: "Fish",
            species: "Alligator Snapping Turtle",
            location: "Mississippi River",
            length: 9,
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Alligator_snapping_turtle.jpg'
        }, 
    ],
    locations: [
        {
            image:'https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg?w=690&h=388&c=crop',
            location:'Great Barrier Reef',
            fishFound: 'Bart'
        },
        {
            image:'https://i.natgeofe.com/n/d863d4f1-5e8d-4a8c-84c1-ab443c475a19/01_arctic_ocean_kxwd6b.jpg',
            location: "Arctic",
            fishFound: 'Rocky'
        },
        {
            image:'https://oregonisforadventure.com/wp-content/uploads/2019/09/oregon-coast-towns-735x490.jpg.webp',
            location: 'Oregon',
            fishFound: 'Uruk Hai'
        },
        {
            image:'https://www.greenpeace.org.au/wp/wp-content/uploads/2018/03/Shutterstock-crop.jpg',
            location:'Australia',
            fishFound:'Steve'
        },
        {
            image:'https://www.campliveoakfl.com/wp-content/uploads/2016/04/Atlantic-Ocean.jpg',
            location:'Florida',
            fishFound: 'Trump'
        },
        {
            image:'https://muggles.cards/wp-content/uploads/2021/04/Bikini-Bottom.jpeg',
            location:'Bikini Bottom',
            fishFound:'Bob'
        },
        {
            image:'https://www.friendsofturtlecreek.com/wp-content/uploads/2017/09/Creek-Walking-Turtle-Creek-2-2-Custom-2.jpg',
            location:'The Crick out Back',
            fishFound:'Hercules'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/d/d2/Efmo_View_from_Fire_Point.jpg',
            location:'Mississippi River',
            fishFound:'Turtle'
        }

    ],
    quotes: [
        {
            text: "If you can't convince them, confuse them.",
            author: "-Harry S. Truman"
        },
        {
            text: "From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king.",
            author: "- J.R.R. Tolkien, The Fellowship of The Ring"
        },
        {
            text: "Every lover is in his heart a madman, and in his head a minstrel.",
            author: "-Neil Gaiman, Stardust"
        },
        {
            text: "Earth will be monetized until all trees grow in straight lines, three people own all seven continents, and every large organism is bred to be slaughtered",
            author: "-Richard Powers, The Overstory"
        }
    ]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getQuotes = () => {
    return database.quotes.map(quote => ({...quote}))
}