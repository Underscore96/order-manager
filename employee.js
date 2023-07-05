class Employee extends Person{
    constructor(name, surname, dob, gender, age, bestClient, totalEarning){
        super(name,surname, dob, gender, age);
        this.clientArray = [];

    }

    toString(){
        return 'Dipendente:\n' + super.toString() +
        'Miglior Cliente: ' + this.bestClient + '\n' +
        ' guadagno totale: ' + this.totalEarning + '\n';
    }


    addClient(client){
        this.clientArray.push(client);
    }

    totalEarnings(){
        let totalEarnings = 0;
        for (let i = 0; i < this.clientArray.length; i++) {
            totalEarnings += this.clientArray[i].totalExpenses();
            
        }
        return totalEarnings;

    } 

    bestClient() {
        let clientemployee =  new Client();
      
        for (const client of employee.clientArray) {
          if (client.totalExpenses() > clientemployee.totalExpenses()) {
            clientemployee = client;
          }
        }
      
        return clientemployee;
      }
    

}


    




