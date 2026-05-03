import { ISelectOptions } from "../Interfaces/Shared";

export class GetYears {
    public static execute(): ISelectOptions[] {
        const currentYear = new Date().getFullYear();
        const yearFoundedOptions: ISelectOptions[] = [];
        for (let i = currentYear; i >= 1950; i--) {
            yearFoundedOptions.push({
                value: i.toString(),
                label: i.toString()
            })
        }

        return yearFoundedOptions;
    }
}