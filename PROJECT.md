# Mani uzdevumi
 
## Mērķis

Uzdevumu saraksta tīmekļa lietotne, kas darbojas pārlūkā bez servera.
 
## Faili

- index.html: lapas struktūra
- style.css: izskats
- app.js: visa loģika
 
## Datu struktūra

localStorage atslēga "pd1-uzdevumi", masīvs ar objektiem: { id: skaitlis, text: teksts, done: true/false }
 
## Funkcijas app.js

loadTasks (): nolasa uzdevumus no localStorage, un, ja dati ir bojāti vai nav masīvs, atgriež tukšu masīvu.
saveTasks (): saglabā uzdevumu masīvu localStorage JSON formātā un neizmet kļūdu, ja krātuve nav pieejama.
createId (): izveido unikālu id no Date.now() un palielina to, ja tāds id jau ir aizņemts.
addTask (): paņem tekstu no ievades lauka, iztukšo lauku un, ja teksts nav tukšs, pievieno jaunu uzdevumu, saglabā un pārzīmē sarakstu.
toggleTask (id): pārslēdz uzdevuma ar norādīto id izpildes statusu, saglabā un pārzīmē sarakstu.
deleteTask (id): izdzēš uzdevumu ar norādīto id, saglabā un pārzīmē sarakstu.
getVisibleTasks (): atgriež uzdevumus pēc izvēlētā filtra: visus, aktīvos vai izpildītos.
createTaskElement (task): izveido vienas saraksta rindas <li> elementu ar izvēles rūtiņu, uzdevuma tekstu un pogu „Dzēst”.
createEmptyElement (): izveido <li> elementu ar paziņojumu „Nav uzdevumu”, ko rāda, kad saraksts ir tukšs.
render (): no jauna uzzīmē uzdevumu sarakstu, atjauno atlikušo uzdevumu skaitītāju un iezīmē aktīvo filtra pogu.
getTaskId (element): atrod tuvāko .task-item elementu un atgriež tā uzdevuma id kā skaitli vai null.
createTextElement (text): izveido <span> elementu ar uzdevuma tekstu, kuru var rediģēt ar dubultklikšķi.
startEdit (span): aizstāj uzdevuma teksta elementu ar ievades lauku, ja pašlaik netiek rediģēts kāds cits uzdevums.
finishEdit (field, save): pabeidz rediģēšanu: saglabā jauno tekstu, ja save ir true un teksts nav tukšs, citādi atstāj iepriekšējo, un atjauno teksta elementu.
handleEditKey (event): rediģēšanas laukā ar Enter saglabā izmaiņas, ar Escape tās atceļ.