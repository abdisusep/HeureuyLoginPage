$(document).ready(function () {
    AOS.init();
    $('#btnLogin').prop('disabled', true);

    let email = '';
    let password = '';
    
    $('#email').keyup(function() {
        email = $(this).val();
        checkInput();
    });

    $('#password').keyup(function () {
        password = $(this).val();
        password.length > 0 
        ? $('#showPassword').removeClass('d-none') 
        : $('#showPassword').addClass('d-none');
        checkInput();
    });

    const checkInput = () => {
        (email != '' && password != '') 
        ? $('#btnLogin').prop('disabled', false) 
        : $('#btnLogin').prop('disabled', true);
    }

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        
        $('#btnLogin').prop('disabled', true);
        loading(true);
        
        if (email == 'user@email.com' && password == 'password') {
            setTimeout(function () {
                loading(false);
                $('#loginForm')[0].reset();
                alertMessage('success', 'Login success!');
            }, 2000);
        }else{
            setTimeout(function () {
                loading(false);
                $('#btnLogin').prop('disabled', false);
                alertMessage('error', 'Login failed!');
            }, 2000);
        }
    });

    let showPass = false;
    $('#showPassword').html('<i class="fa-solid fa-eye"></i>');
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

    const loading = (status) => {
        if (status) {
            $('#textLogin').addClass('opacity-0');
            $('#spinLogin').removeClass('d-none');
        }else{
            $('#textLogin').removeClass('opacity-0');
            $('#spinLogin').addClass('d-none');
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
});