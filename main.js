let counter = 0; // licznik;
function createNode(element){ // tworzenie elementu z id;
	element_x =  document.createElement(element); 
	element_x.id = counter; 
	return element_x;
							}
function append(parent, el){ // dodawanie elementu 
	return parent.appendChild(el);
							}
const take_select = document.getElementById('select'); 
const take_button = document.getElementById('button');
const take_div = document.getElementById('div');
const url = 'https://api.coinpaprika.com/v1/coins/'; // api
let coin_List = fetch(url).then((response) => response.json()) // pobranie danych z url -> odpowiedz -> json
.then(function do_smth(data) {
let i = 0;
  for(i; i<data.length; i++){ // 15 dla 15 | data.length dla wszystkich 
  counter = counter+1;
	let data_a = data[i].id,
		create_option = createNode('option'),
		create_div = createNode('div'),
		create_li = createNode('li');
		create_option.innerHTML = data_a; // tworzy element zalezny od i 
			append(create_li, create_option); // dodawanie elementow do select'a
			append(take_select, create_option);
				
take_button.onclick = function button_f(){
	
let dd = take_select.options[take_select.selectedIndex].id; // id wybranej opcji z select'a
	let id_api = data[dd-1].id,
		name_api = data[dd-1].name,
		symbol_api = data[dd-1].symbol, // symbol api
		rank_api = data[dd-1].rank,
		is_new_api = data[dd-1].is_new,
		is_active_api = data[dd-1].is_active;
	
	let	write_out = ('ID: ' + id_api + '<br> Name: ' + name_api + '<br> Symbol: ' + symbol_api + '<br> Rank: ' + rank_api + '<br> Is new: ' + is_new_api +  '<br> Is avtive: ' + is_active_api);
		create_div.innerHTML = write_out; // div
			append(take_div, create_div); // dodanie diva


								} // function do_smth end
									} // loop end
						})// fetch end
.catch(function(error) {
  console.log(error);
}); 
