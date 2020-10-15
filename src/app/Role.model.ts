import { User } from './User.model';
export class Role{
    roleId: number;
    name: string;
    type: string;
    users: User[] = []

  
}