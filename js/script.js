const isEmpty = (e) => {
    let email    = $('#email').val();
    let password = $('#password').val();
    
    if (email !='' && password !='') {
        btnSubmit(true);
    }else{
        btnSubmit(false);
    }

    if (password != '') {
        $('#showPassword').removeClass('d-none');
    }else{
        $('#showPassword').addClass('d-none');
    }
}

let showPass = false;
$('#showPassword').click(function () {
    if (showPass) {
        showPass = false;
        $('#showPassword').html('<i class="fa-solid fa-eye"></i>');
        $('#password').attr('type','password');
    }else{
        showPass = true;
        $('#showPassword').html('<i class="fa-solid fa-eye-slash"></i>');
        $('#password').attr('type','text');
    }
});

const btnSubmit = (value) => {
    if (value) {
        $('#btnSubmit').removeAttr('disabled');
    }else{
        $('#btnSubmit').attr('disabled', true);
    }
}

const Loading = (value) => {
    if (value) {
        btnSubmit(false);
        $('#textLogin').addClass('text-primary');
        $('.loader').removeClass('d-none');
    }else{
        btnSubmit(true);
        $('#textLogin').removeClass('text-primary');
        $('.loader').addClass('d-none');
    }
}

const alertMessage = (type, message) => {
    Swal.fire({
        icon: `${type}`,
        html: `${message}`,
        showConfirmButton: false,
        timer: 2400
    })
}

$('#loginForm').submit(function (e) {
    e.preventDefault();
    Loading(true);

    let email    = $('#email').val();
    let password = $('#password').val();
    if (email == 'user@email.com' && password == 'password') {
        setTimeout(function () {
            Loading(false);
            $('#loginForm').trigger('reset');
            $('#showPassword').addClass('d-none');
            alertMessage('success', 'Login success!');
        }, 2000);
    }else{
        setTimeout(function () {
            Loading(false);
            alertMessage('error', 'Login failed!');
        }, 2000);
    }
});