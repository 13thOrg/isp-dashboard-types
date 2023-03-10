import { AddressType, NameType } from "./common.interface"
import { IspType } from "./isp.interface"

export type CustomerType = {
    _id?: string,
    profile: string,
    name: NameType,
    companyName: string,
    email: string,
    phone: string,
    password: string,
    ispUser: IspType[],
    ip: string,
    address: AddressType,
    groupBy: string,
    createdAt?: Date,
    updatedAt?: Date
}