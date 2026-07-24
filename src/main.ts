import { headerData } from "./data/header";
import { HeaderComponent } from "./components/Header";

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('Elemento #app não encontrado')
}

app.innerHTML = HeaderComponent(headerData);