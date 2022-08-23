import SignInTpl from './sign_in.hbs';
import {signinData} from './data';

import './style.scss';

const page = SignInTpl(signinData);

export default page;