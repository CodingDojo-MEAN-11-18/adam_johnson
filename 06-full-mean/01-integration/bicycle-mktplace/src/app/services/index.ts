import { AuthService } from './auth.service';
import { ListingService } from './listing.service';

export const services: any[] = [AuthService, ListingService];

export * from './auth.service';
export * from './listing.service';

