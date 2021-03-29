import {pref} from "./pref.model";

 export class Mission{
    nomMission:string
    adressMission:string
    dateMission:Date
    description:string
    commentaire:string
    prefMissionId:pref={
        id:''
    }
}