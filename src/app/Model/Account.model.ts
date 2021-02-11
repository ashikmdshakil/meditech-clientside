import { AddressBook } from './../AddressBook.model';
import { User } from './../User.model';
export class Account{
    accountId: number;
    createDate: Date;
    modifiedDate: Date;
    name: string;
    users: User[] = [];
    addressBooks: AddressBook[] = [];
}