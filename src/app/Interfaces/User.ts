export interface IUser {
    firstName: string;
    lastName: string;
    dealershipName: string | null;
    phoneNumber: string;
    userId: string;
    email: string;
    userCode: string;
    userType: string;
    active: boolean;
    dateCreated: Date;
    dateUpdated?: Date | null;
    dateDeleted?: Date | null;    
}