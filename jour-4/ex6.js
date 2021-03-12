function format(time) {
    var hours = Math.floor(time*60);
    var minutes = time % 3600;
    var seconds = time % 60;

    if (hours < 10) {hours = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}    

    return hours+':' +minutes+':'+ ':'+seconds;
}
format(3700);