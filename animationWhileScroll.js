/*
  .::Animation While Scroll By Ali Rahimi::.



This animations are baesd as Transform.
Do not use this while you are using transform.

how to use:
1) Add this script to your document
    <script src="animationWhileScroll.js"></script>
2) Add 's-anim' class and 'data-anim-type' attribute to your element 
    <div class="s-anim" data-anim-type="fade-in"></div>
--Choose one of these types:    
Types: fade-in,fade-out,trans-left,trans-up,trans-right,trans-down,buzz
*/


// >>vars
var offY = 30; //Percent of Height of the Page.
var transTime = 1.2; //Time is per seconds (float allowed).
var movementOffset = 105; //Transform offset per pixels.
// >>Styles
var a_style = document.createElement('style');
a_style.type = 'text/css';
a_style.innerHTML = '.a-fade-in{opacity:0;transition:all ' + transTime + 's}.a-fade-in-show{opacity:1}.a-fade-out{opacity:1;transition:all ' + transTime + 's}.a-fade-out-show{opacity:0}.a-t-right{opacity:0;transform:translateX(-' + movementOffset + 'px);transition:all ' + transTime + 's}.a-t-right-show{opacity:1;transform:translateX(0)}.a-t-left{opacity:0;transform:translateX(' + movementOffset + 'px);transition:all ' + transTime + 's}.a-t-left-show{opacity:1;transform:translateX(0)}.a-t-up{opacity:0;transform:translateY(' + movementOffset + 'px);transition:all ' + transTime + 's}.a-t-up-show{opacity:1;transform:translateY(0)}.a-t-down{opacity:0;transform:translateY(-' + movementOffset + 'px);transition:all ' + transTime + 's}.a-t-down-show{opacity:1;transform:translateY(0)}.a-buzz-show{transform-origin:center bottom;transform:rotate(0);animation:a-buzz-keyframes 1s linear}@keyframes a-buzz-keyframes{6%,31.2%,56.4%,81.6%{transform:rotate(-5deg)}18.6%,43.8%,69%,94%{transform:rotate(5deg)}}';
document.getElementsByTagName('head')[0].appendChild(a_style);
// >>Preparing
var items = document.getElementsByClassName('s-anim');
offY = (innerHeight / 100) * offY;
for (i = 0; i < items.length; i++) {
    if (items[i].getAttribute('data-anim-type') == 'fade-in') {
        items[i].classList.add('a-fade-in');
    } else if (items[i].getAttribute('data-anim-type') == 'fade-out') {
        items[i].classList.add('a-fade-out');
    } else if (items[i].getAttribute('data-anim-type') == 'trans-left') {
        items[i].classList.add('a-t-left');
    } else if (items[i].getAttribute('data-anim-type') == 'trans-up') {
        items[i].classList.add('a-t-up');
    } else if (items[i].getAttribute('data-anim-type') == 'trans-right') {
        items[i].classList.add('a-t-right');
    } else if (items[i].getAttribute('data-anim-type') == 'trans-down') {
        items[i].classList.add('a-t-down');
    } else if (items[i].getAttribute('data-anim-type') == 'buzz') {
        items[i].classList.add('a-buzz');
    }
}
// >> Function
function animationWhileScroll() {
    for (i = 0; i < items.length; i++) {
        if (items[i].getBoundingClientRect().top + offY < innerHeight) {
            if (items[i].getAttribute('data-anim-type') == 'fade-in') {
                items[i].classList.add('a-fade-in-show');
            } else if (items[i].getAttribute('data-anim-type') == 'fade-out') {
                items[i].classList.add('a-fade-out-show');
            } else if (items[i].getAttribute('data-anim-type') == 'trans-left') {
                items[i].classList.add('a-t-left-show');
            } else if (items[i].getAttribute('data-anim-type') == 'trans-up') {
                items[i].classList.add('a-t-up-show');
            } else if (items[i].getAttribute('data-anim-type') == 'trans-right') {
                items[i].classList.add('a-t-right-show');
            } else if (items[i].getAttribute('data-anim-type') == 'trans-down') {
                items[i].classList.add('a-t-down-show');
            } else if (items[i].getAttribute('data-anim-type') == 'buzz') {
                items[i].classList.add('a-buzz-show');
            } //Add Extra transitions here...
        }
    }
}


// >>Events
window.addEventListener('scroll', () => {
    animationWhileScroll();
});
