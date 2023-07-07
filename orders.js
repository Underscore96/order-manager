class Order {
    constructor(product, quantity, unitPrice){
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = unitPrice;

    }



    totalPrice(){
        let totalPrice = this.quantity * this.unitPrice;
        return totalPrice;
    }

    // get totalPrice(){
    //     return this.unitPrice * this.quantity;
    // }
    // abbiamo trasformato una funzione in una proprietà

    // toString(){
    //     const card = 
    //     `Product: ${this.product}
    // Prezzo Unitario: ${this.unitPrice.toFixed(2)}€
    // Quantità: ${this.quantity}
    // Prezzo Totale: ${this.totalPrice.toFixed(2)}€
    //     `;
    //     return card;
    // }


}