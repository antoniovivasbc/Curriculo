import { SkillType } from "../types/Skills";
import { LanguageType } from "../types/Languages";
import { SkillsComponent } from "./Skills";
import { LanguagesComponent } from "./Languages";

type SidebarType = {
    skills: SkillType;
    languages: LanguageType;
}

export const SidebarComponent = ({ skills, languages }: SidebarType) => {
    return `
        <aside class="w-fit flex-col gap-6 border-r border-gray-200 pr-6 my-4 hidden md:flex">
            <div class="border-b border-gray-200 pb-6">
                ${SkillsComponent(skills)}
            </div>
            <div>
                ${LanguagesComponent(languages)}
            </div>
        </aside>
    `
}
