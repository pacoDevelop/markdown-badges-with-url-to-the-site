// Use in https://github.com/Ileriayo/markdown-badges in developers tools
var badgeName=[];

var i=0;
document.querySelectorAll("code").forEach((e)=>{
    if(i>6){
        let a=e.innerHTML.replace("!","").replace("(","").replace(")","").replace("]http","]: http");
    badgeName.push(a.slice(1,a.indexOf(']:')));
    console.log(e)
        
    }
    i++;
})
badgeName //Right click and copy the object
