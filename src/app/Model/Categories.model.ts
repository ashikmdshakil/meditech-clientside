import { User } from './../User.model';
export class Categories{
    id: number;
    name: string;
    icon: File;
    iconUrl: any;
    users: User[] = [];
}