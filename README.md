# Central Usinagem

Landing page em React, TypeScript e Vite, criada a partir dos três mockups fornecidos. Textos, navegação, cards e botões são componentes editáveis. A flange e as fotos de máquinas são recortes **via CSS** das referências originais; não há uma captura de tela substituindo a página inteira.

## Rodar e editar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar

| Arquivo | Conteúdo |
| --- | --- |
| `src/content.ts` | Contatos, endereço, métricas, serviços e especificações das máquinas |
| `src/App.tsx` | Estrutura e textos das seções, navegação e diálogos |
| `src/styles.css` | Tipografia, cores, espaçamentos, recortes das fotos e responsividade |
| `src/components/TechnicalIcon.tsx` | Ícones técnicos em SVG |
| `public/images/` | Imagens originais usadas como referência visual |

## Dados pendentes

Todos os dados comerciais não confirmados estão como **A COMBINAR**. O questionário preenchível completo está em `docs/A-COMBINAR.md`. Os números e a localização dos mockups não foram assumidos como informações reais.

O orçamento abre um painel inferior sobre a página, com links para WhatsApp e e-mail. O WhatsApp inclui uma mensagem inicial e o e-mail inclui o assunto; o envio é concluído pelo visitante no aplicativo escolhido. Não existe formulário ou backend de envio.

O número foi mantido exatamente como informado: **+55 47 9163-8538**. Confirme o possível nono dígito antes da divulgação. Nome, endereço em Pomerode, região de atendimento, horários e experiência da equipe já estão cadastrados. Tolerâncias técnicas, especificações e condições por serviço continuam pendentes.

Os mapas abrem uma busca pelo endereço informado. A base visual é ilustrativa e o ponto geográfico ainda não foi verificado.

O símbolo de duas engrenagens é usado no cabeçalho e no favicon. O original está em `design/brand-gears-original.png`; a versão otimizada está em `public/images/brand-gears.png`. O prompt e o processo estão em `docs/IDENTIDADE.md`.

## Verificação

```bash
npx playwright install chromium
npm run test:e2e
```

Os testes verificam navegação, diálogos, restauração de foco, painel inferior, links de contato e mapas, tema salvo, carregamento dos assets e ausência de overflow em dez larguras (320 a 2560 pixels), além da estabilidade do cabeçalho e da visibilidade dos títulos após navegar pelo menu. As capturas desktop e mobile são geradas em `artifacts/` (ignorado pelo Git). Para testar o build já gerado em vez do servidor de desenvolvimento, execute com a variável `TEST_PRODUCTION=1`.

## Interações e acessibilidade

- Navegação por âncoras e menu próprio para celular.
- Tema claro/escuro com preferência salva localmente.
- Diálogos nativos com Escape, gerenciamento de foco e bloqueio de rolagem.
- Cards com detalhes e chamada para orçamento.
- Foco visível, link para pular navegação e respeito a movimento reduzido.
- Fontes locais; sem dependência de Google Fonts ou serviços de mapa para renderizar a página.

## Referências e fidelidade

A identidade visual usa os anexos como referência. Na revisão solicitada, o conteúdo passou a usar um contêiner central de no máximo 1240 px, com tipografia e espaçamentos proporcionais. O cabeçalho mantém tamanho e posição durante toda a rolagem. O recorte da flange exclui o cabeçalho e os textos da imagem original. Os dados não confirmados permanecem A COMBINAR e o mapa usa uma base abstrata sem endereço fictício. Não se declara igualdade de 100% dos pixels: os anexos são imagens rasterizadas, e a página contém texto real renderizado pelo navegador.

As fotografias são ilustrativas e vieram dos anexos do solicitante. Máquinas, marcas, capacidades e posse dos equipamentos precisam de confirmação. Não são anunciadas certificações. Para trocar as fotos por arquivos independentes, altere `.hero-art` e `.machine-photo` em `src/styles.css`.

O build usa caminhos relativos (`base: './'`), permitindo publicar a pasta `dist/` em domínio próprio ou subdiretório. Domínio, hospedagem e publicação do site estão A COMBINAR.
