function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
  }
  
  function order(clients, property) {
    return clients.slice().sort((a, b) => {
      if (typeof a[property] === 'string') {
        return a[property].localeCompare(b[property]);
      }
      return b[property] - a[property];
    });
  }
  
  function total(clients) {
    return clients.reduce((acc, client) => acc + client.balance, 0);
  }
  
  function info(index) {
    return clients.find(client => client.index === index);
  }
  
  function search(query) {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
  }
  