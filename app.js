const order1 = new Order('penne','1','5')

const order2 = new Order('pasta', '2','7')

const order3 = new Order('riso','3','5')

const order4 = new Order('carne','1','9')

// const order5 = new Order()

const client1 = new Client('gianni','giacomi','12/01/1994','man','21','pontedecimo')
const client2 = new Client('lisa','lovi','23/04/2011','woman','21','casane')

console.log(client1);
console.log(order1.totalPrice());


client1.addOrder(order1)
client1.addOrder(order2)
// client1.addOrder(order3)

console.log(client1.totalExpenses());



client2.addOrder(order3)
client2.addOrder(order4)

console.log(client2);
console.log(order2.totalPrice());


const employee = new Employee('gio','levi','12/01/1992','21','n','5');

employee.addClient(client1);
employee.addClient(client2);

console.log(employee.totalEarnings())

console.log(employee.bestClient())









