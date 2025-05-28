import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
} from '@tanstack/react-table';
import * as React from 'react';

import type { IFiltersType } from '@/@types/FilterSidebar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from './button';
import { Skeleton } from './skeleton';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filters: IFiltersType;
    isLoading?: boolean;
    onRowClick?: (row: TData) => void;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    filters,
    isLoading,
    onRowClick,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            sorting,
            columnFilters,
        },
    });

    React.useEffect(() => {
        const titleColumn = table.getColumn('title');
        if (titleColumn) {
            titleColumn.setFilterValue(filters.search);
        }
    }, [filters.search, table]);

    return (
        <div>
            <div className="w-full overflow-x-auto">
                <div className="!rounded-lg border border-indigo-400">
                    <Table>
                        <TableHeader className="bg-indigo-800 border-b border-indigo-500 max-sm:overflow-hidden">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead
                                            key={header.id}
                                            className="text-indigo-50 text-center text-[1rem] font-bold [&>button]:cursor-pointer"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                [...Array(10)].map((_, i) => (
                                    <TableRow key={i}>
                                        {columns.map((_, j) => (
                                            <TableCell key={j}>
                                                <Skeleton className="h-4 w-full bg-indigo-200" />
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        onClick={() =>
                                            onRowClick?.(row.original)
                                        }
                                        className="cursor-pointer hover:bg-indigo-100 transition-colors duration-300 border-b border-indigo-400"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                className="text-center text-indigo-900 text-[1rem] py-4"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center text-indigo-950 text-[1rem]"
                                    >
                                        Nenhum resultado encontrado.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className="flex items-center gap-3 justify-end py-4 max-sm:flex-col-reverse">
                <p className="text-md mr-4 text-indigo-900">
                    Página {table.getState().pagination.pageIndex + 1} de{' '}
                    {table.getPageCount()}
                </p>
                <div className="flex justify-start gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="border-indigo-800 border-2 text-indigo-800 cursor-pointer p-5 transition duration-500 shadow-lg hover:shadow-indigo-300"
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="bg-indigo-800 text-indigo-50 cursor-pointer p-5 border-indigo-800 border-2 transition duration-500 shadow-lg hover:shadow-indigo-300"
                    >
                        Próxima
                    </Button>
                </div>
            </div>
        </div>
    );
}
