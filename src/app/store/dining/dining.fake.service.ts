import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Donor } from "../../core/model/donor";
import { busch } from "../../core/model/dining-hall-constants";
import { DiningHall } from "../../core/model/dining-hall";

@Injectable( {
  providedIn: 'root'
})
export class DiningFakeServices {
  diningHalls: DiningHall[] = this.createDiningHalls();

  currentId : number = 101;

  constructor() {}

  createDiningHalls(): DiningHall[] {
    this.diningHalls = [busch];
    return this.diningHalls;
  }

  getAllDiningHalls(): Observable<DiningHall[]> {
    return of(this.diningHalls);
  }

  createDiningHall( diningHallToAdd: DiningHall): Observable<DiningHall> {
    diningHallToAdd.id = this.currentId;
    this.currentId += 1;
    this.diningHalls.push(diningHallToAdd);
    return of(diningHallToAdd);
  }
}
