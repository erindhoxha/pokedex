

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
    } else {
        selector += '.' + selectedFly;
    }
    $(selector).show(100);
}
