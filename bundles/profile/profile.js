require('./profile.css')

window.onload = function() {
    var close = document.getElementsByClassName('close-button'),
        calendar = document.getElementsByClassName('calendar'),
        bigCalendar = document.getElementsByClassName('calendar-big'),
        bigCalendarImg = document.getElementsByClassName('calendar-big__img'),
        bigCalendarText = document.getElementsByClassName('calendar-big__text'),
        bigCalendarSubmit = document.getElementsByClassName('invisible-submit'),
        bigCalendarThanks = document.getElementsByClassName('calendar-thanks');

    calendar[0].addEventListener('click', function(e) {
        bigCalendar[0].style.display = 'block';
        bigCalendarImg[0].style.display = 'block';
    });

    close[0].addEventListener('click', function() {
        bigCalendar[0].style.display = 'none';
        bigCalendarImg[0].style.display = 'none';
        bigCalendarText[0].style.display = 'none';
    });

    bigCalendarImg[0].addEventListener('click', function(e) {
        bigCalendarImg[0].style.display = 'none';
        bigCalendarText[0].style.display = 'block';
        bigCalendar[0].style.width = '300px';
        bigCalendar[0].style.height = '200px';
        bigCalendar[0].style.top = '200px';
        bigCalendar[0].style['margin-left'] = '-150px';
    });

    bigCalendarSubmit[0].addEventListener('click', function(e) {
        bigCalendarText[0].style.display = 'none';
        bigCalendarThanks[0].style.display = 'block';
    });
};
