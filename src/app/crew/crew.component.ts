import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  photoSource: string = "";
  photoVisible: boolean = false;

  candidates: object[] = [
    { name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg' },
    { name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg' },
    { name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg' },
    { name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg' },
    { name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg' },
    { name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg' },
    { name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg' }
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  isInCrew(input) {
    return this.crew.filter(e => e.name === input.name).length > 0
  }

  isCrewFull() {
    return this.crew.length >= 3;
  }

  addCrewMember(astronaut) {
    if (!(this.isInCrew(astronaut))) {
      if (this.crew.length < 3) {
        this.crew.push(astronaut);
      }
    } else {
      this.crew.splice(this.crew.indexOf(astronaut), 1);
    }
  }

  makePhotoVis(astronaut?) {
    this.photoSource = astronaut.photo;
    this.photoVisible = true;
  }
}
