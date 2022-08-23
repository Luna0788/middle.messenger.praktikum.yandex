import ErrorTpl from './error.hbs';

import './style.scss';

const page = (typeError, message) => ErrorTpl({
    error_type: typeError,
    error_message: message
});

export default page;