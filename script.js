// Fetching data of breed for dropdown List
$.get('https://dog.ceo/api/breeds/list',function(data){
    var breedList = data.message;
    for(var breed of breedList){
        var droopOption = $(`<option>${breed}</option>`);
        $('#dropdown').append(droopOption);
    }
});


// Fetching selected value of dropdown  menu
let selectedBreed;
$('#dropdown').change(function(){
    selectedBreed  = $(this).children("option:selected").val();
});


// Getting value of breed from dropdown and fetch image according to that
function getImageBreedWise(){
    $.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`,function(data){
        var imageUrl = data.message;
        $('#dog-img').attr('src',imageUrl);
    });
}
$('#next-img-btn').on('click',getImageBreedWise)


// GETTING RANDOM IMAGE -------> From API
function getRandomImage(){
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageUrl = data.message;
        $('#dog-img').attr('src',imageUrl);
    })
}
$('#get-img-btn').on('click',getRandomImage);