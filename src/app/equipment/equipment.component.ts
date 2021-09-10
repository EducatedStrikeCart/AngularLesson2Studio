import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})

export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;
  massBudget: number = this.maximumAllowedMass - this.cargoMass;

  constructor() { }

  ngOnInit() { }



  // Code your addItem function here:


  addItem(input: equipment): boolean {
    this.cargoHold.push(input);
    this.cargoMass += input.mass;
    return this.cargoMass < this.maximumAllowedMass + 200 || this.cargoMass < this.maximumAllowedMass - 200;
  }

  isAddItemDisabled(input:equipment) {
    return this.cargoHold.length === this.maxItems || input.mass + this.cargoMass > this.maximumAllowedMass;
  }

  isNearMaxMass() {
    return this.cargoMass > this.maximumAllowedMass - 300;
  }

  setHoldEmpty() {
    this.cargoHold = [];
    this.cargoMass = 0;
  }
}


interface equipment {
  name: string,
  mass: number
}