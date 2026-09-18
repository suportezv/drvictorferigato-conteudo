# Dr. Victor Ferigato Conteúdo Studio

Estúdio de edição e agendamento de conteúdo para as redes da marca **Dr. Victor Ferigato**. Infraestrutura compartilhada da agência; posicionamento desta marca.

- **`FRAMEWORK.md`**: persona, regras, pilares, assinaturas de edição e fluxo por vídeo.
- **`CLAUDE.md`**: memória persistente do projeto (IDs, contas, gotchas).
- **`projects/`**: um subdiretório por vídeo (briefing, transcrição, scripts de edição, caption).
- **`scripts/`**: setup e validação do ambiente (Linux/cloud).
- **`remotion/`**: composições React/TS de motion (`Aurora`, `CartaoTitulo`); a paleta vive só em `src/marca.ts`.

## Primeiro uso (cloud)

```bash
bash /home/user/drvictorferigato-conteudo/scripts/setup.sh   # caminho absoluto: o boot roda no diretório pai do repo
bash scripts/validate.sh
```
