import { ChamberService } from './../Services/chamber.service';
import { User } from "../User.model";
import { Chamber } from './Chamber.model';

export class DoctorSlot{
    id: number;
    name: string;
    startTime: Date;
    endTime: Date;
    fees: number;
    maximumNumberOfAppoinment: number;
    user: User;
    chamber: Chamber;
    
}