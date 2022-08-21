import error_tpl from './error.hbs';

import './style.scss';

const page = (type_error, message) => error_tpl({
    error_type: type_error,
    error_message: message
});

export default page;