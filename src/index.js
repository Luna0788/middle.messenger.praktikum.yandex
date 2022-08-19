import SignInPage from './pages/sign_in/sign_in';
import SignUpPage from './pages/sign_up/sign_up';
import ErrorPage from './pages/error/error'
import ChatPage from './pages/chat/chat'
import './style.scss';

window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const path = window.location.pathname;
    console.log("Path:" + path);
    switch (path) {
        case '/sign_in':
            page = SignInPage;
            break;
        case '/sign_up':
            page = SignUpPage;
            break;
        case '/404':
            page = ErrorPage("404", "Не туда попали");
            break;
        case '/500':
            page = ErrorPage("500", "Мы уже фиксим");
            break;
        case '/chat':
            page = ChatPage;
            break;   
        default:
            page = ErrorPage("404", "Страница не найдена");
            break;
    }
    main.innerHTML = page;
});