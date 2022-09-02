export interface ICarouselItem {
    title: string,
    imgUrl: string
}

export enum LinkStyles {
    scroll = 'scroll',
    router = 'router',
}

export interface ITeamMember {
    name: string,
    surname: string,
    role: string,
    imgUrl : string,
    text: string,
}
