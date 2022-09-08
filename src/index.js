function manageResponsiveNavbar () {
    const btnOpenNavbar = document.querySelector('.header__menu');
    const navbar = document.querySelector('.header__navbar');
    const btnCloseNavbar = document.querySelector('.navbar__close');
    const navbarMask = document.querySelector('.mask');
    const dashboardcart = document.getElementById('dashboard-cart');

    btnOpenNavbar.addEventListener('click', () => {
        navbar.classList.toggle('header__navbar--active');
        navbarMask.classList.add('mask--active');
    })

    btnCloseNavbar.addEventListener('click', () => {
        navbar.classList.remove('header__navbar--active');
        navbarMask.classList.remove('mask--active');
    })

    navbarMask.addEventListener('click', () => {
        navbar.classList.remove('header__navbar--active');
        navbarMask.classList.remove('mask--active');
    })
}

function manageProductCart () {
    const btnRemoveCounter = document.getElementById('remove-cart');
    const btnAddCounter = document.getElementById('add-cart');
    const counterCart = document.getElementById('counter-cart');
    const btnAddToCart = document.getElementById('btn-add-to-cart');
    const cartNotification = document.getElementById('cart-notification');

    let counter = parseInt(counterCart.innerHTML);

    btnAddCounter.addEventListener('click', () => {
        counterCart.innerHTML = counter += 1
    })

    btnRemoveCounter.addEventListener('click', () => {
        if (counterCart.innerHTML <= 0) return
        counterCart.innerHTML = counter -= 1;
    })

    btnAddToCart.addEventListener('click', () => {
        if (counterCart.innerHTML == 0) return
        cartNotification.classList.add('cart-notification--active');
        cartNotification.innerHTML = counter;
    })
}

function displayCartDashboard () {
    const cart = document.querySelector('.user__cart')
    const dashboardCart = document.querySelector('.dashboard__cart')

    cart.addEventListener('click', () => {
        dashboardCart.classList.toggle('dashboard__cart--active');
    })
}

manageResponsiveNavbar();
manageProductCart();
displayCartDashboard();