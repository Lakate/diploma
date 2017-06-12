require('./companies.css')

window.onload = function() {
    var buttons = document.getElementsByClassName('resume'),
        resume = document.getElementsByClassName('sended-resume'),
        thanks = document.getElementsByClassName('thanks');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            resume[0].style.display = "block";
        }, false);
    }

    thanks[0].addEventListener('click', function() {
        resume[0].style.display = "none";
    });
  };
