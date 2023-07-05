class Client extends Person{
    constructor(name, surname, dob, gender, age, address, orders){
        super(name,surname, dob, gender, age);
        this.address = address;
        this.orderArray = [];

    }

    toString(){
        return 'Cliente:\n' + super.toString() +
        'indirizzo: ' + this.address + '\n' +
        ' ordini: ' + this.orders + '\n';
    }


    addOrder(order){
        this.orderArray.push(order);
    }
    
      

    totalExpenses(){
        let totalExpense = 0;
        for (let i = 0; i < this.orderArray.length; i++) {
            totalExpense += this.orderArray[i].totalPrice();
            
        }
        return totalExpense;

    } 




}