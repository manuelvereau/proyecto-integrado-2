const users = JSON.parse(localStorage.getItem("users")) || [];
const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const email = loginForm.elements.email.value;
    const password = evt.target.elements.password.value;

    const user = users.find((usr) => {

        if(usr.email.toLowerCase() === email.toLowerCase()) {
            return true
        }

        return false
    })

    if(!user || user.password !== password) {
        Swal.fire({
            icon: 'error',
            title: 'Login Incorrecto',
            text: 'Alguno de los datos ingresados no es correcto',
            timer: 2000
        })
        return;
    }

    delete user.password;
    
    localStorage.setItem("currentUser", JSON.stringify(user))

    Swal.fire({
        icon: 'success',
        title: 'Login Correcto!',
        text: 'Será redireccionado en un momento'
    })

    console.log('Iniciando timeout')

    setTimeout(function(){

        window.location.href = '/index.html'
    }, 
    2500)

})