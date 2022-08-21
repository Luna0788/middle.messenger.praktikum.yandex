import profile_tpl from './profile.hbs';

import './style.scss';

import avatar from '../../static/ava.png'

const data = {
    chat_list: [
        {
            id: "1",
            avatar_src: "https://pps.whatsapp.net/v/t61.24694-24/227606097_1225481874604217_1628161383089212568_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwrqvtpqcR31Y4fiYdwsuHeSS-HeK5ruO8yDOd5j1gO_g&oe=63111631",
            sender_name: "Андрей",
            last_date_time: "10:49",
            message_slice: "Изображение",
            unread_count: "256"
        },
        {
            id: "2",
            avatar_src: avatar,
            sender_name: "Андрей",
            last_date_time: "10:49",
            message_slice: "И Human Interface Guidelines и Material Design рекомендуют...",
            unread_count: "20"
        },
        {
            id: "3",
            avatar_src: avatar,
            sender_name: "Андрей",
            last_date_time: "10:49",
            message_slice: "И Human Interface Guidelines и Material Design рекомендуют...",
            unread_count: "2"
        }
    ]
};

const page = profile_tpl(data);

export default page;