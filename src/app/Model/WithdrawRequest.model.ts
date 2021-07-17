import { User } from './../User.model';

export class WithdrawRequest{
    id: number;
    requestedDate: any;
    paymentDate: any;
    amount: number;
    user: User = new User();
    transactionMethod: string;
    transactionNumber: string;
    transactionId: string;
    status: string;
}