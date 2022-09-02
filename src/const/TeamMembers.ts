import {ITeamMember} from '../types/Types'

export const TeamMembers: ITeamMember[] = [
    {
        name: 'Дмитрий',
        surname: 'Затекин',
        role: 'Капитан команды',
        imgUrl : `${process.env.PUBLIC_URL}/assets/team/kitten.jpeg`,
        text: 'abobaa bobaab ob aabo ba abaa bobab ofb aabo ba',
    },
    {
        name: 'Екатерина',
        surname: 'Гаврилина',
        role: 'Руководитель команды',
        imgUrl : `${process.env.PUBLIC_URL}/assets/team/kitten.jpeg`,
        text: 'abobaa bobaab ob aabo ba',
    },
    {
        name: 'Григорий',
        surname: 'Старых',
        role: 'Главный программист',
        imgUrl : `${process.env.PUBLIC_URL}/assets/team/kitten.jpeg`,
        text: 'abobaa bobaab ob aabo ba',
    },
    {
        name: 'Никита',
        surname: 'Михненко',
        role: 'Главный конструктор',
        imgUrl : `${process.env.PUBLIC_URL}/assets/team/kitten.jpeg`,
        text: 'abobaabobaabobaaboba',
    }
]
