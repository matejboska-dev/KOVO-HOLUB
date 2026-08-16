# KOVO-HOLUB Nepomuk s.r.o. — Podklady pro redesign webu

Zdroj: kompletní procházka aktuálního webu www.kovo-holub.cz (crawl 16. 8. 2026,
40 URL ze sitemapy). Účel dokumentu: dát ti (návrhář/copywriter) veškerý existující
text, informace o firmě a návrh nové struktury webu, abys mohl rovnou stavět design —
nemusíš znovu procházet starý web.

Obrázky ke všem stránkám najdeš v souboru `obrazky-url.txt`.

---

## 0. O FIRMĚ — SUROVÁ FAKTA (pro copy i pro tebe jako kontext)

- **Název:** KOVO-HOLUB Nepomuk s.r.o.
- **Založeno:** 1927 (jako Bartoloměj Holub Strojírna, Železná Huť) — rodinná firma,
  aktuálně vede 3. generace (František a Jan Holubovi od roku 2019)
- **Sídlo:** Záhoří 38, 335 01 Nepomuk
- **IČ:** 26364891, DIČ: CZ26364891
- **Kontakt:** +420 371 591 644 (tel/fax), f.holub@kovo-holub.cz
- **Kontaktní osoba:** František Holub, mobil +420 602 237 112
- **Zaměstnanci:** cca 20 stálých
- **Trh:** ČR, Německo, Rakousko (dřív i Nizozemsko)
- **Reference:** přes 1400 realizovaných zakázek pro firmy z ČR i zahraničí
- **Certifikace:** ISO 9001, TÜV
- **Facebook:** https://www.facebook.com/kovoholub (klient chce prominentně
  propojit s novým webem — viz sekce 2, homepage)
- **3 hlavní obory podnikání:**
  1. Kontejnery (přeprava stavebního materiálu, odpadu)
  2. Nástavby na nákladní automobily (pevné i výměnné)
  3. Kovovýroba na zakázku (ocelové konstrukce)
- **Strojní park:** CNC tabulové nůžky (3m, střih 1–10mm), tabulové nůžky 2m
  (střih 12mm), CNC ohraňovací lis 3000mm/160t (Bystronic Hämmerle 150 3P),
  svařování nerez/hliník (MIG/TIG), radiální vrtačka RV8, soustruh TOS50,
  tryskání balotinou/korundem, pásové pily (dělení materiálu do Ø300mm,
  nový model Pegas 300x320 SHI-LR)

**Tón pro copy:** Tradiční, solidní, rodinná firma s téměř 100letou historií,
ale zároveň moderně vybavená (nové CNC stroje). Cílovka je primárně B2B —
stavební firmy, dopravci, průmyslové podniky. Nejde o low-cost hráče, ale
o spolehlivého řemeslného výrobce na míru. Nulová marketingová okázalost
na starém webu — je to obrovská příležitost udělat nový web, který konečně
ukáže tradici + preciznost + širokou nabídku jasně a přehledně.

---

## 1. STRUKTURA NOVÉHO WEBU — NÁVRH STROMU STRÁNEK

Současný web má zbytečně roztříštěnou strukturu (11 podstránek jen pro
kontejnery, 7 pro nástavby, samostatné jazykové verze s duplicitním obsahem).
Pro redesign navrhuju sloučit do přehlednějších, konverzně silnějších celků:

```
1. Domů (Homepage)
2. O nás
3. Výroba
   3.1 Kontejnery
   3.2 Nástavby na nákladní automobily
   3.3 Kovovýroba
4. Strojní vybavení a certifikáty (možno sloučit do jedné stránky "Vybavení a kvalita")
5. Reference / Realizace (fotogalerie + textové reference)
6. Kariéra
7. Aktuality / Novinky
8. Kontakt
   (+ Všeobecné obchodní podmínky — odkaz v patičce, ne v menu)
```

Poznámka: jazykové mutace (EN/DE) na starém webu jsou strojově/ručně
překlopené duplicity — doporučuju je řešit až ve druhé fázi (po dokončení
češtiny), ideálně přes plnohodnotný i18n systém, ne kopií stránek.

---

## 2. DOMOVSKÁ STRÁNKA — SEKCE A COPY

### 2.1 Hero sekce
**Nadpis (současný, funkční základ):**
"Výroba kontejnerů a nástaveb na nákladní vozy"

**Návrh silnějšího hero copy (k diskuzi s klientem):**
- Nadpis: "Kontejnery a nástavby na nákladní vozy, na kterých si dáte záležet"
  nebo "Rodinná kovovýroba s tradicí od roku 1927"
- Podnadpis: "Přes 1400 spokojených firem v Česku i zahraničí. Vlastní výroba,
  vlastní dílny, žádní zprostředkovatelé."
- CTA: "Nezávazná poptávka" / "Domluvit konzultaci"

### 2.2 Tři pilíře nabídky (dlaždice/karty)
Původní texty ze starého webu — použitelné téměř 1:1:

**Kontejnery**
"Hledáte spolehlivého a kvalitního výrobce přepravních kontejnerů? Během
30leté praxe nám důvěru dalo několik set zákazníků. Dáte nám důvěru také Vy?"
→ CTA: Více informací

**Nástavby na nákladní automobily**
"Svěřte výrobu a montáž nástavby na nákladní automobil do zkušených rukou.
V portfoliu disponujeme kompletním programem pro užitkové vozy."
→ CTA: Více informací

**Kovovýroba**
"Sháníte spolehlivého dodavatele? V našich moderně vybavených halách se
každoročně rodí několik desítek na míru zhotovených výrobků."
→ CTA: Více informací

### 2.3 O firmě (krátké shrnutí s odkazem "Více o nás")
"Naše společnost se zabývá výrobou železných a hliníkových nástaveb na
nákladní automobily, kontejnerů pro přepravu stavebního materiálu a
kovovýrobou. Historie tradiční rodinné společnosti se začala psát již
v roce 1927, kdy byla v Železné Huti založena firma Bartoloměj Holub
Strojírna. Z počáteční výroby zemědělských strojů se postupně přes výrobu
kontejnerů přeorientovala na výrobu nástaveb na nákladní vozidla."

Doporučení: doplnit číselnou "důkazní" lištu (trust bar) pod hero nebo
pod tuto sekci: **"1927 — rok založení" / "1400+ — realizovaných zakázek"
/ "20 — zaměstnanců" / "3 generace rodiny Holubů"**. Staré čísla existují
v textu, jen nejsou nikde vizuálně zvýrazněná — na novém webu by měla být
hlavní důvěrotvorná plocha.

### 2.4 SEKCE FACEBOOK (NOVÝ POŽADAVEK KLIENTA — POVINNÁ SEKCE)
Klient výslovně chce **velkou sekci na homepage propojenou s Facebookem**
(https://www.facebook.com/kovoholub). Návrh zpracování:

- **Umístění:** pod sekcí "O firmě", případně před "Aktuality" — logicky
  patří k sociálnímu důkazu a živému obsahu firmy.
- **Nadpis sekce (návrh):** "Co se u nás zrovna děje" / "Sledujte nás na
  Facebooku" / "Nahlédněte k nám do provozu"
- **Obsah sekce:**
  - Vložený Facebook Page Plugin (embed) zobrazující poslední příspěvky/feed
    živě z FB stránky — technicky přes Facebook SDK for JavaScript nebo
    jednoduchý iframe plugin (developers.facebook.com/docs/plugins/page-plugin)
  - Tlačítko "Sledovat na Facebooku" / "Zobrazit více na Facebooku" vedoucí
    přímo na https://www.facebook.com/kovoholub
  - Volitelně: počet sledujících / like button, pokud to layout unese
- **Proč velká sekce:** klient zjevně na Facebooku aktivně publikuje (fotky
  z realizací, novinky o strojích) a chce, aby web tento živý obsah
  reflektoval, místo aby byl web "mrtvý" mezi aktualizacemi. Doporučuju
  navrhnout ji jako plnohodnotný blok (ne jen ikonku v patičce) — např.
  dvou až třísloupcová mřížka posledních příspěvků nebo vložený feed widget.

### 2.5 Novinky/Aktuality (výpis posledních 2-3 článků s odkazem "Všechny novinky")
Existující novinky (viz sekce 8 tohoto dokumentu pro plný výpis a zdrojová data).

### 2.6 Kontaktní CTA sekce (patička/pre-footer)
"Chcete se na něco zeptat? Máte zájem o nástavby, kontejnery nebo jiné
konstrukce?" → tlačítko "Napište nám" / "Kontaktujte nás"

### 2.7 Patička
- Logo, adresa: KOVO-HOLUB Nepomuk s.r.o., Záhoří 38, 335 01 Nepomuk
- Tel./fax: +420 371 591 644, e-mail: f.holub@kovo-holub.cz
- Odkazy: Certifikáty, Všeobecné obchodní podmínky, Mapa stránek
- Sociální sítě: Facebook, YouTube
- Copyright řádek

---

## 3. O NÁS

### Nadpis: "O firmě"

**Úvodní odstavec:**
"Naše společnost se zabývá výrobou železných a hliníkových nástaveb na
nákladní automobily, kontejnerů pro přepravu stavebního materiálu a
kovovýrobou."

Zaměstnáváme 20 stálých pracovníků. Cílovým trhem je celá Česká republika,
Spolková republika Německo a Rakousko (historicky i Nizozemsko).

### Sekce: Historie tradiční rodinné společnosti
"Naše společnost navazuje na firmu Bartoloměj Holub Strojírna, založenou
v roce 1927 v Železné Huti."

Z počáteční výroby zemědělských strojů se firma postupně přeorientovala
přes výrobu kontejnerů až na výrobu nástaveb na nákladní vozidla. Vedením
firmy prošly tři generace rodiny Holubů — od roku 2019 ji vedou František
a Jan Holubovi. Od března 2008 je firma součástí skupiny s maloobchodní
firmou AH Elektro.

**Doporučení pro redesign:** tohle je nejsilnější asset celého webu a na
starém webu je pohřbený v odstavci textu bez jediné fotky. Navrhuju:
- Vizuální časovou osu (1927 → 2003 vznik s.r.o. → 2008 součást skupiny
  → 2019 nová generace vedení → dnes)
- Fotky ideálně z výroby / historické, pokud klient nějaké má
- Krátký citát/testimonial od Františka nebo Jana Holuba jako lidský prvek

### Sekce: Registrační údaje (spíš do patičky/kontaktu než hlavní obsah)
- Spisová značka: C 15598, Krajský soud v Plzni
- Název: KOVO-HOLUB Nepomuk s.r.o.
- IČ: 26364891 / DIČ: CZ26364891
- Sídlo: Mileč, Záhoří 38, PSČ 335 01
- Den zápisu: 4. 12. 2003

---

## 4. VÝROBA — ÚVODNÍ STRÁNKA (rozcestník)

Krátké shrnutí tří oborů (viz aktuální stránka /vyroba):

**Kontejnery:** "Tradiční výroba kontejnerů probíhá v našich výrobních
halách v obci Záhoří, nedaleko Nepomuku. Vyrábíme všechny dostupné typy
kontejnerů včetně typu Abroll dle normy DIN 30722."

**Nástavby na nákladní automobily:** "Nástavby vyrábíme v různých
variantách. Nejčastěji se jedná o nástavby pevné, ocelové nebo hliníkové
konstrukce, systém Palcom, Palfix."

**Kovovýroba:** "Na zakázku jsme schopni vyrobit jakoukoli menší ocelovou
konstrukci. Nejčastěji realizujeme příslušenství k dopravním prostředkům
a stavební konstrukce."

---

## 5. VÝROBA / KONTEJNERY

### Hlavní popis (ze stránky /kontejnery):
Výroba probíhá výhradně ve vlastních dílnách, dle norem DIN 30722 a DIN
30720, se **2letou zárukou**. Vyrábíme všechny běžné typy kontejnerů
kompatibilní s nákladními vozy. Spolupracujeme s firmou FORNAL trading
s.r.o. a jsme hlavním servisním střediskem pro západní Čechy.

### Typy kontejnerů (podkategorie — na starém webu 11 samostatných
podstránek, v redesignu doporučuju sloučit do jedné stránky s filtrovatelnou
galerií nebo přehlednými sekcemi/taby):

1. **Nosiče kontejnerů** — cca 17 fotek
2. **Speciální kontejnery** — cca 61 fotek (největší galerie)
3. **Traktorové nosiče**
4. **Velkoobjemové kontejnery** — na míru zhotovené, cca 31 fotek
5. **Kontejnery se střechou** — cca 20 fotek
6. **Termokontejnery** (tepelně izolované)
7. **Kontejnery hák 1000mm**
8. **Abroll kontejnery** — objem 5–40 m³, dle normy DIN 30722, cca 80 fotek
9. **Řetězové kontejnery**
10. **Kontejnery 1340mm**

Každá kategorie na starém webu má prakticky identický text (jen nadpis
se mění) — to je slabina, kterou redesign může vyřešit: napsat pro každý
typ 2-3 věty konkrétního popisu (rozměry, využití, typický zákazník),
místo generického odstavce "Svěřte výrobu kontejneru firmě s rodinnou
tradicí od roku 1927" opakovaného 10×.

---

## 6. VÝROBA / NÁSTAVBY NA NÁKLADNÍ AUTOMOBILY

### Hlavní popis (ze stránky):
Meta popis: "Vyrábíme pevné i výměnné nástavby na nákladní automobily.
Samozřejmostí je potisk vlastním logem firmy."

Úvod: "V našem sortimentu nástaveb na nákladní automobily disponujeme
komplexní nabídkou. Všechny užitkové vozy jsme schopni osadit hydraulickým
čelem pro manipulaci nákladu."

### Sekce: Z čeho jsou nástavby vyrobeny?
(Text na starém webu nebyl plně rozveden pod tímto nadpisem — na novém
webu doporučuju doplnit konkrétní materiály/konstrukce: ocelová/hliníková
konstrukce, systém Palcom, Palfix — zmíněno jinde na webu.)

### Sekce: Nejčastěji realizujeme
Fixní i výměnné nástavby, valníkové, chladírenské, mrazírenské, sklápěcí
nástavby, řešení na míru.

### Sekce: Servis nástaveb
Servis, montáž hydraulických čel, montáž tažných zařízení, montáž
vzduchového odpružení DRIVERITE.

### Podkategorie (na starém webu 6 samostatných podstránek — opět
doporučuju sloučit do jedné stránky s taby/filtrováním):

1. **Nástavby valníkové** — cca 21 fotek
2. **Nástavby valníkové plachtové** — cca 63 fotek (největší galerie
   v této kategorii)
3. **Skříňové nástavby** — cca 42 fotek
4. **Nástavby sklápěcí** — cca 23 fotek
5. **Nástavby speciální** — cca 34 fotek
6. **Opravy** — cca 51 fotek (servis a opravy existujících nástaveb)

Stejná poznámka jako u kontejnerů: texty jsou skoro identické napříč
kategoriemi (copy k přepsání s konkrétnějším obsahem pro každý typ).

---

## 7. VÝROBA / KOVOVÝROBA

### Hlavní popis:
"Zabýváme se zakázkovou kovovýrobou. Díky našemu dílenskému vybavení
jsme schopni vyrobit např. ocelové konstrukce libovolného druhu a
velikosti."

Dílna zvládá svařování, soustružení, vrtání, frézování a dělení materiálu.

**Nejčastěji vyráběné produkty:**
- Prvky pro kontejnery a nástavby na nákladní vozy
- Schodiště
- Vrata a vstupní brány
- Přístřešky
- Ocelové mříže
- Zabezpečovací prvky
- Zábradlí
- Ocelové konstrukce
- Doplňkové výrobky na míru

### Podstránka: Námi realizované zakázky v kovovýrobě
Rozsáhlá fotogalerie (150+ fotek) dokumentující konkrétní realizace —
ideální materiál pro portfolio sekci nebo "před/po" prezentaci na novém
webu. Doporučuju vybrat 8-12 nejreprezentativnějších fotek místo přenosu
celé galerie.

---

## 8. STROJNÍ VYBAVENÍ

Úvodní text: "Naše vybavení průběžně modernizujeme a v současnosti
disponujeme následujícím vybavením."

**Seznam strojů:**
- Tabulové nůžky CNC v délce 3 m s možností střihu 1–10 mm
- Tabulové nůžky 2 m s možností střihu 12 mm
- CNC ohraňovací lis 3000 mm, 160 t (Bystronic Hämmerle 150 3P)
- Svařování nerezu a hliníku (MIG/TIG)
- Radiální vrtačka RV8
- Soustruh TOS50
- Tryskání balotinou nebo korundem v boxech
- Dělení materiálu na pásových pilách do průměru 300 mm (nově Pegas
  300x320 SHI-LR)

**Doporučení:** tohle je skvělý materiál pro budování důvěry u B2B
zákazníků (přesnost, moderní technologie) — na novém webu doporučuju
sekci s fotkami strojů v akci + krátkým vysvětlením, co každý stroj
umožňuje (v jednoduchém jazyce pro zákazníka, ne jen technický název).

---

## 9. CERTIFIKÁTY

Úvodní text: "Podívejte se na přehled našich certifikátů, které aktuálně
vlastníme."

Sekce "Aktuální certifikáty" obsahuje:
- ISO 9001 (2 dokumenty/verze)
- Řízení výroby
- Vizuální kontrola
- Montáž tažného zařízení

(Vlastní certifikát TÜV je zobrazen i jako logo v patičce celého webu.)

**Doporučení:** sloučit s "Strojní vybavení" do jedné stránky "Kvalita
a vybavení" nebo "Proč my" — obojí slouží stejnému účelu (budování
důvěryhodnosti), a samostatně jsou obě stránky dost tenké na obsah.

---

## 10. REFERENCE

### Hlavní text:
"Po celou dobu naší působnosti jsme realizovali zakázky pro více než
1400 společností z ČR i zahraničí."

### Vybraní klienti (textový seznam ze starého webu):
ALU S.V., Alsap, Arbo Klatovy, Biggest, RTS Nederland, DAF-NEVA,
EKO-SEPAR, ELRON CZ, ENGL Maschinen, Eurovia, EverLift, Klaus Timber,
KOMERSIA WEST, Kuhn MT, OBRETA, Regina, Roadfin, TALPA, Technocar,
Triumfa energo, TSR Czech Republic, VSP Auto a další.

**Doporučení:** 1400 zakázek + konkrétní jména jako Eurovia (velká
stavební firma) je silný trust signál, který na starém webu jen tiše
leží v seznamu. Na novém webu doporučuju:
- Vizuálně zvýraznit číslo "1400+" jako statistiku
- Loga klientů (pokud je klient poskytne) jako logo wall
- Případně 2-3 konkrétní case studies / delší reference s citátem

### Podstránka: Fotografie našich realizací
Fotogalerie (pravděpodobně JS lightbox, nepodařilo se plně
automatizovaně stáhnout obsah — doporučuju projít ručně nebo požádat
o export z administrace webu).

---

## 11. KARIÉRA

**Nadpis:** Kariéra

**Text:**
"V současnosti hledáme: Zámečník / Svářeč"

"Vážíme si kvalitních zaměstnanců. Pokud si myslíte, že byste byli
přínosem do našeho týmu, tak nám napište. Do mailu připojte životopis
a důvod, proč bychom měli zaměstnat zrovna Vás."

**Doporučení:** momentálně jde jen o jednu pozici a dva odstavce textu
bez jakékoli fotky týmu nebo provozu — nejslabší stránka webu z hlediska
obsahu. Pro redesign doporučuju doplnit: fotky týmu/provozu, pár vět
o tom, jaké to je u firmy pracovat (benefity, atmosféra rodinné firmy,
stabilita), a jasný kontaktní formulář/CTA pro zaslání životopisu.

---

## 12. AKTUALITY

Aktuální výpis novinek (řazeno od nejnovější):

1. **Pozvánka na valnou hromadu 2026** — 5. 6. 2026
2. **Ohraňovací lis Bystronic Hämmerle 150 3P** — 16. 6. 2025
   "Pořídili jsme nový ohraňovací lis Bystronic, díky kterému jsme dnes
   schopni ohraňovat složitější tvary."
3. **Pozvánka na valnou hromadu 2025** — 16. 5. 2025
4. **PF 2025 (novoroční přání)** — 18. 12. 2024
5. **PF 2024 (novoroční přání)** — 11. 12. 2023
   "Do nového roku přejeme všem svým zákazníkům vše nejlepší, zdraví,
   pohodu a úspěchy."
6. **Nové webové stránky** — 13. 12. 2020
7. Nová pásová pila Pegas 300x320 SHI-LR (řezání materiálu do průměru
   300 mm při 0-45°, do 200 mm při úhlu do 60°) — datum nedohledáno
   v seznamu, ale zmíněno na stránce Aktuality

**Doporučení:** valné hromady a PF přání jsou interní/formální obsah,
který na veřejném webu nepřidává hodnotu zákazníkovi — doporučuju je
buď vynechat z veřejné prezentace, nebo dát do samostatné "official
notices" sekce odděleně od skutečných novinek (nové stroje, realizace,
ocenění). Skutečně hodnotný obsah pro budoucí aktuality: nové stroje,
zajímavé zakázky, fotky z realizací — přesně to, co už klient zjevně
publikuje na Facebooku (viz sekce 2.4) — což je další důvod propojit
Aktuality a Facebook sekci vizuálně nebo dokonce funkčně.

---

## 13. KONTAKT

**Firemní údaje:**
KOVO-HOLUB Nepomuk s.r.o.
Záhoří 38, 335 01 Nepomuk
IČ: 26364891, DIČ: CZ26364891
Zapsáno: C 15598, Krajský soud v Plzni

**Kontaktní osoba:**
František Holub (jednatel/vedení)
Mobil: +420 602 237 112
Tel./Fax: +420 371 591 644
E-mail: f.holub@kovo-holub.cz

**GPS souřadnice:** N 49°27.59148', E 13°36.92318'

**Kontaktní formulář — pole:**
Jméno (povinné), E-mail (povinné), Telefon (nepovinné), Zpráva
(povinné), souhlas se zpracováním osobních údajů (povinné checkbox),
anti-spam pole.

**Doporučení:** doplnit vloženou mapu (Google Maps) místo jen GPS
souřadnic v textu — pro B2B zákazníky co jedou nákladní vozy/kamiony
na místo je to důležité. Zvážit i fotku sídla/provozovny.

### Samostatná podstránka: Dotazník spokojenosti zákazníka
Formulář s otázkami (hodnocení 1-5 + ano/ne):
- Jméno zákazníka, datum hodnocení, jméno hodnotitele
- Hodnocení realizace zakázek (komunikace, provedení)
- Celková spokojenost s kvalitou
- Přístup a rychlost reakce na připomínky/reklamace
- Dodržování dohodnutých termínů
- Doporučili byste nás známým? (ano/ne)
- Chcete být kontaktováni ohledně připomínek/nabídek? (ano/ne)
- Volné pole na komentáře

**Doporučení:** je otázka, jestli tenhle formulář patří do hlavní
navigace nového webu, nebo jde spíš o interní nástroj rozesílaný
konkrétním zákazníkům e-mailem — doporučuju s klientem probrat, jestli
má zůstat veřejně dostupný v menu.

---

## 14. VŠEOBECNÉ OBCHODNÍ PODMÍNKY

Právní text (shrnutí klíčových bodů, celý text je delší a čistě právní —
doporučuju na novém webu jen jako PDF/podstránka v patičce, ne v hlavním
obsahu):

- Kupní smlouva vzniká pouze písemným potvrzením, nabídky nejsou závazné
  pokud není uvedeno jinak
- Riziko přechází na kupujícího při opuštění provozovny prodávajícího
- Vyšší moc trvající déle než 3 měsíce opravňuje prodávajícího k odstoupení
- Dodací termíny jsou nezávazné odhady, částečné dodávky jsou povoleny
- Cena může být upravena při změně nákladů na materiál/práci/dopravu
- Vlastnické právo přechází na kupujícího až po úplném zaplacení (výhrada
  vlastnictví)
- Kupující musí zboží zkontrolovat a nahlásit vady bez zbytečného odkladu
- Spory řeší Rozhodčí soud při Hospodářské komoře ČR dle českého práva

---

## 15. SHRNUTÍ — CO REDESIGN POTŘEBUJE VYŘEŠIT

1. **Facebook sekce na homepage** — nový, povinný požadavek klienta,
   viz sekce 2.4. Naplánovat technicky (Facebook Page Plugin/SDK) i
   vizuálně (velký, viditelný blok, ne drobná ikonka).
2. **Konsolidace přehnaně roztříštěné struktury** — 11 podstránek
   kontejnerů a 7 podstránek nástaveb sloučit do dvou přehledných
   stránek s filtrovatelnými galeriemi/taby.
3. **Přepsat opakující se generické copy** — skoro identický odstavec
   "Svěřte výrobu kontejneru firmě s rodinnou tradicí od roku 1927"
   se opakuje na desítkách podstránek. Nová verze potřebuje konkrétnější,
   diferencované texty pro každý typ produktu.
4. **Vizuálně zvýraznit trust signály**, které jsou momentálně schované
   v souvislém textu: rok založení 1927, 1400+ zakázek, 3 generace
   rodiny, ISO 9001 + TÜV certifikace, konkrétní velcí klienti (Eurovia).
5. **Doplnit chybějící lidský/vizuální obsah** — O nás a Kariéra nemají
   žádné fotky týmu, provozu ani historie. Doporučeno nové fotografování.
6. **Kariéra stránka je slabá** — jen jedna pozice, dva odstavce textu,
   žádný vizuál. Prostor pro lepší "proč pracovat u nás" prezentaci.
7. **Aktuality mají nízkou hodnotu obsahu** — hodně formálních
   oznámení (valné hromady, PF přání). Zvážit oddělení od skutečně
   zajímavého obsahu (nové stroje, realizace).
8. **Loga referencí/klientů** nejsou nikde jako obrázky, jen text —
   pokud klient poskytne loga, silně doporučeno pro logo wall.
9. **Galerie realizací** (/reference/fotografie-nasich-realizaci) se
   nepodařilo plně proscrapovat — projít ručně před finálním výběrem
   fotek.
10. **Rozlišení dostupných fotek je nízké** (max ~700-900px šířka) —
    pro moderní web požádat klienta o originály ve vyšším rozlišení.

---

## 16. POSTŘEHY Z HOVORU S KLIENTEM (František Holub, 13. 8. 2026)

Doplňující kontext z telefonátu — nejde o texty na web, ale o zadání,
které mění priority projektu. Čti společně se sekcí 15.

### 16.1 Příští rok firma slaví 100 let od založení — VYUŽÍT JAKO HLAVNÍ HÁK
Klient to sám v hovoru zmínil jako motivaci celého redesignu: "my budeme
mít příští rok, jak budeme výročit, takže to bude rodinná firma a budeme
mít 100 let. My to chtěli určitě nějak oživit a nějak zvyniknout."

To znamená: firma založená 1927 má výročí 100 let v roce **2027**. Tohle
je nejsilnější marketingový moment, který klient bude mít za desetiletí,
a nový web by na něj měl cílit — ne jen zmínit "tradice od 1927" jako
dosud, ale postavit kolem toho příběh (viz sekce 3, doporučená časová
osa). Zvážit i to, jestli launch webu časovat blíž k výročí, případně
připravit speciální "100 let" landing/kampaň jako rozšíření hlavního webu.

### 16.2 Nové logo — klient si ho dělal sám přes AI
"Teď jsem si třeba dělal jakoby logo, to jsem si dělal přes AI, které to
vytvářelo." Klient si je vědom, že to není finální/profesionální řešení
("mohlo vlastně někdo v týhle větcetelnýho by měl být"). To znamená:
**redesign loga by měl být součástí zakázky**, ne jen webu — klient
očekává, že se to bude řešit společně. Doporučuju zahrnout logo do
fáze 1 (Analýza) souběžně s barevnou paletou a typografií (viz sekce 17).

### 16.3 Self-management webu — klíčová technická otázka
Klient má současný web na platformě Antee (redakční systém IPO) a je
zvyklý si obsah spravovat sám ("já to mám vlastně hodně hrchový přístup,
že si ty stránky můžu zpravovat, přidávat si tam něco sám"). V hovoru
byly nastíněné tři možnosti a klient dal jasně najevo preferenci:

1. Zůstat na platformě Antee a jen předělat vzhled (klient sám naznačil,
   že tohle nechce — chce nový web)
2. Web na míru v čistém kódu, needitovatelný klientem, s tím, že
   dodavatel (Matěj) funguje jako "IT-ák na telefonu" pro všechny změny
3. Web postavený na technologii, kterou si klient bude moct **sám
   editovat** — a tohle klient v hovoru výslovně potvrdil jako preferenci
   ("Jo, to jako méně" ve smyslu, že chce mít možnost si to spravovat)

**Důsledek pro tech stack:** zvolit CMS/platformu s jednoduchým rozhraním
pro laika (ne čistý kód bez adminu) — např. Webflow CMS, WordPress, nebo
podobné řešení, kde klient sám zvládne nahrát fotky a texty bez zásahu
vývojáře. Tohle je zásadní rozhodnutí pro fázi 4 (Stavba), řešit už teď
v analýze, protože ovlivňuje celou architekturu.

### 16.4 Propojení s Facebookem — potvrzeno, ALE hlavně jako zdroj fotek
Klient to v hovoru rozvedl konkrétněji, než jen "chci sekci s FB": jeho
reálná bolest je, že aktuální web má **hodně staré fotky** a jeho
nejjednodušší způsob, jak přidávat nový obsah, je telefon ("Tady jsme
už mám v kapse, takže vyfotím fotky, něco tam nahrávám"). Ptal se přímo,
jestli je možné automaticky protáhnout příspěvky z Facebooku na web
("přidám něco na Facebooku, a vyskočí mi to i na stránkách").

To potvrzuje a rozšiřuje sekci 2.4 — doporučení zůstává (Facebook Page
Plugin/embed), ale důležitý je i motiv: klient nechce muset spravovat
dva kanály zvlášť. Realisticky přiznat klientovi (jak jsi to udělal
i v hovoru), že 100% automatická obousměrná synchronizace je technicky
křehká/omezená (FB Graph API má limity a schvalovací proces), ale živý
embed feedu vyřeší 90 % problému bez nutnosti cokoliv duplikovat.

### 16.5 Cílové trhy — realita komunikace v Německu/Holandsku
Klient potvrdil, že jediný zahraniční segment je zakázková výroba
posílaná do Německa a Holandska, a komunikace s nimi probíhá čistě přes
Google Translate ("Na rovinu Google překladeč"). Klient sám řekl, že by
**německou jazykovou verzi webu přivítal** ("Skutečně, určitě... Teď
asi určitě by to přivítali").

Důsledek: EN verze (viz sekce 1, poznámka o jazykových mutacích) má
nižší prioritu než DE verze — stávající web má EN i DE, ale reálný
byznys jede do Německa a Holandska, ne anglicky mluvících zemí. Pokud
se bude řešit jen jedna jazyková mutace navíc kvůli rozpočtu/času,
**dej přednost němčině před angličtinou**.

### 16.6 Sezónnost a kapacita — kontext pro CTA a formulace, ne pro copy přímo
Klient nemá pevnou sezónu ("Není to prostě, že jaro je sezona... To je
úplně všechno"), ale léto je z pohledu kapacity náročné kvůli dovoleným
zaměstnanců, takže realizace zakázek trvá déle. Klient zmínil, že by
"na jaře" přivítal nové zakázky. Pro copy to znamená: neslibovat na webu
konkrétní rychlé dodací lhůty celoročně — spíš komunikovat spolehlivost
a kvalitu než rychlost, což ostatně sedí s tónem "tradice, ne fast-food"
už navrženým v sekci 0.

### 16.7 Očekávání ohledně výsledků webu — realistický rámec
V hovoru bylo klientovi na rovinu řečeno, že nový web negeneruje zákazníky
okamžitě — potřebuje čas na SEO a zviditelnění (řádově týdny až měsíce),
zatímco návaznost na existující Facebook komunitu může přinést rychlejší
odezvu. To není copy na web, ale dobré si pamatovat pro nastavení
očekávání klienta v projektovém plánu/timeline dokumentu.

---

## 17. VIZUÁLNÍ IDENTITA — BAREVNÁ PALETA A TYPOGRAFIE

Návrh vychází z oboru (kovovýroba, ocel, přesnost, těžký průmysl) a
z tónu definovaného v sekci 0: tradiční rodinná firma s bezmála 100letou
historií, ale moderně vybavená. Paleta cílí na "kovový/industriální"
vzhled, který si klient přál — chladné neutrální odstíny stříbrné/oceli
doplněné jedním sytým akcentem, aby web nepůsobil jako firemní
brožura z 90. let, ale jako moderní průmyslová značka.

### 17.1 Barevná paleta — "Broušená ocel"

**Primární neutrální škála (kov/ocel):**
- `#1A1D21` — Grafitová černá (téměř černá, s nádechem modré/šedé) —
  hlavní text, tmavé sekce, patička
- `#3A3F47` — Tmavá ocel — sekundární text, ikony
- `#6B7280` — Střední ocelová šedá — popisky, méně důležitý text
- `#A8ADB4` — Světlá kovová šedá — bordery, oddělovače, disabled stavy
- `#D9DCE1` — Stříbrná (mlha na hliníku) — pozadí sekcí, karty
- `#F4F5F7` — Téměř bílá s chladným nádechem — hlavní pozadí stránky
- `#FFFFFF` — Čistá bílá — karty na tmavém pozadí, prostor pro fotky

**Akcentní barva — jedna sytá barva pro CTA a důraz:**
Doporučuju **výraznou oranžovo-jantarovou** (barva jisker při svařování/
řezání plazmou, přímo odkazuje na řemeslo — máte to i na fotkách ze
strojního vybavení):
- `#E8590C` — Svářečská oranžová — primární CTA tlačítka, odkazy, hover
  stavy, důležitá čísla (trust bar 1927 / 1400+ apod.)
- `#FA8B3C` — Světlejší odstín akcentu — hover/aktivní stavy, gradienty

Alternativa k akcentu, pokud chce klient klidnější/konzervativnější
web (méně "startupový", víc "seriózní B2B"): **hlubokou ocelově modrou**
`#1D4E89` místo oranžové — působí důvěryhodněji, ale méně se odlišuje
od konkurenčních strojírenských webů, které často sáhnou po modré
automaticky. Oranžová dá webu mnohem víc charakteru a lépe komunikuje
"řemeslo, oheň, přesnost".

**Doporučené použití:**
- Pozadí stránky: `#F4F5F7` (light mode) — čisté, chladné, ne sterilní bílé
- Nadpisy a hlavní text: `#1A1D21`
- Tmavé sekce (hero, patička, kontrastní bloky): `#1A1D21` s bílým textem
- Karty/dlaždice: bílá `#FFFFFF` na šedém pozadí `#F4F5F7`, jemný border `#D9DCE1`
- CTA tlačítka a odkazy: `#E8590C`
- Ikony strojů/certifikátů: `#3A3F47`, akcentované detaily v `#E8590C`

**Kontrast/přístupnost:** grafitová `#1A1D21` na `#F4F5F7` splňuje WCAG AA
bez problémů. Oranžová `#E8590C` na bílé má kontrastní poměr cca 3.4:1 —
dostatečné pro velký text/tlačítka, ale pro běžný text menší velikosti
buď použij tmavší odstín oranžové, nebo drž oranžovou jen na plochách
s dostatečnou velikostí písma/tloušťkou (ověřit v design-review fázi).

### 17.2 Fonty

**Nadpisy — silný, geometrický grotesk s průmyslovým charakterem:**

**Doporučeno: Archivo (Google Fonts, zdarma)**
Hranatý, sebevědomý grotesk s mírně "inženýrským" nádechem — hodně
používaný v industriálním/technickém brandingu, dobře čitelný ve velkých
řezech, má široké spektrum vah (od Light po Black), takže pokryje celou
hierarchii nadpisů. Alternativy stejného ducha, pokud by Archivo
nesedlo vizuálně: **Space Grotesk** (o něco modernější/techničtější) nebo
**Barlow Condensed** (užší, vhodné pokud chceš víc "průmyslový štítek"
feeling na velkých nadpisech).

**Tělo textu — čistý, vysoce čitelný humanistický grotesk:**

**Doporučeno: Inter (Google Fonts, zdarma)**
Dnešní standard pro UI a delší texty — vynikající čitelnost i v menších
velikostech, neutrální charakter, který nechá vyniknout nadpisy z Archivo,
a obrovská podpora jazykových sad (čeština i němčina bez problémů,
včetně diakritiky a přehlásek — důležité vzhledem k plánované DE verzi
webu, viz sekce 16.5). Alternativa: **Source Sans 3** nebo **Public
Sans**, pokud by Inter působil moc "generic startup".

**Párování v praxi:**
- H1/H2 (hero, hlavní nadpisy sekcí): Archivo Bold/Black, velké,
  případně jemný uppercase tracking pro "štítkový" industriální pocit
- H3/H4 (podnadpisy karet, kategorie): Archivo SemiBold/Medium
- Body text, popisky, formuláře: Inter Regular/Medium
- Čísla ve statistikách (1927, 1400+): Archivo Bold — čísla by měla mít
  stejnou vizuální váhu jako nadpisy, ne splývat s běžným textem
- Drobný text (patička, právní texty, popisky fotek): Inter Regular,
  menší velikost, barva `#6B7280`

Obě rodiny jsou zdarma na Google Fonts, takže nulové licenční náklady
a snadná implementace na jakékoli platformě zvolené v sekci 16.3
(WordPress/Webflow/vlastní kód).

### 17.3 Shrnutí pro moodboard (fáze 1 dle web-workflow)
- **Vibe:** broušená ocel, svařovací jiskra, přesnost, řemeslo přes
  3 generace — ne "corporate blue" strojírenství, ne agresivní
  "heavy industry" černočervená
  Barvy: chladná grafitová/stříbrná škála + jeden sytý akcent (oranžová
  doporučena, modrá jako konzervativnější alternativa)
- Fonty: Archivo (nadpisy) + Inter (tělo textu)
- Fotografický styl: doporučuju kontrastní, ostré fotky práce v dílně
  (jiskry ze svařování/broušení, detail kovu, ruce při práci) prokládané
  čistými produktovými záběry kontejnerů/nástaveb na bílém/šedém pozadí
- Logo: potřeba redesignu (viz 16.2) — mělo by fungovat v grafitové i
  bílé verzi, dobře čitelné i jako malá ikona (favicon, FB profilovka)
