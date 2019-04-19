let list = document.getElementById('mylist');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');

function addItem(text){
    let item = document.createElement('li');
    item.addEventListener('click', function(){
        item.classList.toggle('checked');

        
    });
    let textEl = document.createTextNode(text);
    item.appendChild(textEl);
    list.appendChild(item);
    taskInput.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            addBtn.click();
        }
    });


    let removeEl = document.createElement('span');
    let removeElText = document.createTextNode('\u00D7');
    removeEl.appendChild(removeElText);
    removeEl.className = 'remove';
    removeEl.addEventListener('click', function(){
        list.removeChild(item);
    });
    item.appendChild(removeEl);
}
    


window.addEventListener('DOMContentLoaded', function(event){
    addBtn.addEventListener('click', function(){
        console.log('Button has been clicked');
        //add item('')
        if (taskInput.value !== ''){
            addItem(taskInput.value);
        }
        taskInput.value = '';
    });
    addItem('Hit the gym');
    addItem('bring matte kharta');
   

});

