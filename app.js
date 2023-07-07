const order1 = new Order('penne',1, 5 )

const order2 = new Order('pasta', '2','7')

const order3 = new Order('riso','3','5')

const order4 = new Order('carne','1','9')

// const order5 = new Order()

const client1 = new Client('gianni','giacomi', new Date(1993,4,23),'man','pontedecimo')
const client2 = new Client('lisa','lovi','23/04/2011','woman','21','casane')

console.log(client1);
console.log(order1.totalPrice());

console.log(client1.toString());
// console.log(order1.toString());




client1.addOrder(order1)
client1.addOrder(order2)
// client1.addOrder(order3)

console.log(client1.totalExpenses());

// console.log(new Date().getTime());



client2.addOrder(order3)
client2.addOrder(order4)

console.log(client2);
console.log(order2.totalPrice());


const employee = new Employee('gio','levi', new Date(1992,4,22), 'male','n','5');

employee.addClient(client1);
employee.addClient(client2);

console.log(employee.totalEarnings())

console.log(employee.bestClient());

console.log(employee.age);









