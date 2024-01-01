var ul = document.getElementById('result')
  var selectedCount=0;


function getTodos(){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var url = "https://jsonplaceholder.typicode.com/todos"
    xhr.open('GET',url,true)

    xhr.onload = function()
    {
      console.log(xhr.response);

      xhr.response.forEach(todo => {

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
      

        var label = document.createElement('label');
        label.textContent = todo.title;

        var listItem = document.createElement('li');
        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        ul.appendChild(listItem);
        



        checkbox.addEventListener("change", function() {
          handleCheckboxChange(checkbox);
          
      });
  
      

        // ul.append(`
        // <li>${todo.title}</li>
        // `)
      });
    };

    //send the request
    xhr.send()
  }
  function handleCheckboxChange(checkbox) {
    if (checkbox.checked) {
      selectedCount++;
      if (selectedCount === 5) {
       alert("Congrats! 5 tasks have been successfully completed");

      }
    } else {
      selectedCount--;
    }
  }
  getTodos();
