import { Injectable } from '@angular/core';
import { Prescription } from '../Model/Prescription.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionTransferService {
  prescription: any;

  constructor() { }

  setPrescription(prescription: Prescription){
    this.prescription = prescription;
  }
}
