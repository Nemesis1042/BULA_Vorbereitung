// ============================================================
// Fragen fuer "1, 2 oder 3" - BULA26
// ============================================================
// Diese Datei MUSS im selben Ordner liegen wie die HTML-Datei
// (wird dort per <script src="fragen.js"> eingebunden).
//
// Jede Frage ist ein Block in geschweiften Klammern:
//   cat     = Kategorie-Chip, der oben angezeigt wird
//   q       = die Frage
//   opts    = die drei Antworten fuer Feld 1, 2 und 3 (genau 3 Stueck!)
//   correct = Index der richtigen Antwort: 0 = Feld 1, 1 = Feld 2, 2 = Feld 3
//   fact    = Erklaerungstext, der beim Aufloesen angezeigt wird
//
// Fragen hinzufuegen: einfach eine neue Zeile nach demselben Muster
// einfuegen (Komma am Zeilenende nicht vergessen, ausser bei der letzten).
// Fragen loeschen: die ganze Zeile entfernen.
// Reihenfolge aendern: Zeilen einfach verschieben.
//
// Stand: ~100 Fragen, Wissensstand ca. 8-14 Jahre (Schwerpunkt ca. 10 Jahre),
// Schwerpunkt Bibel, Tiere und Geografie, Koerper-Fragen bewusst reduziert.
// ============================================================

var QUESTIONS = [
  {cat: "Bibel",q: "Wer baute laut der Bibel die Arche?",opts: ["Abraham","Noah","Mose"],correct: 1,fact: "Noah baute die Arche, um seine Familie und die Tiere vor der großen Flut zu retten."},
  {cat: "Tiere",q: "Wie viele Beine hat eine Spinne?",opts: ["6","8","10"],correct: 1,fact: "Spinnen sind Achtbeiner – deshalb zählen sie nicht zu den Insekten, sondern zu den Spinnentieren."},
  {cat: "Geografie",q: "Welches Land hat aktuell die meisten Einwohner der Welt?",opts: ["China","Indien","USA"],correct: 1,fact: "Indien hat China bei der Einwohnerzahl inzwischen überholt."},
  {cat: "Bibel",q: "Wie viele Jünger wählte Jesus aus?",opts: ["10","12","14"],correct: 1,fact: "Jesus berief 12 Jünger."},
  {cat: "Weltall",q: "Wie lange braucht das Sonnenlicht bis zur Erde?",opts: ["ca. 8 Sekunden","ca. 8 Minuten","ca. 8 Stunden"],correct: 1,fact: "Das Licht der Sonne braucht rund 8 Minuten und 20 Sekunden bis zu uns."},
  {cat: "Tiere",q: "Welches ist das größte Tier der Welt?",opts: ["Elefant","Blauwal","Riesenkrake"],correct: 1,fact: "Der Blauwal kann bis zu 30 Meter lang und über 150 Tonnen schwer werden."},
  {cat: "Sport",q: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?",opts: ["9","11","13"],correct: 1,fact: "Jede Mannschaft spielt mit 11 Spielern inklusive Torwart."},
  {cat: "Bibel",q: "In welcher Stadt wurde Jesus laut der Bibel geboren?",opts: ["Nazareth","Jerusalem","Bethlehem"],correct: 2,fact: "Jesus wurde in Bethlehem geboren, aufgewachsen ist er in Nazareth."},
  {cat: "Spaßfakt",q: "Wie viele Farben hat ein klassischer Regenbogen?",opts: ["5","7","9"],correct: 1,fact: "Rot, Orange, Gelb, Grün, Blau, Indigo, Violett – klassisch 7 Farben."},
  {cat: "Geografie",q: "Wie viele Kontinente gibt es?",opts: ["5","7","9"],correct: 1,fact: "Afrika, Antarktis, Asien, Australien, Europa, Nordamerika, Südamerika – das sind 7."},
  {cat: "Tiere",q: "Wie schnell kann ein Gepard maximal laufen?",opts: ["ca. 70 km/h","ca. 110 km/h","ca. 160 km/h"],correct: 1,fact: "Geparden erreichen kurzzeitig bis zu 110–120 km/h – schneller als jedes andere Landtier."},
  {cat: "Bibel",q: "Wie viele Bücher hat die Bibel (evangelisch, AT + NT)?",opts: ["39","66","73"],correct: 1,fact: "39 Bücher im Alten Testament + 27 im Neuen Testament = 66 Bücher."},
  {cat: "Musik",q: "Wie viele Saiten hat eine klassische Gitarre?",opts: ["4","6","8"],correct: 1,fact: "Eine Standard-Gitarre hat 6 Saiten."},
  {cat: "Spaßfakt",q: "Wie oft kann ein beliebig großes Papier höchstens in der Mitte gefaltet werden?",opts: ["7 mal","14 mal","So oft man möchte"],correct: 0,fact: "Die Faltkante wird jedes Mal doppelt so dick – nach 7-mal ist Schluss."},
  {cat: "Tiere",q: "Wie viele Herzen hat ein Oktopus?",opts: ["1","3","5"],correct: 1,fact: "Ein Oktopus hat drei Herzen – zwei pumpen Blut zu den Kiemen, eins durch den restlichen Körper."},
  {cat: "Körper",q: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",opts: ["24","32","40"],correct: 1,fact: "Mit allen Weisheitszähnen kommt man auf 32 Zähne."},
  {cat: "Bibel",q: "Wer besiegte in der Bibel den Riesen Goliat?",opts: ["David","Simson","Mose"],correct: 0,fact: "Der junge David besiegte den Riesen Goliat nur mit einer Steinschleuder."},
  {cat: "Geografie",q: "Welches europäische Land hat die Form eines Stiefels?",opts: ["Spanien","Italien","Griechenland"],correct: 1,fact: "Italien wird wegen seiner Form oft „der Stiefel“ genannt."},
  {cat: "Spaßfakt",q: "Wie nennt man die Angst vor Spinnen?",opts: ["Klaustrophobie","Arachnophobie","Akrophobie"],correct: 1,fact: "Arachnophobie ist eine der häufigsten Phobien überhaupt."},
  {cat: "Tiere",q: "Welches Tier schläft am meisten pro Tag?",opts: ["Katze","Koala","Pferd"],correct: 1,fact: "Koalas schlafen bis zu 20–22 Stunden am Tag – ihre Nahrung liefert kaum Energie."},
  {cat: "Bibel",q: "Wie viele Tage brauchte Gott laut der Schöpfungsgeschichte, um die Welt zu erschaffen?",opts: ["5","6","7"],correct: 1,fact: "An 6 Tagen erschuf Gott die Welt, am 7. Tag ruhte er."},
  {cat: "Tiere",q: "Wie viele Beine hat ein Insekt?",opts: ["4","6","8"],correct: 1,fact: "Alle Insekten haben genau 6 Beine – das unterscheidet sie z. B. von Spinnen."},
  {cat: "Geografie",q: "Welches ist das flächengrößte Land der Welt?",opts: ["China","Kanada","Russland"],correct: 2,fact: "Russland erstreckt sich über elf Zeitzonen und ist mit Abstand das größte Land."},
  {cat: "Bibel",q: "Wie hieß laut der Bibel die erste Frau?",opts: ["Eva","Sara","Maria"],correct: 0,fact: "Eva war laut der Bibel die erste Frau, die Gott erschuf."},
  {cat: "Weltall",q: "Wie viele Monde hat die Erde?",opts: ["0","1","2"],correct: 1,fact: "Die Erde hat genau einen natürlichen Mond."},
  {cat: "Tiere",q: "Welcher Vogel ist im Sturzflug am schnellsten?",opts: ["Adler","Wanderfalke","Kolibri"],correct: 1,fact: "Der Wanderfalke erreicht im Sturzflug über 300 km/h – schnellstes Tier der Welt."},
  {cat: "Sport",q: "Wie viele Ringe hat das olympische Symbol?",opts: ["4","5","6"],correct: 1,fact: "Die fünf Ringe stehen für die fünf bewohnten Kontinente."},
  {cat: "Bibel",q: "Wie viele Gebote bekam Mose von Gott?",opts: ["7","10","12"],correct: 1,fact: "Die „10 Gebote“ sind bis heute bekannt."},
  {cat: "Spaßfakt",q: "Wer gilt landläufig als Erfinder der Glühbirne?",opts: ["Nikola Tesla","Thomas Edison","Albert Einstein"],correct: 1,fact: "Thomas Edison gilt gemeinhin als Erfinder der (marktreifen) Glühbirne."},
  {cat: "Geografie",q: "Wie tief ist der tiefste bekannte Punkt der Ozeane (Marianengraben)?",opts: ["ca. 3.000 m","ca. 7.000 m","ca. 11.000 m"],correct: 2,fact: "Der Marianengraben ist an seiner tiefsten Stelle fast 11.000 Meter tief."},
  {cat: "Tiere",q: "Wie viele „Herzen“ hat ein Regenwurm?",opts: ["1","5","10"],correct: 1,fact: "Regenwürmer haben 5 Adern, die wie Herzen das Blut durch den Körper pumpen."},
  {cat: "Bibel",q: "Wer verriet Jesus an seine Feinde?",opts: ["Judas","Petrus","Thomas"],correct: 0,fact: "Judas verriet Jesus für 30 Silberstücke."},
  {cat: "Musik",q: "Wie viele Tasten hat ein normales Klavier?",opts: ["61","88","100"],correct: 1,fact: "Ein Standardklavier hat 88 Tasten – 52 weiße und 36 schwarze."},
  {cat: "Spaßfakt",q: "Wie oft blinzelt ein Mensch durchschnittlich pro Minute?",opts: ["ca. 5-mal","ca. 15-mal","ca. 30-mal"],correct: 1,fact: "Wir blinzeln im Schnitt etwa 15-mal pro Minute – meist ohne es zu merken."},
  {cat: "Tiere",q: "Wie schnell ist eine Gartenschnecke maximal unterwegs?",opts: ["ca. 0,05 km/h","ca. 5 km/h","ca. 15 km/h"],correct: 0,fact: "Schnecken kriechen mit etwa 1 cm pro Sekunde – das sind nur 0,05 km/h."},
  {cat: "Körper",q: "Wie viele Knochen hat ein erwachsener Mensch?",opts: ["ca. 106","ca. 206","ca. 306"],correct: 1,fact: "Babys haben noch mehr Knochen (ca. 300), die im Laufe des Wachstums zusammenwachsen."},
  {cat: "Bibel",q: "Wie viele Tage und Nächte regnete es laut der Bibel bei der großen Flut?",opts: ["7","40","100"],correct: 1,fact: "Es regnete 40 Tage und 40 Nächte lang."},
  {cat: "Geografie",q: "Welcher Fluss gilt klassisch als der längste der Welt?",opts: ["Amazonas","Nil","Mississippi"],correct: 1,fact: "Der Nil wird traditionell als längster Fluss der Welt geführt (ca. 6.650 km)."},
  {cat: "Spaßfakt",q: "Wie lange dauert ein einzelner Wimpernschlag ungefähr?",opts: ["0,1 bis 0,4 Sekunden","etwa 1 Sekunde","etwa 3 Sekunden"],correct: 0,fact: "Ein Wimpernschlag ist blitzschnell – nur ein paar hundertstel Sekunden lang."},
  {cat: "Tiere",q: "Wie schnell kann das Herz eines Kolibris im Flug maximal schlagen?",opts: ["ca. 200-mal pro Minute","ca. 700-mal pro Minute","ca. 1.200-mal pro Minute"],correct: 2,fact: "Im Flug kann das Kolibri-Herz bis zu 1.200-mal pro Minute schlagen."},
  {cat: "Bibel",q: "Wer führte laut der Bibel das Volk Israel aus Ägypten?",opts: ["Mose","Abraham","Josua"],correct: 0,fact: "Mose führte das Volk Israel aus der Sklaverei in Ägypten."},
  {cat: "Tiere",q: "Welches Tier kann sich nicht rückwärts bewegen?",opts: ["Känguru","Elefant","Pinguin"],correct: 0,fact: "Kängurus können wegen ihrer kräftigen Hinterbeine und des Schwanzes nicht rückwärtslaufen."},
  {cat: "Geografie",q: "Wie heißt der höchste Wasserfall der Welt?",opts: ["Niagarafälle","Angel Falls","Victoriafälle"],correct: 1,fact: "Die Angel Falls in Venezuela stürzen aus fast 1.000 Metern Höhe."},
  {cat: "Bibel",q: "Was verwandelte Jesus bei einer Hochzeit in Wein?",opts: ["Wasser","Milch","Traubensaft"],correct: 0,fact: "Bei der Hochzeit zu Kana verwandelte Jesus Wasser in Wein."},
  {cat: "Weltall",q: "Wie lange braucht die Erde für eine Umrundung der Sonne?",opts: ["30 Tage","365 Tage","500 Tage"],correct: 1,fact: "Ein Jahr entspricht einer vollen Erdumlaufbahn um die Sonne – ca. 365,25 Tage."},
  {cat: "Tiere",q: "Welches Tier hat die größten Augen im Verhältnis zum Körper?",opts: ["Chamäleon","Riesenkalmar","Frosch"],correct: 1,fact: "Die Augen des Riesenkalmars können bis zu 27 cm groß werden."},
  {cat: "Sport",q: "Wie lange dauert eine Fußball-Halbzeit normalerweise?",opts: ["30 Minuten","45 Minuten","60 Minuten"],correct: 1,fact: "Ein Spiel besteht aus zwei Halbzeiten à 45 Minuten."},
  {cat: "Bibel",q: "Womit fütterte Jesus laut der Bibel über 5000 Menschen?",opts: ["5 Brote und 2 Fische","2 Brote und 5 Fische","7 Brote und 3 Fische"],correct: 0,fact: "Mit nur 5 Broten und 2 Fischen wurden über 5000 Menschen satt."},
  {cat: "Spaßfakt",q: "Wie viele Buchstaben hat das deutsche Alphabet?",opts: ["24","26","30"],correct: 1,fact: "Das deutsche Alphabet hat 26 Buchstaben (plus Umlaute und ß)."},
  {cat: "Geografie",q: "Welches ist der kleinste Staat der Welt?",opts: ["Monaco","Vatikanstadt","Liechtenstein"],correct: 1,fact: "Die Vatikanstadt ist mit ca. 0,49 km² der kleinste Staat der Welt."},
  {cat: "Tiere",q: "Welches Tier gilt als das lauteste der Welt?",opts: ["Löwe","Blauwal","Elefant"],correct: 1,fact: "Blauwal-Rufe können über 180 Dezibel erreichen – lauter als ein Düsenjet."},
  {cat: "Bibel",q: "In welchem Tier verbrachte Jona laut der Bibel drei Tage?",opts: ["In einem Löwen","In einem großen Fisch","In einem Bären"],correct: 1,fact: "Ein großer Fisch verschluckte Jona für drei Tage."},
  {cat: "Musik",q: "Wie viele Linien hat ein Notensystem?",opts: ["4","5","6"],correct: 1,fact: "Ein Notensystem besteht klassischerweise aus 5 Linien."},
  {cat: "Spaßfakt",q: "Wie schwer ist eine durchschnittliche kleine Wolke ungefähr?",opts: ["ein paar Kilo","mehrere hundert Tonnen","gar nichts, Wolken sind nur Luft"],correct: 1,fact: "Eine kleine Quellwolke enthält oft mehrere hundert Tonnen Wasser – sie schwebt trotzdem, weil die Tröpfchen winzig sind."},
  {cat: "Tiere",q: "Welches Tausendfüßler-Rekordtier hat die meisten Beine?",opts: ["ca. 100","ca. 400","ca. 750"],correct: 2,fact: "Die Art Illacme plenipes hält mit bis zu 750 Beinen den Rekord."},
  {cat: "Körper",q: "Welches Organ ist das größte im menschlichen Körper?",opts: ["Leber","Herz","Haut"],correct: 2,fact: "Die Haut ist mit ca. 1,5–2 m² Fläche unser größtes Organ."},
  {cat: "Bibel",q: "Wie hieß der Garten, in dem Adam und Eva laut der Bibel lebten?",opts: ["Garten Eden","Garten Getsemani","Garten Kana"],correct: 0,fact: "Der Garten Eden war das Paradies, in dem Adam und Eva lebten."},
  {cat: "Geografie",q: "Wie heißt der höchste Berg der Welt?",opts: ["K2","Mount Everest","Kilimandscharo"],correct: 1,fact: "Der Mount Everest ist mit 8.848,86 Metern der höchste Berg der Welt."},
  {cat: "Spaßfakt",q: "Wie viele Zeichen passten ursprünglich in eine klassische SMS?",opts: ["100","160","300"],correct: 1,fact: "Eine klassische SMS war auf 160 Zeichen begrenzt."},
  {cat: "Tiere",q: "Wie lange kann ein Kamel ungefähr ohne Wasser auskommen?",opts: ["ein paar Stunden","mehrere Tage","über ein Jahr"],correct: 1,fact: "Kamele können dank ihrer Fettpolster im Höcker mehrere Tage ohne Wasser auskommen."},
  {cat: "Bibel",q: "Welcher König wollte laut der Bibel das neugeborene Jesuskind töten lassen?",opts: ["Herodes","Pilatus","Kaiser Augustus"],correct: 0,fact: "König Herodes fürchtete um seine Macht und ließ nach dem neugeborenen König suchen."},
  {cat: "Tiere",q: "Welches Tier ist im Verhältnis zu seiner Größe der beste Springer?",opts: ["Floh","Frosch","Grashüpfer"],correct: 0,fact: "Ein Floh kann das über 100-fache seiner eigenen Körperlänge weit springen."},
  {cat: "Geografie",q: "Welcher Ozean ist der größte der Welt?",opts: ["Atlantik","Pazifik","Indischer Ozean"],correct: 1,fact: "Der Pazifische Ozean ist größer als alle Landmassen der Erde zusammen."},
  {cat: "Bibel",q: "Auf welchem Berg bekam Mose laut der Bibel die 10 Gebote?",opts: ["Berg Sinai","Berg Ararat","Berg Zion"],correct: 0,fact: "Auf dem Berg Sinai empfing Mose die 10 Gebote von Gott."},
  {cat: "Weltall",q: "Welcher Planet ist der Erde am nächsten?",opts: ["Mars","Venus","Merkur"],correct: 1,fact: "Die Venus ist im Schnitt der Erde am nächsten."},
  {cat: "Tiere",q: "Welches ist das größte Landtier der Welt?",opts: ["Nashorn","Elefant","Nilpferd"],correct: 1,fact: "Der Afrikanische Elefant ist das größte an Land lebende Tier."},
  {cat: "Sport",q: "Wie viele schwarze Fünfecke hat ein klassischer Fußball (Telstar-Design)?",opts: ["8","12","20"],correct: 1,fact: "Der klassische Fußball besteht aus 12 schwarzen Fünfecken und 20 weißen Sechsecken."},
  {cat: "Bibel",q: "Wie hieß Jesu Mutter?",opts: ["Maria","Elisabeth","Rebekka"],correct: 0,fact: "Maria war die Mutter von Jesus."},
  {cat: "Spaßfakt",q: "Wie viele Muskeln braucht man ungefähr zum Lächeln?",opts: ["ca. 5","ca. 17","ca. 50"],correct: 1,fact: "Für ein Lächeln arbeiten schon rund 17 Muskeln im Gesicht zusammen."},
  {cat: "Geografie",q: "In welchem Land steht die Freiheitsstatue?",opts: ["Frankreich","USA","Kanada"],correct: 1,fact: "Die Freiheitsstatue steht in New York – sie war ein Geschenk Frankreichs."},
  {cat: "Tiere",q: "Wie nennt man eine Gruppe von Löwen?",opts: ["Rudel","Herde","Schwarm"],correct: 0,fact: "Löwen leben in Rudeln zusammen."},
  {cat: "Bibel",q: "Was feiern Christen an Ostern?",opts: ["Jesu Geburt","Jesu Auferstehung","Die Taufe von Jesus"],correct: 1,fact: "An Ostern feiern Christen, dass Jesus von den Toten auferstanden ist."},
  {cat: "Musik",q: "Welches Instrument hat schwarze und weiße Tasten?",opts: ["Gitarre","Klavier","Trompete"],correct: 1,fact: "Das Klavier hat weiße und schwarze Tasten."},
  {cat: "Spaßfakt",q: "Wie lange hält sich Honig ungefähr, wenn er richtig gelagert wird?",opts: ["ein paar Wochen","ein paar Jahre","fast unbegrenzt"],correct: 2,fact: "Richtig gelagerter Honig verdirbt praktisch nicht – man hat sogar tausende Jahre alten Honig in Grabkammern gefunden."},
  {cat: "Tiere",q: "Welches Tier kann am längsten unter Wasser die Luft anhalten?",opts: ["Delfin","Pottwal","Schildkröte"],correct: 1,fact: "Pottwale können über eine Stunde lang tauchen, ohne aufzutauchen."},
  {cat: "Körper",q: "Wie viele Kammern hat ein menschliches Herz?",opts: ["2","4","6"],correct: 1,fact: "Zwei Vorhöfe und zwei Herzkammern – macht zusammen 4."},
  {cat: "Bibel",q: "Welcher Jünger zweifelte zuerst daran, dass Jesus auferstanden war?",opts: ["Thomas","Johannes","Andreas"],correct: 0,fact: "Thomas wird deshalb oft „der ungläubige Thomas“ genannt."},
  {cat: "Geografie",q: "Welche ist die größte heiße Wüste der Welt?",opts: ["Sahara","Gobi","Kalahari"],correct: 0,fact: "Die Sahara in Nordafrika ist die größte heiße Wüste der Welt."},
  {cat: "Spaßfakt",q: "Was ist eine Banane botanisch gesehen eigentlich?",opts: ["Eine Nuss","Eine Beere","Eine Wurzel"],correct: 1,fact: "Botanisch gesehen zählt die Banane tatsächlich zu den Beeren."},
  {cat: "Tiere",q: "Wie viele Augen hat eine Biene?",opts: ["2","3","5"],correct: 2,fact: "Bienen haben 2 große Facettenaugen und 3 zusätzliche kleine Punktaugen – macht 5 Augen."},
  {cat: "Bibel",q: "Auf welchem Berg landete laut der Bibel die Arche Noah?",opts: ["Berg Ararat","Berg Sinai","Ölberg"],correct: 0,fact: "Die Arche landete laut der Bibel auf dem Berg Ararat."},
  {cat: "Geografie",q: "Wie heißt die Hauptstadt von Deutschland?",opts: ["München","Berlin","Hamburg"],correct: 1,fact: "Berlin ist die Hauptstadt Deutschlands."},
  {cat: "Bibel",q: "Wie viele Plagen schickte Gott laut der Bibel über Ägypten?",opts: ["7","10","12"],correct: 1,fact: "Die „10 Plagen“ sollten den Pharao dazu bringen, die Israeliten ziehen zu lassen."},
  {cat: "Weltall",q: "Wie heißt unsere Galaxie?",opts: ["Milchstraße","Andromeda","Orion"],correct: 0,fact: "Wir leben in der Milchstraße, einer von Milliarden Galaxien im Universum."},
  {cat: "Sport",q: "Wie viele Spieler stehen bei Basketball pro Team gleichzeitig auf dem Feld?",opts: ["5","6","7"],correct: 0,fact: "Beim Basketball spielen 5 gegen 5 auf dem Feld."},
  {cat: "Bibel",q: "Worin lag laut der Bibel Simsons große Kraft?",opts: ["In seinen Haaren","In seinem Schwert","In seinem Ring"],correct: 0,fact: "Simsons Kraft war an seine langen Haare gebunden."},
  {cat: "Spaßfakt",q: "Wie viele Halswirbel hat eine Giraffe im Vergleich zum Menschen?",opts: ["weniger","gleich viele","mehr"],correct: 1,fact: "Trotz des langen Halses hat eine Giraffe genau wie ein Mensch 7 Halswirbel – sie sind nur viel größer."},
  {cat: "Geografie",q: "Wie viele Zeitzonen hat Russland?",opts: ["5","9","11"],correct: 2,fact: "Russland erstreckt sich über 11 Zeitzonen."},
  {cat: "Bibel",q: "Wie viele Söhne hatte der biblische Jakob, aus denen die 12 Stämme Israels wurden?",opts: ["10","12","14"],correct: 1,fact: "Jakobs 12 Söhne wurden zu den 12 Stämmen Israels."},
  {cat: "Spaßfakt",q: "Wie viele Geschmacksrichtungen kann unsere Zunge grundlegend unterscheiden?",opts: ["3","5","7"],correct: 1,fact: "Süß, sauer, salzig, bitter und umami – das sind die 5 Grundgeschmacksrichtungen."},
  {cat: "Körper",q: "Welches Gas brauchen wir zum Atmen am dringendsten?",opts: ["Kohlenstoffdioxid","Sauerstoff","Stickstoff"],correct: 1,fact: "Unser Körper braucht Sauerstoff, um Energie aus der Nahrung zu gewinnen."},
  {cat: "Spaßfakt",q: "Wie viele Punkte hat ein Würfel insgesamt auf allen sechs Seiten zusammen?",opts: ["18","21","24"],correct: 1,fact: "1+2+3+4+5+6 ergibt zusammen 21 Punkte."},
  {cat: "Weltall",q: "Welcher ist der größte Planet in unserem Sonnensystem?",opts: ["Saturn","Jupiter","Neptun"],correct: 1,fact: "Jupiter ist der größte Planet unseres Sonnensystems."},
  {cat: "Sport",q: "Wie oft finden die Olympischen Sommerspiele statt?",opts: ["Alle 2 Jahre","Alle 4 Jahre","Alle 6 Jahre"],correct: 1,fact: "Die Olympischen Sommerspiele finden alle 4 Jahre statt."},
  {cat: "Spaßfakt",q: "Wie nennt man ein Wort, das vorwärts und rückwärts gelesen gleich lautet, wie „OTTO“?",opts: ["Anagramm","Palindrom","Synonym"],correct: 1,fact: "Solche Wörter nennt man Palindrome."},
  {cat: "Körper",q: "Wie viele Stunden schläft ein Neugeborenes durchschnittlich pro Tag?",opts: ["ca. 8 Stunden","ca. 16 Stunden","ca. 22 Stunden"],correct: 1,fact: "Neugeborene schlafen im Schnitt etwa 16 bis 17 Stunden am Tag."},
  {cat: "Weltall",q: "Wie nennt man einen Stern, der explodiert?",opts: ["Meteorit","Supernova","Komet"],correct: 1,fact: "Eine Supernova ist die gewaltige Explosion am Ende des Lebens eines Sterns."},
  {cat: "Sport",q: "Wie viele Spieler hat eine Volleyball-Mannschaft auf dem Feld?",opts: ["5","6","7"],correct: 1,fact: "Beim Volleyball stehen 6 Spieler pro Team auf dem Feld."},
  {cat: "Weltall",q: "Wer war der erste Mensch auf dem Mond?",opts: ["Buzz Aldrin","Neil Armstrong","Juri Gagarin"],correct: 1,fact: "Neil Armstrong betrat 1969 als erster Mensch den Mond."},
  {cat: "Sport",q: "In welchem Land entstanden die modernen Fußballregeln?",opts: ["Deutschland","England","Brasilien"],correct: 1,fact: "Die modernen Fußballregeln wurden 1863 in England festgelegt."}
];
