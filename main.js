function myFunction() {
  var node = document.createElement("option");
  var textnode = document.createTextNode(getCoins());
  node.appendChild(textnode);
  document.getElementById("select").appendChild(node);
} 
function getCoins(){

var url = new Request('https://api.coinpaprika.com/v1/coins/btc-bitcoin');
return fetch(url)
.then(response => response.json()
/*
.then(function(data) {
let nomnom = data;
return nomnom.map(function(ree){
	let option = myFunction();
	option.innerHTML = `{ree.id}`;
	append(option, select);
})
})
*/
.catch(function(error) {
    console.log('nie dziala =)', error)
})
)
}

console.log(getCoins());