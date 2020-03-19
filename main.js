let counter = 0;
function createNode(element){
	xd =  document.createElement(element); 
	xd.id = counter; // smiiiga
	return xd;
							}
function append(parent, el){
	return parent.appendChild(el);
							}
const ul = document.getElementById('select');
const button = document.getElementById('button');
const divik = document.getElementById('testowy');
var url = 'https://api.coinpaprika.com/v1/coins/';
let coinList = fetch(url).then((response) => response.json())
.then(function siema(data) {
let i = 0;
  for(i; i<data.length; i++){ // 15 dla 15 | data.length dla wszystkich 
  counter = counter+1;
	let niewiem = data[i].id,
		option = createNode('option'),
		div = createNode('div'),
		li = createNode('li');
		option.innerHTML = niewiem;
			append(li, option);
			append(ul, option);

				
button.onclick = function testr(){
	
let dd = ul.options[ul.selectedIndex].id; // ID SELECTA KTOREGO MAMY SELECTED
	let id_api = data[dd-1].id,
		name_api = data[dd-1].name,
		symbol_api = data[dd-1].symbol, // symbol api
		rank_api = data[dd-1].rank,
		is_new_api = data[dd-1].is_new,
		is_active_api = data[dd-1].is_active;
	
	let	woo = ('ID: ' + id_api + '<br> Name: ' + name_api + '<br> Symbol: ' + symbol_api + '<br> Rank: ' + rank_api + '<br> Is new: ' + is_new_api +  '<br> Is avtive: ' + is_active_api);
		div.innerHTML = woo;
			append(divik, div);


								} //end of buttons function
									} //end of loop
						})//end of fetch
.catch(function(error) {
  console.log(error);
}); 
function testme(){
	alert('test');
}