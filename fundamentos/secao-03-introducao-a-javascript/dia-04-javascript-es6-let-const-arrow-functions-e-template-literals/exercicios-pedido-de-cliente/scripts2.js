//Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

function orderModifier(order) {
 let newBuyer = order.name = 'Luiz Silva';
 let newTotal = order.payment.total = 50;
 let pizzas = Object.keys(order.order.pizza);
 let drinks = order.order.drinks.coke.type;
 console.log(`Olá, ${newBuyer}, o valor total de seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal}.`); 

//   // Adicione abaixo as informações necessárias.
}

orderModifier(order);