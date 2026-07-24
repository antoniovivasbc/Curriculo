import { OverviewType } from "../types/Overview";

export const OverviewComponent = (overview: OverviewType) => {
    return `
        <div class="flex flex-col gap-2 border-b border-gray-200 pb-4">
            <div class="flex items-center gap-2">
                <i class="${overview.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${overview.title}</h3>
            </div>
            <p class="text-sm text-gray-500">${overview.description}</p>
        </div>
    `
}