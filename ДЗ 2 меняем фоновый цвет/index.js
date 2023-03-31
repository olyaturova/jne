const colorArray = ["#A03C78", "#ED8E7C", "#CDF3A2", "#93D9A3", "#7C83FD", "#D9DD6B", "#7DEDFF", "#F08FC0" ];
 setInterval(colorChange,1000);

let i = 0;

function colorChange(){
document.body.style.backgroundColor = colorArray[i];
i++;
if (i>=colorArray.length){
    i=0;
}
}

