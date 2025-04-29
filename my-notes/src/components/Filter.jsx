import { Input, Select } from "@chakra-ui/react";

export default function Filter() {
    return (
        <div className="flex flex-col gap-5">
            <Input 
                placeholder="Поиск" 
                onChange={(e) => setFilter({ ...Filter, search: e.target.value })}
            />
            <Select
                onChange={(e) => setFilter({ ...Filter, sortOrder: e.target.value })}
            >
                <option value={"desc"}>Сначала новые</option>
                <option value={"asc"}>Сначала старые</option>
            </Select>
        </div>
    )
}