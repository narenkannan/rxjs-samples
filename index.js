console.log('welcome  to rxjs programming!');

document.addEventListener('DOMContentLoaded', function () {
    var click = 0;
    var button = document.querySelector('button');
    Rx.Observable.fromEvent(button,'click').subscribe(function(){
         click++;
        console.log('Clicked!'+ click);
    })
})
