import { Appoinment } from './Appoinment.model';
import { User } from './../User.model';
export class PrescriptionReport{
    id: number;
    image: File;
    imageUrl: any;
    appoinment: Appoinment;
}