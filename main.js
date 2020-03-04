function getCoins(){
var url = new Request('https://api.coinpaprika.com/v1/coins');
return fetch(url)

.then(response => {
	    console.log(response.json());
})

.catch(function(error) {
    console.log('nie dziala =)', error)
});

}
console.log(getCoins());