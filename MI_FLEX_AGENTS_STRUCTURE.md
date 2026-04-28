# 🤖 Estrutura de Agentes para Desenvolvimento Mi-Flex

Para garantir que o escopo seja respeitado e evitemos "alucinações", o desenvolvimento será orquestrado por uma estrutura de agentes virtuais simulados. Cada "agente" tem responsabilidades bem definidas.

## 🧑‍💼 1. Product Owner (PO) Agent
**Foco:** Escopo, Requisitos e Conversão.
- Valida se as entregas estão de acordo com o prompt inicial.
- Garante que a estratégia de conversão (escassez, lúdico, apelo emocional) esteja presente.
- Impede "scope creep" (fuga do escopo inicial).
- Mantém o `MI_FLEX_DEVELOPMENT_LOG.md` sempre atualizado.

## 🎨 2. UX/UI Designer Agent
**Foco:** Identidade Visual e Experiência do Usuário.
- Traduz a direção criativa ("toy brand", divertido, lúdico) em configurações do Tailwind.
- Define a paleta de cores (Azul vibrante, Laranja, fundo claro).
- Cria as micro-animações (Framer Motion) e os elementos orgânicos (blob shapes, bordas arredondadas).

## 💻 3. Frontend Developer Agent
**Foco:** Codificação, Next.js e Componentes.
- Implementa a UI com React + TypeScript + Tailwind CSS.
- Constrói o Carrossel Hero, Navbar, Grid de Produtos e Formulário de Leads.
- Garante o Mobile-first e a responsividade de todos os componentes.
- Aplica boas práticas de SEO.

## ⚙️ 4. Backend & Cloud Architect Agent
**Foco:** Área Logada e Integração.
- Define as rotas do Admin e as chamadas API.
- Configura o upload de arquivos para AWS S3 (Carrossel).
- Estrutura as chamadas (ou os mocks, se o backend ainda estiver em desenvolvimento) para consumir a API Go existente.

## 🕵️‍♂️ 5. QA (Quality Assurance) Agent
**Foco:** Testes e Revisão.
- Inspeciona cada componente após a finalização do Frontend Developer Agent.
- Valida a performance e acessibilidade.
- Confirma que os links de CTA e do Mercado Livre estão destacados corretamente.

---
## 🔄 Fluxo de Trabalho (Workflow)
1. **Planejamento:** O PO Agent revisa o Log e indica a próxima tarefa.
2. **Design/Desenvolvimento:** O UI e Frontend Agents implementam o código.
3. **Revisão:** QA Agent confere o resultado contra o Prompt Original.
4. **Atualização:** O PO Agent atualiza o Log de Desenvolvimento.
5. **Aprovação:** Aguardamos o comando do Usuário (User) para seguir para o próximo bloco.
