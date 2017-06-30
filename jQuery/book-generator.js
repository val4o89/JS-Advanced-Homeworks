function createBook(selector, title, author, number) {

    let bookGenerator = (function () {

        let bookId = 1;

        return function (selector, title, author, number) {

            let div = $(selector);
            let bookContainer = $('<div>');
            bookContainer.attr('id', `book${bookId}`);

            let bookTitle = $('<p>').addClass('title').text(title);
            let bookAuthor = $('<p>').addClass('author').text(author);
            let bookIsbn = $('<p>').addClass('isbn').text(number);

            let selectBtn = $('<button>').text('Select').click(function () {
                bookContainer.css('border', '2px solid blue');
            });
            let deselectBtn = $('<button>').text('Deselect').click(function () {
                bookContainer.css('border', 'none');
            });

            bookContainer.append(bookTitle);
            bookContainer.append(bookAuthor);
            bookContainer.append(bookIsbn);
            bookContainer.append(selectBtn);
            bookContainer.append(deselectBtn);
            bookContainer.attr('id', `book${bookId}`);
            div.append(bookContainer);
            bookId++;
        }
    }())

    bookGenerator(selector, title, author, number);
}