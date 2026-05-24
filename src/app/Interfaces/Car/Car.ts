import { IAddressRequestBody } from "../Address";
import { IImageRequestBody } from "../Image";

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