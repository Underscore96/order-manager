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


}