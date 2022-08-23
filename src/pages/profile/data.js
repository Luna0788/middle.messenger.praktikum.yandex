import avatar from '../../static/ava_big.png';

export const profileData = {
    profile_foto_src: avatar,
    name: "Иван",
    profile_fields:[
        {
            name: "email",
            label: "Почта",
            type: "email",
            value: "pochta@yandex.ru"
        },
        {
            name: "login",
            label: "Логин",
            type: "text",
            value: "ivanivanov"
        },
        {
            name: "first_name",
            label: "Имя",
            type: "text",
            value: "Иван"
        },
        {
            name: "second_name",
            label: "Фамилия",
            type: "text",
            value: "Иванов"
        },
        {
            name: "display_name",
            label: "Имя в чате",
            type: "text",
            value: "Иван"
        },
        {
            name: "phone",
            label: "Телефон",
            type: "tel",
            value: "+7 (909) 967 30 30"
        }
    ]
};