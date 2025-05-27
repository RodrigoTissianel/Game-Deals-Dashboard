import type { IFiltersSidebarProps } from '@/@types/FilterSidebar';
import {
    Sidebar,
    SidebarProvider,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

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
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Filtros</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <Input
                                placeholder="Buscar por nome"
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        search: e.target.value,
                                    }))
                                }
                            />

                            <Select
                                value={filters.storeID}
                                onValueChange={(value) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        storeID: value,
                                    }))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Filtrar por loja" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Todas as lojas
                                    </SelectItem>
                                    {stores.map((store) => (
                                        <SelectItem
                                            key={store.storeID}
                                            value={store.storeID}
                                        >
                                            {store.storeName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <div>
                                <Slider
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
                                <div className="text-xs text-muted-foreground mt-1">
                                    R$ {filters.lowerPrice} - R${' '}
                                    {filters.upperPrice}
                                </div>
                            </div>

                            {/* Porcentagem mínima de desconto */}
                            <div>
                                <label className="text-sm font-medium mb-1 block">
                                    Desconto mínimo
                                </label>
                                <Slider
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
                                <div className="text-xs text-muted-foreground mt-1">
                                    {filters.minDiscount.toFixed(1)}% ou mais
                                </div>
                            </div>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarTrigger />
        </SidebarProvider>
    );
};

export default FiltersSidebar;
