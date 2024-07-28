export interface Ipost{
    _id?:string|number,
    author:{
        _id?: string|number,
        firstname:string,
        lastname:string,
        avatar:string,
        story:string,
     },
    content: string,
    images:string,
    likes:{
        length: number,
        _id?: string|number,
        firstname:string,
        lastname:string,
        avatar:string,
        story:string,
    }
    createdAt:string

}