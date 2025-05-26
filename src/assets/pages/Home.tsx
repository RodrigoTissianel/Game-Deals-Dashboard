import type { IDeals } from '@/@types/deals';
import type { IStores } from '@/@types/stores';
import DealsDataTable from '@/components/DataTable/DealsDataTable';
import { getDeals, getStores } from '@/services/api';
import React from 'react';

const Home = (): React.ReactElement => {
    const [deals, setDeals] = React.useState<IDeals[]>([]);
    const [stores, setStores] = React.useState<IStores[]>([]);

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

    return (
        <div>
            <h1 className="text-4xl font-bold">Lista de jogos</h1>

            <DealsDataTable deals={dealsWithStores} />
        </div>
    );
};

export default Home;
