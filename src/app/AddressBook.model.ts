import { User } from './User.model';
export class AddressBook{
    AddressId: number;
    street1: string;
    street2: string;
    street3: string;
    city: string;
    zip: string;
    country: string;
    user: User;
}