function format(time) {
    var hours = Math.floor(time / 3600 );
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = (time % 3600)  % 60;

console.log( hours+':' +minutes+':'+seconds);
}
format(3700);