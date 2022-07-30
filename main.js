/*

//1. 
let span1 = document.querySelector('.mess-with-me');
span1.style.fontSize = '40px';

let paraMessWithMe = document.querySelector('p.mess-with-me');
paraMessWithMe.style.backgroundColor = 'green';

let hideDino = document.querySelector('#hide-me');
hideDino.style.display = 'none';

let triDino = document.querySelector('#triceratops');
triDino.style.width = '324px'

//1.


// let colorArr = ['green', 'blue', 'orange', 'yellow', 'red', 'grey', 'turquoise']


span1.addEventListener('mouseenter', function(){
    span1.style.color = 'purple'
})

span1.addEventListener('mouseleave', function(){
    if(span1.style.color !== 'black'){
        span1.style.color = 'turquoise'
        span1.style.fontSize = '100px'
    }
})

span1.addEventListener('click', function(){
    span1.style.color = 'black';
    span1.style.fontSize = '40px';
})


*/


//Warmup Challenges

//1.
let span1 = document.querySelector('.mess-with-me');
span1.style.fontSize = '40px';

//2.
//to get a tag with a specific class do 'tagName.className'
let paraMessWithMe = document.querySelector('p.mess-with-me');
paraMessWithMe.style.backgroundColor = 'green';

//3.
let hideDino = document.querySelector('#hide-me');
hideDino.style.display = 'none';

//4.
let triDino = document.querySelector('#triceratops');
triDino.style.width = '324px';

//Event Listener Challenges

//1.
span1.addEventListener('click', function(){
    span1.style.color = 'orange';
})

//2.
triDino.addEventListener('click', function(){
    triDino.style.border = '2px solid red'; //border requires you to use __px solid color
})

//3.
let feathered = document.querySelector('#feathers');
feathered.addEventListener('click', function(){
    feathered.style.opacity = '0.5'
})

//4.
let backgroundButton = document.querySelector('#toggle');
let rowDino = document.querySelector('#row');


backgroundButton.addEventListener('click', function(){
    if(rowDino.style.backgroundColor === ''){
        rowDino.style.backgroundColor = 'orange';
    
    } else {
        rowDino.style.backgroundColor = '';
    }
////==========================================  
    // if(rowDino.style.backgroundColor !== 'orange'){
    //     rowDino.style.backgroundColor = 'orange';
    
    // } else {
    //     rowDino.style.backgroundColor = '';
    // }


})

//5.
let biggify = document.querySelector('#biggify')

biggify.addEventListener('mouseenter', function(){
    biggify.style.width = '200px';
})

biggify.addEventListener('mouseleave', function(){
    biggify.style.width = '162px';
})
