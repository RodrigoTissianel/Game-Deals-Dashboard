import type { IDeals } from './deals';

export interface IDealsDataTableProps {
    deals: IDeals[];
    filters: {
        search: string;
        storeID: string;
        lowerPrice: number;
        upperPrice: number;
        minDiscount: number;
    };
}
