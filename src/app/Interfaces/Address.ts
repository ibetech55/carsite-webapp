export interface IAddressRequestBody {
    streetAddress: string;
    zipCode: string;
    city: string;
    state: string;
}

export interface IAddress {
    street: string;
    zipCode: string;
    city: string;
    state: string;
}