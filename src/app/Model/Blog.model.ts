import { User } from './../User.model';
export class Blog{
    id: number;
    title: string;
    youtubeLink: string;
    time: Date;
    blogger: User;
}