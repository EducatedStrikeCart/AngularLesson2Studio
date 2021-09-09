import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  // add editing rocket
  editingRocket: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  //add updateRocket; copy of updateMission, changing missionName and editingMission to rocket variables
  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }


}
