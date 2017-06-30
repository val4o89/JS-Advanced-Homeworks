function domSearch(selector, isSensitive) {

    let content = $(selector);

    let controls = $('<div>').addClass('add-controls');
    let controlLabel = $('<label>').text('Enter text: ');
    let inputText = $('<input>');
    let button = $('<a>').addClass('button').css('display', 'inline-block').text('Add').click(add);

    controlLabel.append(inputText);
    controls.append(controlLabel);
    controls.append(button);

    content.append(controls);

    let searchControls = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>').text('Search: ');
    let searchText = $('<input>').on('change paste keyup', function () {

        let word = $('label:contains("Search")>input').val();
        word = isSensitive ? word : word.toLowerCase();

        let itemsCollection = $('li strong');

        itemsCollection.each(function (i, element) {
            let elementText = $(element).text();

            if(!isSensitive){
                elementText = elementText.toLowerCase();
            }

            if(elementText.includes(word)){
                $(element).parent().css('display', 'block');
            } else {
                $(element).parent().css('display', 'none');
            }
        })
    });

    searchLabel.append(searchText);
    searchControls.append(searchLabel);
    content.append(searchControls);

    let results = $('<div>').addClass('result-controls');
    let list = $('<ul>').addClass('items-list');
    results.append(list);
    content.append(results);

    function add() {
        let listItem = $('<li>').addClass('list-item');
        let deleteButton = $('<a>').addClass('button').text('X').click(function () {
            listItem.css('display', 'none');
        });
        let strongElement = $('<strong>').text(inputText.val());
        inputText.val('');

        listItem.append(deleteButton);
        listItem.append(strongElement);
        list.append(listItem);
    }


}