# 🚀 Návod na deployment VisaExpert na GitHub a Vercel

## ✅ Připravenost na deployment

**Vaše aplikace je plně připravená na Vercel deployment!**

### Co je hotové:
- ✅ Next.js 15 s optimalizacemi pro production
- ✅ Správná konfigurace pro serverless prostředí  
- ✅ TypeScript a Tailwind CSS bez chyb
- ✅ Vícejazyčnost (čeština/angličtina)
- ✅ Responzivní design pro všechna zařízení
- ✅ Optimalizace obrázků a bundlů

---

## 📁 KROK 1: Příprava souborů

### Stáhněte si celý projekt:
1. **Vytvořte si složku na počítači** (např. `visa-expert`)
2. **Zkopírujte všechny soubory** z tohoto projektu
3. **Důležité soubory které potřebujete:**
   - `package.json` - závislosti
   - `next.config.js` - konfigurace
   - `tailwind.config.ts` - styling
   - `tsconfig.json` - TypeScript
   - složka `app/` - stránky aplikace
   - složka `components/` - komponenty
   - složka `hooks/` - logika
   - `README.md` (vytvoříte)

---

## 🐙 KROK 2: Nahrání na GitHub

### A) Vytvoření GitHub repozitáře:
1. **Jděte na GitHub.com** a přihlaste se
2. **Klikněte na "New repository"**
3. **Název:** `visa-expert` (nebo jiný)
4. **Nastavte jako:** Public nebo Private
5. **Nezaškrtávejte** "Initialize with README"
6. **Klikněte "Create repository"**

### B) Inicializace Git v projektu:
```bash
# V terminálu/příkazovém řádku v složce projektu:

# 1. Inicializovat Git
git init

# 2. Přidat všechny soubory
git add .

# 3. První commit
git commit -m "Initial commit - VisaExpert website"

# 4. Přidat remote (změňte USERNAME a REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. Nahrát na GitHub
git push -u origin main
```

---

## ☁️ KROK 3: Deployment na Vercel

### A) Registrace/přihlášení:
1. **Jděte na Vercel.com**
2. **Přihlaste se pomocí GitHub účtu**
3. **Povolte přístup k vašim repozitářům**

### B) Import projektu:
1. **Na Vercel dashboard klikněte "New Project"**
2. **Najděte váš `visa-expert` repozitář**
3. **Klikněte "Import"**

### C) Konfigurace projektu:
```
Project Name: visa-expert (nebo jiný)
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### D) Environment Variables (volitelné):
- Pro tuto aplikaci nejsou potřeba žádné speciální proměnné
- Všechno funguje out-of-the-box

### E) Deploy:
1. **Klikněte "Deploy"**
2. **Čekejte 2-3 minuty**
3. **Vaše stránka bude dostupná na:** `https://your-project.vercel.app`

---

## 🔧 KROK 4: Automatické aktualizace

**Po nastavení se každý push na GitHub automaticky nasadí na Vercel!**

```bash
# Pro aktualizaci stránky:
git add .
git commit -m "Update website"
git push
# Vercel automaticky nasadí změny
```

---

## 🌍 KROK 5: Vlastní doména (volitelné)

### V Vercel dashboard:
1. **Jděte do vašeho projektu**
2. **Settings → Domains**
3. **Add Domain** 
4. **Zadejte vaši doménu** (např. `visaexpert.cz`)
5. **Následujte DNS instrukce**

---

## 📱 Co dostanete:

### ✨ Funkční webová stránka:
- **Rychlá a responzivní** - optimalizováno pro mobily
- **Vícejazyčná** - čeština/angličtina s automatickým přepínáním
- **SEO přátelská** - připraveno pro vyhledávače
- **Moderní design** - profesionální vzhled
- **Bezpečná** - HTTPS, optimalizace bezpečnosti

### 🚀 Performance:
- **Rychlé načítání** - optimalizované obrázky a kód
- **CDN** - globální distribuce obsahu
- **Automatické škálování** - zvládne vysokou návštěvnost
- **99.9% uptime** - spolehlivost Vercel platformy

---

## 🆘 Řešení problémů:

### Build chyby:
```bash
# Lokální test buildu:
npm run build
```

### Git problémy:
```bash
# Pokud už existuje .git složka:
rm -rf .git
git init
# Pak pokračujte kroky výše
```

### Vercel deployment chyby:
- Zkontrolujte build logy v Vercel dashboard
- Ujistěte se, že všechny soubory jsou nahráné na GitHub
- Zkuste rebuild v Vercel

---

## 📞 Podpora:

**Vaše aplikace je plně testovaná a připravená k provozu!**

- GitHub dokumentace: https://docs.github.com
- Vercel dokumentace: https://vercel.com/docs
- Next.js dokumentace: https://nextjs.org/docs

**Úspěšný deployment! 🎉**