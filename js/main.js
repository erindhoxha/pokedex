$("#input-pokemon-type").on('change', function() {
        $('.card-hide:not(.' + $("#input-pokemon-type").val() + ')').hide();
        $("." + $("#input-pokemon-type").val()).show();
    if ($("#input-pokemon-type").val() == "all") {
        $(".card-hide").show();
    }
});


$("#input-weakness-type").on('change', function() {
    var value = $(this).val();

    $(".weakness:contains('" + value + "')").each(function() {
        console.log(this);
    })
});
