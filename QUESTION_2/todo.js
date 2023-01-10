

window.onload = function(){
    var btn = document.getElementById("new");
    btn.onclick = add;

}

function add(){

    var todonew = document.getElementById("todonew").value;
    var todos = document.getElementById("todos");
    var todon = document.createTextNode(todonew);
    var newl = document.createElement("li");
    newl.appendChild(todon);
    todos.appendChild(newl);
}
function updatetodo(abc){
    var tget = abc.target;
    var list = abc.parentNode;
    abc.parentNode.replaceChild(tag);


}
function deletetodo(abc){
    var tget = abc.target;
    var list = abc.parentNode;
    abc.parentNode.removeChild(tag);


}

