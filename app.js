$(document).ready(function () {


   function showResults (data) {
        var items= data.items;
        for(var i = 0; i < items.length; i++) {
            $('.results').append('<div> <a href="http://www.youtube.com/watch?v='+items[i].id.videoId+'"><img src="' + items[i].snippet.thumbnails.medium.url + '"></a> <p>'  + items[i].snippet.title + '</p></div');
        }


   }
  



   
    function getRecipes(searchTerm){
        var params = {
            q:searchTerm,
            r:'json',
            part:'snippet',
            key:'410fed8603e862fd2e7f2a43200896c5',
        },
        url='http://food2fork.com/api/search';
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