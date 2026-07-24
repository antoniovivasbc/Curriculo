import { PersonalProjectsType } from "../types/PersonalProjects";

export const PersonalProjectsComponent = (personalProjects: PersonalProjectsType) => {
    return `
        <div class="flex flex-col gap-4 pt-4">
            <div class="flex items-center gap-4">
                <i class="fa-solid fa-${personalProjects.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${personalProjects.title}</h3>
            </div>
            <ul class="flex flex-col gap-4">
                ${personalProjects.projects.map((project) => `
                    <li class="text-sm text-gray-500">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm font-semibold text-blue-900">${project.title}</p>
                            <p class="text-sm text-gray-500">${project.description}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `
}

export default PersonalProjectsComponent;