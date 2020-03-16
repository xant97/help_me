let counter = 0;
function createNode(element){
	xd =  document.createElement(element); 
	xd.id = (counter++)/2; // nie mma pojecia dlaczego /2 XD //edit: w sumie to sie domyslam
	return xd;
							}
function append(parent, el){
	return parent.appendChild(el);
							}
const ul = document.getElementById('select');
const button = document.getElementById('button');
var url = 'https://api.coinpaprika.com/v1/coins/';
let coinList = fetch(url).then((response) => response.json())
.then(function siema(data) {
let i = 0;
  for(i; i<15 /*data.length*/; i++){ // 15 dla 15 | data.length dla wszystkich 
	let niewiem = data[i].id,
		option = createNode('option'),
		li = createNode('li');
		option.innerHTML = niewiem;
			append(li, option);
			append(ul, option);
				
button.onclick = function testr(){
//let dd = ul.options[ul.selectedIndex].value;
	if(option.id = '2' ){
	alert('dziala'); // alert(dd); dziala ale to nie o to chodzi
	}
else alert('tu wklej przykre slowa');
}
}
						})
.catch(function(error) {
  console.log(error);
}); 
function testme(){
	alert('test');
}