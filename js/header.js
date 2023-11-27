const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('header-user');

// #Hay que evaluar si tenemos un usuario logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"))

if(loguedUser) {
    //Tengo un usuario logueado<a href="/pages/admin/user-admin.html" class="header-link">User admin</a>
    //-CHECKEAR SI EL USUARIO ES ADMIN
    if(loguedUser.role === 'ADMIN') {
        //Pintar los botones de admin
        const adminUserLink = document.createElement("a") //<a></a>
        adminUserLink.href = '/pages/User-admin/user-admin.html'
        adminUserLink.innerText = 'User admin'
        adminUserLink.classList.add('header-link', 'otra-clase');
        headerNav.appendChild(adminUserLink)

        const productAdminLink = document.createElement("a") //<a></a>
        productAdminLink.href = '/pages/product-admin/product-admin.html'
        productAdminLink.innerText = 'Product admin'
        productAdminLink.classList.add('header-link');
        headerNav.appendChild(productAdminLink)

    }

    const userNameHTML = userInfoHeader.querySelector('.user-name')

    userNameHTML.innerText = loguedUser.fullname

    const userImg = document.createElement('img')
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-profile-picure')

    userInfoHeader.appendChild(userImg)

//     // -LOGOUT ACTION BUTTON
    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('header-link')
    logoutButton.innerText = 'Logout'

    logoutButton.onclick = function() {

        localStorage.removeItem("currentUser");
        window.location.href = '/index.html'

    }

    userActionHTML.append(logoutButton)

} else {
    //No tengo un user logueado
    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const loginLink = document.createElement("a")
    loginLink.href = '/pages/login/login.html';
    loginLink.innerText = "Login";
    loginLink.classList.add('header-link')

    userActionHTML.appendChild(loginLink)
}