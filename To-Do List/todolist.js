function addTask(){
    
  var taskInput =  document.getElementById("taskInput").value
  var taskList =  document.getElementById("tasklist")  // Task list is ul
  if(taskInput==""){
    alert("Please Enter The Task")
    return
  }

  var listItem = document.createElement('li')
  listItem.innerText= taskInput
  taskList.append(listItem);

 var buttonContainer = document.createElement('div')
 listItem.append(buttonContainer);
 buttonContainer.className="task-button"  

 //Delete Button 
 var deleteButton = document.createElement('button')
 buttonContainer.append(deleteButton);
 deleteButton.innerText = "Delete"
 deleteButton.onclick=function(){
 taskList.removeChild(listItem);

 }
  // complete button
 var completeButton = document.createElement('button')
 buttonContainer.append(completeButton);
 completeButton.innerText = "Complete"
 completeButton.onclick = function(){
 listItem.classList.toggle('completed');
 
 }

 taskInput.value= "";
}
