import { SkillType, SkillItemType } from "../types/Skills";

export const skillsData: SkillType = {
    title: 'Habilidades',
    icon: 'fa-solid fa-code',
    skills: [
        {
            title: "Backend",
            skills: ['PHP', 'Laravel', 'Livewire', 'Inertia.js']
        },
        {
            title: "Frontend",
            skills: ['Vue', 'Typescript', 'Tailwind', 'Alpine.js']
        },
        {
            title: "Database",
            skills: ['PostgreSQL', 'MySQL', 'Redis']
        },
        {
            title: "Ferramentas & outros",
            skills: ['Git', 'Jira', 'Trello', 'Docker', 'Linux']
        }
    ] as SkillItemType[]
}