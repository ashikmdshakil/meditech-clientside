import { User } from './../User.model';
export class Blog{
    id: number;
    title: string;
    youtubeLink: string;
    youtubeAddress: any;
    time: Date;
    blogger: User;
}