import { Participant } from './Participant.modul';

export interface EventModule {
    id: number, 
    dateStart: Date, 
    duration: number, 
    participants: Participant[]
}