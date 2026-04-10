/* ============================================================
   AMU TURNHOUT — DATA
   ============================================================
   Alle menu- en drankgegevens als JavaScript objecten.
   Gegenereerd uit de JSON bestanden in src/assets/data/.
   ============================================================ */

const AMU = {};

/* ── RESTAURANT INFO ─────────────────────────────────────── */
AMU.info = {
  naam: "Amu",
  adres: "Patersstraat 79-81, 2300 Turnhout",
  tel: "014/41.24.89",
  gsm: "0486/32.05.21",
  email: "info@amu-turnhout.be",
  btw: "BE0785.889.842",
  uren: [
    { dag: "Maandag",   tijd: "18:00 – 21:00" },
    { dag: "Dinsdag",   tijd: "gesloten" },
    { dag: "Woensdag",  tijd: "gesloten" },
    { dag: "Donderdag", tijd: "18:00 – 21:00" },
    { dag: "Vrijdag",   tijd: "12:00 – 13:30 / 18:00 – 21:00" },
    { dag: "Zaterdag",  tijd: "18:00 – 21:00" },
    { dag: "Zondag",    tijd: "12:00 – 13:30" }
  ]
};

/* ── MENU FORMULES ───────────────────────────────────────── */
AMU.formules = [
  { naam: "Lunch",           gangen: 3, prijs: 42,  wijn: null,                      detail: "Elke vrijdag en zondag middag" },
  { naam: "Dagmenu",         gangen: 3, prijs: 52,  wijn: "Wijnarrangement +24",     detail: "Chef's keuze van de dag", featured: true },
  { naam: "Seizoensmenu",    gangen: 4, prijs: 62,  wijn: "Wijnarrangement +30",     detail: "Seizoensgebonden verrassingsmenu" },
  { naam: "Amu-menu",        gangen: 5, prijs: 72,  wijn: "Wijnarrangement +36",     detail: "De volledige Amu-ervaring" },
  { naam: "Carte Blanche",   gangen: 6, prijs: 82,  wijn: "Wijnarrangement +44",     detail: "Vertrouw volledig op Chef Marjanne" },
  { naam: "Grand Prestige",  gangen: 7, prijs: 95,  wijn: "Wijnarrangement +55",     detail: "Het ultieme gastronomisch parcours" },
  { naam: "Vegetarisch",     gangen: null, prijs: null, wijn: null,                   detail: "Elk menu is ook volledig vegetarisch beschikbaar" }
];

/* ── PARKING ─────────────────────────────────────────────── */
AMU.parking = [
  { naam: "Parking Gasthuisstraat", afstand: "2 min lopen", tarief: "Eerste 2u gratis, nadien €1,50/u" },
  { naam: "Parking Markt",          afstand: "5 min lopen", tarief: "€1,50/u" },
  { naam: "Parking Warandestraat",   afstand: "3 min lopen", tarief: "Gratis vanaf 18:00" }
];


/* ── APERITIEF, BIER, FRIS ────────────────────────────── */
AMU.aperoBierFris = ﻿{
  "rubrieken": [
    {
      "titel": "Aperitief",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "suggestie: Fourchette 7,5%",
              "omschrijving1": "Fourchette is een bijzonder elegant bier, ontstaan uit een harmonieuze blend van witbier en tripel. Verfijnde aroma’s van citrus en koriander gaan naadloos samen met een volle, evenwichtige smaak. De aangename gistfruitigheid en zachte bitterheid zorgen voor een fris maar karaktervol aperitiefbier.",
              "fles": {},
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            },
            {
              "titel": "Aperitief Amu. ",
              "omschrijving1": "spumante, Martini rosato, sinaasappel",
              "fles": {},
              "glas": {
                "prijs": "11.50",
                "volume": ""
              }
            },
            {
              "titel": "Aperitief Amu Zero 0.0%. ",
              "omschrijving1": "Versin vermouth, Indian tonic, rozemarijn",
              "fles": {},
              "glas": {
                "prijs": "11.50",
                "volume": ""
              }
            },
            {
              "titel": "Champagne Pommery Apanage",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "19.00",
                "volume": ""
              }
            },
            {
              "titel": "Spumante Radacini Moldavië",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Pornstar Martini",
              "omschrijving1": "vanille vodka, passievrucht, spumante, eiwit, limoensap",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Witte porto",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.50",
                "volume": ""
              }
            },
            {
              "titel": "Rode porto",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.50",
                "volume": ""
              }
            },
            {
              "titel": "Sherry Grande Fiesta Fino dry",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Pineau de Charentes de Louvard blanc",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Martini bianco",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Martini rosso",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Vermouth Rosso di torino",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "9.50",
                "volume": ""
              }
            },
            {
              "titel": "Vermouth bianco Del Professore",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "9.00",
                "volume": ""
              }
            },
            {
              "titel": "Vermouth Roteglia 1848 rose ",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Campari",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.50",
                "volume": ""
              }
            },
            {
              "titel": "Campari soda",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Campari orange",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12.00",
                "volume": ""
              }
            },
            {
              "titel": "Kir",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Kir Royal",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "19.00",
                "volume": ""
              }
            },
            {
              "titel": "Ricard",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Belvedere vodka",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12",
                "volume": ""
              }
            },
            {
              "titel": "Bacardi cola",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            },
            {
              "titel": "Bacardi reserva 8 jaar cola",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Picon vin blanc",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "8cl / glas",
      "hideGlas": true
    },
    {
      "titel": "Alcoholvrije aperitief",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Bonheur 0.0 %",
              "omschrijving1": "Een heerlijk alcoholvrij aperitief op basis van gamay druiven uit de Beaujolais streek, gecombineerd met pittige kruiden afkomstig van dezelfde wijngaard. Perfect uitgebalanceerde smaakbom die al je zintuigen stimuleert!",
              "fles": {},
              "glas": {
                "prijs": "9",
                "volume": ""
              }
            },
            {
              "titel": "Aperitief Amu Zero 0.0%. ",
              "omschrijving1": "Versin vermouth, Indian tonic, rozemarijn",
              "fles": {},
              "glas": {
                "prijs": "11.50",
                "volume": ""
              }
            },
            {
              "titel": "Copperhead - elderflower",
              "omschrijving1": "Heerlijke non alcoholic gin met een boost aan verschillende kruiden, en heerlijke kardemom tonen in de afdronk.\nPerfecte mix met een elderflower tonic.",
              "fles": {},
              "glas": {
                "prijs": "13.50",
                "volume": ""
              }
            },
            {
              "titel": "Opius Albedo",
              "omschrijving1": "Lekker kruidig met duidelijke smaken van zachte anijs en venkelzaad. Kan perfect gedronken worden on-the-rocks of in de mix met een ginger ale.",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            },
            {
              "titel": "Opius Amaro",
              "omschrijving1": "Frisse aroma's van citrus en zachte honing met een stevige en aangename bittere finish.\nPerfecte mix met een indian tonic.",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            },
            {
              "titel": "Rum Cola",
              "omschrijving1": "Opius Nigredo met cola.",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            },
            {
              "titel": "Dark 'n Stormy",
              "omschrijving1": "Opius Nigredo met gingerbeer.",
              "fles": {},
              "glas": {
                "prijs": "13.50",
                "volume": ""
              }
            },
            {
              "titel": "Pacific",
              "omschrijving1": "Verfrissende anijs aperitief. 0% suiker, 0% alcohol, 0% caloriën",
              "fles": {},
              "glas": {
                "prijs": "6.00",
                "volume": ""
              }
            },
            {
              "titel": "San Bitter 17cl",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            },
            {
              "titel": "Crodino (zoet) 17cl",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            },
            {
              "titel": "Nogroni",
              "omschrijving1": "Een combinatie van Campari 0.0 en Opius Amaro.",
              "fles": {},
              "glas": {
                "prijs": "12.50",
                "volume": ""
              }
            },
            {
              "titel": "Campari 0,0% orange",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "11.00",
                "volume": ""
              }
            },
            {
              "titel": "Campari 0,0% soda",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12.00",
                "volume": ""
              }
            },
            {
              "titel": "Nordes 0,0% gin tonic",
              "omschrijving1": "Heerlijke verfrissende 0,0 gin met frisse citrus en eucalyptus aroma’s gemixt met een Indian Fever Tree tonic. Onze favoriete alcoholvrije gin tonic!",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    },
    {
      "titel": "Eens iets anders",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Negroni",
              "omschrijving1": "Martini rosso, campari, gin",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Americano",
              "omschrijving1": "Martini rosso, campari, soda",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Cynar",
              "omschrijving1": "Bitter likeur op basis van 13 kruiden en artisjok",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Rosso Antico",
              "omschrijving1": "Italiaans aperitief op basis van rode wijn",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    },
    {
      "titel": "Stoere bubbels",
      "items": [
        {
          "titel": "Blond",
          "items": [
            {
              "titel": "Fourchette Grand Cru sauvignon blanc 7,5% 75cl.",
              "omschrijving1": "Deze Fourchette Grand Cru sauvignon blanc bouwt voort op het klassieke Fourchette bier, maar heeft een unieke twist gekregen. Voor deze speciale editie heeft het bier meer dan 15 maanden gerijpt op sauvignon blanc vaten. Bij het proeven van dit bier ontdek je subtiele lichtzure tonen en een vleugje agrumes. De rijping op sauvignon blanc vaten heeft het bier een verfrissende dimensie gegeven. Het is zacht en tegelijk krachtig, complex, maar ook uitgebalanceerd.",
              "fles": {},
              "glas": {
                "prijs": "52.00",
                "volume": ""
              }
            },
            {

              "titel": "Pils Cristal Alken 5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "3.50",
                "volume": ""
              }
            },
            {
              "titel": "Duvel 8.5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.50",
                "volume": ""
              }
            },
            {
              "titel": "St. Bernardus wit 5.5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.20",
                "volume": ""
              }
            },
            {
              "titel": "Cornet 8.5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.20",
                "volume": ""
              }
            },
            {
              "titel": "Gardiaan Blond 5.8%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            },
            {
              "titel": "Schuppenboer Tripel 8%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            },
            {
              "titel": "Noblesse De Dochter van de Korenaar 5,5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.00",
                "volume": ""
              }
            },
            {
              "titel": "Tripel 888 8,8%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            },
            {
              "titel": "Westmalle Tripel 9.5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.20",
                "volume": ""

              }
            },
            {
              "titel": "Belle Fleur IPA De Dochter van de Korenaar 6%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.50",
                "volume": ""
              }
            },
            {
              "titel": "Delta IPA 6%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            },
            {
              "titel": "N.A. Cristal",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "3.50",
                "volume": ""
              }
            },
            {
              "titel": "N.A. GOD Good old Days",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.50",
                "volume": ""
              }
            },
            {
              "titel": "N.A. Super 8 Flandrien ",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Geuze",
          "items": [
            {
              "titel": "Oud Beersel oude geuze 6,0 % ",
              "omschrijving1": "",
              "fles": {
                "prijs": "10.50",
                "volume": "37,5cl"
              },
              "glas": {
              }
            }
          ]
        },
        {
          "titel": "Kriek",
          "items": [
            {
              "titel": "Oud Beersel Kriek 6,0 % ",
              "omschrijving1": "",
              "fles": {
                "prijs": "11.50",
                "volume": "37,5cl"
              },
              "glas": {
              }
            }
          ]
        },
        {
          "titel": "Donker",
          "items": [
            {
              "titel": "St. Bernardus Abt 12 10,5 %",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.20",
                "volume": ""
              }
            },
            {
              "titel": "Kempisch vuur 3 dubbel 7,5%",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.20",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    },
    {
      "titel": "Water",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Earth 0,75 cl bruisend/niet bruisend",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    },
    {
      "titel": "Frisdrank",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Ritchie Cola 27,50 cl.",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.25",
                "volume": ""
              }
            },
            {
              "titel": "Ritchie Cola zero 27,50 cl.",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.25",
                "volume": ""
              }
            },
            {
              "titel": "Lipton Ice-tea",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "3.80",
                "volume": ""
              }
            },
            {
              "titel": "Looza sinaasappel",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "3.50",
                "volume": ""
              }
            },
            {
              "titel": "Fever-Tree Ginger ale",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Vers sinaasappelsap",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.00",
                "volume": ""
              }
            },
            {
              "titel": "Ritchie Limonade orange 27,50 cl.",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.25",
                "volume": ""
              }
            },
            {
              "titel": "Ritchie Limonade lemon & raspberry 27,50 cl.",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.25",
                "volume": ""
              }
            },
            {
              "titel": "Fever-Tree Indian tonic",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    }
  ]
}



;

/* ── WIJNSUGGESTIES ────────────────────────────────────── */
AMU.wijnsuggesties = ﻿{
  "rubrieken": [
    {
      "titel": "Wit",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Hahnmühle 2023",
              "omschrijving1": "Druiven: weissburgunder",
              "omschrijving2": "Duitsland, Nahe (Pfalz)",
              "omschrijving3": "Frisse, minerale en levendige wijn met fijne en strakke aroma’s van onrijpe peer, meloen en abrikoos. Deze wijn heeft genoten van een inox opvoeding ‘sur lies’.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            },
            {
              "titel": "Jordi Miro 2024",
              "omschrijving1": "Druiven: grenache blanc",
              "omschrijving2": "Spanje, Catalunya (NO)",
              "omschrijving3": "Frivole wijn met een perfecte samensmelting van geroosterde noten, licht rijp fruit en vanille. 90% heeft genoten van een inoxopvoeding en 10% vergist ‘sur lies’ op Franse eiken vaten.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            },
            {
              "titel": "Lepa Vida 2024",
              "omschrijving1": "Druiven: pinot gris",
              "omschrijving2": "Slovenië, Vipava vallei",
              "omschrijving3": "Puur plezier in je glas! Intense fruitige en kruidige aroma’s waar gedroogd fruit centraal staan.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            },
            {
              "titel": "Maison Ventenac ‘Préjugés’ 2024",
              "omschrijving1": "Druiven: chardonnay",
              "omschrijving2": "Frankrijk, Languedoc-Rousillon",
              "omschrijving3": "Mooie ronde, doch elegante chardonnay met aroma’s van rijp geel fruit, rijpe appel, gebrande toast en hints van vanille. De wijn heeft genoten van een houtopvoeding maar op een zeer fijne en subtiele manier.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Frasca La Guaragna Sej 2024",
              "omschrijving1": "Druiven: roero arneïs, riesling",
              "omschrijving2": "Italië Piëmonte, Moferrato bianco DOC",
              "omschrijving3": "Een blend van 85% roero arneis en 15% riesling wat zorgt voor een fris en aromatische wijn met verleidelijke aroma’s van citrusvruchten, groene appel, florale hints en een vleugje honing.",
              "fles": {
                "prijs": "47.50",
                "volume": ""
              },
              "glas": {
                "prijs": "9.50",
                "volume": ""
              }
            },
            {
              "titel": "Domaine La Colombette, Born to be Free (alcoholvrij)",
              "omschrijving1": "Druiven: chardonnay",
              "omschrijving2": "Frankrijk, Béziers",
              "omschrijving3": "Deze alcoholvrije chardonnay combineert nobele tonen van citrus en appel met een vleugje perzik gevolgd door een intens fruitige afdronk.",
              "fles": {
                "prijs": "35.00",
                "volume": ""
              },
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "15cl / glas"
    },
    {
      "titel": "Rose - Orange",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Lyrarakis 2023 (orange)",
              "omschrijving1": "Druiven: assyrtiko, vidiano",
              "omschrijving2": "Griekenland, Kreta",
              "omschrijving3": "Amberkleurige fijne wijn met aroma’s van steenfruit en sinaasappelschil gevolgd door zijdezachte en milde tannines en mineralen. De afdronk is fruitig en perfect voor een beginnende orange virgin.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "7.20",
                "volume": ""
              }
            },
            {
              "titel": "Bruno I Maracantoni 2019 (orange)",
              "omschrijving1": "Druiven: incrocio bruni 54",
              "omschrijving2": "Italië, Marche",
              "omschrijving3": "Eerlijke en complexe wijn met tonen van magnolia, rozen en bergamot, gevolgd door aroma’s van rijpe abrikoos, caramel en toffee. 12 maanden houtopvoeding en 6 maanden ‘sur lies’ rijping op de fles.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Ellermann Windrosé 2023 (rosé)",
              "omschrijving1": "Druiven: cabernet sauvignon, pinot noir",
              "omschrijving2": "Duitsland Pfalz",
              "omschrijving3": "Rosé met een fruitige neus en levendig bouquet. Aroma’s van aardbeien en frambozen gevolgd door een mooie fruitzuren en een pittige elegante afdronk.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "15cl / glas"
    },
    {
      "titel": "Rood",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Antik 2023",
              "omschrijving1": "cabernet sauvignon, syrah",
              "omschrijving2": "Turkije, Denizli égëische regio",
              "omschrijving3": "Vol, rond en evenwichtige wijn met duidelijke aroma’s van rijpe pruimen, zwarte kersen, hints van subtiele mokka en leer. Deze wijn heeft genoten van een houtopvoeding van 8 maanden.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Gabernik 23 2020",
              "omschrijving1": "zweigelt",
              "omschrijving2": "Slovenië",
              "omschrijving3": "Weelderig en geconcentreerd zonder zwaar te zijn. Charmante aroma’s van donkere kers, bramen, zwarte peper en hints van brioche. Knisperige afdronk met de nodige fraîcheur. 1 jaar houtopvoeding.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            },
            {
              "titel": "Teatro Latino 2022",
              "omschrijving1": "Druiven: primitivo",
              "omschrijving2": "Italië, Puglia",
              "omschrijving3": "Medium body wijn en iedereens vriend! Jammy aroma’s van pruim, bosbessen, cassis, braambessen en kersen met hints van kruidnagel en zoete specerijen. 9 maanden houtopvoeding.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "8.00",
                "volume": ""
              }
            },
            {
              "titel": "Weingut Gesllmann Gols Cuvée Speciale 2023",
              "omschrijving1": "Druiven: blaufrankisch, pinot noir, rosler",
              "omschrijving2": "Oostenrijk, Burgerland",
              "omschrijving3": "Andreas Gsellmann maakt een fijne, zomerse, blend: fris, heerlijk fruitig en elegant. Heel veel fruit in de mond, sappig, met een licht pepertje in de afdronk. De duidelijke aroma’s van bessen is vooral te danken aan de Rösler-druif. Een lichtvoetige rode wijn om gekoeld te schenken.",
              "fles": {
                "prijs": "37.50",
                "volume": ""
              },
              "glas": {
                "prijs": "7.50",
                "volume": ""
              }
            },
            {
              "titel": "Domaine La Colombette, Born to be Free (alcoholvrij)",
              "omschrijving1": "Druiven: cabernet sauvignon, merlot",
              "omschrijving2": "Frankrijk, Béziers",
              "omschrijving3": "Frisse en sappige rode wijn met aroma’s van rode bessen, kersen en aardbeien en zachte kruiden. Deze wijn is licht gekoeld.",
              "fles": {
                "prijs": "35.00",
                "volume": ""
              },
              "glas": {
                "prijs": "7.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "15cl / glas"
    }
  ]
}
;

/* ── WIJNKAART ────────────────────────────────────────── */
AMU.wijnkaart = {
  "rubrieken": [
    {
      "titel": "Champagne",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Pommery Brut Apanage",
              "omschrijving1": "chardonnay, pinot noir",
              "omschrijving2": "Elegante champagne, met toetsen van citrus, toast, hazelnoot en gedroogde abrikozen licht boterig met een vleugje rokerigheid in de finale.",
              "omschrijving3": "",
              "fles": {
                "prijs": "95.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Vranken Diamant",
              "omschrijving1": "chardonnay, pinot noir",
              "omschrijving2": "Zeer frisse champagne met een fijne parel. Delicate aroma's van appel, roze pompelmoes en mandarijn.",
              "omschrijving3": "",
              "fles": {
                "prijs": "99.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Pommery Apanage Blanc De Blanc",
              "omschrijving1": "chardonnay",
              "omschrijving2": "Deze champagne wordt uitsluitend gemaakt van chardonnay druiven. Delicaat, elegant en fris met aroma's van acacia, jasmijn en lindebloemen. De afdronk is zacht boterig met de nodige citrus toetsen.",
              "omschrijving3": "",
              "fles": {
                "prijs": "120.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Princes De Venoge Blanc de Noir",
              "omschrijving1": "pinot noir",
              "omschrijving2": "Top champagne gemaakt van de blauwe pinot noir druif. Heerlijke en duidelijke aroma’s van vers rood fruit en cassis met de nodige fraîcheur.",
              "omschrijving3": "",
              "fles": {
                "prijs": "175.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideFles": true,
      "hideGlas": true
    },
    {
      "titel": "Wit",
      "items": [
        {
          "titel": "Wit fris en fruitig",
          "items": [
            {
              "titel": "Cantine Benvenuto 2021",
              "omschrijving1": "zibibbo",
              "omschrijving2": "Italië, Calabrië",
              "omschrijving3": "Frisse, fruitige, aromatische en elegante wijn met duidelijke aroma's van licht fruit, lychee, rozen en witte bloemen. Pittig en verfrissend in de afdronk.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Domaine Coursac 2022",
              "omschrijving1": "viognier",
              "omschrijving2": "Frankrijk, Cévennes",
              "omschrijving3": "Romige aangename en fijne viognier, met aroma’s van perzik, abrikoos en necatrine gevolgd door subtiele hints van mango.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Tamaral 2024",
              "omschrijving1": "verdejo",
              "omschrijving2": "Spanje, Rueda",
              "omschrijving3": "Frisse, florale en aromatische wijn met aroma’s van steenfruit, ananas en een zachte kruidigheid. Typische zomerwijn.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ellermann-Spiegel 2023",
              "omschrijving1": "weissburgunder",
              "omschrijving2": "Duitsland, Pfalz",
              "omschrijving3": "Verrassende wijn met rijpe aroma's van mirabelle, passievrucht en groene appel. Frisfruitige aanzet die lang aanhoudt.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""

              }
            },
            {
              "titel": "Lagar De Besada Baladiña 2022",
              "omschrijving1": "albariño",
              "omschrijving2": "Spanje, Galicië",
              "omschrijving3": "Lagar De Besada is zeer fris en kruidig met aroma's van verse groene kruiden, limoen en groene appel, in de afdronk zacht ziltig met fijne mineralen. Inox opvoeding met een rijping van 6 maanden 'sur lies'.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Wit medium",
          "items": [
            {
              "titel": "Kirrenbourg terroir S 2017",
              "omschrijving1": "riesling",
              "omschrijving2": "Frankrijk, Elzas",
              "omschrijving3": "Een bom van een riesling! Rijke en complexe aroma's van citrus zeste aangevuld met florale toetsen en een vleugje balsamico. Enorme lengte en mondvulling in de afdronk.",
              "fles": {
                "prijs": "102.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Les Bernadats Pouilly Fumé 2023",
              "omschrijving1": "sauvignon blanc",
              "omschrijving2": "Frankrijk, Loire",
              "omschrijving3": "Elegante en karaktervolle wijn met de nodige mineralen en zuren. Aroma’s van licht en exotisch fruit met hints van gebak en gekonfijte abrikoos. Pittige en lange afdronk.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Parrona & Cia 2023",
              "omschrijving1": "parrona, manzanilla",
              "omschrijving2": "Spanje, Sevilla",
              "omschrijving3": "Twee unieke druivenrassen afkomstig van 90 jaar oude wijnranken. Het sap vergist eerst in inox citernes, daarna volgt een houtopvoeding van 6 maanden in gebruikte Franse eiken vaten. Complex doch mooi in balans met aroma’s van steenvruchten, brioche en subtiele hout toetsen. Toppertje!.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Domaine De Berguerolles 'Le Clos' 2021",
              "omschrijving1": "petit manseng, gros manseng, sauvignon blanc",
              "omschrijving2": "Frankrijk, Cévennes",
              "omschrijving3": "Een mooie lichtgele kleur met gouden schitteringen. De neus is aromatisch met geuren van perzik, licht fruit en passievrucht. Fris en elegant in de mond met toetsen van citrus, abrikoos en vanille. Lange afdronk met subtiele houttoets.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Eersselshof Barrique",
              "omschrijving1": "sauvignon gris",
              "omschrijving2": "België, Lichtaart",
              "omschrijving3": "Frisse en mooi uitgebalanceerde wijn. De souvignier gris een jonge vrij onbekende druif, is een kruising tussen de cabernet sauvignon en bronner druif. Fruitige citrus aroma’s met de nodige kruidigheid, gevolgd door een subtiele houttoets. Topper uit de stille Kempen!",
              "fles": {
                "prijs": "52.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Marjan Simcic sauvignon vert classic 2023",
              "omschrijving1": "sauvignon vert",
              "omschrijving2": "Slovenië",
              "omschrijving3": "Deze sauvignon vert is verre familie van de meer bekende sauvignon blanc. Verwacht je aan een medium, rijke en minerale wijn met zowel bloemige, fruitige als kruidige aroma's.",
              "fles": {
                "prijs": "47.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Mira 2023",
              "omschrijving1": "sauvignon blanc",
              "omschrijving2": "Tsjechië, Moraviê",
              "omschrijving3": "Dit is de sauvignon blanc en zo ken je deze druif niet, wat een spannende en geniale wijn! Citrus, floraal en complex met aroma’s van lychee, perzik en kruisbes. 6 maanden ‘sur lies’ rijping en een houtopvoeding op acacia vaten.",
              "fles": {
                "prijs": "65.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Alina 2021",
              "omschrijving1": "xynisteri",
              "omschrijving2": "Cyprus",
              "omschrijving3": "Elegante wijn met frisse en intense aroma's van citrusvruchten, meloen, mango en jasmijn. Lichte minerale toetsen en een afdronk met karakter. 8 maanden 'sur lies' rijping.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Kapittelberg 2022",
              "omschrijving1": "chardonnay",
              "omschrijving2": "België, Herselt",
              "omschrijving3": "Vleugje eik, zuivere aroma's van citrus, hints van hazelnoot. Kempische wijn gemaakt met uiterst respect voor product, natuur en omgeving. Zeldzaam en schaars.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Wit vol",
          "items": [
            {
              "titel": "Lagar De Besada Añada de Baladiña 2011",
              "omschrijving1": "albariño",
              "omschrijving2": "Spanje, Galicië",
              "omschrijving3": "Een uitzonderlijke wijn met een jarenlange rijping op vat. Complex met aroma's van steenvruchten, kweepeer, perzik en amandel. Stevige afdronk met een mooie fraîcheur gezien de leeftijd.",
              "fles": {
                "prijs": "60.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Sohm & Kracher Grüner St-Georg 2018",
              "omschrijving1": "grüner veltliner",
              "omschrijving2": "Oostenrijk, Burgenland",
              "omschrijving3": "Bleek groengeel van kleur met een pittige veltliner neus. Elegante aroma's van rijpe appel, delicate kruiden, peer en witte peper. Levendige zuurstructuur en lange spannende afdronk.",
              "fles": {
                "prijs": "67.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "21 Gables 2021",
              "omschrijving1": "chenin blanc",
              "omschrijving2": "Zuid-Afrika, Stellenbosch",
              "omschrijving3": "Genereuze wijn met bijzondere diepgang, hints van gedroogde abrikozen, vanille, honing, sinaasappel en rokerige afdronk.",
              "fles": {
                "prijs": "78.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Costaparadiso 2021",
              "omschrijving1": "erbaluce",
              "omschrijving2": "Italië, Piemonte",
              "omschrijving3": "Zeer bijzondere wijn gemaakt van de inheemse Piemontese erbaluce druif. Rijk, krachtig en complex met aroma’s van geel fruit, amandel, honing, toast en vanille. Perfecte balans tussen kracht en elegantie. 12 maanden houtopvoeding.",
              "fles": {
                "prijs": "56.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Heaps Good Wine Company White 2018",
              "omschrijving1": "chardonnay, pinot gris",
              "omschrijving2": "Slovenië, Štajerska ",
              "omschrijving3": "Heerlijke wijn met een houtopvoeding van 12 maanden. Deze wijn verleid je meteen door zijn intense aroma’s van popcorn, boter, vanille en citrus met een vleugje licht steenfruit.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Marjan Simcic Ribolla Classic 2021/2024",
              "omschrijving1": "ribolla",
              "omschrijving2": "Slovenië",
              "omschrijving3": "Toetsen van groene appel en pompelmoes, volle en karaktervolle body met een uitgesproken mineraliteit. Pure elegantie!",
              "fles": {
                "prijs": "47.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Tenuta Bellafonte 2021",
              "omschrijving1": "trebbiano",
              "omschrijving2": "Italië, Umbrië",
              "omschrijving3": "Rijk, Karaktervol, harmonieus en mooi in balans. Aroma’s van rijp geel fruit, citrus en verschillende kruiden met in de afdronk een mooie mineraliteit.",
              "fles": {
                "prijs": "58.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Marjan Simcic Opoka Cru 2018/2021",
              "omschrijving1": "chardonnay",
              "omschrijving2": "Slovenië",
              "omschrijving3": "Prestigieuze wijn met duidelijke aroma's van gedroogd fruit, honing, brood, gesmolten hoeveboter en een vleugje vanille. Houtopvoeding van 23 maanden.",
              "fles": {
                "prijs": "128.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ferdinand Rebula Epoca 2021",
              "omschrijving1": "rebula",
              "omschrijving2": "Slovenië, Goriska Brda",
              "omschrijving3": "Vol, rond en complex met de nodige mineralen, 12 maanden 'sur lies' in oude eiken vaten. Aroma's van licht steenfruit, groene appel en zachte kruiden.",
              "fles": {
                "prijs": "67.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Jean-Louis Tissot Arbois 'vin jaune' 2017",
              "omschrijving1": "savagnin",
              "omschrijving2": "Frankrijk, Jura",
              "omschrijving3": "Wat een avontuur voor deze wijn die 6,5 jaar langzaam in zijn eikenhouten vat gerijpt heeft! Krachtige en intense aroma's van gebrande noten, boenwas, gedroogde abrikoos, Turks fruit en brioche. Licht oxidatief in de afdronk met tonen van amandel en citroenrasp.",
              "fles": {
                "prijs": "150.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Sohm & Kracher ‘Single Vineyard’ 2017",
              "omschrijving1": "grüner veltliner",
              "omschrijving2": "Oostenrijk, Burgenland",
              "omschrijving3": "Rijke, gestructureerde, minerale en elegante wijn met aroma's van peer, honing en nectarine. De afdronk is boterig en vol door de houtopvoeding van 4,5 jaar. Top wijn!",
              "fles": {
                "prijs": "115.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Château Musar 2017",
              "omschrijving1": "merwah, obaideh",
              "omschrijving2": "Libanon, Bekaa Valley",
              "omschrijving3": " De witte château Musar is een unieke wijn. Hij heeft een Bordeaux-achtig karakter die doet denken aan een gerijpte witte Graves wijn. 9 maanden houtopvoeding en dan 7 jaar gerust op de fles om verder te ontwikkelen. Heerlijke gekonfijte citrus en noten aroma's. De afdronk is intens en licht oxidatief.",
              "fles": {
                "prijs": "106.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "LULU Vigneron 2017",
              "omschrijving1": "savagnin",
              "omschrijving2": "Frankrijk, Jura",
              "omschrijving3": "Heerlijke oxidatieve witte natuurwijn van spontane fermentatie en een houtopvoeding van 24 maanden. LULU is puur, LULU is krachtig, LULU is terroir, LULU laat zijn druiven zingen.",
              "fles": {
                "prijs": "91.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Los Mores 2017 ",
              "omschrijving1": "grenache blanc, pedro ximenez",
              "omschrijving2": "Spanje, Priorat",
              "omschrijving3": "Stevige witte wijn met de nodige fraîcheur, duidelijke aroma’s van gedroogd fruit met een subtiele hint van noten en een fijne en aangename sherry toets in de afdronk.",
              "fles": {
                "prijs": "60.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideFles": true,
      "hideGlas": true
    },
    {
      "titel": "Biodynamisch",
      "items": [
        {
          "titel": "Biodynamisch",
          "items": [
            {
              "titel": "LULU Vigneron 2017 (wit)",
              "omschrijving1": "savagnin",
              "omschrijving2": "Frankrijk, Jura",
              "omschrijving3": "Heerlijke oxidatieve witte natuurwijn van spontane fermentatie en een houtopvoeding van 24 maanden. LULU is puur, LULU is krachtig, LULU is terroir. Lulu laat zijn druiven zingen.",
              "fles": {
                "prijs": "91.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Rossidi Orange 2020 (orange)",
              "omschrijving1": "gewürztraminer",
              "omschrijving2": "Bulgarije, Thracische vlakte",
              "omschrijving3": "Diep oranjegele kleur, intense, volle, fruitige wijn met een stevige structuur. 8 maanden houtopvoeding en 30 dagen schilmaceratie.",
              "fles": {
                "prijs": "60.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Stembergen 2020 (wit)",
              "omschrijving1": "zelen",
              "omschrijving2": "Slovenië, Kras",
              "omschrijving3": "Stembergen wijnen worden gekenmerkt door hun puurheid, elegantie, mineraliteit en fraîcheur. Deze wijn heeft een schilmaceratie van 4 dagen, daarna een opvoeding van 5 maanden, deels in een betonnen ei, deels op acaciavaten. Aroma’s van weidebloemen, citrus, mango, groene thee en vlierbloesem. Karakterwijn!",
              "fles": {
                "prijs": "52.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },

            {
              "titel": "Lyrarakis 2023 (orange)",
              "omschrijving1": "assyrtiko, vidiano",
              "omschrijving2": "Griekenland",
              "omschrijving3": "Amberkleurige fijne wijn met aroma’s van steenfruit en sinaasappelschil, gevolgd door zijdezachte en milde tannines en mineralen. De afdronk is fruitig en perfect voor een beginnende orange virgin.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Pasji Rep Moser 2019 (wit)",
              "omschrijving1": "zelen, rebula, welschriesling, malvasija",
              "omschrijving2": "Slovenië, Vipava vallei",
              "omschrijving3": "De topcuvée van wijnhuis Pasji Rep. Aroma’s van rijpe gele appels, ananas, citroen en sinaasappelschillen met tonen van boter, nootmuskaat en vanille.",
              "fles": {
                "prijs": "55.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Borovitza Orange Garden 2021 (wit)",
              "omschrijving1": "chardonnay",
              "omschrijving2": "Bulgarije",
              "omschrijving3": "Wild en rustiek! Volledig out of the box! Aroma's van gebrande sinaasappelschil, tropisch fruit en caramel. De afdronk is intens rokerig met toetsen van tijm. Licht oranje van kleur, maar deze wijn heeft geen schilcontact gehad.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "JNK St.Michael 2017 (orange)",
              "omschrijving1": "pinot blanc, sauvignon vert",
              "omschrijving2": "Slovenië, Vipava",
              "omschrijving3": "Onze top orange wijn, puur en complex! Een bouquet van subtiele hooi toetsen gecombineerd met lindebloesem, groene appels, gedroogde abrikoos en peer met in de finale een verrassende hint van vlierbloesem. 18 maanden houtopvoeding.",
              "fles": {
                "prijs": "120.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Stemberger B+ 2018 (rood)",
              "omschrijving1": "refosk, merlot, cabernet sauvignon, blaufrankisch, barbera",
              "omschrijving2": "Slovenië, Kras",
              "omschrijving3": "WOW! Ongewone blend maar een schot in de roos. Mooi rijp maar ook fris en fruitig met aroma’s van blauwe bessen, Maraschino kersen, munt en zoethout gevolgd door donkere bramen en witte peper. 24 maanden houtopvoeding.",
              "fles": {
                "prijs": "95.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "‘Bruno’ I Marcantoni 2019 (orange)",
              "omschrijving1": "Incrocio bruni 54",
              "omschrijving2": "Italië, Marche",
              "omschrijving3": "Eerlijke en complexe wijn met tonen van magnolia, rozen en bergamot, gevolgd door aroma’s van rijpe abrikoos, caramel en toffee. 12 maanden houtopvoeding en 6 maanden ‘sur lies’ rijping op de fles.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideFles": true,
      "hideGlas": true
    },
    {
      "titel": "Rood",
      "items": [
        {
          "titel": "Rood fris en fruitig",
          "items": [
            {
              "titel": "Domaine de Boischampt ‘Fleurie’ 2024",
              "omschrijving1": "gamay",
              "omschrijving2": "Frankrijk, Beaujolais",
              "omschrijving3": "Bijzonder elegante en delicate wijn, fluwelig in de mond met zachte tannines en aroma’s van bloemen zoals viooltjes en rozen, gevolgd door toetsen van aarbei en kers.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ellermann-Spiegel 2022",
              "omschrijving1": "spätburgunder",
              "omschrijving2": "Duitsland, Pfalz",
              "omschrijving3": "Helderrode wijn met een mooie kruidigheid. Rijpe aanzet met een klein zoetje en aroma's van bosfruit en kersen. Ook lekker gekoeld.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Heaps Good Wine Company Non Vintage Red",
              "omschrijving1": "pinot noir, blaufränkisch, zweigelt, syrah, muskateller, würzer, chardonnay, pinot gris",
              "omschrijving2": "Slovenië, Štajerska",
              "omschrijving3": "Lekkere lichtvoetige wijn met de nodige finesse. Een ongewone blend van verschillende druiven en jaartallen. Aroma's van klein rood fruit, aangevuld met een zekere kruidigheid, witte peper en een fijne rokerige toets. Houtopvoeding van 12 maanden op gebruikte vaten.",
              "fles": {
                "prijs": "36.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Klopffer Greiner 2014",
              "omschrijving1": "lemberger",
              "omschrijving2": "Duitsland, Württemberg",
              "omschrijving3": "De druiven voor deze top lemberger rijpen in de oudste wijngaard. Het zeer lage opbrengstniveau, de intensieve verzorging en de warme ligging vormen de basis voor deze diepe, gestructureerde wijn. Elegante aroma's van pruimen, vlierbessen en een toets van cacao. 24 maanden houtopvoeding op eiken vaten. Nu perfect op dronk.",
              "fles": {
                "prijs": "90.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {

              "titel": "Emile 2022",
              "omschrijving1": "pinot noir",
              "omschrijving2": "België, Wijnegem",
              "omschrijving3": " Zachte en lichte pinot noir met zeer duidelijke aroma’s van sappige kersen en klein rood fruit een subtiele houtopvoeding op grote vaten maakt deze heerlijke wijn uit Wijnegem helemaal af. ",
              "fles": {
                "prijs": "41.50",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Rood medium",
          "items": [
            {
              "titel": "Heaps Good Wine Company Noir 2021",
              "omschrijving1": "pinot noir",
              "omschrijving2": "Slovenië",
              "omschrijving3": "Levendige, amusante en sappige pinot noir, een geconcentreerde fruitbom met aroma’s van kersen en bessen gevolgd door pittige kruiden en zijde zachte tannines in de afdronk. 12 maanden houtopvoeding op Franse eiken vaten.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "I Divini 'Sotto la Luna' Barbera D’Asti 2019",
              "omschrijving1": "Barbera",
              "omschrijving2": "Italië, Piemonte",
              "omschrijving3": "Complexe aroma’s van klein rood fruit, vanille en kruiden. De afdronk vol met een klein zoetje. Top Barbera met een houtopvoeding van 12 maanden.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ripasso Carlo Meroni 2019",
              "omschrijving1": "corvina, corvinone, rondinella, molinara",
              "omschrijving2": "Italië, Veneto",
              "omschrijving3": "Wat een parel van een wijn! Geweldige body, complex en rijk van smaak met aroma’s van kersen, pruimen, nootmuskaat en zachte vanille. 30 maanden houtopvoeding op Sloveense eiken vaten.",
              "fles": {
                "prijs": "65.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },

            {
              "titel": "Domaine de Poulvarel Les Perrottes 2020/2022",
              "omschrijving1": "syrah, grenache, carignan",
              "omschrijving2": "Frankrijk, Rhône, Costières de Nîmes",
              "omschrijving3": "Aromatische finale met veel toetsen van zwart en blauw fruit, gevolgd door een mooie kruidigheid en hints van peper en cacaobonen. Mooi gestructureerd met rijpe tannines.",
              "fles": {
                "prijs": "45.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Kirrenbourg Cuvee Mathieu 2020",
              "omschrijving1": "pinot noir",
              "omschrijving2": "Frankrijk, Elzas",
              "omschrijving3": "De nieuwe parel van de Elzas: Domaine Kirrenbourg. Vol-fruitige, sappige interpretatie van pinot noir. Aroma's van zwarte kersen, donker bosfruit en pioenroos. In de mond fris-fruitig met een zekere saliene mineraliteit. Heerlijke juicy pinot noir!",
              "fles": {
                "prijs": "125.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Norzagarai Carralciego 2018",
              "omschrijving1": "tempranillo, grenache",
              "omschrijving2": "Spanje, Rioja",
              "omschrijving3": "Explosieve neus! Gestructureerde aroma's van rijpe bramen, bosbessen, pruimen en viooltjes met subtiele ondertonen van tabak en kruiden. 15 maanden houtopvoeding.",
              "fles": {
                "prijs": "68.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Benjamin 2022",
              "omschrijving1": "cabernet dorsa",
              "omschrijving2": "belgië, wijnegem",
              "omschrijving3": " Heerlijke medium body wijn met de cabernet dorsa druif, dit is een kruising tussen cabernet sauvignon en de dornfelder druif. Het bouquet is rijk aan aroma’s van rijp zwart fruit en subtiele kruiden, met hints van pruimen, kersen, frambozen en bramen, verweven met een lichte rokerige nuance. De zachte tannines en een vleugje vanille zorgen voor een harmonieuze en verfijnde finale.",
              "fles": {
                "prijs": "50.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Tugra 2020",
              "omschrijving1": "öküzgözü",
              "omschrijving2": "Turkije",
              "omschrijving3": "Heerlijke en harmonieuze wijn met rijkelijke aroma’s van kersen, pruimen en vanille gevolgd door hints van tabak en cederhout. 12 maanden houtopvoeding.",
              "fles": {
                "prijs": "55.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ferdinand Classic 2022",
              "omschrijving1": "cabernet sauvignon",
              "omschrijving2": "Slovenië, Goriska Brda",
              "omschrijving3": "Bijzonder elegante wijn met aroma's van cassis, zwarte bessen. Zeer lichte tonen van leer, ceder en munt. Medium body en zachte tannines.",
              "fles": {
                "prijs": "40.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Stemberger B+ 2018",
              "omschrijving1": "refosk, merlot, cabernet sauvignon, blaufrankisch, barbera",
              "omschrijving2": "Slovenië, Kras",
              "omschrijving3": "WOW! Ongewone blend maar een schot in de roos. Mooi rijp maar ook fris en fruitig met aroma’s van blauwe bessen, Maraschino kersen, munt en zoethout gevolgd door donkere bramen en witte peper. 24 maanden houtopvoeding.",
              "fles": {
                "prijs": "95.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Los Mores Vermell 2015",
              "omschrijving1": "grenache, carignan",
              "omschrijving2": "Spanje, Priorat",
              "omschrijving3": "Perfect afgewerkte wijn, rond en vol maar toch met de nodige mineralen. Boost aan rijp rood fruit met zachte kruiden. 12 maanden houtopvoeding. Zijde zachte tannine’s en nu perfect op dronk.",
              "fles": {
                "prijs": "56.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Stratus 2015",
              "omschrijving1": "cabernet sauvignon, cabernet franc, merlot, petit verdot, malbec",
              "omschrijving2": "Canada",
              "omschrijving3": "Heerlijke Bordelese blend die zwoel fruit combineert met een typische ‘cool climate’ textuur. Een combi die luxueus en uitbundig aanvoelt zonder te vervelen. Rijp zwart en rood fruit met de nodige kruidigheid en fijne toetsen van cederhout. 20 maanden houtopvoeding.",
              "fles": {
                "prijs": "115.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Rood vol",
          "items": [
            {
              "titel": "Ferdinand Epoca 2018",
              "omschrijving1": "cabernet sauvignon, merlot",
              "omschrijving2": "Slovenië, Goriska Brda",
              "omschrijving3": "Volle body met een stevig karakter. Duidelijke aroma's van donker fruit, pruimenmarmelade en vanille. Cuvée Epoca heeft genoten van een houtopvoeding van  18 maanden op eiken vaten. Topper! ",
              "fles": {
                "prijs": "80.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Ellermann Spiegel Anno XXI 2021 ",
              "omschrijving1": "cabernet sauvignon, merlot, syrah ",
              "omschrijving2": " Duitsland, Pfalz ",
              "omschrijving3": "De top cuvée van Ellerman Spiegel. Aroma's van rood fruit, zure kersen, bessen, kruidnagel, vanille gevolgd door een vleugje karamel. Mooie ronde afdronk met een klein zoetje. 12 maanden houtopvoeding. ",
              "fles": {
                "prijs": "57.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Dux 2012",
              "omschrijving1": "cabernet sauvignon, merlot",
              "omschrijving2": "Bulgarije",
              "omschrijving3": "Karakter en klasse wijn die nu perfect op dronk is. Heerlijke aroma’s van jeneverbes, eucalyptus en subtiele munt gevolgd door sappige rijpe braambessen, cacao en koffie. Krachtige body maar toch ook flexibel en strak met fluweel zachte tannines. 26 maanden houtopvoeding.",
              "fles": {
                "prijs": "185.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Chianti Tregole, Classico 2024",
              "omschrijving1": "sangiovese",
              "omschrijving2": "Italië, Toscane ",
              "omschrijving3": "Bijzondere en elegante Chianti, een verfijnde structuur, met aroma’s van rijp rood en zwart fruit met florale hints gevolgd door een fijne kruidigheid en een zachte minerale ziltigheid.",
              "fles": {
                "prijs": "42.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Pasji Rep Jebacin Red 2022",
              "omschrijving1": "merlot, cabernet franc",
              "omschrijving2": "Slovenië, Vipava vallei",
              "omschrijving3": "Heerlijke volle, fruitgedreven wijn die genoten heeft van een houtopvoeding van 15 maanden op eiken vaten. Langdurige afdronk met een smokey toets en een lichte tannine's. ",
              "fles": {
                "prijs": "65.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Carlo Meroni Amarone 2016",
              "omschrijving1": "corvina, corvinone, rondinella, molinara",
              "omschrijving2": "Italië, Veneto",
              "omschrijving3": "Zo moet een Amarone zijn! Complex, stevig en een diep boeket met intense kruidigheid, een overvloed aan aroma's van kersen en gedroogde vruchten, met in de afdronk een subtiele hint van bittere chocolade. 3,5 jaar houtopvoeding op Sloveense eiken vaten.",
              "fles": {
                "prijs": "105.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Pasij Rep Breg 2021",
              "omschrijving1": "merlot",
              "omschrijving2": "Slovenië, Vipava Vallei",
              "omschrijving3": "Top merlot! Intens en complex, luxueuze neus van donker fruit, bramen, chocolade en zouthout. Vol en krachtig in de mond. 18 maanden houtopvoeding. ",
              "fles": {
                "prijs": "90.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Amarone Della Valpolicella II ˜Velluto' 2015",
              "omschrijving1": "uvaggio, corvina, corvinone, rondinella, molinara",
              "omschrijving2": "Italië, Veneto",
              "omschrijving3": "Onze favoriete Amarone! Rond en vol met luxueuze en rijkelijke aroma's van chocolade, pruimen, rozijnen en zwarte kersen gevolgd door fijne subtiele leertoetsen en tabak. 5 jaar houtopvoeding op Sloveense vaten. ",
              "fles": {
                "prijs": "120.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "M V 2021 ",
              "omschrijving1": "mavroudi, cabernet sauvignon, merlot",
              "omschrijving2": "Griekenland",
              "omschrijving3": "Met een schitterende paarsrode kleur presenteert deze wijn een vrij complex aromatisch profiel van rijp rood en zwart fruit, pruimen gedroogde vijgen, dennenhonig, koffie en geroosterde amandel. Zachte taninnes, evenwichtige zuurtegraad en een lange afdronk.\n12 maanden houtopvoeding.",
              "fles": {
                "prijs": "43.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Bélena 2022",
              "omschrijving1": "syrah",
              "omschrijving2": "Australië",
              "omschrijving3": "Stevige en fruit gedreven syrah met duidelijke aroma’s van rijpe zwarte kersen, cassis, pruimen en gedroogde kruiden met in de finale een subtiele hint van witte peper.",
              "fles": {
                "prijs": "43.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            },
            {
              "titel": "Barolo ‘passione di re’ 2018",
              "omschrijving1": "Nebiolo",
              "omschrijving2": "Italië, Piemonte",
              "omschrijving3": "Deze Barolo van Gabriele Scaglione zal je zintuigen doen prikkelen, zeer verfijnd met aroma’s die variëren van rijpe kersen pruimen tot truffels, teer en rozen. De afdronk is elegant met frisse toetsen en de nodige taninne’s. 36 maanden houtopvoeding op Sloveense eik.",
              "fles": {
                "prijs": "91.00",
                "volume": ""
              },
              "glas": {
                "prijs": "",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideFles": true,
      "hideGlas": true
    }
  ]
}
;

/* ── DESSERTWIJNEN ────────────────────────────────────── */
AMU.dessertwijnen = {
  "rubrieken": [
    {
      "titel": "Dessertwijnen",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "The Madeira Collection nr. 2",
              "omschrijving1": "tinta negra, verdelho, sercial",
              "omschrijving2": "Droge madeira, fruitig, zinderend aroma",
              "fles": {},
              "glas": {
                "prijs": "15.50",
                "volume": "10cl"
              }
            },
            {
              "titel": "Kracher ‘spätlese’ 2022 (wit)",
              "omschrijving1": "pinot blanc, chardonnay, welshriesling",
              "omschrijving2": "Oostenrijk, Burgerland",
              "omschrijving3": "Een boost aan exotisch fruit, zowel in de mond als in de neus. Zijde zachte, romige structuur en een lange fruitige afdronk. 6 maanden inox opvoeding.",
              "fles": {
                "prijs": "45",
                "volume": "(0.75L)"
              },
              "glas": {
                "prijs": "9",
                "volume": "10cl"
              }
            },
            {
              "titel": "Kracher ‘auslese traminer’ 2018 (wit)",
              "omschrijving1": "traminer",
              "omschrijving2": "Oostenrijk, Burgerland",
              "omschrijving3": "Mooie balans tussen zoet en zuurtjes. Rijke aroma’s van sinaasappel zeste, pompelmoes, tropisch fruit en een vleugje marshmallow. ½ maanden hout en ½ maanden inox opvoeding.",
              "fles": {
                "prijs": "36",
                "volume": "(0.375L)"
              },
              "glas": {
                "prijs": "9.60",
                "volume": "10cl"
              }
            },
            {
              "titel": "Kracher ‘Red Roses 2020 (rose)",
              "omschrijving1": "rosen muskateller",
              "omschrijving2": "Oostenrijk, Burgerland",
              "omschrijving3": "Intense aroma’s van rozen, zowel de bloemen, bloesem en olie, aangevuld met kersen, framboos en bos aardbei. 12 maanden houtopvoeding.",
              "fles": {
                "prijs": "68",
                "volume": "(0.375L)"
              },
              "glas": {
                "prijs": "18",
                "volume": "10cl"
              }
            },
            {
              "titel": "Kracher ‘auslese zweigelt’ 2022 (rood)",
              "omschrijving1": "zweigelt",
              "omschrijving2": "Oostenrijk, Burgerland",
              "omschrijving3": "Helder en kersen rood van kleur, met aroma’s van rode bessen, gedroogde abrikozen en delicate sinaasappel schil. Fijne kruiden en zwarte bessen confituur in de afdronk. 9 maanden inox opvoeding.",
              "fles": {
                "prijs": "39",
                "volume": "(0.375L)"
              },
              "glas": {
                "prijs": "10.40",
                "volume": "10cl"
              }
            }
          ]
        }
      ]
    }
  ]
}
;

/* ── DIGESTIEVEN ──────────────────────────────────────── */
AMU.digestieven = {
  "rubrieken": [
    {
      "titel": "Digestieven",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Amu Digestief (Dubonnet, Drambuie, gin)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Amaretto Di Saronno",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Home made limoncello",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Calvados du Pays d'Auge VSOP",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Cognac Tercinier VS 4 jaar",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "12.00",
                "volume": ""
              }
            },
            {
              "titel": "Cognac Tercinier VSOP - Réserve 7 jaar",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Armagnac Delord VSOP",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "14.00",
                "volume": ""
              }
            },
            {
              "titel": "Sambucca Molinari",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "9.50",
                "volume": ""
              }
            },
            {
              "titel": "Grand-Marnier Rouge",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.50",
                "volume": ""
              }
            },
            {
              "titel": "Cointreau",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Baileys",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Licor 43",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Frangelico",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Averna Amaro",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.50",
                "volume": ""
              }
            },
            {
              "titel": "Smeets Classic",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "9.50",
                "volume": ""
              }
            },
            {
              "titel": "Poire Williams Birne",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "11.50",
                "volume": ""
              }
            },
            {
              "titel": "Bumbu XO rum",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Efe's oude raki 5 jaar",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Elexir d'Anvers",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.00",
                "volume": ""
              }
            },
            {
              "titel": "Drambuie",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "11.00",
                "volume": ""
              }
            },
            {
              "titel": "Maraschino Roteglia 1848",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "8cl / glas",
      "hideGlas": true
    },
    {
      "titel": "Grappa Collectie Marolo",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Marolo Moscato",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "12.00",
                "volume": "5cl"
              }
            },
            {
              "titel": "Marolo Barbaresco",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": "5cl"
              }
            },
            {
              "titel": "Marolo Barolo Barrique",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "13.50",
                "volume": "5cl"
              }
            }
          ]
        }
      ],
      "volume": "5cl / glas",
      "hideGlas": true
    },
    {
      "titel": "Digestieven gemengd",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "Amu Digestief (Dubonnet, Drambuie, gin)",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Grand-Marnier en Cognac",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "11.25",
                "volume": ""
              }
            },
            {
              "titel": "Amantis (Limoncello, Cointreau, Amaretto)",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Zizi Coin-Coin (Cointreau met citroensap)",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "14.00",
                "volume": ""
              }
            },
            {
              "titel": "Espresso Martini",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "The Last Word (maraschinolikeur, gin, elexir d'Anvers, cointreau)",
              "omschrijving1": "",
              "omschrijving2": "",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "15.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    }
  ]
}
;

/* ── WARME DRANKEN ────────────────────────────────────── */
AMU.warmeDranken = {
  "rubrieken": [
    {
      "titel": "Warme dranken",
      "items": [
        {
          "titel": "koffie",
          "items": [
            {
              "titel": "Espresso",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            },
            {
              "titel": "Lungo",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            },
            {
              "titel": "Deca Lungo / Espresso",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.00",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Koffie varianten",
          "items": [
            {
              "titel": "Koffie verkeerd",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6",
                "volume": ""
              }
            },
            {
              "titel": "Cappuccino",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "5.50",
                "volume": ""
              }
            },
            {
              "titel": "Latté macchiato",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.50",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Koffie met wolkje room",
          "items": [
            {
              "titel": "Ierse koffie (whisky)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Italiaanse koffie (amaretto)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Normandische koffie (calvados)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Hasseltse koffie (jenever)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Baileys koffie",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Cubaanse koffie (bruine rum)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Parijse koffie (grand marnier)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            },
            {
              "titel": "Antwerpse koffie (elexir d'Anvers)",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "13.00",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Bio & Fair Trade thee assortiment",
          "items": [
            {
              "titel": "Zwarte thee",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Earl Grey",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Kamille",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Pepermunt",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Rooibos",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Groene thee",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Super bessen",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "English breakfast",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            },
            {
              "titel": "Witte thee",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "4.50",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Verse thee",
          "items": [
            {
              "titel": "Munt",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.00",
                "volume": ""
              }
            },
            {
              "titel": "Sinaasappel-kruidnagel",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.50",
                "volume": ""
              }
            },
            {
              "titel": "Gember-limoen-munt",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "6.50",
                "volume": ""
              }
            },
            {
              "titel": "Mojito thee ( rum. limoen. suiker. munt )",
              "omschrijving1": "",
              "fles": {},
              "glas": {
                "prijs": "10.50",
                "volume": ""
              }
            }
          ]
        }
      ],
      "hideGlas": true
    }
  ]
}
;

/* ── WHISKY ────────────────────────────────────────────── */
AMU.whisky = {
  "rubrieken": [
    {
      "titel": "Whisky",
      "items": [
        {
          "titel": "Unpeated",
          "items": [
            {
              "titel": "Teeling Single Grain",
              "omschrijving1": "Deze Ierse Whisky rijpt op Californische Cabarnet Sauvignon vaten, dit geeft de Whisky een warm kruidige en zoetere toets. Single Grain benadrukt hier zeker de kwaliteit.",
              "omschrijving2": "Afdronk van toast, druiven en gekruide boter maken het geheel af.",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "10.5",
                "volume": ""
              }
            },
            {
              "titel": "Balblair 15y",
              "omschrijving1": "Balblair gaat graag tegen de stroom in! Waar anderen nu vaak kiezen voor leeftijdloze blends gaat Balblair voor leeftijden.",
              "omschrijving2": "De 15 jaar is kruidig maar heeft zeker nog de romige fijne Balblair toets: tropisch, vanille en citrus.",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "16.5",
                "volume": ""
              }
            },
            {
              "titel": "Arran Amarone Cask Finish",
              "omschrijving1": "Na 8 jaar rijping op ex-Amarone vaten krijgt de whisky een rijk levendig karakter.",
              "omschrijving2": "Rijke tonen van kersen, Turks fruit, peer, honing en chocolade.",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            }
          ]
        },
        {
          "titel": "Peated",
          "items": [
            {
              "titel": "GlenDronach",
              "omschrijving1": "Door rijping op o.a. Pedro Ximenez sherry vaten is deze peated Whisky wat zoeter.",
              "omschrijving2": "Typisch voor GlenDronach zijn de hints van bittere chocolade en toffee. De geur doet denken aan een kampvuur en vers gezaagde bomen.",
              "omschrijving3": "Deze combi van zoet en rook is uniek.",
              "fles": {},
              "glas": {
                "prijs": "12.5",
                "volume": ""
              }
            },
            {
              "titel": "Old Pulteney 15y",
              "omschrijving1": "Old Pulteney is gevestigd aan de kusten van Schotland, ze claimen de naam 'Maritime malt – made by the sea'.",
              "omschrijving2": "In elke Old Pulteney ontdek je wel iets van de zee. Bij deze is het een mix tussen zwaardere tonen, zilt en agrum.",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "15",
                "volume": ""
              }
            },
            {
              "titel": "Kilchoman Sanaig",
              "omschrijving1": "Kilchoman is gevestigd in een oude omgebouwde boerderij en produceert het grootste deel van zijn gerst zelf.",
              "omschrijving2": "De Sanaig heeft een 70/30 sherry/bourbon rijping en is wat voller dan de gekende Machir Bay. Toffee en vanille wisselen mooi af met het rokerige karakter.",
              "omschrijving3": "",
              "fles": {},
              "glas": {
                "prijs": "15",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "5cl / glas",
      "hideGlas": true
    }
  ]
}
;

/* ── GINS ──────────────────────────────────────────────── */
AMU.gins = {
  "volume": "5cl",
  "rubrieken": [
    {
      "titel": "Gins",
      "items": [
        {
          "titel": "",
          "items": [
            {
              "titel": "The Drunken Horse",
              "omschrijving1": "België",
              "omschrijving2": "De botanicals van The Drunken Horse komen uit alle delen van de wereld. Eén botanical springt er echt uit: Timut, een uitzonderlijk zeldzame peper uit de Nepalese bergen, met toetsen van citrus en pompelmoes.",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "16.50",
                "volume": ""
              }
            },
            {
              "titel": "Uppercut",
              "omschrijving1": "Nederland",
              "omschrijving2": "Zeer kruidige en verfijnde gin met alcoholgehalte van 49.6%. Uppercut is gemaakt van medicinale botanicals zoals damiaanblad, netelblad, zoethoutwortel, verveine, jeneverbes en tal van andere geneeskrachtige kruiden.",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "15.50",
                "volume": ""
              }
            },
            {
              "titel": "Crafters Wild Forest",
              "omschrijving1": "Estland",
              "omschrijving2": "Gin uit Estland, vol plantenextracten en rokerige jeneverbessmaak. Het resultaat is een frisse, botanische mix van jeneverbessen, sparrendoornen en dennenscheuten.",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "14.50",
                "volume": ""
              }
            },
            {
              "titel": "Gunpowder Brazilian Pine apple",
              "omschrijving1": "Ierland",
              "omschrijving2": "Deze unieke gin combineert frisse en zachte citrus met de zwoele zoetheid van Braziliaanse ananas en subtiele gunpowder thee. Verrassende en verfrissende Gin! ",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "16.50",
                "volume": ""
              }
            },
            {
              "titel": "Monkey 47",
              "omschrijving1": "Duitsland",
              "omschrijving2": "De 47 in de naam vertelt u al heel wat over deze gin, namelijk dat deze 47% alcohol bevat en dat er maar liefst 47 met de hand geplukte ingrediënten in werden verwerkt die behandeld worden met bronwater van het Zwarte Woud.",
              "omschrijving3": "Fever Tree Mediterraan",
              "fles": {},
              "glas": {
                "prijs": "15.50",
                "volume": ""
              }
            },
            {
              "titel": "Bobby's",
              "omschrijving1": "Nederland",
              "omschrijving2": "Gin uit Nederland, complexe smaken van exotische kruiden, rozenbottel, kruidnagel en citroengras. Mooie kruidenbalans.",
              "omschrijving3": "Fever Tree Clementine",
              "fles": {},
              "glas": {
                "prijs": "14.00",
                "volume": ""
              }
            },
            {
              "titel": "Nordes",
              "omschrijving1": "Spanje",
              "omschrijving2": "Kruidige gin met toetsen van eucalyptus, laurier, munt en wit fruit.",
              "omschrijving3": "Fever Tree Mediterraan",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Gunpowder Irish Gin",
              "omschrijving1": "Ierland",
              "omschrijving2": "Frisse gin met een fijne citrussmaak en kruidige noten van gunpowder extract, pompelmoes en de Noord-Amerikaanse bloem meadowsweet.",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "15.50",
                "volume": ""
              }
            },
            {
              "titel": "Marula",
              "omschrijving1": "België",
              "omschrijving2": "Marula gin is geïnspireerd op de Afrikaanse marulavrucht, ook bekend als de verboden vrucht van de olifantenboom. Hints van lavendel, bloesem, roze blaadjes, honing en houtaroma’s.",
              "omschrijving3": "Fever Tree Clementine",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Marula Pomegranate",
              "omschrijving1": "België",
              "omschrijving2": "De basis is de reguliere Marula gin met toevoeging van granaatappel, frambozen, bosaardbei en bramen die een zoete draai geeft aan deze gin.",
              "omschrijving3": "Fever Tree Indian",
              "fles": {},
              "glas": {
                "prijs": "15.00",
                "volume": ""
              }
            },
            {
              "titel": "Crafter's Aromatic Flower Gin",
              "omschrijving1": "Estland",
              "omschrijving2": "Gin uit Estland gemaakt door 12 zorgvuldig uitgezochte botanicals. Zeer frisse en bloemige gin met een klein bittertje van de sinaasappelschil. Deze gin verandert van kleur nadat de tonic is toegevoegd.",
              "omschrijving3": "Fever Tree Mediterraan",
              "fles": {},
              "glas": {
                "prijs": "14.00",
                "volume": ""
              }
            }
          ]
        }
      ],
      "volume": "5cl / glas",
      "hideGlas": true
    }
  ]
}
;

/* ── MENUPRODUCTEN ─────────────────────────────────────── */
AMU.menuproducten = [
  {"product": "Zwaardvis  – zoet zure venkel – bloedsinaasappel"},
  {"product": "Coppa de boeuf – citroen ricotta – pijnboompit"},
  {"product": "Gerookte brebis – saffraan – koolrabi"},
  {"product": "Skrei – morieljes – spinazie"},
  {"product": "Dorade – romanesco – sorpressa"},
  {"product": "Kokkels – spek – zeespaghetti"},
  {"product": "Ramen noedels – kimchi - gehaktballetjes  –  miso bouillon                                                                                                   "},
  {"product": "Chantenay worteltjes – tahin – zoete aardappel"},
  {"product": "Gegrilde runderfilet – gebakken slahartjes – knolselder remoulade"}
]
;

/* ── NAGERECHTEN ───────────────────────────────────────── */
AMU.nagerechten = [
  {
    "titel" : "Rabarber – citroen  – meringue",
    "prijs": "15"
  },
  {
    "titel" : "Mokkaparfait – chocolade bonbon  – koffie crumble",
    "prijs": "15"
  },
  {
    "titel" : "Kokosijs – gegrilde ananas – chocolade saus",
    "prijs": "15"
  },
{
  "titel" : "Brillat Savarain – peperkoek – pompoen marmelade",
  "prijs": "17"
  }
]
;
