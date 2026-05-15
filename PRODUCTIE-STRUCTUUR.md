# AMU Turnhout — Productie Directory Structuur

## Overzicht

Statische website gehost op IIS (amu-turnhout.be). Geen build-stap nodig — alle bestanden worden direct geserveerd.

## Bestanden voor productie

```
amu-turnhout/
│
├── index.html                  # Hoofdpagina (single page)
├── web.config                  # IIS configuratie (HTTPS, MIME types, caching)
├── favicon.svg                 # Favicon (gouden "A" op donkere achtergrond)
���── robots.txt                  # Zoekmachine-instructies
├── sitemap.xml                 # Sitemap voor SEO
│
├── css/
│   ├── design-tokens.css       # CSS variabelen (kleuren, fonts, spacing, sizes)
│   └── components.css          # Alle component-stijlen
│
├── js/
│   └── render.js               # Data laden (fetch) + alle render-functies
│
├── data/                       # JSON data-bestanden (content)
│   ├── info.json               # Bedrijfsinfo, openingsuren, parking
│   ├── menu.json               # Formules, gerechten, nagerechten
│   ├── fotos.json              # Foto-paden voor galerij
│   ├── aperitief-bier.json     # Aperitief, bier, frisdrank + gins
│   ├── wijnkaart.json          # Volledige wijnkaart
│   ├── wijnsuggesties.json     # Wijnsuggesties per kleur
│   ├── dessertwijnen.json      # Dessertwijnen (getoond bij wijnkaart)
│   ├── whisky.json             # Whisky-selectie
│   ├── digestieven.json        # Digestieven
│   ├── warme-dranken.json      # Warme dranken
│   └── barfood.json            # Bar food items
│
├── img/
│   ├── hero/
│   │   ├── vrouw_bar2.png          # Hero-afbeelding Bar Amu
│   │   └── vrouw_restaurant2.png   # Hero-afbeelding Restaurant
│   ├── fotos/
│   │   ├── 20230306_183126.jpg     # Interieur/sfeer foto's
│   │   ├── 20250903_083816.jpg
│   │   ├── 20251017_183611.jpg
│   │   ├── 20251024_141222.jpg
│   │   └── 20260414_*.jpg          # Recente foto's (14 stuks)
│   └── logo/
│       └── nieuw_logo.PNG          # Logo
│
└── fotos/                      # Originele foto's (gebruikt als ../fotos/ in HTML)
    └── *.jpg                   # Sfeer- en interieurfoto's
```

## NIET voor productie (mag achterblijven op dev)

```
docs/                           # Documentatie en originele afbeeldingen
mockups/                        # HTML-mockups (ontwikkeling)
.claude/                        # Claude Code configuratie
_bmad/                          # BMAD framework bestanden
_bmad-output/                   # BMAD output
.idea/                          # IntelliJ/WebStorm project
node/                           # Lokale Node.js installatie
```

## Deployment naar IIS

1. Kopieer alle productie-bestanden naar de IIS webroot
2. Zorg dat `web.config` mee gaat (HTTPS redirect + MIME types)
3. Domein: `amu-turnhout.be`
4. SSL-certificaat configureren op IIS

## Design Systeem

De volledige visuele stijl wordt aangestuurd via **CSS custom properties** (variabelen) in `css/design-tokens.css`. Dit zorgt ervoor dat je kleuren, fonts en groottes op één plek wijzigt en de hele site volgt automatisch.

### Thema's

Er zijn twee thema's gedefinieerd, geschakeld via het `data-theme` attribuut op `<html>`:

- **`dark-luxe`** (actief): donkere achtergrond, gouden accenten, luxueuze uitstraling
- **`intimate-elegance`**: warmere teal-tinten, zelfde structuur

### Tokens overzicht

| Categorie | Variabelen | Voorbeeld |
|-----------|-----------|-----------|
| **Kleuren** | `--color-primary`, `--color-accent`, `--bg-body` | Donker teal, cognac-goud |
| **Typografie** | `--font-heading`, `--font-body` | Playfair Display |
| **Font sizes** | `--text-xs` t/m `--text-hero` | 0.72rem → 7rem |
| **Font weights** | `--font-weight-heading`, `--font-weight-heading-bold` | 400, 500 |
| **Spacing** | `--space-xs` t/m `--space-3xl` | 0.25rem → 6rem |
| **Border radius** | `--radius-sm` t/m `--radius-pill` | 4px → 100px |
| **Schaduwen** | `--shadow-sm`, `--shadow-md`, `--shadow-lg` | Subtiele diepte |
| **Max-breedtes** | `--max-width-content`, `--max-width-wide` | 1000px, 1200px |
| **Cards** | `--bg-card`, `--bg-glass-border`, `--card-radius` | Transparante glaslook |

### Hoe aanpassen

- **Lettertype wijzigen**: pas `--font-heading` en `--font-body` aan in design-tokens.css + update de Google Fonts `<link>` in index.html
- **Kleuren wijzigen**: pas de `--color-*` variabelen aan onder het actieve thema (`[data-theme="dark-luxe"]`)
- **Tekstgrootte wijzigen**: pas `--text-xs` t/m `--text-lg` aan — alle componenten gebruiken deze variabelen
- **Kaart-stijl wijzigen**: pas `--bg-card`, `--bg-glass-border` en `--card-radius` aan

### Componentstructuur

`css/components.css` bevat de stijlen voor alle UI-componenten (navbar, hero, cards, formulegrid, drankenkaart, etc.). Elk component verwijst naar de tokens uit `design-tokens.css` — dus directe waarden (hardcoded px/rem/kleuren) komen hier zo min mogelijk voor.

## Content wijzigen

- **Teksten/uren/parking**: bewerk `data/info.json`
- **Menu/formules/gerechten**: bewerk `data/menu.json`
- **Drankenkaart**: bewerk de respectievelijke JSON in `data/`
- **Foto's**: voeg toe aan `img/fotos/` en update `data/fotos.json`
- **Styling**: pas `css/design-tokens.css` aan (kleuren, fonts, groottes)
