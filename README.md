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

Quando o WhatsApp for confirmado, substitua `company.whatsapp` em `src/content.ts` por DDI + DDD + número, somente dígitos. O botão abrirá o WhatsApp automaticamente. Os botões dos mapas passam a abrir os destinos quando URLs HTTPS reais forem cadastradas. Enquanto os dados estiverem pendentes, esses botões mostram o diálogo correspondente.

A solicitação de orçamento pode ser preparada e copiada; não existe envio automático nem mensagem falsa de envio. O canal comercial e uma eventual integração de formulário estão A COMBINAR.

## Verificação

```bash
npx playwright install chromium
npm run test:e2e
```

Os testes verificam navegação, diálogos, restauração de foco, solicitação copiada, tema salvo, carregamento dos assets e ausência de overflow em nove larguras (320 a 2560 pixels), além da estabilidade do cabeçalho e da visibilidade dos títulos após navegar pelo menu. As capturas desktop e mobile são geradas em `artifacts/` (ignorado pelo Git). Para testar o build já gerado em vez do servidor de desenvolvimento, execute com a variável `TEST_PRODUCTION=1`.

## Interações e acessibilidade

- Navegação por âncoras e menu próprio para celular.
- Tema claro/escuro com preferência salva localmente.
- Diálogos nativos com Escape, gerenciamento de foco e bloqueio de rolagem.
- Cards com detalhes e chamada para orçamento.
- Foco visível, link para pular navegação e respeito a movimento reduzido.
- Fontes locais; sem dependência de Google Fonts ou serviços de mapa para renderizar a página.

## Referências e fidelidade

A identidade visual usa os anexos como referência. Na revisão solicitada, o conteúdo passou a usar um contêiner central de no máximo 1240 px, com tipografia e espaçamentos proporcionais. O cabeçalho mantém tamanho e posição durante toda a rolagem. O recorte da flange exclui o cabeçalho e os textos da imagem original. Os dados não confirmados permanecem A COMBINAR e o mapa usa uma base abstrata sem endereço fictício. Não se declara igualdade de 100% dos pixels: os anexos são imagens rasterizadas, e a página contém texto real renderizado pelo navegador.

As fotografias são ilustrativas e vieram dos anexos do solicitante. Máquinas, marcas, certificações, capacidades e posse dos equipamentos precisam de confirmação. Para trocar as fotos por arquivos independentes, altere `.hero-art` e `.machine-photo` em `src/styles.css`.

O build usa caminhos relativos (`base: './'`), permitindo publicar a pasta `dist/` em domínio próprio ou subdiretório. Domínio, hospedagem e publicação do site estão A COMBINAR.
