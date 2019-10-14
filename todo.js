var ul = document.getElementById("list");
var li;



var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem );

var removeButton = document.querySelector("#remove")
removeButton.addEventListener("click", removeItem)

var removeEveryButton = document.querySelector("#removeEverything")
removeEveryButton.addEventListener("click", function(){
    // console.log("button clicked")
    li = ul.children
    // console.log("the type of li is" + typeof(li))
    for(let i = 0; i < li.length; li.length) {
        ul.removeChild(li[i])
    }

})







function addItem() {
    var input = document.getElementById("input");
    var item = input.value;
    console.log(item)
    ul = document.getElementById("list")
    var textnode = document.createTextNode(item)

    if(item === "") {
        return false;
        // Add a p element and asssign a value of "enter your tood."

    }
    else {
        li = document.createElement("li")
        var checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.setAttribute("id", "check")

        var label = document.createElement("label")

        // add these elements on our web page!
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        

        setTimeout(()=>{
            li.className = "visual"

        },2)


        input.value = ""


    }
}
function removeItem() {
    li =ul.children
    // console.log(li)
    for (let index = 0; index < li.length; index ++) {
        
        

        while(li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
            

            


        }
        

       
        
    }
}
