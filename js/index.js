// function printBasicInfo(id, sentence, speed) 
// {
//     var index = 0,
//         timer = setInterval(function() {
//         var char= sentence.charAt(index);
//         if(char === '<') index= sentence.indexOf('>',index);
//         document.getElementById(id).innerHTML= sentence.substr(0,index);
//         if(++index === sentence.length){
//         clearInterval(timer);
//         }
//     }, speed);
// }


// printBasicInfo
// (
//     "basicInfo",
//     "<p>My name is <span>Miguel Fortuna</span>. I just graduated from the Ateneo de Manila University and I love designing and developing responsive web pages.</p>",
//     60
// );
