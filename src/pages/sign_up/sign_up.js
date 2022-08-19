import sign_up_tpl from './sign_up.hbs';
import {signup_data as data} from './data';
import '../../components/button';
import '../../components/input';
import '../../components/Link';
import './style.scss';

const page = sign_up_tpl(data);

export default page;