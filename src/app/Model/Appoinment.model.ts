import { User } from './../User.model';
import { DoctorSlot } from './DoctorSlot.model';
export class Appoinment{
    id: number;
    time: Date;
    status: string;
    doctorSlot: DoctorSlot;
    user: User;
}