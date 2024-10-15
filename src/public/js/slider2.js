const left_icon2 = $('.left-icon2');
const right_icon2 = $('.right-icon2');
var slider_list2 = $('.slider_container2');
const slider_box2 = $('.slider_box2');
console.log(slider_box2.length);

const slider_box_width2 = slider_box2[0].offsetWidth;
var position = 0;

left_icon2.click(function () {
    run_slider2(-1);
});

right_icon2.click(function () {
    run_slider2(1);
});
var index2 = 0;
function run_slider2(value) {
    if (value == -1) {
        index2++;
        console.log(index2);
        if (index2 <= slider_box2.length - 5) {
            position = slider_box_width2 * index2 * -1;
            slider_list2.css('transform', `translateX(${position}px)`);
            if (index2 == 1) {
                right_icon2.css('display', 'block');
            }
            if (index2 == slider_box2.length - 5) {
                left_icon2.css('display', 'none');
            }
        } else {
            right_icon2.css('display', 'block');
        }
    } else {
        index2--;
        console.log(index2);
        if (index2 > -1) {
            position = slider_box_width2 * index2 * -1;
            slider_list2.css('transform', `translateX(${position}px)`);
            if (index2 < slider_box2.length - 5) {
                left_icon2.css('display', 'block');
            }
            if (index2 == 0) {
                right_icon2.css('display', 'none');
            }
        } else {
            left_icon2.css('display', 'block');
        }
    }
}
