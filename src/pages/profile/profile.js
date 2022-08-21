import profile_tpl from './profile.hbs';

import './style.scss';

import {profile_data} from './data';

const page = profile_tpl(profile_data);

export default page;