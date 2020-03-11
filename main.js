 /*
 function myFunction() {
  var node = document.createElement("option");
  var textnode = document.createTextNode(getCoins());
  node.appendChild(textnode);
  document.getElementById("select").appendChild(node);
} 
function getCoins(){

var url = new Request('https://api.coinpaprika.com/v1/coins/btc-bitcoin');
return fetch(url)
.then(response => response.json())

.then(function(data) {
let nomnom = data;
return nomnom.map(function(ree){
	let option = myFunction();
	option.innerHTML = `{ree.id}`;
	append(option, select);
})
})

.catch(function(error) {
    console.log('nie dziala =)', error)
})

}

console.log(getCoins());

function myFunction() {
  var node = document.createElement("option");
  var node2 = document.createNode();
  node.appendChild(node2);
  document.getElementById("select").appendChild(node);
} 
*/
function myFunction() {
  var node = document.createElement("option");
  var textnode = document.createTextNode();
  node.appendChild(textnode);
  document.getElementById("select").appendChild(node);
} 

//przykladowa obsluga, mozesz tu zrobic appenda
var url = 'https://api.coinpaprika.com/v1/coins/';
let coinList = fetch(url).then((response) => response.json())
.then(function(data) {
  //tu xD
  
  for (i = 0; i < 15/*data.length*/; i++) { 
    console.log(data[i].id); 
} 
  //console.log(data[0].id);
})
.catch(function(error) {
  console.log(error);
}); 