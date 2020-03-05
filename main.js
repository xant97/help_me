function getCoins(){
var url = new Request('https://api.coinpaprika.com/v1/coins/');
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
  const ul = document.getElementById('select');
return fetch(url)

.then(response => {
	    console.log(response.json());
})
.then(function(data) {
    let select = data.coins();
    return select.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    }) 
})

.catch(function(error) {
    console.log('nie dziala =)', error)
});

}
console.log(getCoins());