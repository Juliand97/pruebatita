let options=document.getElementById("navbar");
let clonenode=options.cloneNode(true);
clonenode.id="secondnavbar";
let secondmenu=document.getElementById("secondmenu").appendChild(clonenode) ;
function addSquareDivs(){
    let size=[{}];
    for (let index = 0; index < 6; index++) {
        size[index]=Math.round(Math.random() * (250 - 1) + 1);
    }
        
    let html="";
    let n=1;
    html+="<div style='width:100%; height:100px; display:flex;'>";
    for (const i in size) {
        html+="<div id='imgcontainer'style=' margin-top:10%; width:30%; height:"+size[i]+"px;'></div>";
        if(n==3){
            n=0;
            console.log(n);
            html+="</div>";
            html+="<div style=' width:100%; height:100px; margin-top:10%; display:flex;'>";
        }
        n++;
   }

    let containerSquare=document.getElementById("otherimg");
    containerSquare.innerHTML=html;

}
 addSquareDivs()