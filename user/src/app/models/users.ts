export interface Address {
    city: string;
    street: string;
    postalCode: string;
}
export enum Role {
    staff = 'STAFF',
    student = 'STUDENT',
    manager = 'MANAGER',
    admin = 'ADMIN',
}


export interface Companies {

    id: number;
    name: string;
    description: string;
    location: {
        city: string;
        street: string;
        postalCode: string
    };
}

export enum Gender {
    male = 'MALE',
    female = 'FEMALE',
    other = 'OTHER',
}

export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
}
