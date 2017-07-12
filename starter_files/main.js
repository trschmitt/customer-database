

console.log(customers.results);

let container = document.querySelector('.container');

let customerInfo = customers.results;

let directoryTitle = document.createElement("h1");
let directoryTitleContent = document.createTextNode("Internal Company Directory");
directoryTitle.appendChild(directoryTitleContent);

container.appendChild(directoryTitle);

let customerUL = document.createElement("ul");

for (let i = 0; i < customerInfo.length; i++) {
  let customerLI = document.createElement("li")
  let template = `
      <img src = ${customerInfo[i].picture.large}>
      <h2> ${customerInfo[i].name.first} ${customerInfo[i].name.last} </h2>
      <p> ${customerInfo[i].email} </p>
      <p> ${customerInfo[i].location.street} </p>
      <p> ${customerInfo[i].location.city}, ${customerInfo[i].location.state} ${customerInfo[i].location.postcode} </p>
      <p> ${customerInfo[i].phone} </p>
      <p class="ssn"> ${customerInfo[i].id.value} </p>
  `

  customerLI.innerHTML= template ;
  customerUL.appendChild(customerLI);
  container.appendChild(customerUL);
}
