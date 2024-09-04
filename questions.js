const questions = [

//Erdgeschichte
    { 
        "Kategorie": "Geschichte",
        "Frage": "Vor wie vielen Milliarden Jahren entstand die Erde?",
        "Antworten": ["4,5 Milliarden", "3,2 Milliarden", "5 Milliarden", "3,6 Milliarden"],
        "RichtigeAntwort": "4,5 Milliarden",
        "RichtigeAntwortMöglichkeiten": "4 4.5 4,5 4,54 4.54 4000000000 4.000.000.000 vier",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Entstehungszeit der Erde konnte man durch untersuchungen an Meteoriten und Mondgestein festellen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Vor wie vielen Milliarden Jahren entstand das Universum?",
        "Antworten": ["14 Milliarden", "13,8 Milliarden", "8,6 Milliarden", "7,9 Milliarden"],
        "RichtigeAntwort": "13,8 Milliarden",
        "RichtigeAntwortMöglichkeiten": "14 13 13.8 13,8 13,82 13.82 13.000.000.000 13000000000 dreizehn vierzehn",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Universum soll aus einem unendlich winzigem Punkt vor rund 13,82 Milliarden Jahren entstanden sein"
    },
    
    { 
        "Kategorie": "Geschichte",
        "Frage": "In Welchem Zeitalter lebeten die ersten dinosaurier?",
        "Antworten": ["Kreide", "Perm", "Trias", "Jura"],
        "RichtigeAntwort": "Trias",
        "RichtigeAntwortMöglichkeiten": "Triaszeit Trias",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Dinosaurier erstreckten sich über 3 Zeitalter Trias, Jura, Kreide"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Dinosaurier war der größte Fleischfresser?",
        "Antworten": ["Velociraptor", "Brachiosaurus", "Stegosaurus", "Tyrannosaurus rex"],
        "RichtigeAntwort": "Tyrannosaurus rex",
        "RichtigeAntwortMöglichkeiten": "Tyrannosaurus rex T-rex Trex rex Tyranno",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der T-rex war über 12 Meter lang"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis führte zum aussterben der Dinosaurier?",
        "Antworten": ["Meteoriteneinschlag", "Eiszeit", "Vulkanausbrüche", "Klimawandel"],
        "RichtigeAntwort": "Meteoriteneinschlag",
        "RichtigeAntwortMöglichkeiten": "Meteoriteneinschlag Meteoriten Meteor Kometeneinschlag Komet Kometen Asteroideneinschlag Asteroid Asteroiden",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Dinosaurier erstreckten sich über 3 Zeitalter Trias, Jura, Kreide"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "wie nannte man das Zeitalter der Dinosaurier?",
        "Antworten": ["Paläozoikum", "Mesozoikum", "Känozoikum", "Archaikum"],
        "RichtigeAntwort": "Mesozoikum Meso",
        "RichtigeAntwortMöglichkeiten": "Mesozoikum",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Mesozoikum erstreckte sich über die Trias, Jura und Kreidezeit"
    },
    { 
        "Kategorie": "Wissenschaft",
        "Frage": "Welches heutige Tier ist der engste Verwandter der Dinosaurier?",
        "Antworten": ["Krokodil", "Eidechse", "Vogel", "Schildkröte"],
        "RichtigeAntwort": "Vogel",
        "RichtigeAntwortMöglichkeiten": "Vogel Vögel",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Vögel sind direkte Nachfahren einiger Dinosaurier"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Tierart betrat als erstes das Land?",
        "Antworten": ["Reptilien", "Fische", "Amphibien", "Insekten"],
        "RichtigeAntwort": "Insekten",
        "RichtigeAntwortMöglichkeiten": "Insekten Arthropoden insekt",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Insekten besidelten vor etwa 400 Millionen Jahren das Land"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Zeitalter begann nach dem Aussterben der Dinosaurier?",
        "Antworten": ["Känozoikum", "Kreide", "Perm", "Paläozoikum"],
        "RichtigeAntwort": "Känozoikum",
        "RichtigeAntwortMöglichkeiten": "Känozoikum käno",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Im Känozoikum begann das Zeitalter der Säugetiere"
    },


    { //Menschengeschichte
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man das Zeitalter der Altsteinzeit?",
        "Antworten": ["Eisenzeit", "Paläozoikum", "Bronzezeit", "Neolithikum"],
        "RichtigeAntwort": "Paläozoikum paläo",
        "RichtigeAntwortMöglichkeiten": "Paläozoikum",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Altsteinzeit begann schon vor 2,5 Millionen Jahren"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "In welchem Kontinent entstanden die ersten modernen Menschen?",
        "Antworten": ["Europa", "Asien", "Afrika", "Süd-Amerika"],
        "RichtigeAntwort": "Afrika",
        "RichtigeAntwortMöglichkeiten": "Afrika",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Vor etwa 300.000 Jahren entstanden dort die ersten modernen Menschen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Was nutzen die frühen Menschen wärend der Altsteinzeit als Unterschlupf?",
        "Antworten": ["Zelte", "Steinbauten", "Hütten", "Höhlen"],
        "RichtigeAntwort": "Höhlen",
        "RichtigeAntwortMöglichkeiten": "Höhlen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die ersten Menschen nutzen Höhlen als Unterschlupfmöglichkeiten"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche frühe Hochkultur erfand das erste Schriftsystem?",
        "Antworten": ["Mesopotamien", "Ägyypten", "Griechenland", "Induskultur"],
        "RichtigeAntwort": "Mesopotamien",
        "RichtigeAntwortMöglichkeiten": "Mesopotamien sumerer irak",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Vor 5000 Jahren wurde die Keilschrift entwickelt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Was war die wichtigste Entdeckung der Menschen in der Altsteinzeit?",
        "Antworten": ["Rad", "Feuer", "Papier", "Landwirtschaft"],
        "RichtigeAntwort": "Feuer",
        "RichtigeAntwortMöglichkeiten": "Feuer",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das erste Feuer stammt vermutlich von Neandertalern oder frühen Homo sapiens"
    },

    { //Antike
        "Kategorie": "Geschichte",
        "Frage": "Welche Gruppe von Menschen erbaute die berühmte stätte Stonehenge?",
        "Antworten": ["Ägypter", "Griechen", "Kelten", "Hunnen"],
        "RichtigeAntwort": "Kelten",
        "RichtigeAntwortMöglichkeiten": "Kelten Briten",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Heutige Nachfahren der Kelten leben vorallem in Irland und Schottland"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Zivilisation entwickelte das erste Kalendersystem?",
        "Antworten": ["Ägypter", "Griechen", "Kelten", "Sumerer"],
        "RichtigeAntwort": "Ägypter",
        "RichtigeAntwortMöglichkeiten": "Ägypter Ägypten",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der erste Kalender basierte auf Mondphasen und Jahreszeiten"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wo entstand die Indus Zivilation?",
        "Antworten": ["Mesopotamien", "Indien", "China", "Irak"],
        "RichtigeAntwort": "Indien",
        "RichtigeAntwortMöglichkeiten": "Indien Pakistan",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Induszivilation blühte im damaligen Gebiet von Nordwestindien"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche alte Dynastie entwickelte sich erstmalig entlang des Gelben Flusses in China?",
        "Antworten": ["Shang", "Min", "Quin", "Indus"],
        "RichtigeAntwort": "Shang",
        "RichtigeAntwortMöglichkeiten": "Shang Shang-Dynastie",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Shang Dynastie war eine der ersten Chinesichen Dynastien"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk erbaute das Weltwunder, den Hängenden Garten?",
        "Antworten": ["Griechen", "Hunnen", "Babyloner", "Sumerer"],
        "RichtigeAntwort": "Babylon",
        "RichtigeAntwortMöglichkeiten": "Babyloner Babylon",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der König Nebukadnezar II. ließ diesen für seine Frau erbauen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Kultur entwickelte frühe Formen des Papiers?",
        "Antworten": ["Griechen", "Chinesen", "Ägypter", "Inder"],
        "RichtigeAntwort": "Chinesen",
        "RichtigeAntwortMöglichkeiten": "Chinesen China",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Das Papier wurde 105 n. Christus erfunden"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Schriftsystem ist das älteste der Welt?",
        "Antworten": ["Keilschrift", "Hieroglyphen", "Latein", "Griechisch"],
        "RichtigeAntwort": "Keilschrift",
        "RichtigeAntwortMöglichkeiten": "Keilschrift Keil",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Keilschrift gilt als das erste koplexe Schriftsystem"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Historische Handelsstrecke zieht sich durch Asien?",
        "Antworten": ["Seidenstraße", "Samarkanter Handelsroute", "Karawanenstraße", "Perlenstraße"],
        "RichtigeAntwort": "Seidenstraße",
        "RichtigeAntwortMöglichkeiten": "Seidenstraße Seiden",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Seidenstraße wurde bereits in der Antike zwischen Europa und Asien genutzt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Reich war für seine Terrakotta-Armee bekannt?",
        "Antworten": ["Perserreich", "Römisches Reich", "Qin-Dynastie", "Maurya-Reich"],
        "RichtigeAntwort": "Qin-Dynastie",
        "RichtigeAntwortMöglichkeiten": "Qin-Dynastie Qin",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Terrakotta-Armee wurde während der Herrschaft des ersten Kaisers der Qin-Dynastie errichtet"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche ist die älteste große Religion der Welt?",
        "Antworten": ["Buddismus", "Christentum", "Judentum", "Hinduismus"],
        "RichtigeAntwort": "Hinduismus",
        "RichtigeAntwortMöglichkeiten": "Hinduismus Hindu",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "DEr Hinduismus entstand vor über 4000 Jahren"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches ist einer der 7 antiken Weltwunder?",
        "Antworten": ["Leutturm von Alexandria", "Chinesische Mauer", "Petra", "Machu Picchu"],
        "RichtigeAntwort": "Leutturm von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Pyramide Gizeh Hängenden Gärten Semiramis Zeus Olympia Artemis Ephesos Mausoleum Halikarnassos Koloss Rhodos Leuchtturm Alexandria",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Chinesische Mauer gilt nicht als eines der Antiken Weltwunder"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches der 7 Weltwunder wurde von Phidias, einem berühmten Bildhauer, erschaffen?",
        "Antworten": ["Statue des Zeus", "Mausoleum von Halikarnassos", "Koloss von Rhodos", "Hängende Gärten der Semiramis"],
        "RichtigeAntwort": "Statue des Zeus",
        "RichtigeAntwortMöglichkeiten": "Statue Zeus Phidias",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Statue des Zeus wurde von Phidias im Tempel von Olympia geschaffen und galt als eines der großen Kunstwerke der Antike"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Weltwunder diente als Navigationshilfe für Schiffe?",
        "Antworten": ["Leuchtturm von Alexandria", "Tempel der Artemis", "Koloss von Rhodos", "Statue des Zeus"],
        "RichtigeAntwort": "Leuchtturm von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Leuchtturm Alexandria Pharos",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Leuchtturm von Alexandria war ein wichtiges Navigationsinstrument für Schiffe im antiken Mittelmeer"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Weltwunder wurde als Grab für einen Herrscher errichtet?",
        "Antworten": ["Sphinx", "Pyramiden von Gizeh", "Statue des Zeus", "Tempel der Artemis"],
        "RichtigeAntwort": "Pyramiden von Gizeh",
        "RichtigeAntwortMöglichkeiten": "Pyramiden Gizeh Pyramide",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Pyramiden von Gizeh wurden errichtet, um die ewige Herrschaft zu symbolisieren"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie viele antike Weltwunder gibt es?",
        "Antworten": ["7", "9", "12", "13"],
        "RichtigeAntwort": "7",
        "RichtigeAntwortMöglichkeiten": "7 sieben",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Es gibt insgesamt 7 Weltwunder"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Weltwunder lag in der heutigen Stadt Istanbul in der Türkei?",
        "Antworten": ["Tempel der Artemis", "Mausoleum von Halikarnassos", "Hängenden Gärten der Semiramis", "Leuchtturm von Alexandria"],
        "RichtigeAntwort": "Tempel der Artemis",
        "RichtigeAntwortMöglichkeiten": "Tempel Artemis",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Tempel der Artemis befand sich in der Antiken Stadt Ephesos"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Weltwunder befand sich in der Stadt Alexandria in Ägypten?",
        "Antworten": ["Leuchtturm von Alexandria", "Pyramiden von Gizeh", "Hängenden Gärten der Semiramis", "Koloss von Rhodos"],
        "RichtigeAntwort": "Leuchtturm von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Leuchtturm",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Leuchtturm von Alexandria stand auf der Insel Pharos in Ägypten"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches der antiken Weltwunder stand in der Stadt Olympia in Griechenland?",
        "Antworten": ["Statue des Zeus", "Tempel der Artemis", "Mausoleum von Halikarnassos", "Koloss von Rhodos"],
        "RichtigeAntwort": "Statue des Zeus",
        "RichtigeAntwortMöglichkeiten": "Statue Zeus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Statue des Zeus befand sich in Olympia"
    },
    { //Karthago
        "Kategorie": "Geschichte",
        "Frage": "Welche Zivilisation baute das antike Handelszentrum Karthago?",
        "Antworten": ["Phönizier", "Perser", "Hethiter", "Assyrer"],
        "RichtigeAntwort": "Die Phönizier",
        "RichtigeAntwortMöglichkeiten": "Phönizier",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Karthago war eine mächtige Handelsstadt die großen Einfluss im Mittelmeerraum hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche antike Zivilisation entwickelte das Konzept der Null und fortgeschrittene mathematische Systeme?",
        "Antworten": ["Maya", "Römer", "Ägypter", "Griechen"],
        "RichtigeAntwort": "Die Maya",
        "RichtigeAntwortMöglichkeiten": "Maya, Maya-Zivilisation",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Maya entwickelten das Konzept der Null beinhaltete, lange bevor es in Europa bekannt wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem heutigen Land befand sich die antike Stadt Karthago?",
        "Antworten": ["Tunesien", "Algerien", "Libyen", "Marokko"],
        "RichtigeAntwort": "Tunesien",
        "RichtigeAntwortMöglichkeiten": "Tunesien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Karthago lag im heutigen Tunesien und war eine der mächtigsten Städte der Antike."
    },
    { //Persisches Reich
        "Kategorie": "Geschichte",
        "Frage": "Welcher König gründete das erste Perserreich?",
        "Antworten": ["Kyros der Große", "Darius I.", "Xerxes I.", "Artaxerxes I."],
        "RichtigeAntwort": "Kyros der Große",
        "RichtigeAntwortMöglichkeiten": "Kyros Große Cyru",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Kyros der Große gründete das achämenidische Perserreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike Makedonische Herrscher eroberte das Perserreich?",
        "Antworten": ["Alexander der Große", "Julius Caesar", "Augustus", "Philipp II."],
        "RichtigeAntwort": "Alexander der Große",
        "RichtigeAntwortMöglichkeiten": "Alexander der Große",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Nach der Schlacht von Gaugamela endete damit die Herrschaft der Achämeniden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die Handelstraße, die durch das gesamte Perserreich führte?",
        "Antworten": ["Die Königstraße", "Die Seidenstraße", "Die Via Appia", "Die Perserstraße"],
        "RichtigeAntwort": "Die Königstraße",
        "RichtigeAntwortMöglichkeiten": "Königstraße, Königsstraße, Perser Königsstraße",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Königstraße verband die wichtigsten Städte des Perserreichs und diente dem Handel und der Verwaltung"
    },
    { //Altes Ägypten
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die berühmten Grabstätten der Pharaonen in Ägypten?",
        "Antworten": ["Pyramiden", "Tempel", "Paläste", "Zigurats"],
        "RichtigeAntwort": "Pyramiden",
        "RichtigeAntwortMöglichkeiten": "Pyramiden",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Pyramiden von Gizeh sind die bekanntesten Grabstätten und eines der sieben Weltwunder"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Fluss war für die Landwirtschaft im alten Ägypten besonders wichtig?",
        "Antworten": ["Nil", "Tigris", "Euphrat", "Ganges"],
        "RichtigeAntwort": "Nil",
        "RichtigeAntwortMöglichkeiten": "Nil neil",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Nil war für das alte Ägypten lebenswichtig"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der alte ägyptische Gott der Sonne?",
        "Antworten": ["Ra", "Osiris", "Isis", "Anubis"],
        "RichtigeAntwort": "Ra",
        "RichtigeAntwortMöglichkeiten": "Ra",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ra wurde oft als der Hauptgott im ägyptischen Pantheon verehrt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die Schriftzeichen der alten Ägypter?",
        "Antworten": ["Hieroglyphen", "Runen", "Alphabet", "Keilschrift"],
        "RichtigeAntwort": "Hieroglyphen",
        "RichtigeAntwortMöglichkeiten": "Hieroglyphen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Hieroglyphen wurden für religiöse und offizielle Texte genutzt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Tier wurde in Ägypten als heilig angesehen?",
        "Antworten": ["Katze", "Hund", "Pferd", "Schaf"],
        "RichtigeAntwort": "Katze",
        "RichtigeAntwortMöglichkeiten": "Katze Katzen Kater",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Katzen wurden in Ägypten verehrt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt die berühmte Statue mit dem Körper eines Löwen und dem Kopf eines Pharaos?",
        "Antworten": ["Sphinx", "Obelisk", "Kolosseum", "Zikkurat"],
        "RichtigeAntwort": "Sphinx",
        "RichtigeAntwortMöglichkeiten": "Sphinx",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Sphinx von Gizeh wird oft als Wächter der Pyramiden angesehen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches alte ägyptische Ritual beinhaltete das Einbalsamieren der Toten?",
        "Antworten": ["Mumifizierung", "Opfergabe", "Feuerbestattung", "Einäscherung"],
        "RichtigeAntwort": "Mumifizierung",
        "RichtigeAntwortMöglichkeiten": "Mumifizierung Mumie mumiesieren",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Mumifizierung diente zum erhalt des Lebens nach dem Tod"
    }, 
    { //Ägyptische Götter
        "Kategorie": "Geschichte",
        "Frage": "Welcher ägyptische Gott wurde als Schöpfergott und Herr des Himmels verehrt?",
        "Antworten": ["Horus", "Ra", "Osiris", "Thoth"],
        "RichtigeAntwort": "Horus",
        "RichtigeAntwortMöglichkeiten": "Horus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Horus wurde oft mit einem Geierkopf dargestellt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Gott des alten Ägyptens war der Gott des Todes?",
        "Antworten": ["Ra", "Osiris", "Isis", "Anubis"],
        "RichtigeAntwort": "Anubis",
        "RichtigeAntwortMöglichkeiten": "Anubis",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Anubis war der Gott des Totenkults, des Einbalsamierens und der Begleitung ins Jenseits."
    },
    { ///////////////////////
        "Kategorie": "Geschichte",
        "Frage": "Welches berühmte Artefakt wurde in dem Grab von Tutanchamun gefunden?",
        "Antworten": ["Goldene Totenmaske", "Königsgrab", "Sphinx von Tutanchamun", "Horus-Statuette"],
        "RichtigeAntwort": "Goldene Totenmaske",
        "RichtigeAntwortMöglichkeiten": "Goldene Totenmaske",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die goldene Totenmaske von Tutanchamun ist eines der bekanntesten Kunstwerke aus dem alten Ägypten"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte Archäologe entdeckte das Grab von Tutanchamun?",
        "Antworten": ["Howard Carter", "Jean-François Champollion", "Hermann Diels", "Gertrude Bell"],
        "RichtigeAntwort": "Howard Carter",
        "RichtigeAntwortMöglichkeiten": "Howard Carter",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Grab von Tutanchamun im Tal der Könige war damalsnahezu unversehrt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische General war einer der Liebhaber von Cleopatra VII.?",
        "Antworten": ["Julius Caesar", "Augustus", "Mark Anton", "Nero"],
        "RichtigeAntwort": "Julius Caesar",
        "RichtigeAntwortMöglichkeiten": "Julius Caesar Caesar",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Beziehung der beiden hatte einen großen politischen und militärischen Einfluss auf Ägypten und Rom"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Cleopatras berühmtes Grabmal, das in der Antike besonders berühmt war?",
        "Antworten": ["Mausoleum von Alexandria", "Grab von Alexander dem Großen", "Pyramiden von Gizeh", "Nekropole von Theben"],
        "RichtigeAntwort": "Mausoleum von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Mausoleum Alexandria",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Cleopatra VII. und ihr Partner Mark Anton wurden im Mausoleum von Alexandria beigesetzt, dessen genaue Lage heute noch ein Rätsel ist."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wer war der letzte Pharao?",
        "Antworten": ["Kleopatra", "Tutanchamun", "Ramses", "Gizeh"],
        "RichtigeAntwort": "Kleopatra",
        "RichtigeAntwortMöglichkeiten": "Kleopatra Cleopatra",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Cleopatra VII. war der letzte Ägyptische Pharao"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ die Große Pyramide von Gizeh errichten?",
        "Antworten": ["Cheops", "Tutanchamun", "Ramses II.", "Amenhotep III."],
        "RichtigeAntwort": "Cheops",
        "RichtigeAntwortMöglichkeiten": "Cheops Khufu",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Pharao Cheops ließ die Große Pyramide im 26. Jahrhundert v. Chr. erbauen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao war für den ersten Vertrag mit den Hethitern verantwortlich?",
        "Antworten": ["Ramses II.", "Thutmosis III.", "Amenhotep IV.", "Tutanchamun"],
        "RichtigeAntwort": "Ramses II.",
        "RichtigeAntwortMöglichkeiten": "Ramses",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ramses II. war für den ersten bekannten Friedensvertrag mit den Hethitern berühmt."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao führte den Monotheismus in Ägypten ein?",
        "Antworten": ["Amenhotep IV.", "Thutmosis I.", "Ramses III.", "Chephren"],
        "RichtigeAntwort": "Amenhotep IV. (Echnaton)",
        "RichtigeAntwortMöglichkeiten": "Amenhotep IV. Echnaton",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Amenhotep IV. führte die Verehrung des Gottes Aton ein"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao war der erste, der den Titel 'Pharao' offiziell annahm?",
        "Antworten": ["Ahmose I.", "Thutmosis I.", "Amenhotep I.", "Hatschepsut"],
        "RichtigeAntwort": "Ahmose I.",
        "RichtigeAntwortMöglichkeiten": "Ahmose",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ahmose I. war der erste Pharao der 18. Dynastie und befreite Ägypten von den Hyksos"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ den monumentalen Obelisken in Karnak errichten?",
        "Antworten": ["Hatschepsut", "Thutmosis III.", "Ramses II.", "Amenhotep III."],
        "RichtigeAntwort": "Hatschepsut",
        "RichtigeAntwortMöglichkeiten": "Hatschepsut",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "der Obelisk war ein Symbol ihrer Macht und ihres Einflusses"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ die Große Sphinx von Gizeh errichten?",
        "Antworten": ["Cheops", "Menkaure", "Djoser", "Chefren"],
        "RichtigeAntwort": "Chefren",
        "RichtigeAntwortMöglichkeiten": "Chefren",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Große Sphinx von Gizeh wurde von Pharao Chefren während der 4. Dynastie errichtet"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher große ägyptische Pharao starb im Alter von nur 18 oder 19 Jahren?",
        "Antworten": ["Tutanchamun", "Ramses II.", "Thutmosis III.", "Amenhotep III."],
        "RichtigeAntwort": "Tutanchamun",
        "RichtigeAntwortMöglichkeiten": "Tutanchamun",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Tutanchamun ist auch als 'Kinderpharao' bekannt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk gründete die 26. Dynastie in Ägypten?",
        "Antworten": ["Assyrer", "Perser", "Kuschiten", "Griechen"],
        "RichtigeAntwort": "Assyrer",
        "RichtigeAntwortMöglichkeiten": "Assyrer",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die 26. Dynastie war die als letzte große Periode des alten Ägypten"
    },
    { //Griechenland
        "Kategorie": "Geschichte",
        "Frage": "In welcher Schlacht besiegten die Griechen 490 v. Chr. die Perser?",
        "Antworten": ["Schlacht von Marathon", "Schlacht von Thermopylae", "Schlacht von Salamis", "Schlacht von Plataiai"],
        "RichtigeAntwort": "Schlacht von Marathon",
        "RichtigeAntwortMöglichkeiten": "Marathon Schlacht",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Nach der Schlacht lief ein Bote 42km bis nach Athen und verstarb danach, daher kommt der Name des heutigen Marathons"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher anitke Stadtstaat Griechenlands hatte eine strenge militärische Ausbildung?",
        "Antworten": ["Sparta", "Athen", "Korinth", "Theben"],
        "RichtigeAntwort": "Sparta",
        "RichtigeAntwortMöglichkeiten": "Sparta",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Sparta war für seine Disziplin und den Fokus auf Kampfkunst bekannt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der antike große krieg zwischen Sparta und Athen?",
        "Antworten": ["Peloponnesischer Krieg", "Perserkriege", "Trojanischer Krieg", "Korinthischer Krieg"],
        "RichtigeAntwort": "Peloponnesischer Krieg",
        "RichtigeAntwortMöglichkeiten": "Peloponnesischer Krieg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Peloponnesische Krieg dauerte von 431 bis 404 v. Chr. und endete mit der Niederlage Athens"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike griechische Anführer leitete die Invasion von Persien?",
        "Antworten": ["Alexander der Große", "Perikles", "Leonidas", "Lysander"],
        "RichtigeAntwort": "Alexander der Große",
        "RichtigeAntwortMöglichkeiten": "Alexander der Große",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Alexander der Große war damals König von Makedonien"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher makedonische König war der Vater von Alexander dem Großen?",
        "Antworten": ["Philipp II.", "Perdikkas III.", "Antipatros", "Lysimachos"],
        "RichtigeAntwort": "Philipp II.",
        "RichtigeAntwortMöglichkeiten": "Philipp II.",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Philipp II. legte die Grundlagen für Alexanders spätere Eroberungen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war die Hauptstadt des Makedonischen Reiches unter Philipp II. und Alexander dem Großen?",
        "Antworten": ["Pella", "Athen", "Theben", "Sparta"],
        "RichtigeAntwort": "Pella",
        "RichtigeAntwortMöglichkeiten": "Pella",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Pella war das politische Zentrum unter Philipp II. und seinem Sohn Alexander dem Großen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche wichtige Seeschlacht während der Perserkriege führte zu einem entscheidenden Sieg der Griechen über die persische Flotte?",
        "Antworten": ["Schlacht von Salamis", "Schlacht von Marathon", "Schlacht von Plataiai", "Schlacht von Mykale"],
        "RichtigeAntwort": "Schlacht von Salamis",
        "RichtigeAntwortMöglichkeiten": "Salamis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht von Salamis 480 v. Chr. war eine entscheidende Seeschlacht"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches Land führte die erste bekannte Demokratie ein?",
        "Antworten": ["Griechenland", "Rom", "Ägypten", "Persien"],
        "RichtigeAntwort": "Griechenland",
        "RichtigeAntwortMöglichkeiten": "Griechenland",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die erste bekannte Demokratie entstand im antiken Athen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Stadtstaat war für seine Kunst, Philosophie und Wissenschaft bekannt?",
        "Antworten": ["Athen", "Sparta", "Korinth", "Theben"],
        "RichtigeAntwort": "Athen",
        "RichtigeAntwortMöglichkeiten": "Athen",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Athen war im antiken Griechenland ein Zentrum für Kunst, Philosophie und Wissenschaft."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wer entwickelte das Gesetz des Auftriebs?",
        "Antworten": ["Archimedes", "Pythagoras", "Hippokrates", "Sokrates"],
        "RichtigeAntwort": "Archimedes",
        "RichtigeAntwortMöglichkeiten": "Archimedes",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Gesetz des Auftriebs ist heute als Archimedisches Prinzip bekannt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Erfinder der Schraube zur Förderung von Wasser?",
        "Antworten": ["Archimedes", "Heron von Alexandria", "Euklid", "Pythagoras"],
        "RichtigeAntwort": "Archimedes",
        "RichtigeAntwortMöglichkeiten": "Archimedes",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Archimedische Schraube wird noch heute zur Wasserförderung verwendet"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Mathematiker ist bekannt für seinen Satz über das Dreieck?",
        "Antworten": ["Pythagoras", "Euklid", "Archimedes", "Thales"],
        "RichtigeAntwort": "Pythagoras",
        "RichtigeAntwortMöglichkeiten": "Pythagoras",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Pythagoras ist bekannt für den Satz des Pythagoras über das rechtwinkligen Dreieck"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "In welcher antiken Region der Welt wurde das Rad zuerst erfunden?",
        "Antworten": ["Mesopotamien", "Ägypten", "China", "Indien"],
        "RichtigeAntwort": "Mesopotamien",
        "RichtigeAntwortMöglichkeiten": "Mesopotamien irak",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Rad wurde erstmals in Mesopotamien entwickelt, im heutigen Irak."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph war der Lehrer von Platon?",
        "Antworten": ["Sokrates", "Aristoteles", "Pythagoras", "Heraklit"],
        "RichtigeAntwort": "Sokrates",
        "RichtigeAntwortMöglichkeiten": "Sokrates",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Sokrates entwickelte die sokratische Methode, die auf Fragen und Dialog basiert"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Grieschiche Philosoph gründete die Akademie in Athen?",
        "Antworten": ["Platon", "Aristoteles", "Epikur", "Demokrit"],
        "RichtigeAntwort": "Platon",
        "RichtigeAntwortMöglichkeiten": "Platon",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Platon gründete eine der ersten Institutionen für höhere Bildung"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph war der Lehrer von Alexander dem Großen?",
        "Antworten": ["Aristoteles", "Platon", "Pythagoras", "Sokrates"],
        "RichtigeAntwort": "Aristoteles",
        "RichtigeAntwortMöglichkeiten": "Aristoteles",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Aristoteles war maßgeblich an der Entwicklung der heutigen Wissenschaft beteiligt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wer führte die Idee der Atome ein?",
        "Antworten": [" Leukipp", "Anaxagoras", "Thales", "Pythagoras"],
        "RichtigeAntwort": " Leukipp",
        "RichtigeAntwortMöglichkeiten": "Leukipp Demokrit",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Leukipp entwickelte entwickelte zusammen mit seinem Schüler Demokrit die Lehre von den Atomen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Erfinder entwickelte die ersten Dampfmaschinen-Prototypen?",
        "Antworten": ["Heron von Alexandria", "Archimedes", "Pythagoras", "Euklid"],
        "RichtigeAntwort": "Heron von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Heron Alexandria",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Heron von Alexandria entwarf eine einfache Dampfmaschine"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph entwickelte die Theorie der 4 Grundelemente?",
        "Antworten": ["Empedokles", "Anaximander", "Thales von Milet", "Heraklit"],
        "RichtigeAntwort": "Empedokles",
        "RichtigeAntwortMöglichkeiten": "Empedokles",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Empedokles entwickelte die Theorie dass alle Dinge im Universum aus Erde, Wasser, Luft und Feuer bestehen"
    },
    { //Griechiche Götter
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war der Gott des Himmels und Donners?",
        "Antworten": ["Zeus", "Poseidon", "Hades", "Apollo"],
        "RichtigeAntwort": "Zeus",
        "RichtigeAntwortMöglichkeiten": "Zeus",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Zeus herrschte über die anderen Götter vom Olymp aus."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Göttin war die Schutzgöttin von Athen?",
        "Antworten": ["Athena", "Artemis", "Aphrodite", "Hera"],
        "RichtigeAntwort": "Athena",
        "RichtigeAntwortMöglichkeiten": "Athena",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Athena symbolisierte Weisheit, strategischen Krieg und Handwerkskunst."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war für das Meer verantwortlich?",
        "Antworten": ["Poseidon", "Hades", "Zeus", "Hermes"],
        "RichtigeAntwort": "Poseidon",
        "RichtigeAntwortMöglichkeiten": "Poseidon",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Poseidon war der Gott des Meeres, der Erdbeben und Pferde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die grieschiche Göttin der Liebe und Schönheit?",
        "Antworten": ["Aphrodite", "Hera", "Demeter", "Athena"],
        "RichtigeAntwort": "Aphrodite",
        "RichtigeAntwortMöglichkeiten": "Aphrodite",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Aphrodite wurde als Göttin der Liebe, Schönheit und Fruchtbarkeit verehrt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war der Bote der Götter?",
        "Antworten": ["Hermes", "Apollo", "Dionysos", "Hephaistos"],
        "RichtigeAntwort": "Hermes",
        "RichtigeAntwortMöglichkeiten": "Hermes",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Hermes war der Götterbote mit seinen geflügelten Sandalen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Göttin war für die Jagd und den Mond verantwortlich?",
        "Antworten": ["Artemis", "Athena", "Hera", "Demeter"],
        "RichtigeAntwort": "Artemis",
        "RichtigeAntwortMöglichkeiten": "Artemis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Artemis war die Zwillingsschwester von Apollo"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott regierte die Unterwelt?",
        "Antworten": ["Hades", "Poseidon", "Zeus", "Ares"],
        "RichtigeAntwort": "Hades",
        "RichtigeAntwortMöglichkeiten": "Hades",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Hades herrschte über das Reich der Toten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war der Gott des Feuers und der Schmiedekunst?",
        "Antworten": ["Hephaistos", "Apollo", "Hermes", "Ares"],
        "RichtigeAntwort": "Hephaistos",
        "RichtigeAntwortMöglichkeiten": "Hephaistos",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Hephaistos erschuf die Waffen der Götter auf dem Olymp"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Göttin war für die Fruchtbarkeit der Erde verantwortlich?",
        "Antworten": ["Demeter", "Aphrodite", "Athena", "Hera"],
        "RichtigeAntwort": "Demeter",
        "RichtigeAntwortMöglichkeiten": "Demeter",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Demeter war die Göttin der Ernte, des Getreides und der Fruchtbarkeit der Erde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott galt als Gott des Krieges?",
        "Antworten": ["Ares", "Zeus", "Hades", "Hermes"],
        "RichtigeAntwort": "Ares",
        "RichtigeAntwortMöglichkeiten": "Ares",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Ares wurde oft dargestellt als ein grausamer und unbarmherziger Krieger"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches griechische mythische Wesen war halb Mensch, halb Stier?",
        "Antworten": ["Minotaurus", "Zentaur", "Medusa", "Chimära"],
        "RichtigeAntwort": "Minotaurus",
        "RichtigeAntwortMöglichkeiten": "Minotaurus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Minotaurus wurde von Theseus getötet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche drei griechische Schicksalsgöttinnen bestimmten das Leben und den Tod der Menschen?",
        "Antworten": ["Moiren", "Musen", "Harpien", "Gorgonen"],
        "RichtigeAntwort": "Moiren",
        "RichtigeAntwortMöglichkeiten": "Moiren",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Moiren wurden auch Schicksalsgöttinnen genannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches mythische Pferd entsprang laut griechischer Mythologie dem Blut von Medusa?",
        "Antworten": ["Pegasus", "Bucephalus", "Trojanisches Pferd", "Kleon"],
        "RichtigeAntwort": "Pegasus",
        "RichtigeAntwortMöglichkeiten": "Pegasus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Pegasus, das geflügelte Pferd, entstand aus dem Blut der Medusa, nachdem Perseus sie enthauptet hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lange dauerte die Rückkehr von Odysseus nach dem Trojanischen Krieg?",
        "Antworten": ["10 Jahre", "5 Jahre", "15 Jahre", "20 Jahre"],
        "RichtigeAntwort": "10 Jahre",
        "RichtigeAntwortMöglichkeiten": "10 zehn",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Irrfahrten von Odysseus wurden in Homers 'Odyssee' beschrieben"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer verwandelte Odysseus Gefährten in Schweine?",
        "Antworten": ["Kirke", "Kalypso", "Sirene", "Medea"],
        "RichtigeAntwort": "Kirke",
        "RichtigeAntwortMöglichkeiten": "Kirke Circe",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Odysseus ist die zentrale Figur in Homers 'Odyssee'"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lautet der Name des Helden der bekannt für seine abenteuerliche Rückkehr nach dem Trojanischen Krieg ist?",
        "Antworten": ["Odysseus", "Achilles", "Hercules", "Perseus"],
        "RichtigeAntwort": "Odysseus",
        "RichtigeAntwortMöglichkeiten": "Odysseus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Odysseus ist die zentrale Figur in Homers 'Odyssee'"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Kreatur hat den Körper eines Löwen, die Flügel eines Adlers und den Schwanz eines Drachen?",
        "Antworten": ["Chimäre", "Hippogriff", "Hydra", "Sphinx"],
        "RichtigeAntwort": "Chimäre",
        "RichtigeAntwortMöglichkeiten": "Chimäre Chimera",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Chimäre ist bekannt für ihre Fähigkeit Feuer zu speien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Wesen hat den Körper eines Pferdes und den Oberkörper eines Menschen?",
        "Antworten": ["Hippogriff", "Satyr", "Zentaur", "Minotaurus"],
        "RichtigeAntwort": "Zentaur",
        "RichtigeAntwortMöglichkeiten": "Zentaur Centaur Zentauren Zentauri",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Zentauren sind bekannt für ihre Fähigkeiten im Bogenschießen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Berg in Griechenland galt als der höchste und wurde als Sitz der Götter angesehen?",
        "Antworten": ["Olymp", "Parnass", "Taygetos", "Ida"],
        "RichtigeAntwort": "Olymp",
        "RichtigeAntwortMöglichkeiten": "Olymp",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Olymp ist der höchste Berg Griechenlands und galt in der griechischen Mythologie als der Sitz der Götter."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der große griechische Krieger in der Troja-Sage?",
        "Antworten": ["Achilles", "Herkules", "Perseus", "Theseus"],
        "RichtigeAntwort": "Achilles",
        "RichtigeAntwortMöglichkeiten": "Achilles",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Achilles ist ein berühmter Krieger aus der Ilias von Homer."
    },
    {//Griechenland kleinigkeiten
        "Kategorie": "Geschichte",
        "Frage": "Welche berühmte antike Bibliothek in Ägypten wurde durch mehrere Feuer zerstört?",
        "Antworten": ["Bibliothek von Pergamon", "Bibliothek von Alexandria", "Bibliothek von Athen", "Bibliothek von Rhodos"],
        "RichtigeAntwort": "Bibliothek von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Alexandria alexander",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Bibliothek von Alexandria ist bekannt für ihre wiederholte Zerstörung"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Stadt fanden die ersten antiken Olympischen Spiele statt?",
        "Antworten": ["Athen", "Sparta", "Olympia", "Korinth"],
        "RichtigeAntwort": "Olympia",
        "RichtigeAntwortMöglichkeiten": "Olympia olymp olymius",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die antiken Olympischen Spiele fanden alle vier Jahre statt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Zeitabstand wurden die antiken Olympischen Spiele abgehalten?",
        "Antworten": ["Jährlich", "Alle 2 Jahre", "Alle 4 Jahre", "Alle 10 Jahre"],
        "RichtigeAntwort": "Alle 4 Jahre",
        "RichtigeAntwortMöglichkeiten": "4 vierjährig vier vierjahre",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die antiken Olympischen Spiele wurden in Olympia abgehalten"
    },
    {//Gemacht
        "Kategorie": "Geschichte",
        "Frage": "Welches berühmte griechische Bauwerk ist als Symbol für Demokratie bekannt?",
        "Antworten": ["Erechtheion", "Parthenon", "Tempel des Apollon", "Tempel der Athena Nike"],
        "RichtigeAntwort": "Parthenon",
        "RichtigeAntwortMöglichkeiten": "Parthenon",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Parthenon in Athen ist ein Symbol für die Demokratie des antiken Griechenlands."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches griechische Wort bedeutet 'Stadtstaat'?",
        "Antworten": ["Polis", "Demokratie", "Agora", "Acropolis"],
        "RichtigeAntwort": "Polis",
        "RichtigeAntwortMöglichkeiten": "Polis",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im antiken Griechenland war 'Polis' ein Stadtstaat wie Athen oder Sparta."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt das berühmte Theater in Athen?",
        "Antworten": ["Epidaurus", "Kolosseum", "Odeon", "Gladiatorium"],
        "RichtigeAntwort": "Epidaurus",
        "RichtigeAntwortMöglichkeiten": "Epidaurus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Theater von Epidaurus ist bekannt für seine ausgezeichnete Akustik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike griechische Bauwerk ist der Tempel des Zeus",
        "Antworten": ["Olympeion", "Parthenon", "Erechtheion", "Zeus-Tempel"],
        "RichtigeAntwort": "Olympeion",
        "RichtigeAntwortMöglichkeiten": "Olympeion olmp",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Tempel des Zeus, auch Olympeion genannt, befindet sich in Athen und war einem der wichtigsten Götter des griechischen Pantheons gewidmet."
    },    
    {//Persien
        "Kategorie": "Geschichte",
        "Frage": "Wer war der persische König, der die zweite Invasion in Griechenland im Jahr 480 v. Chr. anführte?",
        "Antworten": ["Xerxes I", "Darius I", "Kyrus der Große", "Artaxerxes"],
        "RichtigeAntwort": "Xerxes I",
        "RichtigeAntwortMöglichkeiten": "Xerxes",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Xerxes I. führte während der Schlacht bei den Thermopylen und der Seeschlacht von Salamis"
    },

    ///////////////////////Rom//////////////////////////


    { //Erstes Rom
        "Kategorie": "Geschichte",
        "Frage": "Wer gründete der Legende nach die Stadt Rom?",
        "Antworten": ["Romulus", "Remus", "Aeneas", "Tarquin"],
        "RichtigeAntwort": "Romulus",
        "RichtigeAntwortMöglichkeiten": "Romulus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Romulus gilt als der mythische Gründer Roms"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike römische König war der erste König von Rom?",
        "Antworten": ["Romulus", "Numa Pompilius", "Tarquinius Priscus", "Servius Tullius"],
        "RichtigeAntwort": "Romulus",
        "RichtigeAntwortMöglichkeiten": "Romulus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Romulus war der erste von sieben Königen des antiken Roms"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher mythische Held gilt als der Vorfahre der Römer und floh aus Troja?",
        "Antworten": ["Aeneas", "Achilles", "Hektor", "Odysseus"],
        "RichtigeAntwort": "Aeneas",
        "RichtigeAntwortMöglichkeiten": "Aeneas",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Aeneas floh nach dem Fall Trojas und gilt als Stammvater der Römer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische König führte das erste Rechtssystem in Rom ein?",
        "Antworten": ["Numa Pompilius", "Romulus", "Tullus Hostilius", "Ancus Marcius"],
        "RichtigeAntwort": "Numa Pompilius",
        "RichtigeAntwortMöglichkeiten": "Numa Pompilius",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Numa Pompilius war der zweite König Roms"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher König führte die ersten Gladiatorenspiele ein?",
        "Antworten": ["Tarquinius Priscus", "Romulus", "Servius Tullius", "Ancus Marcius"],
        "RichtigeAntwort": "Tarquinius Priscus",
        "RichtigeAntwortMöglichkeiten": "Lucius Tarquinius Priscus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Tarquinius Priscus war der fünfte König von Rom"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Könige regierten Rom vor der Gründung der Republik?",
        "Antworten": ["7", "5", "6", "4"],
        "RichtigeAntwort": "7",
        "RichtigeAntwortMöglichkeiten": "7 sieben",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Rom wurde von sieben Königen regiert, bevor die Republik gegründet wurde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Fluss spielte eine zentrale Rolle bei der Legende von Romulus und Remus?",
        "Antworten": ["Tiber", "Euphrat", "Nile", "Po"],
        "RichtigeAntwort": "Tiber",
        "RichtigeAntwortMöglichkeiten": "Tiber",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Romulus und Remus wurden der Legende nach im Fluss Tiber ausgesetzt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike König wurde als letzter römischer König gestürzt?",
        "Antworten": ["Tarquinius Superbus", "Romulus", "Tullus Hostilius", "Ancus Marcius"],
        "RichtigeAntwort": "Tarquinius Superbus",
        "RichtigeAntwortMöglichkeiten": "Tarquinius Superbus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Tarquinius Superbus wurde durch seine tyrannische Herrschafft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Vater von Romulus und Remus in der römischen Mythologie?",
        "Antworten": ["Mars", "Jupiter", "Saturn", "Pluto"],
        "RichtigeAntwort": "Mars",
        "RichtigeAntwortMöglichkeiten": "Mars",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Romulus gründete später die Stadt Rom"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Stadt, die vor Rom von Ascanius gegründet wurde?",
        "Antworten": ["Alba Longa", "Lavinium", "Troy", "Capua"],
        "RichtigeAntwort": "Alba Longa",
        "RichtigeAntwortMöglichkeiten": "Alba Longa Lavinium albalonga",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Alba Longa wurde von Ascanius, dem Sohn des Aeneas"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die Mutter von Romulus und Remus?",
        "Antworten": ["Rhea Silvia", "Lavinia", "Dido", "Lucretia"],
        "RichtigeAntwort": "Rhea Silvia",
        "RichtigeAntwortMöglichkeiten": "Rhea Silvia",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Rhea Silvia, eine vestalische Jungfrau, war die Mutter von Romulus und Remus."
    },
    { //Leichte Fragen Rom Griechenland
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Land ist bekannt für die Olympischen Spiele?",
        "Antworten": ["Griechenland", "Rom", "Ägypten", "Persien"],
        "RichtigeAntwort": "Griechenland",
        "RichtigeAntwortMöglichkeiten": "Griechenland",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Olympischen Spiele wurden in Olympia abgehalten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Volk baute das Kolosseum?",
        "Antworten": ["Römer", "Griechen", "Ägypter", "Perser"],
        "RichtigeAntwort": "Römer",
        "RichtigeAntwortMöglichkeiten": "Römer Rom",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Kolosseum ist eines der berühmtesten Bauwerke des antiken Rom"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Land war bekannt für die Philosophen wie Sokrates und Aristoteles?",
        "Antworten": ["Griechenland", "Rom", "Ägypten", "China"],
        "RichtigeAntwort": "Griechenland",
        "RichtigeAntwortMöglichkeiten": "Griechenland",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Plato und Aristoteles waren berühmte Philosophen des antiken Griechenlands."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war die Hauptstadt des antiken Griechenlands?",
        "Antworten": ["Athen", "Rom", "Sparta", "Korinth"],
        "RichtigeAntwort": "Athen",
        "RichtigeAntwortMöglichkeiten": "Athen",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Athen war eine der wichtigsten Städte des antiken Griechenlands."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Land liegt in Italien?",
        "Antworten": ["Rom", "Griechenland", "Ägypten", "Frankenreich"],
        "RichtigeAntwort": "Rom",
        "RichtigeAntwortMöglichkeiten": "Rom",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Rom liegt im heutigen Italien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Volk lebte in Athen?",
        "Antworten": ["Griechen", "Römer", "Ägypter", "Germanen"],
        "RichtigeAntwort": "Griechen",
        "RichtigeAntwortMöglichkeiten": "Griechen Griechenland",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Athen war die Hauptstadt von Griechenland"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Volk sprach Latein?",
        "Antworten": ["Römer", "Griechen", "Ägypter", "Perser"],
        "RichtigeAntwort": "Römer",
        "RichtigeAntwortMöglichkeiten": "Römer Rom",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Latein hatte große Einflüsse auf unsere heutigen Sprachen"
    },
    {//Römische Zahlen
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Zahlensystem-Symbol steht für die Zahl 10?",
        "Antworten": ["X", "V", "I", "L"],
        "RichtigeAntwort": "X",
        "RichtigeAntwortMöglichkeiten": "X",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das römische Zahlensystem verwendet X für 10, was von der Form einer römischen Ziffer abgeleitet ist."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Zahlensystem-Symbol repräsentiert die Zahl 50?",
        "Antworten": ["L", "X", "V", "C"],
        "RichtigeAntwort": "L",
        "RichtigeAntwortMöglichkeiten": "L",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Symbol L steht für 50 und leitet sich vom lateinischen Wort für 'fünfzig' ab."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Symbol steht in der römischen Zahlenreihe für die Zahl 100?",
        "Antworten": ["C", "D", "M", "V"],
        "RichtigeAntwort": "C",
        "RichtigeAntwortMöglichkeiten": "C",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Symbol C für 100 stammt von der ersten Buchstabe des lateinischen Wortes 'centum', was hundert bedeutet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wird die Zahl 1 in römischen Zahlen dargestellt?",
        "Antworten": ["I", "V", "X", "L"],
        "RichtigeAntwort": "I",
        "RichtigeAntwortMöglichkeiten": "I",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Symbol I für 1 wurde verwendet, um Einzelziffern in der römischen Zahlenreihe darzustellen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Zahlensystem-Symbol steht für die Zahl 500?",
        "Antworten": ["D", "M", "C", "L"],
        "RichtigeAntwort": "D",
        "RichtigeAntwortMöglichkeiten": "D",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Symbol D für 500 wird verwendet, um größere Werte in der römischen Zahlenreihe darzustellen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Zahlensystem-Symbol steht für die Zahl 5?",
        "Antworten": ["V", "X", "L", "I"],
        "RichtigeAntwort": "V",
        "RichtigeAntwortMöglichkeiten": "V",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Symbol V repräsentiert die Zahl 5 und stammt vom lateinischen Wort für fünf, 'quinque'."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche römische Zahl entspricht der Zahl 20?",
        "Antworten": ["XX", "X", "V", "L"],
        "RichtigeAntwort": "XX",
        "RichtigeAntwortMöglichkeiten": "XX",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Symbol XX steht für 20, da es zwei X-Symbole kombiniert, die jeweils 10 repräsentieren."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wird die Zahl 4 in römischen Zahlen dargestellt?",
        "Antworten": ["IV", "VI", "III", "V"],
        "RichtigeAntwort": "IV",
        "RichtigeAntwortMöglichkeiten": "IV",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "In der römischen Zahlenreihe wird 4 als IV dargestellt, wobei I vor V subtrahiert wird."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Zahlensystem-Symbol steht für die Zahl 1.000?",
        "Antworten": ["M", "D", "C", "L"],
        "RichtigeAntwort": "M",
        "RichtigeAntwortMöglichkeiten": "M",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Symbol M steht für 1.000 und ist die höchste Zahl in der römischen Zahlenreihe ohne Kombinationen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Für welche Zahl steht das römische Symbol XL?",
        "Antworten": ["40", "50", "30", "60"],
        "RichtigeAntwort": "40",
        "RichtigeAntwortMöglichkeiten": "40",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "XL steht für 40, da X (10) vor L (50) subtrahiert wird."
    },



    {//Römische Republik
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das höchste Amt in der römischen Republik?",
        "Antworten": ["Konsul", "Prätor", "Zensor", "Tribun"],
        "RichtigeAntwort": "Konsul",
        "RichtigeAntwortMöglichkeiten": "Konsul",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Konsuln waren die höchsten Beamten in der römischen Republik"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Jahre dauerte es bis ein neuer Konsul in der römischen Republik gewählt wurde?",
        "Antworten": ["4 Jahre", "2 Jahre", "5 Jahre", "1 Jahr"],
        "RichtigeAntwort": "1 Jahr",
        "RichtigeAntwortMöglichkeiten": "1 ein",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Konsuln wurden jedes Jahr neu gewählt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Konsuln gab es gleichzeitig in der römischen Republik?",
        "Antworten": ["Zwei", "Ein", "Drei", "Vier"],
        "RichtigeAntwort": "Zwei",
        "RichtigeAntwortMöglichkeiten": "Zwei 2",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Es gab immer zwei Konsuln gleichzeitig in der römischen Republik"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gesetzbuch wurde während der römischen Republik veröffentlicht?",
        "Antworten": ["Zwölftafeln", "Lex Canuleia", "Lex Hortensia", "Lex Julia"],
        "RichtigeAntwort": "Zwölftafeln",
        "RichtigeAntwortMöglichkeiten": "Zwölftafeln",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Zwölftafeln wurden 451–450 v. Chr. erstellt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste römische Kaiser?",
        "Antworten": ["Augustus", "Julius Caesar", "Nero", "Trajan"],
        "RichtigeAntwort": "Augustus",
        "RichtigeAntwortMöglichkeiten": "Augustus",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Tatsächlich galt Julius Caesar damals noch nicht als Kaiser"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Krieg führte zur Eroberung des antiken Griechenlands?",
        "Antworten": ["Makedonischer Krieg", "Kriege gegen die Daker", "Kriege gegen die Karthager", "Kriege gegen die Gallier"],
        "RichtigeAntwort": "Makedonischer Krieg",
        "RichtigeAntwortMöglichkeiten": "Makedonischer grieschiche",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Makedonische Krieg führte zur römischen Unterwerfung Griechenlands"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Bauwerk war das erste große römische Amphitheater?",
        "Antworten": ["Amphitheater von Pompeji", "Kolosseum", "Amphitheater von Capua", "Amphitheater von Verona"],
        "RichtigeAntwort": "Amphitheater von Pompeji",
        "RichtigeAntwortMöglichkeiten": "Pompeji",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Amphitheater von Pompeji wurde vor dem Kolosseum erbaut"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gebäude in der römischen Republik war der Ort für die Versammlungen der Bürger?",
        "Antworten": ["Forum Romanum", "Pantheon", "Kapitolinische Tempel", "Basilika Julia"],
        "RichtigeAntwort": "Forum Romanum",
        "RichtigeAntwortMöglichkeiten": "Forum Romanum",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Forum Romanum war das Herzstück der römischen Republik"
    },
    {//Römische Ereignisse Jahreszahlen
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde das Antike Rom gegründet?",
        "Antworten": ["753 v. Chr.", "509 v. Chr.", "27 v. Chr.", "330 n. Chr."],
        "RichtigeAntwort": "753 v. Chr.",
        "RichtigeAntwortMöglichkeiten": "753",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der legendäre Gründungsjahr von Rom wird auf 753 v. Chr. datiert."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Jahr markierte den Beginn der römischen Republik?",
        "Antworten": ["509 v. Chr.", "396 v. Chr.", "264 v. Chr.", "44 v. Chr."],
        "RichtigeAntwort": "509 v. Chr.",
        "RichtigeAntwortMöglichkeiten": "509",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Nach dem Sturz des Königs, Tarquinius Superbus, wurde die Republik gegründet"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Jahr markierte den Beginn des römischen Kaiserreichs durch Kaiser Augustus?",
        "Antworten": ["27 v. Chr.", "14 n. Chr.", "64 n. Chr.", "117 n. Chr."],
        "RichtigeAntwort": "27 v. Chr.",
        "RichtigeAntwortMöglichkeiten": "27",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Im Jahr 27 v. Chr. wurde Augustus zum ersten Kaiser Roms ernannt"
    },
    {//Punische Kriege
        "Kategorie": "Geschichte",
        "Frage": "Welche große Schlacht führte zu einer römischen Niederlage gegen?",
        "Antworten": ["Schlacht von Cannae", "Schlacht von Zama", "Schlacht von Trebia", "Schlacht von Lake Trasimene"],
        "RichtigeAntwort": "Schlacht von Cannae",
        "RichtigeAntwortMöglichkeiten": "Cannae",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht von Kanae fand im Jahr 216 v. Chr. statt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Konflikt führte letztlich zur Zerstörung von Karthago?",
        "Antworten": ["Punischen Kriege", "Peloponnesische Krieg", "Gallischen Kriege", "Perserkriege"],
        "RichtigeAntwort": "Punischen Kriege",
        "RichtigeAntwortMöglichkeiten": "Punische punisch",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Punischen Kriege endeten mit der Zerstörung Karthagos und dem Sieg Roms."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte Feldheer kämpfte während des Zweiten Punischen Krieges gegen Rom?",
        "Antworten": ["Hannibal", "Hasdrubal", "Mago", "Hamilkar"],
        "RichtigeAntwort": "Hannibal",
        "RichtigeAntwortMöglichkeiten": "Hannibal Barca",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Hannibal ist berühmt für seinen Feldzug über die Alpen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte Feldheer überquerte die Alpen mit Elefanten und Kämpfte gegen Rom?",
        "Antworten": ["Hannibal", "Hasdrubal", "Mago", "Hamilkar"],
        "RichtigeAntwort": "Hannibal",
        "RichtigeAntwortMöglichkeiten": "Hannibal Barca",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Hannibal kämpfte im 2. Punischem Krieg gegen Rom"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche römische konsul führte den ersten Punischen Krieg gegen Karthago?",
        "Antworten": ["Cornelius Scipio", "Gaius Marius", "Cornelius Sulla", "Fabius Maximus"],
        "RichtigeAntwort": "Cornelius Scipio",
        "RichtigeAntwortMöglichkeiten": "Publius Cornelius Scipio", 
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Publius Cornelius Scipio führte die Römer im Jahr 241 v. Chr. zum Sieg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt makierte durch ihren Fall das Ende der Punischen Kriege gegen Rom?",
        "Antworten": ["Karthago", "Syrakus", "Athen", "Hippo"],
        "RichtigeAntwort": "Karthago",
        "RichtigeAntwortMöglichkeiten": "Karthago kartago", 
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Punischen Kriege waren eine Außeinandersezung zwischen Rom und Kartagho im 2. und 3. Jahrhundert v. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Punische Kriege gab es insgesamt?",
        "Antworten": ["3", "4", "5", "2"],
        "RichtigeAntwort": "3",
        "RichtigeAntwortMöglichkeiten": "Drei 3",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Punischen Kriege waren eine Außeinandersezung zwischen Rom und Kartagho im 2. und 3. Jahrhundert v. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Auf welchen Tieren zog Hannibal während seines Zuges durch die Alpen?",
        "Antworten": ["Elefanten", "Pferden", "Kamele", "Eseln"],
        "RichtigeAntwort": "Elefanten",
        "RichtigeAntwortMöglichkeiten": "Elefanten",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Hannibal überquerte die Alpen im zweiten Punischem Krieg gegen Rom"
    },
    {//Julius Caesar
        "Kategorie": "Geschichte",
        "Frage": "Welchen Fluss überschritt Julius Caesar, was als Beginn des Bürgerkriegs galt?",
        "Antworten": ["Rubikon", "Tiber", "Euphrat", "Rhein"],
        "RichtigeAntwort": "Rubikon",
        "RichtigeAntwortMöglichkeiten": "Rubikon",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Caesars Überschreiten des Rubikon 49 v. Chr. führte zu einem entscheidenden Bürgerkrieg in Rom."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde Julius Caesar ermordet?",
        "Antworten": ["44 v. Chr.", "27 v. Chr.", "62 v. Chr.", "60 v. Chr."],
        "RichtigeAntwort": "44 v. Chr.",
        "RichtigeAntwortMöglichkeiten": "44",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Julius Caesar ist am 15. März 44 v. Chr. durch Messerstiche ermordet worden"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer gehörte neben Julius Caesar zum ersten Triumvirat?",
        "Antworten": ["Pompeius und Crassus", "Antonius und Lepidus", "Augustus und Tiberius", "Scipio und Sulla"],
        "RichtigeAntwort": "Pompeius und Crassus",
        "RichtigeAntwortMöglichkeiten": "Pompeius Crassus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das erste Triumvirat half Caesar damals aufzusteigen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der adoptierte Sohn von Julius Caesar?",
        "Antworten": ["Augustus", "Tiberius", "Nero", "Caligula"],
        "RichtigeAntwort": "Augustus",
        "RichtigeAntwortMöglichkeiten": "Augustus",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Augustus war der erste römische Kaiser"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der leibliche Sohn von Julius Caesar?",
        "Antworten": ["Caesarion", "Octavian", "Brutus", "Antonius"],
        "RichtigeAntwort": "Caesarion",
        "RichtigeAntwortMöglichkeiten": "Caesarion Ptolemaios",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Caesarion auch bekannt als Ptolemaios war Sohn von Kleopatra"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Senator führte die Verschwörung gegen Julius Caesar an?",
        "Antworten": ["Brutus", "Cassius", "Cicero", "Antonius"],
        "RichtigeAntwort": "Brutus",
        "RichtigeAntwortMöglichkeiten": "Brutus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Caesar wurde mit dem überqueren des Flusses Rubikon zum Staatsfeind"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches ist das berühmte Zitat Caesars nach dem Gallischen Krieg?",
        "Antworten": ["Veni, Vidi, Vici", "Alea iacta est", "Et tu, Brute?", "Carpe diem"],
        "RichtigeAntwort": "Veni, Vidi, Vici",
        "RichtigeAntwortMöglichkeiten": "Veni Vidi Vici Veni, Vidi,",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Ich kam, Ich sah, Ich siegte"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Augustus vor seiner Erhebung zum ersten römischen Kaiser?",
        "Antworten": ["Octavian", "Tiberius", "Marcus Antonius", "Julius Caesar"],
        "RichtigeAntwort": "Octavian",
        "RichtigeAntwortMöglichkeiten": "Octavian",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Augustus wurde später von Julius Caesar adoptiert."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Titel wurde Octavian verliehen nach der Ernennung zum Römischen Kaiser?",
        "Antworten": ["Augustus", "Imperator", "Caesar", "Pontifex Maximus"],
        "RichtigeAntwort": "Augustus",
        "RichtigeAntwortMöglichkeiten": "Augustus",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Titel Augustus bedeutet 'der Erhabene'"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Kaiser folgte direkt auf Augustus?",
        "Antworten": ["Tiberius", "Nero", "Caligula", "Claudius"],
        "RichtigeAntwort": "Tiberius",
        "RichtigeAntwortMöglichkeiten": "Tiberius",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Tiberius war der Stiefsohn von Augustus"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land wurde nach dem Sieg von Augustus über Kleopatra zur römischen Provinz?",
        "Antworten": ["Ägypten", "Gallien", "Spanien", "Germanien"],
        "RichtigeAntwort": "Ägypten",
        "RichtigeAntwortMöglichkeiten": "Ägypten",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Ägypten wurde 30 v. Chr. zur römischen Provinz"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Region eroberte Julius Caesar vollständig?",
        "Antworten": ["Gallien", "Germanien", "Britannien", "Hispanien"],
        "RichtigeAntwort": "Gallien",
        "RichtigeAntwortMöglichkeiten": "Gallien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Gallischen Kriege dauerten von 58 v. Chr. bis 50 v. Chr. an"
    },
    {//Europäische Völker
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk lebte in Griechenland vor der Blütezeit der klassischen griechischen Stadtstaaten?",
        "Antworten": ["Mykener", "Römer", "Minoer", "Phoenizier"],
        "RichtigeAntwort": "Mykener",
        "RichtigeAntwortMöglichkeiten": "Mykener",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Mykener lebten etwa um 1600 bis 1100 v. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk dominierte die Region Mesopotamien vor den Babyloniern?",
        "Antworten": ["Sumerer", "Hethiter", "Assyrer", "Perser"],
        "RichtigeAntwort": "Sumerer",
        "RichtigeAntwortMöglichkeiten": "Sumerer",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Sumerer waren die ersten großen Zivilisationen in Mesopotamien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk herrschte über das heutige Mexiko vor der Ankunft der Spanier?",
        "Antworten": ["Azteken", "Inka", "Maya", "Tolteken"],
        "RichtigeAntwort": "Azteken",
        "RichtigeAntwortMöglichkeiten": "Azteken",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Azteken beherrschten das zentrale Mexiko bis ins 16. Jahrhundert"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike Volk lebte auf der Insel Kreta vor dem Einfluss der klassischen Griechen?",
        "Antworten": ["Minoer", "Mykener", "Ägypter", "Phönizier"],
        "RichtigeAntwort": "Minoer",
        "RichtigeAntwortMöglichkeiten": "Minoer",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Minoer waren die dominierende Zivilisation auf Kreta, bevor die Mykener und später die klassische griechische Kultur Einfluss nahmen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches antike große Reich exestierte im Gebiet des heutigen Iran?",
        "Antworten": ["Perserische", "Hethiter", "Sumerer", "Medes"],
        "RichtigeAntwort": "Perserische",
        "RichtigeAntwortMöglichkeiten": "Perser Persische",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Perser wurden mehrmahls von Rom oder Griechenland angegriffen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk aus dem Norden ist bekannt für seine Seefahrten und Eroberungen in Europa?",
        "Antworten": ["Wikinger", "Finnen", "Lappen", "Sachsen"],
        "RichtigeAntwort": "Wikinger",
        "RichtigeAntwortMöglichkeiten": "Wikinger",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Wikinger sind bekannt für ihre Überfälle in Europa während des Mittelalters"
    },
    {//Kerusker Stadt
        "Kategorie": "Geschichte",
        "Frage": "Welches germanische Volk führte 9 n. Chr. die Schlacht im Teutoburger Wald gegen die Römer?",
        "Antworten": ["Cherusker", "Visigoten", "Langobarden", "Ostgermanen"],
        "RichtigeAntwort": "Cherusker",
        "RichtigeAntwortMöglichkeiten": "Cherusker",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Cherusker besiegten die Römer in der Schlacht im Teutoburger Wald"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Cherusker führte die Schlacht im Teutoburger Wald gegen die Römer?",
        "Antworten": ["Arminius", "Hermann", "Vercingetorix", "Tacitus"],
        "RichtigeAntwort": "Arminius",
        "RichtigeAntwortMöglichkeiten": "Arminius Hermann",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "9 n. Chr. konnten die Germanen die Römer durch Überraschungsangriffe bezwingen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand die Schlacht Rom gegen Germanien im Teutoburger Wald statt?",
        "Antworten": ["9 n. Chr.", "12 v. Chr.", "25 n. Chr.", "50 n. Chr."],
        "RichtigeAntwort": "9 n. Chr.",
        "RichtigeAntwortMöglichkeiten": "9",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht im Teutoburger Wald, gewannen später die Germanen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Feldherr führte Rom in der Schlacht im Teutoburger Wald an?",
        "Antworten": ["Quinctilius Varus", "Gaius Octavius", "Julius Caesar", "Markus Antonius"],
        "RichtigeAntwort": "Quinctilius Varus",
        "RichtigeAntwortMöglichkeiten": "Publius Quinctilius Varus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht im Teutoburger Wald, gewannen später die Germanen"
    },
    {//Pompeji
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Vulkan, der Pompeji im Jahr 79 n. Chr. zerstörte?",
        "Antworten": ["Vesuv", "Etna", "Krakatau", "Stromboli"],
        "RichtigeAntwort": "Vesuv",
        "RichtigeAntwortMöglichkeiten": "Vesuv",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Vesuv brach 79 n. Chr. aus und zerstörte die Städte Pompeji und Herculaneum"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt wurde von dem Vulkanausbruch des Vesuvs im Antiken Rom zerstört?",
        "Antworten": ["Pompeji", "Alexandria", "Neapel", "Ostia"],
        "RichtigeAntwort": "Pompeji",
        "RichtigeAntwortMöglichkeiten": "Pompeji",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Pompeji wurde durch die Eruption des Vesuvs im Jahr 79 n. Chr. zerstört"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Kaiser ließ das Kolosseum in Rom bauen?",
        "Antworten": ["Vespasian", "Nerva", "Caesar", "Trajan"],
        "RichtigeAntwort": "Vespasian",
        "RichtigeAntwortMöglichkeiten": "Vespasian",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Bau des Kolosseums begann unter Kaiser Vespasian im Jahr 72 n. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Kaiser teilte das Römische Reich in die westliche und östliche Hälfte?",
        "Antworten": ["Diokletian", "Constantin", "Augustus", "Nerva"],
        "RichtigeAntwort": "Diokletian",
        "RichtigeAntwortMöglichkeiten": "Diokletian",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Diokletian führte im Jahr 285 n. Chr. die Diözesanreform durch"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gebäude in Rom diente als Versammlungsort für das römische Senat?",
        "Antworten": ["Curia", "Pantheon", "Forum", "Thermen"],
        "RichtigeAntwort": "Curia",
        "RichtigeAntwortMöglichkeiten": "Curia",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Curia war der Sitz des römischen Senats in der Stadt Rom."
    },
    {//Oströmische Reich
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fiel das Weströmische Reich?",
        "Antworten": ["476", "1089", "589", "1453"],
        "RichtigeAntwort": "476",
        "RichtigeAntwortMöglichkeiten": "476",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Oströmische Reich fiel erst 1453 gegen die Osmanen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die berühmte Kirche, die unter Justinian I. in Konstantinopel erbaut wurde?",
        "Antworten": ["Hagia Sophia", "Pantheon", "Petersdom", "Santa Maria Maggiore"],
        "RichtigeAntwort": "Hagia Sophia",
        "RichtigeAntwortMöglichkeiten": "Hagia Sophia sofia",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Hagia Sophia war fast 1.000 Jahre lang die größte Kathedrale der Welt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der berühmte Oströmische Gesetzeskodex, den Kaiser Justinian I. erlassen hat?",
        "Antworten": ["Corpus Iuris Civilis", "Lex Romana", "Codex Theodosianus", "Edictum Perpetuum"],
        "RichtigeAntwort": "Corpus Iuris Civilis",
        "RichtigeAntwortMöglichkeiten": "Corpus Iuris Civilis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Corpus Iuris Civilis bildete die Grundlage des heutigen Zivilrechts in vielen Ländern"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand die Plünderung Konstantinopels durch die Kreuzritter statt?",
        "Antworten": ["1204 n. Chr.", "1099 n. Chr.", "1453 n. Chr.", "1187 n. Chr."],
        "RichtigeAntwort": "1204 n. Chr.",
        "RichtigeAntwortMöglichkeiten": "1204 ",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Plünderung von 1204 führte zur Errichtung des Lateinischen Kaiserreichs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher osmanische Sultan eroberte Konstantinopel?",
        "Antworten": ["Mehmed II.", "Süleyman der Prächtige", "Bayezid I.", "Selim I."],
        "RichtigeAntwort": "Mehmed II.",
        "RichtigeAntwortMöglichkeiten": "Mehmed",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Mehmed II. machte Konstantinopel zur neuen Hauptstadt des Osmanischen Reiches"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches byzantinische Kloster ist eines der ältesten erhaltenen Klöster der Welt?",
        "Antworten": ["Kloster von St. Katharina", "Kloster von Hosios Loukas", "Kloster von Daphni", "Kloster von Meteora"],
        "RichtigeAntwort": "Kloster von St. Katharina",
        "RichtigeAntwortMöglichkeiten": "Kloster von St. Katharina",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Kloster von St. Katharina am Sinai stammt aus dem 6. Jahrhundert n. Chr. und beherbergt eine der ältesten Bibliotheken der Welt."
    },
    { //Nero
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Kaiser ist für das große Feuer in Rom berüchtigt?",
        "Antworten": ["Nero", "Caligula", "Tiberius", "Domitian"],
        "RichtigeAntwort": "Nero",
        "RichtigeAntwortMöglichkeiten": "Nero",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Kaiser Nero wurde lange Zeit verdächtigt, das Feuer selbst gelegt zu haben"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kaiser begann den Bau der monumentalen 'Domus Aurea' in Rom?",
        "Antworten": ["Nero", "Augustus", "Claudius", "Tiberius"],
        "RichtigeAntwort": "Nero",
        "RichtigeAntwortMöglichkeiten": "Nero",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die 'Domus Aurea', auch bekannt als das Goldene Haus, war eine extravagante Palastanlage, die nach dem Brand von Rom errichtet wurde."
    },
    { //Diogenes
        "Kategorie": "Philosophie",
        "Frage": "Welcher grieschiche Philosoph suchte mit Laterne in der Hand nach einem 'ehrlichen Mann'?",
        "Antworten": ["Diogenes", "Epikur", "Zeno", "Heraklit"],
        "RichtigeAntwort": "Diogenes",
        "RichtigeAntwortMöglichkeiten": "Diogenes",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Diogenes beschwerte sich oft über die damaligen Normen und der Gesellschafft" 
    },
    {//Berserker
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die nordischen in Tierfellen gehüllten Krieger in einem unkontrollierbaren Wutrausch?",
        "Antworten": ["Berserker", "Jarls", "Druiden", "Skalden"],
        "RichtigeAntwort": "Berserker",
        "RichtigeAntwortMöglichkeiten": "Berserker",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Begriff 'Berserker' stammt vom altnordischen Wort 'berserkr', was so viel wie 'Bärenhemd' bedeutet."
    },
    {//Porzellan
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land wurde das erste echte Porzellan entwickelt?",
        "Antworten": ["China", "Japan", "Persien", "Ägypten"],
        "RichtigeAntwort": "China",
        "RichtigeAntwortMöglichkeiten": "China",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Chinesisches Porzellan ist auch als 'Weiße Jade' bekannt"
    },
    {// sehr einfache fragen zum mittelalter
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die großen Festungen, in denen Ritter und Adlige im Mittelalter lebten?",
        "Antworten": ["Monumente", "Hütten", "Ritterburgen", "Tempel"],
        "RichtigeAntwort": "Ritterburgen",
        "RichtigeAntwortMöglichkeiten": "Ritterburgen burgen festungen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Ritterburgen waren nicht nur Wohnsitze, sondern auch Verteidigungsanlagen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Tier war das Haupttransportmittel der Ritter im Mittelalter?",
        "Antworten": ["Tauben", "Kamel", "Pferd", "Esel"],
        "RichtigeAntwort": "Pferd",
        "RichtigeAntwortMöglichkeiten": "Pferd pferde",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Oft hatten diese Pferde eine eigene Rüstung"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Waffe war für Ritter im Mittelalter typisch?",
        "Antworten": ["Speer", "Schwert", "Bogen", "Axt"],
        "RichtigeAntwort": "Schwert",
        "RichtigeAntwortMöglichkeiten": "Schwert schwerter",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Schwert galt als das wichtigste Symbol des Rittertums"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Material wurde hauptsächlich zum Bau von Burgen im Mittelalter verwendet?",
        "Antworten": ["Holz", "Stroh", "Stein", "Lehm"],
        "RichtigeAntwort": "Stein",
        "RichtigeAntwortMöglichkeiten": "Stein sandstein",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Stein ein robustes und widerstandsfähiges Material gegen Angriffe"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Was trugen Ritter im Mittelalter, um ihre Köpfe zu schützen?",
        "Antworten": ["Helm", "Hut", "Krone", "Kapuze"],
        "RichtigeAntwort": "Helm",
        "RichtigeAntwortMöglichkeiten": "Helm metallhelm eisenhelm kopfschutz kettenhelm helme",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Helm war ein wichtiger Teil der Rüstung und schützte den Ritter vor tödlichen Verletzungen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Beruf war im Mittelalter für das Herstellen von Waffen verantwortlich?",
        "Antworten": ["Handwerker", "Schmied", "Zimmermann", "Schneider"],
        "RichtigeAntwort": "Schmied",
        "RichtigeAntwortMöglichkeiten": "Schmied",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Schmied stellte auch Werkzeuge und Hufeisen her"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Bauwerke wurden im Mittelalter mit hohen Türmen und dicken Mauern errichtet?",
        "Antworten": ["Brücken", "Schlösser", "Burgen", "Straßen"],
        "RichtigeAntwort": "Burgen",
        "RichtigeAntwortMöglichkeiten": "Burgen Ritterburgen festungen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Burgen dienten sowohl als Wohnsitze von Adligen als auch als Schutz gegen Feinde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt die mittelalterliche Rüstung, die aus vielen kleinen Kettenringen besteht?",
        "Antworten": ["Kettenrüstung", "Plattenrüstung", "Lederrüstung", "Ringrüstung"],
        "RichtigeAntwort": "Kettenrüstung",
        "RichtigeAntwortMöglichkeiten": "Kettenrüstung",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Kettenrüstung bot guten Schutz und Flexibilität, was sie für viele Ritter ideal machte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Material wurde meistens für die Herstellung von Schilden im Mittelalter verwendet?",
        "Antworten": ["Holz", "Eisen", "Keramik", "Papier"],
        "RichtigeAntwort": "Holz",
        "RichtigeAntwortMöglichkeiten": "Holz",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Holz war weit verbreitet für Schilde da es leichter und effektiver als Eisen war"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Metall wurde meistens zur Herstellung von Schwertklingen im Mittelalter verwendet?",
        "Antworten": ["Eisen", "Bronze", "Silber", "Kupfer"],
        "RichtigeAntwort": "Eisen",
        "RichtigeAntwortMöglichkeiten": "Eisen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Eisen hatte eine Vorteilhafte Härte und Verfügbarkeit"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Metall wurde mesitens zur Herstellung von Rüstung im Mittelalter verwendet?",
        "Antworten": ["Eisen", "Bronze", "Silber", "Kupfer"],
        "RichtigeAntwort": "Eisen",
        "RichtigeAntwortMöglichkeiten": "Eisen",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Eisen hatte eine Vorteilhafte Härte und Verfügbarkeit"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man das Geschoss eines Bogen?",
        "Antworten": ["Pfeil", "Stein", "Kugel", "Feder"],
        "RichtigeAntwort": "Pfeil",
        "RichtigeAntwortMöglichkeiten": "Pfeil",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Bögen waren sehr effektiv da sie durch Rüstungen bohren können"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher mittelalterliche Beruf war für das Herstellen von Kleidung zuständig?",
        "Antworten": ["Schneider", "Bäcker", "Müller", "Tischler"],
        "RichtigeAntwort": "Schneider",
        "RichtigeAntwortMöglichkeiten": "Schneider näher",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Schneider stellten Kleidung von einfachen Tuniken bis zu prächtigen Gewändern für Adelige her"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Beruf im Mittelalter war für die Herstellung von Brot verantwortlich?",
        "Antworten": ["Bäcker", "Müller", "Schmied", "Töpfer"],
        "RichtigeAntwort": "Bäcker",
        "RichtigeAntwortMöglichkeiten": "Bäcker",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Bäcker bereiteten täglich Brot und Gebäck vor"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man das Werkzeug das im Mittelalter für das Weben von Stoffen benutzt wurde?",
        "Antworten": ["Webstuhl", "Nähmaschien", "Nähstuhl", "Stoffmacher"],
        "RichtigeAntwort": "Webstuhl",
        "RichtigeAntwortMöglichkeiten": "Webstuhl",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Webstühle wurden bereits in der Jungsteinzeit erfunden"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Beruf im Mittelalter war für das Management von Tieren zuständig?",
        "Antworten": ["Hofmeister", "Gärtner", "Hirte", "Sklave"],
        "RichtigeAntwort": "Hirte",
        "RichtigeAntwortMöglichkeiten": "Hirte",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Hirte war ein eher wenig angesehener Beruf des Mittelalters"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der Bereich vor der Hauptmauer einer Burg, der als Schutz vor Angriffen diente?",
        "Antworten": ["Vorfeld", "Graben", "Schutzmauer", "Fallengrube"],
        "RichtigeAntwort": "Graben",
        "RichtigeAntwortMöglichkeiten": "Graben",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Graben war oft mit Wasser gefüllt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man den Bereich einer Burg, der als Lager für Waffen und Rüstungen diente?",
        "Antworten": ["Waffenkammer", "Speisekammer", "Speicher", "Bunker"],
        "RichtigeAntwort": "Waffenkammer",
        "RichtigeAntwortMöglichkeiten": "Waffenkammer kammer",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "In der Waffenkammer wurden Waffen und Rüstungen aufbewahrt und gewartet"
    },
    {//Frankenreich und Heiliges Römisches
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der erste König der Franken, der das Christentum annahm?",
        "Antworten": ["Chlodwig I.", "Karl der Große", "Pepin der Kurze", "Dagobert I."],
        "RichtigeAntwort": "Chlodwig I.",
        "RichtigeAntwortMöglichkeiten": "Chlodwig",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Chlodwig I. konvertierte um das Jahr 500 zum Christentum, was den Beginn der Christianisierung der fränkischen Stämme markierte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der berühmte fränkische König, der im Jahr 800 zum Kaiser gekrönt wurde?",
        "Antworten": ["Karl der Große", "Chlodwig I.", "Karl Martell", "Ludwig der Fromme"],
        "RichtigeAntwort": "Karl der Große",
        "RichtigeAntwortMöglichkeiten": "Karl der Große Charlemagne",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Karl der Große wurde zum Kaiser des Heiligen römischen Reiches"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches große Reich gründete Karl der Große?",
        "Antworten": ["Fränkisches Reich", "Heiliges Römisches Reich", "Ostfränkisches Reich", "Byzantinisches Reich"],
        "RichtigeAntwort": "Fränkisches Reich",
        "RichtigeAntwortMöglichkeiten": "Fränkisches Frankenreich Franken franzosen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Fränkische Reich unter Karl dem Großen umfasste weite Teile Westeuropas und war eine der mächtigsten politischen Einheiten seiner Zeit."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Vertrag, der das Frankenreich nach dem Tod von Ludwig dem Frommen aufteilte?",
        "Antworten": ["Vertrag von Verdun", "Vertrag von Saint-Clair-sur-Epte", "Vertrag von Meersen", "Vertrag von Verdun-sur-le-Doubs"],
        "RichtigeAntwort": "Vertrag von Verdun",
        "RichtigeAntwortMöglichkeiten": "Vertrag von Verdun",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von Verdun teilte das Land under den Enkeln von Karl dem Großen auf"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt das Hauptwerk von Karl Marx, das die Grundlage für den modernen Kommunismus legt?",
        "Antworten": ["Das Kapital", "Das Manifest", "Die deutsche Ideologie", "Brandenburger Tor"],
        "RichtigeAntwort": "Das Kapital",
        "RichtigeAntwortMöglichkeiten": "Das Kapital",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Karl Marx gilt als Uhrgroßvater des Kommunismus"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Karl dem Großen?",
        "Antworten": ["Pepin der Kurze", "Karl Martell", "Chlodwig I.", "Ludwig der Fromme"],
        "RichtigeAntwort": "Pepin der Kurze",
        "RichtigeAntwortMöglichkeiten": "Pepin Kurze",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Pepin der Kurze war der erste fränkische König aus der Karolinger-Dynastie"
    },
    {//Alter kommunismus
        "Kategorie": "Geschichte",
        "Frage": "Wer gilt als der Begründer des Kommunismus?",
        "Antworten": ["Karl Marx", "Friedrich Engels", "Wladimir Lenin", "Mao Zedong"],
        "RichtigeAntwort": "Karl Marx",
        "RichtigeAntwortMöglichkeiten": "Karl Marx Friedrich Engels",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Karl Marx legte das Manifest der Kommunistischen Partei'."
    },
    { //Heiliges Römisches Reich
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Kaiser des Heiligen Römischen Reiches?",
        "Antworten": ["Otto I.", "Karl der Große", "Heinrich IV.", "Friedrich I. Barbarossa"],
        "RichtigeAntwort": "Otto I.",
        "RichtigeAntwortMöglichkeiten": "Otto",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Otto I. wurde 962 zum Kaiser gekrönt und gilt als der Gründer des Heiligen Römischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kaiser wurde im Jahr 800 vom Papst in Rom zum Kaiser des Heiligen Römischen Reiches?",
        "Antworten": ["Karl der Große", "Ludwig der Fromme", "Otto I.", "Friedrich I. Barbarossa"],
        "RichtigeAntwort": "Karl der Große",
        "RichtigeAntwortMöglichkeiten": "Karl der Große Charlemagne",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Karl der Große wird auch Charlemagne genannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches berühmte Gesetzbuch wurde von Karl dem Großen erlassen?",
        "Antworten": ["Lex Salica", "Sachsenspiegel", "Codex Justinianus", "Capitularia"],
        "RichtigeAntwort": "Capitularia",
        "RichtigeAntwortMöglichkeiten": "Capitularia",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Karl der Große war Gründer des Frankenreichs"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde das Heilige Römische Reich offiziell aufgelöst?",
        "Antworten": ["1806", "1648", "1789", "1815"],
        "RichtigeAntwort": "1806",
        "RichtigeAntwortMöglichkeiten": "1806",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Heilige Römische Reich wurde durch Napoleons Invasion auf Europa aufgelöst"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der letzte Kaiser des Heiligen Römischen Reiches?",
        "Antworten": ["Franz II.", "Karl V.", "Friedrich III.", "Maximilian I."],
        "RichtigeAntwort": "Franz II.",
        "RichtigeAntwortMöglichkeiten": "Franz",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Franz II. löste das Heilige Römische Reich 1806 auf"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Familie dominierte das Heilige Römische Reich vom 15. bis zum Ende?",
        "Antworten": ["Habsburger", "Wittelsbacher", "Salier", "Ottonen"],
        "RichtigeAntwort": "Habsburger",
        "RichtigeAntwortMöglichkeiten": "Habsburger",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Habsburger konnten durch Inzest lange über das Reich herrschen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kaiser des Heiligen Römischen Reiches führte die Italienzüge an?",
        "Antworten": ["Friedrich I. Barbarossa", "Karl IV.", "Maximilian I.", "Otto von Wurst"],
        "RichtigeAntwort": "Friedrich I. Barbarossa",
        "RichtigeAntwortMöglichkeiten": "Friedrich I. Barbarossa",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Friedrich I. Barbarossa führte zwischen 1154 und 1189 mehrere Feldzüge nach Italien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kaiser des Heiligen Römischen Reiches war auch König von Spanien und erlebte die Blütezeit des spanischen Kolonialreiches?",
        "Antworten": ["Karl V.", "Franz II.", "Friedrich II.", "Heinrich VII."],
        "RichtigeAntwort": "Karl V.",
        "RichtigeAntwortMöglichkeiten": "Karl",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Karl V. kämpfte gegen die Ausbreitung des Protestantismus."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Schlacht führte 1805 zum Untergang des Heiligen Römischen Reiches?",
        "Antworten": ["Schlacht bei Austerlitz", "Schlacht bei Leipzig", "Schlacht bei Wagram", "Schlacht bei Waterloo"],
        "RichtigeAntwort": "Schlacht bei Austerlitz",
        "RichtigeAntwortMöglichkeiten": "Austerlitz",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Durch Napoleon wurde das Heilige Römische Reich schließlich aufgelößt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war die Krönungsstadt im Heiligen Römischen Reich?",
        "Antworten": ["Aachen", "Worms", "Speyer", "Mainz"],
        "RichtigeAntwort": "Aachen",
        "RichtigeAntwortMöglichkeiten": "Aachen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Aachen war der traditionelle Ort für die Krönung der römisch-deutschen Könige bis ins 16. Jahrhundert."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag aus dem Jahr 843 teilte das Frankenreich?",
        "Antworten": ["Vertrag von Verdun", "Westfälischer Frieden", "Vertrag von Utrecht", "Wormser Konkordat"],
        "RichtigeAntwort": "Vertrag von Verdun",
        "RichtigeAntwortMöglichkeiten": "Verdun",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von Verdun teilte das Karolingische Reich unter den Enkeln Karls des Großen auf"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Familie stellte die meisten Kaiser des Heiligen Römischen Reiches?",
        "Antworten": ["Habsburger", "Wittelsbacher", "Hohenzollern", "Savoyer"],
        "RichtigeAntwort": "Habsburger",
        "RichtigeAntwortMöglichkeiten": "Habsburger habsburg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Habsburger hatten im späteren Heiligen Römischen reich die meisten Kaiser"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche berühmte Habsburgerin wurde 1772 Königin von Frankreich?",
        "Antworten": ["Marie Antoinette", "Maria Theresia", "Elisabeth von Österreich", "Anna von Österreich"],
        "RichtigeAntwort": "Marie Antoinette",
        "RichtigeAntwortMöglichkeiten": "Marie Antoinette",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Marie Antoinette wurde 1793 durch die Guillotine hingerichtet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Schlacht im Jahr 1683 wurde von den Habsburgern gegen die Osmanen gewonnen?",
        "Antworten": ["Schlacht am Kahlenberg", "Schlacht bei Mohács", "Schlacht von Lepanto", "Schlacht bei Nikopolis"],
        "RichtigeAntwort": "Schlacht am Kahlenberg",
        "RichtigeAntwortMöglichkeiten": "Schlacht am Kahlenberg",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht am Kahlenberg 1683 leitete die Rückeroberung Südosteuropas ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde das Heilige Römische Reich offiziell gegründet?",
        "Antworten": ["800", "962", "1200", "1453"],
        "RichtigeAntwort": "962",
        "RichtigeAntwortMöglichkeiten": "962",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Heilige Römische Reich wurde 962 gegründet, als Otto I. vom Papst zum Kaiser gekrönt wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Titel trug der Herrscher des Heiligen Römischen Reiches?",
        "Antworten": ["Kaiser", "König", "Herzog", "Fürst"],
        "RichtigeAntwort": "Kaiser",
        "RichtigeAntwortMöglichkeiten": "Kaiser",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Kaiser des Heiligen Römischen Reiches wurde oft durch die Kurfürsten gewählt und war das Oberhaupt des Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches berühmte Reich im Mittelalter war der Vorläufer des Heiligen Römischen Reiches?",
        "Antworten": ["Frankenreich", "Byzantinisches Reich", "Osmanisches Reich", "Weströmisches Reich"],
        "RichtigeAntwort": "Frankenreich",
        "RichtigeAntwortMöglichkeiten": "Frankenreich frankenreich fränkisches franken fränkischesreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Frankenreich unter Karl dem Großen wird oft als Vorläufer des Heiligen Römischen Reiches angesehen, das später aus dessen westlichem Teil hervorging."
    },
    {//Martin Luther
        "Kategorie": "Geschichte",
        "Frage": "Welches Dokument hat Martin Luther an die Tür der Schlosskirche in Wittenberg genagelt?",
        "Antworten": ["95 Thesen", "Magna Carta", "Westfälischer Friede", "Goldene Bulle"],
        "RichtigeAntwort": "95 Thesen",
        "RichtigeAntwortMöglichkeiten": "95 Thesen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die 95 Thesen richteten sich vorallem gegen den Ablasshandel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer veröffentlichte die 95 Thesen?",
        "Antworten": ["Martin Luther", "Nelson Mandela", "Karl Marx", "Friedrich der Große"],
        "RichtigeAntwort": "Martin Luther",
        "RichtigeAntwortMöglichkeiten": "Martin Luther",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die 95 Thesen richteten sich vorallem gegen den Ablasshandel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Sprache übersetzte Martin Luther die Bibel, um sie für die breite Masse zugänglich zu machen?",
        "Antworten": ["Deutsch", "Latein", "Griechisch", "Hebräisch"],
        "RichtigeAntwort": "Deutsch",
        "RichtigeAntwortMöglichkeiten": "Deutsch",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Luthers Bibelübersetzung ins Deutsche war revolutionär, da sie die Heilige Schrift erstmals einem breiten Publikum zugänglich machte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Reichstag verurteilte Martin Luther?",
        "Antworten": ["Reichstag zu Worms", "Reichstag von Trient", "Reichstag zu Speyer", "Reichstag von Nicäa"],
        "RichtigeAntwort": "Reichstag zu Worms",
        "RichtigeAntwortMöglichkeiten": "Worms",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Reichstag zu Worms 1521 erklärte Luther zum Ketzer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt das Kirchenlied welches als Hymne der Reformation bezeichnet wird?",
        "Antworten": ["Ein feste Burg ist unser Gott", "Ave Maria", "Dies Irae", "O Haupt voll Blut und Wunden"],
        "RichtigeAntwort": "Ein feste Burg ist unser Gott",
        "RichtigeAntwortMöglichkeiten": "feste Burg Gott",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Lied ist eine der bekanntesten Schöpfungen Martin Luthers"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches wichtige Dokument wurde 1530 als offizielle Glaubenslehre der lutherischen Kirche vorgelegt?",
        "Antworten": ["Augsburger Bekenntnis", "95 Thesen", "Westfälischer Friede", "Edikt von Nantes"],
        "RichtigeAntwort": "Augsburger Bekenntnis",
        "RichtigeAntwortMöglichkeiten": "Augsburger Bekenntnis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Augsburger Bekenntnis von 1530 legte die wesentlichen Glaubensinhalte fest"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Orden kämpfte ursprünglich gegen die Reformation von Martin Luther?",
        "Antworten": ["Jesuiten", "Benediktiner", "Dominikaner", "Franziskaner"],
        "RichtigeAntwort": "Jesuiten",
        "RichtigeAntwortMöglichkeiten": "Jesuiten",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Jesuitenorden wurde gegründet, um die katholische Kirche zu stärken"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Stadt starb Martin Luther?",
        "Antworten": ["Eisleben", "Wittenberg", "Leipzig", "Erfurt"],
        "RichtigeAntwort": "Eisleben",
        "RichtigeAntwortMöglichkeiten": "Eisleben",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Martin Luther starb 1546 in Eisleben, der Stadt, in der er auch geboren wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Was kritisierte Martin Luther in seinen 95 Thesen am meisten?",
        "Antworten": ["Ablasshandel", "Kreuzzüge", "Priestertum", "Klosterleben"],
        "RichtigeAntwort": "Ablasshandel",
        "RichtigeAntwortMöglichkeiten": "Ablasshandel Ablassbriefe Ablas Begnadigung Freisprechung Lossprechung Sündenerlass Indulgenzhandel Sündenvergebungshandel Sündenablasshandel handel briefe",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Damals hatte man Ablassbriefe gekauft um von seinen Sünden befreit zu werden"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Frau von Martin Luther, die ehemalige Nonne?",
        "Antworten": ["Katharina von Bora", "Elisabeth von Thüringen", "Hildegard von Bingen", "Anna von Kleve"],
        "RichtigeAntwort": "Katharina von Bora",
        "RichtigeAntwortMöglichkeiten": "Katharina von Bora",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Katharina von Bora unterstützte ihn maßgeblich in seinen reformatorischen Bestrebungen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Stadt veröffentlichte Martin Luther seine 95 Thesen?",
        "Antworten": ["Wittenberg", "Leipzig", "Erfurt", "Augsburg"],
        "RichtigeAntwort": "Wittenberg",
        "RichtigeAntwortMöglichkeiten": "Wittenberg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Martin Luther veröffentlichte seine 95 Thesen 1517 in Wittenberg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Beruf war Martin Luther ursprünglich, bevor er Theologe wurde?",
        "Antworten": ["Mönch", "Lehrer", "Bauer", "Schneider"],
        "RichtigeAntwort": "Mönch",
        "RichtigeAntwortMöglichkeiten": "Mönch",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Martin Luther trat ursprünglich in das Augustinerkloster in Erfurt ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lange dauerte der Dreißigjährige Krieg?",
        "Antworten": ["30 Jahre", "29 Jahre", "32 Jahre", "31 Jahre"],
        "RichtigeAntwort": "30 Jahre",
        "RichtigeAntwortMöglichkeiten": "30 dreißig dreissig 3zig",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Dreißigjährige Krieg dauerte von 1618 bis 1648 und war einer der verheerendsten Konflikte in der europäischen Geschichte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Dreißigjährige Krieg?",
        "Antworten": ["1618", "1517", "1648", "1683"],
        "RichtigeAntwort": "1618",
        "RichtigeAntwortMöglichkeiten": "1618",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Krieg begann mit dem Prager Fenstersturz im Jahr 1618"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kaiser des Heiligen Römischen Reiches herrschte während des Dreißigjährigen Krieges?",
        "Antworten": ["Ferdinand II.", "Karl V.", "Maximilian I.", "Rudolf II."],
        "RichtigeAntwort": "Ferdinand II.",
        "RichtigeAntwortMöglichkeiten": "Ferdinand",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ferdinand II. war Kaiser des Heiligen Römischen Reiches und ein zentraler Akteur im Dreißigjährigen Krieg, der stark von konfessionellen Konflikten geprägt war."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Mit welchem Ereignis begann der Dreißigjährige Krieg?",
        "Antworten": ["Prager Fenstersturz", "Schlacht von Hastings", "Storming of the Bastille", "Wiener Kongress"],
        "RichtigeAntwort": "Prager Fenstersturz",
        "RichtigeAntwortMöglichkeiten": "Prager Fenstersturz",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Dreißigjährige Krieg begann 1618 mit dem Prager Fenstersturz, als böhmische Adlige zwei kaiserliche Statthalter aus einem Fenster der Prager Burg warfen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand der Reichstag zu Worms statt, bei dem Martin Luther seine Thesen verteidigte?",
        "Antworten": ["1521", "1517", "1530", "1546"],
        "RichtigeAntwort": "1521",
        "RichtigeAntwortMöglichkeiten": "1521",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Reichstag zu Worms 1521 markierte einen Wendepunkt in der Reformation, als Martin Luther seine Position gegen die katholische Kirche verteidigte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete 1648 den Dreißigjährigen Krieg?",
        "Antworten": ["Westfälischer Frieden", "Augsburger Religionsfrieden", "Wiener Kongress", "Vertrag von Verdun"],
        "RichtigeAntwort": "Westfälischer Frieden",
        "RichtigeAntwortMöglichkeiten": "Westfälischer Frieden",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Westfälische Frieden von 1648 markierte das Ende des Dreißigjährigen Krieges"
    },
    {//Kreuzzüge
        "Kategorie": "Geschichte",
        "Frage": "Wer führte den Ersten Kreuzzug an?",
        "Antworten": ["Papst Urban II.", "Richard Löwenherz", "Friedrich Barbarossa", "Saladin"],
        "RichtigeAntwort": "Papst Urban II.",
        "RichtigeAntwortMöglichkeiten": "Papst Urban II.",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Papst Urban II. rief 1095 zum Ersten Kreuzzug auf"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Kreuzzüge wurden insgesamt unternommen?",
        "Antworten": ["8", "3", "5", "12"],
        "RichtigeAntwort": "8",
        "RichtigeAntwortMöglichkeiten": "8",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Zwischen 1096 und 1270 wurden die Kreuzzüge gegen die muslimische Welt unternommen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Anführer des Dritten Kreuzzugs?",
        "Antworten": ["Richard Löwenherz", "Philipp II.", "Konstantinopel", "Johann Ohneland"],
        "RichtigeAntwort": "Richard Löwenherz",
        "RichtigeAntwortMöglichkeiten": "Richard Löwenherz",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Richard Löwenherz war König von England"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Erste Kreuzzug?",
        "Antworten": ["1096", "1071", "1192", "1215"],
        "RichtigeAntwort": "1096",
        "RichtigeAntwortMöglichkeiten": "1096",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Erste Kreuzzug führte zur Eroberung Jerusalems durch die Kreuzfahrer 1099"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war das Hauptziel der Kreuzfahrer im Ersten Kreuzzug?",
        "Antworten": ["Jerusalem", "Rom", "Kairo", "Byzanz"],
        "RichtigeAntwort": "Jerusalem",
        "RichtigeAntwortMöglichkeiten": "Jerusalem",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Jerusalem galt als heilige Stadt für Christen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die religiösen Kriegszüge, die zwischen dem 11. und 13. Jahrhundert geführt wurden?",
        "Antworten": ["Kreuzzüge", "Hundertjähriger Krieg", "Normannische Eroberung", "Völkerwanderung"],
        "RichtigeAntwort": "Kreuzzüge",
        "RichtigeAntwortMöglichkeiten": "Kreuzzüge",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Kreuzzüge wurden unternommen um Jerusalem aus muslimischer Kontrolle zu befreien."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man das im Mittelalter vorherrschende Gesellschaftssystem?",
        "Antworten": ["Feudalismus", "Kapitalismus", "Kommunismus", "Imperialismus"],
        "RichtigeAntwort": "Feudalismus",
        "RichtigeAntwortMöglichkeiten": "Feudalismus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im Feudalismus gab der Lehnsherr Land an seine Vasallen im Austausch für Treue und militärische Unterstützung."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Gruppe stand im Mittelalter an der Spitze der gesellschaftlichen Hierarchie?",
        "Antworten": ["Könige", "Ritter", "Klerus", "Adlige"],
        "RichtigeAntwort": "Könige",
        "RichtigeAntwortMöglichkeiten": "Könige kaiser",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Könige standen an der Spitze der feudalistischen Pyramide und verliehen Ländereien an ihre treuesten Anhänger."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die unterste Schicht der Hirachie im Mittelalter?",
        "Antworten": ["Bauern", "Adlige", "Ritter", "Bürger"],
        "RichtigeAntwort": "Bauern",
        "RichtigeAntwortMöglichkeiten": "Bauern",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Bauern arbeiteten auf dem Land, das sie von Lehnsherren gepachtet hatten, und gaben einen Teil ihrer Ernte als Abgabe ab."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die Krieger im Mittelalter?",
        "Antworten": ["Ritter", "Vasallen", "Soldaten", "Kämpfer"],
        "RichtigeAntwort": "Ritter",
        "RichtigeAntwortMöglichkeiten": "Ritter",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Ritter waren oft adliger Herkunft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer stand im Mittelalter direkt unter dem König in der Hierarchie?",
        "Antworten": ["Herzog", "Ritter", "Bürgermeister", "Bauer"],
        "RichtigeAntwort": "Herzog",
        "RichtigeAntwortMöglichkeiten": "Herzog adlige klerus",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Herzöge waren oft mächtige Adelige, die im Namen des Königs regierten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wird die Pest auch genannt?",
        "Antworten": ["Schwarzer Tod", "Rote Pest", "Plague of London", "Bubonenpest"],
        "RichtigeAntwort": "Schwarzer Tod",
        "RichtigeAntwortMöglichkeiten": "Schwarzer Tod",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Schwarze Tod, ist eine Krankheit und tötete in Europa damals jede dritte Person"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Bakterium verursachte die Pest?",
        "Antworten": ["Yersinia pestis", "Bacillus anthracis", "Mycobacterium leprae", "Clostridium tetani"],
        "RichtigeAntwort": "Yersinia pestis",
        "RichtigeAntwortMöglichkeiten": "Yersinia pestis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Yersinia pestis wurde durch Flöhe auf Menschen übertragen wurde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wurde die Pest im Mittelalter häufig verbreitet?",
        "Antworten": ["Rattenflöhe", "kontaminierte Lebensmittel", "Kontakt mit kranken Menschen", "Vögel"],
        "RichtigeAntwort": "Rattenflöhe",
        "RichtigeAntwortMöglichkeiten": "Flöhe rattenflöhe ratten mäuse",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Pest wurde durch Flöhe auf Ratten übertragen, die dann Menschen infizierten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis ist die verheerendsten Pandemie des Mittelalters?",
        "Antworten": ["Pest", "Cholera", "Tuberkulose", "Grippe"],
        "RichtigeAntwort": "Pest",
        "RichtigeAntwortMöglichkeiten": "Pest",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Pest verursachte im 14. Jahrhundert einen massiven Bevölkerungsverlust in Europa"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Stand im Mittelalter war für die Verwaltung und das Sammeln von Steuern verantwortlich?",
        "Antworten": ["Klerus", "Adel", "Bauern", "Bürger"],
        "RichtigeAntwort": "Klerus",
        "RichtigeAntwortMöglichkeiten": "Klerus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Klerus war durch die Kirchensteuer sin die Verwaltung einbezogen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wurde der Stand der Landbesitzer im Mittelalter bezeichnet?",
        "Antworten": ["Adel", "Bauern", "Klerus", "Bürger"],
        "RichtigeAntwort": "Adel",
        "RichtigeAntwortMöglichkeiten": "Adel",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Adel war der Stand der Personen, die Landbesitz und oft auch politische Macht hatten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche große Stadt in Frankreich war im 12. Jahrhundert ein bedeutendes Zentrum für Kunst und Wissenschaft?",
        "Antworten": ["Paris", "Marseille", "Lyon", "Bordeaux"],
        "RichtigeAntwort": "Paris",
        "RichtigeAntwortMöglichkeiten": "Paris",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Paris beherbergte die berühmte Universität von Paris"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war der Hauptsitz der Habsburger im Heiligen Römischen Reich",
        "Antworten": ["Wien", "Berlin", "Köln", "Prag"],
        "RichtigeAntwort": "Wien",
        "RichtigeAntwortMöglichkeiten": "Wien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Wien diente als Residenzstadt für die Habsburger Monarchie"
    },
    { //Hanse
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das bedeutende Handelsnetzwerk in Norddeutschland im Mittelalter?",
        "Antworten": ["Hanse", "Ritterbund", "Gilde", "Bund der Städte"],
        "RichtigeAntwort": "Hanse",
        "RichtigeAntwortMöglichkeiten": "Hanse",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Hanse sicherte den Handel und die Sicherheit in der Region"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war das bedeutendste Zentrum der Hanse im Mittelalter?",
        "Antworten": ["Lübeck", "Hamburg", "Bremen", "Köln"],
        "RichtigeAntwort": "Lübeck",
        "RichtigeAntwortMöglichkeiten": "Lübeck",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Lübeck wurde oft als 'Königin der Hanse' bezeichnet"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die jährlichen Treffen der Hanse-Städte?",
        "Antworten": ["Hansetage", "Städteversammlung", "Handelsrat", "Hanseversammlungen"],
        "RichtigeAntwort": "Hansetage",
        "RichtigeAntwortMöglichkeiten": "Hansetage hansetag",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Hansetage waren die regelmäßigen Versammlungen, bei denen Vertreter der Mitgliedsstädte der Hanse zusammenkamen, um gemeinsame Entscheidungen zu treffen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war das Hauptsitz der Hanse nach Lübeck, wo die Hanse über eine eigene Verwaltung verfügte?",
        "Antworten": ["Hamburg", "Rostock", "Köln", "Wismar"],
        "RichtigeAntwort": "Hamburg",
        "RichtigeAntwortMöglichkeiten": "Hamburg",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Hamburg spielte eine bedeutende Rolle in der Verwaltung des Handels"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man eine Stadt, die zur Hanse gehörte?",
        "Antworten": ["Hansestadt", "Kaufmannsstadt", "Zollstadt", "Hauptstadt"],
        "RichtigeAntwort": "Hansestadt",
        "RichtigeAntwortMöglichkeiten": "Hansestadt",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Eine Hansestadt profitierte von gemeinsamen Handelsrechten und Privilegien."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Aus welchem Land stammte Leif Erikson, der erste Europäische Mensch in Amerika?",
        "Antworten": ["Island", "Norwegen", "Schweden", "Dänemark"],
        "RichtigeAntwort": "Island",
        "RichtigeAntwortMöglichkeiten": "Island",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Leif Erikson war ein Isländer und Sohn des berühmten Entdeckers Erik des Roten, der Grönland entdeckte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Weleche Europäer entdeckte Amerika vor Christus Kolumbus?",
        "Antworten": ["Leif Erikson", "Erik der Rote", "Olaf Tryggvason", "Björn Eisenseite"],
        "RichtigeAntwort": "Leif Erikson",
        "RichtigeAntwortMöglichkeiten": "Leif Erikson",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Leif Erikson erreichte Amerika um das Jahr 1000 herum"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer entdeckte Grönland?",
        "Antworten": ["Leif Erikson", "Erik der Rote", "Olaf Tryggvason", "Bjarni Herjólfsson"],
        "RichtigeAntwort": "Erik der Rote",
        "RichtigeAntwortMöglichkeiten": "Erik der Rote",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Sohn von Erik dem Roten entdeckte Amerika"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte Leif Erikson die von ihm entdeckten Gebiete in Nordamerika?",
        "Antworten": ["Vinland", "Grönland", "Neufundland", "Erikssön"],
        "RichtigeAntwort": "Vinland",
        "RichtigeAntwortMöglichkeiten": "Vinland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "'Vinland' bedeutet 'Weideland'"
    },
    {//Buchdruck
        "Kategorie": "Geschichte",
        "Frage": "Welches Material wurde zum Bedrucken beim frühen Buchdruck verwendet?",
        "Antworten": ["Papier", "Pergament", "Leinen", "Holz"],
        "RichtigeAntwort": "Papier",
        "RichtigeAntwortMöglichkeiten": "Papier",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Obwohl Pergament und andere Materialien früher verwendet wurden, trugen die Entwicklungen im Papierdruck zur Verbreitung des Buchdrucks bei."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer erfand den Buchdruck?",
        "Antworten": ["Johannes Gutenberg", "Martin Luther", "Leonardo da Vinci", "Albrecht Dürer"],
        "RichtigeAntwort": "Johannes Gutenberg",
        "RichtigeAntwortMöglichkeiten": "Johannes Gutenberg",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Johannes Gutenberg löste eine Revolution in der Verbreitung von Wissen im 15. Jahrhundert aus"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann wurde der Buchdruck erfunden?",
        "Antworten": ["1440", "1450", "1460", "1470"],
        "RichtigeAntwort": "1440",
        "RichtigeAntwortMöglichkeiten": "1440",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Johannes Gutenberg erfandden Buchdruck"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land erfand das Schießpulver?",
        "Antworten": ["Italien", "China", "Ägypten", "Griechenland"],
        "RichtigeAntwort": "China",
        "RichtigeAntwortMöglichkeiten": "China",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Schießpulver war ein wichtiges Werkzeug im Krieg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gerät wurde im Mittelalter verbessert, um Getreide zu verarbeiten?",
        "Antworten": ["Wassermühle", "Dampfmühle", "Holzmühle", "Stahlmühle"],
        "RichtigeAntwort": "Wassermühle",
        "RichtigeAntwortMöglichkeiten": "Wassermühle Mühlen windmühlen",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Wassermühlen trugen zur mechanischen Verarbeitung von Getreide bei"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Navigationsgerät wurde im 12. Jahrhundert in Europa eingeführt?",
        "Antworten": ["Kompass", "Sextant", "Sonnenuhr", "Astrolabium"],
        "RichtigeAntwort": "Kompass",
        "RichtigeAntwortMöglichkeiten": "Kompass",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Kompass hatte die damalige Seefahrt revolutioniert"
    },
    { //Nordische Mythologie
        "Kategorie": "Geschichte",
        "Frage": "Wer ist der oberste Gott im nordischen Glauben?",
        "Antworten": ["Odin", "Thor", "Loki", "Freyja"],
        "RichtigeAntwort": "Odin",
        "RichtigeAntwortMöglichkeiten": "Odin",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Odin ist der Allvater und der wichtigste Gott in der nordischen Mythologie"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher nordische Gott ist bekannt als der Donnergott?",
        "Antworten": ["Thor", "Odin", "Loki", "Baldur"],
        "RichtigeAntwort": "Thor",
        "RichtigeAntwortMöglichkeiten": "Thor tohr",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Thor wird oft mit seinem Hammer Mjölnir dargestellt wird."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die Welt der Götter im nordischen Glauben?",
        "Antworten": ["Asgard", "Midgard", "Vanaheim", "Helheim"],
        "RichtigeAntwort": "Asgard",
        "RichtigeAntwortMöglichkeiten": "Asgard",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Asgard ist mit einer Regenbogenbrücke namens Bifröst mit der Menschenwelt verbunden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man das Ende der Welt in der nordischen Mythologie?",
        "Antworten": ["Ragnarök", "Armageddon", "Apokalypse", "Ragnarökkr"],
        "RichtigeAntwort": "Ragnarök",
        "RichtigeAntwortMöglichkeiten": "Ragnarök",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ragnarök ist das Schicksal der Götter, ein prophezeiter Weltuntergang"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der Ort, in dem im Kampf gefallene Krieger im nordischen Glauben nach dem Tod hinkommen?",
        "Antworten": ["Valhalla", "Hel", "Asgard", "Midgard"],
        "RichtigeAntwort": "Valhalla",
        "RichtigeAntwortMöglichkeiten": "Valhalla",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Valhalla ist die prächtige Halle, in der die tapfersten Krieger leben"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Gott ist im nordischen Glauben der Trickster und Gott des Unfugs?",
        "Antworten": ["Loki", "Thor", "Odin", "Freyja"],
        "RichtigeAntwort": "Loki",
        "RichtigeAntwortMöglichkeiten": "Loki",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Loki ist bekannt für seine Schabernack"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt Thors Bruder im nordischen Glauben?",
        "Antworten": ["Loki", "Balder", "Tyr", "Vidar"],
        "RichtigeAntwort": "Loki",
        "RichtigeAntwortMöglichkeiten": "Loki",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Loki ist der Gott des Schabernacks"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Werkzeug oder Waffe benutzt Thor in dem nordischen Glauben?",
        "Antworten": ["Hammer", "Schwert", "Stab", "Dolch"],
        "RichtigeAntwort": "Hammer",
        "RichtigeAntwortMöglichkeiten": "Mjölnir Hammer",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "DEr Hammer von Thor heißt Mjölnir"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wofür ist Thor im nordischen Glauben der Gott?",
        "Antworten": ["Donner", "Sonne", "Wind", "Feuer"],
        "RichtigeAntwort": "Donner",
        "RichtigeAntwortMöglichkeiten": "Donner Donnergott Blitz himmel unwetter sturm schutz",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Thor ist der Gott des Donners, des Sturms und des Schutzes"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt Thors Vater in der nordischen Mythologie?",
        "Antworten": ["Odin", "Loki", "Balder", "Heimdall"],
        "RichtigeAntwort": "Odin",
        "RichtigeAntwortMöglichkeiten": "Odin",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Odin ist der Allvater und oberste Gott der nordischen Mythologie"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Wochentag ist nach Thor benannt?",
        "Antworten": ["Donnerstag", "Mittwoch", "Freitag", "Samstag"],
        "RichtigeAntwort": "Donnerstag",
        "RichtigeAntwortMöglichkeiten": "Donnerstag",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Thor ist der Gott des Donners im nordischen Glauben"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches war nach dem Brittischem das zweitgrößte Reich der Geschichte?",
        "Antworten": ["Mongolisches Reich", "Römisches Reich", "Britisches Empire", "Osmanisches Reich"],
        "RichtigeAntwort": "Mongolisches Reich",
        "RichtigeAntwortMöglichkeiten": "Mongolisches monolai mongolisch mongolenreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Mongolische Reich erstreckte sich im 13. und 14. Jahrhundert über große Teile Eurasiens"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Gründer des Mongolischen Reiches?",
        "Antworten": ["Dschingis Khan", "Kublai Khan", "Timur", "Ögedei Khan"],
        "RichtigeAntwort": "Dschingis Khan",
        "RichtigeAntwortMöglichkeiten": "Dschingis Khan gengis jengis kan",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Dschingis Khan vereinte die mongolischen Stämme und begann eine Serie von Eroberungen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahrhundert begann das Mongolische Reich seine Expansion?",
        "Antworten": ["13. Jahrhundert", "11. Jahrhundert", "15. Jahrhundert", "9. Jahrhundert"],
        "RichtigeAntwort": "13. Jahrhundert",
        "RichtigeAntwortMöglichkeiten": "13. 13 dreizehntes 13tes",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Dschingis Khan vereinte die mongolischen Stämme und begann eine Serie von Eroberungen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Enkel von Dschingis Khan, der China eroberte?",
        "Antworten": ["Kublai Khan", "Batu Khan", "Hülegü Khan", "Ögedei Khan"],
        "RichtigeAntwort": "Kublai Khan",
        "RichtigeAntwortMöglichkeiten": "Kublai",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Kublai Khan gründete die Yuan-Dynastie in China"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Hauptstadt des Mongolischen Reiches unter Dschingis Khan?",
        "Antworten": ["Karakorum", "Beijing", "Samarkand", "Buchara"],
        "RichtigeAntwort": "Karakorum",
        "RichtigeAntwortMöglichkeiten": "Karakorum",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Karakorum war das politische und kulturelle Zentrum des Mongolischen Reiches während Dschingis Khans Herrschaft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Tier nutzten die Mongolen im 13th Jahrhundet hauptsächlich als Reittier?",
        "Antworten": ["Pferd", "Kamel", "Elefant", "Rind"],
        "RichtigeAntwort": "Pferd",
        "RichtigeAntwortMöglichkeiten": "Pferd",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Mongolische Armee war für ihre Schnelligkeit und Beweglichkeit bekannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Dynastie baute den größten Teil der heutigen Großen Mauer von China?",
        "Antworten": ["Qin-Dynastie", "Han-Dynastie", "Tang-Dynastie", "Ming-Dynastie"],
        "RichtigeAntwort": "Ming-Dynastie",
        "RichtigeAntwortMöglichkeiten": "Ming-Dynastie ming",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Ming-Dynastie exestierte von 1368 bis 1644"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Dynastie ist für die Erfindung des Papiers bekannt?",
        "Antworten": ["Qin-Dynastie", "Han-Dynastie", "Tang-Dynastie", "Song-Dynastie"],
        "RichtigeAntwort": "Han-Dynastie",
        "RichtigeAntwortMöglichkeiten": "Han-Dynastie han",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Han-Dynastie exestierte von 206 v. Chr. bis 220 n. Chr. im heutigen China"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Dynastie begann mit dem Bau der Chinesischen Mauer?",
        "Antworten": ["Qin-Dynastie", "Han-Dynastie", "Tang-Dynastie", "Song-Dynastie"],
        "RichtigeAntwort": "Qin-Dynastie",
        "RichtigeAntwortMöglichkeiten": "Qin-Dynastie qin",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Bau der Chinesischen Mauer begann unter der Qin-Dynastie, um das Reich vor nomadischen Invasoren zu schützen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Material wurde überwiegend beim Bau der Chinesischen Mauer verwendet?",
        "Antworten": ["Holz", "Stein", "Sand", "Lehm"],
        "RichtigeAntwort": "Stein",
        "RichtigeAntwortMöglichkeiten": "Stein",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Chinesische Mauer besteht aus mehreren unterschiedlich langen Mauern die nicht verbunden sind und sich durch ganz China verteilen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Fluss ist der Urprung der chinesischen Zivilisation?",
        "Antworten": ["Gelber Fluss", "Yangtze", "Mekong", "Nil"],
        "RichtigeAntwort": "Gelber Fluss",
        "RichtigeAntwortMöglichkeiten": "Gelber Fluss Huang",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Gelbe Fluss wird auch Huang He genannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land befindet sich der berühmte Tempelkomplex Angkor Wat?",
        "Antworten": ["Kambodscha", "Vietnam", "Thailand", "Laos"],
        "RichtigeAntwort": "Kambodscha",
        "RichtigeAntwortMöglichkeiten": "Kambodscha",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Angkor Wat ist ein riesiger Tempelkomplex in Kambodscha, der im 12. Jahrhundert erbaut wurde."
    },
    {//altes Japan
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der traditionelle japanische Kleidungsstil für Männer?",
        "Antworten": ["Kimono", "Sari", "Kilt", "Tunica"],
        "RichtigeAntwort": "Kimono",
        "RichtigeAntwortMöglichkeiten": "Kimono",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Kimono ist ein traditionelles japanisches Kleidungsstück, das für seine elegante und aufwändige Gestaltung bekannt ist."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die traditionellen japanischen Krieger?",
        "Antworten": ["Samurai", "Ninja", "Ronin", "Shogun"],
        "RichtigeAntwort": "Samurai",
        "RichtigeAntwortMöglichkeiten": "Samurai",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Samurai waren die militärische Elite im feudalen Japan"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches traditionelle japanische Fest feiert den Beginn des Frühlings und wird oft mit Kirschblüten verbunden?",
        "Antworten": ["O-Bon", "Tanabata", "Hanami", "Shogatsu"],
        "RichtigeAntwort": "Hanami",
        "RichtigeAntwortMöglichkeiten": "Hanami",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Hanami ist das traditionelle japanische Fest zum Bewundern der Kirschblüten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt das traditionelle japanische Schwert?",
        "Antworten": ["Katana", "Naginata", "Yari", "Wakizashi"],
        "RichtigeAntwort": "Katana",
        "RichtigeAntwortMöglichkeiten": "Katana",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Das Katana ist bekannt für seine geschwungene Klinge"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man den japanischen Begriff für die Kunst des Schwertkampfes, die von den Samurai praktiziert wurde?",
        "Antworten": ["Kendo", "Judo", "Karate", "Aikido"],
        "RichtigeAntwort": "Kendo",
        "RichtigeAntwortMöglichkeiten": "Kendo",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Kendo, was „Weg des Schwertes“ bedeutet, basiert auf die Techniken der Smurai"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt die größte Religion in Japan?",
        "Antworten": ["Shintoismus", "Buddhismus", "Christentum", "Taoismus"],
        "RichtigeAntwort": "Shintoismus",
        "RichtigeAntwortMöglichkeiten": "Shintoismus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Shintoismus ist die größte und älteste Religion in Japan und betohnt das Spirituelle Wesen der Natur"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land führte den Hundertjährigen Krieg gegen England?",
        "Antworten": ["Frankreich", "Spanien", "Schottland", "Italien"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Hundertjährige Krieg dauerte von 1337 bis 1453"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land führte den Hundertjährigen Krieg gegen Frankreich?",
        "Antworten": ["Enland", "Spanien", "Schottland", "Italien"],
        "RichtigeAntwort": "Enland",
        "RichtigeAntwortMöglichkeiten": "Enland Großbrittanien vereinigtes uk brittisches",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Hundertjährige Krieg dauerte von 1337 bis 1453"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lange dauerte der Hundertjährige Krieg?",
        "Antworten": ["116 Jahre", "100 Jahre", "90 Jahre", "130 Jahre"],
        "RichtigeAntwort": "116 Jahre",
        "RichtigeAntwortMöglichkeiten": "116 Jahre",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Trotz seines Namens dauerte der Hundertjährige Krieg von 1337 bis 1453."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Jahr markiert das Ende des Hundertjährigen Krieges?",
        "Antworten": ["1453", "1465", "1435", "1442"],
        "RichtigeAntwort": "1453",
        "RichtigeAntwortMöglichkeiten": "1453",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Hundertjährige Krieg endete 1453 mit dem Sieg der Franzosen, im gleichen Jahr ist auch das Oströmische Reich gefallen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Vertrag, der den Hundertjährigen Krieg offiziell beendete?",
        "Antworten": ["Vertrag von Picquigny", "Vertrag von Troyes", "Vertrag von Brétigny", "Vertrag von Paris"],
        "RichtigeAntwort": "Vertrag von Picquigny",
        "RichtigeAntwortMöglichkeiten": "Picquigny",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von Picquigny wurde unterzeichnet 1475 und beendete den Krieg zwischen Frankreich und England"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches französische Königshaus regierte während des Hundertjährigen Krieges die Französische Krone?",
        "Antworten": ["Valois", "Bourbon", "Capet", "Plantagenet"],
        "RichtigeAntwort": "Valois",
        "RichtigeAntwortMöglichkeiten": "Valois",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Haus Valois regierte Frankreich während des Hundertjährigen Krieges"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches wichtige französische Ereignis 1453 beendete den Hundertjährigen Krieg?",
        "Antworten": ["Die Belagerung von Bordeaux", "Die Schlacht von Agincourt", "Die Schlacht von Poitiers", "Die Belagerung von Orléans"],
        "RichtigeAntwort": "Die Belagerung von Bordeaux",
        "RichtigeAntwortMöglichkeiten": "Belagerung Bordeaux",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Belagerung von Bordeaux 1453 führte zur endgültigen Rückeroberung von Bordeaux durch die Franzosen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Region war der Hauptstreitpunkt, der den Beginn des Hundertjährigen Krieges auslöste?",
        "Antworten": ["Gascogne", "Normandie", "Burgund", "Bretagne"],
        "RichtigeAntwort": "Gascogne",
        "RichtigeAntwortMöglichkeiten": "Gascogne",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Hundertjährige Krieg dauerte von 1337 bis 1453"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher englische König war zu Beginn des Hundertjährigen Krieges 1337 auf dem Thron?",
        "Antworten": ["Edward III.", "Richard II.", "Henry IV.", "Henry V."],
        "RichtigeAntwort": "Edward III.",
        "RichtigeAntwortMöglichkeiten": "Edward",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Edward III. erhebte damals den Anspruch auf den französischen Thron"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Reich war die früheste Form des russischen Staates im Mittelalter?",
        "Antworten": ["Kiewer Rus", "Moskowitisches Reich", "Goldene Horde", "Novgoroder Republik"],
        "RichtigeAntwort": "Kiewer Rus",
        "RichtigeAntwortMöglichkeiten": "Kiewer Rus kiew",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Kiewer Rus bestandbis ins 13. Jahrhundert und erreichte große Teile Osteuropas"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Stadtstaat war im Mittelalter das Zentrum der Kiewer Rus?",
        "Antworten": ["Kiew", "Moskau", "Novgorod", "Pskow"],
        "RichtigeAntwort": "Kiew",
        "RichtigeAntwortMöglichkeiten": "Kiew",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Kiewer Rus war eine frühe Form des heutigen Russlands"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Reich eroberte die Kiewer Rus im 13. Jahrhundert?",
        "Antworten": ["Mongolisches Reich", "Heiliges Römisches Reich", "Polen-Litauen", "Russisches Reich"],
        "RichtigeAntwort": "Mongolisches",
        "RichtigeAntwortMöglichkeiten": "Mongolisches mongolei",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Kiewer Rus war eine frühe Form des heutigen Russlands"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wird das Oströmische Reich auch genannt?",
        "Antworten": ["Byzantinisches Reich", "West-Römisches Reich", "Mittelalterliches Reich", "Ost-Römisches Reich"],
        "RichtigeAntwort": "Byzantinisches Reich",
        "RichtigeAntwortMöglichkeiten": "Byzantinisches Reich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Byzantinische Reich bestand nach dem Fall des Weströmischen Reiches bis zur Eroberung Konstantinopels im Jahr 1453."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Mit welchem Land bildete Polen im 14. Jahrhundert eine Doppelmonarchie?",
        "Antworten": ["Litauen", "Ungarn", "Schweden", "Preußen"],
        "RichtigeAntwort": "Litauen",
        "RichtigeAntwortMöglichkeiten": "Litauen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Doppelmonarchie zwischen Polen und Litauen begann 1386 Mit dem Königreich Polen-Litauen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das mittelalterliche Reich, das im 15. und 16. Jahrhundert gegen die Osmanischen Türken kämpfte?",
        "Antworten": ["Königreich Ungarn", "Königreich Polen", "Königreich Aragon", "Königreich Kastilien"],
        "RichtigeAntwort": "Königreich Ungarn",
        "RichtigeAntwortMöglichkeiten": "Ungarn",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Königreich Ungarn war bekannt für seine Verteidigung gegen die Osmanischen Türken, besonders bei der Schlacht von Mohács 1526."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Aus welchem Material wurden die meisten ägyptischen Pyramiden gebaut?",
        "Antworten": ["Kalkstein", "Granit", "Sandstein", "Marmor"],
        "RichtigeAntwort": "Kalkstein",
        "RichtigeAntwortMöglichkeiten": "Kalkstein kalk Stein",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Kalkstein stammt oft aus Steinbrüchen in der Nähe des Nils und wurde als äußere Schicht verwendet."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Wer war der oberste Gott in der römischen Mythologie?",
        "Antworten": ["Jupiter", "Mars", "Neptun", "Apollo"],
        "RichtigeAntwort": "Jupiter",
        "RichtigeAntwortMöglichkeiten": "Jupiter",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Jupiter war der römische König der Götter und herrschte über den Himmel und das Wetter."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Welche Göttin war in der römischen Mythologie für die Liebe zuständig?",
        "Antworten": ["Venus", "Juno", "Diana", "Minerva"],
        "RichtigeAntwort": "Venus",
        "RichtigeAntwortMöglichkeiten": "Venus",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Venus wurde als Göttin der Liebe, Schönheit und Fruchtbarkeit verehrt."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Welcher Gott war der römische Gott des Krieges?",
        "Antworten": ["Mars", "Vulcanus", "Apollo", "Jupiter"],
        "RichtigeAntwort": "Mars",
        "RichtigeAntwortMöglichkeiten": "Mars",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Mars war nicht nur der Gott des Krieges, sondern auch ein wichtiger Beschützer Roms."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Welcher römische Gott war der Herrscher der Unterwelt?",
        "Antworten": ["Pluto", "Mars", "Mercur", "Neptun"],
        "RichtigeAntwort": "Pluto",
        "RichtigeAntwortMöglichkeiten": "Pluto",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Pluto war der Gott der Unterwelt und des Reichtums"
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Wer war der römische Gott der Meere?",
        "Antworten": ["Neptun", "Mars", "Jupiter", "Apollo"],
        "RichtigeAntwort": "Neptun",
        "RichtigeAntwortMöglichkeiten": "Neptun",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Neptun war nicht nur der Gott der Meere, sondern auch der Pferde und Erdbeben."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Wie hieß die römische Göttin der Weisheit?",
        "Antworten": ["Minerva", "Diana", "Ceres", "Juno"],
        "RichtigeAntwort": "Minerva",
        "RichtigeAntwortMöglichkeiten": "Minerva",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Minerva war die Göttin der Weisheit, des Handwerks und der strategischen Kriegsführung."
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Wer war der römische Götterbot?",
        "Antworten": ["Mercur", "Vulcanus", "Apollo", "Pluto"],
        "RichtigeAntwort": "Mercur",
        "RichtigeAntwortMöglichkeiten": "Mercur",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Mercur ist das Ebenbild von Hermes in der grieschichen Mythologie"
    },
    {
        "Kategorie": "Mythologie",
        "Frage": "Nach welchem römischen Gott wurde der Rote Planet benannt?",
        "Antworten": ["Mars", "Venus", "Jupiter", "Pluto"],
        "RichtigeAntwort": "Mars",
        "RichtigeAntwortMöglichkeiten": "kriegsgott krieges mars",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Mars ist der Römische Kriegsgott"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das muslimische Reich, das im 8. Jahrhundert weite Teile Spaniens und Portugals beherrschte?",
        "Antworten": ["Umayyaden", "Abbasiden", "Fatimiden", "Ayyubiden"],
        "RichtigeAntwort": "Umayyaden",
        "RichtigeAntwortMöglichkeiten": "Umayyaden",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Umayyaden-Kalifat gründete das Emirat von Córdoba, das später zum Kalifat von Córdoba wurde."
    },
    {//Entdeckung Amerikas
        "Kategorie": "Geschichte",
        "Frage": "welcher spanische Entdecker erreichte Amerika?",
        "Antworten": ["Christoph Kolumbus", "Leif Erikson", "Vasco da Gama", "Ferdinand Magellan"],
        "RichtigeAntwort": "Christoph Kolumbus",
        "RichtigeAntwortMöglichkeiten": "Christoph Kolumbus",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Obwohl Kolumbus Amerika entdeckte, glaubte er bis zu seinem Tod, einen neuen Seeweg nach Indien gefunden zu haben"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land finanzierte Christoph Kolumbus' Reise nach Amerika?",
        "Antworten": ["Spanien", "Portugal", "England", "Frankreich"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Spanien ermöglichte Kolumbus die Seefahrt nach Amerika "
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr landete Christoph Kolumbus zum ersten Mal in Amerika?",
        "Antworten": ["1492", "1501", "1488", "1519"],
        "RichtigeAntwort": "1492",
        "RichtigeAntwortMöglichkeiten": "1492",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Kolumbus landete auf den Bahamainseln und nannte die erste gesichtete Insel San Salvador."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Nach welchem Entdecker wurde der Kontinent Amerika benannt?",
        "Antworten": ["Amerigo Vespucci", "Christoph Kolumbus", "Leif Erikson", "Ferdinand Magellan"],
        "RichtigeAntwort": "Amerigo Vespucci",
        "RichtigeAntwortMöglichkeiten": "Amerigo Vespucci",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Amerigo Vespucci erkannte als Erster, dass die entdeckten Gebiete ein neuer Kontinent und nicht Teil Asiens waren"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte Christoph Kolumbus die Ureinwohner von Amerika?",
        "Antworten": ["Indianer", "Eingeborene", "Azteken", "Inka"],
        "RichtigeAntwort": "Indianer",
        "RichtigeAntwortMöglichkeiten": "Indianer",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Kolumbus nannte die Ureinwohner 'Indianer', da er glaubte, er hätte einen neuen Seeweg nach Indien entdeckt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land Christoph Kolumbus während seiner ersten Reise nach Amerika?",
        "Antworten": ["Bahamas", "Karibik", "Kuba", "Hispaniola"],
        "RichtigeAntwort": "Bahamas",
        "RichtigeAntwortMöglichkeiten": "Bahamas",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kolumbus landete auf einer Insel, die er San Salvador nannte"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Reisen unternahm Christoph Kolumbus nach Amerika?",
        "Antworten": ["Vier", "Eine", "Drei", "Fünf"],
        "RichtigeAntwort": "Vier",
        "RichtigeAntwortMöglichkeiten": "Vier 4",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kolumbus erkundete verschiedene Teile der Karibik und Südamerikas"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das Flaggschiff von Christoph Kolumbus bei seiner ersten Reise nach Amerika?",
        "Antworten": ["Santa Maria", "Pinta", "Nina", "Mayflower"],
        "RichtigeAntwort": "Santa Maria",
        "RichtigeAntwortMöglichkeiten": "Santa Maria",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die 'Santa Maria' war das größte der drei Schiffe von Kolumbus"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Pflanze entdeckte Christoph Kolumbus auf seiner Reise, die später in Europa weit verbreitet wurde?",
        "Antworten": ["Tabak", "Kakao", "Mais", "Kartoffel"],
        "RichtigeAntwort": "Tabak",
        "RichtigeAntwortMöglichkeiten": "Tabak",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kolumbus entdeckte Tabakpflanzen auf den Karibikinseln und beobachtete die Einheimischen beim Rauchen von Tabakblättern."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Frucht brachte Christoph Kolumbus von seiner Reise nach Amerika nach Europa?",
        "Antworten": ["Ananas", "Banane", "Orange", "Zitrone"],
        "RichtigeAntwort": "Ananas",
        "RichtigeAntwortMöglichkeiten": "Ananas",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Ananas war eine der exotischen Früchte, die Kolumbus aus der Neuen Welt nach Europa brachte"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land wollte Christoph Kolumbus ursprünglich finden, als er nach Westen segelte?",
        "Antworten": ["Indien", "China", "Japan", "Äthiopien"],
        "RichtigeAntwort": "Indien",
        "RichtigeAntwortMöglichkeiten": "Indien westindien",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Kolumbus wollte einen westlichen Seeweg nach Indien finden, um direkt mit den Gewürzlieferanten zu handeln."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kontinent galt im Mittelalter als die 'Neue Welt'?",
        "Antworten": ["Afrika", "Asien", "Amerika", "Europa"],
        "RichtigeAntwort": "Amerika",
        "RichtigeAntwortMöglichkeiten": "Amerika",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Im Mittelalter war Amerika der Kontinent, der für die Europäer unbekannt und daher als die 'Neue Welt' galt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kontinent wurde von Christoph Kolumbus entdeckt?",
        "Antworten": ["Afrika", "Asien", "Amerika", "Europa"],
        "RichtigeAntwort": "Amerika",
        "RichtigeAntwortMöglichkeiten": "Amerika südamerika nordamerika süd nord-amerika",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Christoph Kolumbus entdeckte 1492 Amerika auf seiner Reise, obwohl er dachte, einen neuen Seeweg nach Indien gefunden zu haben."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Vertrag, der die Weltaufteilung zwischen Spanien und Portugal 1494 regelte?",
        "Antworten": ["Vertrag von Tordesillas", "Vertrag von Versailles", "Vertrag von Utrecht", "Vertrag von Paris"],
        "RichtigeAntwort": "Vertrag von Tordesillas",
        "RichtigeAntwortMöglichkeiten": "Tordesillas",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von Tordesillas wurde geschlossen, um ihre Kolonialgebiete zu teilen und Konflikte zu vermeiden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Jahr wurde der Vertrag von Tordesillas unterzeichnet?",
        "Antworten": ["1492", "1494", "1496", "1500"],
        "RichtigeAntwort": "1494",
        "RichtigeAntwortMöglichkeiten": "1494",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "2 Jahrenach der Entdeckung Amerikas regelte die Aufteilung der neu entdeckten Welt zwischen Spanien und Portugal"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land entdeckte die Seeroute um Afrika nach Indien?",
        "Antworten": ["Spanien", "Portugal", "England", "Niederlande"],
        "RichtigeAntwort": "Portugal",
        "RichtigeAntwortMöglichkeiten": "Portugal",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Portugal entdeckte die Seeroute um Afrika nach Indien unter der Führung von Vasco da Gama im späten 15. Jahrhundert"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Handelsroute verband Europa, Afrika und die Amerikas im 16. Jahrhundert?",
        "Antworten": ["Dreieckshandel", "Seidenroute", "Gewürzroute", "Sklavenroute"],
        "RichtigeAntwort": "Dreieckshandel",
        "RichtigeAntwortMöglichkeiten": "Dreieckshandel dreieck dreiecksweg",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Dreieckshandel war eine Handelsroute, die Sklaven, Rohstoffe und fertige Güter zwischen Europa, Afrika und den Amerikas transportierte."
    },


    /////////////Frankreich/////////////


    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König wurde heiliggesprochen?",
        "Antworten": ["Ludwig IX.", "Philipp II.", "Karl V.", "Ludwig VI."],
        "RichtigeAntwort": "Ludwig IX.",
        "RichtigeAntwortMöglichkeiten": "Ludwig IX. IX Saint Louis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ludwig IX., auch bekannt als 'Saint Louis', war bekannt für seine fromme Lebensweise und seine Beteiligung an den Kreuzzügen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches bedeutende Bauwerk in Paris wurde 1163 begonnen?",
        "Antworten": ["Notre-Dame", "Louvre", "Sainte-Chapelle", "Palais des Papes"],
        "RichtigeAntwort": "Notre-Dame",
        "RichtigeAntwortMöglichkeiten": "Notre-Dame",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Kathedrale Notre-Dame in Paris ist eines der bekanntesten Beispiele für gotische Architektur und wurde 1345 fertiggestellt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König eroberte 1204 die Normandie von England zurück?",
        "Antworten": ["Philipp II.", "Ludwig VII.", "Karl IV.", "Heinrich II."],
        "RichtigeAntwort": "Philipp II.",
        "RichtigeAntwortMöglichkeiten": "Philipp II.",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Philipp II., auch bekannt als 'Philipp Augustus', stärkte die Macht der französischen Monarchie erheblich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Dynastie regierte Frankreich vor den Valois?",
        "Antworten": ["Capetinger", "Bourbonen", "Merowinger", "Plantagenets"],
        "RichtigeAntwort": "Capetinger",
        "RichtigeAntwortMöglichkeiten": "Capetinger",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Capetinger-Dynastie regierte Frankreich von 987 bis 1328 und legte den Grundstein für das mittelalterliche Frankreich."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Stadt wurden die französischen Könige traditionell gekrönt?",
        "Antworten": ["Reims", "Paris", "Lyon", "Orléans"],
        "RichtigeAntwort": "Reims",
        "RichtigeAntwortMöglichkeiten": "Reims",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Kathedrale von Reims war der traditionelle Krönungsort der französischen Könige und symbolisierte die göttliche Legitimation der Herrschaft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land wurde die Guillotine zum Köpfen oft eingesetzt?",
        "Antworten": ["Frankreich", "Deutschland", "Spanien", "Italien"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Guillotine wurde während der Französischen Revolution zum Symbol der Hinrichtungen und Justiz in Frankreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches bedeutende Ereignis markierte den Beginn der französischen Renaissance im Jahr 1515?",
        "Antworten": ["Schlacht von Marignano", "Hochzeit von François I", "Krönung von Henri IV", "Pazifischer Vertrag"],
        "RichtigeAntwort": "Schlacht von Marignano",
        "RichtigeAntwortMöglichkeiten": "Schlacht von Marignano",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht von Marignano sicherte François I. die Kontrolle über Mailand und leitete die französische Renaissance ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König war bekannt für den Bau des Schlosses von Versailles?",
        "Antworten": ["Ludwig XIV", "Louis I", "Ludwig XVI", "Louis II"],
        "RichtigeAntwort": "Ludwig XIV",
        "RichtigeAntwortMöglichkeiten": "Ludwig XIV louis",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Ludwig XIV ließ das prächtige Schloss von Versailles erbauen, um seine Macht zu demonstrieren"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte französische Herrscher wurde 1804 zum Kaiser gekrönt?",
        "Antworten": ["Napoleon Bonaparte", "Ludwig XVI", "Henri IV", "François I"],
        "RichtigeAntwort": "Napoleon Bonaparte",
        "RichtigeAntwortMöglichkeiten": "Napoleon Bonaparte",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Napoleon Bonaparte krönte sich selbst zum Kaiser der Franzosen und begann eine Ära bedeutender Reformen und Kriege in Europa."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König trug den Spitznamen 'Der Sonnenkönig'?",
        "Antworten": ["Ludwig XIV", "Ludwig VI", "Henri IV", "François I"],
        "RichtigeAntwort": "Ludwig XIV",
        "RichtigeAntwortMöglichkeiten": "Louis Ludwig XIV 14",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Ludwig XIV sah sich selbst als Zentrum des französischen Staates, ähnlich wie die Sonne."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches bedeutende französische Bauwerk wurde 1789 von der Revolution beschädigt?",
        "Antworten": ["Bastille", "Versailles", "Notre-Dame", "Sainte-Chapelle"],
        "RichtigeAntwort": "Bastille",
        "RichtigeAntwortMöglichkeiten": "Bastille",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Bastille war ein Symbol der königlichen Unterdrückung"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König sagte 'Der Staat bin ich'?",
        "Antworten": ["Francois XIV", "ludwig XVI", "François I", "Henri IV"],
        "RichtigeAntwort": "ludwig XIV",
        "RichtigeAntwortMöglichkeiten": "ludwig Louis XIV 14",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Louis XIV prägte den Satz 'Der Staat bin ich', um seine absolute Macht als König zu demonstrieren, was sein Bild als unumschränkter Herrscher unterstrich."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lautet das berühmte Zitat von Ludwig XIV auf Deutsch, das seine uneingeschränkte Macht beschreibt?",
        "Antworten": ["Der Staat bin ich", "Ich bin der König", "Der König ist das Gesetz", "Mein Wort ist Gesetz"],
        "RichtigeAntwort": "Der Staat bin ich",
        "RichtigeAntwortMöglichkeiten": "Staat ich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Louis XIV sagte 'Der Staat bin ich' ('L'État, c'est moi') und stellte damit klar, dass er die vollständige Kontrolle über den Staat hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Staatsform hatte Frankreich vor der Französischen Revolution?",
        "Antworten": ["Monarchie", "Republik", "Diktaktur", "Feudalismus"],
        "RichtigeAntwort": "Monarchie",
        "RichtigeAntwortMöglichkeiten": "Absolute Monarchie absulutismus königreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Vor der Französischen Revolution war Frankreich eine absolute Monarchie, in der der König uneingeschränkte Macht ausübte."
    },
    {//Französische Revolution
        "Kategorie": "Geschichte",
        "Frage": "Welcher französische König war zur Zeit des Ausbruchs der Französischen Revolution auf dem Thron?",
        "Antworten": ["Ludwig XIV", "Henri X", "Karl der Große", "Henri I"],
        "RichtigeAntwort": "Ludwig XVI",
        "RichtigeAntwortMöglichkeiten": " louis Ludwig XVI",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Ludwig XVI war der König von Frankreich, als die Französische Revolution begann und wurde später während der Revolution geköpft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis markierte den Beginn der Französischen Revolution im Jahr 1789?",
        "Antworten": ["Sturm auf die Bastille", "Schlacht von Waterloo", "Erklärung der Menschen- und Bürgerrechte", "Revolutionstag"],
        "RichtigeAntwort": "Sturm auf die Bastille",
        "RichtigeAntwortMöglichkeiten": "Bastille bastillienangriff",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Sturm auf die Bastille am 14. Juli 1789 wird heute als Nationalfest gefeiert"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann die Französische Revolution?",
        "Antworten": ["1789", "1740", "1776", "1804"],
        "RichtigeAntwort": "1789",
        "RichtigeAntwortMöglichkeiten": "1789",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Französische Revolution begann 1789 und führte zur Abschaffung der Monarchie und zur Errichtung der Ersten Französischen Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Was wurde während der Französischen Revolution für Hinrichtungen eingesetzt?",
        "Antworten": ["Guillotine", "Galgen", "Fallbeil", "Schafott"],
        "RichtigeAntwort": "Guillotine",
        "RichtigeAntwortMöglichkeiten": "Guillotine köpfen",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Guillotine wurde während der Revolution berüchtigt als das Hauptinstrument zur Vollstreckung von Todesurteilen und wurde zum Symbol des 'Terreur'."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die radikale politische Gruppe, die während der Französischen Revolution unter der Führung von Robespierre an die Macht kam?",
        "Antworten": ["Jakobiner", "Girondisten", "Feuillants", "Sansculotten"],
        "RichtigeAntwort": "Jakobiner",
        "RichtigeAntwortMöglichkeiten": "Jakobiner",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Jakobiner, angeführt von Maximilien Robespierre, spielten eine zentrale Rolle in der radikalen Phase der Revolution und leiteten die Schreckensherrschaft (Terreur) ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte General übernahm nach der Französischen Revolution die Macht und wurde Kaiser von Frankreich?",
        "Antworten": ["Napoleon Bonaparte", "Maximilien Robespierre", "Jean-Paul Marat", "Georges Danton"],
        "RichtigeAntwort": "Napoleon Bonaparte",
        "RichtigeAntwortMöglichkeiten": "Napoleon Bonaparte",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Napoleon Bonaparte, ein brillanter Militärführer, ergriff nach der Revolution die Macht und krönte sich 1804 selbst zum Kaiser der Franzosen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche französische Königin wurde während der Revolution hingerichtet?",
        "Antworten": ["Marie-Antoinette", "Katharina von Medici", "Anna von Österreich", "Margarete von Valois"],
        "RichtigeAntwort": "Marie-Antoinette",
        "RichtigeAntwortMöglichkeiten": "Marie-Antoinette",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Marie-Antoinette, die Frau von Ludwig XVI, wurde 1793 wegen Hochverrats verurteilt und hingerichtet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die Periode der Französischen Revolution, die durch Massenhinrichtungen gekennzeichnet war?",
        "Antworten": ["Schreckensherrschaft", "Erster Koalitionskrieg", "Thermidor", "Vendee-Aufstand"],
        "RichtigeAntwort": "Schreckensherrschaft",
        "RichtigeAntwortMöglichkeiten": "Schreckensherrschaft",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schreckensherrschaft (1793-1794) war eine Phase der Französischen Revolution, in der tausende Menschen hingerichtet wurden, um die Revolution zu schützen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches große Ereignis fand 1789 in Frankreich statt?",
        "Antworten": ["Französische Revolution", "Bastille-Tag", "Thermidor", "Reign of Terror"],
        "RichtigeAntwort": "Französische Revolution",
        "RichtigeAntwortMöglichkeiten": "Französische Revolution Bastille FranzösischeRevulotion",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Französische Revolution leitete eine neue Ära politischer und sozialer Veränderungen in Europa ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der führende Kopf hinter der Schreckensherrschaft während der Französischen Revolution?",
        "Antworten": ["Maximilien Robespierre", "Napoleon Bonaparte", "Georges Danton", "Jean-Paul Marat"],
        "RichtigeAntwort": "Maximilien Robespierre",
        "RichtigeAntwortMöglichkeiten": "Maximilien Robespierre",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Maximilien Robespierre war der Anführer der Jakobiner und wurde später selbst hingerichtet, was das Ende der Schreckensherrschaft markierte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Konflikt, an dem Frankreich beteiligt war, verschärfte die finanzielle Krise und trug zur Revolution bei?",
        "Antworten": ["Amerikanischer Unabhängigkeitskrieg", "Siebenjähriger Krieg", "Italienische Kriege", "Spanischer Erbfolgekrieg"],
        "RichtigeAntwort": "Amerikanischer Unabhängigkeitskrieg",
        "RichtigeAntwortMöglichkeiten": "Amerikanischer Unabhängigkeitskrieg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Frankreich unterstützte die amerikanischen Kolonien im Krieg gegen Großbritannien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie starb Marie Antoinette während der Französischen Revolution?",
        "Antworten": ["Guillotine", "Vergiftung", "Erschossen", "Ertränkt"],
        "RichtigeAntwort": "Guillotine",
        "RichtigeAntwortMöglichkeiten": "Guillotine kopf köpfen klinge hinrichtung geköpft",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Marie Antoinette, wurde 1993 durch die Guillotine geköpft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man die berühmte Figur, die auf dem Gemälde 'Die Freiheit führt das Volk' dargestellt wird?",
        "Antworten": ["Marianne", "Libertas", "Freiheitsstatue", "Justitia"],
        "RichtigeAntwort": "Marianne",
        "RichtigeAntwortMöglichkeiten": "Marianne",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Marianne ist eine nationale Symbolfigur der Französischen Republik, die Freiheit und Vernunft verkörpert."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Symbol der Freiheit wurde während der französischen Revolution weit verbreitet?",
        "Antworten": ["Jakobinermütze", "Adler", "Lorbeerkranz", "Rote Fahne"],
        "RichtigeAntwort": "Jakobinermütze",
        "RichtigeAntwortMöglichkeiten": "Jakobinermütze",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Revolution sollte Anfangs den Bürgern mehr Freiheit geben endete jedoch mit einer Schreckensherrschaft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete die Französische Revolution offiziell?",
        "Antworten": ["1799", "1789", "1793", "1804"],
        "RichtigeAntwort": "1799",
        "RichtigeAntwortMöglichkeiten": "1799",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Jahr 1799 markiert das Ende der Revolution mit Napoleons Staatsstreich des 18. Brumaire."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer beendete die Französische Revolution?",
        "Antworten": ["Napoleon Bonaparte", "Ludwig XVI", "Maximilien Robespierre", "Marie Antoinette"],
        "RichtigeAntwort": "Napoleon Bonaparte",
        "RichtigeAntwortMöglichkeiten": "Napoleon Bonaparte",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Napoleon Bonaparte beendete die Französische Revolution im Jahr 1799 durch einen Staatsstreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welchen Titel bekam Napoleon Bonaparte im Jahr 1804?",
        "Antworten": ["Kaiser", "König", "Präsident", "Premierminister"],
        "RichtigeAntwort": "Kaiser",
        "RichtigeAntwortMöglichkeiten": "Kaiser",
        "Schwierigkeitsgrad": "schwers",
        "Fakt": "Napoleon Bonaparte krönte sich 1804 selbst zum Kaiser von Frankreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gesetzbuch ließ Napoleon Bonaparte erstellen?",
        "Antworten": ["Code Civil", "Magna Carta", "Bill of Rights", "Constitution of the Year III"],
        "RichtigeAntwort": "Code Civil",
        "RichtigeAntwortMöglichkeiten": "Code Civil",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der 'Code Civil' wurde 1804 eingeführt und beeinflusste viele moderne Rechtssysteme weltweit"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Auf welcher Insel starb Napoleon Bonaparte?",
        "Antworten": ["St. Helena", "Elba", "Korfu", "Sizilien"],
        "RichtigeAntwort": "St. Helena",
        "RichtigeAntwortMöglichkeiten": "St. Helena",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Nach seiner Niederlage bei Waterloo wurde Napoleon nach St. Helena verbannt, wo er 1821 starb."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land konnte Napoleon Bonaparte nie erfolgreich erobern?",
        "Antworten": ["Russland", "Spanien", "Italien", "Österreich"],
        "RichtigeAntwort": "Russland",
        "RichtigeAntwortMöglichkeiten": "Russland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Napoleons Russlandfeldzug 1812 endete in einer katastrophalen Niederlage, hauptsächlich aufgrund des harten Winters und der Taktik der verbrannten Erde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land wurde Napoleon Bonaparte geboren?",
        "Antworten": ["Frankreich", "Italien", "Österreich", "Spanien"],
        "RichtigeAntwort": "Italien",
        "RichtigeAntwortMöglichkeiten": "Italien",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Napoleon wurde auf der Insel Korsika geboren, die damals zu Italien gehörte"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Taktik, die die Russen während des Russlandfeldzugs von Napoleon 1812 anwendeten?",
        "Antworten": ["Verbrannte Erde", "Blitzkrieg", "Kriegswirtschaft", "Luftangriffe"],
        "RichtigeAntwort": "Verbrannte Erde",
        "RichtigeAntwortMöglichkeiten": "Verbrannte Erde",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Taktik der verbrannten Erde bestand darin, dass die russischen Truppen alles zerstörten, was den anrückenden Franzosen von Nutzen sein könnte"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Was geschah mit der Stadt Moskau während Napoleons Russlandfeldzug 1812?",
        "Antworten": ["verbrannt", "überschwemmt", "Erdbeeben", "Tornado"],
        "RichtigeAntwort": "verbrannt",
        "RichtigeAntwortMöglichkeiten": "verlassen evakuiert brand verbrannt feuer zurückgelassen angezündet entzündet gelegt",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Als Napoleon in Moskau eintraf, fand er die Stadt fast leer vor, da die russische Armee und die Bürger sie evakuiert hatten. Zusätzlich wurde ein Großteil der Stadt in Brand gesteckt, um den Eindringlingen die Versorgung zu erschweren."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher russische Zar war während Napoleons Russlandfeldzug 1812 an der Macht?",
        "Antworten": ["Alexander I.", "Ivan IV.", "Nikolai I.", "Peter der Große"],
        "RichtigeAntwort": "Alexander I.",
        "RichtigeAntwortMöglichkeiten": "Alexander ",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Zar Alexander I. führte Russland während der Napoleonischen Kriege und spielte eine entscheidende Rolle im Widerstand gegen Napoleons Invasion."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann Napoleons Russlandfeldzug?",
        "Antworten": ["1812", "1805", "1815", "1799"],
        "RichtigeAntwort": "1812",
        "RichtigeAntwortMöglichkeiten": "1812",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Napoleons Russlandfeldzug, auch als der Feldzug von 1812 bekannt, begann im Juni 1812 und war ein entscheidender Moment im Krieg gegen Russland."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Schlacht gilt als Napoleons erfolgreichste?",
        "Antworten": ["Schlacht bei Austerlitz", "Schlacht bei Waterloo", "Schlacht bei Leipzig", "Schlacht bei Trafalgar"],
        "RichtigeAntwort": "Schlacht bei Austerlitz",
        "RichtigeAntwortMöglichkeiten": "Schlacht bei Austerlitz",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht bei Austerlitz, auch als die Schlacht der drei Kaiser bekannt, fand am 2. Dezember 1805 statt und gilt als eine der größten Siege Napoleons."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Napoleons erster Feldzug?",
        "Antworten": ["Italienfeldzug", "Ägyptenfeldzug", "Russlandfeldzug", "Preußenfeldzug"],
        "RichtigeAntwort": "Italienfeldzug",
        "RichtigeAntwortMöglichkeiten": "Italienfeldzug italien rom",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Napoleons erster bedeutender Feldzug war der Italienfeldzug von 1796 bis 1797, bei dem er seine militärischen Fähigkeiten unter Beweis stellte."
    },
    {//einfache fragen Frankreich
        "Kategorie": "Geschichte",
        "Frage": "Wo wurde der Eiffelturm gebaut?",
        "Antworten": ["Frankreich", "England", "USA", "Russland"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Eiffelturm ist eines der berühmtesten Wahrzeichen von Frankreich und steht in Paris."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land lebte Napoleon Bonaparte?",
        "Antworten": ["Frankreich", "Spanien", "Portugal", "Belgien"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Napoleon Bonaparte war ein bedeutender Anführer und Kaiser von Frankreich im frühen 19. Jahrhundert."
    },
    {//Random Fragen
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt das erste Metall, das Menschen benutzten?",
        "Antworten": ["Kupfer", "Eisen", "Gold", "Silber"],
        "RichtigeAntwort": "Kupfer",
        "RichtigeAntwortMöglichkeiten": "Kupfer",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Kupfer wurde bereits in der Jungsteinzeit verwendet, etwa 9000 v. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer äußerte den Satz 'Ich weiß, dass ich nichts weiß'?",
        "Antworten": ["Sokrates", "Plato", "Aristoteles", "Socrates"],
        "RichtigeAntwort": "Sokrates",
        "RichtigeAntwortMöglichkeiten": "Sokrates",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Satz 'Ich weiß, dass ich nichts weiß' wird Sokrates zugeschrieben, einem der bekanntesten Philosophen des antiken Griechenlands."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches stellte die Grenzen Europas nach den Napoleonischen Kriege wieder her?",
        "Antworten": ["Wiener Kongress", "Pariser Vertrag", "Vertrag von Versailles", "Rheinbundakte"],
        "RichtigeAntwort": "Wiener Kongress",
        "RichtigeAntwortMöglichkeiten": "Wiener Kongress",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Wiener Kongress begann 1814 und endete 1815"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Revolution führte 1848 zur Gründung der Zweiten Französischen Republik?",
        "Antworten": ["Februarrevolution", "Juli-Revolution", "Französische Revolution", "Glorreiche Revolution"],
        "RichtigeAntwort": "Februarrevolution febuar",
        "RichtigeAntwortMöglichkeiten": "Februarrevolution",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Februarrevolution von 1848 führte zum Sturz von Louis-Philippe und zur Gründung der Zweiten Französischen Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land führte 1870 einen Krieg gegen Frankreich?",
        "Antworten": ["Deutschland", "Spanien", "Italien", "Österreich"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Deutsch-Französische Krieg von 1870-1871 führte zur Niederlage Frankreichs und zur Gründung des Deutschen Kaiserreichs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche französische Stadt wurde 1871 während des Deutsch-Französischen Krieges belagert und kapitulierte?",
        "Antworten": ["Paris", "Lyon", "Marseille", "Bordeaux"],
        "RichtigeAntwort": "Paris",
        "RichtigeAntwortMöglichkeiten": "Paris",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Belagerung von Paris 1870-1871 während des Deutsch-Französischen Krieges führte zur Kapitulation der Stadt und dem Ende des Zweiten Kaiserreichs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete den Deutsch-Französischen Krieg von 1870-1871?",
        "Antworten": ["Friedensvertrag von Frankfurt", "Versailler Vertrag", "Vertrag von Paris", "Wiener Kongress"],
        "RichtigeAntwort": "Friedensvertrag von Frankfurt",
        "RichtigeAntwortMöglichkeiten": "Friedensvertrag von Frankfurt",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Friedensvertrag von Frankfurt 1871 beendete den Deutsch-Französischen Krieg und führte zur Gründung des Deutschen Kaiserreichs."
    },
    
    
    
    {//Städte früher
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Stadt Istanbul früher, bevor sie von den Osmanen erobert wurde?",
        "Antworten": ["Konstantinopel", "Byzanz", "Alexandria", "Antiochia"],
        "RichtigeAntwort": "Konstantinopel",
        "RichtigeAntwortMöglichkeiten": "Konstantinopel",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Konstantinopel wurde 330 n. Chr. von Kaiser Konstantin dem Großen gegründet und war die Hauptstadt des Byzantinischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Stadt London im Mittelalter?",
        "Antworten": ["Londinium", "Londres", "Londonia", "Londia"],
        "RichtigeAntwort": "Londinium",
        "RichtigeAntwortMöglichkeiten": "Londinium",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Londinium war der Name, den die Römer der Stadt London gaben, als sie die Stadt während der römischen Besatzung gründeten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Stadt Paris während der römischen Zeit?",
        "Antworten": ["Lutetia", "Parisius", "Parisium", "Lutecia"],
        "RichtigeAntwort": "Lutetia",
        "RichtigeAntwortMöglichkeiten": "Lutetia",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Im antiken Rom war Paris als Lutetia bekannt, was den Namen der Stadt während der römischen Herrschaft widerspiegelt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die Stadt New York, bevor sie von den Engländern erobert wurde?",
        "Antworten": ["New Amsterdam", "New Paris", "New London", "Nieuw Amsterdam"],
        "RichtigeAntwort": "New Amsterdam",
        "RichtigeAntwortMöglichkeiten": "New Amsterdam",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "New Amsterdam war der Name der Stadt, als sie von den Niederländern gegründet wurde, bevor die Engländer sie 1664 eroberten und in New York umbenannten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Stadt Budapest früher, als sie aus zwei Städten bestand?",
        "Antworten": ["Buda und Pest", "Buda und Óbuda", "Pest und Óbuda", "Buda und Pestburg"],
        "RichtigeAntwort": "Buda und Pest",
        "RichtigeAntwortMöglichkeiten": "Buda Pest",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Vor der Vereinigung im Jahr 1873 bestand Budapest aus den Städten Buda und Pest, die durch die Donau getrennt waren."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Aus welchen beiden Bundesländern bestand Nordrhein-Westfalen bei seiner Gründung?",
        "Antworten": ["Rheinland und Westfalen", "Hessen und Rheinland", "Westfalen und Bayern", "Rheinland-Pfalz und Hessen"],
        "RichtigeAntwort": "Rheinland und Westfalen",
        "RichtigeAntwortMöglichkeiten": "Rheinland Westfalen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Nordrhein-Westfalen wurde 1946 durch die Vereinigung der britischen Besatzungszone Rheinland und des Landes Westfalen gegründet."
    },
    {//Griechisches Alphabet
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der erste Buchstabe im griechischen Alphabet?",
        "Antworten": ["Alpha", "Beta", "Gamma", "Delta"],
        "RichtigeAntwort": "Alpha",
        "RichtigeAntwortMöglichkeiten": "Alpha",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Alpha ist der erste Buchstabe des griechischen Alphabets und entspricht dem Buchstaben A im lateinischen Alphabet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches griechische Alphabet-Symbol steht für den Buchstaben B?",
        "Antworten": ["Alpha", "Beta", "Gamma", "Delta"],
        "RichtigeAntwort": "Beta",
        "RichtigeAntwortMöglichkeiten": "Beta",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Beta ist der zweite Buchstabe im griechischen Alphabet und entspricht dem Buchstaben B im lateinischen Alphabet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches griechische Alphabet-Symbol steht für den Buchstaben G?",
        "Antworten": ["Gamma", "Delta", "Epsilon", "Zeta"],
        "RichtigeAntwort": "Gamma",
        "RichtigeAntwortMöglichkeiten": "Gamma",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Gamma ist der dritte Buchstabe im griechischen Alphabet und entspricht dem Buchstaben G im lateinischen Alphabet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Grieschiche Buchstabe ist der letzte im Alphabeth?",
        "Antworten": ["Omega", "Phi", "Psi", "Chi"],
        "RichtigeAntwort": "Omega",
        "RichtigeAntwortMöglichkeiten": "Omega",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Omega ist der letzte Buchstabe im griechischen Alphabet und steht für die letzte Position im Alphabet, ähnlich wie Z im lateinischen Alphabet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Buchstabe entspricht dem Buchstaben D im lateinischen Alphabet?",
        "Antworten": ["Delta", "Gamma", "Sigma", "Kappa"],
        "RichtigeAntwort": "Delta",
        "RichtigeAntwortMöglichkeiten": "Delta",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Delta wird in der Mathematik häufig verwendet, um Änderungen oder Differenzen darzustellen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Buchstabe entspricht dem Buchstaben E?",
        "Antworten": ["Epsilon", "Eta", "Iota", "Zeta"],
        "RichtigeAntwort": "Epsilon",
        "RichtigeAntwortMöglichkeiten": "Epsilon",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Epsilon wird oft verwendet, um kleine positive Werte in der Mathematik und Physik darzustellen."
    },
    {//Osmanisches Reich
        "Kategorie": "Geschichte",
        "Frage": "Welches Reich kontrollierte das heutige Gebiet der Türkei bis zum Ende des Ersten Weltkriegs?",
        "Antworten": ["Osmanisches Reich", "Römisches Reich", "Byzantinisches Reich", "Persisches Reich"],
        "RichtigeAntwort": "Osmanisches Reich",
        "RichtigeAntwortMöglichkeiten": "Osmanisches Reich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Osmanische Reich wurde nach dem Ersten Weltkrieg aufgelöst, was zur Gründung der modernen Türkei führte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer gründete das Osmanische Reich im 13. Jahrhundert?",
        "Antworten": ["Osman I", "Süleyman I", "Mehmed II", "Selim I"],
        "RichtigeAntwort": "Osman I",
        "RichtigeAntwortMöglichkeiten": "Osman",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Osman I gilt als der Namensgeber des Osmanischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche berühmte Stadt eroberte das Osmanische Reich 1453?",
        "Antworten": ["Konstantinopel", "Rom", "Bagdad", "Kairo"],
        "RichtigeAntwort": "Konstantinopel",
        "RichtigeAntwortMöglichkeiten": "Konstantinopel istanbul",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Eroberung von Konstantinopel durch Mehmed II. markierte das Ende des Byzantinischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die Hauptstadt Konstantinopel nach der Eroberung durch die Osmanen?",
        "Antworten": ["Istanbul", "Bagdad", "Damaskus", "Kairo"],
        "RichtigeAntwort": "Istanbul",
        "RichtigeAntwortMöglichkeiten": "Istanbul",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Konstantinopel wurde in Istanbul umbenannt und blieb die Hauptstadt des Osmanischen Reiches bis zu dessen Ende."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete das Osmanische Reich offiziell?",
        "Antworten": ["1922", "1918", "1939", "1453"],
        "RichtigeAntwort": "1922",
        "RichtigeAntwortMöglichkeiten": "1922",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Ende des Osmanischen Reiches führte zur Gründung der modernen Türkei unter Mustafa Kemal Atatürk"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand die berühmte Belagerung Wiens durch das Osmanische Reich statt?",
        "Antworten": ["1683", "1453", "1571", "1529"],
        "RichtigeAntwort": "1683",
        "RichtigeAntwortMöglichkeiten": "1683",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die zweite Belagerung Wiens 1683 markierte das Ende der osmanischen Expansion in Europa."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wurde der oberste Herrscher im Osmanischen Reich genannt?",
        "Antworten": ["Sultan", "Kaiser", "Khan", "Zar"],
        "RichtigeAntwort": "Sultan",
        "RichtigeAntwortMöglichkeiten": "Sultan",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Sultan war sowohl politischer als auch religiöser Führer des Osmanischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele große Belagerungen Wiens durch das Osmanische Reich gab es?",
        "Antworten": ["Zwei", "Eine", "Drei", "Vier"],
        "RichtigeAntwort": "Zwei",
        "RichtigeAntwortMöglichkeiten": "Zwei 2",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die erste Belagerung fand 1529 statt, und die zweite, bekanntere Belagerung, 1683."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kam Wien 1683 gegen die Osmanen zur Hilfe?",
        "Antworten": ["Polen", "Spanien", "Frankreich", "Russland"],
        "RichtigeAntwort": "Polen",
        "RichtigeAntwortMöglichkeiten": "Polen litauen polen-litauen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die polnische Armee unter König Jan Sobieski spielte eine entscheidende Rolle bei der Rettung Wiens."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher berühmte osmanische Palast war das Hauptquartier der osmanischen Sultane?",
        "Antworten": ["Topkapi-Palast", "Windsor Castle", "Louvre", "Schloss Versailles"],
        "RichtigeAntwort": "Topkapi-Palast",
        "RichtigeAntwortMöglichkeiten": "Topkapi-Palast",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Topkapi-Palast ist heute ein beliebtes Museum."
    },

    //////England/////

    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk griff Großbritannien im 8. und 9. Jahrhundert häufig an?",
        "Antworten": ["Wikinger", "Römer", "Normannen", "Franzosen"],
        "RichtigeAntwort": "Wikinger",
        "RichtigeAntwortMöglichkeiten": "Wikinger normannen dänemark",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Wikinger kamen hauptsächlich aus Skandinavien und waren bekannt für ihre Raubzüge."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land griff im 9. Jahrhundert Großbritannien an und besetzte Teile davon?",
        "Antworten": ["Dänemark", "Frankreich", "Spanien", "Irland"],
        "RichtigeAntwort": "Dänemark",
        "RichtigeAntwortMöglichkeiten": "Dänemark",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Dänen kontrollierten zeitweise große Teile Englands, die als Danelaw bekannt wurden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk kam nach den Römern und bevor die Normannen England eroberten?",
        "Antworten": ["Angelsachsen", "Wikinger", "Kelten", "Franken"],
        "RichtigeAntwort": "Angelsachsen",
        "RichtigeAntwortMöglichkeiten": "Angelsachsen angeln jüten sachsen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Angelsachsen siedelten in England nach dem Fall des Römischen Reiches und vor der normannischen Eroberung."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk lebte vor den Römern in England?",
        "Antworten": ["Kelten", "Angelsachsen", "Normannen", "Wikinger"],
        "RichtigeAntwort": "Kelten",
        "RichtigeAntwortMöglichkeiten": "Kelten",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Kelten bewohnten England vor der römischen Eroberung im Jahr 43 n. Chr."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der berühmte dänische König, der England in den 11. Jahrhundert anführte?",
        "Antworten": ["König Knut", "König Harald", "König Sven", "König Gorm"],
        "RichtigeAntwort": "König Knut",
        "RichtigeAntwortMöglichkeiten": "Knut",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "König Knut der Große, auch bekannt als Knut der Große, regierte über Dänemark, Norwegen und England"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Dokument aus dem Jahr 1215 beeinflusste die englische Regierung bis ins 14. Jahrhundert?",
        "Antworten": ["Magna Carta", "Bill of Rights", "Petition of Right", "Act of Supremacy"],
        "RichtigeAntwort": "Magna Carta",
        "RichtigeAntwortMöglichkeiten": "Magna Carta",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Magna Carta legte den Grundstein für die Einschränkung der Macht des Königs"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher englische Monarch besiegte die spanische Armada 1588?",
        "Antworten": ["Elisabeth I.", "Heinrich VIII.", "Maria I.", "Eduard VI."],
        "RichtigeAntwort": "Elisabeth I.",
        "RichtigeAntwortMöglichkeiten": "Elisabeth",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die spanische Armada wurde 1588 von der Flotte unter Elisabeth I. besiegt, was Englands Stellung als aufstrebende Seemacht festigte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die große spanische Flotte, die gegen England segelte?",
        "Antworten": ["Armada", "Flotte", "Caravel", "Galeonen"],
        "RichtigeAntwort": "Armada",
        "RichtigeAntwortMöglichkeiten": "Armada",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Armada war eine große spanische Kriegsflotte, die 1588 gegen England segelte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahrhundert regierte Königin Elisabeth I. in England?",
        "Antworten": ["16. Jahrhundert", "15. Jahrhundert", "17. Jahrhundert", "18. Jahrhundert"],
        "RichtigeAntwort": "16. Jahrhundert",
        "RichtigeAntwortMöglichkeiten": "16. 16 sechszehntes 16tes",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Elisabeth I. regierte von 1558 bis 1603 und brachte England in eine Blütezeit."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die Mutter von Königin Elisabeth I.?",
        "Antworten": ["Anne Boleyn", "Maria Stuart", "Jane Seymour", "Katharina von Aragon"],
        "RichtigeAntwort": "Anne Boleyn",
        "RichtigeAntwortMöglichkeiten": "Anne Boleyn",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Anne Boleyn war die zweite Frau von Heinrich VIII. und wurde 1536 hingerichtet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "welcher berühmte Dichter und Dramatiker lebte im 16. Jahrhundert?",
        "Antworten": ["William Shakespeare", "Geoffrey Chaucer", "John Milton", "Christopher Marlowe"],
        "RichtigeAntwort": "William Shakespeare",
        "RichtigeAntwortMöglichkeiten": "William Shakespeare",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "William Shakespeare schrieb viele seiner berühmtesten Werke während der Regierungszeit von Elisabeth I."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die Schwester von Anne Boleyn, die ebenfalls am englischen Hof bekannt war?",
        "Antworten": ["Mary Boleyn", "Jane Seymour", "Katharina von Aragon", "Elizabeth Boleyn"],
        "RichtigeAntwort": "Mary Boleyn",
        "RichtigeAntwortMöglichkeiten": "Mary",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Mary Boleyn war eine frühere Geliebte von Heinrich VIII. vor Anne."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vorwurf führte zur Hinrichtung von Anne Boleyn im Jahr 1536?",
        "Antworten": ["Ehebruch", "Verrat gegen Heinrich VIII.", "Verweigerung der Scheidung", "Hexerei"],
        "RichtigeAntwort": "Ehebruch",
        "RichtigeAntwortMöglichkeiten": "Ehebruch bruder geschlechtsverkehr verrat hochverrat sex affäre fremdgehen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Anne Boleyn wurde beschuldigt, Affären mit mehreren Männern, darunter ihrem eigenen Bruder, gehabt zu haben"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Altersgruppe hatte im Mittelalter die höchste Sterblichkeitsrate?",
        "Antworten": ["Erwachsene", "Kinder", "Jugendliche", "Ältere Erwachsene"],
        "RichtigeAntwort": "Kinder",
        "RichtigeAntwortMöglichkeiten": "Kinder",
        "Schwierigkeitsgrad": "einfach",
        "Fakt": "Im Mittelalter war die Sterblichkeitsrate bei Kindern aufgrund von Krankheiten, Mangelernährung und fehlender medizinischer Versorgung besonders hoch"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Ehepartner hatte Heinrich VIII. während seiner Regierungszeit?",
        "Antworten": ["Vier", "Sechs", "Fünf", "Drei"],
        "RichtigeAntwort": "Sechs",
        "RichtigeAntwortMöglichkeiten": "Sechs 6",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Heinrich VIII. war für seine sechs Ehen bekannt, was große Auswirkungen auf die politische und religiöse Landschaft Englands hatte"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die erste Frau von Heinrich VIII., deren Scheidung den Bruch mit der katholischen Kirche auslöste?",
        "Antworten": ["Anne Boleyn", "Katherine Howard", "Jane Seymour", "Katherine von Aragon"],
        "RichtigeAntwort": "Katherine von Aragon",
        "RichtigeAntwortMöglichkeiten": "Katherine Aragon",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Heinrich VIII. wollte sich von Katherine von Aragon scheiden lassen, um Anne Boleyn zu heiraten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Religion gründete Heinrich VIII. nach seiner Trennung von der katholischen Kirche?",
        "Antworten": ["Katholizismus", "Anglikanismus", "Protestantismus", "Orthodoxie"],
        "RichtigeAntwort": "Anglikanismus",
        "RichtigeAntwortMöglichkeiten": "Anglikanismus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Heinrich VIII. gründete die anglikanische Kirche (Church of England), um seine Scheidung von Katharina von Aragon durchzusetzen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Parlament wurde 1707 gegründet und vereinte England und Schottland?",
        "Antworten": ["Englisches Parlament", "Schottisches Parlament", "Irisches Parlament", "Britisches Parlament"],
        "RichtigeAntwort": "Britisches Parlament",
        "RichtigeAntwortMöglichkeiten": "Britisches",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Britische Parlament wurde 1707 durch die Vereinigung von England und Schottland geschaffen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches tragische Ereignis traf Irland in den 1840er Jahren?",
        "Antworten": ["Pest", "Hungersnot", "Krieg", "Revolution"],
        "RichtigeAntwort": "Hungersnot",
        "RichtigeAntwortMöglichkeiten": "Hungersnot hunger",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Große Hungersnot in Irland (1845-1852) führte zu massiven Hungertoten und einer großen Auswanderungswelle."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag führte zur politischen Vereinigung von England und Schottland?",
        "Antworten": ["Act of Union", "Treaty of Edinburgh", "Treaty of London", "Union of Crowns"],
        "RichtigeAntwort": "Act of Union",
        "RichtigeAntwortMöglichkeiten": "Act Union",
        "Schwierigkeitsgrad": "einfach",
        "Fakt": "Der Act of Union von 1707 führte zur Gründung des Königreichs Großbritannien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wird das Zeitalter genannt, das nach Königin Victoria benannt ist?",
        "Antworten": ["Viktorianisches Zeitalter", "Tudor-Zeitalter", "Edwardianisches Zeitalter", "Georgisches Zeitalter"],
        "RichtigeAntwort": "Viktorianisches Zeitalter",
        "RichtigeAntwortMöglichkeiten": "Viktorianisches",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das viktorianische Zeitalter war geprägt von industriellem Fortschritt und der Expansion des britischen Empire."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Monarchin regierte Großbritannien während des 19. Jahrhunderts?",
        "Antworten": ["Queen Victoria", "Queen Elizabeth I.", "Queen Anne", "Queen Mary I."],
        "RichtigeAntwort": "Queen Victoria",
        "RichtigeAntwortMöglichkeiten": "Victoria",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Queen Victoria war die am längsten regierende britische Monarchin des 19. Jahrhunderts, ihre Herrschaft dauerte 63 Jahre."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches bedeutende Wahrzeichen wurde 1858 unter queen Victoria in London fertiggestellt?",
        "Antworten": ["Big Ben", "Tower Bridge", "Buckingham Palace", "Westminster Abbey"],
        "RichtigeAntwort": "Big Ben",
        "RichtigeAntwortMöglichkeiten": "Big Ben",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Glockenturm, heute bekannt als Big Ben, wurde 1858 fertiggestellt und ist ein Symbol Londons."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Monarch folgte direkt auf Queen Victoria?",
        "Antworten": ["Edward VII.", "George V.", "William IV.", "Elizabeth II."],
        "RichtigeAntwort": "Edward VII.",
        "RichtigeAntwortMöglichkeiten": "Edward",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Nach dem Tod von Queen Victoria im Jahr 1901 wurde ihr Sohn Edward VII. König von Großbritannien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Was begann 1642 in England?",
        "Antworten": ["Bürgerkrieg", "Industrielle Revolution", "Revolution", "Napoleonische Kriege"],
        "RichtigeAntwort": "Bürgerkrieg",
        "RichtigeAntwortMöglichkeiten": "Bürgerkrieg",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Englische Bürgerkrieg begann 1642 und war ein Konflikt zwischen den Anhängern des Königs und des Parlaments."
    },
    { //7 jährige Krieg
        "Kategorie": "Geschichte",
        "Frage": "Wann begann der Siebenjährige Krieg?",
        "Antworten": ["1756", "1740", "1763", "1776"],
        "RichtigeAntwort": "1756",
        "RichtigeAntwortMöglichkeiten": "1756",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Im Siebenjährige Krieg (1756–1763) kämpften Großbritannien, Preußen, Portugal gegen Frankreich, Österreich, Russland, Spanien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land war ein Hauptgegner von Preußen im Siebenjährigen Krieg?",
        "Antworten": ["Österreich", "Frankreich", "Russland", "Spanien"],
        "RichtigeAntwort": "Österreich",
        "RichtigeAntwortMöglichkeiten": "Österreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im Siebenjährige Krieg (1756–1763) kämpften Großbritannien, Preußen, Portugal gegen Frankreich, Österreich, Russland, Spanien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der König von Preußen während des Siebenjährigen Krieges?",
        "Antworten": ["Friedrich II.", "Ludwig XIV.", "Peter der Große", "Maria Theresia"],
        "RichtigeAntwort": "Friedrich II.",
        "RichtigeAntwortMöglichkeiten": "Friedrich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Friedrich II., auch Friedrich der Große genannt, führte Preußen durch den Siebenjährigen Krieg gegen Frankreich und Österreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete den Siebenjährigen Krieg?",
        "Antworten": ["Frieden von Paris", "Vertrag von Versailles", "Frieden von Utrecht", "Vertrag von Tordesillas"],
        "RichtigeAntwort": "Frieden von Paris",
        "RichtigeAntwortMöglichkeiten": "Frieden Paris",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im Siebenjährige Krieg (1756–1763) kämpften Großbritannien, Preußen, Portugal gegen Frankreich, Österreich, Russland, Spanien"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Gegen welches Land kämpfte Großbritannien im Siebenjährigen Krieg um die Kontrolle über Nordamerika?",
        "Antworten": ["Frankreich", "Spanien", "Portugal", "Holland"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Konflikt in Nordamerika während des Siebenjährigen Krieges wird oft als der Indianerkrieg bezeichnet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Krieg, in dem im 18. Jahrhundert alle europäischen Großmächte beteiligt waren?",
        "Antworten": ["Siebenjähriger Krieg", "Napoleonischer Krieg", "Dreißigjähriger Krieg", "Krieg der Spanischen Erbfolge"],
        "RichtigeAntwort": "Siebenjähriger Krieg",
        "RichtigeAntwortMöglichkeiten": "Siebenjähriger 7 sieben",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im Siebenjährige Krieg (1756–1763) kämpften Großbritannien, Preußen, Portugal gegen Frankreich, Österreich, Russland, Spanien"
    },
    { //80 Jährige Krieg Niederlande
        "Kategorie": "Geschichte",
        "Frage": "Welcher Krieg markierte 1581 die Unabhängigkeit der Niederlande von Spanien?",
        "Antworten": ["Der Achtzigjährige Krieg", "Die Französische Revolution", "Der Dreißigjährige Krieg", "Die Englische Revolution"],
        "RichtigeAntwort": "Der Achtzigjährige Krieg",
        "RichtigeAntwortMöglichkeiten": "Achtzigjährige 80 Achtzig",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Achtzigjährige Krieg war ein langwieriger Konflikt zwischen den niederländischen Provinzen und dem spanischen Habsburgerreich, der zur Unabhängigkeit der Niederlande führte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche historischen Friedensverträge führten 1648 zur Anerkennung der Unabhängigkeit der Niederlande?",
        "Antworten": ["Der Westfälische Frieden", "Die Gründung der VOC", "Die Schlacht bei Waterloo", "Der Berliner Kongress"],
        "RichtigeAntwort": "Der Westfälische Frieden",
        "RichtigeAntwortMöglichkeiten": "Der Westfälische Frieden",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Westfälische Frieden betsand aus Zwei Friedensverträgen die 1648 in Münster und Osnabrück geschlossen wurden"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Krieg fand im 16. und 17. Jahrhundert zwischen Spanien und Niederlande statt?",
        "Antworten": ["Der Achtzigjährige Krieg", "Der Dreißigjährige Krieg", "Der Siebenjährige Krieg", "Der Napoleonskrieg"],
        "RichtigeAntwort": "Der Achtzigjährige Krieg",
        "RichtigeAntwortMöglichkeiten": "Der Achtzigjährige Krieg",
        "Schwierigkeitsgrad": "extrems",
        "Fakt": "Der Achtzigjährige Krieg dauerte von 1568 bis 1648 und führte zur Unabhängigkeit der Niederlande von der spanischen Herrschaft."
    },
    {//Deutsche Geschichte
        "Kategorie": "Geschichte",
        "Frage": "Welches heutige Land war im Mittelalter der größte Bestandteil des Heiligen Römischen Reiches?",
        "Antworten": ["Deutschland", "Frankreich", "England", "Spanien"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Heilige Römische Reich war ein Zusammenschluss vieler kleinerer Fürstentümer und Städte im heutigen Deutschland"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche historische Figur war der erste König des vereinigten Deutschlands nach der Napoleonischen Ära?",
        "Antworten": ["Wilhelm I.", "Friedrich der Große", "Otto von Bismarck", "Karl der Große"],
        "RichtigeAntwort": "Wilhelm I.",
        "RichtigeAntwortMöglichkeiten": "Wilhelm",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Wilhelm I. wurde 1871 zum ersten Kaiser des neu gegründeten Deutschen Reiches gekrönt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher preußische König war bekannt als der Große?",
        "Antworten": ["Friedrich II.", "Wilhelm I.", "Friedrich Wilhelm III.", "Otto von Bismarck"],
        "RichtigeAntwort": "Friedrich II.",
        "RichtigeAntwortMöglichkeiten": "Friedrich",
        "Schwierigkeitsgrad": "",
        "Fakt": "Friedrich der Große führte Preußen zu militärischen Erfolgen im Siebenjährigen Krieg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher König sagte: 'Der König ist der erste Diener des Staates'?",
        "Antworten": ["Friedrich der Große", "Wilhelm II.", "Friedrich Wilhelm I.", "Friedrich III."],
        "RichtigeAntwort": "Friedrich der Große",
        "RichtigeAntwortMöglichkeiten": "Friedrich",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Friedrich der Große führte Preußen zu militärischen Erfolgen im Siebenjährigen Krieg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste König von Preußen?",
        "Antworten": ["Friedrich I.", "Friedrich der Große", "Wilhelm I.", "Friedrich Wilhelm I."],
        "RichtigeAntwort": "Friedrich I.",
        "RichtigeAntwortMöglichkeiten": "Friedrich I.",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Friedrich I. wurde 1701 zum ersten König von Preußen gekrönt"
    },
    { //Otto von Bismark und Vereinigung deutschlands
        "Kategorie": "Geschichte",
        "Frage": "Welche Person vereinigte das Deutsche Kaiserreich?",
        "Antworten": ["Otto von Bismarck", "Wilhelm I.", "Friedrich der Große", "Helmut Kohl"],
        "RichtigeAntwort": "Otto von Bismarck",
        "RichtigeAntwortMöglichkeiten": "Otto von Bismarck",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Otto von Bismarck "
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde Otto von Bismarck Reichskanzler?",
        "Antworten": ["1871", "1862", "1888", "1848"],
        "RichtigeAntwort": "1871",
        "RichtigeAntwortMöglichkeiten": "1871",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "1871 wurde das Deutsche Reich gegründet, und Bismarck wurde zum Reichskanzler ernannt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lautet der Name des Bismarck'schen Bündnisses, das Preußen mit anderen europäischen Mächten zur Wahrung des Friedens schloss?",
        "Antworten": ["Dreikaiserbund", "Zweibund", "Dreibund", "Vierbund"],
        "RichtigeAntwort": "Dreibund",
        "RichtigeAntwortMöglichkeiten": "Dreibund drei",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Dreibund war ein Bündnis zwischen Deutschland, Österreich-Ungarn und Italien, das 1882 geschlossen wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer sagte, dass Konflikte durch „Eisen und Blut“ entschieden werden?",
        "Antworten": ["Otto von Bismarck", "Wilhelm I.", "Napoleon Bonaparte", "Helmuth von Moltke"],
        "RichtigeAntwort": "Otto von Bismarck",
        "RichtigeAntwortMöglichkeiten": "Otto von Bismarck",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Bismarck hielt diese Rede 1862, bevor er die deutsche Vereinigung vorantrieb."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher europäische Krieg fand 1870/71 statt?",
        "Antworten": ["Deutsch-Französischer Krieg", "Erster Weltkrieg", "Deutsch-Österreichischer Krieg", "Napoleonische Kriege"],
        "RichtigeAntwort": "Deutsch-Französischer Krieg",
        "RichtigeAntwortMöglichkeiten": "Deutsch-Französischer deutsch frankreich französischer deutscher französisch",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Deutsch-Französische Krieg führte zur Gründung des Deutschen Reiches und zur Entstehung von Frankreichs Dritte Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welchen Titel trug Otto von Bismarck im Deutschen Reich?",
        "Antworten": ["Reichskanzler", "Kaiser", "König", "Fürst"],
        "RichtigeAntwort": "Reichskanzler",
        "RichtigeAntwortMöglichkeiten": "Reichskanzler kanzler",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Bismarck war der erste Reichskanzler des 1871 gegründeten Deutschen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Kriege führte Otto von Bismarck zur Einigung Deutschlands?",
        "Antworten": ["Drei", "Zwei", "Vier", "Fünf"],
        "RichtigeAntwort": "Drei",
        "RichtigeAntwortMöglichkeiten": "Drei 3",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Bismarck führte drei Kriege gegen Dänemark, Österreich und Frankreich, die zur deutschen Einigung führten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Kaiser des Deutschen Kaiserreichs?",
        "Antworten": ["Wilhelm I.", "Friedrich III.", "Wilhelm II.", "Otto von Bismarck"],
        "RichtigeAntwort": "Wilhelm I.",
        "RichtigeAntwortMöglichkeiten": "Wilhelm",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Wilhelm I. wurde 1871 zum ersten Kaiser,während Otto von Bismarck zum Reichskanzler wurde"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welchen wichtigen Vertrag schloss Otto von Bismarck nach dem Deutsch-Französischen Krieg?",
        "Antworten": ["Frankfurter Frieden", "Wiener Kongress", "Vertrag von Versailles", "Prager Frieden"],
        "RichtigeAntwort": "Frankfurter Frieden",
        "RichtigeAntwortMöglichkeiten": "Frankfurter",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Frankfurter Frieden von 1871 führte zum Gebietsverlust Elsass-Lothringens von Frankreich an Deutschland"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gebiet bekam Deutschland nach dem Deutsch-Französischen Krieg 1871?",
        "Antworten": ["Elsass-Lothringen", "Saarland", "Bayern", "Versailles"],
        "RichtigeAntwort": "Elsass-Lothringen",
        "RichtigeAntwortMöglichkeiten": "Elsass-Lothringen Lothringen Elsass",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Nach dem Deutsch-Französischen Krieg 1871 annektierte Deutschland Elsass-Lothringen von Frankreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land versuchte Bismarck durch seine Außenpolitik von Europa zu isolieren?",
        "Antworten": ["Frankreich", "Österreich", "Russland", "Italien"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Bismarck isolierte Frankreich diplomatisch, um die Gefahr eines französischen Rachekriegs nach 1871 zu minimieren."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer führte 1889 die gesetzliche Rentenversicherung in Deutschland ein?",
        "Antworten": ["Otto von Bismarck", "Wilhelm I.", "Friedrich III.", "Ludwig Erhard"],
        "RichtigeAntwort": "Otto von Bismarck",
        "RichtigeAntwortMöglichkeiten": "Otto Bismarck",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Otto von Bismarck führte 1889 zur Absicherung der Arbeiter die gesetzliche Rentenversicherung ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Königreich führte die Vereinigung Deutschlands 1871 an?",
        "Antworten": ["Preußen", "Bayern", "Sachsen", "Hessen"],
        "RichtigeAntwort": "Preußen",
        "RichtigeAntwortMöglichkeiten": "Preußen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Preußen spielte die führende Rolle in der Vereinigung Deutschlands unter Otto von Bismarck"
    },

    /////Kolonialisierung/////

    { //Spanien und Portugal
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Brasilien im 16. Jahrhundert?",
        "Antworten": ["Portugal", "Spanien", "Niederlande", "England"],
        "RichtigeAntwort": "Portugal",
        "RichtigeAntwortMöglichkeiten": "Portugal",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Portugal begann 1500 mit der Eroberung Brasiliens, das später die wichtigste Kolonie des Landes wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte die Philippinen im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Spanien kolonialisierte die Philippinen im Jahr 1565, benannt nach König Philipp II."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte die größten Teile Süd- und Nordamerikas?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Abgesehen von Brasilien nahm Spanien ganz Südamerika bis hin zu Teilen der heutigen Usa ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Chile im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Chile blieb bis zum frühen 19. Jahrhundert unter spanischer Herrschaft"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Argentinien im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "Niederlande"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Argentiniens Hauptstadt, Buenos Aires, wurde 1536 unter Spanien gegründet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Mexiko im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Hauptstadt Mexiko-Stadt wurde auf den Ruinen von Tenochtitlan erbaut"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Peru im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Hauptstadt Lima 1535 gegründet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Kolumbien im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Niederlande", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kolumbien wurde im 16. Jahrhundert von Spanien eingenommen und wurde als Neu-Granada bekannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Venezuela im 16. Jahrhundert?",
        "Antworten": ["Spanien", "Portugal", "Frankreich", "England"],
        "RichtigeAntwort": "Spanien",
        "RichtigeAntwortMöglichkeiten": "Spanien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Spanien kolonialisierte Venezuela, und Caracas wurde 1567 gegründet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "WAs ist ein anderes Wort für Kolonialisieren?",
        "Antworten": ["Besiedeln", "Verteidigen", "Finanzieren", "Gründen"],
        "RichtigeAntwort": "Besiedeln",
        "RichtigeAntwortMöglichkeiten": "Besiedeln Ansiedlung Besiedelung Landnahme Erschließung einnehmen erobern angreifen nutzen unterwerfen besetzen annexieren",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Kolonialisierung bezieht sich auf das Besiedeln und Kontrollieren eines fremden Gebiets durch eine andere Nation."
    },
    { //Kolonialisieren von Europa
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kolonialisierte Indien im 18. und 19. Jahrhundert?",
        "Antworten": ["Großbritannien", "Frankreich", "Spanien", "Portugal"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischens",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Großbritannien etablierte die Britische Ostindien-Kompanie, die ab dem 18. Jahrhundert eine dominierende Rolle in Indien spielte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land gründete die Kolonie Kap der Guten Hoffnung?",
        "Antworten": ["Niederlande", "Spanien", "Portugal", "Frankreich"],
        "RichtigeAntwort": "Niederlande",
        "RichtigeAntwortMöglichkeiten": "Niederlande holland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Niederländer gründeten die Kolonie Kap der Guten Hoffnung 1652 als Handelsstation an der Südspitze Afrikas."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land gründete die Kolonie Kongo?",
        "Antworten": ["Belgien", "Frankreich", "Niederlande", "Portugal"],
        "RichtigeAntwort": "Belgien",
        "RichtigeAntwortMöglichkeiten": "Belgien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Belgier König Leopold II. gründete den Freistaat Kongo, der später zu Belgisch-Kongo wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kontrollierte die Kolonie Algerien?",
        "Antworten": ["Frankreich", "Großbritannien", "Spanien", "Portugal"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Algeriens blieb bis zur Unabhängigkeit 1962 unter französischer Kontrolle blieb."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land besetzte das heutige Indonesien im 17. Jahrhundert?",
        "Antworten": ["Niederlande", "Spanien", "Frankreich", "Großbritannien"],
        "RichtigeAntwort": "Niederlande",
        "RichtigeAntwortMöglichkeiten": "Niederlande",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Niederländer gründeten die Niederländische Ostindien-Kompanie und kolonialisierten Teile Indonesiens ab dem 17. Jahrhundert."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land nahm Australien im 19. Jahrhundert ein?",
        "Antworten": ["Großbritannien", "Frankreich", "Niederlande", "Portugal"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Großbritannien begann 1788 mit der Kolonialisierung Australiens, das ursprünglich als Sträflingskolonie gegründet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kontrollierte das Gebiet von Hongkong bis 1997?",
        "Antworten": ["Großbritannien", "Portugal", "Niederlande", "Spanien"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Großbritannien kontrollierte Hongkong von 1842 bis 1997, als die Stadt an China zurückgegeben wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land nahm Namibia ein?",
        "Antworten": ["Deutschland", "Portugal", "Frankreich", "Großbritannien"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland deutsches",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Deutschland kolonialisierte Namibia, das früher als Deutsch-Südwestafrika bekannt war, von 1884 bis 1915."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kolonialisierte Kanada zuerst?",
        "Antworten": ["Frankreich", "Spanien", "Portugal", "Niederlande"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Frankreich begann 1534 vor Enland mit der Kolonialisierung von Kanada"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land nahm die Vereinigten Staaten von Amerika im 17. Jahrhundert ein?",
        "Antworten": ["Großbritannien", "Frankreich", "Spanien", "Niederlande"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Großbritannien gründete 1607 die erste permanente englische Kolonie in Jamestown, Virginia, die zur Grundlage der USA wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Südafrika im 17. Jahrhundert?",
        "Antworten": ["Niederlande", "Frankreich", "Spanien", "Großbritannien"],
        "RichtigeAntwort": "Niederlande",
        "RichtigeAntwortMöglichkeiten": "Niederlande",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Niederländer gründeten 1652 eine Handelsstation am Kap der Guten Hoffnung"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kontrollierte Madagaskar?",
        "Antworten": ["Frankreich", "Spanien", "Niederlande", "Portugal"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Frankreich machte Madagaskar 1897 zu einer Kolonie, die bis zur Unabhängigkeit 1960 unter französischer Kontrolle stand."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land begann 1652 mit der Kolonialisierung von Neuseeland?",
        "Antworten": ["Niederlande", "Großbritannien", "Frankreich", "Portugal"],
        "RichtigeAntwort": "Niederlande",
        "RichtigeAntwortMöglichkeiten": "Niederlande holland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Niederländer entdeckten Neuseeland 1642, begannen aber erst 1652 mit der Erschließung der Region, bevor die Briten die Kolonie übernahmen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kontrollierte Vietnam, Laos und Kambodscha im 19. und 20. Jahrhundert?",
        "Antworten": ["Frankreich", "Großbritannien", "Niederlande", "Spanien"],
        "RichtigeAntwort": "Frankreich",
        "RichtigeAntwortMöglichkeiten": "Frankreich",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Frankreich kolonialisierte Indochina, das heutige Vietnam, Laos und Kambodscha, ab 1887 bis zur Unabhängigkeit 1954."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches europäische Land kontrollierte Ägypten während des 19. Jahrhunderts?",
        "Antworten": ["Großbritannien", "Frankreich", "Spanien", "Portugal"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Großbritannien übernahm 1882 die Kontrolle über Ägypten und behielt es bis zur Unabhängigkeit 1952."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Ghana im 19. Jahrhundert?",
        "Antworten": ["Großbritannien", "Frankreich", "Deutschland", "Portugal"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Großbritannien begann 1821 mit der Kolonialisierung der Goldküste, die später als Ghana bekannt wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land kolonialisierte Angola?",
        "Antworten": ["Portugal", "Frankreich", "Spanien", "Niederlande"],
        "RichtigeAntwort": "Portugal",
        "RichtigeAntwortMöglichkeiten": "Portugal",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Portugal begann 1575 mit der Kolonialisierung von Angola, das bis zur Unabhängigkeit 1975 portugiesisch blieb."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche war die größte Kolonie des Britischen Reiches?",
        "Antworten": ["Indien", "Kanada", "Australien", "Südafrika"],
        "RichtigeAntwort": "Indien",
        "RichtigeAntwortMöglichkeiten": "Indien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Indien war die größte und wirtschaftlich wichtigste Kolonie des Britischen Empire, bekannt als die  des Empire."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches war das größte Kolonialreich in der Geschichte?",
        "Antworten": ["Britisches Reich", "Frankreich", "China", "Spanien"],
        "RichtigeAntwort": "Britisches Reich",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Britische Empire war das größte Kolonialreich der Geschichte, und Indien war die bedeutendste und größte Kolonie innerhalb dieses Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche war die wichtigste Kolonie des Britischen Empire?",
        "Antworten": ["Indien", "Kanada", "Australien", "Südafrika"],
        "RichtigeAntwort": "Indien",
        "RichtigeAntwortMöglichkeiten": "Indien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Indien war die größte und wirtschaftlich wichtigste K"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Kolonie war flächenmäßig die größte innerhalb des Britischen Empire?",
        "Antworten": ["Kanada", "Indien", "Australien", "Südafrika"],
        "RichtigeAntwort": "Kanada",
        "RichtigeAntwortMöglichkeiten": "Kanada",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kanada war die größte Kolonie des Britischen Empire nach Fläche, mit einer Ausdehnung von über 9 Millionen Quadratkilometern."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Konferenz legte die Regeln für die koloniale Aufteilung Afrikas fest?",
        "Antworten": ["Berliner Konferenz", "Wiener Kongress", "Friedensvertrag von Versailles", "Jalta-Konferenz"],
        "RichtigeAntwort": "Berliner Konferenz",
        "RichtigeAntwortMöglichkeiten": "Berliner",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Berliner Konferenz von 1884-1885 regelte die koloniale Aufteilung Afrikas unter den europäischen Mächten, um Konflikte zu vermeiden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann die Berliner Konferenz zur Aufteilung Afrikas?",
        "Antworten": ["1884", "1875", "1900", "1890"],
        "RichtigeAntwort": "1884",
        "RichtigeAntwortMöglichkeiten": "1884",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Berliner Konferenz begann im Jahr 1884 und war ein entscheidendes Ereignis für die koloniale Aufteilung Afrikas."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer leitete die Berliner Konferenz zur Aufteilung Afrikas?",
        "Antworten": ["Otto von Bismarck", "Winston Churchill", "Napoleon III.", "Leopold II."],
        "RichtigeAntwort": "Otto von Bismarck",
        "RichtigeAntwortMöglichkeiten": "Otto Bismarck",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Otto von Bismarck, der deutsche Kanzler, leitete die Berliner Konferenz und spielte eine zentrale Rolle bei der Regelung der kolonialen Aufteilung Afrikas."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Kontinent wurde im 19. Jahrhundert von Europa kolonialisiert?",
        "Antworten": ["Afrika", "Asien", "Südamerika", "Ozeanien"],
        "RichtigeAntwort": "Afrika",
        "RichtigeAntwortMöglichkeiten": "Afrika",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Im 19. Jahrhundert erlebte Afrika eine umfassende Kolonialisierung durch europäische Mächte, insbesondere während der sogenannten 'Scramble for Africa'."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land war das erste auf der Welt, das den Sklavenhandel offiziell abschaffte?",
        "Antworten": ["Dänemark", "Großbritannien", "Haiti", "Vereinigte Staaten"],
        "RichtigeAntwort": "Dänemark",
        "RichtigeAntwortMöglichkeiten": "Dänemark",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Dänemark schaffte den transatlantischen Sklavenhandel 1792 ab und war damit das erste Land, das diesen Handel offiziell verbot."
    },
    {//Schweden norwegen finnland
        "Kategorie": "Geschichte",
        "Frage": "Welches Land hatte Schweden im 17. Jahrhundert oft unter Kontrolle?",
        "Antworten": ["Finnland", "Dänemark", "Norwegen", "Island"],
        "RichtigeAntwort": "Finnland",
        "RichtigeAntwortMöglichkeiten": "Finnland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im 17. Jahrhundert war Finnland Teil des Schwedischen Reiches, bevor es 1809 an Russland abgetreten wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste König von Schweden?",
        "Antworten": ["Gustav I. Vasa", "Karl XII.", "Erik XIV.", "Gustav II. Adolf"],
        "RichtigeAntwort": "Gustav I. Vasa",
        "RichtigeAntwortMöglichkeiten": "Gustav Vasa",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Gustav I. Vasa wurde 1523 König von Schweden und ist als Gründer des modernen schwedischen Staates bekannt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher König vereinte Norwegen im 9. Jahrhundert?",
        "Antworten": ["Harald Hårfagre", "Olav Tryggvason", "Magnus Haraldsson", "Erik Blut-Axe"],
        "RichtigeAntwort": "Harald Hårfagre",
        "RichtigeAntwortMöglichkeiten": "Harald Hårfagre Harfagre",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Harald Hårfagre war der erste König, der Norwegen im 9. Jahrhundert vereinte und gilt als der Begründer des norwegischen Königreichs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Union vereinte Schweden, Norwegen und Dänemark im 14. Jahrhundert?",
        "Antworten": ["Kalmar Union", "Schweden-Union", "Nordische Union", "Dänen-Schweden-Koalition"],
        "RichtigeAntwort": "Kalmar Union",
        "RichtigeAntwortMöglichkeiten": "Kalmar",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Kalmar Union wurde 1397 gegründet und verband die drei Königreiche Schweden, Norwegen und Dänemark unter einem Monarchen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde Norwegen unabhängig von Schweden?",
        "Antworten": ["1905", "1814", "1821", "1898"],
        "RichtigeAntwort": "1905",
        "RichtigeAntwortMöglichkeiten": "1905",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Norwegen wurde 1905 unabhängig von Schweden nach einem friedlichen Referendum, das die Trennung von der Union beschloss."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Vertrag, der 1905 die Unabhängigkeit Norwegens von Schweden bestätigte?",
        "Antworten": ["Vertrag von Karlstad", "Vertrag von Oslo", "Vertrag von Kiel", "Vertrag von Stockholm"],
        "RichtigeAntwort": "Vertrag von Karlstad",
        "RichtigeAntwortMöglichkeiten": "Vertrag von Karlstad",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von Karlstad, unterzeichnet 1905, regelte die Bedingungen für die Unabhängigkeit Norwegens von Schweden."
    },
    {//Nordischer Krieg
        "Kategorie": "Geschichte",
        "Frage": "Welches Land führte den Großen Nordischen Krieg von 1700 bis 1721 gegen Schweden an?",
        "Antworten": ["Russland", "Dänemark", "Preußen", "Norwegen"],
        "RichtigeAntwort": "Russland",
        "RichtigeAntwortMöglichkeiten": "Russland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Russland, unter der Führung von Peter dem Großen, war einer der Hauptgegner Schwedens im Großen Nordischen Krieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete der Große Nordische Krieg?",
        "Antworten": ["1721", "1715", "1700", "1730"],
        "RichtigeAntwort": "1721",
        "RichtigeAntwortMöglichkeiten": "1721",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Große Nordische Krieg endete 1721 mit dem Frieden von Nystad, der das Ende der schwedischen Großmachtperiode markierte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gebiet erlangte Russland nach dem Großen Nordischen Krieg durch den Frieden von Nystad?",
        "Antworten": ["Baltische Staaten", "Finnland", "Polen", "Schlesien"],
        "RichtigeAntwort": "Baltische Staaten",
        "RichtigeAntwortMöglichkeiten": "Baltische estland lettland litauen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Durch den Frieden von Nystad erhielt Russland die Kontrolle über die Baltischen Staaten, darunter Estland, Livland und Kurland."
    },
    {//Russland
        "Kategorie": "Geschichte",
        "Frage": "Welcher Zar reformierte Russland im 17. Jahrhundert?",
        "Antworten": ["Peter der Große", "Iwan der Schreckliche", "Nikolaus II.", "Alexander II."],
        "RichtigeAntwort": "Peter der Große",
        "RichtigeAntwortMöglichkeiten": "Peter",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Peter der Große führte umfassende Reformen in Russland durch, darunter die Modernisierung der Armee und der Verwaltung sowie den Bau der neuen Hauptstadt St. Petersburg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die frühere Hauptstadt von Russland?",
        "Antworten": ["St. Petersburg", "Moskau", "Kiew", "Nischni Nowgorod"],
        "RichtigeAntwort": "St. Petersburg",
        "RichtigeAntwortMöglichkeiten": "Petersburg peters",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "St. Petersburg wurde von Peter dem Großen gegründet und diente als neue Hauptstadt Russlands, um den Zugang zum Westen zu verbessern."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die wichtigste Frau des Russisschen Kaiserreichs?",
        "Antworten": ["Katharina die Große", "Anna Iwanowna", "Elisabeth", "Maria Fjodorowna"],
        "RichtigeAntwort": "Katharina die Große",
        "RichtigeAntwortMöglichkeiten": "Katharina",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Katharina die Große setzte zahlreiche Reformen in Russland um und trug wesentlich zur Modernisierung und Expansion des Landes bei."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Zar regierte Russland während des Krimkriegs (1853-1856)?",
        "Antworten": ["Nikolaus I.", "Alexander II.", "Peter der Große", "Iwan IV."],
        "RichtigeAntwort": "Nikolaus I.",
        "RichtigeAntwortMöglichkeiten": "Nikolaus I.",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Nikolaus I. war der Zar von Russland, als der Krimkrieg stattfand, ein Konflikt gegen eine Koalition aus dem Vereinigten Königreich, Frankreich, dem Osmanischen Reich und Sardinien."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Zar von Russland?",
        "Antworten": ["Iwan IV.", "Peter der Große", "Alexander I.", "Nikolaus II."],
        "RichtigeAntwort": "Iwan IV.",
        "RichtigeAntwortMöglichkeiten": "Iwan Wassiljewitsch Schreckliche",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Iwan IV., auch bekannt als Iwan der Schreckliche, war der erste Herrscher, der sich zum Zar von Russland krönte, und gründete das russische Zarentum im Jahr 1547."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher russische Zar führte 1812 die russischen Truppen gegen Napoleon Bonaparte und dessen Grande Armée?",
        "Antworten": ["Alexander I.", "Nikolaus I.", "Peter der Große", "Katharina die Große"],
        "RichtigeAntwort": "Alexander I.",
        "RichtigeAntwortMöglichkeiten": "Alexander",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Alexander I. führte die russischen Truppen gegen Napoleon im Jahr 1812 und spielte eine Schlüsselrolle bei Napoleons Niederlage in Russland."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war die Frau von Zar Peter III.?",
        "Antworten": ["Katharina die Große", "Anna Leopoldowna", "Maria Fjodorowna", "Elisabeth von Russland"],
        "RichtigeAntwort": "Katharina die Große",
        "RichtigeAntwortMöglichkeiten": "Katharina",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Katharina die Große war ursprünglich die Frau von Zar Peter III. und übernahm nach einem Staatsstreich 1762 die Herrschaft in Russland."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der letzte Zar von Russland?",
        "Antworten": ["Nikolaus II.", "Alexander III.", "Peter III.", "Iwan VI."],
        "RichtigeAntwort": "Nikolaus II.",
        "RichtigeAntwortMöglichkeiten": "Nikolaus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Nikolaus II. regierte von 1894 bis zu seiner Abdankung im Jahr 1917 und war der letzte Zar des Russischen Reiches."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welchen Titel trugen die Herrscher vom Russischen Kaiserreich?",
        "Antworten": ["Zar", "Kaiser", "König", "Fürst"],
        "RichtigeAntwort": "Zar",
        "RichtigeAntwortMöglichkeiten": "Zar",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Titel 'Zar' wurde von russischen Herrschern bis zur Abdankung von Nikolaus II. im Jahr 1917 verwendet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land begann die Industrielle Revolution?",
        "Antworten": ["Großbritannien", "Frankreich", "Deutschland", "USA"],
        "RichtigeAntwort": "Großbritannien",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Industrielle Revolution begann im späten 18. Jahrhundert in Großbritannien und führte zu tiefgreifenden wirtschaftlichen und sozialen Veränderungen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Erfindung wardie wichtigste der Industriellen Revolution?",
        "Antworten": ["Dampfmaschine", "Spinnmaschine", "Lokomotive", "Webstuhl"],
        "RichtigeAntwort": "Dampfmaschine",
        "RichtigeAntwortMöglichkeiten": "Dampfmaschine",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "James Watt verbesserte die Dampfmaschine in den 1760er Jahren, was zu ihrer breiten Anwendung in der Industrie führte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Rohstoff war der wichtigste in der Industriellen Revolution?",
        "Antworten": ["Kohle", "Eisen", "Holz", "Wolle"],
        "RichtigeAntwort": "Kohle",
        "RichtigeAntwortMöglichkeiten": "Kohle",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Kohle war der wichtigste Energieträger der Industriellen Revolution, da sie die Dampfmaschinen und die Metallproduktion antrieb."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Transportmittel revolutionierte den Waren- und Personentransport während der Industriellen Revolution?",
        "Antworten": ["Eisenbahn", "Automobil", "Schiff", "Flugzeug"],
        "RichtigeAntwort": "Eisenbahn",
        "RichtigeAntwortMöglichkeiten": "Eisenbahn dampfmaschiene lockomotive bahn",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Eisenbahn ermöglichte schnelle und kostengünstige Transporte, was entscheidend für die Expansion der Industrie war."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer entwickelte den mechanischen Webstuhl?",
        "Antworten": ["Edmund Cartwright", "Richard Arkwright", "James Watt", "George Stephenson"],
        "RichtigeAntwort": "Edmund Cartwright",
        "RichtigeAntwortMöglichkeiten": "Edmund Cartwright",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Edmund Cartwright erfand 1785 den mechanischen Webstuhl, der die Effizienz der Textilproduktion erheblich steigerte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Epoche prägte das 18. Jahrhundert maßgeblich?",
        "Antworten": ["Aufklärung", "Renaissance", "Mittelalter", "Reformation"],
        "RichtigeAntwort": "Aufklärung",
        "RichtigeAntwortMöglichkeiten": "Aufklärung",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Aufklärung war eine intellektuelle Bewegung im 18. Jahrhundert, die Vernunft und Wissenschaft betonte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis ziehte sich durch die ganze Welt im 19. Jahrhundert?",
        "Antworten": ["Industrielle Revolution", "Agrarrevolution", "Digitale Revolution", "Verkehrsrevolution"],
        "RichtigeAntwort": "Industrielle Revolution",
        "RichtigeAntwortMöglichkeiten": "Industrielle",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Industrielle Revolution veränderte die Produktionsweisen grundlegend und führte zu einer urbanen Gesellschaft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer entwickelte die Dampfmaschiene maßgeblich weiter?",
        "Antworten": ["James Watt", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
        "RichtigeAntwort": "James Watt",
        "RichtigeAntwortMöglichkeiten": "James Watt",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "James Watts Verbesserungen an der Dampfmaschine trugen wesentlich zur Beschleunigung der Industriellen Revolution bei."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer erfand die erste funktionsfähige Dampfmaschine?",
        "Antworten": ["Thomas Newcomen", "James Watt", "George Stephenson", "Robert Fulton"],
        "RichtigeAntwort": "Thomas Newcomen",
        "RichtigeAntwortMöglichkeiten": "Thomas Newcomen",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Thomas Newcomen entwickelte 1712 die erste funktionsfähige Dampfmaschine, die zur Wasserhebung in Bergwerken genutzt wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand die Deutsche Revolution statt?",
        "Antworten": ["1848", "1815", "1866", "1871"],
        "RichtigeAntwort": "1848",
        "RichtigeAntwortMöglichkeiten": "1848",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Deutsche Revolution von 1848/49 war Teil einer europaweiten Welle von Aufständen gegen die monarchische Herrschaft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das politische Bündnis der deutschen Staaten, das 1815 gegründet wurde?",
        "Antworten": ["Deutscher Bund", "Heiliges Römisches Reich", "Norddeutscher Bund", "Zollverein"],
        "RichtigeAntwort": "Deutscher Bund",
        "RichtigeAntwortMöglichkeiten": "Deutscher-bund",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Deutsche Bund wurde 1815 nach dem Wiener Kongress gegründet und bestand aus 39 deutschen Staaten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Staat dominierte den Deutschen Bund anfangs?",
        "Antworten": ["Österreich", "Preußen", "Bayern", "Sachsen"],
        "RichtigeAntwort": "Österreich",
        "RichtigeAntwortMöglichkeiten": "Österreich",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Österreich war bis zur Auflösung des Deutschen Bundes 1866 die führende Macht innerhalb des Bundes."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann fand der Deutsch-Österreichische Krieg statt, der auch als Deutscher Krieg bekannt ist?",
        "Antworten": ["1866", "1848", "1871", "1850"],
        "RichtigeAntwort": "1866",
        "RichtigeAntwortMöglichkeiten": "1866",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Deutsch-Österreichische Krieg 1866 führte zur Auflösung des Deutschen Bundes und zur Gründung des Norddeutschen Bundes unter preußischer Führung."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr fand der Deutsch-Dänische Krieg statt?",
        "Antworten": ["1864", "1850", "1866", "1870"],
        "RichtigeAntwort": "1864",
        "RichtigeAntwortMöglichkeiten": "1864",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Deutsch-Dänische Krieg 1864 endete mit dem Sieg Preußens und Österreichs über Dänemark und führte zur Annexion von Schleswig durch Preußen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann wurde die Doppelmonarchie Österreich-Ungarn gegründet?",
        "Antworten": ["1867", "1871", "1859", "1889"],
        "RichtigeAntwort": "1867",
        "RichtigeAntwortMöglichkeiten": "1867",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Doppelmonarchie Österreich-Ungarn wurde 1867 durch den Ausgleich (Kompromiss) zwischen Österreich und Ungarn gegründet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Kaiser von Österreich nach der Gründung der Doppelmonarchie?",
        "Antworten": ["Franz Joseph I.", "Franz Ferdinand", "Karl I.", "Maximilian I."],
        "RichtigeAntwort": "Franz Joseph I.",
        "RichtigeAntwortMöglichkeiten": "Franz Joseph",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Franz Joseph I. regierte als Kaiser von Österreich von 1848 bis 1916 und als Kaiser von Österreich-Ungarn nach dem Ausgleich von 1867."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Mit welchem Land gründete Österreich eine Doppelmonarchie?",
        "Antworten": ["Ungarn", "Polen", "Schweden", "Bohemia"],
        "RichtigeAntwort": "Ungarn",
        "RichtigeAntwortMöglichkeiten": "Ungarn",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Österreich gründete 1867 die Doppelmonarchie Österreich-Ungarn in einem politischen Ausgleichsprozess mit Ungarn, um die Verwaltung und das politische Gewicht zwischen beiden Regionen zu teilen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Vereinbarung führte 1815 zur Schaffung des Deutschen Bunds",
        "Antworten": ["Wiener Kongress", "Pariser Frieden", "Friedensvertrag von Versailles", "Kongress von Berlin"],
        "RichtigeAntwort": "Wiener Kongress",
        "RichtigeAntwortMöglichkeiten": "Wiener Kongress",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Wiener Kongress 1815 führte zur Schaffung des Deutschen Bundes, einem lockeren Zusammenschluss deutscher Staaten, in den Österreich eine wichtige Rolle spielte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis führte zur Auflösung des Heiligen Römischen Reiches im Jahr 1806?",
        "Antworten": ["Napoleonische Kriege", "Französische Revolution", "Wiener Kongress", "Zweiter Weltkrieg"],
        "RichtigeAntwort": "Napoleonische Kriege",
        "RichtigeAntwortMöglichkeiten": "Napoleonische Kriege",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Napoleonischen Kriege führten zur Auflösung des Heiligen Römischen Reiches und zur Gründung des Kaiserreichs Österreich."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Österreich vor der Gründung der Doppelmonarchie Österreich-Ungarn im Jahr 1867?",
        "Antworten": ["Kaiserreich Österreich", "Heiliges Römisches Reich", "Kaiserreich Preußen", "Königreich Österreich"],
        "RichtigeAntwort": "Kaiserreich Österreich",
        "RichtigeAntwortMöglichkeiten": "Kaiserreich kaisertum königreich kaiser könig königtum",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Vor der Doppelmonarchie Österreich-Ungarn hieß das Land das „Kaiserreich Österreich“, das 1804 gegründet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wofür wurde das Kolosseum im antiken Rom hauptsächlich genutzt?",
        "Antworten": ["Gladiatorenkämpfe", "Theateraufführungen", "Märkte", "Politische Versammlungen"],
        "RichtigeAntwort": "Gladiatorenkämpfe",
        "RichtigeAntwortMöglichkeiten": "Gladiatorenkämpfe Gladiatoren kämpfe",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Das Kolosseum in Rom war das größte Amphitheater der Antike und diente hauptsächlich zur Austragung von Gladiatorenkämpfen und anderen öffentlichen Spektakeln."
    },

    ////////////////Erster Weltkrieg////////////////

    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Erste Balkankrieg?",
        "Antworten": ["1912", "1910", "1914", "1908"],
        "RichtigeAntwort": "1912",
        "RichtigeAntwortMöglichkeiten": "1912",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Erste Balkankrieg begann 1912, als eine Allianz von Balkanländern gegen das Osmanische Reich kämpfte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Bündnis wurde im Ersten Balkankrieg gegen das Osmanische Reich gebildet?",
        "Antworten": ["Balkanliga", "Triple Entente", "Dreierbund", "Zentrale Mächte"],
        "RichtigeAntwort": "Balkanliga",
        "RichtigeAntwortMöglichkeiten": "Balkanliga",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Balkanliga, bestehend aus Serbien, Montenegro, Griechenland und Bulgarien, kämpfte gegen das Osmanische Reich im Ersten Balkankrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Reich verlor im Ersten Balkankrieg den größten Teil seines europäischen Territoriums?",
        "Antworten": ["Osmanisches Reich", "Russisches Reich", "Österreich-Ungarn", "Deutsches Reich"],
        "RichtigeAntwort": "Osmanisches Reich",
        "RichtigeAntwortMöglichkeiten": "Osmanisches osmanen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Osmanische Reich verlor den größten Teil seines europäischen Territoriums infolge des Ersten Balkankriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Abkommen beendete den Ersten Balkankrieg?",
        "Antworten": ["Vertrag von London", "Vertrag von Versailles", "Vertrag von Saint-Germain", "Vertrag von Trianon"],
        "RichtigeAntwort": "Vertrag von London",
        "RichtigeAntwortMöglichkeiten": "London",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Vertrag von London beendete 1913 den Ersten Balkankrieg und legte neue Grenzen auf dem Balkan fest."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Balkankriege gab es?",
        "Antworten": ["Zwei", "Drei", "Einer", "Vier"],
        "RichtigeAntwort": "Zwei",
        "RichtigeAntwortMöglichkeiten": "Zwei 2",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Es gab zwei Balkankriege, die beide kurz vor dem Ersten Weltkrieg stattfanden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis löste den Ersten Weltkrieg aus?",
        "Antworten": ["Attentat auf Franz Ferdinand", "Die Russische Revolution", "Die Oktoberrevolution", "Der Versailler Vertrag"],
        "RichtigeAntwort": "Attentat auf Franz Ferdinand",
        "RichtigeAntwortMöglichkeiten": "Attentat Franz Ferdinand mord schuss Gavrilo Princip sarajevo",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Attentat auf den österreichischen Erzherzog Franz Ferdinand in Sarajevo am 28. Juni 1914 führte zur Kriegserklärung Österreich-Ungarns an Serbien."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land erklärte als erstes Serbien den Krieg und begann so den Ersten Weltkrieg?",
        "Antworten": ["Österreich-Ungarn", "Deutschland", "Russland", "Frankreich"],
        "RichtigeAntwort": "Österreich-Ungarn",
        "RichtigeAntwortMöglichkeiten": "Österreich-Ungarn Österreich Ungarn",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Österreich-Ungarn erklärte Serbien am 28. Juli 1914 den Krieg, was eine Kettenreaktion von Bündnisverpflichtungen auslöste."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das Bündnis zwischen Deutschland und Österreich-Ungarn?",
        "Antworten": ["Zweibund", "Germanischer Bund", "Entente", "Heiliger Bund"],
        "RichtigeAntwort": "Zweibund",
        "RichtigeAntwortMöglichkeiten": "Zweibund zwei",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Zweibund wurde 1879 geschlossen und war ein Defensivbündnis zwischen Deutschland und Österreich-Ungarn."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches dritte Land trat dem Bündnis zwischen Deutschland und Österreich-Ungarn bei?",
        "Antworten": ["Italien", "Russland", "Frankreich", "Osmanisches Reich"],
        "RichtigeAntwort": "Italien",
        "RichtigeAntwortMöglichkeiten": "Italien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Italien trat dem Zweibund 1882 bei und bildete damit den Dreibund, der als defensives Militärbündnis konzipiert war."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man das Bündnis von Deutschland, Österreich-Ungarn und Italien im ersten Weltkrieg?",
        "Antworten": ["Dreibund", "Europäischer Bund", "Entente", "Achse"],
        "RichtigeAntwort": "Dreibund",
        "RichtigeAntwortMöglichkeiten": "Dreibund drei",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Dreibund bestand aus Deutschland, Österreich-Ungarn und Italien und war eine Allianz vor dem Ersten Weltkrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann wurde die Entente Cordiale zwischen Frankreich und Großbritannien unterzeichnet?",
        "Antworten": ["1904", "1912", "1895", "1907"],
        "RichtigeAntwort": "1904",
        "RichtigeAntwortMöglichkeiten": "1904",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Entente Cordiale wurde 1904 unterzeichnet und markierte einen wichtigen diplomatischen Fortschritt zwischen Frankreich und Großbritannien."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land trat 1914 dem Triple Entente-Bündnis bei?",
        "Antworten": ["Italien", "Osmanisches Reich", "Japan", "USA"],
        "RichtigeAntwort": "Japan",
        "RichtigeAntwortMöglichkeiten": "Japan",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Japan trat 1914 der Triple Entente bei und unterstützte die Alliierten im Ersten Weltkrieg gegen die Mittelmächte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das Bündnis zwischen Russland, Frankreich und Großbritannien vor dem Ersten Weltkrieg?",
        "Antworten": ["Triple Entente", "Triple Alliance", "Zweibund", "Dreibund"],
        "RichtigeAntwort": "Triple Entente",
        "RichtigeAntwortMöglichkeiten": "Entente",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Triple Entente war das Bündnis zwischen Russland, Frankreich und Großbritannien, das gegen den Dreibund stand."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land verbündete sich 1914 mit Deutschland im Ersten Weltkrieg?",
        "Antworten": ["Österreich-Ungarn", "Frankreich", "Italien", "Russland"],
        "RichtigeAntwort": "Österreich-Ungarn",
        "RichtigeAntwortMöglichkeiten": "Österreich-Ungarn Österreich Ungarn",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Österreich-Ungarn war 1914 ein wichtiger Verbündeter Deutschlands und bildete zusammen mit Deutschland die Mittelmächte im Ersten Weltkrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land verbündete sich mit Deutschland und Österreich-Ungarn im Ersten Weltkrieg?",
        "Antworten": ["Italien", "Osmanisches Reich", "Frankreich", "Russland"],
        "RichtigeAntwort": "Osmanisches Reich",
        "RichtigeAntwortMöglichkeiten": "Osmanisches türkei",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Osmanische Reich trat 1914 den Mittelmächten bei und kämpfte an der Seite von Deutschland und Österreich-Ungarn im Ersten Weltkrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Bündnis kämpfte gegen die Aliierten im Ersten Weltkrieg?",
        "Antworten": ["Mittelmächte", "Entente", "Alliierte", "Koalition"],
        "RichtigeAntwort": "Mittelmächte",
        "RichtigeAntwortMöglichkeiten": "Mittelmächte Mittel mächte",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Mittelmächte, bestehend aus Deutschland, Österreich-Ungarn, dem Osmanischen Reich und Bulgarien, standen im Ersten Weltkrieg gegen die Entente."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Dokument stellte Österreich-Ungarn vor dem Ersten Weltrieg gegen Serbien?",
        "Antworten": ["Ultimatum", "Friedensvertrag", "Waffenstillstand", "Vertrag von Versailles"],
        "RichtigeAntwort": "Ultimatum",
        "RichtigeAntwortMöglichkeiten": "Ultimatum",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Ultimatum von Österreich-Ungarn an Serbien wurde am 23. Juli 1914 überreicht und führte letztlich zur Mobilmachung und zum Beginn des Ersten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Plan verfolgte Deutschland im ersten Weltkrieg gegen Frankreich?",
        "Antworten": ["Schlieffen-Plan", "Hindenburg-Plan", "Blitzkrieg", "U-boot Krieg"],
        "RichtigeAntwort": "Schlieffen-Plan",
        "RichtigeAntwortMöglichkeiten": "Schlieffen-Plan schlieffen schliefen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Schlieffen-Plan war Deutschlands Strategie, um Frankreich schnell zu besiegen, bevor sich die Truppen nach Osten gegen Russland wenden konnten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land trat dem Ersten Weltkrieg ein, nachdem Deutschland in Belgien einmarschiert war?",
        "Antworten": ["Vereinigtes Königreich", "Italien", "Spanien", "Türkei"],
        "RichtigeAntwort": "Vereinigtes Königreich",
        "RichtigeAntwortMöglichkeiten": "Großbritannien england vereinigtes-königreich uk Britischen",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Vereinigte Königreich erklärte Deutschland am 4. August 1914 den Krieg als Reaktion auf die deutsche Verletzung der Neutralität Belgiens."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land wechselte im ersten Weltkrieg die Seiten?",
        "Antworten": ["Italien", "Portugal", "Türkei", "Spanien"],
        "RichtigeAntwort": "Italien",
        "RichtigeAntwortMöglichkeiten": "Italien",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Italien trat 1915 in den Ersten Weltkrieg auf der Seite der Alliierten ein, nachdem es im Vertrag von London den Alliierten Unterstützung zugesagt hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land trat 1917 in den Ersten Weltkrieg auf der Seite der Alliierten bei?",
        "Antworten": ["Vereinigte Staaten", "Spanien", "Schweiz", "Niederlande"],
        "RichtigeAntwort": "Vereinigte Staaten",
        "RichtigeAntwortMöglichkeiten": "Staaten amerika us usa",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Vereinigten Staaten traten am 6. April 1917 in den Ersten Weltkrieg ein und unterstützten die Alliierten gegen die Mittelmächte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete offiziell den Ersten Weltkrieg und wurde am 28. Juni 1919 unterzeichnet?",
        "Antworten": ["Vertrag von Versailles", "Vertrag von Paris", "Vertrag von Potsdam", "Vertrag von London"],
        "RichtigeAntwort": "Vertrag von Versailles",
        "RichtigeAntwortMöglichkeiten": "Vertrag von Versailles",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Vertrag von Versailles wurde am 28. Juni 1919 unterzeichnet und beendete offiziell den Ersten Weltkrieg, legte die Bedingungen für Deutschland fest und führte zu erheblichen politischen und wirtschaftlichen Veränderungen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der König von Großbritannien während des Ersten Weltkriegs?",
        "Antworten": ["George V.", "Edward VII.", "Henry VIII.", "William IV."],
        "RichtigeAntwort": "George V.",
        "RichtigeAntwortMöglichkeiten": "George",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "George V. war von 1910 bis 1936 König des Vereinigten Königreichs und führte das Land während des Ersten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher russische Zar regierte während des Ersten Weltkriegs?",
        "Antworten": ["Nikolaus II.", "Alexander III.", "Peter der Große", "Iwan der Schreckliche"],
        "RichtigeAntwort": "Nikolaus II.",
        "RichtigeAntwortMöglichkeiten": "Nikolaus",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Nikolaus II. war der letzte Zar von Russland und regierte während des Ersten Weltkriegs bis zur Russischen Revolution 1917."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches russische Ereignis 1917 führte zum Ende der Zarenherrschaft?",
        "Antworten": ["Russische Revolution", "Kriegseintritt Russlands", "Sturz des Zaren", "Erster Weltkrieg"],
        "RichtigeAntwort": "Russische Revolution",
        "RichtigeAntwortMöglichkeiten": "Russische Revolution",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Russische Revolution 1917 führte zum Sturz des Zaren Nikolaus II. und zur Errichtung der Bolschewistischen Regierung."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß der Kaiser von Österreich-Ungarn während des Ersten Weltkriegs?",
        "Antworten": ["Franz Joseph I.", "Kaiser Wilhelm II.", "Napoleon III.", "Friedrich III."],
        "RichtigeAntwort": "Franz Joseph I.",
        "RichtigeAntwortMöglichkeiten": "Franz Joseph",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Franz Joseph I. war von 1848 bis 1916 der Kaiser von Österreich-Ungarn und regierte während des Ersten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Auf wen wurde das Attentat von Sarajevo am 28. Juni 1914 verübt?",
        "Antworten": ["Erzherzog Franz Ferdinand", "Kaiser Wilhelm II.", "Premierminister David Lloyd George", "Prinz Eugen von Savoyen"],
        "RichtigeAntwort": "Erzherzog Franz Ferdinand",
        "RichtigeAntwortMöglichkeiten": "Franz Ferdinand erzherzog prinz",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Attentat von Sarajevo am 28. Juni 1914 richtete sich gegen Erzherzog Franz Ferdinand von Österreich und seine Frau Sophie, was als Auslöser für den Ersten Weltkrieg galt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Waffenmittel nutzte Deutschland im Ersten Weltkrieg ein, obwohl es verboten war?",
        "Antworten": ["Giftgas", "Panzer", "Flugzeuge", "U-Boote"],
        "RichtigeAntwort": "Giftgas",
        "RichtigeAntwortMöglichkeiten": "Chemische chemie gift giftgas gas",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Deutschland setzte im Ersten Weltkrieg chemische Waffen wie Senfgas ein, obwohl der Einsatz solcher Waffen durch das internationale Recht, insbesondere das Haager Abkommen von 1899, verboten war."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Mit welchem Land verbündete sich Bulgarien während des Ersten Weltkriegs?",
        "Antworten": ["Deutschland", "Russland", "Frankreich", "Vereinigtes Königreich"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland österreich-ungarn österreich ungarn osmanisches mittelmächte deutsches",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Bulgarien trat im Ersten Weltkrieg 1915 auf der Seite der Mittelmächte bei, zu denen Deutschland gehörte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher deutsche Kaiser regierte während des Ersten Weltkriegs?",
        "Antworten": ["Wilhelm II.", "Wilhelm I.", "Friedrich III.", "Kaiser Franz Joseph"],
        "RichtigeAntwort": "Wilhelm II.",
        "RichtigeAntwortMöglichkeiten": "Wilhelm",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Wilhelm II. war der letzte Kaiser des Deutschen Reiches und regierte von 1888 bis 1918."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr trat Bulgarien in den Ersten Weltkrieg ein?",
        "Antworten": ["1915", "1914", "1916", "1917"],
        "RichtigeAntwort": "1915",
        "RichtigeAntwortMöglichkeiten": "1915",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Bulgarien trat 1915 auf der Seite der Mittelmächte in den Ersten Weltkrieg ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr trat Bulgarien in den Ersten Weltkrieg ein?",
        "Antworten": ["1915", "1914", "1916", "1917"],
        "RichtigeAntwort": "1915",
        "RichtigeAntwortMöglichkeiten": "1915",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Bulgarien trat 1915 auf der Seite der Mittelmächte in den Ersten Weltkrieg ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Erste Weltkrieg?",
        "Antworten": ["1914", "1915", "1916", "1917"],
        "RichtigeAntwort": "1914",
        "RichtigeAntwortMöglichkeiten": "1914",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Erste Weltkrieg begann am 28. Juli 1914 nach der Erklärung des Krieges von Österreich-Ungarn an Serbien."
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Allianz kämpfte im ersten Weltkrieg gegen Deutschland?",
        "Antworten": ["Alliierten", "Entente und Koalition", "Vereinte Nationen und Achsenmächte", "Sowjetunion und Achsenmächte"],
        "RichtigeAntwort": "Alliierten",
        "RichtigeAntwortMöglichkeiten": "Alliierten entente",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Hauptallianzen im Ersten Weltkrieg waren die Alliierten, darunter Großbritannien, Frankreich und Russland, und die Mittelmächte, darunter Deutschland und Österreich-Ungarn."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Allianz kämpfte im Ersten Weltkrieg gegen Deutschland?",
        "Antworten": ["Alliierte", "Mittelmächte", "Französisch-Englische", "Koalition"],
        "RichtigeAntwort": "Alliierte",
        "RichtigeAntwortMöglichkeiten": "Alliierte entente aliierten",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Allianz, die gegen Deutschland kämpfte, bestand aus Ländern wie Großbritannien, Frankreich und Russland, die zusammen als die Alliierten bekannt waren."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Waffe setzte Deutschland im Ersten Weltkrieg zur Blockade der feindlichen Seewege ein?",
        "Antworten": ["U-Boote", "Panzer", "Flugzeuge", "Schiffe"],
        "RichtigeAntwort": "U-Boote",
        "RichtigeAntwortMöglichkeiten": "U-Boote boote",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "U-Boote wurden von Deutschland verwendet, um die Handelswege der Alliierten zu stören und ihre Schifffahrt zu unterbrechen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Kriege fanden kurz vor dem Ersten Weltkrieg statt?",
        "Antworten": ["Balkan-Kriege", "Krim-Kriege", "Amerikanischer Bürgerkrieg", "Napoleonische Kriege"],
        "RichtigeAntwort": "Balkan-Kriege",
        "RichtigeAntwortMöglichkeiten": "BalkanKriege balkan",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Balkan-Kriege von 1912-1913 führten zu einer Verschärfung der politischen Spannungen in Europa und trugen zur Entstehung des Ersten Weltkriegs bei."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann traten die USA offiziell in den Ersten Weltkrieg ein?",
        "Antworten": ["1914", "1915", "1916", "1917"],
        "RichtigeAntwort": "1917",
        "RichtigeAntwortMöglichkeiten": "1917",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die USA traten 1917 offiziell in den Ersten Weltkrieg ein, nachdem das Land durch verschiedene Ereignisse, einschließlich des Zimmermann-Telegramms, stark beeinflusst wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wo fand die Friedenskonferenz statt, die den Ersten Weltkrieg beendete?",
        "Antworten": ["Paris", "London", "Berlin", "Wien"],
        "RichtigeAntwort": "Paris",
        "RichtigeAntwortMöglichkeiten": "Paris",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Friedenskonferenz, die den Ersten Weltkrieg beendete, fand 1919 in Paris statt, wo der Vertrag von Versailles unterzeichnet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete den ersten Weltkrieg?",
        "Antworten": ["Vertrag von Versailles", "Vertrag von Paris", "Vertrag von London", "Vertrag von Wien"],
        "RichtigeAntwort": "Vertrag von Versailles",
        "RichtigeAntwortMöglichkeiten": "Versailles Versaille",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Der Vertrag von Versailles wurde 1919 unterzeichnet und beendete offiziell den Ersten Weltkrieg, wobei er strenge Bedingungen für die besiegten Mittelmächte festlegte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land trat dem Ersten Weltkrieg bei und half den Alliierten gegen Deutschland?",
        "Antworten": ["Vereinigte Staaten", "Russland", "Deutschland", "Italien"],
        "RichtigeAntwort": "Vereinigte Staaten",
        "RichtigeAntwortMöglichkeiten": "staaten us usa amerika",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Vereinigten Staaten, unter Präsident Woodrow Wilson, spielten eine entscheidende Rolle beim Ende des Ersten Weltkriegs und den Friedensverhandlungen, insbesondere durch Wilsons 14-Punkte-Plan."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land löste beide Weltkriege aus?",
        "Antworten": ["Deutschland", "Frankreich", "Vereinigtes Königreich", "Russland"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland deutsches deutsch",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Deutschland wird als Hauptverantwortlicher für das Auslösen beider Weltkriege angesehen, aufgrund der Rolle im Ersten Weltkrieg und der Aggressionen, die zum Zweiten Weltkrieg führten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Durch welches Land marschierte Deutschland, um Frankreich im Ersten Weltkrieg anzugreifen?",
        "Antworten": ["Belgien", "Schweiz", "Niederlande", "Luxemburg"],
        "RichtigeAntwort": "Belgien",
        "RichtigeAntwortMöglichkeiten": "Belgien",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Deutschland marschierte durch Belgien, was zur britischen Kriegserklärung an Deutschland führte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wo erlitten die russischen Truppen 1914 eine schwere Niederlage?",
        "Antworten": ["Schlacht von Tannenberg", "Schlacht an der Somme", "Schlacht von Verdun", "Schlacht bei Gallipoli"],
        "RichtigeAntwort": "Schlacht von Tannenberg",
        "RichtigeAntwortMöglichkeiten": "Tannenberg",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht von Tannenberg, die im August 1914 stattfand, war eine schwere Niederlage für die russischen Truppen gegen die deutsche Armee."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer verlor den Ersten Weltkrieg?",
        "Antworten": ["Deutschland", "Frankreich", "Vereinigtes Königreich", "Russland"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland achsenmächte österreich deutsches",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Deutschland war einer der Hauptverlierer des Ersten Weltkriegs, zusammen mit seinen Verbündeten."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Jahre dauerte der Erste Weltkrieg?",
        "Antworten": ["4 Jahre", "5 Jahre", "6 Jahre", "9 Jahre"],
        "RichtigeAntwort": "4 Jahre",
        "RichtigeAntwortMöglichkeiten": "4 Jahre",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Erste Weltkrieg dauerte von 1914 bis 1918, insgesamt 4 Jahre."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher stadt setzten die Deutschen erstmals Giftgas im Ersten Weltkrieg ein?",
        "Antworten": ["Ypern", "Somme", "Verdun", "Gallipoli"],
        "RichtigeAntwort": "Ypern",
        "RichtigeAntwortMöglichkeiten": "Ypern ipern",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Bei der Schlacht um Ypern setzten die Deutschen erstmals Chlorgas als Waffe ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land trat 1917 aus dem Ersten Weltkrieg aus?",
        "Antworten": ["Russland", "Frankreich", "Italien", "Österreich-Ungarn"],
        "RichtigeAntwort": "Russland",
        "RichtigeAntwortMöglichkeiten": "Russland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Russische Revolution von 1917 führte zur Abdankung des Zaren und zum Rückzug Russlands aus dem Krieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Dokument führte zum Eintritt der USA in den Ersten Weltkrieg?",
        "Antworten": ["Zimmermann-Telegramm", "Wiener Vertrag", "Friedensabkommen von Versailles", "Wahingtoner Vertrag"],
        "RichtigeAntwort": "Zimmermann-Telegramm",
        "RichtigeAntwortMöglichkeiten": "Zimmermann-Telegramm Zimmermann Telegramm",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Zimmermann-Telegramm wurde 1917 von Deutschland an Mexiko gesendet und trug zur Entscheidung der USA bei, in den Ersten Weltkrieg einzutreten."
    },
    {//Weimarer Republik
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Präsident der Weimarer Republik?",
        "Antworten": ["Friedrich Ebert", "Paul von Hindenburg", "Gustav Stresemann", "Walther Rathenau"],
        "RichtigeAntwort": "Friedrich Ebert",
        "RichtigeAntwortMöglichkeiten": "Friedrich Ebert",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Friedrich Ebert leitete die Übergangsregierung nach dem Ende des Ersten Weltkriegs und war bis 1925 Präsident der Weimarer Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Revolution führte zur Einführung der Weimarer Verfassung?",
        "Antworten": ["Novemberrevolution", "Münchener Putsch", "Kapp-Lüttwitz-Putsch", "Röhm-Putsch"],
        "RichtigeAntwort": "Novemberrevolution",
        "RichtigeAntwortMöglichkeiten": "Novemberrevolution November",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Novemberrevolution 1918 führte zum Sturz des Kaiserreichs und zur Gründung der Weimarer Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde die Weimarer Republik gegründet?",
        "Antworten": ["1919", "1920", "1921", "1922"],
        "RichtigeAntwort": "1919",
        "RichtigeAntwortMöglichkeiten": "1919",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Weimarer Verfassung wurde am 11. August 1919 verabschiedet und trat am 14. August 1919 in Kraft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß das Parlament der Weimarer Republik?",
        "Antworten": ["Reichstag", "Landtag", "Bundestag", "Senat"],
        "RichtigeAntwort": "Reichstag",
        "RichtigeAntwortMöglichkeiten": "Reichstag reichs",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Reichstag war das wichtigste gesetzgebende Organ der Weimarer Republik und wurde durch allgemeine Wahlen gewählt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Nach welche Stadt wurde die Weimarer Republik gegründet?",
        "Antworten": ["Weimar", "Berlin", "München", "Frankfurt"],
        "RichtigeAntwort": "Weimar",
        "RichtigeAntwortMöglichkeiten": "Weimar",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Verfassung der Weimarer Republik wurde am 11. August 1919 in Weimar verabschiedet."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Deutschland vor dem Zweiten Weltkrieg?",
        "Antworten": ["Weimarer Republik", "Deutsches Kaiserreich", "Drittes Reich", "Bundesrepublik Deutschland"],
        "RichtigeAntwort": "Weimarer Republik",
        "RichtigeAntwortMöglichkeiten": "Weimarer Republik",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Weimarer Republik war die Bezeichnung für Deutschland von 1919 bis 1933, bevor das Dritte Reich unter Adolf Hitler etabliert wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der letzte Präsident der Weimarer Republik?",
        "Antworten": ["Paul von Hindenburg", "Friedrich Ebert", "Gustav Stresemann", "Wilhelm Marx"],
        "RichtigeAntwort": "Paul von Hindenburg",
        "RichtigeAntwortMöglichkeiten": "Paul Hindenburg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Paul von Hindenburg war der letzte Präsident der Weimarer Republik von 1925 bis 1934."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Partei der Weimarer Republik führte 1923 einen gescheiterten Putschversuch in München an?",
        "Antworten": ["NSDAP", "SPD", "KPD", "Zentrum"],
        "RichtigeAntwort": "NSDAP",
        "RichtigeAntwortMöglichkeiten": "NSDAP hitler",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die NSDAP führte 1923 einen gescheiterten Putschversuch in München an, bekannt als Hitlerputsch."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Partei war die kommunistische Partei der Weimarer Republik?",
        "Antworten": ["KPD", "SPD", "NSDAP", "Zentrum"],
        "RichtigeAntwort": "KPD",
        "RichtigeAntwortMöglichkeiten": "KPD",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die KPD (Kommunistische Partei Deutschlands) war die kommunistische Partei der Weimarer Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Partei war die rechtsextreme Partei der Weimarer Republik?",
        "Antworten": ["NSDAP", "SPD", "KPD", "Zentrum"],
        "RichtigeAntwort": "NSDAP",
        "RichtigeAntwortMöglichkeiten": "NSDAP",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die NSDAP (Nationalsozialistische Deutsche Arbeiterpartei) war die rechtsextreme Partei der Weimarer Republik."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche große Krise führte zum zweiten Weltkrieg?",
        "Antworten": ["Weltwirtschaftskrise", "Hyperinflation", "Ölkrise", "Dotcom-Blase"],
        "RichtigeAntwort": "Weltwirtschaftskrise",
        "RichtigeAntwortMöglichkeiten": "Weltwirtschaftskrise Weltwirtschafts wirtschafts Welt weltkrise wirtschaftskrise",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Weltwirtschaftskrise von 1929 traf die Weimarer Republik besonders schwer."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Krise traf Deutschland vier Jahre nach dem Ersten Weltkrieg?",
        "Antworten": ["Hyperinflation", "Weltwirtschaftskrise", "Ölkrise", "Dotcom-Blase"],
        "RichtigeAntwort": "Hyperinflation",
        "RichtigeAntwortMöglichkeiten": "Hyperinflation inflation Hyper wirtschaftskrise inflationskrise wirtschafts",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Hyperinflation traf Deutschland 1923, vier Jahre nach dem Ende des Ersten Weltkriegs, besonders hart."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Jahr markiert das Ende der Weimarer Republik?",
        "Antworten": ["1933", "1919", "1923", "1929"],
        "RichtigeAntwort": "1933",
        "RichtigeAntwortMöglichkeiten": "1933",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Das Jahr 1933 markiert das Ende der Weimarer Republik mit der Machtergreifung Hitlers."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Partei führte den gescheiterten Kapp-Putsch 1920 an?",
        "Antworten": ["Reichswehr", "NSDAP", "SPD", "KPD"],
        "RichtigeAntwort": "Reichswehr",
        "RichtigeAntwortMöglichkeiten": "Reichswehr",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Reichswehr führte den gescheiterten Kapp-Putsch 1920 an."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Deutschland vor Hitlers Herrschaft?",
        "Antworten": ["Weimarer Republik", "Deutsches Reich", "Kaiserreich", "Preußen"],
        "RichtigeAntwort": "Weimarer Republik",
        "RichtigeAntwortMöglichkeiten": "Weimarer weimar",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die Weimarer Republik war die erste deutsche Demokratie und bestand von 1919 bis 1933, bevor sie von der nationalsozialistischen Diktatur abgelöst wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Partei gründete Karl Liebknecht?",
        "Antworten": ["KPD", "SPD", "Zentrum", "NPD"],
        "RichtigeAntwort": "KPD",
        "RichtigeAntwortMöglichkeiten": "Kommunistische KPD kdp kommunismus",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die KPD wurde 1918 unteranderem von Rosa Luxemburg gegründet und setzte sich für den Kommunismus in der Weimarer Republik ein"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann die Weltwirtschaftskrise?",
        "Antworten": ["1929", "1931", "1933", "1927"],
        "RichtigeAntwort": "1929",
        "RichtigeAntwortMöglichkeiten": "1929",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Börsenkrach von 1929 in den USA leitete die Weltwirtschaftskrise ein, die weltweite Auswirkungen hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher US-Präsident führte Maßnahmen gegen Weltwirtschaftskrise ein?",
        "Antworten": ["Franklin D. Roosevelt", "Herbert Hoover", "Theodore Roosevelt", "John F. Kennedy"],
        "RichtigeAntwort": "Franklin D. Roosevelt",
        "RichtigeAntwortMöglichkeiten": "Franklin D. Roosevelt",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der 'New Deal' von Franklin D. Roosevelt umfasste eine Reihe von Reformen zur Bekämpfung der Krise und zur Wiederbelebung der amerikanischen Wirtschaft."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land erlitt die schwersten wirtschaftlichen Schäden während der Weltwirtschaftskrise?",
        "Antworten": ["Deutschland", "Japan", "Kanada", "Frankreich"],
        "RichtigeAntwort": "Deutschland",
        "RichtigeAntwortMöglichkeiten": "Deutschland weimarer weimar deutsches deutsch",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "In Deutschland führte die Weltwirtschaftskrise zu massiver Arbeitslosigkeit und sozialer Unruhe, was den Aufstieg der Nationalsozialisten begünstigte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Tag löste die Weltwirtschaftskrise aus?",
        "Antworten": ["Schwarzer Donnerstag", "K.Freitag", "Tag der Weltkrise", "Silvester"],
        "RichtigeAntwort": "Schwarzer Donnerstag freitag",
        "RichtigeAntwortMöglichkeiten": "Schwarzer Donnerstag 24.oktober 24 25 25.oktober",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der 'Schwarze Dienstag' am 29. Oktober 1929 führte zum Zusammenbruch des Aktienmarktes und leitete die Weltwirtschaftskrise ein."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie wurde die Weltwirtschaftskrise auch bezeichnet?",
        "Antworten": ["Große Depression", "Große Rezession", "Wirtschaftskollaps", "Finanzkrise"],
        "RichtigeAntwort": "Große Depression",
        "RichtigeAntwortMöglichkeiten": "Depression",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die 'Große Depression' beschreibt die weltweite wirtschaftliche Krise, die in den 1930er Jahren auftrat und tiefgreifende soziale und wirtschaftliche Auswirkungen hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Deutsche Präsident ernannte Hitler zum Reichskanzler?",
        "Antworten": ["Paul von Hindenburg", "Friedrich Ebert", "Wilhelm II.", "Kaiser Franz Josef"],
        "RichtigeAntwort": "Paul von Hindenburg",
        "RichtigeAntwortMöglichkeiten": "Paul Hindenburg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Paul von Hindenburg, der Präsident der Weimarer Republik, ernannte Hitler am 30. Januar 1933 zum Reichskanzler."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde Adolf Hitler zum Reichskanzler Deutschlands ernannt?",
        "Antworten": ["1933", "1932", "1934", "1935"],
        "RichtigeAntwort": "1933",
        "RichtigeAntwortMöglichkeiten": "1933",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Hitler wurde am 30. Januar 1933 zum Reichskanzler ernannt, was den Beginn der nationalsozialistischen Herrschaft markierte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Gruppe unterstützte Hitler als 'Sturmabteilung'?",
        "Antworten": ["SA", "SS", "Gestapo", "HJ"],
        "RichtigeAntwort": "SA",
        "RichtigeAntwortMöglichkeiten": "SA",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die SA half Hitler bei der Durchsetzung seiner Macht und der Unterdrückung von Gegnern."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Putsch sollte die SA-Führung Hitlers 1934 stürtzen?",
        "Antworten": ["Röhm-Putsch", "Hitler-Putsch", "Kapp-Putsch", "München-Putsch"],
        "RichtigeAntwort": "Röhm-Putsch",
        "RichtigeAntwortMöglichkeiten": "Röhm-Putsch röhm",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Röhm-Putsch, auch 'Nacht der langen Messer', sicherte Hitlers Macht."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Hitlers gescheiterter Putschversuch von 1923?",
        "Antworten": ["Hitler-Putsch", "Röhm-Putsch", "Kapp-Putsch", "München-Putsch"],
        "RichtigeAntwort": "Hitler-Putsch",
        "RichtigeAntwortMöglichkeiten": "Hitler-Putsch hitler bierkeller-putsch bierkeller",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Hitler-Putsch endete mit Hitlers Haftstrafe und einer Neubewertung seiner Strategie."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß die Geheimpolizei unter Hitlers Herrschaft?",
        "Antworten": ["Gestapo", "SA", "SS", "Kripo"],
        "RichtigeAntwort": "Gestapo",
        "RichtigeAntwortMöglichkeiten": "Gestapo",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Gestapo war verantwortlich für die Überwachung und Verfolgung von politischen Gegnern und anderen Feinden des Regimes."
    },

    ////////////////Zweiter Weltkrieg////////////////

    {//einfache fragen
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Führer von Deutschland im Zweiten Weltkrieg?",
        "Antworten": ["Adolf Hitler", "Winston Churchill", "Franklin D. Roosevelt", "Joseph Stalin"],
        "RichtigeAntwort": "Adolf Hitler",
        "RichtigeAntwortMöglichkeiten": "Adolf Hitler",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Adolf Hitler war der Führer des nationalsozialistischen Deutschlands während des Zweiten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land griff Deutschland im Zweiten Weltkrieg zuerst an?",
        "Antworten": ["Polen", "Frankreich", "Italien", "Schweden"],
        "RichtigeAntwort": "Polen",
        "RichtigeAntwortMöglichkeiten": "Polen",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Angriff auf Polen begann am 1. September 1939 und markierte den Beginn des Zweiten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Zweite Weltkrieg?",
        "Antworten": ["1939", "1941", "1914", "1945"],
        "RichtigeAntwort": "1939",
        "RichtigeAntwortMöglichkeiten": "1939",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Zweite Weltkrieg begann am 1. September 1939 mit dem Angriff auf Polen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete der Zweite Weltkrieg?",
        "Antworten": ["1945", "1944", "1939", "1950"],
        "RichtigeAntwort": "1945",
        "RichtigeAntwortMöglichkeiten": "1945",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Der Zweite Weltkrieg endete am 8. Mai 1945 in Europa, nach der Kapitulation Deutschlands."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Krieg regierte Adolf Hitler?",
        "Antworten": ["Zweiter Weltkrieg", "Erster Weltkrieg", "Vietnamkrieg", "Krimkrieg"],
        "RichtigeAntwort": "Zweiter Weltkrieg",
        "RichtigeAntwortMöglichkeiten": "Zweiter Weltkrieg 2",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Adolf Hitler war der Führer von Deutschland während des Zweiten Weltkriegs"
    },
    {//
        "Kategorie": "Geschichte",
        "Frage": "Wer war der Premierminister von Großbritannien während des Zweiten Weltkriegs?",
        "Antworten": ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Margaret Thatcher"],
        "RichtigeAntwort": "Winston Churchill",
        "RichtigeAntwortMöglichkeiten": "Winston Churchill",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Winston Churchill wurde 1940 Premierminister von Großbritannien und führte das Land durch den Großteil des Zweiten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land griff Pearl Harbor im zweiten Weltkrieg an?",
        "Antworten": ["Japan", "Kanada", "Deutschland", "USA"],
        "RichtigeAntwort": "Japan",
        "RichtigeAntwortMöglichkeiten": "Japan",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Pearl Harbor wurde am 7. Dezember 1941 angegriffen XXund führte zu einstieg USA in den Zweiten Weltkrieg"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wo fand der erste Großangriff gegen die USA im Zweiten Weltkrieg statt?",
        "Antworten": ["Pearl Harbor", "Normandie", "Stalingrad", "Berlin"],
        "RichtigeAntwort": "Pearl Harbor",
        "RichtigeAntwortMöglichkeiten": "Pearl Harbor",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Angriff auf Pearl Harbor am 7. Dezember 1941 war der erste Großangriff gegen die USA im Zweiten Weltkrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer führte die Sowjetunion während des Zweiten Weltkriegs?",
        "Antworten": ["Josef Stalin", "Wladimir Lenin", "Nikita Chruschtschow", "Leonid Breschnew"],
        "RichtigeAntwort": "Josef Stalin",
        "RichtigeAntwortMöglichkeiten": "Josef Stalin",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Josef Stalin führte die Sowjetunion während des Zweiten Weltkriegs."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die Kriegsstrategie Hitlers im Zweiten Weltkrieg?",
        "Antworten": ["Blitzkrieg", "Schützengrabenkrieg", "Guerillakrieg", "Seekrieg"],
        "RichtigeAntwort": "Blitzkrieg",
        "RichtigeAntwortMöglichkeiten": "Blitzkrieg",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Kriegsstrategie Hitlers, die auf schnellen Vorstößen basierte, wurde Blitzkrieg genannt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man das Bündnis zwischen Deutschland, Japan und Italien im Zweiten Weltkrieg?",
        "Antworten": ["Achsenmächte", "Alliierte", "Triple Entente", "NATO"],
        "RichtigeAntwort": "Achsenmächte",
        "RichtigeAntwortMöglichkeiten": "Achsenmächte achse achsen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Bündnis zwischen Deutschland, Japan und Italien im Zweiten Weltkrieg wurde Achsenmächte genannt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man den Angriff von Deutschland auf die Sowjetunion im Zweiten Weltkrieg?",
        "Antworten": ["Barbarossa", "Overlord", "Torch", "Weserübung"],
        "RichtigeAntwort": "Barbarossa",
        "RichtigeAntwortMöglichkeiten": "Barbarossa",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Der Angriff von Deutschland auf die Sowjetunion im Zweiten Weltkrieg wurde Unternehmen Barbarossa genannt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Volksgruppe wurde von den Nazis während des Zweiten Weltkriegs verfolgt?",
        "Antworten": ["Juden", "Muslime", "Polen", "Russland-Deutsche"],
        "RichtigeAntwort": "Juden",
        "RichtigeAntwortMöglichkeiten": "Juden sinti Roma",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Die jüdische Bevölkerung wurde von den Nazis systematisch verfolgt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Schlacht war der Wendepunkt an der Ostfront im Zweiten Weltkrieg?",
        "Antworten": ["Schlacht von Stalingrad", "Schlacht von Kursk", "Schlacht von Berlin", "Schlacht von Moskau"],
        "RichtigeAntwort": "Schlacht von Stalingrad",
        "RichtigeAntwortMöglichkeiten": "Stalingrad",
        "Schwierigkeitsgrad": "expert",
        "Fakt": "Die Schlacht von Stalingrad gilt als Wendepunkt an der Ostfront im Zweiten Weltkrieg."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land schloss kurz vor dem Zweiten Weltkrieg einen Nichtangriffspakt mit Deutschland?",
        "Antworten": ["Sowjetunion", "Japan", "Polen", "Italien"],
        "RichtigeAntwort": "Sowjetunion",
        "RichtigeAntwortMöglichkeiten": "Sowjetunion sowjet sowjet udssr russland",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Sowjetunion schloss 1939 den Nichtangriffspakt, bekannt als Molotow-Ribbentrop-Pakt, mit Deutschland."
    }
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

];