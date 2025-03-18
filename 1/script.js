var noCount = 0;

function no() {
    switch(noCount) {
        case 0:
        window.alert("Tem certeza?")
            break;
        case 1:
        window.alert("Certeza mesmo? vou te dar mais uma chance.")
            break;
        case 2:
            document.getElementById("noBnt").style.display = "block";
            document.getElementById("noBnt").style.border = "1px solid rgb(0,0,0)";
            document.getElementById("noBnt").style.width = "5%";
            document.getElementById("falseBnt").style.display = "none";
            break;
    }


    noCount++;
}


function moveButton(x) {

    if(noCount == 3){

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const left = Math.floor(Math.random() * (screenWidth - x.offsetWidth));
    const top = Math.floor(Math.random() * (screenHeight - x.offsetHeight));

    x.style.top = top + 'px';
    x.style.left = left + 'px';

     };
}