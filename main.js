function createNode(element){
	return document.createElement(element); 
							}

function append(parent, el){
	return parent.appendChild(el);
							}
  
const ul = document.getElementById('select');
var url = 'https://api.coinpaprika.com/v1/coins/';
let coinList = fetch(url).then((response) => response.json())
.then(function siema(data) {
let i = 0;
  for( i; i<15; i++){
	let niewiem = data[i].id,
		option = createNode('option'),
		li = createNode('li');
		option.innerHTML = niewiem;
			append(li, option);
			append(ul, option);
					}
						})
.catch(function(error) {
  console.log(error);
}); 