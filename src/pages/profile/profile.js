import ProfileTpl from './profile.hbs';

import './style.scss';

import {profileData} from './data';

const page = ProfileTpl(profileData);

export default page;