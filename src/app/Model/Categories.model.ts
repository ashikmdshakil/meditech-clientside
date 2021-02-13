import { User } from './../User.model';
export class Categories{
    id: number;
    name: string;
    users: User[] = [];
}