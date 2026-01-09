import { useMainModuleResult } from "@/context/UiToolkitContext";

export const useProjectArea = () => {
    const { measurementSystem } = useMainModuleResult();
    const unit = measurementSystem === "metric" ? "m²" : "sqft";
    const prepareArea = (area: number | null) => {
        if (area == null || area == 0) return "N/A";
        return `${area} ${unit ?? ""}`;
    }
    return {
        unit,
        prepareArea
    }
}