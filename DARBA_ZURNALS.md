# T1. MI darba žurnāls

| Nr. | Rīks un modelis | Uzvednes mērķis | Rezultāts | Ko mainīju pats | Commit ID |
|-----|-----------------|-----------------|-----------|-----------------|-----------|
| 1   | Claude Code (Claude Opus 5.5) | Izveidot projektam MI darba žurnālu pēc parauga | Izveidots fails DARBA_ZURNALS.md ar žurnāla tabulu (6 kolonnas, 3 rindas) | Pirmā versija | 3910475 |
| 2   | Claude Code (Claude Opus 5.5) | Izveidot uzdevumu saraksta lietotni "Mani uzdevumi" (HTML, CSS, JS) pēc detalizētas uzvednes | Izveidoti faili index.html, style.css, app.js ar visām 6 funkcijām | | a0227db |
| 3   | Claude Code (Claude Opus 5.5) | Pievienot darba žurnālam pārbaudes (T2) un kļūdu (T3) tabulas pēc parauga | Pievienota T2 tabula ar 10 pārbaudēm un tukša T3 tabula | Aizpildīju T2 faktiskos rezultātus (visas 10 pārbaudes izdevās) | c8a3ac5 |

# T2. Pārbaudes tabula

| Nr. | Pārbaude | Gaidītais rezultāts | Faktiskais rezultāts | Izdevās |
|-----|----------|---------------------|----------------------|---------|
| 1   | Pievienošana ar pogu | Uzdevums parādās, lauks iztukšots | Parādās, lauks tukšs | jā / atkārtoti|
| 2   | Pievienošana ar Enter | Uzdevums parādās sarakstā | Parādās, lauks tukšs | jā |
| 3   | Tukšs uzdevums | Uzdevums netiek pievienots | Neparādās, lauks tukšs | jā |
| 4   | Garumzīmes un mīkstinājumi | Teksts attēlots pareizi | Attēloti pareizi | jā |
| 5   | HTML ievade | Attēlots kā teksts | Attēlots kā teksts | jā |
| 6   | Izpildīšana | Izsvītrots, skaitītājs −1 | Izsvītrots, skaitītājs -1 | jā |
| 7   | Dzēšana | Pazūd tikai izvēlētais | Pazuda tikai izvēlētais | jā /atkārtoti |
| 8   | Filtrs | Redzami tikai atbilstošie | Redzami tikai atbilstošie | jā |
| 9   | Saglabāšana | Pēc F5 viss saglabāts | Pēc F5 viss ir saglabāts | jā / atkārtoti |
| 10  | Konsole | Nav sarkanu kļūdu | Nav nevienas kļūdas | jā |

# T3. Kļūdu tabula

| Nr. | Kļūdas apraksts | T2 Nr. | Kā nodevu modelim | Uzvedņu skaits | Radīja citas kļūdas? | Commit ID |
|-----|-----------------|--------|-------------------|----------------|----------------------|-----------|
| 1   | | | | | | |
