class TitleBar {
    constructor(title){
        this.spanTitle = $('<span>').addClass('title').text(title);
        this.header = $('<header>').addClass('header');
        this.headerRow = $('<div>').addClass('header-row');
        this.drawer = $('<div>').addClass('drawer').css('display', 'none');
        this.button = $('<a>').addClass('button').html('&#9776;');
        this.navBar = $('<nav>').addClass('menu')
    }

    addLink(href, name){
        let link = $('<a>').attr('href', href).addClass('menu-link').text(name);
        this.navBar.append(link);
    }

    appendTo(selector) {
        let drawer = this.drawer;
        this.button.on('click', function () {
            if(drawer.css('display') == 'none'){
                drawer.css('display', 'block');
            } else {
                drawer.css('display', 'none');
            }
        });
        this.drawer.append(this.navBar);
        this.headerRow.append(this.button);
        this.headerRow.append(this.spanTitle);
        this.header.append(this.headerRow);
        this.header.append(this.drawer);
        $(selector).append(this.header);
    }
}