import { User } from './../User.model';
import { BlogCategory } from './BlogCategory.model';
export class Blog{
    id: number;
    title: string;
    youtubeLink: string;
    youtubeAddress: any;
    time: Date;
    blogger: User;
    blogCategory: BlogCategory;
}