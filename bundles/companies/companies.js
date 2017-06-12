require('./companies.css')

window.onload = function() {
    var buttons = document.getElementsByClassName('resume'),
        resume = document.getElementsByClassName('sended-resume'),
        thanks = document.getElementsByClassName('thanks'),
        structureLink = document.getElementsByClassName('structure-link'),
        worksWrapper = document.getElementsByClassName('work-container'),
        structure = document.getElementsByClassName('structure');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            resume[0].style.display = "block";
        });
    }

    thanks[0].addEventListener('click', function() {
        resume[0].style.display = "none";
    });

    structureLink[0].addEventListener('click', function() {
        worksWrapper[0].style.display = "none";
        structure[0].style.display = "block";
    });
  };
