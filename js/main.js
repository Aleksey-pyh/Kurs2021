var button = document.querySelectorAll('.registration');
var modal = document.querySelector('.modal');
var closeBut = document.querySelector('.close');
button[0].onclick = function() {
    event.preventDefault();
    modal.classList.add('active');
  };
button[1].onclick = function() {
    event.preventDefault();
    modal.classList.add('active');
};
closeBut.onclick = function() {
    event.preventDefault();
    modal.classList.remove('active');
};
window.onload = function() {
    setTimeout(anim, 300);
};
// анимация первого экрана
var anim = function() {
document.querySelector('header').classList.add('headActive','opacityActive');
document.querySelector('.leftAlign').classList.add('headActive','opacityActive');
document.querySelector('.bgContent').classList.add('bgActive','opacityActive');
};
//анимация timeline
var line = document.querySelectorAll('.line');
var timeline = document.querySelector('.timeline');
var userDisplay = document.documentElement.clientHeight; //высота дисплея пользователя
var heightBlockHide = line[0].getBoundingClientRect().height+line[1].getBoundingClientRect().height; //высота на которую поднимаем таймлайн
var starHeight = (userDisplay - heightBlockHide)/2; //высота при которой начинаем поднимать
var title = document.querySelector('#titleTimeLine');
var maxHeight = 0;
for(var i=2; i< line.length;i++){
  maxHeight+= line[i].getBoundingClientRect().height+15;
}
maxHeight+= document.querySelector('#cenB').getBoundingClientRect().height+25; //высота которую даём блоку wrapperForCanvas 
window.addEventListener('scroll', function() {
  if(line[0].getBoundingClientRect().y <=starHeight){
    line[0].classList.add('hideLine'); //даём opacity первым двум блокам
    line[1].classList.add('hideLine');
    timeline.style.transform = 'translateY(-' + heightBlockHide + 'px)'; //поднимаем timeline
    document.querySelector('.wrapperForCanvas').style.maxHeight = maxHeight + 'px';//задаём max-heigth чтобы внизу не было большого отступа
  }
  if(title.getBoundingClientRect().y>starHeight){ //возращаем всё назад если заголовок h2 оказался выше starHeight
    line[0].classList.remove('hideLine');
    line[1].classList.remove('hideLine');
    timeline.style.transform = 'none';
  }
});


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#E04E39"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#E04E39"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
