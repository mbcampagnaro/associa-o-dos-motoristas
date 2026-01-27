#!/bin/bash

# Script para criar repositório no GitHub e fazer push
# Execute: bash create-and-push.sh

REPO_NAME="associacao-site"
GITHUB_USER="mbcampagnaro"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🚀 Criando repositório no GitHub..."

# Verificar se GitHub CLI está instalado
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI encontrado. Criando repositório..."
    gh repo create ${REPO_NAME} --public --source=. --remote=origin --push
    if [ $? -eq 0 ]; then
        echo "✅ Repositório criado e código enviado com sucesso!"
        exit 0
    fi
fi

# Se GitHub CLI não estiver disponível, tentar via API
echo "⚠️  GitHub CLI não encontrado. Tentando criar via API..."

# Verificar se há token
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Token do GitHub não encontrado na variável GITHUB_TOKEN"
    echo ""
    echo "📝 Para criar o repositório, você tem duas opções:"
    echo ""
    echo "Opção 1 - Via GitHub CLI (recomendado):"
    echo "  1. Instale: brew install gh"
    echo "  2. Autentique: gh auth login"
    echo "  3. Execute este script novamente"
    echo ""
    echo "Opção 2 - Manualmente:"
    echo "  1. Acesse: https://github.com/new"
    echo "  2. Nome: ${REPO_NAME}"
    echo "  3. Deixe vazio e clique em 'Create repository'"
    echo "  4. Execute: git push -u origin main"
    echo ""
    echo "Opção 3 - Com token:"
    echo "  export GITHUB_TOKEN=seu_token_aqui"
    echo "  bash create-and-push.sh"
    exit 1
fi

# Criar repositório via API
echo "Criando repositório via API..."
RESPONSE=$(curl -s -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"${REPO_NAME}\",\"private\":false}")

if echo "$RESPONSE" | grep -q '"id"'; then
    echo "✅ Repositório criado com sucesso!"
    echo "📤 Fazendo push..."
    git push -u origin main
    if [ $? -eq 0 ]; then
        echo "✅ Código enviado com sucesso!"
    else
        echo "❌ Erro ao fazer push"
    fi
else
    echo "❌ Erro ao criar repositório:"
    echo "$RESPONSE"
    exit 1
fi



