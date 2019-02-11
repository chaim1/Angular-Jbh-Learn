import { ClassRoom } from './class-room.enum';

export interface Participant {
    id:number, 
    name: string, 
    classroom: ClassRoom
}