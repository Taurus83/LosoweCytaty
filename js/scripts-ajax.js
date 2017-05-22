var url = 'http://api.icndb.com/jokes/random';
getJoke();
var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, //tutaj dziwna konstrukcja, ale po lewej stronie mamy nazwę parametru, a po prawej jest nazwa zmiennej przechowującej wartość
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}