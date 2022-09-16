
//Word-Counter
function count(){
    let str=document.getElementById('paragraph').value;
    const arr= str.split(' ');
    let size = arr.filter(word => word !==" ").length;
    document.getElementById('words').innerHTML="Total number of words are: "+ size;
}


//TO-DO list

var list=[];
var ul=document.getElementById("todoul");
var text = document.getElementById("text");
document.getElementById("todobtn").addEventListener("click",function(){
    list.push(text.value);
    text.value="";
    display();
})
    
function edititem(i){
    let newval=prompt("New entry");
    list.splice(i,1,newval);
    display();
}
function deleteitem(i){ 
    list.splice(i,1)
    display();
}

function display(){
    ul.innerHTML=""
    list.forEach(function(n,i){
        ul.innerHTML +="<li>"+n+"<a onclick='edititem()'>EDIT</a>"+"<a onclick='deleteitem("+i+")'>&times;</a></li>"
    })
}