function search(selector) {

    let deepestChildren = $(selector);
    let firstElement = $(selector).addClass('highlight')[0];
    let deepestElement = '';

    while (deepestChildren.length) {
        deepestChildren = deepestChildren.children();

        if(deepestChildren.length == 0){
            break;
        } else {
            deepestElement = deepestChildren[0];
        }
    }

    deepestElement = $(deepestElement);

    while (deepestElement && deepestElement !== firstElement) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }
}