import { PricingType } from "./common.interface"
import { OttType } from "./ott.interface"

export type PlansType = {
    _id?: string,
    title: string,
    isp: string,
    icon: string,
    description: string,
    keyPoints: string[],
    pricing: PricingType[],
    defaultPrice: RepeatEnum,
    popular: boolean,
    visibleTo: VisibleTo,
    ott: string[],
    repeat: RepeatType[]
    groupBy: string[],
    CreatedAt?: Date,
    UpdatedAt?: Date,
}

export type VisibleTo = {
    customer_mobile: boolean
    customer_web: boolean
    customer_Care: boolean
    customer_Promotion: boolean
}

export type RepeatType = {
    type: RepeatEnum,
    discount: number
}

export enum RepeatEnum {
    ONE_TIME,
    WEEKLY,
    MONTHLY,
    QUARTERLY,
    SEMIANNUALLY,
    ANNUALLY,
}

