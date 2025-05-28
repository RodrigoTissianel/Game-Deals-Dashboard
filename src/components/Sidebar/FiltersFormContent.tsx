// components/Sidebar/FiltersFormContent.tsx
import type { IFiltersSidebarProps } from '@/@types/FilterSidebar';
import { Input } from '@/components/ui/input';
import cheapsharkLogo from '../../assets/cheapshark.png';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

export const FiltersFormContent = ({
    stores,
    filters,
    setFilters,
    minPrice,
    maxPrice,
    minDiscountValue,
    maxDiscountValue,
}: IFiltersSidebarProps) => (
    <div className="flex flex-col gap-6 p-4 text-indigo-50">
        <div className=" mt-16 w-22 h-22 p-2 rounded-full bg-gray-950 flex justify-center items-center mx-auto">
            <img
                src={cheapsharkLogo}
                alt="Cheapshark logo"
                className="w-full h-full object-cover"
            />
        </div>
        <h4 className="mt-4 text-2xl text-indigo-50 font-bold">
            Cheapshark Games
        </h4>
        <div>
            <label className="text-sm block mb-1">Nome do jogo:</label>
            <Input
                value={filters.search}
                onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                }
                placeholder="Buscar por nome"
                className="bg-indigo-500 placeholder:text-indigo-50 border-indigo-300 focus:border-indigo-700 focus:ring-indigo-300"
            />
        </div>

        <div>
            <label className="text-sm block mb-1">Lojas</label>
            <Select
                value={filters.storeID}
                onValueChange={(value) =>
                    setFilters((prev) => ({ ...prev, storeID: value }))
                }
            >
                <SelectTrigger className="bg-indigo-500 text-indigo-50 border-indigo-300">
                    <SelectValue placeholder="Filtrar por loja" />
                </SelectTrigger>
                <SelectContent className="bg-indigo-500 text-indigo-50">
                    <SelectItem value="all">Todas as lojas</SelectItem>
                    {stores.map((store) => (
                        <SelectItem key={store.storeID} value={store.storeID}>
                            {store.storeName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>

        <div>
            <label className="text-sm block mb-1">Faixa de preço</label>
            <Slider
                value={[filters.lowerPrice, filters.upperPrice]}
                min={minPrice}
                max={maxPrice}
                step={1}
                onValueChange={(value) =>
                    setFilters((prev) => ({
                        ...prev,
                        lowerPrice: value[0],
                        upperPrice: value[1],
                    }))
                }
                className="[&_[data-slot=slider-track]]:bg-indigo-300 [&_[data-slot=slider-thumb]]:bg-indigo-500"
            />
            <p className="mt-1 text-sm">
                R$ {filters.lowerPrice} - R$ {filters.upperPrice}
            </p>
        </div>

        <div>
            <label className="text-sm block mb-1">Desconto mínimo</label>
            <Slider
                value={[filters.minDiscount]}
                min={minDiscountValue}
                max={maxDiscountValue}
                step={0.5}
                onValueChange={([value]) =>
                    setFilters((prev) => ({
                        ...prev,
                        minDiscount: value,
                    }))
                }
                className="[&_[data-slot=slider-track]]:bg-indigo-300 [&_[data-slot=slider-thumb]]:bg-indigo-500"
            />
            <p className="mt-1 text-sm">
                {filters.minDiscount.toFixed(1)}% ou mais
            </p>
        </div>
    </div>
);
