import { LanguageType } from "../types/Languages";

export const LanguagesComponent = (languages: LanguageType) => {
    const languageItems = languages.languages.map((language) => {
        return `
            <li class="flex items-center justify-between gap-4 text-sm">
                <span class="text-gray-500">${language.language}</span>
                <span class="text-blue-900 font-medium">${language.level}</span>
            </li>
        `
    }).join('')

    return `
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
                <i class="${languages.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${languages.title}</h3>
            </div>
            <ul class="flex flex-col gap-2">
                ${languageItems}
            </ul>
        </div>
    `
}
