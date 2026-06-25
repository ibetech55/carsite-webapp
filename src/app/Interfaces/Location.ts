export interface IState {
    name: string;
    stateCode: string;
}

export interface ICity {
    name: string;
    latitude: string;
    longitude: string;
}

export interface ILocationFormatter {
    city: string;
    state: string;
}