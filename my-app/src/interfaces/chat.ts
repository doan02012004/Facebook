import { Iuser } from "./Iuser";

export interface Ichat {
    _id?:string|number,
    members: Iuser[],
}