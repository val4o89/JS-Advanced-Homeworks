function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    let option = document.createElement('option');
    option.innerHTML = text;
    option.value = value;

    document.getElementById('menu').appendChild(option);

}

addItem();