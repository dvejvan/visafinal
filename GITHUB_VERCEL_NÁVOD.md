# 🚀 KOMPLETNÍ NÁVOD - GitHub & Vercel Deploy

## 📦 **NEJNOVĚJŠÍ ARCHIV**
```
visa-expert-final-opraveny.tar.gz
```
**✅ Obsahuje všechny opravy:**
- Opravené error handling komponenty (404.js problém vyřešen)
- Správné CSS syntaxe
- Funkční překlady
- Optimalizace pro Vercel

---

## 📋 **CO POTŘEBUJETE**
- GitHub účet
- Vercel účet (lze propojit s GitHub)
- Stažený archiv `visa-expert-final-opraveny.tar.gz`

---

## 🗂️ **KROK 1: Příprava souborů**

### 1.1 Stáhněte archiv
```bash
visa-expert-final-opraveny.tar.gz
```

### 1.2 Rozbalte archiv
```bash
tar -xzf visa-expert-final-opraveny.tar.gz
cd visa-expert/
```

### 1.3 Ověřte strukturu
Měli byste vidět tyto soubory:
```
📁 app/
📁 components/
📁 hooks/
📁 lib/
📁 locales/
📁 public/
📄 package.json
📄 next.config.js
📄 tailwind.config.ts
📄 README.md
📄 .gitignore
```

---

## 🌐 **KROK 2: Nahrání na GitHub**

### 2.1 Vytvořte nový repositář
1. Jděte na [github.com](https://github.com)
2. Klikněte na **"New repository"**
3. Název: `visa-expert` (nebo jiný)
4. Nastavte jako **Public** nebo **Private**
5. ❌ **NEVYBÍREJTE** "Initialize with README"
6. Klikněte **"Create repository"**

### 2.2 Nahrejte soubory
**Možnost A - Přes webové rozhraní:**
1. Na stránce nového repo klikněte **"uploading an existing file"**
2. Přetáhněte všechny soubory z rozbaleného archivu
3. Napište commit message: `Initial commit - Visa Expert website`
4. Klikněte **"Commit changes"**

**Možnost B - Přes Git příkazy:**
```bash
git init
git add .
git commit -m "Initial commit - Visa Expert website"
git branch -M main
git remote add origin https://github.com/VASE_UZIVATELSKE_JMENO/visa-expert.git
git push -u origin main
```

---

## ⚡ **KROK 3: Deploy na Vercel**

### 3.1 Připojte se k Vercel
1. Jděte na [vercel.com](https://vercel.com)
2. Klikněte **"Sign up"** nebo **"Log in"**
3. Vyberte **"Continue with GitHub"**
4. Autorizujte Vercel přístup k vašemu GitHub účtu

### 3.2 Importujte projekt
1. Na Vercel dashboardu klikněte **"New Project"**
2. Najděte váš `visa-expert` repositář
3. Klikněte **"Import"**

### 3.3 Konfigurace
**Framework Preset:** `Next.js` (automaticky detekováno)
**Root Directory:** `./` (výchozí)
**Build Command:** `npm run build` (výchozí)
**Output Directory:** `.next` (výchozí)

### 3.4 Environment Variables (volitelné)
Pokud máte nějaké:
```
NEXT_PUBLIC_API_URL=https://your-api.com
```

### 3.5 Deploy
1. Klikněte **"Deploy"**
2. Čekejte 2-5 minut na build
3. ✅ **Hotovo!** Dostanete URL typu: `https://visa-expert-abc123.vercel.app`

---

## 🔧 **ŘEŠENÍ PROBLÉMŮ**

### ❌ **Build selže s CSS chybou**
```bash
# Zkontrolujte, že používáte správný archiv
visa-expert-final-opraveny.tar.gz
```

### ❌ **TypeScript chyby**
```bash
# Vercel by měl automaticky nainstalovat závislosti
# Pokud ne, kontaktujte support
```

### ❌ **404 na subpages**
```bash
# Je to normální - stránky se buildují on-demand
# Zkuste navštívit /visa/us - mělo by fungovat
```

---

## 🎯 **VÝSLEDEK**

Po úspěšném deploy budete mít:
- ✅ Funkční web na `https://VASE-DOMENA.vercel.app`
- ✅ Automatické buildy při každém push na GitHub
- ✅ Všechny stránky fungují (/visa/us, /visa/schengen, atd.)
- ✅ České překlady
- ✅ Responzivní design
- ✅ Rychlé načítání

---

## 📱 **TESTOVÁNÍ**

Po deployi otestujte:
1. **Hlavní stránka** - `/`
2. **USA víza** - `/visa/us`  
3. **Schengen víza** - `/visa/schengen`
4. **Formulář** - `/application-form`
5. **Jak to funguje** - `/how-it-works`

---

## 🔄 **BUDOUCÍ ZMĚNY**

Když chcete změnit web:
1. Upravte soubory lokálně
2. Pushněte na GitHub
3. Vercel automaticky přebuilds
4. Změny jsou live za 1-2 minuty

---

## 📞 **PODPORA**

Pokud máte problémy:
- **GitHub Issues:** V repozitáři vytvořte issue
- **Vercel Support:** help@vercel.com
- **Discord komunity:** Next.js, Vercel

**🎉 Vaše víza expertní stránka je připravena k provozu!**