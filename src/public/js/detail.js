const see_more = $('.see_more');
const info_content_movie = $('.info_content_movie');
const hidden = $('.hidden');
// console.log(info_content_movie);

see_more.click(() => {
    info_content_movie.css('height', '72px');
    hidden.css('display', 'block');
    see_more.css('display', 'none');
});
hidden.click(() => {
    hidden.css('display', 'none');
    see_more.css('display', 'block');
    info_content_movie.css('height', '47px');
});

//
const html_date = $('.box_date');
const html_day = $('.box_day');
let date = new Date();
let now = 'Thứ' + ' ' + (date.getDay() + 1);
let day_now = date.getDate();
let month_now = date.getMonth() + 1;
if (now == 'Thứ 1') {
    now = 'Chủ nhật';
}
let day = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
let day_in_month = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];

if (
    month_now == 1 ||
    month_now == 3 ||
    month_now == 5 ||
    month_now == 7 ||
    month_now == 8 ||
    month_now == 10 ||
    month_now == 12
) {
    day_in_month.push(31);
} else if (month_now == 2) {
    day_in_month.pop();
    day_in_month.pop();
}
let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var day_movie = [];
var day_now_movie = [];
for (let i = 0; i < day.length; i++) {
    if (day[i] == now) {
        for (let j = i; j < i + 7; j++) {
            day_movie.push(day[j % day.length]);
        }
    }
}
for (let e = 0; e < day_in_month.length; e++) {
    if (day_in_month[e] == day_now) {
        for (let f = e; f < e + 7; f++) {
            day_now_movie.push(day_in_month[f % day_in_month.length]);
        }
    }
}

html_date.each((index, element) => {
    $(element).text(day_now_movie[index]);
});
html_day.each((index, element) => {
    $(element).text(day_movie[index]);
});

//model
const info_trailer = $('.info_trailer');
const info_img = $('.info_img_img');
const model_detail = $('.model_detail');
const model_icon_close = $('.model_icon_close');
const detail_icon_video = $('.detail_icon_video');

info_trailer.click(() => {
    model_detail.css('display', 'flex');
});
detail_icon_video.click(() => {
    model_detail.css('display', 'flex');
});
info_img.click(() => {
    model_detail.css('display', 'flex');
});
model_icon_close.click(() => {
    model_detail.css('display', 'none');
});
$(document).click(() => {
    console.log('ok');
});
