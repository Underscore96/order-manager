class Client extends Person{
    constructor(name, surname, dob, gender, address, orders =[]){
        super(name,surname, dob, gender);
        this.address = address;
        this.orders = orders;
        this.orderArray = [];

    }

    toString(){
        return 'Cliente:\n' + super.toString() +
        'indirizzo: ' + this.address + '\n' +
        'Spesa totale:' + this.totalExpenses().toFixed(2) + '€\n';
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