#!/bin/bash

# Script pro obnovení konkrétní verze
# Použití: ./restore.sh [verze]
# Příklad: ./restore.sh v0.3

if [ -z "$1" ]; then
    echo "❌ Musíš zadat verzi!"
    echo "📋 Dostupné verze:"
    ls -1 .versions/ | grep "^v" || echo "   Žádné verze nenalezeny"
    echo ""
    echo "💡 Použití: ./restore.sh v0.3"
    exit 1
fi

VERSION=$1

if [ ! -d ".versions/$VERSION" ]; then
    echo "❌ Verze $VERSION neexistuje!"
    echo "📋 Dostupné verze:"
    ls -1 .versions/ | grep "^v" || echo "   Žádné verze nenalezeny"
    exit 1
fi

echo "🔄 Obnovuji verzi $VERSION..."

# Záloha současného stavu
echo "💾 Vytvářím zálohu současného stavu..."
mkdir -p .versions/backup-$(date +%Y%m%d-%H%M%S)
cp -r app components hooks lib public .eslintrc.json .gitignore components.json next.config.js package.json package-lock.json postcss.config.js tailwind.config.ts tsconfig.json next-env.d.ts .versions/backup-$(date +%Y%m%d-%H%M%S)/ 2>/dev/null

# Odstranění současných souborů
echo "🗑️  Mazám současné soubory..."
rm -rf app components hooks lib public .eslintrc.json .gitignore components.json next.config.js package.json package-lock.json postcss.config.js tailwind.config.ts tsconfig.json next-env.d.ts

# Obnovení verze
echo "📦 Obnovuji verzi $VERSION..."
cp -r .versions/$VERSION/* ./

echo "✅ Verze $VERSION byla úspěšně obnovena!"
echo "🔧 Nezapomeň spustit: npm install"