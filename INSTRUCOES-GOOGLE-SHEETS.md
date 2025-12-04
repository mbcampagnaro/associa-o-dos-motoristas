# Instruções para Configurar Google Sheets

## Passo 1: Criar a Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para "AMV - Captura de Dados"
4. Na primeira linha, adicione os cabeçalhos:
   - A1: Nome
   - B1: Email
   - C1: WhatsApp
   - D1: Data
   - E1: Página

## Passo 2: Configurar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Cole o código do arquivo `google-apps-script.js`
4. **IMPORTANTE**: Substitua `SEU_SHEET_ID_AQUI` pelo ID da sua planilha
   - Para encontrar o ID: olhe a URL da planilha
   - Exemplo: `https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/edit`
   - O ID é: `1ABC123DEF456GHI789JKL`

## Passo 3: Testar o Script
1. No Google Apps Script, clique em "Executar" > "Executar função" > "testarCaptura"
2. Verifique se os dados aparecem na planilha
3. Se der erro, verifique se o ID da planilha está correto

## Passo 4: Implantar a API
1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Escolha:
   - **Tipo**: Aplicativo da Web
   - **Execute como**: Eu
   - **Quem tem acesso**: Qualquer pessoa
3. Clique em "Implantar"
4. **COPIE A URL DA IMPLANTAÇÃO**

## Passo 5: Atualizar o Site
1. **CONCLUÍDO** - A URL da implantação já está configurada no arquivo `captura-rainha-2025.html`
2. A URL configurada é: `https://script.google.com/macros/s/AKfycbyS8DhiWuNVdlkAKqIm5ooIlLdXDOryXx8iQlqMKdADG-_BKo8eBFdXtKBeIyYT322g/exec`

## Passo 6: Testar Tudo
1. Abra o site no navegador
2. Vá para a página de captura
3. Preencha o formulário
4. Verifique se os dados aparecem na planilha

## Solução de Problemas

### Erro "Script não encontrado"
- Verifique se a URL da implantação está correta
- Certifique-se de que a implantação foi feita como "Qualquer pessoa"

### Erro "Planilha não encontrada"
- Verifique se o ID da planilha está correto
- Certifique-se de que a planilha tem as colunas corretas

### Dados não aparecem
- Verifique se o script tem permissão para acessar a planilha
- Execute a função "testarCaptura" para verificar

## Estrutura da Planilha
```
| Nome        | Email              | WhatsApp        | Data                    | Página                |
|-------------|--------------------|-----------------|-------------------------|-----------------------|
| João Silva  | joao@email.com     | (54) 99999-9999 | 15/01/2025 14:30:25    | Escolha da Rainha 2025|
| Maria Santos| maria@email.com    | (54) 88888-8888 | 15/01/2025 14:35:10    | Escolha da Rainha 2025|
```

## Próximos Passos
Após configurar, você poderá:
- Exportar os dados para Excel
- Criar relatórios automáticos
- Integrar com outras ferramentas
- Enviar e-mails automáticos para os contatos
