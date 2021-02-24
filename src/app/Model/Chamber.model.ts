import { DoctorSlot } from './DoctorSlot.model';
import { DoctorSlotService } from './../Services/doctor-slot.service';
import { User } from './../User.model';
export class Chamber{
    id: number;
    name: string;
    adress: string;
    user: User;
    doctorSlots: DoctorSlot[] = [];
}