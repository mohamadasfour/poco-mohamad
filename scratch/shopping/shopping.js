document.querySelector('button').addEventListener('click', function(ev){

   let item = document.getElementById('item');
   if(item.value !==''){
    document.querySelector('ul').appendChild(createNewLisItem(item.value));
   }else{
       alert('please insert item to add');
   }



   item.value = "";
item.focus();
    /*
    this is another way to slove
    (let inputBox = document.getElementById('item');
    console.log(inputBox.value);)
    */
});

function createNewLisItem(itemName){
    let li = document.createElement('li'),
     span = document.createElement('span'),
     space = document.createTextNode(' '),
     button = document.createElement('button');

     span.innerText = itemName;
     button.innerText = 'Delete';
    //  Add a click handler that logs the click here 
    button.addEventListener('click', function(event){
    console.log('button is click');
    document.querySelector('ul').removeChild(li);

       

    });


     li.appendChild(span);
     li.appendChild(space);
     li.appendChild(button);
    
return li;
}

document.getElementById('item').addEventListener('keyup', function(event){
    if(event.keyCode === '13'){
       but.click();
       
    }
});

document.getElementById('item').focus();

