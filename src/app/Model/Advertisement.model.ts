import { AdvertisementCategory } from './AdvertisementCategory.model';
import { AdvertisementComponent } from './../SuperAdminPannel/advertisement/advertisement.component';
export class Advertisement{
    id: number;
    advertisement: File;
    youtubeLink: string;
    youtubeUrl: any;
    advertisementUrl: any;
    category: AdvertisementCategory = new AdvertisementCategory();
}