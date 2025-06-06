import React from 'react';
import type { IDeals } from '@/@types/deals';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../ui/datatable';
import type { IDealsDataTableProps } from '@/@types/DealsDataTable';
import { Button } from '../ui/button';
import { ArrowUpDown } from 'lucide-react';
import { GameDetailsModal } from '../GameDetailsModal/GameDetailsModal';

const DealsDataTable = ({ deals, filters }: IDealsDataTableProps) => {
    const [selectedGame, setSelectedGame] = React.useState<IDeals | null>(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const columns: ColumnDef<IDeals>[] = [
        {
            accessorKey: 'title',
            header: 'Título',
            cell: ({ row }) => row.getValue('title'),
        },
        {
            accessorKey: 'salePrice',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Preço atual
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) =>
                `$${parseFloat(row.getValue('salePrice')).toFixed(2)}`,
        },
        {
            accessorKey: 'normalPrice',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Preço original
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) =>
                `$${parseFloat(row.getValue('salePrice')).toFixed(2)}`,
        },
        {
            accessorKey: 'savings',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Desconto
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) =>
                `${parseFloat(row.getValue('savings')).toFixed(1)}%`,
        },
        {
            accessorKey: 'dealRating',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Nota
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
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
    return (
        <>
            <GameDetailsModal
                open={modalOpen}
                onOpenChange={setModalOpen}
                game={selectedGame}
            />
            <DataTable
                data={deals}
                columns={columns}
                filters={filters}
                isLoading={deals.length === 0}
                onRowClick={(deal) => {
                    setSelectedGame(deal);
                    setModalOpen(true);
                }}
            />
        </>
    );
};

export default DealsDataTable;
