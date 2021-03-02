import { Test } from './Test.model';
import { Medicine } from './Medicine.model';
import { User } from './../User.model';
export class Prescription{
    id: number;
    appoinmentId: number;
    referredTo: string;
    doctor: User;
    patient: User;
    medicines: Medicine[] = [];
    tests: Test[] = [];
}