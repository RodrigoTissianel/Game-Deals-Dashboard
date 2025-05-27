export interface IGameDetails {
    info: {
        title: string;
        steamAppID: string | null;
        thumb: string;
    };
    cheapestPriceEver: {
        price: string;
        date: number;
    };
    deals: Array<{
        storeID: string;
        dealID: string;
        price: string;
        retailPrice: string;
        savings: string;
    }>;
}
