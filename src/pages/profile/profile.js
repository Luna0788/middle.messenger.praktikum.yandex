import profile_tpl from './profile.hbs';

import './style.scss';

import avatar from '../../static/ava_big.png'

const user_info = {
    profile_foto_src: avatar,
    name: "Иван"
}

const page = profile_tpl(user_info);

export default page;