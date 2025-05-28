import type { IDeals } from '@/@types/deals';
import type { IStores } from '@/@types/stores';
import DealsDataTable from '@/components/DataTable/DealsDataTable';
import FiltersSidebar from '@/components/Sidebar/FilterSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { getDeals, getStores } from '@/services/api';
import React from 'react';

const Home = (): React.ReactElement => {
    const [deals, setDeals] = React.useState<IDeals[]>([]);
    const [stores, setStores] = React.useState<IStores[]>([]);
    const [filters, setFilters] = React.useState({
        search: '',
        storeID: 'all',
        lowerPrice: 0,
        upperPrice: 100,
        minDiscount: 0,
    });

    React.useEffect(() => {
        getDeals().then(setDeals);
        getStores().then((data) => setStores(data));
    }, []);

    const dealsWithStores = deals.map((deal) => {
        const store = stores.find((store) => store.storeID === deal.storeID);
        return {
            ...deal,
            storeName: store ? store.storeName : 'Loja desconhecida',
            storeIcon: store ? store.images.icon : '',
        };
    });

    const filteredDeals = dealsWithStores.filter((deal) => {
        const matchesSearch = deal.title
            .toLowerCase()
            .includes(filters.search.toLowerCase());

        const matchesStore =
            filters.storeID === 'all' ? true : deal.storeID === filters.storeID;

        const matchesPrice =
            parseFloat(deal.salePrice) >= filters.lowerPrice &&
            parseFloat(deal.salePrice) <= filters.upperPrice;

        const matchesDiscount = parseFloat(deal.savings) >= filters.minDiscount;

        return matchesSearch && matchesStore && matchesPrice && matchesDiscount;
    });

    const storeIDsUsed = new Set(deals.map((deal) => deal.storeID));
    const activeStores = stores.filter((store) =>
        storeIDsUsed.has(store.storeID)
    );

    const prices = dealsWithStores.map((deal) => parseFloat(deal.salePrice));
    const minPrice = prices.length ? Math.min(...prices) : 0;
    const maxPrice = prices.length ? Math.max(...prices) : 100;

    const discounts = dealsWithStores.map((deal) => parseFloat(deal.savings));
    const minDiscountValue = discounts.length ? Math.min(...discounts) : 0;
    const maxDiscountValue = discounts.length ? Math.max(...discounts) : 100;

    return (
        <main>
            <SidebarProvider className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-indigo-900">
                    Lista de jogos
                </h1>
                <FiltersSidebar
                    stores={activeStores}
                    filters={filters}
                    setFilters={setFilters}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    minDiscountValue={minDiscountValue}
                    maxDiscountValue={maxDiscountValue}
                />
                <DealsDataTable deals={filteredDeals} filters={filters} />
            </SidebarProvider>
        </main>
    );
};

export default Home;
