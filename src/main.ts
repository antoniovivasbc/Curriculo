import { headerData } from "./data/header";
import { HeaderComponent } from "./components/Header";
import { skillsData } from "./data/skills";
import { languagesData } from "./data/languages";
import { SidebarComponent } from "./components/Sidebar";
import { overviewData } from "./data/overview";
import { OverviewComponent } from "./components/Overview";
import { experienceData } from "./data/experience";
import { ExperienceComponent } from "./components/Experience";
const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('Elemento #app não encontrado')
}

app.innerHTML = `
    ${HeaderComponent(headerData)}
    <div class="flex gap-6">
        ${SidebarComponent({ skills: skillsData, languages: languagesData })}
        <main class="flex-1 py-4">
            ${OverviewComponent(overviewData)}
            ${ExperienceComponent(experienceData)}
        </main>
    </div>
`;
