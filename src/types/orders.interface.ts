import { DiscountType, PricingType } from "./common.interface"

export type OrdersType = {
    _id?: string,
    Items: OrderItemsType[],
    discount: DiscountType[],
    price: PricingType,
    note: string,
    status: StatusEnum,
    groupBy: string,
    CreatedAt?: Date,
    UpdatedAt?: Date
}

export type OrderItemsType = {
    _id?: string,
    title: string,
    price: PricingType,
    plan: string
}

export enum StatusEnum {
    UNPAID,
    PAID,
    CANCELLED,
    REFUND
}