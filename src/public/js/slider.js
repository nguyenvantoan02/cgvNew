const left_icon = $('.left-icon');
const right_icon = $('.right-icon');
var slider_list = $('.slider_container');
const slider_box = $('.slider_box');
// console.log(slider_box.length);
const slider_box_width = slider_box[1].offsetWidth;
var position = 0;

left_icon.click(function () {
    run_slider(-1);
});

right_icon.click(function () {
    run_slider(1);
});
var index = 0;
function run_slider(value) {
    if (value == -1) {
        index++;
        console.log(index);
        if (index <= slider_box.length - 5) {
            position = slider_box_width * index * -1;
            slider_list.css('transform', `translateX(${position}px)`);
            if (index == 1) {
                right_icon.css('display', 'block');
            }
            if (index == slider_box.length - 5) {
                left_icon.css('display', 'none');
            }
        } else {
            right_icon.css('display', 'block');
        }
    } else {
        index--;
        console.log(index);
        if (index > -1) {
            position = slider_box_width * index * -1;
            slider_list.css('transform', `translateX(${position}px)`);
            if (index < slider_box.length - 5) {
                left_icon.css('display', 'block');
            }
            if (index == 0) {
                right_icon.css('display', 'none');
            }
        } else {
            left_icon.css('display', 'block');
        }
    }
}
