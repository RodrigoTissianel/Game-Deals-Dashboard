import type { IStores } from './stores';

export interface IFiltersSidebarProps {
    stores: IStores[];
    filters: IFiltersType;
    setFilters: React.Dispatch<React.SetStateAction<IFiltersType>>;
    minPrice: number;
    maxPrice: number;
    minDiscountValue: number;
    maxDiscountValue: number;
}

export interface IFiltersType {
    search: string;
    storeID: string;
    lowerPrice: number;
    upperPrice: number;
    minDiscount: number;
}
