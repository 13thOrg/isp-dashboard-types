import { Objects } from "./common.interface";
export declare type PaymentGatewayType = {
    _id?: string;
    name: string;
    title: PaymentGatewayEnum;
    credentials: Objects;
    keys: string[];
    CreatedAt?: Date;
    UpdatedAt?: Date;
};
export declare enum PaymentGatewayEnum {
    PAYTM_PAYMRNY_BANK = 0,
    REZORPAY = 1
}
