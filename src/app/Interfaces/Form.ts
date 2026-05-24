export interface IFeatures {
    category: string;
    features: IFeature [],
    position: number
}

export interface IFeature {
    featureName: string;
    featureCode: string;
}