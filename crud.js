var form = document.getElementById("addForm");
var itemList =  document.getElementById("items");
var editList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit",addItem);




//delete event
itemList.addEventListener("click",removeItem);


//Filter event
filter.addEventListener("keyup",filterItems);



// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById("item").value;
    var newItem1 = document.getElementById("description").value;

    // Create li
    var li = document.createElement("li");
   
  
    
    //Add class
    li.className = "list-group-item";
   
   
        
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem1));
    
            
    // Create delete button
    var deleteBtn = document.createElement("button");  
    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //Adding button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li)

    //Create edit button
    var editBtn = document.createElement("button");
    //Add classes to edit button
    editBtn.className = "btn btn-sm float-right edit";
    //Add text node to edit
    editBtn.appendChild(document.createTextNode("EDIT"));
    //Adding edit to li
    li.appendChild(editBtn);
    //Append li to list
    editList.appendChild(li);

}

   

// Remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    
    }
}

//Filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName("li");
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent
        //var itemName = item.secondChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}

function store(){
    //retrieving data
    var textbox = document.getElementById("item").value;
    var textbox1 = document.getElementById("description").value;

    //store in local storage
    var user = localStorage.setItem('textbox',textbox);
    var user1 = localStorage.setItem('textbox1',textbox1);
}
