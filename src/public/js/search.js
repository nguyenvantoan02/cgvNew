const icon_search = $('.icon_search');
const form_search = $('.box_infor_search');
const up = $('.up');

icon_search.click(function (event) {
    event.stopPropagation();

    form_search.toggle();
    up.toggle();
});

$(document).click(function () {
    form_search.hide();
    up.hide();
});

form_search.click(function (event) {
    event.stopPropagation();
});
