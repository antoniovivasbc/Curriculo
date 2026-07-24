import { headerData } from "./data/header";
import { HeaderComponent } from "./components/Header";
import { skillsData } from "./data/skills";
import { SkillsComponent } from "./components/Skills";

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('Elemento #app não encontrado')
}

app.innerHTML = HeaderComponent(headerData) + SkillsComponent(skillsData);