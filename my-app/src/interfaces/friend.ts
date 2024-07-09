import { Iuser } from "./Iuser";


export interface Ifriend {
    _id?:string|number,
   requester: Iuser,
   recipient:Iuser,
   status: string
}