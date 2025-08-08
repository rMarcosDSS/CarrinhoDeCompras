export default class CartClass {
    constructor({id , title, description , price, quantity, image}) {
        this.id = id
        this.title = title
        this.description = description
        this.price = +price
        this.quantity = +quantity
        this.image = image
    }
}