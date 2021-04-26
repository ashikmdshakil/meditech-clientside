import { Advertisement } from './Advertisement.model';
export class AdvertisementCategory{
    id: number;
    categoryName: string;
    advertisements: Advertisement[] = [];
}