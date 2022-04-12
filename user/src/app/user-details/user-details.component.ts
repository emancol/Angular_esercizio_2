import { Component, OnInit } from '@angular/core';
import { User, Address, Role, Gender } from '../models/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User[] = [{
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies:  [
        {
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
    ],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getApiCat(par?: string):string{
    return 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg';
  }
  
  
  getImgTitle(par?: string):string{
    return 'Ciao Bernard, cosa ne pensi della Brexit?';
  }
}
