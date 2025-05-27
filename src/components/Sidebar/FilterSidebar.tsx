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
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Slider } from '@/components/ui/slider';

const FiltersSidebar = ({
    stores,
    filters,
    setFilters,
    minPrice,
    maxPrice,
    minDiscountValue,
    maxDiscountValue,
}: IFiltersSidebarProps) => {
    return (
        <div className="flex items-start">
            <Sidebar className="border-indigo-300">
                <SidebarContent className="bg-indigo-800 ">
                    <SidebarGroup>
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
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-[20px] text-indigo-50  mt-12 font-bold">
                            Filtros
                        </SidebarGroupLabel>
                        <SidebarGroupContent className="flex flex-col justify-center items-start gap-8 p-4 w-full">
                            <div className="w-full">
                                <label
                                    htmlFor="storeSelect"
                                    className="text-sm text-left font-medium text-indigo-50 block"
                                >
                                    Nome do jogo:
                                </label>
                                <Input
                                    id="titleFilter"
                                    placeholder="Buscar por nome do jogo"
                                    value={filters.search}
                                    onChange={(e) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            search: e.target.value,
                                        }))
                                    }
                                    className="mt-2 border-indigo-300 w-full placeholder:text-indigo-50 
                                bg-indigo-500 focus:border-indigo-700 focus:ring-indigo-300 
                                focus:ring-1"
                                />
                            </div>

                            <div className="w-full">
                                <Select
                                    value={filters.storeID}
                                    onValueChange={(value) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            storeID: value,
                                        }))
                                    }
                                >
                                    <label
                                        htmlFor="storeSelect"
                                        className="text-sm text-left font-medium text-indigo-50 block"
                                    >
                                        Lojas:
                                    </label>

                                    <SelectTrigger
                                        id="storeSelect"
                                        className="mt-2 border-indigo-300 w-full bg-indigo-500 
                                text-indigo-50  [&>svg]:text-indigo-50 [&>svg]:opacity-100 cursor-pointer"
                                    >
                                        <SelectValue
                                            className="placeholder:text-indigo-50"
                                            placeholder="Filtrar por loja"
                                        />
                                    </SelectTrigger>
                                    <SelectContent
                                        className="border-indigo-300 w-full bg-indigo-500 
                                text-indigo-50"
                                    >
                                        <SelectItem
                                            value="all"
                                            className="transition-colors transition-discrete duration-300 
                                        hover:bg-indigo-400 cursor-pointer"
                                        >
                                            Todas as lojas
                                        </SelectItem>
                                        {stores.map((store) => (
                                            <SelectItem
                                                className="transition-colors transition-discrete duration-300 
                                            hover:bg-indigo-400 cursor-pointer"
                                                key={store.storeID}
                                                value={store.storeID}
                                            >
                                                {store.storeName}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="priceRange"
                                    className="text-sm text-left font-medium text-indigo-50 block"
                                >
                                    Preço:
                                </label>
                                <Slider
                                    id="priceRange"
                                    className="mt-4 w-full rounded cursor-pointer bg-transparent [&_[data-slot=slider-track]]:bg-indigo-300 [&_[data-slot=slider-thumb]]:bg-indigo-500 [&_[data-slot=slider-thumb]]:border-indigo-300 [&_[data-slot=slider-thumb]]:hover:border-indigo-700 [&_[data-slot=slider-thumb]]:hover:ring-indigo-300 [&_[data-slot=slider-thumb]]:hover:ring-2"
                                    min={minPrice}
                                    max={maxPrice}
                                    step={1}
                                    value={[
                                        filters.lowerPrice,
                                        filters.upperPrice,
                                    ]}
                                    onValueChange={(value) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            lowerPrice: value[0],
                                            upperPrice: value[1],
                                        }))
                                    }
                                />
                                <p className="text-m mt-2 text-indigo-50">
                                    R$ {filters.lowerPrice} - R${' '}
                                    {filters.upperPrice}
                                </p>
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="minDiscount"
                                    className="text-sm text-left font-medium text-indigo-50 block"
                                >
                                    Desconto mínimo:
                                </label>
                                <Slider
                                    id="minDiscount"
                                    className="mt-4 w-full rounded cursor-pointer bg-transparent [&_[data-slot=slider-track]]:bg-indigo-300 [&_[data-slot=slider-thumb]]:bg-indigo-500 [&_[data-slot=slider-thumb]]:border-indigo-300 [&_[data-slot=slider-thumb]]:hover:border-indigo-700 [&_[data-slot=slider-thumb]]:hover:ring-indigo-300 [&_[data-slot=slider-thumb]]:hover:ring-2"
                                    min={minDiscountValue}
                                    max={maxDiscountValue}
                                    step={0.5}
                                    value={[filters.minDiscount]}
                                    onValueChange={([value]) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            minDiscount: value,
                                        }))
                                    }
                                />
                                <p className="text-m mt-2 text-indigo-50">
                                    {filters.minDiscount.toFixed(1)}% ou mais
                                </p>
                            </div>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarTrigger className="w-6 h-6 absolute left-full top-2 ml-2 cursor-pointer [&>svg]:text-indigo-800 [&>svg]:opacity-100 [&>svg]:!w-full [&>svg]:!h-full" />
            </Sidebar>
        </div>
    );
};

export default FiltersSidebar;
