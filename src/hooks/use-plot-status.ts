'use client'
import { useMainModuleResult } from "../context/UiToolkitContext";
export default function usePlotStatus(name?: string) {
    const { plotStatusList } = useMainModuleResult();

    if (Array.isArray(plotStatusList)) {
        return plotStatusList.find((s) => s.name.toLowerCase() == name?.toLowerCase());
    }

    return undefined;
}