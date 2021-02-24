import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {

  constructor() { }

  updateChamber(){
    console.log("This is working ...");
  }
}
