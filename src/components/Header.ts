import { HeaderType } from "../types/Header";

export const HeaderComponent = ({ name, hole, description, info }: HeaderType) => {
    const infoItems = Object.entries(info).map(([key, value]) => {
        return `
            <li class="flex items-center gap-4">
                <i class="${value.icon} text-blue-900 w-4 h-4 text-center"></i>
                <a href="${value.link}" target="_blank" class="text-sm hover:underline whitespace-nowrap">${value.value}</a>
            </li>
        `
    }).join('')

    return `
        <div class="flex-col lg:flex-row flex justify-between border-b border-gray-200 pb-4 items-center gap-4">
            <div class="flex flex-col gap-4 w-full lg:w-3/5">
                <div class="flex flex-col gap-2">
                    <h1 class="text-4xl font-bold">${name}</h1>
                    <h3 class="text-2xl font-semibold text-blue-900">${hole}</h3>
                </div>
                <p> ${description} </p>
            </div>
            <div class="w-full lg:w-1/3 flex lg:justify-end">
                <ul class="flex lg:flex-col gap-4 flex-wrap">
                    ${infoItems}
                </ul>
            </div>
        </div>
    `
}