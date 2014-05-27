$('[name=position]').on('click', function() {
    var state = $(this).prop('checked');

    if (state == true) {
        console.log('Rotation');
    } else {
        console.log('Fixe');
    }
});

$('[name=speed]').on('click', function() {
    var state = $(this).prop('checked');

    if (state) {
        console.log("Vitesse "+ $(this).attr('data-value'));
    }
});

$('[name=state]').on('click', function () {
    var state = $(this).prop('checked');

    if (state == true) {
        console.log('Allumé');
    } else {
        console.log('Eteint');
    }
});