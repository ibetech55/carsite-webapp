export interface IRegister {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    userType: string;
    email: string;
    password: string;
    address: {
        state: string,
        city: string,
        streetAddress: string,
        zipCode: string
    }
}

export interface IRegisterResponse {
    succeeded:boolean,
    errors:[]
}