import { Classroom } from '../classroom.enum';
export interface EventModul {
    id: number;
    name: string;
    date: Date;
    duration: number;
    classes: Classroom[];
}