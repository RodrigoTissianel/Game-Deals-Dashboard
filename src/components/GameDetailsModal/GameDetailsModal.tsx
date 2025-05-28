import type { IDeals } from '@/@types/deals';
import type { IGameDetails } from '@/@types/gameDetails';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { getGameDetails } from '@/services/api';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

interface GameDetailsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    game: IDeals | null;
}

export const GameDetailsModal = ({
    open,
    onOpenChange,
    game,
}: GameDetailsModalProps) => {
    const [details, setDetails] = useState<IGameDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (open && game?.gameID) {
            setLoading(true);
            getGameDetails(game.gameID)
                .then((data) => setDetails(data))
                .finally(() => setLoading(false));
        }
    }, [open, game]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-w-md bg-indigo-50 border-indigo-400 border-2"
                aria-describedby={undefined}
            >
                <DialogHeader>
                    {loading ? (
                        <Skeleton className="w-1/2 h-8 rounded bg-indigo-200" />
                    ) : (
                        <DialogTitle className="text-3xl text-indigo-900 font-bold">
                            {game?.title}
                        </DialogTitle>
                    )}
                </DialogHeader>
                {loading ? (
                    <div className="flex flex-col mt-4">
                        <Skeleton className="w-full h-44 rounded bg-indigo-200" />
                        <Skeleton className="h-4 w-3/4 mt-2 bg-indigo-200" />
                        <Skeleton className="h-4 w-1/2 mt-2 bg-indigo-200" />
                        <Skeleton className="h-10 w-full mt-2 rounded" />
                    </div>
                ) : details ? (
                    <div className="flex flex-col gap-4 text-sm text-indigo-900">
                        <img
                            src={details.info.thumb}
                            alt={details.info.title}
                            className="w-full rounded h-60 object-fill shadow-lg shadow-indigo-400"
                        />
                        <div>
                            <p className="text-[1rem] mt-4">
                                <strong>Loja:</strong> {game?.storeName}
                            </p>
                            <p className="text-[1rem] mt-2">
                                <strong>Menor preço histórico:</strong> R$
                                {parseFloat(
                                    details.cheapestPriceEver.price
                                ).toFixed(2)}
                            </p>
                            <p className="text-[1rem] mt-2">
                                <strong>Preço original:</strong> R$
                                {parseFloat(
                                    details.deals?.[0]?.retailPrice
                                ).toFixed(2)}
                            </p>
                            <p className="text-[1rem] mt-2">
                                <strong>Preço atual:</strong> R$
                                {parseFloat(details.deals?.[0]?.price).toFixed(
                                    2
                                )}
                            </p>
                        </div>
                        <a
                            href={`https://www.cheapshark.com/redirect?dealID=${details.deals?.[0]?.dealID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 !mx-auto cursor-pointer mt-2 text-center text-[1rem] bg-indigo-800 text-indigo-50 inline-block py-3 rounded-[8px] transition duration-500 hover:opacity-85 shadow-lg hover:shadow-indigo-300"
                        >
                            Ir para oferta
                        </a>
                    </div>
                ) : (
                    <p>Detalhes não encontrados.</p>
                )}
            </DialogContent>
        </Dialog>
    );
};
