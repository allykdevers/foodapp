$(document).ready(function () {


   function showResults (data) {
        var items= data.recipes;
        for(var i = 0; i < items.length; i++){
            $('.recipe').append('<div class="food"><img class="pic"src="'
             + items[i].image_url+'"><a href="'
            +items[i].source_url+'">'
            +items[i].title
            +'</a></div>')
        }
   }
   
function getRecipes(searchTerm){
        var params = {
            q:searchTerm,

            },
        url='https://shielded-taiga-29027.herokuapp.com/food';
	$.getJSON(url,params,function (data) {
        console.log (data);
		showResults(data);
	});
}
$('#search-form').submit(function (event){
    $('.recipes').html('');
    var searchTerm = $('#search-text').val();
    getRecipes(searchTerm);
    event.preventDefault();
});
})