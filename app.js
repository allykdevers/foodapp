$(document).ready(function () {


   function showResults (data) {
        var items= data.recipes;
        for(var i = 0; i < items.length; i++) {
 $('.results').append('<div><img src="'+ items[i].image_url+'"><a href="'+items[i].source_url+'">'+items[i].title+'</a></div>')
        }
   }
  
function getRecipes(searchTerm){
        var params = {
            q:searchTerm,
            
        },
        url='http://localhost:3000/food';
	$.getJSON(url,params,function (data) {
        console.log (data);
		showResults(data);
	});

    }
$('#search-form').submit(function (event){
    alert('submitted');
    $('.results').html('');
    var searchTerm = $('#search-text').val();
    alert(searchTerm);
    getRecipes(searchTerm);
    
    event.preventDefault();
});
});