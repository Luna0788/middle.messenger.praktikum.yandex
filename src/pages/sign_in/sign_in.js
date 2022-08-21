import sign_in_tpl from './sign_in.hbs';
import {signin_data} from './data';

import './style.scss';

const page = sign_in_tpl(signin_data);

export default page;