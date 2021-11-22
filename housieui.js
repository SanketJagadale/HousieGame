function chart(){
    var button= "";
    for (var i=1;i<91;i++){
        button+="<button id='"+i+"'>"+i+"</button>";
        
    }
    return button;
}

/* function chart(){
    document.write("<table>")
    for(var i=1;i<90;i=i+10){
        document.write("<tr>")
        for (j=i;j<i+10;j++){
            document.write("<td>"+ j +"</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
    //document.getElementById("buttons").innerHTML=chart();
} */

document.getElementById("buttons").innerHTML=chart();
document.getElementById("buttons").style.marginRight="370px";
document.getElementById("buttons").style.marginLeft="250px";

var arr=[];
function start()
    {
    var num = Math.floor(Math.random()*90+1);
    
    for (var i=0;i<arr.length;i++){
        if(num == arr[i]){
            num = Math.floor(Math.random()*90+1);
            i = 0;
        }
    }

    document.getElementById("number").innerHTML=num;
    document.getElementById("number").style.fontSize="120px";
    document.getElementById(num).style.backgroundColor="lightseagreen";
    
    if(arr.length == 90){
        alert('Game over !!!!'); //This msg is alert when last number is generated
        location.reload();  //reset
    }
    arr.push(num);
}