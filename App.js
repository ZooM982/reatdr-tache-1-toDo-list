var add = document.getElementById('addToDo');
var input = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');

add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
  
  const item_value  = input.value;
  const item = document.createElement('div');
		item.classList.add('item');

		const item_content = document.createElement('div');
		item_content.classList.add('content');

		item.appendChild(item_content);

		const input_item = document.createElement('input');
		input_item.classList.add('text');
		input_item.type = 'text';
		input_item.style.color='black';
        input_item.style.borderRadius='40px';
        input_item.style.textAlign='center';
        input_item.style.backgroundColor='#E5E8E8'
		input_item.value = item_value;
		input_item.setAttribute('readonly', 'readonly');
        input_item.addEventListener('dblclick', function(){
            input_item.style.textDecoration = "line-through";
        })
		item_content.appendChild(input_item);

		const item_action = document.createElement('div');
		item_action.classList.add('actions');
		
		const edit_item = document.createElement('button');
		edit_item.classList.add('edit','btn','btn-primary',);
		edit_item.type="button";
		edit_item.innerText = 'Edit';

		const delete_item = document.createElement('button');
		delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');

        const done_item = document.createElement('button');
		done_item.classList.add('terminer','btn','btn-success');
		done_item.type="button";
		done_item.innerText = 'Terminer';


		item_action.appendChild(edit_item);
		item_action.appendChild(delete_item);
        item_action.appendChild(done_item);

		item.appendChild(item_action);

		toDoContainer.appendChild(item);

		input.value = '';
        edit_item.addEventListener('click', (e) => {
			if (edit_item.innerText.toLowerCase() == "edit") {
				edit_item.innerText = "Save";
				input_item.removeAttribute("readonly");
				input_item.focus();
			} else {
				edit_item.innerText = "Edit";
				input_item.setAttribute("readonly", "readonly");
			}
		});

		delete_item.addEventListener('click', (e) => {
			toDoContainer.removeChild(item);
		});

        done_item.addEventListener('click', (e) => {
			if (done_item.innerText.toLowerCase() == "terminer") {
				input_item.style.textDecoration = 'line-through',
                input_item.style.color = 'green',
                input_item.style.fontSize = '23px',
                input_item.style.textAlign = 'left',
                input_item.style.backgroundColor = 'initial'
			}
		});
}