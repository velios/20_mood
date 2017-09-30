$(function() {

var raw_quotes_json = document.getElementById('quotes_json'),
    quotes_json_list = JSON.parse(raw_quotes_json.text),
    phrase_place = document.getElementById('quotation'),
    signature_place = document.getElementById('source'),
    random_quote = _.sample(quotes_json_list);

phrase_place.innerHTML = random_quote.phrase;
if (random_quote.signature) {
signature_place.innerHTML = random_quote.signature
}

$('#shuffler').click(function () {
  location.reload();
});

});
