import { User } from './../User.model';
import { DoctorSlot } from './DoctorSlot.model';
import { Prescription } from './Prescription.model';
import { PrescriptionReport } from './PrescriptionReport.model';
export class Appoinment{
    id: number;
    time: Date;
    status: string;
    doctorSlot: DoctorSlot;
    user: User;
    serialNumber: number;
    reports: PrescriptionReport[] = [];
    prescription: Prescription;
}