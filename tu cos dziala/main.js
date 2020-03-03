function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) { // rodzic / dziecko
    return parent.appendChild(el); // tak
  }

  const ul = document.getElementById('authors'); //const to zmienna tylko do odczytu/ pobierz element authors
  const url = 'https://api.coinpaprika.com/v1/coins'; //zmienna z linkiem do api + results=10 do wyjebania
  fetch(url) 
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data.results;
    return authors.coin_id(function(author) {
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
    console.log(error);
  });   