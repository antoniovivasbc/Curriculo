import type { ExperienceType } from "../types/Experience";

export const ExperienceComponent = (experienceData: ExperienceType) => {

    const experienceItems = experienceData.experiences.map((experience) => {
        return `
            <div class="flex flex-col gap-2">
                <div class="flex justify-between flex-wrap gap-2">
                    <div class="flex gap-2 items-start">
                        <p class="text-sm font-semibold text-blue-900">${experience.hole}</p>
                        <span class="text-sm text-blue-900">|</span>
                        <p class="text-sm font-semibold text-blue-900">${experience.company}</p>
                    </div>
                    <p class="text-sm font-semibold text-blue-900">${experience.dateFrom} - ${experience.dateTo}</p>
                </div>
                <ul class="list-disc list-inside">
                    ${experience.descriptions.map((description) => `<li class="text-sm text-gray-500">${description}</li>`).join('')}
                    </ul>
            </div>
        `;
    }).join('');
    return `
        <div class="flex flex-col gap-4 pt-4 border-b border-gray-200 pb-4">
            <div class="flex items-center gap-4">
                <i class="fa-solid fa-${experienceData.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h2 class="text-xl font-semibold text-blue-950">${experienceData.title}</h2>
            </div>
            ${experienceItems}
        </div>
    `
};