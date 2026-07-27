(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Antonio Vivas`,hole:`Full Stack Developer`,description:`Desenvolvedor Full Stack com sólida trajetória no desenvolvimento de aplicações web, atuando desde 2019 em projetos acadêmicos, freelances e, desde 2022, no desenvolvimento profissional de sistemas empresariais de grande porte. Possuo experiência na criação e evolução de plataformas de gestão e e-commerce utilizando Laravel, Vue.js, Livewire e Alpine.js, desenvolvendo soluções completas que abrangem modelagem de dados, APIs REST, integrações com gateways de pagamento e transportadoras, além da construção de interfaces modernas e responsivas.`,info:{phone:{icon:`fa-solid fa-phone`,value:`+55 (71) 98550-00085`,link:`tel:+5571985500085`},email:{icon:`fa-regular fa-envelope`,value:`antoniovivascavalcante@gmail.com`,link:`mailto:antoniovivascavalcante@gmail.com`},address:{icon:`fa-solid fa-location-dot`,value:`Lauro de freitas/`,link:`https://www.google.com/maps/place/Lauro+de+Freitas,+BA`},linkedin:{icon:`fa-brands fa-linkedin`,value:`linkedin.com/in/antonio-vivas-cavalcante`,link:`https://www.linkedin.com/in/antonio-vivas-cavalcante`},github:{icon:`fa-brands fa-github`,value:`github.com/antonio-vivas-cavalcante`,link:`https://github.com/antonio-vivas-cavalcante`}}},t=({name:e,hole:t,description:n,info:r})=>`
        <div class="flex-col lg:flex-row flex justify-between border-b border-gray-200 pb-4 items-center gap-4">
            <div class="flex flex-col gap-4 w-full lg:w-3/5">
                <div class="flex flex-col gap-2">
                    <h1 class="text-4xl font-bold">${e}</h1>
                    <h3 class="text-2xl font-semibold text-blue-900">${t}</h3>
                </div>
                <p> ${n} </p>
            </div>
            <div class="w-full lg:w-1/3 flex lg:justify-end">
                <ul class="flex lg:flex-col gap-4 flex-wrap">
                    ${Object.entries(r).map(([e,t])=>`
            <li class="flex items-center gap-4">
                <i class="${t.icon} text-blue-900 w-4 h-4 text-center"></i>
                <a href="${t.link}" target="_blank" class="text-sm hover:underline whitespace-nowrap">${t.value}</a>
            </li>
        `).join(``)}
                </ul>
            </div>
        </div>
    `,n={title:`Habilidades`,icon:`fa-solid fa-code`,skills:[{title:`Backend`,skills:[`PHP`,`Laravel`,`Livewire`,`Inertia.js`]},{title:`Frontend`,skills:[`Vue`,`Typescript`,`Tailwind`,`Alpine.js`]},{title:`Database`,skills:[`PostgreSQL`,`MySQL`,`Redis`]},{title:`Ferramentas & outros`,skills:[`Git`,`Jira`,`Trello`,`Docker`,`Linux`]}]},r={title:`Idiomas`,icon:`fa-solid fa-language`,languages:[{language:`Português`,level:`Nativo`},{language:`Inglês`,level:`Avançado`},{language:`Espanhol`,level:`Avançado`}]},i=e=>{let t=e.skills.map(e=>`
            <div class="flex flex-col gap-2">
                <h4 class="text-lg text-blue-900 font-semibold">${e.title}</h4>
                <ul class="flex flex-wrap flex-col gap-2">
                    ${e.skills.map(e=>`<li class="text-sm flex gap-2 items-center">
                            <i class="fa-solid fa-circle text-[5px] text-gray-500"></i>
                            <span class="text-sm text-gray-500">${e}</span>
                        </li>`).join(``)}
                </ul>
            </div>
        `).join(``);return`
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
                <i class="${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${e.title}</h3>
            </div>
            <div class="flex flex-col gap-4">
                ${t}
            </div>
        </div>
    `},a=e=>{let t=e.languages.map(e=>`
            <li class="flex items-center justify-between gap-4 text-sm">
                <span class="text-gray-500">${e.language}</span>
                <span class="text-blue-900 font-medium">${e.level}</span>
            </li>
        `).join(``);return`
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
                <i class="${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${e.title}</h3>
            </div>
            <ul class="flex flex-col gap-2">
                ${t}
            </ul>
        </div>
    `},o=({skills:e,languages:t})=>`
        <aside class="w-fit flex-col gap-6 border-r border-gray-200 pr-6 my-4 hidden md:flex">
            <div class="border-b border-gray-200 pb-6">
                ${i(e)}
            </div>
            <div>
                ${a(t)}
            </div>
        </aside>
    `,s={title:`Resumo Profissional`,description:`Ao longo da minha carreira, participei de todas as etapas do ciclo de desenvolvimento de software, desde o levantamento de requisitos e planejamento técnico até a implementação, manutenção e evolução de sistemas em produção. Tenho experiência na construção de soluções escaláveis, integração entre serviços, otimização de desempenho e resolução de problemas complexos, sempre priorizando código limpo, boas práticas de engenharia de software e a entrega de valor para o negócio. Busco atuar em equipes que valorizem qualidade técnica, colaboração e aprendizado contínuo.`,icon:`fa-solid fa-user`},c=e=>`
        <div class="flex flex-col gap-2 border-b border-gray-200 pb-4">
            <div class="flex items-center gap-2">
                <i class="${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${e.title}</h3>
            </div>
            <p class="text-sm text-gray-500">${e.description}</p>
        </div>
    `,l={title:`Experiência Profissional`,icon:`briefcase`,experiences:[{dateFrom:`06/2022`,dateTo:`Presente`,company:`Agilstore`,hole:`Full Stack Developer`,descriptions:[`Desenvolvimento e evolução de aplicações web para sistemas de gestão empresarial (CRM/ERP) e plataformas de e-commerce utilizando Laravel, Vue.js, Inertia.js, Livewire e Alpine.js.`,`Implementação de funcionalidades completas, desde a modelagem do banco de dados e desenvolvimento de APIs até a construção de interfaces responsivas e validações de negócio no front-end e back-end.`,`Desenvolvimento de módulos administrativos, incluindo sistemas de permissões hierárquicas, internacionalização (i18n), gerenciamento de usuários, CRUDs avançados e componentes reutilizáveis.`,`Construção de interfaces complexas com foco em experiência do usuário, incluindo menus hierárquicos, animações, carregamento assíncrono de dados (Lazy Loading) e otimização de desempenho.`,`Desenvolvimento de fluxos de negócio para uma plataforma multinacional do setor de calçados ortopédicos, incluindo formulários dinâmicos de encomendas e sistema de separação de pedidos por leitura de código de barras.`,`Participação no desenvolvimento de plataforma completa de e-commerce, implementando carrinho de compras, processo de checkout, integrações com gateways de pagamento e transportadoras, além da integração com o CRM responsável pela gestão logística dos pedidos.`,`Desenvolvimento de funcionalidades auxiliares como geração de documentos PDF, exportação de planilhas Excel, envio automatizado de e-mails e integrações entre diferentes módulos do sistema.`,`Participação ativa na análise técnica das demandas, planejamento das implementações, documentação de funcionalidades, manutenção corretiva e evolução contínua de sistemas em produção.`]},{dateFrom:`01/2020`,dateTo:`Presente`,company:`Autônomo`,hole:`Desenvolvedor Full Stack`,descriptions:[`Desenvolvimento de soluções web personalizadas para pequenos negócios, conduzindo todas as etapas do projeto, desde o levantamento de requisitos até a implantação em produção.`,`Desenvolvimento de sistema de Ponto de Venda (PDV) utilizando PHP, com funcionalidades de controle de estoque, gerenciamento de caixa, sangrias, autenticação para operações administrativas e regras de negócio voltadas ao ambiente comercial.`,`Desenvolvimento de websites institucionais responsivos utilizando HTML, CSS e JavaScript, priorizando usabilidade, desempenho e compatibilidade entre dispositivos.`,`Implementação de interfaces interativas com animações e recursos visuais, incluindo utilização da biblioteca Three.js para criação de experiências imersivas na página inicial de um website institucional.`,`Configuração e implantação de aplicações em ambiente de produção, incluindo gerenciamento de hospedagem, domínios, contas de e-mail corporativo e integração entre serviços de e-mail.`]}]},u=e=>{let t=e.experiences.map(e=>`
            <div class="flex flex-col gap-2">
                <div class="flex justify-between flex-wrap gap-2">
                    <div class="flex gap-2 items-start">
                        <p class="text-sm font-semibold text-blue-900">${e.hole}</p>
                        <span class="text-sm text-blue-900">|</span>
                        <p class="text-sm font-semibold text-blue-900">${e.company}</p>
                    </div>
                    <p class="text-sm font-semibold text-blue-900">${e.dateFrom} - ${e.dateTo}</p>
                </div>
                <ul class="list-disc list-inside">
                    ${e.descriptions.map(e=>`<li class="text-sm text-gray-500">${e}</li>`).join(``)}
                    </ul>
            </div>
        `).join(``);return`
        <div class="flex flex-col gap-4 pt-4 border-b border-gray-200 pb-4">
            <div class="flex items-center gap-4">
                <i class="fa-solid fa-${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h2 class="text-xl font-semibold text-blue-950">${e.title}</h2>
            </div>
            ${t}
        </div>
    `},d={title:`Projetos Pessoais`,icon:`folder`,projects:[{title:`Wedding Platform — Em desenvolvimento`,description:`Desenvolvimento de uma plataforma SaaS para criação e gerenciamento de sites de casamento, com arquitetura multi-tenant. Implementação de integração com Mercado Pago para gestão de presentes e pagamentos. Desenvolvimento de backoffice completo para administração de convidados, RSVP, lista de presentes, galeria de imagens e configurações do evento. Criação de dashboard com métricas em tempo real sobre confirmações de presença e recebimentos. Arquitetura focada em escalabilidade, isolamento de dados entre clientes e facilidade de manutenção. Tecnologias: Laravel, Livewire, Alpine.js, Filament, MySQL.`}]},f=e=>`
        <div class="flex flex-col gap-4 pt-4">
            <div class="flex items-center gap-4">
                <i class="fa-solid fa-${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${e.title}</h3>
            </div>
            <ul class="flex flex-col gap-4">
                ${e.projects.map(e=>`
                    <li class="text-sm text-gray-500">
                        <div class="flex flex-col gap-2">
                            <p class="text-sm font-semibold text-blue-900">${e.title}</p>
                            <p class="text-sm text-gray-500">${e.description}</p>
                        </div>
                    </li>
                `).join(``)}
            </ul>
        </div>
    `,p=e=>`
        <div class="flex flex-col gap-4 md:hidden border-t border-gray-200 pt-4 mt-4">
            <div class="flex items-center gap-4">
                <i class="${e.icon} text-blue-950 w-4 h-4 text-center"></i>
                <h3 class="text-xl text-blue-950 font-semibold">${e.title}</h3>
            </div>
            <div class="flex flex-wrap gap-4">
                ${e.skills.map(e=>`
                    <div class="flex flex-col gap-2 w-full min-[425px]:w-[calc(50%-0.5rem)] rounded-lg border border-gray-200 bg-gray-50 p-3">
                        <h4 class="text-sm text-blue-900 font-semibold">${e.title}</h4>
                        <ul class="flex flex-col gap-1.5">
                            ${e.skills.map(e=>`
                                <li class="text-xs flex gap-2 items-center text-gray-500">
                                    <i class="fa-solid fa-circle text-[4px] text-gray-400"></i>
                                    <span>${e}</span>
                                </li>
                            `).join(``)}
                        </ul>
                    </div>
                `).join(``)}
            </div>
        </div>
    `,m=document.querySelector(`#app`);if(!m)throw Error(`Elemento #app não encontrado`);m.innerHTML=`
    ${t(e)}
    <div class="flex gap-6">
        ${o({skills:n,languages:r})}
        <main class="flex-1 py-4">
            ${c(s)}
            ${u(l)}
            ${f(d)}  
            ${p(n)}
        </main>
    </div>
`;