import { Prescription } from './Prescription.model';
import { User } from "../User.model";

export class Medicine{
    id: number;
    medicineName: string;
    prescriptions: Prescription[] = [];
}