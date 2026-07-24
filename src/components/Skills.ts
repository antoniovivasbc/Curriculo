import { SkillType } from "../types/Skills";

export const SkillsComponent = (skills: SkillType) => {
    const skillsItems = skills.skills.map((skill) => {
        return `
            <div class="flex flex-col gap-2">
                <h4 class="text-lg text-blue-900 font-semibold">${skill.title}</h4>
                <ul class="flex flex-wrap flex-col gap-2">
                    ${skill.skills.map((skill) =>
            `<li class="text-sm flex gap-2 items-center">
                            <i class="fa-solid fa-circle text-[5px]"></i>
                            <span class="text-sm">${skill}</span>
                        </li>`
        ).join('')}
                </ul>
            </div>
        `
    }).join('')

    return `
        <div class=" border-r border-gray-200 my-4 w-fit flex flex-col gap-2">
            <div class="flex items-center gap-4">
                <i class="${skills.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${skills.title}</h3>
            </div>
            <div class="border-b border-gray-200 mr-4 flex flex-col gap-4 pb-4">
                ${skillsItems}
            </div>
        </div>
    `
}