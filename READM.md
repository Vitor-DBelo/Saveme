
# Save Me 🔒

Save Me é uma aplicação em linha de comando (CLI) desenvolvida em JavaScript que ajuda você a gerenciar e fazer backup dos seus arquivos de forma simples e organizada.

## 📝 Versão

Versão atual: 0.0.2

## 📋 Funcionalidades

- `saveme init` - Mostra informações sobre o diretório atual
- `saveme ls` - Lista todos os arquivos e subdiretórios do diretório atual
- `saveme lsT` - Lista arquivos e subdiretórios de forma detalhada (tree view)
- `saveme copy` - Cria uma cópia de segurança do diretório atual
        - Você será solicitado a informar o destino do backup
        - Se nenhum destino for especificado, será usado o caminho padrão `C:\saveme copy`

## 🚀 Como Instalar

1. Certifique-se de ter o Node.js instalado em seu computador
2. Clone este repositório
3. Na pasta do projeto, execute:
```bash
npm install
npm link
```


## 🛠️ Tecnologias Utilizadas

- Node.js
- Commander.js - Para criação da interface CLI
- ES Modules
- File System (fs/promises) - Para manipulação de arquivos


