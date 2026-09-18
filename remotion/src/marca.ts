/**
 * Paleta e tokens da marca Dr. Victor Ferigato.
 *
 * PENDENTE: a identidade visual ainda nao foi confirmada em briefing. Os valores
 * abaixo sao PLACEHOLDER neutros para o Remotion renderizar; nenhum hex aqui e
 * "cor da marca". Pistas ja registradas no CLAUDE.md (secao "Pistas de marca"):
 * o acento usado nos titulos da agencia e laranja, e as fontes citadas sao
 * Akkordeon (display) e Poppins (texto). Ao confirmar, trocar so este arquivo:
 * Aurora.tsx e CartaoTitulo.tsx leem tudo daqui e nao carregam cor nenhuma.
 *
 * Os nomes das chaves sao os que os componentes consomem (rosaVivo, violeta,
 * ciano, rosaSuave, auroraBase, tinta, fonte). Trocar o valor, nao o nome.
 */
export const marca = {
  /** Acento principal (palavra em destaque). PLACEHOLDER: laranja generico, hex a confirmar. */
  rosaVivo: "#E07A2F",
  rosa: "#C2661F",
  rosaSuave: "#F0A66B",
  /** Manchas secundarias da aurora. PLACEHOLDER neutro. */
  violeta: "#8C8C99",
  ciano: "#B5BFC7",
  azulNeon: "#C9D3DA",
  azulProfundo: "#3A3F47",
  fundoEscuro: "#0B0B0D",
  superficie: "#1A1A1F",
  /** Base clara dos fundos aurora. PLACEHOLDER neutro. */
  auroraBase: "#F4F3F1",
  tinta: "#1A1A1F",
  /** Fontes citadas nos briefings (a confirmar); sem rede no render, cai para a sans do sistema. */
  fonte: '"Poppins", "Akkordeon", system-ui, -apple-system, sans-serif',
} as const;
