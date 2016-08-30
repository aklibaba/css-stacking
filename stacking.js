// (function () {
    var divs = document.getElementsByClassName('pos-abs');
    var leftPos = 0;
    var topPos = 0;
    var percent = 0.3;

    for (var i = 0; i < divs.length; i++) {

        divs[i].style.left = leftPos + 'px';
        divs[i].style.top = topPos + 'px';

        leftPos += percent * (divs[i].offsetWidth); 
        topPos += percent * (divs[i].offsetHeight); 
    }
// })();