function printText(id, sentence, speed) 
{
    var index = 0,
        timer = setInterval(function() {
        var char = sentence.charAt(index);
        if(char === '<') index= sentence.indexOf('>',index);
        document.getElementById(id).innerHTML= sentence.substr(0,index);
        if(++index === sentence.length){
        clearInterval(timer);
        }
    }, speed);
}


// printText
// (
//     "name",
//     "<span>MIGUEL ALEJANDRO GRAY FORTUNA</span>",
//     100
// );

// printText
// (
//     "role",
//     "<span>JUNIOR FRONT END DEVELOPER</span>",
//     70
// );

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function backWhite(){
    document.getElementById("guidonLogo").
}