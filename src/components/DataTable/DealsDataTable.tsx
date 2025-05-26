import type { IDeals } from '@/@types/deals';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../ui/datatable';
import type { IDealsDataTableProps } from '@/@types/DealsDataTable';

const columns: ColumnDef<IDeals>[] = [
    {
        accessorKey: 'title',
        header: 'Título',
    },
    {
        accessorKey: 'salePrice',
        header: 'Preço atual',
        cell: ({ row }) =>
            `$${parseFloat(row.getValue('salePrice')).toFixed(2)}`,
    },
    {
        accessorKey: 'normalPrice',
        header: 'Preço original',
        cell: ({ row }) =>
            `$${parseFloat(row.getValue('salePrice')).toFixed(2)}`,
    },
    {
        accessorKey: 'savings',
        header: 'Desconto',
        cell: ({ row }) => `${parseFloat(row.getValue('savings')).toFixed(1)}%`,
    },
    {
        accessorKey: 'dealRating',
        header: 'Nota',
    },
    {
        accessorKey: 'storeName',
        header: 'Loja',
        cell: ({ row }) => {
            const storeName = row.getValue<string>('storeName');
            const storeIcon = row.original.storeIcon;

            return (
                <div className="flex items-center gap-2">
                    {storeIcon && (
                        <img
                            src={`https://www.cheapshark.com/${storeIcon}`}
                            alt={storeName}
                            className="w-4 h-4 "
                        />
                    )}
                    <p>{storeName}</p>
                </div>
            );
        },
    },
];

const DealsDataTable = ({ deals }: IDealsDataTableProps) => {
    return <DataTable data={deals} columns={columns} />;
};

export default DealsDataTable;
