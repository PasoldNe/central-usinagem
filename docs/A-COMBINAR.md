# Dados comerciais e pendências

Os dados confirmados abaixo foram informados pelo responsável. O arquivo `src/content.ts` concentra contatos, localização, indicadores, serviços e especificações. Nenhum número técnico foi deduzido dos mockups.

## Informações confirmadas

| Informação | Definição |
| --- | --- |
| Nome público | Central Usinagem |
| Identidade visual | Não há logotipo oficial. Foi solicitada a criação de um símbolo com duas engrenagens, minimalista e com aparência 3D. |
| Imagens | O uso das imagens ilustrativas foi autorizado. Elas não comprovam marcas, modelos ou posse das máquinas retratadas. |
| WhatsApp informado | `554791638538`, exibido como **+55 47 9163-8538**. Mantido exatamente como fornecido; confirmação do possível nono dígito pendente. |
| E-mail | centralusinagem8350@gmail.com |
| Endereço | Rua XV de Novembro, 8350, Testo Central, Pomerode — SC, CEP 89107-000 |
| Visitas | Sem agendamento. Mensagem: “Pode vir nos visitar”. |
| Atendimento | Segunda a sexta-feira, das 7h15 às 17h30, com intervalo das 11h30 às 12h30 |
| Região atendida | Pomerode, Jaraguá do Sul, Blumenau, Timbó e arredores |
| Outras regiões | Locais mais distantes e outros estados mediante avaliação prévia |
| Experiência da equipe | Mais de 10 anos, apresentada como **10+** |
| Tempo da empresa | Cerca de 7 anos; deve permanecer distinto da experiência da equipe |
| Serviços oferecidos | Torneamento CNC, fresamento CNC, solda e montagem, desenvolvimento de protótipos, lotes seriados e controle dimensional |
| Certificações | A empresa informou que não possui certificações. Não anunciar certificação. |
| Percentual de inspeção | Não foi informado um percentual. Não usar 100% ou outro número presumido. |
| Orçamento | Abrir painel inferior para escolher contato por WhatsApp ou e-mail. Não há formulário com envio por backend. |
| Links de mapas | Gerados como busca pelo endereço informado. Não correspondem a uma geolocalização verificada. |

O mapa visual usa uma base abstrata neutra. Os links do Google Maps e Apple Maps pesquisam o endereço; o resultado e o ponto exato ainda precisam ser verificados. `company.mapsVerified` permanece `false`.

## Perguntas ainda pendentes

Preencha apenas o que puder ser confirmado. As demais respostas permanecem **A COMBINAR**.

### Contato e localização

| Pergunta | Resposta | Campo relacionado |
| --- | --- | --- |
| O WhatsApp é exatamente +55 47 9163-8538 ou falta algum dígito? Se houver correção, qual é o número completo? | A COMBINAR | `company.whatsapp`, `company.phone`, `company.phoneDisplay`, `company.whatsappNeedsConfirmation` |
| Os resultados de busca dos mapas apontam para a entrada correta? Há um link oficial ou coordenadas para usar no lugar da busca? | A COMBINAR | `company.googleMapsUrl`, `company.appleMapsUrl`, `company.mapsVerified` |

Nenhum dígito será acrescentado ao contato por suposição.

### Precisão e indicadores

| Pergunta | Resposta | Campo relacionado |
| --- | --- | --- |
| Qual tolerância dimensional numérica pode ser divulgada, em qual unidade e para quais processos, materiais e dimensões? “Bem baixa” não define uma medida técnica. | A COMBINAR | `company.precision` |
| Quantos projetos entregues podem ser divulgados e qual é a data-base da contagem? | A COMBINAR | `company.deliveredProjects` |

### Condições por serviço

Para cada serviço, informe materiais/ligas, dimensões e peso máximos, quantidades mínimas/máximas e prazos usuais. Capacidades e prazos podem variar conforme a peça e devem incluir suas condições.

| Serviço confirmado | Materiais (`materials`) | Limites, quantidades e capacidade (`capacity`) | Prazos e condições (`leadTime`) |
| --- | --- | --- | --- |
| Torneamento CNC | A COMBINAR | A COMBINAR | A COMBINAR |
| Fresamento CNC | A COMBINAR | A COMBINAR | A COMBINAR |
| Solda e montagem | A COMBINAR | A COMBINAR | A COMBINAR |
| Desenvolvimento de protótipos | A COMBINAR | A COMBINAR | A COMBINAR |
| Lotes seriados | A COMBINAR | A COMBINAR | A COMBINAR |
| Controle dimensional | A COMBINAR | A COMBINAR | A COMBINAR |

Não anunciar rastreabilidade total, inspeção de 100%, instrumentos certificados ou emissão de relatórios técnicos sem confirmação específica. As descrições de serviço não incluem essas promessas.

### Parque de máquinas

Os serviços foram confirmados; as máquinas e suas especificações ainda precisam ser individualizadas. As fotos permanecem ilustrativas e autorizadas.

| Pergunta | Resposta |
| --- | --- |
| Quais máquinas compõem o parque real, com quantidade, marca e modelo de cada uma? As três categorias exibidas correspondem ao parque atual? | A COMBINAR |
| Centro CNC: número de eixos/configuração | A COMBINAR |
| Centro CNC: cursos X, Y e Z, em mm | A COMBINAR |
| Centro CNC: precisão/tolerância e condições de aplicação | A COMBINAR |
| Torno CNC: diâmetro máximo usinável, em mm | A COMBINAR |
| Torno CNC: comprimento máximo usinável, em mm | A COMBINAR |
| Torno CNC: precisão/tolerância e condições de aplicação | A COMBINAR |
| Furadeira radial: diâmetro máximo de furação em mm e material de referência | A COMBINAR |
| Furadeira radial: alcance do braço, em mm | A COMBINAR |
| Furadeira radial: dimensões da mesa, em mm | A COMBINAR |

As especificações ficam em `machines[].specs`. Quando houver vários modelos de uma categoria, registre os dados de cada um sem reunir seus limites em um equipamento fictício. Não apresentar as marcas dos mockups como máquinas próprias nem anunciar “última geração” sem comprovação.

### Publicação

| Pergunta | Resposta |
| --- | --- |
| Qual será o domínio/endereço público do site? | A COMBINAR |
| Qual hospedagem ou plataforma será usada? | A COMBINAR |

Não inclua senhas ou tokens neste documento.

## Campos disponíveis para implementação

- `company.phoneDisplay`: contato formatado para exibição; `whatsappNeedsConfirmation` registra a confirmação pendente dos dígitos.
- `company.businessDays`, `businessHours` e `businessBreak`: dias, expediente e intervalo em campos separados.
- `company.visitMessage` e `visitPolicy`: convite e condição de visita.
- `company.regionalFocus`, `serviceArea` e `remoteService`: atendimento regional e condição para regiões distantes. Não existe métrica percentual de inspeção.
- `company.experience`, `experienceLabel` e `companyAge`: experiência da equipe separada do tempo da empresa.
- `company.googleMapsUrl`, `appleMapsUrl` e `mapsVerified`: buscas por endereço e estado da verificação geográfica.
- `services[].materials`, `capacity` e `leadTime`: informações específicas de cada serviço, ainda **A COMBINAR**.
