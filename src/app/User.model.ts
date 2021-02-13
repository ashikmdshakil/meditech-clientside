import { Speciality } from './Model/Speciality.model';
import { Degree } from './Model/Degree.model';
import { Categories } from './Model/Categories.model';
import { UserAvatar } from './UserAvatar.model';
import { AddressBook } from './AddressBook.model';
import { Role } from './Role.model';
export class User{
    userId: number;
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    roles: Role;
    addressBooks: AddressBook;
    userAvatar: UserAvatar;
    account: Account[] = [];
    categories: Categories[] = [];
    degree: Degree;
    speciality: Speciality;
}