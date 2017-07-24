class Contact {
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    render(id){
        let article = $('<article>');

        let divInfo = $('<div>').addClass('info')
            .append($('<span>').text(`&phone; ${this.phone}`))
            .append($('<span>').text(`&#993; ${this.email}`)).css('display', 'none');

        this.divTitle = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`).prepend($('<button>').on('click', function () {
            if(divInfo.css('display') == 'none'){
                divInfo.css('display', 'block');
            } else if(divInfo.css('display') == 'block'){
                divInfo.css('display', 'none');
            }
        }));

        article.append(this.divTitle);
        article.append(divInfo);

        $(id).append(article);
    }

    set online(value){
        if(value == true){
            this.divTitle.addClass('online');
        } else if(value == false){
            this.divTitle.removeClass('online');
        }
    }
}