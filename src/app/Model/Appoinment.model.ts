import { User } from './../User.model';
import { DoctorSlot } from './DoctorSlot.model';
import { Prescription } from './Prescription.model';
import { PrescriptionReport } from './PrescriptionReport.model';
export class Appoinment{
    id: number;
    time: Date;
    status: string;
    fee: number;
    supermanFee: number;
    adminFee: number;
    doctorSlot: DoctorSlot;
    user: User;
    serialNumber: number;
    reports: PrescriptionReport[] = [];
    prescription: Prescription;
    patientName: string;
    patientMobileNumber: string;
    doctorName: string;
}