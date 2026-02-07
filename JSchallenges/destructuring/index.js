const favoriteShow = {
    title: "Monk",
    year: "2002",
    genre: "mystery",
    star: "Tony Shaloub",
    director: "Randy Zisk"
}

const {title, year, genre, star, director} = favoriteShow

// console.log(`
//     My favorite show is ${title} starring ${star}.  It's a ${genre} 
//     directed by ${director} and released in ${year}.`)

const dreamHoliday = {
    destination: 'Lake Kissimmee State Park',
    activity: 'go camping and making a fire', 
    accomodation: 'go biking and fishing',
    companion: 'Mike'
}

const {destination, companion, accomodation, activity} = dreamHoliday

console.log(`
    I would be happy to go to ${destination} to ${activity}.  I'd ${accomodation} and hang out with ${companion}
    `);