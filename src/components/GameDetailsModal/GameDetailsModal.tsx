import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getGameDetails } from '@/services/api';
import type { IGameDetails } from '@/@types/gameDetails';
import type { IDeals } from '@/@types/deals';
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
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{game?.title}</DialogTitle>
                    <DialogDescription>Informações do jogo</DialogDescription>
                </DialogHeader>
                {loading ? (
                    <div className="flex flex-col gap-4 mt-4">
                        <Skeleton className="w-full h-40 rounded bg-gray-200" />
                        <Skeleton className="h-4 w-3/4 bg-gray-200" />
                        <Skeleton className="h-4 w-1/2 bg-gray-200" />
                        <Skeleton className="h-10 w-full mt-2 rounded" />
                    </div>
                ) : details ? (
                    <div className="flex flex-col gap-4 mt-4 text-sm text-indigo-900">
                        <img
                            src={details.info.thumb}
                            alt={details.info.title}
                            className="w-full rounded"
                        />
                        <p>
                            <strong>Nome:</strong> {details.info.title}
                        </p>
                        <p>
                            <strong>Loja:</strong> {game?.storeName}
                        </p>
                        <p>
                            <strong>Menor preço histórico:</strong> R$
                            {parseFloat(
                                details.cheapestPriceEver.price
                            ).toFixed(2)}
                        </p>
                        <a
                            href={`https://www.cheapshark.com/redirect?dealID=${details.deals?.[0]?.dealID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="w-full mt-2">
                                Ir para oferta
                            </Button>
                        </a>
                    </div>
                ) : (
                    <p>Detalhes não encontrados.</p>
                )}
            </DialogContent>
        </Dialog>
    );
};
