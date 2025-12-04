// Google Apps Script para capturar dados no Google Sheets
// Instruções de configuração:

/*
1. Acesse https://script.google.com/
2. Clique em "Novo projeto"
3. Cole o código abaixo no editor
4. Salve o projeto com o nome "AMV - Captura de Dados"
5. Vá em "Executar" > "Executar função" > "doPost" (para testar)
6. Vá em "Implantar" > "Nova implantação"
7. Escolha "Tipo: Aplicativo da Web"
8. Execute como: "Eu"
9. Quem tem acesso: "Qualquer pessoa"
10. Clique em "Implantar"
11. Copie a URL da implantação e substitua no arquivo captura-rainha-2025.html

IMPORTANTE: Crie uma planilha no Google Sheets com as colunas:
- Nome
- Email  
- WhatsApp
- Data
- Página
*/

function doPost(e) {
  try {
    // Obter dados do POST
    const data = JSON.parse(e.postData.contents);
    
    // ID da planilha (substitua pelo ID da sua planilha)
    const SHEET_ID = 'SEU_SHEET_ID_AQUI';
    const SHEET_NAME = 'Dados Capturados';
    
    // Abrir a planilha
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Se a planilha não existir, criar
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      newSheet.getRange(1, 1, 1, 5).setValues([['Nome', 'Email', 'WhatsApp', 'Data', 'Página']]);
    }
    
    // Adicionar dados na planilha
    const rowData = [
      data.nome || '',
      data.email || '',
      data.whatsapp || '',
      data.data || new Date().toLocaleString('pt-BR'),
      data.pagina || 'Escolha da Rainha 2025'
    ];
    
    sheet.appendRow(rowData);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Dados salvos com sucesso!'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: 'Erro ao salvar dados: ' + error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Para testes via GET
  return ContentService
    .createTextOutput(JSON.stringify({message: 'API funcionando! Use POST para enviar dados.'}))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função para testar localmente
function testarCaptura() {
  const testData = {
    nome: 'João Silva',
    email: 'joao@teste.com',
    whatsapp: '(54) 99999-9999',
    data: new Date().toLocaleString('pt-BR'),
    pagina: 'Escolha da Rainha 2025'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}
