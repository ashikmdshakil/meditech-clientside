import { User } from './../User.model';
export class Prescription{
    id: number;
    medicine: string;
    test: string;
    doctorName: string;
    referredTo: string;
    user: User;
}