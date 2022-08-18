import sign_in_tpl from './pages/sign_in/sign_in.hbs'
import sign_up_tpl from './pages/sign_up/sign_up.hbs'
import './components/button'
import './style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const path = window.location.pathname;
    switch (path) {
        case '/src/pages/sign_in':
            page = sign_in_tpl();
            break;
        case '/src/pages/sign_up':
            page = sign_up_tpl();
            break;
        default:
            page = sign_in_tpl();
            break;
    }
    main.innerHTML = page;
});