import { IAddress, IAddressRequestBody } from "../Address";
import { IImage, IImageRequestBody } from "../Image";
import { IUser } from "../User";

export interface ICreateCarRequestBody {
    makeName: string;
    modelName: string;
    year: number;
    exteriorColor: string;
    exteriorColorCode: string;
    interiorColorCode: string;
    interiorColor: string;
    drivetrain: string;
    transmission: string;
    engine: string;
    mileage: string;
    address: IAddressRequestBody;
    numberOwners: number;
    hasPayments: boolean;
    numberKeys: number;
    price: number;
    condition: string;
    accident: boolean;
    hasHistory: boolean;
    hasIssues: boolean;
    featureCodes: string[];
    comment: string;
    vin: string;
    submitType: string;
    bodyType: string;
    makeCode: string;
    modelCode: string;
}

export interface ICar {
    id: string;
    makeName: string;
    modelName: string;
    version: string;
    price: number;
    mileage: number;
    year: number;
    userId: string;
    carCode: string;
    addressId: string;
    vehicleIdentidficationNumber: string;
    exteriorColor: string;
    exteriorColorCode: string;
    interiorColor: string;
    interiorColorCode: string;
    condition: string;
    numberOwners: number;
    accident: string;
    drivetrain: string;
    engine: string;
    sellerNotes: string;
    active: boolean;
    cleanHistoryReport: boolean;
    hasIssue: boolean;
    numberKeys: number;
    hasPayments: boolean;
    status: string;
    images: IImage[];
    address: IAddress,
    user: IUser,
    dateCreated: Date;
    dateUpdated: Date | null;
    dateDeleted: Date | null;
}

export interface ICarQuery {
    makeName: string[];
    modelName: string[];
    minYear?: number;
    maxYear?: number;
    minPrice?: number;
    maxPrice?: number;
    zipCode?: string;
    searchRadius?: number;
}


export interface IViewCar {
    id: string;
    makeName: string;
    modelName: string;
    version: string;
    price: number;
    mileage: number;
    year: number;
    userId: string;
    carCode: string;
    addressId: string;
    vehicleIdentidficationNumber: string;
    exteriorColor: string;
    exteriorColorCode: string;
    interiorColor: string;
    interiorColorCode: string;
    condition: string;
    numberOwners: number;
    accident: string;
    drivetrain: string;
    engine: string;
    sellerNotes: string;
    active: boolean;
    cleanHistoryReport: boolean;
    hasIssue: boolean;
    numberKeys: number;
    hasPayments: boolean;
    status: string;
    carImages: IImage[];
    address: IAddress,
    user: IUser,
    dateCreated: Date;
    dateUpdated: Date | null;
    dateDeleted: Date | null;

}