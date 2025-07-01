# Version History

## Version 0.4 - Extended Destinations
**Date:** 30. června 2025
**Status:** ✅ Plně funkční

### Nové funkce v 0.4:
- ✅ **Rozšířený seznam destinací** - 16 zemí namísto 6 v hero selektoru
- ✅ **Kompletní destinace**: Schengen, Indie, Austrálie, USA, UK, Kanada, Nový Zéland, Jižní Korea K-ETA, Srí Lanka ETA, Turecko, Vietnam, Katar, Egypt, Saudská Arábie, Kolumbie, EATV
- ✅ **Rozšířené země "odkud"** - 33 zemí (Evropa, Severní Amerika, Jižní Amerika, Asie, Oceánie)
- ✅ **Opravené routování** - ETA typy správně směřují na light stránky
- ✅ **Login a registrace stránky** s moderním designem
- ✅ **Funkční Srí Lanka ETA** light stránka
- ✅ **Odstraněná duplicita** Nového Zélandu z hlavní stránky

### Co funguje ve verzi 0.4:
- ✅ Všechny funkce z verze 0.3
- ✅ Rozšířené destinace (16 zemí) ve výběru víz
- ✅ Kompletní set "from countries" (33 zemí)
- ✅ Funkční login/register stránky
- ✅ Všechny ETA a visa stránky s light designem
- ✅ Správné routování pro všechny typy víz
- ✅ TypeScript bez chyb
- ✅ Responsive design napříč všemi stránkami

---

## Version 0.3 - Stable Release
**Date:** 30. června 2025
**Status:** ✅ Plně funkční

### Co funguje:
- ✅ Hlavní stránka s přehledem destinací
- ✅ Všechny visa destinace:
  - USA ESTA (light + hlavní)
  - Velká Británie ETA (light + hlavní) 
  - Austrálie eVisitor (light + hlavní)
  - Kanada ETA (light + hlavní)
  - Indie vízum
  - Nový Zéland víza + NZ-ETA (light)
  - Schengen víza
  - EATV víza
  - Srí Lanka ETA (light)
- ✅ Kontaktní stránka (/kontakt)
- ✅ Funkční navbar s logoem odkazujícím na homepage
- ✅ Patička s funkčními odkazy
- ✅ Responsive design
- ✅ TypeScript bez chyb
- ✅ Všechny landing pages

### Klíčové funkce:
- Moderní design se světlými barvami
- Responzivní layout
- Funkční formuláře a CTA tlačítka
- Konzistentní UI napříč stránkami
- Optimalizované pro uživatelský zážitek

### Technické detaily:
- Next.js aplikace
- TypeScript
- Tailwind CSS
- shadcn/ui komponenty
- Serverless ready

---

## Návod na obnovení verze 0.3:

1. Smazat současné soubory: `rm -rf app components hooks lib public`
2. Obnovit ze zálohy: `cp -r .versions/v0.3/* ./`
3. Reinstalovat závislosti: `npm install`