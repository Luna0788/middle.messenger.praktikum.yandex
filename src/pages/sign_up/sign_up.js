import SignUpTpl from './sign_up.hbs';
import {signupData as data} from './data';

import './style.scss';

const page = SignUpTpl(data);

export default page;