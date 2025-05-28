import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FiltersFormContent } from './FiltersFormContent';
import type { IFiltersSidebarProps } from '@/@types/FilterSidebar';

export default function MobileSidebarDrawer(props: IFiltersSidebarProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="mt-4 border-2 border-indigo-800 text-indigo-900 bg-indigo-50">
                    Abrir filtros
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="w-[280px] bg-indigo-800 text-indigo-50 p-0 overflow-y-auto"
            >
                <FiltersFormContent {...props} />
            </SheetContent>
        </Sheet>
    );
}
