
$(document).ready(function () {

    $(function () {
        setTimeout(function () {
            $('#logoImg').fadeOut(1000);
            $('.horizontal').fadeOut();
            $('.container-fluid').fadeIn();
        }, 2000);
    });

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

    var dataNr = 0;
    dataNr = $(this).closest('.card-hide').attr('data-nr');
    $("#exampleModal").attr('data-nr', dataNr);


        var src = 'img/' + pokemons.names[dataNr].image;
        var name = pokemons.names[dataNr].name;
        $(".modal-title").text(name);
        $("#img-modal").attr('src', src);

        var description = pokemons.names[dataNr].description;
        $("#description").text(description);


    var weakness = $(this).find('.weakness').text()
    $("#weaknesses").text(weakness);
    console.log(weakness);
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
    var selector = pokemons.names[dataNr];

    var weight = selector.weight;
    $("#weight-text").text(weight);

    var height = selector.height;
    $("#height-text").text(height);

    var category = selector.category;
    $("#category-text").text(category);

    var ability = selector.ability;
    $("#abilities-text").text(ability);

    var gender = selector.gender;
    $(".gender-box").children().remove();
    $(".gender-box").append(gender);
    
    var evolvesTo = selector.evolvesTo;
    $("#pokemon-evolves-to-name").text(evolvesTo);

    var evolvesFrom = selector.evolvesFrom;
    $("#pokemon-evolves-from-name").text(evolvesFrom);


    var cardImages = selector.cardsImages;
    for (i = 0; i < cardImages.length; i++) {
        $(".carousel-image-pokemon_" + i).attr('src', cardImages[i]);
    }

    $(".evolvesFrom").addClass("div-evolves-from-" + dataNr);
    $(".evolvesTo").addClass("div-evolves-to-" + dataNr);

    if ($(".div-evolves-from-" + dataNr).attr('style') == "display: none;") {
        $(".div-evolves-to-" + dataNr).css('margin', '0 auto');
    }
    if ($(".div-evolves-to-" + dataNr).attr('style') == "display: none;") {
        $(".div-evolves-from-" + dataNr).css('margin', '0 auto');
    }

});


    $("#input-search-pokemon").on('keyup', function(){
        var searchValue = $("#input-search-pokemon").val().toLowerCase().replace(/\s/g, '');
        var cardTitle = $(".card-title");
        $(".card-hide").hide();
        for (var i = 0; i < cardTitle.length; i++ ) {
            if (cardTitle[i].innerHTML.toLowerCase().indexOf(searchValue) > -1) {
                var nameOfPokemon = cardTitle[i].innerHTML;
                $('h4:contains("' + nameOfPokemon + '")').closest('.card-hide').show();
            }
        }
    })

    var input = document.getElementById('input-search-pokemon');

    input.addEventListener('keyup', function(event) {
        event.preventDefault();

        if (event.keyCode === 13) {
            document.getElementById('input-search-button').click();
        }
    })

    //your code here


    var btnLuck = document.getElementById('btn-luck');

    function getRandomPokemon() {
        $(".badge").hide();

        var randomNumber = Math.floor((Math.random() * 20) + 1);
        console.log(randomNumber);
        $('#modalLuck').modal('show');
        var srcLucky = 'img/' + pokemons.names[randomNumber].image;
        $("#pokemon-lucky-image").attr('src', srcLucky);
        $("#pokemon-lucky-name").text(pokemons.names[randomNumber].name);

        $("#pokemon-description").text(pokemons.names[randomNumber].description);

        var strengths = pokemons.names[randomNumber].type;
        console.log(strengths);
        var typeName = strengths.split(', ');
        console.log(typeName);
        for (var i = 0; i < typeName.length; i++) {
            $("#your-strengths").append('<span class="badge badge-pill mr-1 ml-1 badge-' + typeName[i] + '">' + typeName[i] + '</span>');
        }

        var weakness = pokemons.names[randomNumber].weakness;
        console.log(weakness);
        var weaknessNames = weakness.split(', ');
        console.log(weaknessNames);
        for (var i = 0; i < weaknessNames.length; i++) {
            $("#your-weakness").append('<span class="badge badge-pill mr-1 ml-1 badge-' + weaknessNames[i] + '">' + weaknessNames[i] + '</span>');
        }



    }
    btnLuck.addEventListener('click', getRandomPokemon, false);
});