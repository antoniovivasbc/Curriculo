import { SkillType } from "../types/skills";

export const SkillsComponent = (skills: SkillType[]) => {
    const skillsItems = skills.map((skill) => {
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
        <div class="flex flex-col gap-4 border-b border-r border-gray-200 py-4">
            ${skillsItems}
        </div>
    `
}