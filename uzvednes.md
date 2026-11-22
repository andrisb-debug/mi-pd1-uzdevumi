# Uzvednes

Visas Claude Code (Claude Opus 5.5) sesijā ievadītās uzvednes hronoloģiskā secībā.

## 1. Darba žurnāla izveide

*Pievienots attēls: darba lapas "PD1_darba_lapa.docx" ekrānuzņēmums ar tabulu "T1. MI darba žurnāls".*

> Izveido šim projektam darba žurnālu kā paraugā

## 2. Pirmā ieraksta aizpildīšana

> Aizpildi pirmo ierakstu ar Claude Code Opus 5.5

## 3. Commit un ID ierakstīšana

> iekomite un ieraksti ID

## 4. Atlikušo izmaiņu commit

> dari tā

## 5. Lietotnes "Mani uzdevumi" izveide

*Uzvedne tika iesniegta kā attēls; tālāk tās teksts.*

> **Loma:** Tu esi pieredzējis tīmekļa lietotņu izstrādātājs.
> **Mērķis:** izveidot uzdevumu saraksta tīmekļa lietotni "Mani uzdevumi".
> **Tehnoloģijas:** tīrs HTML, CSS un JavaScript, bez bibliotēkām.
> **Lietotnes trīs koda faili:** index.html, style.css, app.js.
> Lietotnei jādarbojas, atverot index.html pārlūkā, bez servera un interneta.
> **Funkcijas:**
> 1. Pievienot uzdevumu ar pogu "Pievienot" vai Enter. Pēc pievienošanas ievades lauks ir tukšs. Atstarpes teksta sākumā un beigās noņem. Tukšu tekstu vai tikai atstarpes nepievienot.
> 2. Atzīmēt uzdevumu kā izpildītu ar izvēles rūtiņu (izsvītrots teksts), atkārtots klikšķis atceļ atzīmi.
> 3. Dzēst uzdevumu – katrai rindai sava dzēšanas poga.
> 4. Filtrs: Visi / Aktīvie / Izpildītie; izvēlētā poga vizuāli izcelta.
> 5. Skaitītājs "Atlikuši N uzdevumi", atjaunojas pēc katras darbības.
> 6. Dati saglabājas localStorage ar atslēgu "pd1-uzdevumi" (JSON).
>
> **Elementu ID:** `<h1>` "Mani uzdevumi", task-input (vietturis "Jauns uzdevums..."), add-btn, task-list (`<ul>`), counter (`<span>`); filtru pogām atribūts data-filter.
> **Datu struktūra:** masīvs ar objektiem { id, text, done }; id ir unikāls (Date.now() ar pārbaudi pret dublikātiem).
> **Ierobežojumi:** saskarne un komentāri latviešu valodā, teksta attēlošanai lieto textContent, neviena funkcija nav garāka par 30 rindām, konsolē nedrīkst būt kļūdu, jādarbojas Chrome un Firefox.
> **Izvades formāts:** katrs fails atsevišķā koda blokā ar faila nosaukumu. Pēc koda 3 teikumos paskaidro, kā palaist.
> Ja kaut kas nav skaidrs, pirms koda uzdod man jautājumus.

## 6. T2 un T3 tabulu pievienošana

*Pievienots attēls: darba lapas ekrānuzņēmums ar tabulām "T2. Pārbaudes tabula" (10 pārbaudes) un "T3. Kļūdu tabula".*

> Jau iekomitēju no kommandrindas. Pievieno darba žurnālam tabulas T2 un T3

## 7. Žurnāla atjaunošana ar commit

> atjauno darba žurnālu ar manis veikatjiem komitiem

## 8. Uzdevuma rediģēšana

> Let's add new functionality: double-click on existing task to edit, ENTER to save, ESC to cancel

## 9. Uzvedņu saglabāšana

> saglabā visas manis līdz šim ievadītās komandas failā uzvednes.md
