import type { ExperienceType } from "../types/Experience";

export const experienceData: ExperienceType =
{
    title: "Experiência Profissional",
    icon: "briefcase",
    experiences: [
        {
            dateFrom: "06/2022",
            dateTo: "Presente",
            company: "Agilstore",
            hole: "Full Stack Developer",
            descriptions: [
                "Desenvolvimento e evolução de aplicações web para sistemas de gestão empresarial (CRM/ERP) e plataformas de e-commerce utilizando Laravel, Vue.js, Inertia.js, Livewire e Alpine.js.",
                "Implementação de funcionalidades completas, desde a modelagem do banco de dados e desenvolvimento de APIs até a construção de interfaces responsivas e validações de negócio no front-end e back-end.",
                "Desenvolvimento de módulos administrativos, incluindo sistemas de permissões hierárquicas, internacionalização (i18n), gerenciamento de usuários, CRUDs avançados e componentes reutilizáveis.",
                "Construção de interfaces complexas com foco em experiência do usuário, incluindo menus hierárquicos, animações, carregamento assíncrono de dados (Lazy Loading) e otimização de desempenho.",
                "Desenvolvimento de fluxos de negócio para uma plataforma multinacional do setor de calçados ortopédicos, incluindo formulários dinâmicos de encomendas e sistema de separação de pedidos por leitura de código de barras.",
                "Participação no desenvolvimento de plataforma completa de e-commerce, implementando carrinho de compras, processo de checkout, integrações com gateways de pagamento e transportadoras, além da integração com o CRM responsável pela gestão logística dos pedidos.",
                "Desenvolvimento de funcionalidades auxiliares como geração de documentos PDF, exportação de planilhas Excel, envio automatizado de e-mails e integrações entre diferentes módulos do sistema.",
                "Participação ativa na análise técnica das demandas, planejamento das implementações, documentação de funcionalidades, manutenção corretiva e evolução contínua de sistemas em produção."
            ],
        },
        {
            dateFrom: "01/2020",
            dateTo: "Presente",
            company: "Autônomo",
            hole: "Desenvolvedor Full Stack",
            descriptions: [
                "Desenvolvimento de soluções web personalizadas para pequenos negócios, conduzindo todas as etapas do projeto, desde o levantamento de requisitos até a implantação em produção.",
                "Desenvolvimento de sistema de Ponto de Venda (PDV) utilizando PHP, com funcionalidades de controle de estoque, gerenciamento de caixa, sangrias, autenticação para operações administrativas e regras de negócio voltadas ao ambiente comercial.",
                "Desenvolvimento de websites institucionais responsivos utilizando HTML, CSS e JavaScript, priorizando usabilidade, desempenho e compatibilidade entre dispositivos.",
                "Implementação de interfaces interativas com animações e recursos visuais, incluindo utilização da biblioteca Three.js para criação de experiências imersivas na página inicial de um website institucional.",
                "Configuração e implantação de aplicações em ambiente de produção, incluindo gerenciamento de hospedagem, domínios, contas de e-mail corporativo e integração entre serviços de e-mail."
            ],
        },
    ],
};