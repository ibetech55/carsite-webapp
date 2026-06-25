export interface IImageRequestBody {
    fileSize:number;
    fileExtension:string;
    fileName:string;
    defaultImage: boolean;
    position: number;
}


export interface IGetPresignedUrl {
    presignedUrl: string;
    key: string;
}

export interface IImage {
    filename: string;
    fileSize: number;
    carId:string;
    position: number;
    defaultImage: boolean;
    active: boolean;
    dateCreated: Date;
    dateUpdated: Date | null;
    dateDeleted: Date | null;
}