import { SkillType } from "../types/Skills";

export const SkillsMobileComponent = (skills: SkillType) => {
    return `
        <div class="flex flex-col gap-4 md:hidden border-t border-gray-200 pt-4 mt-4">
            <div class="flex items-center gap-4">
                <i class="${skills.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${skills.title}</h3>
            </div>
            <div class="flex flex-wrap gap-4">
                ${skills.skills.map((skill) => `
                    <div class="flex flex-col gap-2 w-full min-[425px]:w-[calc(50%-0.5rem)] rounded-lg border border-gray-200 bg-gray-50 p-3">
                        <h4 class="text-sm text-blue-900 font-semibold">${skill.title}</h4>
                        <ul class="flex flex-col gap-1.5">
                            ${skill.skills.map((item) => `
                                <li class="text-xs flex gap-2 items-center text-gray-500">
                                    <i class="fa-solid fa-circle text-[4px] text-gray-400"></i>
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `
}
