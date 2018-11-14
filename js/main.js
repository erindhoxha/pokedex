        $('.container-fluid').hide();

$(function () {
    setTimeout(function () {
        $('#logoImg').fadeOut(1000);
        $('.horizontal').fadeOut();
        $('.container-fluid').fadeIn();
    }, 2000);
});


$(document).ready(function () {


$("#input-pokemon-type").on('change', function () {
    doFiltering();
});

$("#input-weakness-type").on('change', function () {
    doFiltering();
});

$("#input-fly-type").on('change', function () {
    doFiltering();
});


function doFiltering() {
    var selectedType = $("#input-pokemon-type").val();
    var selectedWeakness = $("#input-weakness-type").val();
    var selectedFly = $("#input-fly-type").val();
    $(".card-hide").hide();

    var selector = ".card-hide";

    if (selectedType != 'all') {
        selector += '.' + selectedType;
    }
    if (selectedWeakness != 'all') {
        selector += '.weakness-' + selectedWeakness;
    }
    if (selectedFly == "yes") {
        selector += '.' + selectedFly;
    } else if (selectedFly == "no"){
        selector += '.' + selectedFly;
    }
    $(selector).show(100);

}


$(".card").on('click', function () {
    $(".badge").hide();
    $(".evolvesFrom").show();
    $(".evolvesTo").show();

    
    var dataNr = $(this).closest('.card-hide').attr('data-nr');
    $("#exampleModal").attr('data-nr', dataNr);
    console.log(dataNr);
    console.log('img/' + pokemons.names[dataNr].image);

        var src = 'img/' + pokemons.names[dataNr].image;
        var name = pokemons.names[dataNr].name;
        $(".modal-title").text(name);
        $("#img-modal").attr('src', src);

        var description = pokemons.names[dataNr].description;
        $("#description").text(description);


        console.log(src);
    var weakness = $(this).find('.weakness').text()
    $("#weaknesses").text(weakness);
    var weaknessNames = weakness.slice(10);
    weaknessNames = weaknessNames.split(', ');
    for (var i = 0; i < weaknessNames.length; i++) {
        $(".badge-div").append('<span class="badge badge-pill mr-1 ml-1 badge-' + weaknessNames[i] + '">' + weaknessNames[i] + '</span>');
    }

    var typeNames = $(this).find('.type').text()
    var typeNames = typeNames.slice(6);
    typeNames = typeNames.split(', ');
    for (var i = 0; i < typeNames.length; i++) {
        $(".badge-type-div").append('<span class="badge badge-pill mr-1 ml-1 badge-' + typeNames[i] + '">' + typeNames[i] + '</span>');
    }

    var evolutionFrom = $(this).find('.evolves-from').text()
    var evolutionFrom = evolutionFrom.slice(14).toLowerCase();
    console.log(evolutionFrom);
    $(".evolves-from-img").attr('src', 'img/' + evolutionFrom + '.png');

    var evolutionTo = $(this).find('.evolves-to').text()
    var evolutionTo = evolutionTo.slice(12).toLowerCase();
    $(".evolves-to-img").attr('src', 'img/' + evolutionTo + '.png');


    if ($(".evolves-to-img").attr('src') == "img/.png") {
        $(".evolvesTo").hide();
    }
    if ($(".evolves-from-img").attr('src') == "img/.png") {
        $(".evolvesFrom").hide();
    }
    if ($(".pokemon-card-img").attr('src') == "#") {
        $(".pokemon-card-div").hide();
    }

});

    //your code here
});