var i=0;//keeping track of how many list items
function addtask(){
    document.getElementById("popup").classList.toggle("show");
}
function add(){
    
    const val=document.getElementById("input");
    // console.log("hi")
    if(val.value==""){alert("Enter something");

    return
} 
    //console.log(val)
    i++;
    const listItem=document.createElement("li");
    listItem.id=i;
    listItem.innerHTML=`<span>${val.value}</span>`;
    listItem.innerHTML+=`<button id="delete${i}" onclick="del(this)" class="delete">delete</button><button id="edit${i}" onclick="edit(this)" class="edit">Edit</button>`
    listItem.classList.add("li");
    //console.log(listItem.textContent)
    document.getElementById("list").appendChild(listItem);
    val.value="";
    document.getElementById("popup").classList.remove("show");

}


function del(button){
   //console.log(button.id)  
    const node = document.getElementById(button.id);
    const listnode=node.parentElement;
    listnode.remove();
    // const ulnode=listnode.parentNode;
    // ulnode.removeChild(listnode);
    
}


function edit(button){
    const node=document.getElementById(button.id);
    const listnode=node.parentElement;
    const textElement=listnode.querySelector("span");
    //console.log(textElement)
    const inputElement = document.createElement("input");
    inputElement.value = textElement.textContent;
    textElement.replaceWith(inputElement);
    inputElement.focus();
    
    const updated=document.createElement("span");
    updated.textContent=inputElement.value;
    console.log(updated.textContent)
    inputElement.replaceWith(updated)


    

}
