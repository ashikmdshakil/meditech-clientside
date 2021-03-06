import { Medicine } from './Medicine.model';
import { Prescription } from './Prescription.model';
export class MedicineScedule{
    id: number;
    morning: number;
    day: number;
    night: number;
    days: number;
    medicine: Medicine;
    prescription: Prescription;
}