export interface IModelList {
    modelName: string;
    modelCode: string;
    bodyType: string;
}

export interface IModelFilterList {
    makeName: string;
    modelFilterData: IModelFilterData[]
}

export interface IModelFilterData {
    modelName: string;
    modelCode: string;
    total:number;
}