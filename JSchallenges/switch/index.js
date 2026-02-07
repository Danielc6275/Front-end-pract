/* Price list
* Coffee $2
* Sandwiches $5
* Salad $4
* Lemon cake $3
*/

function selectItem(item) {
    let price = 0

    switch(item) {
        case 'coffee':
            price = 2
            break
        case 'sanwich':
            price = 5
            break
        case 'salad':
            price = 4
            break
        case 'lemon cake':
            price = 3
            break
        default:
            return `Sorry, we do not sell ${item}`
    }
    return `You selected ${item}.  That will be $${price}`
}
console.log(selectItem('lemon cake'))