function ticketManager(tickets, sortCriterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const result = [];
  for (let x of tickets) {
    let [destination, price, status] = x.split('|');
    price = Number(price);
    const currentTicket = new Ticket(destination, price, status);
    result.push(currentTicket);
  }

  const criteria = {
    destination: (a, b) => a.destination.localeCompare(b.destination),
    price: (a, b) => {
      a.price - b.price;
    },
    status: (a, b) => a.status.localeCompare(b.status),
  };

  return result.sort(criteria[sortCriterion]);
}
