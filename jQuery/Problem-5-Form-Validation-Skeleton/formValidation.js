function validate() {

    let checkBox = $('#company').change(show);
    let isChecked;

    $('#submit').click(checkFields);
    
    let userNameField = $('#username');
    let emailField = $('#email')
    let passwordField = $('#password');
    let confirmPasswordField = $('#confirm-password');

    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let emailPattern = /^.*@.*[.]+.*$/;
    let passwordPattern = /^\w{5,15}$/;

    function show() {
        if(this.checked){
            $('#companyInfo').css('display', 'block');
            isChecked = true;
        } else {
            $('#companyInfo').css('display', 'none');
            isChecked = false;
        }
    }

    function checkFields() {
        let formPass = true;

        let passEquals = passwordField.val() == confirmPasswordField.val() ? true : false;

        if(!usernamePattern.test(userNameField.val())){
            userNameField.css('border-color', 'red');
            formPass = false;
        } else {
            userNameField.css('border-color', '');
        }

        if(!emailPattern.test(emailField.val())){
            emailField.css('border-color', 'red');
            formPass = false;
        } else {
            emailField.css('border-color', '');
        }

        if(!passwordPattern.test(passwordField.val())){
            passwordField.css('border-color', 'red');
            formPass = false;
        } else {
            passwordField.css('border-color', '');
        }

        if(!passwordPattern.test(confirmPasswordField.val()) || !passEquals){
            confirmPasswordField.css('border-color', 'red');
            formPass = false;
        } else {
            confirmPasswordField.css('border-color', '');
        }

        if(isChecked){
            let companyInfoElement = $('#companyNumber');
            let companyInfo = Number(companyInfoElement.val());

            if(!isNaN(companyInfo)){
                if(companyInfo < 1000 || companyInfo > 9999){
                    formPass = false;
                    companyInfoElement.css('border-color', 'red');
                } else {
                    companyInfoElement.css('border-color', '');
                }
            } else {
                formPass = false;
                companyInfoElement.css('border-color', 'red');
            }
        }

        if(formPass){
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
        event.preventDefault();
    }
}
