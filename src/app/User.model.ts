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
}