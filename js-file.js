const container = document.querySelector('.container');

const btn = document.querySelector('button');

var r = 0;
var g = 0;
var b = 0;
var rPer = 0;
var gPer = 0;
var bPer = 0;

  btn.addEventListener('click', () => {
    var squaresNum = window.prompt("Enter number of squares");
    changeBoxSize(squaresNum)
  });

function changeBoxSize(boxSize) {
    var htmlElements = "";
for (var i = 0; i < boxSize; i++) {
    htmlElements += '<div class="box"></div>';
}
container.innerHTML = htmlElements;

const box = document.querySelectorAll('.box')

var htmlElements2 = "";

for (var j = 0; j < boxSize; j++) {
    htmlElements2 += '<div class="box-horizontal"></div>';
}


box.forEach((item) => {
      item.innerHTML = htmlElements2
    })

const boxHorizontal = document.querySelectorAll('.box-horizontal');

boxHorizontal.forEach((item) => {
    item.setAttribute('style', 'width: 20px; height: 20px; border: 1px solid lightGrey;')
});

boxHorizontal.forEach((item) => {

    // and for each one we add a 'click' listeners
    item.addEventListener('mouseover', () => {
      var color = randomColor();
      item.setAttribute('style', 'width: 22px; height: 22px; background: red;');
      item.style.backgroundColor = color;
    });
  });

}

function randomColor() {

    if (r < 1 && g < 1 && b < 1){
        r = Math.floor(Math.random()*(255 + 1));
        g = Math.floor(Math.random()*(255 + 1));
        b = Math.floor(Math.random()*(255 + 1));
        rPer = r / 10;
        gPer = g / 10;
        bPer = b / 10;
    } else {
        r-= rPer;
        g-= gPer;
        b-= bPer;
    }
    
    return ["rgb(",r,",",g,",",b,")"].join("");
}