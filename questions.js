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
        "Frage": "Welches ist einer der 7 Weltwunder?",
        "Antworten": ["Leutturm von Alexandria", "Chinesische Mauer", "Petra", "Machu Picchu"],
        "RichtigeAntwort": "Richtig",
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
        "Frage": "Wie viele Antike Weltwunder gibt es?",
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
        "RichtigeAntwortMöglichkeiten": "Kyros Große Cyrus ",
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
        "RichtigeAntwortMöglichkeiten": "Nil",
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
        "Frage": "Wie oft wurden die antiken Olympischen Spiele abgehalten?",
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
        "RichtigeAntwortMöglichkeiten": "Olympeion",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Konsuln wurden jedes Jahr neu gewählt."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie viele Konsuln gab es gleichzeitig in der römischen Republik?",
        "Antworten": ["Zwei", "Ein", "Drei", "Vier"],
        "RichtigeAntwort": "Zwei",
        "RichtigeAntwortMöglichkeiten": "Zwei 2",
        "Schwierigkeitsgrad": "schwer",
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
        "RichtigeAntwortMöglichkeiten": "Makedonischer Krieg",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Makedonische Krieg führte zur römischen Unterwerfung Griechenlands"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches römische Bauwerk war das erste große römische Amphitheater?",
        "Antworten": ["Amphitheater von Pompeji", "Kolosseum", "Amphitheater von Capua", "Amphitheater von Verona"],
        "RichtigeAntwort": "Amphitheater von Pompeji",
        "RichtigeAntwortMöglichkeiten": "Pompeji",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Amphitheater von Pompeji wurde vor dem Kolosseum erbaut"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Gebäude in der römischen Republik war der Ort für die Versammlungen der Bürger?",
        "Antworten": ["Forum Romanum", "Pantheon", "Kapitolinische Tempel", "Basilika Julia"],
        "RichtigeAntwort": "Forum Romanum",
        "RichtigeAntwortMöglichkeiten": "Forum Romanum",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Punischen Kriege endeten mit der Zerstörung Karthagos und dem Sieg Roms."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Feldheer kämpfte während des Zweiten Punischen Krieges gegen Rom?",
        "Antworten": ["Hannibal", "Hasdrubal", "Mago", "Hamilkar"],
        "RichtigeAntwort": "Hannibal",
        "RichtigeAntwortMöglichkeiten": "Hannibal Barca",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Hannibal ist berühmt für seinen Feldzug über die Alpen"
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
        "Frage": "Welche Stadt makierte durch ihren Fall das Ende der Punischen Kriege?",
        "Antworten": ["Karthago", "Syrakus", "Athen", "Hippo"],
        "RichtigeAntwort": "Karthago",
        "RichtigeAntwortMöglichkeiten": "Karthago kartago", 
        "Schwierigkeitsgrad": "schwer",
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
        "Frage": "Welchen Text hat Martin Luther an die Tür der Schlosskirche in Wittenberg genagelt?",
        "Antworten": ["95 Thesen", "Magna Carta", "Westfälischer Friede", "Goldene Bulle"],
        "RichtigeAntwort": "95 Thesen",
        "RichtigeAntwortMöglichkeiten": "95 Thesen",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die 95 Thesen richteten sich vorallem gegen den Ablasshandel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welcher Sprache übersetzte Martin Luther die Bibel, um sie für die breite Masse zugänglich zu machen?",
        "Antworten": ["Deutsch", "Latein", "Griechisch", "Hebräisch"],
        "RichtigeAntwort": "Deutsch",
        "RichtigeAntwortMöglichkeiten": "Deutsch",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Luthers Bibelübersetzung ins Deutsche war revolutionär, da sie die Heilige Schrift erstmals einem breiten Publikum zugänglich machte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Reichstag verurteilte Martin Luther?",
        "Antworten": ["Reichstag zu Worms", "REichstag von Trient", "Reichstag zu Speyer", "REichstag von Nicäa"],
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
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "mittel",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Asgard ist mit einer Regenbogenbrücke namens Bifröst mit der Menschenwelt verbunden."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man das Ende der Welt in der nordischen Mythologie?",
        "Antworten": ["Ragnarök", "Armageddon", "Apokalypse", "Ragnarökkr"],
        "RichtigeAntwort": "Ragnarök",
        "RichtigeAntwortMöglichkeiten": "Ragnarök",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Ragnarök ist das Schicksal der Götter, ein prophezeiter Weltuntergang"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt der Ort, in dem im Kampf gefallene Krieger nach dem Tod hinkommen?",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Loki ist bekannt für seine Schabernack"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt Thors Bruder im nordischen Glauben?",
        "Antworten": ["Loki", "Balder", "Tyr", "Vidar"],
        "RichtigeAntwort": "Loki",
        "RichtigeAntwortMöglichkeiten": "Loki",
        "Schwierigkeitsgrad": "leicht",
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
        "Schwierigkeitsgrad": "mittel",
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
        "RichtigeAntwortMöglichkeiten": "Enland Großbrittanien",
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
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
    
        { //Anzahl der Ozeane
            "Kategorie": "Geographie",
            "Frage": "Wie viele Ozeane gibt es auf der Erde?",
            "Antworten": ["3", "4", "5", "6"],
            "RichtigeAntwort": "5",
            "RichtigeAntwortMöglichkeiten": "5",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Es gibt fünf Ozeane auf der Erde: den Pazifischen Ozean, den Atlantischen Ozean, den Indischen Ozean, den Arktischen Ozean und den Südlichen Ozean"
        },
        { //Größter Ozean der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist der größte Ozean der Welt?",
            "Antworten": ["Atlantischer Ozean", "Indischer Ozean", "Pazifischer Ozean", "Arktischer Ozean"],
            "RichtigeAntwort": "Pazifischer Ozean",
            "RichtigeAntwortMöglichkeiten": "Pazifischer Pazifik",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Pazifische Ozean ist mit einer Fläche von etwa 168 Millionen Quadratkilometern der größte Ozean der Welt"
        },
        { //Kleinster Ozean der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist der kleinste Ozean der Welt?",
            "Antworten": ["Indischer Ozean", "Südlicher Ozean", "Arktischer Ozean", "Atlantischer Ozean"],
            "RichtigeAntwort": "Arktischer Ozean",
            "RichtigeAntwortMöglichkeiten": "Arktischer Ozean",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Arktische Ozean hat trotzdem eine Fläche von etwa 14 Millionen Quadratkilometern"
        },
        { //Größe des Pazifischen Ozeans
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Pazifische Ozean?",
            "Antworten": ["105 Millionen km²", "165 Millionen km²", "198 Millionen km²", "234 Millionen km²"],
            "RichtigeAntwort": "165 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "165 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Pazifische Ozean ist mit etwa 165 Millionen Quadratkilometern der größte Ozean der Welt"
        },
        { //Wasserstrom im Pazifik
            "Kategorie": "Geographie",
            "Frage": "Welcher große Wasserstrom fließt durch den Pazifischen Ozean?",
            "Antworten": ["Golfstrom", "Humboldtstrom", "Nordatlantikstrom", "Ostgrönlandstrom"],
            "RichtigeAntwort": "Humboldtstrom",
            "RichtigeAntwortMöglichkeiten": "Humboldtstrom",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Humboldtstrom ist ein kalter Meeresstrom, der entlang der Westküste Südamerikas durch den Pazifischen Ozean fließt"
        },
        { //Pazifik Bedeutung des Namens
            "Kategorie": "Geographie",
            "Frage": "Was bedeutet der Name 'Pazifik'?",
            "Antworten": ["Stürmischer Ozean", "Friedlicher Ozean", "Großer Ozean", "Tiefer Ozean"],
            "RichtigeAntwort": "Friedlicher Ozean",
            "RichtigeAntwortMöglichkeiten": "Friedlicher Ozean",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Name 'Pazifik' kommt vom lateinischen 'Mare Pacificum', was 'Friedlicher Ozean' bedeutet"
        },
        { //Tiefster Punkt im Marianengraben
            "Kategorie": "Geographie",
            "Frage": "Wie tief ist der tiefste Punkt des Marianengrabens?",
            "Antworten": ["8.848 Meter", "10.994 Meter", "11.034 Meter", "12.000 Meter"],
            "RichtigeAntwort": "11.034 Meter",
            "RichtigeAntwortMöglichkeiten": "11.034 Meter",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der tiefste Punkt des Marianengrabens, bekannt als das Challenger-Tief, liegt etwa 11.034 Meter unter dem Meeresspiegel"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Größe des Atlantischen Ozeans
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Atlantische Ozean?",
            "Antworten": ["85 Millionen km²", "90 Millionen km²", "100 Millionen km²", "110 Millionen km²"],
            "RichtigeAntwort": "85 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "85 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Atlantische Ozean  ist der zweitgrößte Ozean der Welt"
        },
        { //Tiefster Punkt des Atlantiks
            "Kategorie": "Geographie",
            "Frage": "Welches ist der tiefste Punkt des Atlantischen Ozeans?",
            "Antworten": ["Puerto-Rico-Graben", "Tonga-Graben", "Süd-Sandwich-Graben", "Java-Graben"],
            "RichtigeAntwort": "Puerto-Rico-Graben",
            "RichtigeAntwortMöglichkeiten": "Puerto-Rico-Graben",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Puerto-Rico-Graben ist mit etwa 8.376 Metern der tiefste Punkt des Atlantischen Ozeans"
        },
        { //Längster Fluss mündet in den Atlantik
            "Kategorie": "Geographie",
            "Frage": "Welcher der längsten Flüsse der Welt mündet in den Atlantischen Ozean?",
            "Antworten": ["Nil", "Amazonas", "Jangtsekiang", "Mississippi"],
            "RichtigeAntwort": "Amazonas",
            "RichtigeAntwortMöglichkeiten": "Amazonas",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Amazonas, der zweitlängste Fluss der Welt, mündet in den Atlantischen Ozean"
        },
        { //Wasserstrom im Atlantik
            "Kategorie": "Geographie",
            "Frage": "Welcher große Wasserstrom fließt durch den Atlantischen Ozean?",
            "Antworten": ["Golfstrom", "Humboldtstrom", "Nordatlantikstrom", "Ostgrönlandstrom"],
            "RichtigeAntwort": "Golfstrom",
            "RichtigeAntwortMöglichkeiten": "Golfstrom",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Golfstrom ist ein starker Meeresstrom, der warmes Wasser aus dem Golf von Mexiko in den Nordatlantik transportiert"
        },
        { //Bedeutung des Namens Atlantik
            "Kategorie": "Geographie",
            "Frage": "Was bedeutet der Name 'Atlantik'?",
            "Antworten": ["Stürmischer Ozean", "Ozean des Atlas", "Großer Ozean", "Tiefer Ozean"],
            "RichtigeAntwort": "Ozean des Atlas",
            "RichtigeAntwortMöglichkeiten": " Atlas",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Name 'Atlantik' leitet sich vom griechischen Gott Atlas ab und bedeutet 'Ozean des Atlas'"
        },
        { //Anzahl der Kontinente, die an den Atlantik grenzen
            "Kategorie": "Geographie",
            "Frage": "Wie viele Kontinente grenzen an den Atlantischen Ozean?",
            "Antworten": ["3", "4", "5", "6"],
            "RichtigeAntwort": "4",
            "RichtigeAntwortMöglichkeiten": "4",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Vier Kontinente grenzen an den Atlantischen Ozean: Nordamerika, Südamerika, Europa und Afrika"
        },
        { //Größte Insel im Atlantik
            "Kategorie": "Geographie",
            "Frage": "Welche ist die größte Insel im Atlantischen Ozean?",
            "Antworten": ["Grönland", "Island", "Großbritannien", "Madagaskar"],
            "RichtigeAntwort": "Grönland",
            "RichtigeAntwortMöglichkeiten": "Grönland",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Grönland ist die größte Insel im Atlantischen Ozean und die größte Insel der Welt"
        },
        { //Mid-Atlantic Ridge
            "Kategorie": "Geographie",
            "Frage": "Was ist der Mid-Atlantic Ridge?",
            "Antworten": ["Ein Gebirge auf dem Meeresboden", "Ein großer Meeresstrom", "Ein Tiefseegraben", "Ein unterseeischer Vulkan"],
            "RichtigeAntwort": "Ein Gebirge auf dem Meeresboden",
            "RichtigeAntwortMöglichkeiten": "Ein Gebirge auf dem Meeresboden",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mid-Atlantic Ridge ist ein Gebirge auf dem Meeresboden, das sich über den gesamten Atlantischen Ozean erstreckt und eine bedeutende divergente Plattengrenze darstellt"
        },
        { //Entdeckung des Atlantischen Ozeans
            "Kategorie": "Geographie",
            "Frage": "Welcher Entdecker überquerte den Atlantischen Ozean 1492?",
            "Antworten": ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "James Cook"],
            "RichtigeAntwort": "Christopher Columbus",
            "RichtigeAntwortMöglichkeiten": "Christopher Columbus",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Christopher Columbus überquerte den Atlantischen Ozean im Jahr 1492 und entdeckte die Neue Welt"
        },
        { //Berühmte Seewege im Atlantik
            "Kategorie": "Geographie",
            "Frage": "Welcher berühmte Seeweg verbindet den Atlantischen Ozean mit dem Pazifischen Ozean?",
            "Antworten": ["Suezkanal", "Panamakanal", "Nordwestpassage", "Straße von Gibraltar"],
            "RichtigeAntwort": "Panamakanal",
            "RichtigeAntwortMöglichkeiten": "Panamakanal",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Panamakanal ist ein berühmter Seeweg, der den Atlantischen Ozean mit dem Pazifischen Ozean verbindet"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Größe des Indischen Ozeans
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Indische Ozean?",
            "Antworten": ["50 Millionen km²", "70 Millionen km²", "90 Millionen km²", "110 Millionen km²"],
            "RichtigeAntwort": "70 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "70 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Indische Ozean erstreckt sich über eine Fläche von etwa 70 Millionen Quadratkilometern"
        },
        { //Begrenzende Kontinente des Indischen Ozeans
            "Kategorie": "Geographie",
            "Frage": "Welche Kontinente grenzen an den Indischen Ozean?",
            "Antworten": ["Afrika und Asien", "Asien und Australien", "Afrika, Asien und Australien", "Afrika, Europa und Asien"],
            "RichtigeAntwort": "Afrika, Asien und Australien",
            "RichtigeAntwortMöglichkeiten": "Afrika, Asien und Australien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Indische Ozean wird von drei Kontinenten umgeben: Afrika, Asien und Australien"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        { //Größter See der Welt
            "Kategorie": "Geographie",
            "Frage": "Welcher See ist der größte der Welt (nach Fläche)?",
            "Antworten": ["Baikalsee", "Victoriasee", "Kaspisches Meer", "Oberer See"],
            "RichtigeAntwort": "Kaspisches Meer",
            "RichtigeAntwortMöglichkeiten": "Kaspisches Meer",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Kaspische Meer ist mit einer Fläche von etwa 371.000 Quadratkilometern der größte See der Welt"
        },
        { //Anrainerstaaten des Kaspischen Meeres
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder grenzen an das Kaspische Meer?",
            "Antworten": ["3", "4", "5", "6"],
            "RichtigeAntwort": "5",
            "RichtigeAntwortMöglichkeiten": "5",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Fünf Länder grenzen an das Kaspische Meer: Russland, Kasachstan, Turkmenistan, Iran und Aserbaidschan"
        },
        { //Hauptzuflüsse des Kaspischen Meeres
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der Hauptzufluss des Kaspischen Meeres?",
            "Antworten": ["Donau", "Wolga", "Amur", "Jenissei"],
            "RichtigeAntwort": "Wolga",
            "RichtigeAntwortMöglichkeiten": "Wolga",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Wolga ist der Hauptzufluss des Kaspischen Meeres und der längste Fluss Europas"
        },
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    
        { //Höchstes Gebirge der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches Gebirge ist das höchste der Welt?",
            "Antworten": ["Anden", "Rocky Mountains", "Himalaya", "Alpen"],
            "RichtigeAntwort": "Himalaya",
            "RichtigeAntwortMöglichkeiten": "Himalaya",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Himalaya ist das höchste Gebirge der Welt und beherbergt den Mount Everest"
        },
        { //Tierspezies im Himalaya
            "Kategorie": "Geographie",
            "Frage": "Welche seltene Tierspezies ist im Himalaya heimisch?",
            "Antworten": ["Schneeleopard", "Polarfuchs", "Koala", "Komodowaran"],
            "RichtigeAntwort": "Schneeleopard",
            "RichtigeAntwortMöglichkeiten": "Schneeleopard",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Schneeleopard ist eine seltene Tierspezies, die im Himalaya-Gebirge heimisch ist"
        },
        { //Himalaya-Mythen
            "Kategorie": "Geographie",
            "Frage": "Welches mythische Wesen soll im Himalaya leben?",
            "Antworten": ["Bigfoot", "Chupacabra", "Nessie", "Yeti"],
            "RichtigeAntwort": "Yeti",
            "RichtigeAntwortMöglichkeiten": "Yeti",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Yeti, auch bekannt als der 'Schneemensch', ist ein mythisches Wesen, das angeblich im Himalaya lebt"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Amazonas-Regenwald
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt der Amazonas-Regenwald?",
            "Antworten": ["Afrika", "Asien", "Südamerika", "Australien"],
            "RichtigeAntwort": "Südamerika",
            "RichtigeAntwortMöglichkeiten": "Südamerika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas-Regenwald liegt in Südamerika und erstreckt sich über mehrere Länder"
        },
    
        { //Größe des Amazonas-Regenwaldes
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Amazonas-Regenwald?",
            "Antworten": ["2,5 Millionen km²", "6 Millionen km²", "1 Millionen km²", "65 Millionen km²"],
            "RichtigeAntwort": "6 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "6 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas-Regenwald erstreckt sich über etwa 6 Millionen Quadratkilometer und ist der größte Regenwald der Welt"
        },
        { //Durchfließender Fluss
            "Kategorie": "Geographie",
            "Frage": "Welcher große Fluss fließt durch den Amazonas-Regenwald?",
            "Antworten": ["Nil", "Mississippi", "Amazonas", "Ganges"],
            "RichtigeAntwort": "Amazonas",
            "RichtigeAntwortMöglichkeiten": "Amazonas",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Amazonas ist der größte Fluss, der durch den Amazonas-Regenwald fließt und hat das größte Einzugsgebiet der Welt"
        },
        { //Länder, die den Amazonas-Regenwald teilen
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder teilen sich den Amazonas-Regenwald?",
            "Antworten": ["6", "7", "8", "9"],
            "RichtigeAntwort": "9",
            "RichtigeAntwortMöglichkeiten": "9",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas-Regenwald erstreckt sich über neun Länder: Brasilien, Peru, Kolumbien, Venezuela, Ecuador, Bolivien, Guyana, Suriname und Französisch-Guayana"
        },
        { //Gefährdung des Amazonas-Regenwaldes
            "Kategorie": "Geographie",
            "Frage": "Welche Hauptgefahr bedroht den Amazonas-Regenwald?",
            "Antworten": ["Erdbeben", "Tsunamis", "Abholzung", "Vulkanausbrüche"],
            "RichtigeAntwort": "Abholzung",
            "RichtigeAntwortMöglichkeiten": "Abholzung",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Abholzung ist die größte Bedrohung für den Amazonas-Regenwald, was zu erheblichen Umweltproblemen führt"
        },
        { //Indigene Völker im Amazonas-Regenwald
            "Kategorie": "Geographie",
            "Frage": "Wie viele indigene Völker leben im Amazonas-Regenwald?",
            "Antworten": ["Mehr als 100", "ungefähr 40", "Mehr als 300", "Mehr als 10.000"],
            "RichtigeAntwort": "Mehr als 300",
            "RichtigeAntwortMöglichkeiten": "Mehr als 300",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Im Amazonas-Regenwald leben mehr als 300 indigene Völker, die in Harmonie mit der Natur leben"
        },
        { //Nutztier des Amazonas-Regenwalds
            "Kategorie": "Geographie",
            "Frage": "Welches Tier ist bekannt dafür, große Gebiete des Amazonas-Regenwalds zu bewohnen und zu nutzen?",
            "Antworten": ["Jaguar", "Elefant", "Känguru", "Fuchs"],
            "RichtigeAntwort": "Jaguar",
            "RichtigeAntwortMöglichkeiten": "Jaguar",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Jaguar ist eines der größten Raubtiere im Amazonas-Regenwald und spielt eine wichtige Rolle im Ökosystem"
        },
        { //Andere Bezeichnung für den Amazonas-Regenwald
            "Kategorie": "Geographie",
            "Frage": "Wie wird der Amazonas-Regenwald noch genannt?",
            "Antworten": ["Der grüne Riese", "Die grüne Wüste", "Die Lunge der Erde", "Der grüne Ozean"],
            "RichtigeAntwort": "Die Lunge der Erde",
            "RichtigeAntwortMöglichkeiten": "Die Lunge der Erde",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas-Regenwald wird oft als 'Lunge der Erde' bezeichnet, weil er eine große Menge Sauerstoff produziert"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Meisten Inseln
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die meisten Inseln der Welt?",
            "Antworten": ["Indonesien", "Philippinen", "Kanada", "Schweden"],
            "RichtigeAntwort": "Schweden",
            "RichtigeAntwortMöglichkeiten": "Schweden",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Schweden hat die meisten Inseln der Welt mit etwa 267.570 Inseln"
        },
        { //Atacama-Wüste
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Atacama-Wüste, die trockenste Wüste der Welt?",
            "Antworten": ["Tansania", "China", "Chile", "Äthiopien"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Atacama-Wüste wird für wissenschaftliche Forschung genutzt, da ihre Bedingungen denen auf dem Mars ähneln"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Salzhaltigstes Meer
            "Kategorie": "Geographie",
            "Frage": "Welches Meer ist das salzhaltigste der Welt?",
            "Antworten": ["Mittelmeer", "Rotes Meer", "Tote Meer", "Kaspisches Meer"],
            "RichtigeAntwort": "Tote Meer",
            "RichtigeAntwortMöglichkeiten": "Tote Meer",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Tote Meer hat einen Salzgehalt von etwa 30%"
        },
        { //Lage des Toten Meeres
            "Kategorie": "Geographie",
            "Frage": "Zwischen welchen zwei Ländern liegt das Tote Meer?",
            "Antworten": ["Israel und Jordanien", "Ägypten und Libyen", "Syrien und Irak", "Saudi-Arabien und Kuwait"],
            "RichtigeAntwort": "Israel und Jordanien",
            "RichtigeAntwortMöglichkeiten": "Israel Jordanien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Tote Meer ist der tiefste Punkt auf der Erdoberfläche, etwa 430 Meter unter dem Meeresspiegel"
        },
        { //Heilende Eigenschaften des Toten Meeres
            "Kategorie": "Geographie",
            "Frage": "Welches Element des Toten Meeres wird oft zur Behandlung von Hautkrankheiten genutzt?",
            "Antworten": ["Wasser", "Sand", "Schlamm", "Luft"],
            "RichtigeAntwort": "Schlamm",
            "RichtigeAntwortMöglichkeiten": "Schlamm",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Schlamm des Toten Meeres ist für seine heilenden Eigenschaften bekannt und wird oft zur Behandlung von Hautkrankheiten genutzt"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Größe der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist die Antarktis ungefähr?",
            "Antworten": ["8 Millionen km²", "14 Millionen km²", "27 Millionen km²", "29 Millionen km²"],
            "RichtigeAntwort": "14 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "14 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Antarktis erstreckt sich über eine Fläche von etwa 14 Millionen Quadratkilometern"
        },
        { //Kälte der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Wie tief kann die Temperatur in der Antarktis fallen?",
            "Antworten": ["-40°C", "-270°C", "-80°C", "-100°C"],
            "RichtigeAntwort": "-80°C",
            "RichtigeAntwortMöglichkeiten": "-80°C",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Antarktis ist damit der kälteste Ort der Erde"
        },
        { //Eisdecke der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Wie viel Prozent der weltweiten Süßwasserreserven sind in der Eisdecke der Antarktis gespeichert?",
            "Antworten": ["17%", "11%", "70%", "33%"],
            "RichtigeAntwort": "70%",
            "RichtigeAntwortMöglichkeiten": "70%",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Etwa 70% der weltweiten Süßwasserreserven sind in der Eisdecke der Antarktis gespeichert"
        },
        { //Sonne in der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Wie lange ist die Sonne während des antarktischen Sommers sichtbar?",
            "Antworten": ["Gar nicht", "24 Stunden", "1 Monat", "6 Monate"],
            "RichtigeAntwort": "24 Stunden",
            "RichtigeAntwortMöglichkeiten": "24 Stunden",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Während des antarktischen Sommers ist die Sonne rund um die Uhr sichtbar"
        },
        { //Tiere der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Welche Tierart lebt typischerweise in der Antarktis?",
            "Antworten": ["Pinguine", "Eisbären", "Kamele", "Polarfüchse"],
            "RichtigeAntwort": "Pinguine",
            "RichtigeAntwortMöglichkeiten": "Pinguine",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Pinguine sind eine typische Tierart, die in der Antarktis lebt"
        },
        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        { //Kleinster Kontinent der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist der kleinste Kontinent der Welt?",
            "Antworten": ["Europa", "Australien", "Antarktis", "Südamerika"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australien ist der kleinste Kontinent der Welt mit einer Fläche von etwa 7,7 Millionen Quadratkilometern"
        },
        { //Größtes Land der Welt nach Fläche
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist das größte der Welt (nach Fläche)?",
            "Antworten": ["Kanada", "China", "USA", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Russland ist das größte Land der Welt und erstreckt sich über elf Zeitzonen"
        },
        { //Kontinent der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt die Antarktis?",
            "Antworten": ["Asien", "Europa", "Antarktis", "Australien"],
            "RichtigeAntwort": "Antarktis",
            "RichtigeAntwortMöglichkeiten": "Antarktis",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Antarktis ist der kälteste und trockenste Kontinent der Erde"
        },
        { //Anzahl der Länder auf der Welt
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es auf der Welt?",
            "Antworten": ["96", "127", "525", "195"],
            "RichtigeAntwort": "195",
            "RichtigeAntwortMöglichkeiten": "195",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Gerade keine Zeit für einen Fakt"
        },
        { //Anzahl der Länder in Afrika
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Afrika?",
            "Antworten": ["50", "52", "54", "56"],
            "RichtigeAntwort": "54",
            "RichtigeAntwortMöglichkeiten": "54",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Afrika besteht aus 54 souveränen Staaten und ist damit der Kontinent mit den meisten Ländern"
        },
        { //Anzahl der Länder in Asien
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Asien?",
            "Antworten": ["32", "47", "56", "71"],
            "RichtigeAntwort": "49",
            "RichtigeAntwortMöglichkeiten": "49",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Asien besteht aus 49 souveränen Staaten"
        },
        { //Anzahl der Länder in Europa
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Europa?",
            "Antworten": ["44", "49", "68", "50"],
            "RichtigeAntwort": "44",
            "RichtigeAntwortMöglichkeiten": "44",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Europa besteht aus 44 souveränen Staaten"
        },
        { //Anzahl der Länder in Nordamerika
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Nordamerika?",
            "Antworten": ["9", "23", "14", "3"],
            "RichtigeAntwort": "23",
            "RichtigeAntwortMöglichkeiten": "23",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Nordamerika besteht aus 23 souveränen Staaten"
        },
        { //Anzahl der Länder in Südamerika
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Südamerika?",
            "Antworten": ["5", "12", "22", "16"],
            "RichtigeAntwort": "12",
            "RichtigeAntwortMöglichkeiten": "12 13",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Südamerika besteht aus 12 souveränen Staaten"
        },
        { //Anzahl der Länder in Australien und Ozeanien
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in Australien und Ozeanien?",
            "Antworten": ["3", "14", "4", "43"],
            "RichtigeAntwort": "14",
            "RichtigeAntwortMöglichkeiten": "14",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australien und Ozeanien bestehen aus 14 souveränen Staaten"
        },
        { //Anzahl der Länder in der Antarktis
            "Kategorie": "Geographie",
            "Frage": "Wie viele Länder gibt es in der Antarktis?",
            "Antworten": ["0", "1", "3", "5"],
            "RichtigeAntwort": "0",
            "RichtigeAntwortMöglichkeiten": "0",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Es gibt keine souveränen Staaten in der Antarktis, da der Kontinent durch den Antarktisvertrag international verwaltet wird"
        },
        { //Anzahl der Länder in Afrika
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die meisten Länder?",
            "Antworten": ["Afrika", "Europa", "Asien", "Südamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Afrika besteht aus 54 souveränen Staaten"
        },
        { //Wenigste Länder auf einem Kontinent
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die wenigsten Länder?",
            "Antworten": ["Europa", "Südamerika", "Australien und Ozeanien", "Antarktis"],
            "RichtigeAntwort": "Antarktis",
            "RichtigeAntwortMöglichkeiten": "Antarktis",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Antarktis hat keine souveränen Staaten, da der Kontinent durch den Antarktisvertrag international verwaltet wird"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Meer zwischen Europa und Afrika
            "Kategorie": "Geographie",
            "Frage": "Welches Meer liegt zwischen Europa und Afrika?",
            "Antworten": ["Nordsee", "Ostsee", "Schwarzes Meer", "Mittelmeer"],
            "RichtigeAntwort": "Mittelmeer",
            "RichtigeAntwortMöglichkeiten": "Mittelmeer",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Mittelmeer verbindet Europa, Afrika und Asien und war historisch eine wichtige Handelsroute"
        },
        { //Fläche des Mittelmeers
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist die Fläche des Mittelmeers?",
            "Antworten": ["1 Million km²", "2,5 Millionen km²", "4 Millionen km²", "5,5 Millionen km²"],
            "RichtigeAntwort": "2,5 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "2,5 Millionen km²",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Mittelmeer erstreckt sich über eine Fläche von etwa 2,5 Millionen Quadratkilometern"
        },
        { //Verbindung zu anderen Meeren
            "Kategorie": "Geographie",
            "Frage": "Welcher Kanal verbindet das Mittelmeer mit dem Roten Meer?",
            "Antworten": ["Panamakanal", "Suezkanal", "Kielkanal", "Korinthkanal"],
            "RichtigeAntwort": "Suezkanal",
            "RichtigeAntwortMöglichkeiten": "Suezkanal",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Dadurch ermöglicht er eine direkte Schifffahrtsroute zwischen Europa und Asien"
        },
        { //Umrundende Kontinente
            "Kategorie": "Geographie",
            "Frage": "Welche Kontinente grenzen an das Mittelmeer?",
            "Antworten": ["Europa und Asien", "Asien und Afrika", "Europa, Asien und Afrika", "Europa und Afrika"],
            "RichtigeAntwort": "Europa, Asien und Afrika",
            "RichtigeAntwortMöglichkeiten": "Europa, Asien und Afrika",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Mittelmeer wird von drei Kontinenten umgeben: Europa, Asien und Afrika"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Bevölkerungsreichste Kontinent
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent ist der bevölkerungsreichste?",
            "Antworten": ["Afrika", "Europa", "Asien", "Amerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Asien ist der bevölkerungsreichste Kontinent mit etwa 60% der Weltbevölkerung"
        },
        { //Bevölkerungsärmster Kontinent
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent ist der bevölkerungsärmste?",
            "Antworten": ["Australien und Ozeanien", "Antarktis", "Europa", "Südamerika"],
            "RichtigeAntwort": "Antarktis",
            "RichtigeAntwortMöglichkeiten": "Antarktis",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Antarktis hat keine permanente Bevölkerung und ist damit der bevölkerungsärmste Kontinent"
        },
        { //Land der tausend Seen
            "Kategorie": "Geographie",
            "Frage": "Welches Land wird oft als 'Land der tausend Seen' bezeichnet?",
            "Antworten": ["Schweden", "Kanada", "Finnland", "Norwegen"],
            "RichtigeAntwort": "Finnland",
            "RichtigeAntwortMöglichkeiten": "Finnland",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Finnland wird als 'Land der tausend Seen' bezeichnet,da es etwa 188.000 Seen hat"
        },
        { //Ozeane um Afrika
            "Kategorie": "Geographie",
            "Frage": "Welche zwei Ozeane umgeben Afrika?",
            "Antworten": ["Atlantischer und Pazifischer Ozean", "Indischer und Pazifischer Ozean", "Atlantischer und Indischer Ozean", "Arktischer und Atlantischer Ozean"],
            "RichtigeAntwort": "Atlantischer und Indischer Ozean",
            "RichtigeAntwortMöglichkeiten": "Atlantischer Indischer Atlantik",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Afrika wird vom Atlantischen und Indischen Ozean umgeben"
        },
    
        { //Fluss zwischen Mexiko und USA
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss bildet die Grenze zwischen Mexiko und den USA?",
            "Antworten": ["Mississippi", "Colorado", "Rio Grande", "Missouri"],
            "RichtigeAntwort": "Rio Grande",
            "RichtigeAntwortMöglichkeiten": "Rio Grande",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Rio Grande bildet einen natürlichen Grenzverlauf zwischen Mexiko und den USA"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Höchster Berg in Europa
            "Kategorie": "Geographie",
            "Frage": "Welcher Berg ist der höchste in Europa?",
            "Antworten": ["Matterhorn", "Mont Blanc", "Zugspitze", "Elbrus"],
            "RichtigeAntwort": "Mont Blanc",
            "RichtigeAntwortMöglichkeiten": "Mont Blanc",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mont Blanc ist mit 4.810 Metern der höchste Berg in den Alpen und Europa"
        },
        { //Höhe des Mont Blanc
            "Kategorie": "Geographie",
            "Frage": "Wie hoch ist der Mont Blanc?",
            "Antworten": ["3.800 Meter", "4.200 Meter", "4.810 Meter", "5.000 Meter"],
            "RichtigeAntwort": "4.810 Meter",
            "RichtigeAntwortMöglichkeiten": "4.810 Meter",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mont Blanc ist mit 4.810 Metern der höchste Berg der Alpen und Westeuropas"
        },
        { //Grenze des Mont Blanc
            "Kategorie": "Geographie",
            "Frage": "Zwischen welchen Ländern liegt der Mont Blanc?",
            "Antworten": ["Deutschland und Österreich", "Frankreich und Italien", "Schweiz und Italien", "Frankreich und Schweiz"],
            "RichtigeAntwort": "Frankreich und Italien",
            "RichtigeAntwortMöglichkeiten": "Frankreich und Italien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Mont-Blanc-Tunnel ist einer der längsten Straßentunnel der Welt und verbindet Frankreich und Italien unter dem Berg hindurch"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Land der Pyramiden
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist für seine großen Pyramiden bekannt?",
            "Antworten": ["Mexiko", "Peru", "Ägypten", "Indien"],
            "RichtigeAntwort": "Ägypten",
            "RichtigeAntwortMöglichkeiten": "Ägypten",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Ägypten ist weltweit bekannt für seine großen Pyramiden, insbesondere die Pyramiden von Gizeh"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Land südlich von Kanada
            "Kategorie": "Geographie",
            "Frage": "Welches Land liegt südlich von Kanada?",
            "Antworten": ["Mexiko", "Vereinigte Staaten von Amerika", "Grönland", "Kuba"],
            "RichtigeAntwort": "Vereinigte Staaten von Amerika",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten von Amerika USA",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Vereinigten Staaten von Amerika liegen südlich von Kanada"
        },
        { //See zwischen Israel und Jordanien
            "Kategorie": "Geographie",
            "Frage": "Welcher See liegt zwischen Israel und Jordanien?",
            "Antworten": ["Tiberias-See", "Tote Meer", "Kaspisches Meer", "Tanganjikasee"],
            "RichtigeAntwort": "Tote Meer",
            "RichtigeAntwortMöglichkeiten": "Tote Meer",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Tote Meer liegt zwischen Israel und Jordanien und ist bekannt für seinen hohen Salzgehalt"
        },
        { //Zeitzonen in Russland
            "Kategorie": "Geographie",
            "Frage": "Wie viele Zeitzonen gibt es in Russland?",
            "Antworten": ["7", "9", "11", "6"],
            "RichtigeAntwort": "11",
            "RichtigeAntwortMöglichkeiten": "11",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Russland erstreckt sich über 11 Zeitzonen, mehr als jedes andere Land der Welt"
        },
    
    
    
        { //Land mit dem höchsten BIP der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat das höchste Bruttoinlandsprodukt (BIP) der Welt?",
            "Antworten": ["China", "Deutschland", "Japan", "Vereinigte Staaten von Amerika"],
            "RichtigeAntwort": "Vereinigte Staaten von Amerika",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten von Amerika USA",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Vereinigten Staaten von Amerika haben das höchste Bruttoinlandsprodukt (BIP) der Welt"
        },
        { //Ärmstes Land der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist das ärmste Land der Welt (nach BIP pro Kopf)?",
            "Antworten": ["Südsudan", "Niger", "Burundi", "Zentralafrikanische Republik"],
            "RichtigeAntwort": "Burundi",
            "RichtigeAntwortMöglichkeiten": "Burundi",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Burundi ist das ärmste Land der Welt, gemessen am BIP pro Kopf"
        },
    
        { //Kältester Ort der Erde
            "Kategorie": "Geographie",
            "Frage": "Was ist der kälteste Ort der Erde?",
            "Antworten": ["Nordpol", "Mount Everest", "Sibirien", "Ostantarktisches Plateau"],
            "RichtigeAntwort": "Ostantarktisches Plateau",
            "RichtigeAntwortMöglichkeiten": "Ostantarktisches Plateau",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Ostantarktische Plateau ist der kälteste Ort der Erde, wo Temperaturen bis zu -93,2°C gemessen wurden"
        },
        { //Größte Wüste der Welt
            "Kategorie": "Geographie",
            "Frage": "Was ist die größte Wüste der Welt?",
            "Antworten": ["Sahara", "Gobi", "Antarktische Wüste", "Arktische Wüste"],
            "RichtigeAntwort": "Antarktische Wüste",
            "RichtigeAntwortMöglichkeiten": "Antarktische Wüste",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Antarktische Wüste ist die größte Wüste der Welt, obwohl sie aus Eis und Schnee besteht"
        },
        { //Anzahl der großen Inseln in Hawaii
            "Kategorie": "Geographie",
            "Frage": "Wie viele große Inseln bilden Hawaii?",
            "Antworten": ["Fünf", "Sechs", "Acht", "Zehn"],
            "RichtigeAntwort": "Acht",
            "RichtigeAntwortMöglichkeiten": "Acht",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Hawaii besteht aus acht großen Inseln: Hawai'i, Maui, O'ahu, Kaua'i, Moloka'i, Lāna'i, Ni'ihau und Kaho'olawe"
        },
        { //Größter Vulkan der Erde
            "Kategorie": "Geographie",
            "Frage": "Wo befindet sich der größte Vulkan der Erde?",
            "Antworten": ["Island", "Hawaii", "Indonesien", "Japan"],
            "RichtigeAntwort": "Hawaii",
            "RichtigeAntwortMöglichkeiten": "Hawaii",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der größte Vulkan der Erde, der Mauna Loa, befindet sich auf Hawaii"
        },
        { //Größte Insel der Welt
            "Kategorie": "Geographie",
            "Frage": "Was ist die größte Insel der Welt?",
            "Antworten": ["Neuguinea", "Borneo", "Madagaskar", "Grönland"],
            "RichtigeAntwort": "Grönland",
            "RichtigeAntwortMöglichkeiten": "Grönland",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Grönland ist die größte Insel der Welt und befindet sich im Nordatlantik"
        },
        { //Anzahl der Zeitzonen in Australien
            "Kategorie": "Geographie",
            "Frage": "Wie viele Zeitzonen hat Australien?",
            "Antworten": ["Zwei", "Drei", "Vier", "Fünf"],
            "RichtigeAntwort": "Drei",
            "RichtigeAntwortMöglichkeiten": "Drei",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australian Western Standard Time, Australian Central Standard Time und Australian Eastern Standard Time"
        },
        { //13 Streifen auf der Flagge der Vereinigten Staaten
            "Kategorie": "Geographie",
            "Frage": "Was symbolisieren die 13 Streifen auf der Flagge der Vereinigten Staaten?",
            "Antworten": ["Die 13 ursprünglichen Kolonien", "Die 13 Gründungsstaaten", "Die 13 Regionen", "Die 13 Präsidenten"],
            "RichtigeAntwort": "Die 13 ursprünglichen Kolonien",
            "RichtigeAntwortMöglichkeiten": "Die 13 ursprünglichen Kolonien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die 13 Streifen auf der Flagge der Vereinigten Staaten symbolisieren die 13 ursprünglichen Kolonien, die die Unabhängigkeit erklärten"
        },
        { //50 Sterne auf der Flagge der Vereinigten Staaten
            "Kategorie": "Geographie",
            "Frage": "Was symbolisieren die 50 Sterne auf der Flagge der Vereinigten Staaten?",
            "Antworten": ["Die 50 Bundesstaaten", "Die 50 Präsidenten", "Die 50 Jahre", "Die 50 Gründungsmitglieder"],
            "RichtigeAntwort": "Die 50 Bundesstaaten",
            "RichtigeAntwortMöglichkeiten": "50 Bundesstaaten Staaten",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die 50 Sterne auf der Flagge der Vereinigten Staaten symbolisieren die 50 Bundesstaaten"
        },
        { //Flächenmäßig größter US-Bundesstaat
            "Kategorie": "Geographie",
            "Frage": "Was ist der flächenmäßig größte US-Bundesstaat?",
            "Antworten": ["Texas", "Alaska", "California", "Montana"],
            "RichtigeAntwort": "Alaska",
            "RichtigeAntwortMöglichkeiten": "Alaska",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Alaska ist flächenmäßig der größte US-Bundesstaat und fast sieben Mal so groß wie der kleinste Bundesstaat Rhode Island"
        }, 
        { //Zugehörigkeit der Kanarischen Inseln
            "Kategorie": "Geographie",
            "Frage": "Zu welchem Land gehören die Kanarischen Inseln?",
            "Antworten": ["Portugal", "Marokko", "Spanien", "Italien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Kanarischen Inseln gehören zu Spanien und liegen im Atlantischen Ozean, nordwestlich von Afrika"
        },
        { //Zweithöchster Berg der Welt
            "Kategorie": "Geographie",
            "Frage": "Wie heißt der zweithöchste Berg der Welt?",
            "Antworten": ["Kangchenjunga", "Lhotse", "Makalu", "K2"],
            "RichtigeAntwort": "K2",
            "RichtigeAntwortMöglichkeiten": "K2",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der K2 ist mit 8.611 Metern der zweithöchste Berg der Welt und liegt im Karakorum-Gebirge an der Grenze zwischen Pakistan und China"
        },
        { //Höchstes von Menschenhand geschaffenes Bauwerk
            "Kategorie": "Geographie",
            "Frage": "Was ist das höchste von Menschenhand geschaffene Bauwerk, das jemals gebaut wurde?",
            "Antworten": ["Shanghai Tower", "Abraj Al Bait", "Burj Khalifa in Dubai", "Taipei 101"],
            "RichtigeAntwort": "Burj Khalifa in Dubai",
            "RichtigeAntwortMöglichkeiten": "Burj Khalifa in Dubai",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Burj Khalifa in Dubai ist mit einer Höhe von 828 Metern das höchste von Menschenhand geschaffene Bauwerk der Welt"
        },
        { //Vom Meer bedeckte Erdoberfläche
            "Kategorie": "Geographie",
            "Frage": "Wie viel der Erdoberfläche ist vom Meer bedeckt?",
            "Antworten": ["57%", "45%", "90%", "71%"],
            "RichtigeAntwort": "71%",
            "RichtigeAntwortMöglichkeiten": "71%",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Etwa 71% der Erdoberfläche sind vom Meer bedeckt, was die Ozeane zu einem wesentlichen Bestandteil des globalen Ökosystems macht"
        },
        { //Erforschte Ozeane
            "Kategorie": "Geographie",
            "Frage": "Wie viel Prozent unserer Ozeane wurden erforscht?",
            "Antworten": ["5%", "99%", "55%", "19%"],
            "RichtigeAntwort": "5%",
            "RichtigeAntwortMöglichkeiten": "5 5% fünf",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Nur 5% unserer Ozeane sind erforscht, was bedeutet, dass der größte Teil der Meere noch immer ein Geheimnis bleibt"
        },
    
    
    
    
        { //Durchmesser der Erde
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Durchmesser der Erde am Äquator (in km)?",
            "Antworten": ["5.978km", "12.742km", "2.547km", "14.806km"],
            "RichtigeAntwort": "12.742km",
            "RichtigeAntwortMöglichkeiten": "12.742km 12.000km 13.000km 12.500km 12742km 12000km 13000km 12500km",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Durchmesser der Erde am Äquator beträgt etwa 12.742 Kilometer"
        },
        { //Oberfläche der Erde
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist die gesamte Oberfläche der Erde?",
            "Antworten": ["100 Millionen km²", "510 Millionen km²", "690 Millionen km²", "710 Millionen km²"],
            "RichtigeAntwort": "510 Millionen km²",
            "RichtigeAntwortMöglichkeiten": "510 Millionen km²",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die gesamte Oberfläche der Erde beträgt etwa 510 Millionen Quadratkilometer"
        },
        { //Umfang der Erde
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Umfang der Erde am Äquator?",
            "Antworten": ["30.075 km", "40.075 km", "55.075 km", "20.075 km"],
            "RichtigeAntwort": "40.075 km",
            "RichtigeAntwortMöglichkeiten": "40.075 km",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Umfang der Erde am Äquator beträgt etwa 40.075 Kilometer"
        },
        { //Tiefster Punkt der Erde
            "Kategorie": "Geographie",
            "Frage": "Welcher Punkt auf der Erde ist der tiefste unter dem Meeresspiegel?",
            "Antworten": ["Puerto-Rico-Graben", "Marianengraben", "Java-Graben", "Tonga-Graben"],
            "RichtigeAntwort": "Marianengraben",
            "RichtigeAntwortMöglichkeiten": "Marianengraben",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Marianengraben im Pazifik ist mit etwa 11.034 Metern unter dem Meeresspiegel der tiefste Punkt der Erde"
        },
        { //Durchschnittliche Tiefe der Ozeane
            "Kategorie": "Geographie",
            "Frage": "Wie tief sind die Ozeane der Erde im Durchschnitt?",
            "Antworten": ["2.000 Meter", "3.000 Meter", "3.800 Meter", "4.500 Meter"],
            "RichtigeAntwort": "3.800 Meter",
            "RichtigeAntwortMöglichkeiten": "3.800 Meter",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die durchschnittliche Tiefe der Ozeane beträgt etwa 3.800 Meter, was etwa 12.500 Fuß entspricht"
        },
        { //Polardurchmesser der Erde
            "Kategorie": "Geographie",
            "Frage": "Wie groß ist der Durchmesser der Erde von Pol zu Pol?",
            "Antworten": ["10.714 km", "12.714 km", "13.714 km", "14.714 km"],
            "RichtigeAntwort": "12.714 km",
            "RichtigeAntwortMöglichkeiten": "12.714 km",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Durchmesser der Erde von Pol zu Pol beträgt etwa 12.714 Kilometer"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        
        { //Bundesstaat mit den meisten Einwohnern
            "Kategorie": "Geographie",
            "Frage": "Welcher Bundesstaat der USA hat die meisten Einwohner?",
            "Antworten": ["New York", "Texas", "Kalifornien", "Florida"],
            "RichtigeAntwort": "Kalifornien",
            "RichtigeAntwortMöglichkeiten": "Kalifornien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Kalifornien ist der bevölkerungsreichste Bundesstaat der USA mit über 39 Millionen Einwohnern"
        },
        { //Fluss durch Colorado
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss fließt durch den Bundesstaat Colorado und den Grand Canyon?",
            "Antworten": ["Mississippi", "Colorado", "Rio Grande", "Missouri"],
            "RichtigeAntwort": "Colorado",
            "RichtigeAntwortMöglichkeiten": "Colorado",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Colorado River fließt durch den Bundesstaat Colorado und den Grand Canyon in Arizona"
        },
        { //Bundesstaat mit dem Grand Canyon
            "Kategorie": "Geographie",
            "Frage": "In welchem Bundesstaat befindet sich der Grand Canyon?",
            "Antworten": ["Nevada", "Arizona", "Utah", "Colorado"],
            "RichtigeAntwort": "Arizona",
            "RichtigeAntwortMöglichkeiten": "Arizona",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Grand Canyon befindet sich im Bundesstaat Arizona und ist eines der sieben Weltwunder der Natur"
        },
        { //Hauptstadt von New York
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von New York?",
            "Antworten": ["New York City", "Buffalo", "Albany", "Rochester"],
            "RichtigeAntwort": "Albany",
            "RichtigeAntwortMöglichkeiten": "Albany",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Obwohl New York City die bekannteste Stadt ist ist sie nicht die Hauptstadt New Yorks"
        },
        { //Bundesstaat mit der größten Wüste
            "Kategorie": "Geographie",
            "Frage": "In welchem Bundesstaat befindet sich die größte Wüste der USA die Mojave-Wüste?",
            "Antworten": ["Nevada", "Arizona", "Kalifornien", "New Mexico"],
            "RichtigeAntwort": "Kalifornien",
            "RichtigeAntwortMöglichkeiten": "Kalifornien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Mojave-Wüste, die größte Wüste der USA, befindet sich größtenteils in Kalifornien"
        },
        { //Höchster Berg in den USA
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der höchste Berg in den USA?",
            "Antworten": ["Mount Whitney", "Mount Rainier", "Mount Elbert", "Denali"],
            "RichtigeAntwort": "Denali",
            "RichtigeAntwortMöglichkeiten": "Denali",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Denali, auch bekannt als Mount McKinley, ist mit 6.190 Metern der höchste Berg in den USA und befindet sich in Alaska"
        },
        { //Anzahl der Bundesstaaten in den USA
            "Kategorie": "Geographie",
            "Frage": "Wie viele Bundesstaaten gibt es in den USA?",
            "Antworten": ["48", "49", "50", "51"],
            "RichtigeAntwort": "50",
            "RichtigeAntwortMöglichkeiten": "50",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Vereinigten Staaten bestehen aus 50 Bundesstaaten"
        },
        { //Neueste Bundesstaat der USA
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der neueste Bundesstaat der USA?",
            "Antworten": ["Hawaii", "Alaska", "Arizona", "New Mexico"],
            "RichtigeAntwort": "Hawaii",
            "RichtigeAntwortMöglichkeiten": "Hawaii",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Hawaii ist der neueste Bundesstaat der USA und trat der Union 1959 bei"
        },
        { //Kleinster Bundesstaat nach Fläche
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der flächenmäßig kleinste Bundesstaat der USA?",
            "Antworten": ["Delaware", "Rhode Island", "Connecticut", "New Jersey"],
            "RichtigeAntwort": "Rhode Island",
            "RichtigeAntwortMöglichkeiten": "Rhode Island",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Rhode Island ist der flächenmäßig kleinste Bundesstaat der USA"
        },
        { //Bundesstaatenanzahl bei Gründung
            "Kategorie": "Geographie",
            "Frage": "Wie viele Bundesstaaten gab es bei der Gründung der USA?",
            "Antworten": ["10", "13", "15", "17"],
            "RichtigeAntwort": "13",
            "RichtigeAntwortMöglichkeiten": "13",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Bei der Gründung der USA im Jahr 1776 gab es 13 ursprüngliche Bundesstaaten, bekannt als die ursprünglichen Kolonien"
        },
        { //Bundesstaat mit der längsten Küstenlinie
            "Kategorie": "Geographie",
            "Frage": "Welcher Bundesstaat der USA hat die längste Küstenlinie?",
            "Antworten": ["Kalifornien", "Florida", "Texas", "Alaska"],
            "RichtigeAntwort": "Alaska",
            "RichtigeAntwortMöglichkeiten": "Alaska",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Alaska hat die längste Küstenlinie aller Bundesstaaten der USA"
        },
        { //Einziger Bundesstaat mit einer Inselkette
            "Kategorie": "Geographie",
            "Frage": "Welcher Bundesstaat der USA ist eine Inselkette?",
            "Antworten": ["Hawaii", "Florida", "Kalifornien", "Texas"],
            "RichtigeAntwort": "Hawaii",
            "RichtigeAntwortMöglichkeiten": "Hawaii",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Hawaii ist der einzige Bundesstaat der USA, der aus einer Inselkette besteht"
        },
    
    
    
    
    
    
    
        
        
        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        ////////////////////////////// SÜD-AMERIKA //////////////////////////////
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Argentinien?",
            "Antworten": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
            "RichtigeAntwort": "Buenos Aires",
            "RichtigeAntwortMöglichkeiten": "Buenos Aires",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Buenos Aires bedeutet auf Spanisch 'Gute Lüfte'"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bolivien?",
            "Antworten": ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"],
            "RichtigeAntwort": "Sucre und La Paz",
            "RichtigeAntwortMöglichkeiten": "Sucre Paz",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bolivien hat zwei Hauptstädte: La Paz und Sucre"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Brasilien?",
            "Antworten": ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
            "RichtigeAntwort": "Brasília",
            "RichtigeAntwortMöglichkeiten": "Brasília Brasilia",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brasília wurde 1960 zur Hauptstadt von Brasilien"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Chile?",
            "Antworten": ["Santiago", "Valparaíso", "Concepción", "La Serena"],
            "RichtigeAntwort": "Santiago",
            "RichtigeAntwortMöglichkeiten": "Santiago",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Santiago wurde schon 1541 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kolumbien?",
            "Antworten": ["Bogotá", "Medellín", "Cali", "Cartagena"],
            "RichtigeAntwort": "Bogotá",
            "RichtigeAntwortMöglichkeiten": "Bogotá",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bogotá liegt auf einer Höhe von 2.640 Metern über dem Meeresspiegel"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ecuador?",
            "Antworten": ["Quito", "Guayaquil", "Cuenca", "Ambato"],
            "RichtigeAntwort": "Quito",
            "RichtigeAntwortMöglichkeiten": "Quito",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Quito liegt sehr nahe am Äquator"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Guyana?",
            "Antworten": ["Georgetown", "Linden", "New Amsterdam", "Bartica"],
            "RichtigeAntwort": "Georgetown",
            "RichtigeAntwortMöglichkeiten": "Georgetown",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Guyana ist das einzige englischsprachige Land in Südamerika"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Paraguay?",
            "Antworten": ["Asunción", "Ciudad del Este", "Encarnación", "San Lorenzo"],
            "RichtigeAntwort": "Asunción",
            "RichtigeAntwortMöglichkeiten": "Asunción Asuncion",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Asunción wurde 1537 gegründet und ist eine der ältesten Städte Südamerikas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Peru?",
            "Antworten": ["Lima", "Cusco", "Arequipa", "Trujillo"],
            "RichtigeAntwort": "Lima",
            "RichtigeAntwortMöglichkeiten": "Lima",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lima wurde 1535 von Francisco Pizarro gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Suriname?",
            "Antworten": ["Paramaribo", "Nieuw Nickerie", "Moengo", "Albina"],
            "RichtigeAntwort": "Paramaribo",
            "RichtigeAntwortMöglichkeiten": "Paramaribo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Paramaribo liegt am Ufer des Suriname-Flusses"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Uruguay?",
            "Antworten": ["Montevideo", "Salto", "Punta del Este", "Maldonado"],
            "RichtigeAntwort": "Montevideo",
            "RichtigeAntwortMöglichkeiten": "Montevideo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Montevideo ist die südlichste Hauptstadt Amerikas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Venezuela?",
            "Antworten": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"],
            "RichtigeAntwort": "Caracas",
            "RichtigeAntwortMöglichkeiten": "Caracas",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Caracas liegt im Küstengebirge Venezuelas"
        },
    
        ////////////////////////////// NORD-AMERIKA //////////////////////////////
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der USA?",
            "Antworten": ["New York", "Los Angeles", "Washington D.C.", "Las Vegas"],
            "RichtigeAntwort": "Washington D.C.",
            "RichtigeAntwortMöglichkeiten": "Washington D.C. Washington DC",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Washington D.C. wurde 1790 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kanada?",
            "Antworten": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            "RichtigeAntwort": "Ottawa",
            "RichtigeAntwortMöglichkeiten": "Ottawa",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Ottawa wurde 1857 zur Hauptstadt von Kanada erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mexiko?",
            "Antworten": ["Guadalajara", "Monterrey", "Cancún", "Mexiko-Stadt"],
            "RichtigeAntwort": "Mexiko-Stadt",
            "RichtigeAntwortMöglichkeiten": "Mexiko-Stadt Mexico City",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Mexiko-Stadt ist eine der ältesten Hauptstädte Amerikas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Guatemala?",
            "Antworten": ["Antigua", "Quetzaltenango", "Guatemala-Stadt", "Escuintla"],
            "RichtigeAntwort": "Guatemala-Stadt",
            "RichtigeAntwortMöglichkeiten": "Guatemala-Stadt Guatemala City",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Guatemala-Stadt wurde 1776 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Belize?",
            "Antworten": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk"],
            "RichtigeAntwort": "Belmopan",
            "RichtigeAntwortMöglichkeiten": "Belmopan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Belmopan wurde 1970 zur Hauptstadt von Belize erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Honduras?",
            "Antworten": ["San Pedro Sula", "La Ceiba", "Tegucigalpa", "Comayagua"],
            "RichtigeAntwort": "Tegucigalpa",
            "RichtigeAntwortMöglichkeiten": "Tegucigalpa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tegucigalpa wurde 1578 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von El Salvador?",
            "Antworten": ["San Salvador", "Santa Ana", "San Miguel", "Soyapango"],
            "RichtigeAntwort": "San Salvador",
            "RichtigeAntwortMöglichkeiten": "Salvador",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "San Salvador wurde 1525 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nicaragua?",
            "Antworten": ["León", "Granada", "Managua", "Masaya"],
            "RichtigeAntwort": "Managua",
            "RichtigeAntwortMöglichkeiten": "Managua",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Managua wurde 1852 zur Hauptstadt von Nicaragua erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Costa Rica?",
            "Antworten": ["San José", "Alajuela", "Cartago", "Heredia"],
            "RichtigeAntwort": "San José",
            "RichtigeAntwortMöglichkeiten": "San José San Jose",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "San José wurde 1823 zur Hauptstadt von Costa Rica erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Panama?",
            "Antworten": ["Colón", "David", "Santiago", "Panama-Stadt"],
            "RichtigeAntwort": "Panama-Stadt",
            "RichtigeAntwortMöglichkeiten": "Panama-Stadt Panama City",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Panama-Stadt wurde 1519 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Jamaika?",
            "Antworten": ["Montego Bay", "Kingston", "Spanish Town", "Portmore"],
            "RichtigeAntwort": "Kingston",
            "RichtigeAntwortMöglichkeiten": "Kingston",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kingston wurde 1692 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kuba?",
            "Antworten": ["Havanna", "Santiago de Cuba", "Holguín", "Camagüey"],
            "RichtigeAntwort": "Havanna",
            "RichtigeAntwortMöglichkeiten": "Havanna Havana",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Havanna wurde 1519 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der Dominikanischen Republik?",
            "Antworten": ["Puerto Plata", "Santiago de los Caballeros", "La Romana", "Santo Domingo"],
            "RichtigeAntwort": "Santo Domingo",
            "RichtigeAntwortMöglichkeiten": "Santo Domingo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Santo Domingo ist die älteste ständig bewohnte europäische Siedlung in Amerika"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Haiti?",
            "Antworten": ["Cap-Haïtien", "Gonaïves", "Les Cayes", "Port-au-Prince"],
            "RichtigeAntwort": "Port-au-Prince",
            "RichtigeAntwortMöglichkeiten": "Port-au-Prince",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Port-au-Prince wurde 1749 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Trinidad und Tobago?",
            "Antworten": ["San Fernando", "Port of Spain", "Chaguanas", "Arima"],
            "RichtigeAntwort": "Port of Spain",
            "RichtigeAntwortMöglichkeiten": "Port of Spain",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Port of Spain wurde 1560 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bahamas?",
            "Antworten": ["Freeport", "Nassau", "Marsh Harbour", "West End"],
            "RichtigeAntwort": "Nassau",
            "RichtigeAntwortMöglichkeiten": "Nassau",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nassau ist die größte Stadt und Hauptstadt der Bahamas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Barbados?",
            "Antworten": ["Speightstown", "Bridgetown", "Holetown", "Oistins"],
            "RichtigeAntwort": "Bridgetown",
            "RichtigeAntwortMöglichkeiten": "Bridgetown",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bridgetown wurde 1628 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Antigua und Barbuda?",
            "Antworten": ["All Saints", "Liberta", "Parham", "Saint John's"],
            "RichtigeAntwort": "Saint John's",
            "RichtigeAntwortMöglichkeiten": "Saint John's",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Saint John's wurde im 17. Jahrhundert gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Dominica?",
            "Antworten": ["Portsmouth", "Marigot", "Roseau", "Castle Bruce"],
            "RichtigeAntwort": "Roseau",
            "RichtigeAntwortMöglichkeiten": "Roseau",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Roseau ist die größte Stadt und Hauptstadt von Dominica"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von St. Kitts und Nevis?",
            "Antworten": ["Trinity", "Charlestown", "Dieppe Bay Town", "Basseterre"],
            "RichtigeAntwort": "Basseterre",
            "RichtigeAntwortMöglichkeiten": "Basseterre",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Basseterre wurde 1627 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von St. Vincent und die Grenadinen?",
            "Antworten": ["Kingstown", "Georgetown", "Barrouallie", "Chateaubelair"],
            "RichtigeAntwort": "Kingstown",
            "RichtigeAntwortMöglichkeiten": "Kingstown",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kingstown wurde 1763 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von St. Lucia?",
            "Antworten": ["Gros Islet", "Soufrière", "Vieux Fort", "Castries"],
            "RichtigeAntwort": "Castries",
            "RichtigeAntwortMöglichkeiten": "Castries",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Castries wurde 1650 gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Grenada?",
            "Antworten": ["St. George's", "Gouyave", "Grenville", "Victoria"],
            "RichtigeAntwort": "St. George's",
            "RichtigeAntwortMöglichkeiten": "St. George's",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "St. George's wurde 1650 gegründet"
        },
    
    
        ////////////////////////////// EUROPA //////////////////////////////
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt wird als politisches Zentrum Europas bezeichnet?",
            "Antworten": ["Brüssel", "Paris", "London", "Madrid"],
            "RichtigeAntwort": "Brüssel",
            "RichtigeAntwortMöglichkeiten": "Brüssel",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brüssel wir oft inoffiziell als 'Hauptstadt Europas' betitelt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Deutschland?",
            "Antworten": ["Berlin", "München", "Frankfurt", "Hamburg"],
            "RichtigeAntwort": "Berlin",
            "RichtigeAntwortMöglichkeiten": "Berlin",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Berlin ist die größte Stadt Deutschlands"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Frankreich?",
            "Antworten": ["Marseille", "Lyon", "Paris", "Nizza"],
            "RichtigeAntwort": "Paris",
            "RichtigeAntwortMöglichkeiten": "Paris",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Paris wird oft als 'Stadt der Liebe' bezeichnet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Italien?",
            "Antworten": ["Rom", "Mailand", "Venedig", "Neapel"],
            "RichtigeAntwort": "Rom",
            "RichtigeAntwortMöglichkeiten": "Rom",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Rom ist bekannt für das Kolosseum und den Vatikan"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Spanien?",
            "Antworten": ["Barcelona", "Madrid", "Sevilla", "Valencia"],
            "RichtigeAntwort": "Madrid",
            "RichtigeAntwortMöglichkeiten": "Madrid",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Madrid liegt im geografischen Zentrum Spaniens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Portugal?",
            "Antworten": ["Porto", "Lissabon", "Coimbra", "Braga"],
            "RichtigeAntwort": "Lissabon",
            "RichtigeAntwortMöglichkeiten": "Lissabon",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Lissabon ist auch die größte Stadt Portugals"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Österreich?",
            "Antworten": ["Graz", "Salzburg", "Linz", "Wien"],
            "RichtigeAntwort": "Wien",
            "RichtigeAntwortMöglichkeiten": "Wien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Wien ist bekannt für seine Musik- und Kunstgeschichte"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Schweiz?",
            "Antworten": ["Zürich", "Genf", "Basel", "Bern"],
            "RichtigeAntwort": "Bern",
            "RichtigeAntwortMöglichkeiten": "Bern",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Bern ist bekannt für seine gut erhaltene Altstadt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Niederlande?",
            "Antworten": ["Rotterdam", "Amsterdam", "Den Haag", "Utrecht"],
            "RichtigeAntwort": "Amsterdam",
            "RichtigeAntwortMöglichkeiten": "Amsterdam",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Amsterdam ist bekannt für seine Grachten und Fahrräder"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Belgien?",
            "Antworten": ["Antwerpen", "Gent", "Brüssel", "Brügge"],
            "RichtigeAntwort": "Brüssel",
            "RichtigeAntwortMöglichkeiten": "Brüssel",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brüssel ist der Sitz der Europäischen Union"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Schweden?",
            "Antworten": ["Göteborg", "Malmö", "Stockholm", "Uppsala"],
            "RichtigeAntwort": "Stockholm",
            "RichtigeAntwortMöglichkeiten": "Stockholm",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Stockholm erstreckt sich über 14 Inseln"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Norwegen?",
            "Antworten": ["Bergen", "Trondheim", "Oslo", "Stavanger"],
            "RichtigeAntwort": "Oslo",
            "RichtigeAntwortMöglichkeiten": "Oslo",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Oslo liegt im Süden Norwegens am Oslofjord"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Dänemark?",
            "Antworten": ["Aarhus", "Odense", "Kopenhagen", "Aalborg"],
            "RichtigeAntwort": "Kopenhagen",
            "RichtigeAntwortMöglichkeiten": "Kopenhagen",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Kopenhagen liegt auf der Insel Seeland"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Finnland?",
            "Antworten": ["Tampere", "Turku", "Helsinki", "Oulu"],
            "RichtigeAntwort": "Helsinki",
            "RichtigeAntwortMöglichkeiten": "Helsinki",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Helsinki liegt am Finnischen Meerbusen"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Irland?",
            "Antworten": ["Cork", "Galway", "Limerick", "Dublin"],
            "RichtigeAntwort": "Dublin",
            "RichtigeAntwortMöglichkeiten": "Dublin",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Dublin ist bekannt für das Trinity College und das Book of Kells"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Großbritannien?",
            "Antworten": ["London", "Edinburgh", "Manchester", "Birmingham"],
            "RichtigeAntwort": "London",
            "RichtigeAntwortMöglichkeiten": "London",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "London ist die größte Stadt Großbritanniens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Griechenland?",
            "Antworten": ["Thessaloniki", "Patras", "Heraklion", "Athen"],
            "RichtigeAntwort": "Athen",
            "RichtigeAntwortMöglichkeiten": "Athen",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Athen ist eine der ältesten Hauptstädte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Polen?",
            "Antworten": ["Krakau", "Prag", "Warschau", "Wrocław"],
            "RichtigeAntwort": "Warschau",
            "RichtigeAntwortMöglichkeiten": "Warschau",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Warschau wurde im Zweiten Weltkrieg fast vollständig zerstört und wieder aufgebaut"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tschechien?",
            "Antworten": ["Warschau", "Ostrava", "Pilsen", "Prag"],
            "RichtigeAntwort": "Prag",
            "RichtigeAntwortMöglichkeiten": "Prag",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Prag wird oft als 'Stadt der hundert Türme' bezeichnet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ungarn?",
            "Antworten": ["Bukarest", "Szeged", "Miskolc", "Budapest"],
            "RichtigeAntwort": "Budapest",
            "RichtigeAntwortMöglichkeiten": "Budapest",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Budapest entstand durch die Zusammenlegung von Buda und Pest"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Rumänien?",
            "Antworten": ["Sofia", "Timișoara", "Iași", "Bukarest"],
            "RichtigeAntwort": "Bukarest",
            "RichtigeAntwortMöglichkeiten": "Bukarest",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Bukarest wird oft als 'Paris des Ostens' bezeichnet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bulgarien?",
            "Antworten": ["Bukarest", "Warna", "Burgas", "Sofia"],
            "RichtigeAntwort": "Sofia",
            "RichtigeAntwortMöglichkeiten": "Sofia",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Sofia ist eine der ältesten Städte Europas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Serbien?",
            "Antworten": ["Novi Sad", "Niš", "Kragujevac", "Belgrad"],
            "RichtigeAntwort": "Belgrad",
            "RichtigeAntwortMöglichkeiten": "Belgrad",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Belgrad liegt an der Mündung der Save in die Donau"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kroatien?",
            "Antworten": ["Belgrad", "Rijeka", "Dubrovnik", "Zagreb"],
            "RichtigeAntwort": "Zagreb",
            "RichtigeAntwortMöglichkeiten": "Zagreb",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Zagreb ist die größte Stadt Kroatiens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Slowenien?",
            "Antworten": ["Maribor", "Bratislava", "Celje", "Ljubljana"],
            "RichtigeAntwort": "Ljubljana",
            "RichtigeAntwortMöglichkeiten": "Ljubljana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ljubljana wird oft als eine der grünsten Hauptstädte Europas bezeichnet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der Slowakei?",
            "Antworten": ["Košice", "Prag", "Žilina", "Bratislava"],
            "RichtigeAntwort": "Bratislava",
            "RichtigeAntwortMöglichkeiten": "Bratislava",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Bratislava liegt an der Donau"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bosnien und Herzegowina?",
            "Antworten": ["Mostar", "Banja Luka", "Tuzla", "Sarajevo"],
            "RichtigeAntwort": "Sarajevo",
            "RichtigeAntwortMöglichkeiten": "Sarajevo",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Sarajevo war Austragungsort der Olympischen Winterspiele 1984"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Montenegro?",
            "Antworten": ["Kotor", "Herceg Novi", "Podgorica", "Nikšić"],
            "RichtigeAntwort": "Podgorica",
            "RichtigeAntwortMöglichkeiten": "Podgorica",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Podgorica wurde 1946 zur Hauptstadt von Montenegro erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kosovo?",
            "Antworten": ["Prizren", "Pe", "Mitrovica", "Pristina"],
            "RichtigeAntwort": "Pristina",
            "RichtigeAntwortMöglichkeiten": "Pristina",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Pristina ist die größte Stadt im Kosovo"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nordmazedonien?",
            "Antworten": ["Bitola", "Ohrid", "Kumanovo", "Skopje"],
            "RichtigeAntwort": "Skopje",
            "RichtigeAntwortMöglichkeiten": "Skopje",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Skopje liegt am Fluss Vardar"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Albanien?",
            "Antworten": ["Durrës", "Shkodra", "Vlora", "Tirana"],
            "RichtigeAntwort": "Tirana",
            "RichtigeAntwortMöglichkeiten": "Tirana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tirana wurde 1920 zur Hauptstadt von Albanien erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Island?",
            "Antworten": ["Akureyri", "Reykjavík", "Kópavogur", "Hafnarfjörður"],
            "RichtigeAntwort": "Reykjavík",
            "RichtigeAntwortMöglichkeiten": "Reykjavík Reykjavik",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Reykjavík ist die nördlichste Hauptstadt der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Malta?",
            "Antworten": ["Valletta", "Mdina", "Birkirkara", "Sliema"],
            "RichtigeAntwort": "Valletta",
            "RichtigeAntwortMöglichkeiten": "Valletta",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Valletta ist eine der kleinsten Hauptstädte Europas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Zypern?",
            "Antworten": ["Limassol", "Larnaka", "Paphos", "Nikosia"],
            "RichtigeAntwort": "Nikosia",
            "RichtigeAntwortMöglichkeiten": "Nikosia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nikosia ist die einzige geteilte Hauptstadt Europas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Estland?",
            "Antworten": ["Tartu", "Narva", "Pärnu", "Tallinn"],
            "RichtigeAntwort": "Tallinn",
            "RichtigeAntwortMöglichkeiten": "Tallinn",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tallinn hat eine gut erhaltene mittelalterliche Altstadt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Lettland?",
            "Antworten": ["Daugavpils", "Liepāja", "Jelgava", "Riga"],
            "RichtigeAntwort": "Riga",
            "RichtigeAntwortMöglichkeiten": "Riga",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Riga ist die größte Stadt im Baltikum"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Litauen?",
            "Antworten": ["Kaunas", "Klaipėda", "Šiauliai", "Vilnius"],
            "RichtigeAntwort": "Vilnius",
            "RichtigeAntwortMöglichkeiten": "Vilnius",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Vilnius ist bekannt für seine barocke Altstadt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Belarus?",
            "Antworten": ["Brest", "Gomel", "Mogilev", "Minsk"],
            "RichtigeAntwort": "Minsk",
            "RichtigeAntwortMöglichkeiten": "Minsk",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Minsk ist das politische und kulturelle Zentrum von Belarus"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ukraine?",
            "Antworten": ["Lwiw", "Odessa", "Charkiw", "Kiew"],
            "RichtigeAntwort": "Kiew",
            "RichtigeAntwortMöglichkeiten": "Kiew",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Kiew liegt am Dnepr-Fluss"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Russland?",
            "Antworten": ["St. Petersburg", "Wladiwostok", "Nowosibirsk", "Moskau"],
            "RichtigeAntwort": "Moskau",
            "RichtigeAntwortMöglichkeiten": "leicht",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Moskau ist die größte Stadt Europas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Moldawien?",
            "Antworten": ["Bălți", "Tiraspol", "Cahul", "Chișinău"],
            "RichtigeAntwort": "Chișinău",
            "RichtigeAntwortMöglichkeiten": "Chișinău Chisinau",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Chișinău ist die größte Stadt Moldawiens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Georgien?",
            "Antworten": ["Kutaisi", "Batumi", "Rustawi", "Tiflis"],
            "RichtigeAntwort": "Tiflis",
            "RichtigeAntwortMöglichkeiten": "Tiflis Tbilisi",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tiflis liegt am Fluss Kura"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Armenien?",
            "Antworten": ["Gjumri", "Wanadsor", "Hrasdan", "Eriwan"],
            "RichtigeAntwort": "Eriwan",
            "RichtigeAntwortMöglichkeiten": "Eriwan Yerevan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Eriwan ist eine der ältesten kontinuierlich bewohnten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Aserbaidschan?",
            "Antworten": ["Gəncə", "Sumqayıt", "Lənkəran", "Baku"],
            "RichtigeAntwort": "Baku",
            "RichtigeAntwortMöglichkeiten": "Baku",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Baku liegt an der Küste des Kaspischen Meeres"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kasachstan?",
            "Antworten": ["Almaty", "Schymkent", "Karaganda", "Astana"],
            "RichtigeAntwort": "Astana",
            "RichtigeAntwortMöglichkeiten": "Astana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Astana wurde 1997 zur Hauptstadt von Kasachstan"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Andorra?",
            "Antworten": ["Encamp", "La Massana", "Escaldes-Engordany", "Andorra la Vella"],
            "RichtigeAntwort": "Andorra la Vella",
            "RichtigeAntwortMöglichkeiten": "Andorra la Vella",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Andorra la Vella ist die höchstgelegene Hauptstadt Europas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Monaco?",
            "Antworten": ["La Condamine", "Monte Carlo", "Fontvieille", "Monaco"],
            "RichtigeAntwort": "Monaco",
            "RichtigeAntwortMöglichkeiten": "Monaco",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Monaco ist der zweitkleinste Staat der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Liechtenstein?",
            "Antworten": ["Balzers", "Schaan", "Triesen", "Vaduz"],
            "RichtigeAntwort": "Vaduz",
            "RichtigeAntwortMöglichkeiten": "Vaduz",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Vaduz ist bekannt für das Schloss Vaduz"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von San Marino?",
            "Antworten": ["Serravalle", "Borgo Maggiore", "Fiorentino", "San Marino"],
            "RichtigeAntwort": "San Marino",
            "RichtigeAntwortMöglichkeiten": "San Marino",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "San Marino ist eine der ältesten Republiken der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Vatikanstadt?",
            "Antworten": ["Vatikanstadt", "Rom", "Castel Gandolfo", "Keine"],
            "RichtigeAntwort": "Vatikanstadt",
            "RichtigeAntwortMöglichkeiten": "Vatikanstadt",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Vatikanstadt ist der kleinste unabhängige Staat der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Luxemburg?",
            "Antworten": ["Esch-sur-Alzette", "Differdingen", "Dudelange", "Luxemburg"],
            "RichtigeAntwort": "Luxemburg",
            "RichtigeAntwortMöglichkeiten": "Luxemburg",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Luxemburg ist auch der Name des Landes"
        },
    
    
        ////////////////////////////// ASIEN //////////////////////////////
    
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Saudi-Arabien?",
            "Antworten": ["Dschidda", "Mekka", "Riad", "Medina"],
            "RichtigeAntwort": "Riad",
            "RichtigeAntwortMöglichkeiten": "Riad Riyadh",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Riad ist die größte Stadt in Saudi-Arabien"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Iran?",
            "Antworten": ["Isfahan", "Schiras", "Tabris", "Teheran"],
            "RichtigeAntwort": "Teheran",
            "RichtigeAntwortMöglichkeiten": "Teheran Tehran",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Teheran liegt am Fuße des Elburs-Gebirges"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Irak?",
            "Antworten": ["Basra", "Mossul", "Erbil", "Bagdad"],
            "RichtigeAntwort": "Bagdad",
            "RichtigeAntwortMöglichkeiten": "Bagdad Baghdad",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bagdad liegt am Tigris-Fluss"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Israel?",
            "Antworten": ["Tel Aviv", "Haifa", "Eilat", "Jerusalem"],
            "RichtigeAntwort": "Jerusalem",
            "RichtigeAntwortMöglichkeiten": "Jerusalem",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Jerusalem ist eine der ältesten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Jordanien?",
            "Antworten": ["Aqaba", "Irbid", "Zarqa", "Amman"],
            "RichtigeAntwort": "Amman",
            "RichtigeAntwortMöglichkeiten": "Amman",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Amman ist die größte Stadt in Jordanien"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Libanon?",
            "Antworten": ["Tripoli", "Sidon", "Byblos", "Beirut"],
            "RichtigeAntwort": "Beirut",
            "RichtigeAntwortMöglichkeiten": "Beirut",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Beirut wird oft als 'Paris des Nahen Ostens' bezeichnet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Syrien?",
            "Antworten": ["Aleppo", "Homs", "Latakia", "Damaskus"],
            "RichtigeAntwort": "Damaskus",
            "RichtigeAntwortMöglichkeiten": "Damaskus",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Damaskus ist eine der ältesten kontinuierlich bewohnten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Türkei?",
            "Antworten": ["Istanbul", "Izmir", "Antalya", "Ankara"],
            "RichtigeAntwort": "Ankara",
            "RichtigeAntwortMöglichkeiten": "Ankara",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Ankara wurde 1923 zur Hauptstadt der Türkei erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Jemen?",
            "Antworten": ["Aden", "Taiz", "Hodeidah", "Sanaa"],
            "RichtigeAntwort": "Sanaa",
            "RichtigeAntwortMöglichkeiten": "Sanaa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Sanaa liegt auf einer Höhe von 2.300 Metern"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Oman?",
            "Antworten": ["Salalah", "Sohar", "Nizwa", "Maskat"],
            "RichtigeAntwort": "Maskat",
            "RichtigeAntwortMöglichkeiten": "Maskat Muscat",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Maskat ist die größte Stadt in Oman"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kuwait?",
            "Antworten": ["Al Jahra", "Al Ahmadi", "Salmiya", "Kuwait-Stadt"],
            "RichtigeAntwort": "Kuwait-Stadt",
            "RichtigeAntwortMöglichkeiten": "Kuwait-Stadt Kuwait City",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kuwait-Stadt liegt am Persischen Golf"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bahrain?",
            "Antworten": ["Riffa", "Muharraq", "Hamad Town", "Manama"],
            "RichtigeAntwort": "Manama",
            "RichtigeAntwortMöglichkeiten": "Manama",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Manama ist das wirtschaftliche Zentrum Bahrains"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Katar?",
            "Antworten": ["Al Rayyan", "Al Khor", "Umm Salal", "Doha"],
            "RichtigeAntwort": "Doha",
            "RichtigeAntwortMöglichkeiten": "Doha",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Doha ist die bevölkerungsreichste Stadt Katars"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der Vereinigten Arabischen Emirate?",
            "Antworten": ["Dubai", "Sharjah", "Ajman", "Abu Dhabi"],
            "RichtigeAntwort": "Abu Dhabi",
            "RichtigeAntwortMöglichkeiten": "Abu Dhabi",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Abu Dhabi ist das politische und industrielle Zentrum der VAE"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von China?",
            "Antworten": ["Shanghai", "Guangzhou", "Peking", "Shenzhen"],
            "RichtigeAntwort": "Peking",
            "RichtigeAntwortMöglichkeiten": "Peking Beijing",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Peking ist eine der ältesten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Japan?",
            "Antworten": ["Peking", "Kyoto", "Seoul", "Tokio"],
            "RichtigeAntwort": "Tokio",
            "RichtigeAntwortMöglichkeiten": "Tokio Tokyo",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Tokio ist die bevölkerungsreichste Metropolregion der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Südkorea?",
            "Antworten": ["Busan", "Incheon", "Daegu", "Seoul"],
            "RichtigeAntwort": "Seoul",
            "RichtigeAntwortMöglichkeiten": "Seoul",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Seoul ist eine der größten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nordkorea?",
            "Antworten": ["Kaesong", "Wonsan", "Hamhung", "Pjöngjang"],
            "RichtigeAntwort": "Pjöngjang",
            "RichtigeAntwortMöglichkeiten": "Pjöngjang Pyongyang",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Pjöngjang ist die größte Stadt Nordkoreas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Taiwan?",
            "Antworten": ["Kaohsiung", "Taichung", "Tainan", "Taipeh"],
            "RichtigeAntwort": "Taipeh",
            "RichtigeAntwortMöglichkeiten": "Taipeh Taipei",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Taipeh 101 war das höchste Gebäude der Welt bis 2010"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der Mongolei?",
            "Antworten": ["Erdenet", "Darkhan", "Choibalsan", "Ulaanbaatar"],
            "RichtigeAntwort": "Ulaanbaatar",
            "RichtigeAntwortMöglichkeiten": "Ulaanbaatar",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ulaanbaatar ist die kälteste Hauptstadt der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Hongkong?",
            "Antworten": ["Hongkong", "Kowloon", "Victoria", "Sha Tin"],
            "RichtigeAntwort": "Hongkong",
            "RichtigeAntwortMöglichkeiten": "Hongkong",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Hongkong hat eine der höchsten Bevölkerungsdichten der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Afghanistan?",
            "Antworten": ["Kandahar", "Herat", "Mazar-i-Sharif", "Kabul"],
            "RichtigeAntwort": "Kabul",
            "RichtigeAntwortMöglichkeiten": "Kabul",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kabul liegt im östlichen Teil Afghanistans"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Pakistan?",
            "Antworten": ["Karachi", "Lahore", "Islamabad", "Quetta"],
            "RichtigeAntwort": "Islamabad",
            "RichtigeAntwortMöglichkeiten": "Islamabad",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Islamabad wurde in den 1960er Jahren als Hauptstadt geplant und gebaut"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Indien?",
            "Antworten": ["Mumbai", "Bangalore", "Chennai", "Neu-Delhi"],
            "RichtigeAntwort": "Neu-Delhi",
            "RichtigeAntwortMöglichkeiten": "Neu-Delhi New Delhi",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Neu-Delhi ist Teil der Metropolregion Delhi"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nepal?",
            "Antworten": ["Pokhara", "Biratnagar", "Lalitpur", "Kathmandu"],
            "RichtigeAntwort": "Kathmandu",
            "RichtigeAntwortMöglichkeiten": "Kathmandu",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kathmandu liegt in einem Tal umgeben von Bergen"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bhutan?",
            "Antworten": ["Paro", "Punakha", "Phuntsholing", "Thimphu"],
            "RichtigeAntwort": "Thimphu",
            "RichtigeAntwortMöglichkeiten": "Thimphu",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Thimphu ist die einzige Hauptstadt der Welt ohne Ampeln"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Bangladesch?",
            "Antworten": ["Chittagong", "Khulna", "Rajshahi", "Dhaka"],
            "RichtigeAntwort": "Dhaka",
            "RichtigeAntwortMöglichkeiten": "Dhaka",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dhaka ist eine der am dichtesten besiedelten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Sri Lanka?",
            "Antworten": ["Kandy", "Galle", "Jaffna", "Sri Jayawardenepura Kotte"],
            "RichtigeAntwort": "Sri Jayawardenepura Kotte",
            "RichtigeAntwortMöglichkeiten": "Sri Jayawardenepura Kotte",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Colombo ist die kommerzielle Hauptstadt von Sri Lanka"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von den Malediven?",
            "Antworten": ["Addu City", "Fuvahmulah", "Hithadhoo", "Malé"],
            "RichtigeAntwort": "Malé",
            "RichtigeAntwortMöglichkeiten": "Malé Male",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Malé ist eine der am dichtesten bevölkerten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Myanmar?",
            "Antworten": ["Mandalay", "Yangon", "Naypyidaw", "Bago"],
            "RichtigeAntwort": "Naypyidaw",
            "RichtigeAntwortMöglichkeiten": "Naypyidaw",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Naypyidaw wurde 2005 zur Hauptstadt von Myanmar erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Thailand?",
            "Antworten": ["Chiang Mai", "Phuket", "Pattaya", "Bangkok"],
            "RichtigeAntwort": "Bangkok",
            "RichtigeAntwortMöglichkeiten": "Bangkok",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Bangkok ist bekannt für seine lebendige Straßenkultur und Tempel"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Laos?",
            "Antworten": ["Luang Prabang", "Pakse", "Savannakhet", "Vientiane"],
            "RichtigeAntwort": "Vientiane",
            "RichtigeAntwortMöglichkeiten": "Vientiane",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Vientiane liegt am Mekong-Fluss"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kambodscha?",
            "Antworten": ["Siem Reap", "Battambang", "Sihanoukville", "Phnom Penh"],
            "RichtigeAntwort": "Phnom Penh",
            "RichtigeAntwortMöglichkeiten": "Phnom Penh",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Phnom Penh liegt am Zusammenfluss von Mekong und Tonle Sap"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Vietnam?",
            "Antworten": ["Ho-Chi-Minh-Stadt", "Da Nang", "Hué", "Hanoi"],
            "RichtigeAntwort": "Hanoi",
            "RichtigeAntwortMöglichkeiten": "Hanoi",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Hanoi ist bekannt für seine historische Architektur und reiche Kultur"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Malaysia?",
            "Antworten": ["Johor Bahru", "George Town", "Ipoh", "Kuala Lumpur"],
            "RichtigeAntwort": "Kuala Lumpur",
            "RichtigeAntwortMöglichkeiten": "Kuala Lumpur",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kuala Lumpur ist bekannt für die Petronas Towers"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Singapur?",
            "Antworten": ["Bukit Batok", "Jurong East", "Tampines", "Singapur"],
            "RichtigeAntwort": "Singapur",
            "RichtigeAntwortMöglichkeiten": "Singapur Singapore",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Singapur ist sowohl Stadt als auch Land"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Brunei?",
            "Antworten": ["Kuala Belait", "Seria", "Tutong", "Bandar Seri Begawan"],
            "RichtigeAntwort": "Bandar Seri Begawan",
            "RichtigeAntwortMöglichkeiten": "Bandar Seri Begawan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bandar Seri Begawan liegt an der Brunei-Bucht"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Osttimor?",
            "Antworten": ["Baucau", "Same", "Suai", "Dili"],
            "RichtigeAntwort": "Dili",
            "RichtigeAntwortMöglichkeiten": "Dili",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dili ist die größte Stadt in Osttimor"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Philippinen?",
            "Antworten": ["Cebu City", "Davao City", "Quezon City", "Manila"],
            "RichtigeAntwort": "Manila",
            "RichtigeAntwortMöglichkeiten": "Manila",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Manila ist eine der am dichtesten besiedelten Städte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Indonesien?",
            "Antworten": ["Surabaya", "Bandung", "Medan", "Jakarta"],
            "RichtigeAntwort": "Jakarta",
            "RichtigeAntwortMöglichkeiten": "Jakarta",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Jakarta liegt auf der Insel Java"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Usbekistan?",
            "Antworten": ["Samarkand", "Bukhara", "Nukus", "Taschkent"],
            "RichtigeAntwort": "Taschkent",
            "RichtigeAntwortMöglichkeiten": "Taschkent Tashkent",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Taschkent ist die größte Stadt in Zentralasien"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kirgisistan?",
            "Antworten": ["Osch", "Dschalalabat", "Karakol", "Bischkek"],
            "RichtigeAntwort": "Bischkek",
            "RichtigeAntwortMöglichkeiten": "Bischkek Bishkek",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bischkek liegt im Norden von Kirgisistan"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tadschikistan?",
            "Antworten": ["Chudschand", "Kulob", "Bokhtar", "Duschanbe"],
            "RichtigeAntwort": "Duschanbe",
            "RichtigeAntwortMöglichkeiten": "Duschanbe Dushanbe",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Duschanbe bedeutet 'Montag' auf Tadschikisch"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Turkmenistan?",
            "Antworten": ["Türkmenabat", "Daşoguz", "Mary", "Aschgabat"],
            "RichtigeAntwort": "Aschgabat",
            "RichtigeAntwortMöglichkeiten": "Aschgabat Ashgabat",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Aschgabat ist bekannt für seine weißen Marmorgebäude"
        },
    
        ////////////////////////////// AFRIKA //////////////////////////////
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ägypten?",
            "Antworten": ["Alexandria", "Gizeh", "Luxor", "Kairo"],
            "RichtigeAntwort": "Kairo",
            "RichtigeAntwortMöglichkeiten": "Kairo Cairo",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Kairo ist die größte Stadt Afrikas"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nigeria?",
            "Antworten": ["Lagos", "Kano", "Ibadan", "Abuja"],
            "RichtigeAntwort": "Abuja",
            "RichtigeAntwortMöglichkeiten": "Abuja",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Abuja wurde 1991 zur Hauptstadt von Nigeria erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Welche ist nicht einer der drei Haubstädte Südafrika?",
            "Antworten": ["Johannesburg", "Kapstadt", "Durban", "Pretoria"],
            "RichtigeAntwort": "Durban",
            "RichtigeAntwortMöglichkeiten": "Durban",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Im Atlas und auf Karten wird fälschlicherweise oft nur Pretoria als Hauptstadt gekennzeichnet."
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kenia?",
            "Antworten": ["Mombasa", "Kisumu", "Nakuru", "Nairobi"],
            "RichtigeAntwort": "Nairobi",
            "RichtigeAntwortMöglichkeiten": "Nairobi",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Nairobi wird auch 'Grüne Stadt in der Sonne' genannt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Äthiopien?",
            "Antworten": ["Dire Dawa", "Mekele", "Gondar", "Addis Abeba"],
            "RichtigeAntwort": "Addis Abeba",
            "RichtigeAntwortMöglichkeiten": "Addis Abeba Addis Ababa",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Addis Abeba bedeutet 'neue Blume' auf Amharisch"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Marokko?",
            "Antworten": ["Marrakesch", "Fès", "Casablanca", "Rabat"],
            "RichtigeAntwort": "Rabat",
            "RichtigeAntwortMöglichkeiten": "Rabat",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Rabat liegt an der Atlantikküste"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Uganda?",
            "Antworten": ["Entebbe", "Jinja", "Mbarara", "Kampala"],
            "RichtigeAntwort": "Kampala",
            "RichtigeAntwortMöglichkeiten": "Kampala",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kampala liegt am Ufer des Viktoriasees"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tansania?",
            "Antworten": ["Arusha", "Dodoma", "Mwanza", "Dar es Salaam"],
            "RichtigeAntwort": "Dodoma",
            "RichtigeAntwortMöglichkeiten": "Dodoma",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dodoma wurde 1974 zur Hauptstadt von Tansania erklärt"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Simbabwe?",
            "Antworten": ["Bulawayo", "Mutare", "Gweru", "Harare"],
            "RichtigeAntwort": "Harare",
            "RichtigeAntwortMöglichkeiten": "Harare",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Harare liegt im nördlichen Teil von Simbabwe"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Angola?",
            "Antworten": ["Lobito", "Huambo", "Benguela", "Luanda"],
            "RichtigeAntwort": "Luanda",
            "RichtigeAntwortMöglichkeiten": "Luanda",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Luanda liegt an der Atlantikküste"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Namibia?",
            "Antworten": ["Swakopmund", "Walvis Bay", "Rundu", "Windhoek"],
            "RichtigeAntwort": "Windhoek",
            "RichtigeAntwortMöglichkeiten": "Windhoek",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Windhoek liegt im zentralen Teil Namibias"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Botswana?",
            "Antworten": ["Francistown", "Maun", "Kasane", "Gaborone"],
            "RichtigeAntwort": "Gaborone",
            "RichtigeAntwortMöglichkeiten": "Gaborone",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Gaborone liegt nahe der Grenze zu Südafrika"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mosambik?",
            "Antworten": ["Beira", "Nampula", "Tete", "Maputo"],
            "RichtigeAntwort": "Maputo",
            "RichtigeAntwortMöglichkeiten": "Maputo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Maputo liegt an der Küste des Indischen Ozeans"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Madagaskar?",
            "Antworten": ["Toamasina", "Fianarantsoa", "Mahajanga", "Antananarivo"],
            "RichtigeAntwort": "Antananarivo",
            "RichtigeAntwortMöglichkeiten": "Antananarivo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Antananarivo liegt im zentralen Hochland von Madagaskar"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mali?",
            "Antworten": ["Sikasso", "Segou", "Mopti", "Bamako"],
            "RichtigeAntwort": "Bamako",
            "RichtigeAntwortMöglichkeiten": "Bamako",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bamako liegt am Niger-Fluss"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Senegal?",
            "Antworten": ["Touba", "Thiès", "Saint-Louis", "Dakar"],
            "RichtigeAntwort": "Dakar",
            "RichtigeAntwortMöglichkeiten": "Dakar",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dakar liegt auf der Cap-Vert-Halbinsel"
        },   
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ghana?",
            "Antworten": ["Kumasi", "Tamale", "Sekondi-Takoradi", "Accra"],
            "RichtigeAntwort": "Accra",
            "RichtigeAntwortMöglichkeiten": "Accra",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Accra liegt an der Atlantikküste"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Burkina Faso?",
            "Antworten": ["Bobo-Dioulasso", "Koudougou", "Banfora", "Ouagadougou"],
            "RichtigeAntwort": "Ouagadougou",
            "RichtigeAntwortMöglichkeiten": "Ouagadougou",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ouagadougou ist auch bekannt als 'Ouaga'"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Sudan?",
            "Antworten": ["Omdurman", "Port Sudan", "Kassala", "Khartum"],
            "RichtigeAntwort": "Khartum",
            "RichtigeAntwortMöglichkeiten": "Khartum Khartoum",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Khartum liegt am Zusammenfluss von Blauem und Weißem Nil"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Südsudan?",
            "Antworten": ["Malakal", "Wau", "Bor", "Juba"],
            "RichtigeAntwort": "Juba",
            "RichtigeAntwortMöglichkeiten": "Juba",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Juba ist die größte Stadt im Südsudan"
        },  
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Eritrea?",
            "Antworten": ["Keren", "Massawa", "Assab", "Asmara"],
            "RichtigeAntwort": "Asmara",
            "RichtigeAntwortMöglichkeiten": "Asmara",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Asmara liegt auf einem Hochplateau"
        },    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Dschibuti?",
            "Antworten": ["Tadjoura", "Obock", "Ali Sabieh", "Dschibuti"],
            "RichtigeAntwort": "Dschibuti",
            "RichtigeAntwortMöglichkeiten": "Dschibuti Djibouti",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Dschibuti liegt am Bab-el-Mandeb"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Gabun?",
            "Antworten": ["Port-Gentil", "Franceville", "Oyem", "Libreville"],
            "RichtigeAntwort": "Libreville",
            "RichtigeAntwortMöglichkeiten": "Libreville",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Libreville liegt an der Atlantikküste"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Zentralafrikanische Republik?",
            "Antworten": ["Bambari", "Berbérati", "Kaga-Bandoro", "Bangui"],
            "RichtigeAntwort": "Bangui",
            "RichtigeAntwortMöglichkeiten": "Bangui",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bangui liegt am Ubangi-Fluss"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Ruanda?",
            "Antworten": ["Butare", "Gisenyi", "Byumba", "Kigali"],
            "RichtigeAntwort": "Kigali",
            "RichtigeAntwortMöglichkeiten": "Kigali",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kigali liegt im Zentrum von Ruanda"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Burundi?",
            "Antworten": ["Gitega", "Ngozi", "Ruyigi", "Bujumbura"],
            "RichtigeAntwort": "Gitega",
            "RichtigeAntwortMöglichkeiten": "Gitega",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Gitega wurde 2019 zur Hauptstadt von Burundi erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Liberia?",
            "Antworten": ["Gbarnga", "Kakata", "Buchanan", "Monrovia"],
            "RichtigeAntwort": "Monrovia",
            "RichtigeAntwortMöglichkeiten": "Monrovia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Monrovia wurde nach dem US-Präsidenten James Monroe benannt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Guinea-Bissau?",
            "Antworten": ["Bafatá", "Cacheu", "Gabu", "Bissau"],
            "RichtigeAntwort": "Bissau",
            "RichtigeAntwortMöglichkeiten": "Bissau",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bissau liegt an der Küste des Atlantiks"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Gambia?",
            "Antworten": ["Brikama", "Bakau", "Farafenni", "Banjul"],
            "RichtigeAntwort": "Banjul",
            "RichtigeAntwortMöglichkeiten": "Banjul",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Banjul liegt auf der Insel St. Mary"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Lesotho?",
            "Antworten": ["Teyateyaneng", "Maseru", "Mafeteng", "Hlotse"],
            "RichtigeAntwort": "Maseru",
            "RichtigeAntwortMöglichkeiten": "Maseru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Maseru liegt an der Grenze zu Südafrika"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Eswatini?",
            "Antworten": ["Manzini", "Mbabane", "Lobamba", "Siteki"],
            "RichtigeAntwort": "Mbabane",
            "RichtigeAntwortMöglichkeiten": "Mbabane",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Im April 2018 wurde der offizielle Name von Königreich Swasiland in Königreich Eswatini geändert"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Malawi?",
            "Antworten": ["Blantyre", "Mzuzu", "Zomba", "Lilongwe"],
            "RichtigeAntwort": "Lilongwe",
            "RichtigeAntwortMöglichkeiten": "Lilongwe",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lilongwe wurde 1975 zur Hauptstadt von Malawi erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mauretanien?",
            "Antworten": ["Nouadhibou", "Rosso", "Kaédi", "Nouakchott"],
            "RichtigeAntwort": "Nouakchott",
            "RichtigeAntwortMöglichkeiten": "Nouakchott",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nouakchott wurde 1960 zur Hauptstadt von Mauretanien erklärt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mauritius?",
            "Antworten": ["Curepipe", "Quatre Bornes", "Port Louis", "Vacoas-Phoenix"],
            "RichtigeAntwort": "Port Louis",
            "RichtigeAntwortMöglichkeiten": "Port Louis",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Port Louis ist das wirtschaftliche Zentrum von Mauritius"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Seychellen?",
            "Antworten": ["Anse Boileau", "Beau Vallon", "Takamaka", "Victoria"],
            "RichtigeAntwort": "Victoria",
            "RichtigeAntwortMöglichkeiten": "Victoria",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Victoria liegt auf der Insel Mahé"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Komoren?",
            "Antworten": ["Fomboni", "Mutsamudu", "Domoni", "Moroni"],
            "RichtigeAntwort": "Moroni",
            "RichtigeAntwortMöglichkeiten": "Moroni",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Moroni liegt auf der Insel Grande Comore"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von São Tomé und Príncipe?",
            "Antworten": ["Neves", "Santo António", "Trindade", "São Tomé"],
            "RichtigeAntwort": "São Tomé",
            "RichtigeAntwortMöglichkeiten": "São Tomé Sao Tome",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "São Tomé liegt auf der größten Insel des Landes"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Algerien?",
            "Antworten": ["Oran", "Constantine", "Annaba", "Algier"],
            "RichtigeAntwort": "Algier",
            "RichtigeAntwortMöglichkeiten": "Algier Algiers",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Algier liegt an der Mittelmeerküste"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Libyen?",
            "Antworten": ["Bengasi", "Misrata", "Sabha", "Tripolis"],
            "RichtigeAntwort": "Tripolis",
            "RichtigeAntwortMöglichkeiten": "Tripolis Tripoli",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tripolis liegt an der nordwestlichen Küste Libyens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tunesien?",
            "Antworten": ["Sousse", "Sfax", "Kairouan", "Tunis"],
            "RichtigeAntwort": "Tunis",
            "RichtigeAntwortMöglichkeiten": "Tunis",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tunis ist die größte Stadt Tunesiens"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tschad?",
            "Antworten": ["Moundou", "Abéché", "Sarh", "N'Djamena"],
            "RichtigeAntwort": "N'Djamena",
            "RichtigeAntwortMöglichkeiten": "N'Djamena",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "N'Djamena liegt am Fluss Chari"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Somalia?",
            "Antworten": ["Hargeisa", "Kismayo", "Baidoa", "Mogadischu"],
            "RichtigeAntwort": "Mogadischu",
            "RichtigeAntwortMöglichkeiten": "Mogadischu Mogadishu",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Mogadischu liegt an der Küste des Indischen Ozeans"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Guinea?",
            "Antworten": ["Kankan", "Labé", "Nzérékoré", "Conakry"],
            "RichtigeAntwort": "Conakry",
            "RichtigeAntwortMöglichkeiten": "Conakry",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Conakry ist das wirtschaftliche und kulturelle Zentrum von Guinea"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Sierra Leone?",
            "Antworten": ["Bo", "Kenema", "Makeni", "Freetown"],
            "RichtigeAntwort": "Freetown",
            "RichtigeAntwortMöglichkeiten": "Freetown",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Freetown wurde 1787 für befreite Sklaven gegründet"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Elfenbeinküste?",
            "Antworten": ["Yamoussoukro", "Bouaké", "Abidjan", "San-Pédro"],
            "RichtigeAntwort": "Yamoussoukro",
            "RichtigeAntwortMöglichkeiten": "Yamoussoukro",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Yamoussoukro ist seit 1983 die politische Hauptstadt der Elfenbeinküste"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Togo?",
            "Antworten": ["Sokodé", "Kpalimé", "Atakpamé", "Lomé"],
            "RichtigeAntwort": "Lomé",
            "RichtigeAntwortMöglichkeiten": "Lomé Lome",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lomé liegt an der Küste des Golfs von Guinea"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Benin?",
            "Antworten": ["Porto-Novo", "Cotonou", "Parakou", "Abomey"],
            "RichtigeAntwort": "Porto-Novo",
            "RichtigeAntwortMöglichkeiten": "Porto-Novo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Cotonou ist die größte Stadt und der wirtschaftliche Mittelpunkt von Benin"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Niger?",
            "Antworten": ["Zinder", "Maradi", "Agadez", "Niamey"],
            "RichtigeAntwort": "Niamey",
            "RichtigeAntwortMöglichkeiten": "Niamey",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Niamey liegt am Niger-Fluss"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kamerun?",
            "Antworten": ["Douala", "Bamenda", "Bafoussam", "Yaoundé"],
            "RichtigeAntwort": "Yaoundé",
            "RichtigeAntwortMöglichkeiten": "Yaoundé Yaounde",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Yaoundé liegt im zentralen Teil Kameruns"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Demokratische Republik Kongo?",
            "Antworten": ["Lubumbashi", "Mbuji-Mayi", "Kisangani", "Kinshasa"],
            "RichtigeAntwort": "Kinshasa",
            "RichtigeAntwortMöglichkeiten": "Kinshasa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kinshasa ist die größte Stadt in der Demokratischen Republik Kongo"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Äquatorialguinea?",
            "Antworten": ["Bata", "Mongomo", "Ebebiyin", "Malabo"],
            "RichtigeAntwort": "Malabo",
            "RichtigeAntwortMöglichkeiten": "Malabo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Malabo liegt auf der Insel Bioko"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Republik Kongo?",
            "Antworten": ["Pointe-Noire", "Dolisie", "Nkayi", "Brazzaville"],
            "RichtigeAntwort": "Brazzaville",
            "RichtigeAntwortMöglichkeiten": "Brazzaville",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Brazzaville liegt am Kongo-Fluss gegenüber von Kinshasa"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Sambia?",
            "Antworten": ["Kitwe", "Ndola", "Livingstone", "Lusaka"],
            "RichtigeAntwort": "Lusaka",
            "RichtigeAntwortMöglichkeiten": "Lusaka",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lusaka wurde 1935 zur Hauptstadt von Sambia ernannt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kap Verde?",
            "Antworten": ["Mindelo", "Praia", "Santa Maria", "Espargos"],
            "RichtigeAntwort": "Praia",
            "RichtigeAntwortMöglichkeiten": "Praia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Praia liegt auf der Insel Santiago"
        },
    
    
        ////////////////////////////// OZEANIEN //////////////////////////////
    
    
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Australien?",
            "Antworten": ["Sydney", "Melbourne", "Brisbane", "Canberra"],
            "RichtigeAntwort": "Canberra",
            "RichtigeAntwortMöglichkeiten": "Canberra",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Canberra wurde 1908 als Kompromiss zwischen Sydney und Melbourne zur Hauptstadt gewählt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Neuseeland?",
            "Antworten": ["Auckland", "Christchurch", "Canberra", "Wellington"],
            "RichtigeAntwort": "Wellington",
            "RichtigeAntwortMöglichkeiten": "Wellington",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Wellington ist die südlichste Hauptstadt eines souveränen Staates der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Fidschi?",
            "Antworten": ["Nadi", "Labasa", "Lautoka", "Suva"],
            "RichtigeAntwort": "Suva",
            "RichtigeAntwortMöglichkeiten": "Suva",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Suva befindet sich auf der Insel Viti Levu"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Papua-Neuguinea?",
            "Antworten": ["Lae", "Madang", "Goroka", "Port Moresby"],
            "RichtigeAntwort": "Port Moresby",
            "RichtigeAntwortMöglichkeiten": "Port Moresby",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Port Moresby liegt an der Südküste von Papua-Neuguinea"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Samoa?",
            "Antworten": ["Salelologa", "Asau", "Lalomanu", "Apia"],
            "RichtigeAntwort": "Apia",
            "RichtigeAntwortMöglichkeiten": "Apia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Apia befindet sich auf der Insel Upolu"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tonga?",
            "Antworten": ["Neiafu", "Nuku'alofa", "Vava'u", "Pangai"],
            "RichtigeAntwort": "Nuku'alofa",
            "RichtigeAntwortMöglichkeiten": "Nuku'alofa Nuku alofa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nuku'alofa liegt auf der Insel Tongatapu"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Vanuatu?",
            "Antworten": ["Luganville", "Isangel", "Port Olry", "Port Vila"],
            "RichtigeAntwort": "Port Vila",
            "RichtigeAntwortMöglichkeiten": "Port Vila",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Port Vila liegt auf der Insel Efate"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Palau?",
            "Antworten": ["Koror", "Ngaraard", "Ngerulmud", "Melekeok"],
            "RichtigeAntwort": "Ngerulmud",
            "RichtigeAntwortMöglichkeiten": "Ngerulmud",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ngerulmud ist eine der jüngsten Hauptstädte der Welt"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Kiribati?",
            "Antworten": ["Betio", "Bairiki", "Tabiteuea", "South Tarawa"],
            "RichtigeAntwort": "South Tarawa",
            "RichtigeAntwortMöglichkeiten": "South Tarawa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "South Tarawa umfasst mehrere Inseln des Tarawa-Atolls"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Tuvalu?",
            "Antworten": ["Nanumaga", "Funafuti", "Nui", "Vaitupu"],
            "RichtigeAntwort": "Funafuti",
            "RichtigeAntwortMöglichkeiten": "Funafuti",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Funafuti ist ein Atoll mit einer kleinen Bevölkerung"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt der Marshallinseln?",
            "Antworten": ["Jaluit", "Kwajalein", "Majuro", "Rongelap"],
            "RichtigeAntwort": "Majuro",
            "RichtigeAntwortMöglichkeiten": "Majuro",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Majuro ist ein Atoll und das wirtschaftliche Zentrum der Marshallinseln"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Mikronesien?",
            "Antworten": ["Chuuk", "Pohnpei", "Kosrae", "Palikir"],
            "RichtigeAntwort": "Palikir",
            "RichtigeAntwortMöglichkeiten": "Palikir",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Palikir liegt auf der Insel Pohnpei"
        },
        { //Hauptstädte
            "Kategorie": "Geographie",
            "Frage": "Was ist die Hauptstadt von Nauru?",
            "Antworten": ["Yaren", "Buada", "Nibok", "Anabar"],
            "RichtigeAntwort": "Yaren",
            "RichtigeAntwortMöglichkeiten": "Yaren",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nauru hat offiziell keine Hauptstadt, aber die Regierungssitze befinden sich in Yaren"
        },
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        /////////////////////////////////EUROPA/////////////////////////////////
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Marseille?",
            "Antworten": ["Spanien", "Portugal", "Italien", "Frankreich"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Marseille ist eine bedeutende Hafenstadt am Mittelmeer in Frankreich"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Lyon?",
            "Antworten": ["Belgien", "Schweiz", "Frankreich", "Italien"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Lyon ist eine bedeutende Stadt in Frankreich, bekannt für ihre Gastronomie"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Bordeaux?",
            "Antworten": ["Spanien", "Portugal", "Italien", "Frankreich"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bordeaux ist bekannt für seine Weine und seine historische Altstadt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Barcelona?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Barcelona ist eine bedeutende Stadt in Katalonien, Spanien"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Valencia?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Valencia ist eine bedeutende Hafenstadt an der Ostküste Spaniens"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Sevilla?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Sevilla ist bekannt für ihre Architektur, Flamenco-Tanz und die Kathedrale von Sevilla"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Porto?",
            "Antworten": ["Spanien", "Frankreich", "Italien", "Portugal"],
            "RichtigeAntwort": "Portugal",
            "RichtigeAntwortMöglichkeiten": "Portugal",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Porto ist die zweitgrößte Stadt Portugals und bekannt für ihren Weinanbau"
        },
    
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Manchester?",
            "Antworten": ["Irland", "Schottland", "Wales", "England"],
            "RichtigeAntwort": "England",
            "RichtigeAntwortMöglichkeiten": "England Vereinigtes Königreich UK",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Manchester ist bekannt für seine industrielle Geschichte und seine Fußballkultur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Liverpool?",
            "Antworten": ["Irland", "Schottland", "Wales", "England"],
            "RichtigeAntwort": "England",
            "RichtigeAntwortMöglichkeiten": "England Vereinigtes Königreich UK",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Liverpool ist bekannt als Geburtsort der Beatles und für ihren Hafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Glasgow?",
            "Antworten": ["Irland", "England", "Wales", "Schottland"],
            "RichtigeAntwort": "Schottland",
            "RichtigeAntwortMöglichkeiten": "Schottland Vereinigtes Königreich UK",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Glasgow ist die größte Stadt Schottlands und bekannt für ihre viktorianische und Art-Nouveau-Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Edinburgh?",
            "Antworten": ["Irland", "England", "Wales", "Schottland"],
            "RichtigeAntwort": "Schottland",
            "RichtigeAntwortMöglichkeiten": "Schottland Vereinigtes Königreich UK",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Edinburgh ist bekannt für ihr Schloss, das jährlich stattfindende Edinburgh Festival und ihre historische Altstadt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Bergen?",
            "Antworten": ["Dänemark", "Finnland", "Island", "Norwegen"],
            "RichtigeAntwort": "Norwegen",
            "RichtigeAntwortMöglichkeiten": "Norwegen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bergen ist eine wichtige Hafenstadt in Norwegen und bekannt für ihre umliegenden Fjorde"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Göteborg?",
            "Antworten": ["Norwegen", "Finnland", "Dänemark", "Schweden"],
            "RichtigeAntwort": "Schweden",
            "RichtigeAntwortMöglichkeiten": "Schweden",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Göteborg ist die zweitgrößte Stadt Schwedens und bekannt für ihren Hafen und die Universität"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Malmö?",
            "Antworten": ["Norwegen", "Finnland", "Dänemark", "Schweden"],
            "RichtigeAntwort": "Schweden",
            "RichtigeAntwortMöglichkeiten": "Schweden",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Malmö ist eine bedeutende Stadt im Süden Schwedens und bekannt für ihre moderne Architektur"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Mailand?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Mailand ist eine bedeutende Stadt in Norditalien, bekannt für Mode und Design"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Neapel?",
            "Antworten": ["Griechenland", "Italien", "Spanien", "Frankreich"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Neapel ist eine große Stadt in Süditalien, bekannt für ihre Küste und Geschichte"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Turin?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Turin ist eine bedeutende Industriestadt in Norditalien und bekannt für ihre barocke Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Florenz?",
            "Antworten": ["Portugal", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Florenz ist bekannt als Geburtsort der Renaissance und für ihre Kunst und Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Thessaloniki?",
            "Antworten": ["Türkei", "Bulgarien", "Albanien", "Griechenland"],
            "RichtigeAntwort": "Griechenland",
            "RichtigeAntwortMöglichkeiten": "Griechenland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Thessaloniki ist die zweitgrößte Stadt Griechenlands und bekannt für ihre byzantinischen Bauwerke"
        },
    
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Sankt Petersburg?",
            "Antworten": ["Ukraine", "Litauen", "Polen", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Sankt Petersburg ist die zweitgrößte Stadt Russlands und bekannt für ihre Paläste und Museen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Nowosibirsk?",
            "Antworten": ["Ukraine", "Litauen", "Polen", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nowosibirsk ist die drittgrößte Stadt Russlands und bekannt für ihre wissenschaftliche Forschung"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Jekaterinburg?",
            "Antworten": ["Ukraine", "Litauen", "Polen", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Jekaterinburg ist eine bedeutende Industriestadt im Uralgebirge"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Dnipro?",
            "Antworten": ["Polen", "Russland", "Litauen", "Ukraine"],
            "RichtigeAntwort": "Ukraine",
            "RichtigeAntwortMöglichkeiten": "Ukraine",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dnipro ist eine bedeutende Industriestadt in der Ukraine"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Charkiw?",
            "Antworten": ["Polen", "Russland", "Litauen", "Ukraine"],
            "RichtigeAntwort": "Ukraine",
            "RichtigeAntwortMöglichkeiten": "Ukraine",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Charkiw ist die zweitgrößte Stadt der Ukraine und bekannt für ihre Universitäten und Forschungseinrichtungen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Krakau?",
            "Antworten": ["Polen", "Slowakei", "Ungarn", "Tschechien"],
            "RichtigeAntwort": "Polen",
            "RichtigeAntwortMöglichkeiten": "Polen",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Krakau ist eine bedeutende Stadt in Polen, bekannt für ihre mittelalterliche Altstadt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Gdańsk?",
            "Antworten": ["Polen", "Slowakei", "Ungarn", "Tschechien"],
            "RichtigeAntwort": "Polen",
            "RichtigeAntwortMöglichkeiten": "Polen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Gdańsk ist eine bedeutende Hafenstadt an der Ostseeküste Polens"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Brno?",
            "Antworten": ["Polen", "Slowakei", "Ungarn", "Tschechien"],
            "RichtigeAntwort": "Tschechien",
            "RichtigeAntwortMöglichkeiten": "Tschechien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Brno ist die zweitgrößte Stadt Tschechiens und bekannt für ihre Universität und Architektur"
        },
        
        ////////////////////////////////SÜD AMERIKA///////////////////////////////////
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt São Paulo?",
            "Antworten": ["Argentinien", "Uruguay", "Paraguay", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "São Paulo ist die größte Stadt Brasiliens und eine der größten Städte der Welt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Rio de Janeiro?",
            "Antworten": ["Argentinien", "Uruguay", "Paraguay", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Rio de Janeiro ist bekannt für seinen Karneval und die Christusstatue"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Salvador?",
            "Antworten": ["Argentinien", "Uruguay", "Paraguay", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Salvador ist bekannt für seine koloniale Architektur und seine afro-brasilianische Kultur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Córdoba?",
            "Antworten": ["Bolivien", "Chile", "Paraguay", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Córdoba ist eine wichtige Stadt in Argentinien, bekannt für ihre Kolonialarchitektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Rosario?",
            "Antworten": ["Bolivien", "Chile", "Paraguay", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Rosario ist eine bedeutende Stadt in Argentinien und bekannt für ihre Kultur und Geschichte"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Medellín?",
            "Antworten": ["Brasilien", "Peru", "Ecuador", "Kolumbien"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Medellín ist die zweitgrößte Stadt Kolumbiens und für ihr innovatives Transportsystem bekannt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Cali?",
            "Antworten": ["Brasilien", "Peru", "Ecuador", "Kolumbien"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Cali ist bekannt für seinen Salsa-Tanz und seine lebhafte Kultur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Guayaquil?",
            "Antworten": ["Brasilien", "Kolumbien", "Peru", "Ecuador"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Guayaquil ist die größte Stadt Ecuadors und ein wichtiger Handels- und Industriehafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Cuenca?",
            "Antworten": ["Brasilien", "Kolumbien", "Peru", "Ecuador"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Cuenca ist bekannt für ihre gut erhaltene Altstadt und ihre koloniale Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Valparaíso?",
            "Antworten": ["Argentinien", "Bolivien", "Peru", "Chile"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Valparaíso ist eine wichtige Hafenstadt in Chile"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Concepción?",
            "Antworten": ["Argentinien", "Bolivien", "Peru", "Chile"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Concepción ist eine bedeutende Stadt im Süden Chiles"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Arequipa?",
            "Antworten": ["Brasilien", "Kolumbien", "Bolivien", "Peru"],
            "RichtigeAntwort": "Peru",
            "RichtigeAntwortMöglichkeiten": "Peru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Arequipa ist die zweitgrößte Stadt Perus und bekannt für ihre koloniale Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Trujillo?",
            "Antworten": ["Brasilien", "Kolumbien", "Bolivien", "Peru"],
            "RichtigeAntwort": "Peru",
            "RichtigeAntwortMöglichkeiten": "Peru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Trujillo ist eine bedeutende Stadt im Norden Perus und bekannt für ihre Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Maracaibo?",
            "Antworten": ["Kolumbien", "Brasilien", "Guyana", "Venezuela"],
            "RichtigeAntwort": "Venezuela",
            "RichtigeAntwortMöglichkeiten": "Venezuela",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Maracaibo ist eine der größten Städte Venezuelas und ein wichtiger Ölproduktionsstandort"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Valencia?",
            "Antworten": ["Kolumbien", "Brasilien", "Guyana", "Venezuela"],
            "RichtigeAntwort": "Venezuela",
            "RichtigeAntwortMöglichkeiten": "Venezuela",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Valencia ist eine der größten Städte Venezuelas und ein wichtiges Industriezentrum"
        },
    
        ////////////////////////////////NORD AMERIKA////////////////////////////////
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt New York City?",
            "Antworten": ["Kanada", "Mexiko", "Kuba", "Vereinigte Staaten"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "New York City ist die bevölkerungsreichste Stadt der Vereinigten Staaten"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Los Angeles?",
            "Antworten": ["Kanada", "Mexiko", "Vereinigte Staaten", "Kuba"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Los Angeles ist bekannt für Hollywood und die Filmindustrie"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Chicago?",
            "Antworten": ["Kanada", "Mexiko", "Vereinigte Staaten", "Kuba"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Chicago liegt am Ufer des Michigansees und ist bekannt für seine Architektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Houston?",
            "Antworten": ["Kanada", "Mexiko", "Vereinigte Staaten", "Kuba"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Houston ist die größte Stadt in Texas und bekannt für das Space Center Houston"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Toronto?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Kanada", "Kuba"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Toronto ist die bevölkerungsreichste Stadt Kanadas und eine der multikulturellsten Städte der Welt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Vancouver?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Kanada", "Kuba"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Vancouver liegt an der Westküste Kanadas und ist bekannt für seine natürliche Schönheit"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Montreal?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Kanada", "Kuba"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Montreal ist die zweitgrößte Stadt Kanadas und bekannt für ihre französischsprachige Kultur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Monterrey?",
            "Antworten": ["Vereinigte Staaten", "Kanada", "Guatemala", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Monterrey ist eine wichtige Industrie- und Handelsstadt in Mexiko"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Guadalajara?",
            "Antworten": ["Vereinigte Staaten", "Kanada", "Guatemala", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Guadalajara ist bekannt für seine reiche Kultur und als Geburtsort des Mariachi"
        },
    
        //////////////////////////////Asien/////////////////////////////////
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Osaka?",
            "Antworten": ["China", "Südkorea", "Japan", "Vietnam"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Osaka ist die drittgrößte Stadt Japans und bekannt für ihre moderne Architektur und ihr Nachtleben"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Yokohama?",
            "Antworten": ["China", "Südkorea", "Japan", "Taiwan"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Yokohama ist eine der größten Städte Japans und bekannt für ihren Hafen und ihre futuristischen Gebäude"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Busan?",
            "Antworten": ["China", "Japan", "Nordkorea", "Südkorea"],
            "RichtigeAntwort": "Südkorea",
            "RichtigeAntwortMöglichkeiten": "Südkorea",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Busan ist die zweitgrößte Stadt Südkoreas und bekannt für ihren Hafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Incheon?",
            "Antworten": ["China", "Japan", "Nordkorea", "Südkorea"],
            "RichtigeAntwort": "Südkorea",
            "RichtigeAntwortMöglichkeiten": "Südkorea",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Incheon ist eine bedeutende Stadt in Südkorea und bekannt für ihren internationalen Flughafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Shanghai?",
            "Antworten": ["Japan", "Südkorea", "Taiwan", "China"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Shanghai ist die größte Stadt Chinas und ein globales Finanzzentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Guangzhou?",
            "Antworten": ["Japan", "Südkorea", "Taiwan", "China"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Guangzhou ist eine der größten Städte Chinas und ein wichtiges Handelszentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Shenzhen?",
            "Antworten": ["Japan", "Südkorea", "Taiwan", "China"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Shenzhen ist eine der am schnellsten wachsenden Städte Chinas und bekannt für ihre Hightech-Industrie"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Mumbai (Bombay)?",
            "Antworten": ["Pakistan", "Bangladesch", "Sri Lanka", "Indien"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Mumbai, früher als Bombay bekannt, ist die größte Stadt Indiens und das wirtschaftliche Zentrum des Landes"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Bengaluru (Bangalore)?",
            "Antworten": ["Pakistan", "Bangladesch", "Sri Lanka", "Indien"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bengaluru, auch als Bangalore bekannt, ist das IT-Zentrum Indiens"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Kalkutta (Kolkata)?",
            "Antworten": ["Pakistan", "Bangladesch", "Sri Lanka", "Indien"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kolkata, früher als Kalkutta bekannt, ist eine der größten Städte Indiens und bekannt für ihre Kolonialarchitektur"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Lahore?",
            "Antworten": ["Indien", "Bangladesch", "Afghanistan", "Pakistan"],
            "RichtigeAntwort": "Pakistan",
            "RichtigeAntwortMöglichkeiten": "Pakistan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lahore ist die zweitgrößte Stadt Pakistans und bekannt für ihre kulturellen und historischen Stätten"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Karatschi?",
            "Antworten": ["Indien", "Bangladesch", "Afghanistan", "Pakistan"],
            "RichtigeAntwort": "Pakistan",
            "RichtigeAntwortMöglichkeiten": "Pakistan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Karatschi ist die größte Stadt Pakistans und ein wichtiges wirtschaftliches Zentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Chittagong?",
            "Antworten": ["Pakistan", "Indien", "Myanmar", "Bangladesch"],
            "RichtigeAntwort": "Bangladesch",
            "RichtigeAntwortMöglichkeiten": "Bangladesch",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Chittagong ist die zweitgrößte Stadt Bangladeschs und ein wichtiger Hafen"
        },
    
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Ho-Chi-Minh-Stadt (Saigon)?",
            "Antworten": ["Indonesien", "Malaysia", "Thailand", "Vietnam"],
            "RichtigeAntwort": "Vietnam",
            "RichtigeAntwortMöglichkeiten": "Vietnam",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ho-Chi-Minh-Stadt, früher als Saigon bekannt, ist die größte Stadt Vietnams"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Da Nang?",
            "Antworten": ["Indonesien", "Malaysia", "Thailand", "Vietnam"],
            "RichtigeAntwort": "Vietnam",
            "RichtigeAntwortMöglichkeiten": "Vietnam",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Da Nang ist eine wichtige Hafenstadt in Zentralvietnam"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Jakarta?",
            "Antworten": ["Malaysia", "Philippinen", "Thailand", "Indonesien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Jakarta ist die Hauptstadt und größte Stadt Indonesiens"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Surabaya?",
            "Antworten": ["Malaysia", "Philippinen", "Thailand", "Indonesien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Surabaya ist die zweitgrößte Stadt Indonesiens und ein wichtiger Hafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Cebu?",
            "Antworten": ["Indonesien", "Malaysia", "Vietnam", "Philippinen"],
            "RichtigeAntwort": "Philippinen",
            "RichtigeAntwortMöglichkeiten": "Philippinen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Cebu ist eine wichtige Stadt und Insel in den Zentralphilippinen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Bangkok?",
            "Antworten": ["Vietnam", "Myanmar", "Laos", "Thailand"],
            "RichtigeAntwort": "Thailand",
            "RichtigeAntwortMöglichkeiten": "Thailand",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Bangkok ist die Hauptstadt und größte Stadt Thailands"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Chiang Mai?",
            "Antworten": ["Vietnam", "Myanmar", "Laos", "Thailand"],
            "RichtigeAntwort": "Thailand",
            "RichtigeAntwortMöglichkeiten": "Thailand",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Chiang Mai ist eine kulturell bedeutende Stadt im Norden Thailands"
        },
    
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Tel Aviv?",
            "Antworten": ["Iran", "Irak", "Syrien", "Israel"],
            "RichtigeAntwort": "Israel",
            "RichtigeAntwortMöglichkeiten": "Israel",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tel Aviv ist eine der größten Städte Israels und bekannt für ihre Strände und das Nachtleben"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Haifa?",
            "Antworten": ["Iran", "Irak", "Syrien", "Israel"],
            "RichtigeAntwort": "Israel",
            "RichtigeAntwortMöglichkeiten": "Israel",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Haifa ist eine wichtige Hafenstadt im Norden Israels"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Istanbul?",
            "Antworten": ["Iran", "Irak", "Syrien", "Türkei"],
            "RichtigeAntwort": "Türkei",
            "RichtigeAntwortMöglichkeiten": "Türkei",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Istanbul ist die größte Stadt der Türkei und das kulturelle und wirtschaftliche Zentrum des Landes"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Izmir?",
            "Antworten": ["Iran", "Irak", "Syrien", "Türkei"],
            "RichtigeAntwort": "Türkei",
            "RichtigeAntwortMöglichkeiten": "Türkei",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Izmir ist eine wichtige Hafenstadt an der Ägäisküste der Türkei"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Bagdad?",
            "Antworten": ["Syrien", "Iran", "Jordanien", "Irak"],
            "RichtigeAntwort": "Irak",
            "RichtigeAntwortMöglichkeiten": "Irak",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bagdad ist die Hauptstadt und größte Stadt des Iraks"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Basra?",
            "Antworten": ["Syrien", "Iran", "Jordanien", "Irak"],
            "RichtigeAntwort": "Irak",
            "RichtigeAntwortMöglichkeiten": "Irak",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Basra ist die drittgrößte Stadt des Iraks und ein wichtiger Hafen am Persischen Golf"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Teheran?",
            "Antworten": ["Pakistan", "Indien", "Irak", "Iran"],
            "RichtigeAntwort": "Iran",
            "RichtigeAntwortMöglichkeiten": "Iran",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Teheran ist die Hauptstadt und größte Stadt Irans"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Mashhad?",
            "Antworten": ["Pakistan", "Indien", "Irak", "Iran"],
            "RichtigeAntwort": "Iran",
            "RichtigeAntwortMöglichkeiten": "Iran",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Mashhad ist die zweitgrößte Stadt Irans und ein bedeutendes religiöses Zentrum"
        },
    
        ///////////////////////////////AFRIKA/////////////////////////////////
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Casablanca?",
            "Antworten": ["Algerien", "Libyen", "Tunesien", "Marokko"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Casablanca ist die größte Stadt Marokkos und ein bedeutendes Finanzzentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Marrakesch?",
            "Antworten": ["Algerien", "Libyen", "Tunesien", "Marokko"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Marrakesch ist bekannt für ihre historischen Märkte und Paläste"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Alexandria?",
            "Antworten": ["Marokko", "Tunesien", "Algerien", "Ägypten"],
            "RichtigeAntwort": "Ägypten",
            "RichtigeAntwortMöglichkeiten": "Ägypten",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Alexandria ist eine bedeutende Hafenstadt am Mittelmeer in Ägypten"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Fès?",
            "Antworten": ["Ägypten", "Tunesien", "Algerien", "Marokko"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Fès ist eine bedeutende Stadt in Marokko, bekannt für ihre gut erhaltene Altstadt"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Oran?",
            "Antworten": ["Marokko", "Tunesien", "Libyen", "Algerien"],
            "RichtigeAntwort": "Algerien",
            "RichtigeAntwortMöglichkeiten": "Algerien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Oran ist eine bedeutende Hafenstadt in Algerien"
        },
    
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Lagos?",
            "Antworten": ["Ghana", "Elfenbeinküste", "Nigeria", "Senegal"],
            "RichtigeAntwort": "Nigeria",
            "RichtigeAntwortMöglichkeiten": "Nigeria",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Lagos ist die größte Stadt Nigerias und ein bedeutendes Wirtschaftszentrum in Afrika"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Ibadan?",
            "Antworten": ["Ghana", "Elfenbeinküste", "Nigeria", "Senegal"],
            "RichtigeAntwort": "Nigeria",
            "RichtigeAntwortMöglichkeiten": "Nigeria",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ibadan ist eine der größten Städte Nigerias und bekannt für ihre Universitäten"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Accra?",
            "Antworten": ["Nigeria", "Elfenbeinküste", "Gambia", "Ghana"],
            "RichtigeAntwort": "Ghana",
            "RichtigeAntwortMöglichkeiten": "Ghana",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Accra ist die Hauptstadt und größte Stadt Ghanas"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Kumasi?",
            "Antworten": ["Nigeria", "Elfenbeinküste", "Gambia", "Ghana"],
            "RichtigeAntwort": "Ghana",
            "RichtigeAntwortMöglichkeiten": "Ghana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kumasi ist bekannt als kulturelles Zentrum Ghanas"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Dakar?",
            "Antworten": ["Nigeria", "Elfenbeinküste", "Mali", "Senegal"],
            "RichtigeAntwort": "Senegal",
            "RichtigeAntwortMöglichkeiten": "Senegal",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Dakar ist die Hauptstadt und größte Stadt Senegals"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Kinshasa?",
            "Antworten": ["Angola", "Kamerun", "Gabon", "Demokratische Republik Kongo"],
            "RichtigeAntwort": "Demokratische Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Demokratische Republik Kongo Kongo-Kinshasa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kinshasa ist die Hauptstadt und größte Stadt der Demokratischen Republik Kongo"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Lubumbashi?",
            "Antworten": ["Angola", "Kamerun", "Gabon", "Demokratische Republik Kongo"],
            "RichtigeAntwort": "Demokratische Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Demokratische Republik Kongo Kongo-Kinshasa",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lubumbashi ist die zweitgrößte Stadt der Demokratischen Republik Kongo und ein bedeutendes Bergbauzentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Brazzaville?",
            "Antworten": ["Demokratische Republik Kongo", "Kamerun", "Gabon", "Republik Kongo"],
            "RichtigeAntwort": "Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Republik Kongo Kongo-Brazzaville",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Brazzaville ist die Hauptstadt der Republik Kongo und liegt direkt gegenüber von Kinshasa"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Nairobi?",
            "Antworten": ["Uganda", "Tansania", "Somalia", "Kenia"],
            "RichtigeAntwort": "Kenia",
            "RichtigeAntwortMöglichkeiten": "Kenia",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Nairobi ist die Hauptstadt und größte Stadt Kenias"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Mombasa?",
            "Antworten": ["Uganda", "Tansania", "Somalia", "Kenia"],
            "RichtigeAntwort": "Kenia",
            "RichtigeAntwortMöglichkeiten": "Kenia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Mombasa ist die zweitgrößte Stadt Kenias und ein wichtiger Hafen am Indischen Ozean"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Dar es Salaam?",
            "Antworten": ["Uganda", "Kenia", "Somalia", "Tansania"],
            "RichtigeAntwort": "Tansania",
            "RichtigeAntwortMöglichkeiten": "Tansania",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Dar es Salaam ist die größte Stadt Tansanias und ein bedeutender Hafen"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Arusha?",
            "Antworten": ["Uganda", "Kenia", "Somalia", "Tansania"],
            "RichtigeAntwort": "Tansania",
            "RichtigeAntwortMöglichkeiten": "Tansania",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Arusha ist bekannt als Zentrum für Safari-Tourismus in Tansania"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Addis Abeba?",
            "Antworten": ["Uganda", "Kenia", "Somalia", "Äthiopien"],
            "RichtigeAntwort": "Äthiopien",
            "RichtigeAntwortMöglichkeiten": "Äthiopien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Addis Abeba ist die Hauptstadt und größte Stadt Äthiopiens"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Johannesburg?",
            "Antworten": ["Namibia", "Botswana", "Simbabwe", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Johannesburg ist die größte Stadt Südafrikas und ein bedeutendes Wirtschaftszentrum"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Kapstadt?",
            "Antworten": ["Namibia", "Botswana", "Simbabwe", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Kapstadt ist bekannt für ihren Hafen, den Tafelberg und die historische Robben Island"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Durban?",
            "Antworten": ["Namibia", "Botswana", "Simbabwe", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Durban ist eine bedeutende Hafenstadt an der Ostküste Südafrikas"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Pretoria?",
            "Antworten": ["Namibia", "Botswana", "Simbabwe", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Pretoria ist eine der drei Hauptstädte Südafrikas und bekannt für ihre Regierungsgebäude"
        },
    
    
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Sydney?",
            "Antworten": ["Neuseeland", "Australien", "Papua-Neuguinea", "Fidschi"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Sydney ist die größte Stadt Australiens und bekannt für das Sydney Opera House und die Harbour Bridge"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Melbourne?",
            "Antworten": ["Neuseeland", "Australien", "Papua-Neuguinea", "Fidschi"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Melbourne ist die zweitgrößte Stadt Australiens und bekannt für ihre Kultur und Kunst"
        },
        { //Städte
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Stadt Brisbane?",
            "Antworten": ["Neuseeland", "Australien", "Papua-Neuguinea", "Fidschi"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brisbane ist die drittgrößte Stadt Australiens und bekannt für ihre subtropische Klimazone"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Bevölkerungsreichste Stadt weltweit
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung weltweit?",
            "Antworten": ["New York City", "Tokio", "Shanghai", "Delhi"],
            "RichtigeAntwort": "Tokio",
            "RichtigeAntwortMöglichkeiten": "Tokio",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Tokio ist die bevölkerungsreichste Stadt weltweit mit über 37 Millionen Einwohnern"
        },
        { //Bevölkerungsärmste Stadt weltweit
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die geringste Bevölkerung weltweit?",
            "Antworten": ["Vatikanstadt", "Monowi", "Hum", "Adamstown"],
            "RichtigeAntwort": "Monowi",
            "RichtigeAntwortMöglichkeiten": "Monowi",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Monowi in Nebraska, USA, ist die bevölkerungsärmste Stadt der Welt mit nur einer Einwohnerin"
        },
        { //Bevölkerungsreichste Stadt in Nordamerika
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Nordamerika?",
            "Antworten": ["Los Angeles", "Mexiko-Stadt", "Toronto", "New York City"],
            "RichtigeAntwort": "Mexiko-Stadt",
            "RichtigeAntwortMöglichkeiten": "Mexiko-Stadt",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Mexiko-Stadt ist die bevölkerungsreichste Stadt in Nordamerika mit über 21 Millionen Einwohnern"
        },
        { //Bevölkerungsreichste Stadt in Südamerika
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Südamerika?",
            "Antworten": ["Buenos Aires", "Lima", "Bogotá", "São Paulo"],
            "RichtigeAntwort": "São Paulo",
            "RichtigeAntwortMöglichkeiten": "São Paulo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "São Paulo ist die bevölkerungsreichste Stadt in Südamerika mit über 12 Millionen Einwohnern"
        },
        { //Bevölkerungsreichste Stadt in Europa
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Europa?",
            "Antworten": ["Paris", "London", "Moskau", "Berlin"],
            "RichtigeAntwort": "Moskau",
            "RichtigeAntwortMöglichkeiten": "Moskau",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Moskau ist die bevölkerungsreichste Stadt in Europa mit über 12 Millionen Einwohnern"
        },
        { //Bevölkerungsärmste Stadt in Europa
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die geringste Bevölkerung in Europa?",
            "Antworten": ["Vatikanstadt", "Hum", "Vaduz", "San Marino"],
            "RichtigeAntwort": "Hum",
            "RichtigeAntwortMöglichkeiten": "Hum",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Hum in Kroatien ist die bevölkerungsärmste Stadt in Europa mit etwa 30 Einwohnern"
        },
        { //Bevölkerungsreichste Stadt in Afrika
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Afrika?",
            "Antworten": ["Kapstadt", "Lagos", "Kairo", "Johannesburg"],
            "RichtigeAntwort": "Lagos",
            "RichtigeAntwortMöglichkeiten": "Lagos",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lagos ist die bevölkerungsreichste Stadt in Afrika mit über 21 Millionen Einwohnern"
        },
        { //Bevölkerungsreichste Stadt in Asien
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Asien?",
            "Antworten": ["Shanghai", "Mumbai", "Tokio", "Peking"],
            "RichtigeAntwort": "Tokio",
            "RichtigeAntwortMöglichkeiten": "Tokio",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Tokio ist die bevölkerungsreichste Stadt in Asien mit über 37 Millionen Einwohnern"
        },
        { //Bevölkerungsreichste Stadt in Australien und Ozeanien
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt hat die größte Bevölkerung in Australien und Ozeanien?",
            "Antworten": ["Sydney", "Melbourne", "Auckland", "Brisbane"],
            "RichtigeAntwort": "Sydney",
            "RichtigeAntwortMöglichkeiten": "Sydney",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Sydney hat über 5 Millionen Einwohnern"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die längste Landgrenze mit Russland?",
            "Antworten": ["China", "Kasachstan", "Ukraine", "Mongolei"],
            "RichtigeAntwort": "Kasachstan",
            "RichtigeAntwortMöglichkeiten": "Kasachstan",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Kasachstan hat die längste Landgrenze mit Russland, die etwa 7.644 Kilometer lang ist"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die meisten Nachbarländer?",
            "Antworten": ["China", "Russland", "Deutschland", "Brasilien"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "China hat die meisten Nachbarländer mit insgesamt 14 angrenzenden Ländern"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist vollständig von Südafrika umschlossen?",
            "Antworten": ["Lesotho", "Swasiland", "Botswana", "Namibia"],
            "RichtigeAntwort": "Lesotho",
            "RichtigeAntwortMöglichkeiten": "Lesotho",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Lesotho ist ein Binnenstaat, der vollständig von Südafrika umschlossen ist"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die längste Küstenlinie der Welt?",
            "Antworten": ["Australien", "Kanada", "Indonesien", "Russland"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Kanada hat mit etwa 202.080 Kilometern die längste Küstenlinie der Welt"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land wurde nach dem Zweiten Weltkrieg in Nord und Süd geteilt?",
            "Antworten": ["Vietnam", "Deutschland", "Korea", "Sudan"],
            "RichtigeAntwort": "Korea",
            "RichtigeAntwortMöglichkeiten": "Korea Nordkorea Südkorea",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Korea wurde nach dem Zweiten Weltkrieg in Nord- und Südkorea geteilt"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land liegt zwischen Frankreich und Spanien in den Pyrenäen?",
            "Antworten": ["Andorra", "Luxemburg", "Monaco", "Liechtenstein"],
            "RichtigeAntwort": "Andorra",
            "RichtigeAntwortMöglichkeiten": "Andorra",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Andorra liegt in den Pyrenäen zwischen Frankreich und Spanien"
        },
        { //Politische Grenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land wurde nach dem Ersten Weltkrieg in mehrere Teile zerteilt?",
            "Antworten": ["Österreich-Ungarn", "Ottomanisches Reich", "Russisches Reich", "Deutschland"],
            "RichtigeAntwort": "Österreich-Ungarn",
            "RichtigeAntwortMöglichkeiten": "Österreich-Ungarn",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Österreich-Ungarische Kaiserreich wurde nach dem Ersten Weltkrieg in mehrere neue Staaten aufgeteilt"
        },
    
    
        
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welches Handelsabkommen umfasst die Länder Kanada, Mexiko und die USA?",
            "Antworten": ["EU", "ASEAN", "NAFTA", "MERCOSUR"],
            "RichtigeAntwort": "NAFTA",
            "RichtigeAntwortMöglichkeiten": "NAFTA",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Nordamerikanische Freihandelsabkommen (NAFTA) umfasst Kanada, Mexiko und die USA"
        },
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welches Handelsabkommen umfasst die meisten Länder in Südostasien?",
            "Antworten": ["EU", "NAFTA", "ASEAN", "MERCOSUR"],
            "RichtigeAntwort": "ASEAN",
            "RichtigeAntwortMöglichkeiten": "ASEAN",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Der Verband Südostasiatischer Nationen (ASEAN) umfasst 10 Länder in Südostasien"
        },
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welches Handelsabkommen umfasst die Länder Brasilien, Argentinien, Paraguay und Uruguay?",
            "Antworten": ["EU", "NAFTA", "ASEAN", "MERCOSUR"],
            "RichtigeAntwort": "MERCOSUR",
            "RichtigeAntwortMöglichkeiten": "MERCOSUR",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "MERCOSUR ist ein Handelsabkommen, das Brasilien, Argentinien, Paraguay und Uruguay umfasst"
        },
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die meisten Mitglieder in der Weltbank?",
            "Antworten": ["Afrika", "Asien", "Europa", "Südamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Afrika hat die meisten Mitgliedsländer in der Weltbank"
        },
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welches der folgenden Länder ist kein Mitglied der Europäischen Union (Schweden, Norwegen, Finnland, Dänemark)?",
            "Antworten": ["Schweden", "Norwegen", "Finnland", "Dänemark"],
            "RichtigeAntwort": "Norwegen",
            "RichtigeAntwortMöglichkeiten": "Norwegen",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Norwegen ist kein Mitglied der Europäischen Union, obwohl es eng mit der EU zusammenarbeitet"
        },
        { //Wirtschaftszonen
            "Kategorie": "Geographie",
            "Frage": "Welche Stadt gilt als das Finanzzentrum der Europäischen Union?",
            "Antworten": ["Paris", "London", "Frankfurt am Main", "Brüssel"],
            "RichtigeAntwort": "Frankfurt am Main",
            "RichtigeAntwortMöglichkeiten": "Frankfurt am Main Frankfurt",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Frankfurt am Main gilt als das Finanzzentrum der Europäischen Union und Sitz der Europäischen Zentralbank"
        },
    
    
    
    
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Erdöl weltweit?",
            "Antworten": ["Saudi-Arabien", "USA", "Russland", "Iran"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA Vereinigte Staaten Amerika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die USA sind der größte Produzent von Erdöl weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größten Reserven an Gold?",
            "Antworten": ["Südafrika", "China", "Australien", "USA"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA Vereinigte Staaten Amerika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die USA haben die größten Goldreserven der Welt"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Kaffee?",
            "Antworten": ["Kolumbien", "Vietnam", "Brasilien", "Äthiopien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Brasilien ist der größte Produzent von Kaffee weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Exporteur von Bananen?",
            "Antworten": ["Ecuador", "Kolumbien", "Philippinen", "Indien"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ecuador ist der größte Exporteur von Bananen weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Weizen weltweit?",
            "Antworten": ["USA", "Indien", "China", "Russland"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "China ist der größte Produzent von Weizen weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist weltweit der größte Exporteur von Erdgas?",
            "Antworten": ["USA", "Russland", "Katar", "Kanada"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Russland ist der größte Exporteur von Erdgas weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Lithium, einem wichtigen Rohstoff für Batterien?",
            "Antworten": ["Australien", "Bolivien", "Chile", "Argentinien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Australien ist der größte Produzent von Lithium, das für die Produktion von Batterien benötigt wird"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Diamanten weltweit?",
            "Antworten": ["Australien", "Kanada", "Botswana", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Russland ist der größte Produzent von Diamanten weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größten Vorkommen an seltenen Erden, die in der Elektronikindustrie verwendet werden?",
            "Antworten": ["USA", "China", "Australien", "Brasilien"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "China hat die größten Vorkommen an seltenen Erden, die für die Elektronikindustrie entscheidend sind"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Kakaobohnen weltweit?",
            "Antworten": ["Brasilien", "Indonesien", "Ghana", "Elfenbeinküste"],
            "RichtigeAntwort": "Elfenbeinküste",
            "RichtigeAntwortMöglichkeiten": "Elfenbeinküste Côte d'Ivoire",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Elfenbeinküste ist der größte Produzent von Kakaobohnen weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Exporteur von Eisenerz?",
            "Antworten": ["Brasilien", "Australien", "Indien", "China"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Australien ist der größte Exporteur von Eisenerz weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Silber?",
            "Antworten": ["Peru", "China", "Australien", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Mexiko ist der größte Produzent von Silber weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Kupfer?",
            "Antworten": ["USA", "Chile", "Peru", "China"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Chile ist der größte Produzent von Kupfer weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Palmöl?",
            "Antworten": ["Malaysia", "Thailand", "Nigeria", "Indonesien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Indonesien ist der größte Produzent von Palmöl weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Exporteur von Erdgas nach Europa?",
            "Antworten": ["Norwegen", "Russland", "Algerien", "Katar"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Russland ist der größte Exporteur von Erdgas nach Europa"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Zink?",
            "Antworten": ["USA", "China", "Kanada", "Australien"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "China ist der größte Produzent von Zink weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Baumwolle?",
            "Antworten": ["Indien", "USA", "China", "Pakistan"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "China ist der größte Produzent von Baumwolle weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größten Vorkommen an Kohle?",
            "Antworten": ["China", "USA", "Indien", "Russland"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA Vereinigte Staaten Amerika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die USA besitzen die größten Vorkommen an Kohle weltweit"
        },
        { //Ressourcen und Rohstoffe
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist der größte Produzent von Zuckerrohr?",
            "Antworten": ["Brasilien", "Indien", "China", "Thailand"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Brasilien ist der größte Produzent von Zuckerrohr weltweit"
        },
    
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welche zwei Länder teilen die längste Landgrenze der Welt?",
            "Antworten": ["USA und Mexiko", "Russland und China", "Kanada und USA", "China und Indien"],
            "RichtigeAntwort": "Kanada und USA",
            "RichtigeAntwortMöglichkeiten": "Kanada USA",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kanada und die USA teilen die längste Landgrenze der Welt, die über 8.891 Kilometer lang ist"
        },
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welches europäische Land hat die meisten Nachbarländer?",
            "Antworten": ["Deutschland", "Frankreich", "Polen", "Russland"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Deutschland hat die meisten Nachbarländer in Europa mit insgesamt neun angrenzenden Ländern"
        },
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welche zwei afrikanischen Länder haben die längste gemeinsame Grenze?",
            "Antworten": ["Sudan und Südsudan", "Ägypten und Libyen", "Angola und Demokratische Republik Kongo", "Algerien und Mali"],
            "RichtigeAntwort": "Sudan und Südsudan",
            "RichtigeAntwortMöglichkeiten": "Sudan Südsudan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Sudan und Südsudan teilen die längste gemeinsame Grenze in Afrika, die etwa 2.184 Kilometer lang ist"
        },
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welche beiden Länder in Südamerika teilen die längste Landgrenze?",
            "Antworten": ["Brasilien und Argentinien", "Argentinien und Chile", "Brasilien und Bolivien", "Peru und Kolumbien"],
            "RichtigeAntwort": "Argentinien und Chile",
            "RichtigeAntwortMöglichkeiten": "Argentinien Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Argentinien und Chile teilen die längste Landgrenze in Südamerika, die etwa 5.308 Kilometer lang ist"
        },
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die längste Landgrenze mit Brasilien?",
            "Antworten": ["Argentinien", "Bolivien", "Peru", "Venezuela"],
            "RichtigeAntwort": "Bolivien",
            "RichtigeAntwortMöglichkeiten": "Bolivien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Bolivien Landgrenze mit Brasilien ist etwa 3.423 Kilometer lang"
        },
        { //Landgrenzen
            "Kategorie": "Geographie",
            "Frage": "Welche beiden Länder in Europa haben die längste gemeinsame Grenze?",
            "Antworten": ["Deutschland und Polen", "Norwegen und Schweden", "Frankreich und Spanien", "Finnland und Russland"],
            "RichtigeAntwort": "Finnland und Russland",
            "RichtigeAntwortMöglichkeiten": "Finnland und Russland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Finnland und Russland teilen die längste gemeinsame Grenze in Europa"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Wie heißt die größte Wüste der Welt",
            "Antworten": ["Kalahari", "Gobi", "Sahara", "Antarktis"],
            "RichtigeAntwort": "Antarktis",
            "RichtigeAntwortMöglichkeiten": "Antarktis",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Antarktis ist eine Eiswüste mit insgesamt 14 Millionen km²"
        },
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die meisten aktiven Vulkane?",
            "Antworten": ["Asien", "Nordamerika", "Südamerika", "Australien"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Asien, insbesondere der Pazifische Feuerring, hat die meisten aktiven Vulkane"
        },
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die größte Anzahl an Ländern?",
            "Antworten": ["Afrika", "Europa", "Asien", "Südamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Afrika hat die größte Anzahl an Ländern mit insgesamt 54 anerkannten Staaten"
        },
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat den höchsten Punkt der Erde?",
            "Antworten": ["Asien", "Afrika", "Europa", "Südamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Asien ist Heimat des Mount Everest, der höchste Punkt der Erde"
        },
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die längste Küstenlinie?",
            "Antworten": ["Nordamerika", "Asien", "Afrika", "Europa"],
            "RichtigeAntwort": "Nordamerika",
            "RichtigeAntwortMöglichkeiten": "Nordamerika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nordamerika hat die längste Küstenlinie, größtenteils wegen Kanadas ausgedehnter Küste"
        },
        { //Kontinentale Geographie
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent hat die größte Anzahl an Inseln?",
            "Antworten": ["Australien/Ozeanien", "Asien", "Europa", "Afrika"],
            "RichtigeAntwort": "Ozeanien",
            "RichtigeAntwortMöglichkeiten": "Ozeanien Australien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Ozeanien besteht aus Tausenden von Inseln, die im Pazifischen Ozean verteilt sind"
        },
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Sprachen und Ethnien
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die meisten Muttersprachler weltweit?",
            "Antworten": ["Englisch", "Spanisch", "Mandarin", "Hindi"],
            "RichtigeAntwort": "Mandarin",
            "RichtigeAntwortMöglichkeiten": "Mandarin",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Mandarin-Chinesisch hat die meisten Muttersprachler weltweit"
        },
        { //Sprachen und Ethnien
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größte Anzahl an offiziell anerkannten Sprachen?",
            "Antworten": ["Indien", "Papua-Neuguinea", "Südafrika", "Nigeria"],
            "RichtigeAntwort": "Papua-Neuguinea",
            "RichtigeAntwortMöglichkeiten": "Papua-Neuguinea",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Papua-Neuguinea hat die größte Anzahl an offiziell anerkannten Sprachen mit über 800 verschiedenen Sprachen"
        },
        { //Sprachen und Ethnien
            "Kategorie": "Geographie",
            "Frage": "Welche der folgenden Sprachen wird in Südamerika am häufigsten gesprochen?",
            "Antworten": ["Portugiesisch", "Spanisch", "Englisch", "Französisch"],
            "RichtigeAntwort": "Spanisch",
            "RichtigeAntwortMöglichkeiten": "Spanisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Spanisch ist die am häufigsten gesprochene Sprache in Südamerika"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größte Anzahl an Französischsprechern weltweit?",
            "Antworten": ["Frankreich", "Kanada", "Belgien", "Demokratische Republik Kongo"],
            "RichtigeAntwort": "Demokratische Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Demokratische Republik Kongo",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die Demokratische Republik Kongo hat die größte Anzahl an Französischsprechern weltweit"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache ist die am weitesten verbreitete Muttersprache in Europa?",
            "Antworten": ["Englisch", "Spanisch", "Deutsch", "Französisch"],
            "RichtigeAntwort": "Deutsch",
            "RichtigeAntwortMöglichkeiten": "Deutsch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Deutsch ist die am weitesten verbreitete Muttersprache in Europa"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird auf allen Kontinenten als Amtssprache verwendet?",
            "Antworten": ["Englisch", "Spanisch", "Französisch", "Arabisch"],
            "RichtigeAntwort": "Englisch",
            "RichtigeAntwortMöglichkeiten": "Englisch",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Englisch wird auf allen Kontinenten als Amtssprache verwendet"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die meisten offiziellen Länder in Afrika?",
            "Antworten": ["Englisch", "Französisch", "Arabisch", "Portugiesisch"],
            "RichtigeAntwort": "Französisch",
            "RichtigeAntwortMöglichkeiten": "Französisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Französisch ist die Sprache mit den meisten offiziellen Ländern in Afrika"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache ist die zweitmeistgesprochene Sprache in den USA?",
            "Antworten": ["Deutsch", "Französisch", "Chinesisch", "Spanisch"],
            "RichtigeAntwort": "Spanisch",
            "RichtigeAntwortMöglichkeiten": "Spanisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Spanisch ist die zweitmeistgesprochene Sprache in den USA"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die meisten Amtssprachen in der Europäischen Union?",
            "Antworten": ["Englisch", "Französisch", "Deutsch", "Italienisch"],
            "RichtigeAntwort": "Englisch",
            "RichtigeAntwortMöglichkeiten": "Englisch",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Englisch hat die meisten Amtssprachen in der Europäischen Union"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird in Südamerika in den meisten Ländern als Amtssprache gesprochen?",
            "Antworten": ["Portugiesisch", "Spanisch", "Englisch", "Französisch"],
            "RichtigeAntwort": "Spanisch",
            "RichtigeAntwortMöglichkeiten": "Spanisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Spanisch ist die Amtssprache in den meisten Ländern Südamerikas"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird in Australien am zweithäufigsten gesprochen?",
            "Antworten": ["Italienisch", "Griechisch", "Chinesisch", "Arabisch"],
            "RichtigeAntwort": "Chinesisch",
            "RichtigeAntwortMöglichkeiten": "Chinesisch",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Chinesisch ist die zweithäufigste Sprache in Australien"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat weltweit die meisten Lerner als Fremdsprache?",
            "Antworten": ["Spanisch", "Französisch", "Deutsch", "Englisch"],
            "RichtigeAntwort": "Englisch",
            "RichtigeAntwortMöglichkeiten": "Englisch",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Englisch hat weltweit die meisten Lerner als Fremdsprache"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird in Kanada neben Englisch am häufigsten gesprochen?",
            "Antworten": ["Spanisch", "Italienisch", "Deutsch", "Französisch"],
            "RichtigeAntwort": "Französisch",
            "RichtigeAntwortMöglichkeiten": "Französisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Französisch ist neben Englisch die am häufigsten gesprochene Sprache in Kanada"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die meisten Dialekte weltweit?",
            "Antworten": ["Spanisch", "Englisch", "Mandarin", "Arabisch"],
            "RichtigeAntwort": "Mandarin",
            "RichtigeAntwortMöglichkeiten": "Chinesisch Mandarin",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die bekanntesten Dialekte der Chinesischen Sprache sind Mandarin und Kantonesisch"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die meisten Schriftzeichen?",
            "Antworten": ["Koreanisch", "Japanisch", "Chinesisch", "Arabisch"],
            "RichtigeAntwort": "Chinesisch",
            "RichtigeAntwortMöglichkeiten": "Chinesisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Chinesisch hat die meisten Schriftzeichen mit über 50.000 Zeichen"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache gilt als die älteste noch gesprochene Sprache der Welt?",
            "Antworten": ["Griechisch", "Latein", "Hebräisch", "Tamil"],
            "RichtigeAntwort": "Tamil",
            "RichtigeAntwortMöglichkeiten": "Tamil",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Tamil gilt als eine der ältesten noch gesprochenen Sprachen der Welt"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache hat die zweitmeisten Muttersprachler nach Mandarin?",
            "Antworten": ["Englisch", "Spanisch", "Hindi", "Arabisch"],
            "RichtigeAntwort": "Spanisch",
            "RichtigeAntwortMöglichkeiten": "Spanisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Spanisch hat die zweitmeisten Muttersprachler weltweit nach Mandarin"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird in Brasilien gesprochen?",
            "Antworten": ["Spanisch", "Portugiesisch", "Französisch", "Englisch"],
            "RichtigeAntwort": "Portugiesisch",
            "RichtigeAntwortMöglichkeiten": "Portugiesisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Portugiesisch ist die offizielle Sprache in Brasilien"
        },
        { //Sprachen
            "Kategorie": "Geographie",
            "Frage": "Welche Sprache wird in der Region Québec in Kanada hauptsächlich gesprochen?",
            "Antworten": ["Englisch", "Spanisch", "Französisch", "Deutsch"],
            "RichtigeAntwort": "Französisch",
            "RichtigeAntwortMöglichkeiten": "Französisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Französisch ist die Hauptsprache in der Region Québec in Kanada"
        },
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
        { //Religionsverbreitung
            "Kategorie": "Geographie",
            "Frage": "In welchem Land gibt es die größte Anzahl von Muslimen?",
            "Antworten": ["Saudi-Arabien", "Indonesien", "Pakistan", "Indien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Indonesien hat die größte Anzahl von Muslimen weltweit"
        },
        { //Religionsverbreitung
            "Kategorie": "Geographie",
            "Frage": "In welchem Land gibt es die meisten Christen?",
            "Antworten": ["Vereinigte Staaten", "Brasilien", "Mexiko", "Philippinen"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Vereinigten Staaten haben die größte Anzahl von Christen weltweit"
        },
        { //Religionsverbreitung
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Anteil an Buddhisten?",
            "Antworten": ["China", "Japan", "Thailand", "Myanmar"],
            "RichtigeAntwort": "Thailand",
            "RichtigeAntwortMöglichkeiten": "Thailand",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Thailand hat den höchsten Anteil an Buddhisten weltweit"
        },
        { //Religionsverbreitung
            "Kategorie": "Geographie",
            "Frage": "In welchem Land gibt es die größte hinduistische Bevölkerung?",
            "Antworten": ["Nepal", "Bangladesch", "Indien", "Sri Lanka"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Indien hat die größte hinduistische Bevölkerung weltweit"
        },
        { //Traditionen und Feste
            "Kategorie": "Geographie",
            "Frage": "In welchem Land wird das Fest Holi gefeiert?",
            "Antworten": ["Nepal", "Sri Lanka", "Bangladesch", "Indien"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Holi, das Fest der Farben, wird hauptsächlich in Indien gefeiert"
        },
        { //Traditionen und Feste
            "Kategorie": "Geographie",
            "Frage": "In welchem Land wird das berühmte Oktoberfest gefeiert?",
            "Antworten": ["Österreich", "Schweiz", "Deutschland", "Niederlande"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Oktoberfest ist ein berühmtes Volksfest, das in München, Deutschland, gefeiert wird"
        },
        { //Traditionen und Feste
            "Kategorie": "Geographie",
            "Frage": "In welchem Land wird der Sankt-Patrickstag am meisten gefeiert?",
            "Antworten": ["Schottland", "England", "Irland", "Wales"],
            "RichtigeAntwort": "Irland",
            "RichtigeAntwortMöglichkeiten": "Irland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Sankt-Patrickstag ist das wichtigste Fest in Irland"
        },
        { //Traditionen und Feste
            "Kategorie": "Geographie",
            "Frage": "Was wird beim chinesischen Neujahrsfest gefeiert?",
            "Antworten": ["Die Gründung Chinas", "Der Beginn des Frühlings und das neue Mondjahr", "Der Geburtstag von Konfuzius", "Das Ende des Bürgerkriegs"],
            "RichtigeAntwort": "Der Beginn des Frühlings und das neue Mondjahr",
            "RichtigeAntwortMöglichkeiten": "Beginn des Frühlings neue Mondjahr",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das chinesische Neujahrsfest wird auch das Frühlingsfest genannt"
        },
    
    
    
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        { //Anzahl der Kontinente
            "Kategorie": "Geographie",
            "Frage": "Wie viele Kontinente gibt es auf der Erde?",
            "Antworten": ["Fünf", "Sechs", "Sieben", "Acht"],
            "RichtigeAntwort": "Sieben",
            "RichtigeAntwortMöglichkeiten": "Sieben",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Es gibt sieben Kontinente auf der Erde: Afrika, Asien, Europa, Nordamerika, Südamerika, Australien und Antarktis"
        },
        { //Größter Kontinent
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent ist flächenmäßig der größte?",
            "Antworten": ["Afrika", "Asien", "Nordamerika", "Südamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Asien ist mit einer Fläche von etwa 44,58 Millionen Quadratkilometern der größte Kontinent der Welt"
        },
    
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Deutschland?",
            "Antworten": ["Europa", "Asien", "Afrika", "Südamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Deutschland liegt in Mitteleuropa"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Russland geographisch größtenteils?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die russische Haupstadt Moskau befindet sich jedoch in Europa"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Neuseeland?",
            "Antworten": ["Asien", "Europa", "Australien", "Südamerika"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Neuseeland liegt im südwestlichen Pazifik"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Australien?",
            "Antworten": ["Auf keinem Kontinent", "Asien", "Europa", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australien ist sowohl ein Land als auch ein Kontinent"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Tunesien?",
            "Antworten": ["Asien", "Europa", "Afrika", "Südamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Tunesien liegt im Norden Afrikas am Mittelmeer"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Chile?",
            "Antworten": ["Afrika", "Asien", "Europa", "Südamerika"],
            "RichtigeAntwort": "Südamerika",
            "RichtigeAntwortMöglichkeiten": "Südamerika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Chile erstreckt sich entlang der Westküste Südamerikas"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Argentinien?",
            "Antworten": ["Afrika", "Asien", "Nordamerika", "Südamerika"],
            "RichtigeAntwort": "Südamerika",
            "RichtigeAntwortMöglichkeiten": "Südamerika",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Argentinien ist eines der größten Länder in Südamerika"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt die Türkei?",
            "Antworten": ["Afrika", "Asien", "Europa", "Asien"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Ein kleiner Teil der Türkei liegt in Europa"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Saudi-Arabien?",
            "Antworten": ["Afrika", "Asien", "Europa", "Südamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Saudi-Arabien liegt auf der Arabischen Halbinsel"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Ägypten?",
            "Antworten": ["Asien", "Europa", "Afrika", "Südamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Ägypten liegt im Nordosten Afrikas"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Marokko?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Marokko liegt im Nordwesten Afrikas"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Syrien?",
            "Antworten": ["Afrika", "Europa", "Asien", "Nordamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Syrien liegt im Nahen Osten"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Georgien?",
            "Antworten": ["Europa", "Afrika", "Asien", "Südamerika"],
            "RichtigeAntwort": "Asien (Europa)",
            "RichtigeAntwortMöglichkeiten": "Asien Europa",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Georgien liegt im Kaukasus und wird manchmal zu Europa gezählt"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Afghanistan?",
            "Antworten": ["Europa", "Afrika", "Asien", "Südamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Afghanistan liegt in Südasien"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt die Ukraine?",
            "Antworten": ["Afrika", "Europa", "Asien", "Südamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Ukraine ist das größte Land, das vollständig in Europa liegt"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Albanien?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Albanien liegt auf der Balkanhalbinsel in Südosteuropa"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegen die Vereinigten Staaten von Amerika?",
            "Antworten": ["Europa", "Asien", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Nordamerika",
            "RichtigeAntwortMöglichkeiten": "Nordamerika",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die USA erstrecken sich über einen großen Teil Nordamerikas"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Brasilien?",
            "Antworten": ["Afrika", "Asien", "Nordamerika", "Südamerika"],
            "RichtigeAntwort": "Südamerika",
            "RichtigeAntwortMöglichkeiten": "Südamerika",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Brasilien ist das größte Land in Südamerika"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Madagaskar?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Afrika",
            "RichtigeAntwortMöglichkeiten": "Afrika",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Madagaskar ist die viertgrößte Insel der Welt und liegt vor der Küste Afrikas"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Indonesien?",
            "Antworten": ["Asien", "Europa", "Afrika", "Südamerika"],
            "RichtigeAntwort": "Asien",
            "RichtigeAntwortMöglichkeiten": "Asien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Indonesien ist der größte Inselstaat der Welt"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Schweden?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Schweden liegt in Nordeuropa auf der Skandinavischen Halbinsel"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Rumänien?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Rumänien liegt in Südosteuropa"
        },
        { //Kontinente
            "Kategorie": "Geographie",
            "Frage": "Auf welchem Kontinent liegt Estland?",
            "Antworten": ["Asien", "Europa", "Afrika", "Nordamerika"],
            "RichtigeAntwort": "Europa",
            "RichtigeAntwortMöglichkeiten": "Europa",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Estland liegt im Baltikum in Nordeuropa"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Größte und kleinste Länder
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land der Welt?",
            "Antworten": ["Kanada", "China", "USA", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Russland erstreckt sich über Europa und Asien"
        },
        { //Größte und kleinste Länder
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land der Welt?",
            "Antworten": ["Monaco", "Nauru", "San Marino", "Vatikanstadt"],
            "RichtigeAntwort": "Vatikanstadt",
            "RichtigeAntwortMöglichkeiten": "Vatikanstadt",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Vatikanstadt ist ein unabhängiger Stadtstaat in Rom"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land in Afrika?",
            "Antworten": ["Ägypten", "Nigeria", "Algerien", "Südafrika"],
            "RichtigeAntwort": "Algerien",
            "RichtigeAntwortMöglichkeiten": "Algerien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Algerien ist das größte Land in Afrika nach Fläche"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Afrika?",
            "Antworten": ["Gambia", "Seychellen", "Lesotho", "Swasiland"],
            "RichtigeAntwort": "Seychellen",
            "RichtigeAntwortMöglichkeiten": "Seychellen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Seychellen bestehen aus 115 Inseln im Indischen Ozean"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land in Asien?",
            "Antworten": ["China", "Indien", "Kasachstan", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Russland erstreckt sich über Europa und Asien"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Asien?",
            "Antworten": ["Maldives", "Bhutan", "Bahrain", "Singapur"],
            "RichtigeAntwort": "Maldives",
            "RichtigeAntwortMöglichkeiten": "Maldives",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Maldives bestehen aus einem Archipel von 26 Atollen"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das flächenmäßig größte Land in Europa?",
            "Antworten": ["Deutschland", "Frankreich", "Spanien", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Russland ist das größte Land der Welt und erstreckt sich über Europa und Asien"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte vollständig in Europa liegenden Land?",
            "Antworten": ["Deutschland", "Frankreich", "Ukraine", "Italien"],
            "RichtigeAntwort": "Ukraine",
            "RichtigeAntwortMöglichkeiten": "Ukraine",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Ukraine besitzt eine Fläche von 603 km²"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Europa?",
            "Antworten": ["Monaco", "San Marino", "Liechtenstein", "Vatikanstadt"],
            "RichtigeAntwort": "Vatikanstadt",
            "RichtigeAntwortMöglichkeiten": "Vatikanstadt",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Vatikanstadt ist das kleinste unabhängige Land der Welt"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land in Nordamerika?",
            "Antworten": ["USA", "Kanada", "Mexiko", "Grönland"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Kanada ist das zweitgrößte Land der Welt nach Fläche"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Nordamerika?",
            "Antworten": ["St. Kitts und Nevis", "Antigua und Barbuda", "Barbados", "Grenada"],
            "RichtigeAntwort": "St. Kitts und Nevis",
            "RichtigeAntwortMöglichkeiten": "St. Kitts und Nevis",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "St. Kitts und Nevis besteht aus zwei Inseln in der Karibik"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land in Südamerika?",
            "Antworten": ["Argentinien", "Kolumbien", "Peru", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brasilien ist das fünftgrößte Land der Welt"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Südamerika?",
            "Antworten": ["Guyana", "Suriname", "Paraguay", "Uruguay"],
            "RichtigeAntwort": "Suriname",
            "RichtigeAntwortMöglichkeiten": "Suriname",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Suriname liegt an der Nordküste Südamerikas"
        },
        { //Größte Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das größte Land in Australien?",
            "Antworten": ["Neuseeland", "Fidschi", "Papua-Neuguinea", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australien ist sowohl ein Land als auch ein Kontinent"
        },
        { //Kleinste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das kleinste Land in Australien?",
            "Antworten": ["Nauru", "Tuvalu", "Palau", "Samoa"],
            "RichtigeAntwort": "Nauru",
            "RichtigeAntwortMöglichkeiten": "Nauru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nauru ist der kleinste Inselstaat der Welt"
        },
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
        { //Bevölkerungsreichste und bevölkerungsärmste Länder
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land der Welt?",
            "Antworten": ["Indien", "USA", "Indonesien", "China"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Indien hat über 1,4 Einwohner und hat kürzlichn damit China überholt"
        },
        { //Bevölkerungsreichste und bevölkerungsärmste Länder
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land der Welt?",
            "Antworten": ["Nauru", "Tuvalu", "San Marino", "Vatikanstadt"],
            "RichtigeAntwort": "Vatikanstadt",
            "RichtigeAntwortMöglichkeiten": "Vatikanstadt",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Vatikanstadt hat weniger als 1.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Afrika?",
            "Antworten": ["Ägypten", "Nigeria", "Äthiopien", "Südafrika"],
            "RichtigeAntwort": "Nigeria",
            "RichtigeAntwortMöglichkeiten": "Nigeria",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Nigeria hat über 200 Millionen Einwohner"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Afrika?",
            "Antworten": ["Gambia", "Seychellen", "Komoren", "Kap Verde"],
            "RichtigeAntwort": "Seychellen",
            "RichtigeAntwortMöglichkeiten": "Seychellen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Seychellen haben weniger als 100.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Asien?",
            "Antworten": ["China", "Indien", "Indonesien", "Pakistan"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Indien hat über 1,4 Einwohner und hat kürzlichn damit China überholt"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Asien?",
            "Antworten": ["Bhutan", "Brunei", "Maldives", "Timor-Leste"],
            "RichtigeAntwort": "Maldives",
            "RichtigeAntwortMöglichkeiten": "Maldives",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Maldives haben etwa 500.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Europa?",
            "Antworten": ["Deutschland", "Frankreich", "Vereinigtes Königreich", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Russland hat über 140 Millionen Einwohner"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Europa?",
            "Antworten": ["Monaco", "San Marino", "Liechtenstein", "Vatikanstadt"],
            "RichtigeAntwort": "Vatikanstadt",
            "RichtigeAntwortMöglichkeiten": "Vatikanstadt",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Vatikanstadt hat weniger als 1.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Nordamerika?",
            "Antworten": ["Mexiko", "Kanada", "Guatemala", "Vereinigte Staaten"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Vereinigten Staaten haben über 330 Millionen Einwohner"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Nordamerika?",
            "Antworten": ["St. Kitts und Nevis", "Antigua und Barbuda", "Barbados", "Grenada"],
            "RichtigeAntwort": "St. Kitts und Nevis",
            "RichtigeAntwortMöglichkeiten": "St. Kitts und Nevis",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "St. Kitts und Nevis hat etwa 50.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Südamerika?",
            "Antworten": ["Argentinien", "Kolumbien", "Peru", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Brasilien hat über 210 Millionen Einwohner"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Südamerika?",
            "Antworten": ["Guyana", "Suriname", "Paraguay", "Uruguay"],
            "RichtigeAntwort": "Suriname",
            "RichtigeAntwortMöglichkeiten": "Suriname",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Suriname hat etwa 600.000 Einwohner"
        },
        { //Bevölkerungsreichste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsreichste Land in Australien?",
            "Antworten": ["Neuseeland", "Fidschi", "Papua-Neuguinea", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Australien hat über 25 Millionen Einwohner"
        },
        { //Bevölkerungsärmste Länder in Kontinenten
            "Kategorie": "Geographie",
            "Frage": "Was ist das bevölkerungsärmste Land in Australien?",
            "Antworten": ["Nauru", "Tuvalu", "Palau", "Samoa"],
            "RichtigeAntwort": "Nauru",
            "RichtigeAntwortMöglichkeiten": "Nauru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Nauru hat etwa 10.000 Einwohner"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Eiffelturm?",
            "Antworten": ["Berlin", "Madrid", "London", "Paris"],
            "RichtigeAntwort": "Paris",
            "RichtigeAntwortMöglichkeiten": "Paris",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Eiffelturm wurde 1889 zur Weltausstellung errichtet"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Kolosseum?",
            "Antworten": ["Griechenland", "Frankreich", "Spanien", "Italien"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien Rom",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Kolosseum befindet sich in Rom"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt liegt der Parthenon?",
            "Antworten": ["Rom", "Athen", "Istanbul", "Barcelona"],
            "RichtigeAntwort": "Athen",
            "RichtigeAntwortMöglichkeiten": "Athen",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Parthenon ist ein antiker Tempel auf der Akropolis"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Buckingham Palace?",
            "Antworten": ["Frankreich", "Deutschland", "Niederlande", "Vereinigtes Königreich"],
            "RichtigeAntwort": "Vereinigtes Königreich",
            "RichtigeAntwortMöglichkeiten": "Vereinigtes Königreich",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Buckingham Palace ist die offizielle Residenz des britischen Monarchen in London"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt steht die Sagrada Família?",
            "Antworten": ["Mailand", "Lissabon", "Barcelona", "Valencia"],
            "RichtigeAntwort": "Barcelona",
            "RichtigeAntwortMöglichkeiten": "Barcelona",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Sagrada Família ist eine Basilika, die von Antoni Gaudí entworfen wurde"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Schloss Neuschwanstein?",
            "Antworten": ["Österreich", "Schweiz", "Frankreich", "Deutschland"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Schloss Neuschwanstein liegt in Bayern"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt steht der Schiefe Turm von Pisa?",
            "Antworten": ["Rom", "Venedig", "Florenz", "Pisa"],
            "RichtigeAntwort": "Pisa",
            "RichtigeAntwortMöglichkeiten": "Pisa",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Schiefe Turm von Pisa ist ein freistehender Glockenturm"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Kathedrale Notre-Dame?",
            "Antworten": ["Lyon", "Marseille", "Madrid", "Paris"],
            "RichtigeAntwort": "Paris",
            "RichtigeAntwortMöglichkeiten": "Paris",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Kathedrale Notre-Dame liegt auf der Île de la Cité"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Akropolis?",
            "Antworten": ["Türkei", "Zypern", "Griechenland", "Albanien"],
            "RichtigeAntwort": "Griechenland",
            "RichtigeAntwortMöglichkeiten": "Griechenland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Akropolis ist ein antiker Festungsberg in Athen"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Big Ben?",
            "Antworten": ["USA", "Liverpool", "Amsterdam", "London"],
            "RichtigeAntwort": "London",
            "RichtigeAntwortMöglichkeiten": "London",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Big Ben ist der Spitzname der großen Glocke im Uhrturm des Palace of Westminster"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Mont Saint-Michel?",
            "Antworten": ["Spanien", "Belgien", "Schweiz", "Frankreich"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Mont Saint-Michel ist eine felsige Insel in der Normandie"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Prager Burg?",
            "Antworten": ["Polen", "Ungarn", "Österreich", "Tschechien"],
            "RichtigeAntwort": "Prag",
            "RichtigeAntwortMöglichkeiten": "Prag",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Prager Burg ist das größte geschlossene Burgareal der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Burg Hohenzollern?",
            "Antworten": ["Österreich", "Schweiz", "Frankreich", "Deutschland"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Burg Hohenzollern liegt auf dem Hohenzollernberg in Baden-Württemberg"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Petersdom?",
            "Antworten": ["Venedig", "Mailand", "Neapel", "Rom"],
            "RichtigeAntwort": "Rom",
            "RichtigeAntwortMöglichkeiten": "Rom",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Petersdom ist die größte Kirche der Welt und befindet sich im Vatikan"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Alcázar von Segovia?",
            "Antworten": ["Portugal", "Frankreich", "Italien", "Spanien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Alcázar von Segovia ist ein mittelalterlicher Palast in der Stadt Segovia"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Basilika Sacré-Cœur?",
            "Antworten": ["Paris", "Marseille", "Lyon", "Toulouse"],
            "RichtigeAntwort": "Paris",
            "RichtigeAntwortMöglichkeiten": "Paris",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Sacré-Cœur befindet sich auf dem Montmartre in Paris"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich Schloss Schönbrunn?",
            "Antworten": ["Ungarn", "Deutschland", "Tschechien", "Österreich"],
            "RichtigeAntwort": "Österreich",
            "RichtigeAntwortMöglichkeiten": "Österreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Schloss Schönbrunn befindet sich in Wien"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Hagia Sophia?",
            "Antworten": ["Athen", "Rom", "Sofia", "Istanbul"],
            "RichtigeAntwort": "Istanbul",
            "RichtigeAntwortMöglichkeiten": "Istanbul",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Hagia Sophia war ursprünglich eine byzantinische Kirche und später eine Moschee"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die Plitvicer Seen?",
            "Antworten": ["Schweiz", "Österreich", "Slowenien", "Kroatien"],
            "RichtigeAntwort": "Kroatien",
            "RichtigeAntwortMöglichkeiten": "Kroatien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Plitvicer Seen sind ein UNESCO-Weltnaturerbe"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Rote Platz?",
            "Antworten": ["Kiew", "Minsk", "Budapest", "Moskau"],
            "RichtigeAntwort": "Moskau",
            "RichtigeAntwortMöglichkeiten": "Moskau",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Rote Platz ist das Herz von Moskau"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Loch Ness?",
            "Antworten": ["Irland", "Wales", "England", "Schottland"],
            "RichtigeAntwort": "Schottland",
            "RichtigeAntwortMöglichkeiten": "Schottland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Loch Ness ist ein großer, tiefer Süßwassersee in den schottischen Highlands"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das Atomium?",
            "Antworten": ["Genf", "Amsterdam", "Luxemburg", "Brüssel"],
            "RichtigeAntwort": "Brüssel",
            "RichtigeAntwortMöglichkeiten": "Brüssel",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Atomium wurde zur Expo 58 erbaut und stellt ein Eisenkristallmodell dar"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Europapark?",
            "Antworten": ["Frankreich", "Niederlande", "Schweiz", "Deutschland"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Europapark ist ein Freizeitpark in Rust, Baden-Württemberg"
        },
        
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Europapark?",
            "Antworten": ["Rust", "Hamburg", "Düsseldorf", "Bonn"],
            "RichtigeAntwort": "Rust",
            "RichtigeAntwortMöglichkeiten": "Rust",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Europapark ist ein Freizeitpark in Rust, Baden-Württemberg"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das Brandenburger Tor?",
            "Antworten": ["Branden", "München", "Hamburg", "Berlin"],
            "RichtigeAntwort": "Berlin",
            "RichtigeAntwortMöglichkeiten": "Berlin",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Das Brandenburger Tor ist ein berühmtes Wahrzeichen von Berlin"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Piazza San Marco?",
            "Antworten": ["Florenz", "Mailand", "Rom", "Venedig"],
            "RichtigeAntwort": "Venedig",
            "RichtigeAntwortMöglichkeiten": "Venedig",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Piazza San Marco ist der Hauptplatz von Venedig"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Plitvicer Seen Nationalpark?",
            "Antworten": ["Slowenien", "Ungarn", "Serbien", "Kroatien"],
            "RichtigeAntwort": "Kroatien",
            "RichtigeAntwortMöglichkeiten": "Kroatien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Plitvicer Seen Nationalpark ist bekannt für seine kaskadenförmigen Seen und Wasserfälle"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Geirangerfjord?",
            "Antworten": ["Schweden", "Finnland", "Island", "Norwegen"],
            "RichtigeAntwort": "Norwegen",
            "RichtigeAntwortMöglichkeiten": "Norwegen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Geirangerfjord ist einer der bekanntesten Fjorde Norwegens"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Blaue Grotte?",
            "Antworten": ["Italien", "Kroatien", "Spanien", "Malta"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Blaue Grotte befindet sich auf der Insel Capri"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Cliffs of Moher?",
            "Antworten": ["Vereinigtes Königreich", "Norwegen", "Island", "Irland"],
            "RichtigeAntwort": "Irland",
            "RichtigeAntwortMöglichkeiten": "Irland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Cliffs of Moher sind steile Klippen an der irischen Westküste"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Nationalpark Sächsische Schweiz?",
            "Antworten": ["Österreich", "Schweiz", "Luxemburg", "Deutschland"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Nationalpark Sächsische Schweiz liegt an der Grenze zu Tschechien"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Großglockner?",
            "Antworten": ["Deutschland", "Schweiz", "Italien", "Österreich"],
            "RichtigeAntwort": "Österreich",
            "RichtigeAntwortMöglichkeiten": "Österreich",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Großglockner ist der höchste Berg Österreichs"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Ben Nevis?",
            "Antworten": ["Irland", "Norwegen", "Finnland", "Vereinigtes Königreich"],
            "RichtigeAntwort": "Vereinigtes Königreich",
            "RichtigeAntwortMöglichkeiten": "Vereinigtes Königreich",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Ben Nevis ist der höchste Berg Großbritanniens"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Mont Blanc?",
            "Antworten": ["Deutschland", "Schweiz", "Österreich", "Frankreich"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mont Blanc ist der höchste Berg der Alpen"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Lofoten-Archipel?",
            "Antworten": ["Schweden", "Finnland", "Island", "Norwegen"],
            "RichtigeAntwort": "Norwegen",
            "RichtigeAntwortMöglichkeiten": "Norwegen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Lofoten sind eine Inselgruppe vor der Küste Norwegens"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Parthenon?",
            "Antworten": ["Italien", "Türkei", "Spanien", "Griechenland"],
            "RichtigeAntwort": "Griechenland",
            "RichtigeAntwortMöglichkeiten": "Griechenland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Parthenon ist ein antiker Tempel auf der Akropolis in Athen"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Alhambra?",
            "Antworten": ["Portugal", "Frankreich", "Italien", "Spanien"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Alhambra ist eine berühmte Burganlage in Granada"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Tower of London?",
            "Antworten": ["Irland", "Schottland", "Wales", "Vereinigtes Königreich"],
            "RichtigeAntwort": "Vereinigtes Königreich",
            "RichtigeAntwortMöglichkeiten": "Vereinigtes Königreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Tower of London dient heute als Museum und beherbergt die britischen Kronjuwelen"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Hagia Sophia?",
            "Antworten": ["Griechenland", "Bulgarien", "Rumänien", "Türkei"],
            "RichtigeAntwort": "Türkei",
            "RichtigeAntwortMöglichkeiten": "Türkei",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Hagia Sophia in Istanbul war ursprünglich eine Kirche, dann eine Moschee und ist heute ein Museum"
        },
    
        ////////////////////////////////SÜD AMERIKA////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Christusstatue (Cristo Redentor)?",
            "Antworten": ["Argentinien", "Chile", "Peru", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Christusstatue steht auf dem Corcovado-Berg in Rio de Janeiro"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Iguazú-Wasserfälle?",
            "Antworten": ["Kolumbien", "Venezuela", "Uruguay", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Iguazú-Wasserfälle liegen an der Grenze zwischen Argentinien und Brasilien"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich Machu Picchu?",
            "Antworten": ["Bolivien", "Chile", "Ecuador", "Peru"],
            "RichtigeAntwort": "Peru",
            "RichtigeAntwortMöglichkeiten": "Peru",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Machu Picchu ist eine alte Inkastadt auf einem Berg in Peru"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt der Salar de Uyuni?",
            "Antworten": ["Chile", "Argentinien", "Paraguay", "Bolivien"],
            "RichtigeAntwort": "Bolivien",
            "RichtigeAntwortMöglichkeiten": "Bolivien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Salar de Uyuni ist der größte Salzsee der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Amazonas-Regenwald größtenteils?",
            "Antworten": ["Venezuela", "Kolumbien", "Argentinien", "Brasilien"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas-Regenwald erstreckt sich über mehrere Länder, aber der größte Teil liegt in Brasilien"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das historische Zentrum von Quito?",
            "Antworten": ["Kolumbien", "Peru", "Bolivien", "Ecuador"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das historische Zentrum von Quito ist ein UNESCO-Weltkulturerbe"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Nationalpark Torres del Paine?",
            "Antworten": ["Peru", "Argentinien", "Bolivien", "Chile"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Nationalpark Torres del Paine liegt in Patagonien, Chile"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Altstadt von Cartagena?",
            "Antworten": ["Venezuela", "Peru", "Ecuador", "Kolumbien"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Altstadt von Cartagena ist für ihre koloniale Architektur bekannt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Angel Falls (Salto Ángel)?",
            "Antworten": ["Kolumbien", "Brasilien", "Peru", "Venezuela"],
            "RichtigeAntwort": "Venezuela",
            "RichtigeAntwortMöglichkeiten": "Venezuela",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Angel Falls ist der höchste Wasserfall der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Cotopaxi-Vulkan?",
            "Antworten": ["Chile", "Peru", "Kolumbien", "Ecuador"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Cotopaxi ist einer der höchsten aktiven Vulkane der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Titicaca-See?",
            "Antworten": ["Argentinien", "Chile", "Kolumbien", "Bolivien"],
            "RichtigeAntwort": "Bolivien",
            "RichtigeAntwortMöglichkeiten": "Bolivien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Titicaca-See liegt an der Grenze zwischen Bolivien und Peru"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Perito-Moreno-Gletscher?",
            "Antworten": ["Chile", "Brasilien", "Uruguay", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Perito-Moreno-Gletscher liegt im Los Glaciares Nationalpark"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Stadt Cusco?",
            "Antworten": ["Kolumbien", "Bolivien", "Chile", "Peru"],
            "RichtigeAntwort": "Peru",
            "RichtigeAntwortMöglichkeiten": "Peru",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Cusco war die historische Hauptstadt des Inkareiches"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Teatro Colón?",
            "Antworten": ["Chile", "Uruguay", "Brasilien", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Teatro Colón ist ein berühmtes Opernhaus in Buenos Aires"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Zitadelle von Cartagena?",
            "Antworten": ["Venezuela", "Peru", "Kolumbien", "Ecuador"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Zitadelle von Cartagena ist eine historische Festung an der Karibikküste"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Goldmuseum (Museo del Oro)?",
            "Antworten": ["Ecuador", "Peru", "Brasilien", "Kolumbien"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Goldmuseum in Bogotá beherbergt die größte Sammlung präkolumbianischer Goldartefakte"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Ruinenstadt Tiwanaku?",
            "Antworten": ["Chile", "Argentinien", "Ecuador", "Bolivien"],
            "RichtigeAntwort": "Bolivien",
            "RichtigeAntwortMöglichkeiten": "Bolivien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tiwanaku ist eine präkolumbianische archäologische Stätte"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Alhambra?",
            "Antworten": ["Chile", "Spanien", "Mexiko", "Peru"],
            "RichtigeAntwort": "Spanien",
            "RichtigeAntwortMöglichkeiten": "Spanien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Alhambra ist eine berühmte Burganlage auf einem Hügel in Granada, Spanien"
        },
    
        ///////////////////////////////////NORD AMERIKA////////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Freiheitsstatue (Statue of Liberty)?",
            "Antworten": ["Kanada", "Mexiko", "Kuba", "Vereinigte Staaten"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Freiheitsstatue steht auf Liberty Island in New York"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befinden sich die Niagarafälle?",
            "Antworten": ["Toronto", "New York City", "Buffalo", "Niagara Falls"],
            "RichtigeAntwort": "Niagara Falls",
            "RichtigeAntwortMöglichkeiten": "Niagara Falls",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Niagarafälle liegen an der Grenze zwischen den USA und Kanada"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das Weiße Haus?",
            "Antworten": ["New York City", "Chicago", "Los Angeles", "Washington D.C."],
            "RichtigeAntwort": "Washington D.C.",
            "RichtigeAntwortMöglichkeiten": "Washington D.C. Washington DC",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Weiße Haus ist der Amtssitz des Präsidenten der Vereinigten Staaten"
        },
        { //Central Park Ort
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Central Park?",
            "Antworten": ["Los Angeles", "Chicago", "New York City", "San Francisco"],
            "RichtigeAntwort": "New York City",
            "RichtigeAntwortMöglichkeiten": "New York City",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Der Central Park befindet sich im Herzen von Manhattan in New York City"
        },
        { //Central Park Entstehungsjahr
            "Kategorie": "Geographie",
            "Frage": "In welchem Jahr wurde der Central Park in New York City eröffnet?",
            "Antworten": ["2012", "1858", "1965", "2001"],
            "RichtigeAntwort": "1858",
            "RichtigeAntwortMöglichkeiten": "1858",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Central Park wurde 1858 eröffnet und ist damit einer der ältesten städtischen Parks in den USA"
        },
        { //Central Park Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "Welche berühmte Sehenswürdigkeit befindet sich im Central Park?",
            "Antworten": ["Strawberry Fields", "Golden Gate Bridge", "Lincoln Memorial", "Statue of Liberty"],
            "RichtigeAntwort": "Strawberry Fields",
            "RichtigeAntwortMöglichkeiten": "Strawberry Fields",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Strawberry Fields ist ein Denkmal im Central Park, das John Lennon gewidmet ist"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der CN Tower?",
            "Antworten": ["Mexiko", "Vereinigte Staaten", "Kuba", "Kanada"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der CN Tower steht in Toronto, Kanada"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich der Times Square?",
            "Antworten": ["Los Angeles", "Miami", "San Francisco", "New York City"],
            "RichtigeAntwort": "New York City",
            "RichtigeAntwortMöglichkeiten": "New York City NYC",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Times Square liegt im Stadtteil Manhattan"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Chichén Itzá?",
            "Antworten": ["Guatemala", "Honduras", "Belize", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Chichén Itzá ist eine große vor-kolumbianische archäologische Stätte der Maya"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das Empire State Building?",
            "Antworten": ["Boston", "Philadelphia", "Chicago", "New York City"],
            "RichtigeAntwort": "New York City",
            "RichtigeAntwortMöglichkeiten": "New York City NYC",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Empire State Building war von 1931 bis 1971 das höchste Gebäude der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Grand Canyon?",
            "Antworten": ["Kanada", "Mexiko", "Belize", "Vereinigte Staaten"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Grand Canyon befindet sich im Bundesstaat Arizona"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Pyramiden von Teotihuacán?",
            "Antworten": ["Guatemala", "Honduras", "Belize", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Pyramiden von Teotihuacán sind eine der größten präkolumbianischen Städte in Nordamerika"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Yellowstone-Nationalpark?",
            "Antworten": ["Kanada", "Mexiko", "Guatemala", "Vereinigte Staaten"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Yellowstone-Nationalpark wurde 1872 gegründet und ist der älteste Nationalpark der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Banff-Nationalpark?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Guatemala", "Kanada"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Banff-Nationalpark liegt in den kanadischen Rocky Mountains in Alberta"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Bryce Canyon?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Guatemala", "Kanada"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Bryce Canyon ist bekannt für seine einzigartigen Felsformationen, genannt Hoodoos"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Bay of Fundy?",
            "Antworten": ["Vereinigte Staaten", "Mexiko", "Guatemala", "Kanada"],
            "RichtigeAntwort": "Kanada",
            "RichtigeAntwortMöglichkeiten": "Kanada",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Bay of Fundy hat den höchsten Tidenhub der Welt"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das Capitol?",
            "Antworten": ["New York City", "Philadelphia", "Chicago", "Washington D.C."],
            "RichtigeAntwort": "Washington D.C.",
            "RichtigeAntwortMöglichkeiten": "Washington D.C. Washington DC",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Capitol ist der Sitz des Kongresses der Vereinigten Staaten"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Independence Hall?",
            "Antworten": ["New York City", "Boston", "Chicago", "Philadelphia"],
            "RichtigeAntwort": "Philadelphia",
            "RichtigeAntwortMöglichkeiten": "Philadelphia",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "In der Independence Hall wurde die Unabhängigkeitserklärung der Vereinigten Staaten unterzeichnet"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Pyramide des Kukulcán?",
            "Antworten": ["Belize", "Honduras", "El Salvador", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Pyramide des Kukulcán ist das Hauptgebäude der Maya-Ruinenstadt Chichén Itzá"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Castillo de San Marcos?",
            "Antworten": ["Kanada", "Vereinigte Staaten", "Kuba", "Mexiko"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Castillo de San Marcos ist eine historische Festung in St. Augustine, Florida"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich die Alamo-Mission?",
            "Antworten": ["Austin", "Houston", "Dallas", "San Antonio"],
            "RichtigeAntwort": "San Antonio",
            "RichtigeAntwortMöglichkeiten": "San Antonio",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Alamo-Mission ist ein historisches Wahrzeichen in Texas"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Chapultepec-Park?",
            "Antworten": ["Kanada", "Vereinigte Staaten", "Kuba", "Mexiko"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Chapultepec-Park ist einer der größten Stadtparks der Welt und befindet sich in Mexiko-Stadt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Yosemite-Nationalpark?",
            "Antworten": ["Vereinigte Staaten", "Kanada", "Mexiko", "Belize"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Yosemite-Nationalpark ist bekannt für seine Wasserfälle und Granitfelsen"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Monument Valley?",
            "Antworten": ["Vereinigte Staaten", "Kanada", "Mexiko", "Belize"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Monument Valley ist bekannt für seine markanten Sandsteinformationen"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Golden Gate Bridge?",
            "Antworten": ["Vereinigte Staaten", "Kanada", "Mexiko", "Belize"],
            "RichtigeAntwort": "Vereinigte Staaten",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Staaten USA United States",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Golden Gate Bridge überspannt die Golden Gate Meerenge in San Francisco"
        },
    
        ////////////////////////////////////////AFRIKA///////////////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Pyramiden von Gizeh?",
            "Antworten": ["Sudan", "Mexiko", "Libyen", "Ägypten"],
            "RichtigeAntwort": "Ägypten",
            "RichtigeAntwortMöglichkeiten": "Ägypten",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Pyramiden von Gizeh sind eines der sieben Weltwunder der Antike"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Tal der Könige?",
            "Antworten": ["Marokko", "Tunesien", "Jordanien", "Ägypten"],
            "RichtigeAntwort": "Ägypten",
            "RichtigeAntwortMöglichkeiten": "Ägypten",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Tal der Könige liegt in der Nähe von Luxor"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Kilimandscharo?",
            "Antworten": ["Kenia", "Uganda", "Ruanda", "Tansania"],
            "RichtigeAntwort": "Tansania",
            "RichtigeAntwortMöglichkeiten": "Tansania",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Kilimandscharo ist der höchste Berg Afrikas"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Victoriafälle?",
            "Antworten": ["Botswana", "Mosambik", "Sambia", "Simbabwe"],
            "RichtigeAntwort": "Simbabwe",
            "RichtigeAntwortMöglichkeiten": "Simbabwe",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Victoriafälle liegen an der Grenze zwischen Sambia und Simbabwe"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Okavango-Delta?",
            "Antworten": ["Namibia", "Südafrika", "Simbabwe", "Botswana"],
            "RichtigeAntwort": "Botswana",
            "RichtigeAntwortMöglichkeiten": "Botswana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Okavango-Delta ist eines der größten Binnendeltas der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Medina von Marrakesch?",
            "Antworten": ["Ägypten", "Tunesien", "Algerien", "Marokko"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Medina von Marrakesch ist ein UNESCO-Weltkulturerbe"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Tafelberg?",
            "Antworten": ["Namibia", "Botswana", "Simbabwe", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Tafelberg ist ein markantes Wahrzeichen Kapstadts"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Ngorongoro-Krater?",
            "Antworten": ["Kenia", "Uganda", "Ruanda", "Tansania"],
            "RichtigeAntwort": "Tansania",
            "RichtigeAntwortMöglichkeiten": "Tansania",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Ngorongoro-Krater ist der größte intakte Kraterkessel der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Simien Mountains National Park?",
            "Antworten": ["Sudan", "Äthiopien", "Kenia", "Uganda"],
            "RichtigeAntwort": "Äthiopien",
            "RichtigeAntwortMöglichkeiten": "Äthiopien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Simien Mountains National Park ist ein UNESCO-Weltnaturerbe"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Lake Nakuru?",
            "Antworten": ["Tansania", "Uganda", "Ruanda", "Kenia"],
            "RichtigeAntwort": "Kenia",
            "RichtigeAntwortMöglichkeiten": "Kenia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Lake Nakuru ist bekannt für seine Flamingo-Population"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Große Moschee von Djenné?",
            "Antworten": ["Mali", "Niger", "Tschad", "Sudan"],
            "RichtigeAntwort": "Mali",
            "RichtigeAntwortMöglichkeiten": "Mali",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Große Moschee von Djenné ist das größte Lehmgebäude der Welt"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Festung von Karthago?",
            "Antworten": ["Libyen", "Algerien", "Tunesien", "Marokko"],
            "RichtigeAntwort": "Tunesien",
            "RichtigeAntwortMöglichkeiten": "Tunesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die antike Stadt Karthago liegt in der Nähe von Tunis"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Lalibela?",
            "Antworten": ["Äthiopien", "Sudan", "Eritrea", "Dschibuti"],
            "RichtigeAntwort": "Äthiopien",
            "RichtigeAntwortMöglichkeiten": "Äthiopien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Lalibela ist bekannt für seine Felsenkirchen"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Festung von Elmina?",
            "Antworten": ["Ghana", "Elfenbeinküste", "Togo", "Senegal"],
            "RichtigeAntwort": "Ghana",
            "RichtigeAntwortMöglichkeiten": "Ghana",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Festung von Elmina war das erste europäische Gebäude in Subsahara-Afrika"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Robben Island?",
            "Antworten": ["USA", "Namibia", "Südafrika", "Nigeria"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Robben Island ist bekannt als das Gefängnis, in dem Nelson Mandela inhaftiert war"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Namib-Naukluft-Nationalpark?",
            "Antworten": ["Botswana", "Südafrika", "Sambia", "Namibia"],
            "RichtigeAntwort": "Namibia",
            "RichtigeAntwortMöglichkeiten": "Namibia",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Namib-Naukluft-Nationalpark umfasst Teile der ältesten Wüste der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Virunga-Nationalpark?",
            "Antworten": ["Uganda", "Ruanda", "Burundi", "Demokratische Republik Kongo"],
            "RichtigeAntwort": "Demokratische Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Demokratische Republik Kongo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Virunga-Nationalpark ist bekannt für seine Berggorillas"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Krüger-Nationalpark?",
            "Antworten": ["Namibia", "Botswana", "Swasiland", "Südafrika"],
            "RichtigeAntwort": "Südafrika",
            "RichtigeAntwortMöglichkeiten": "Südafrika",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Krüger-Nationalpark ist eines der größten Wildschutzgebiete Afrikas"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Tsingy de Bemaraha Nationalpark?",
            "Antworten": ["Mosambik", "Tansania", "Madagaskar", "Komoren"],
            "RichtigeAntwort": "Madagaskar",
            "RichtigeAntwortMöglichkeiten": "Madagaskar",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Tsingy de Bemaraha Nationalpark ist bekannt für seine schroffen Kalksteinformationen"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Kasbah von Ait Benhaddou?",
            "Antworten": ["Algerien", "Marokko", "Tunesien", "Libyen"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ait Benhaddou ist eine befestigte Stadt an der alten Karawanenroute zwischen der Sahara und Marrakesch"
        },
    
        ////////////////////////////////////////ASIEN///////////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Chinesische Mauer?",
            "Antworten": ["Japan", "Südkorea", "Mongolei", "China"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Chinesische Mauer ist das längste Bauwerk der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Taj Mahal?",
            "Antworten": ["China", "Nepal", "Thailand", "Indien"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Taj Mahal ist ein Mausoleum in Agra"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Angkor Wat?",
            "Antworten": ["Laos", "Thailand", "Vietnam", "Kambodscha"],
            "RichtigeAntwort": "Kambodscha",
            "RichtigeAntwortMöglichkeiten": "Kambodscha",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Angkor Wat ist die größte religiöse Tempelanlage der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Burj Khalifa?",
            "Antworten": ["Saudi-Arabien", "Katar", "Bahrein", "Vereinigte Arabische Emirate"],
            "RichtigeAntwort": "Vereinigte Arabische Emirate",
            "RichtigeAntwortMöglichkeiten": "Vereinigte Arabische Emirate UAE",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Burj Khalifa ist das höchste Gebäude der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Mount Everest?",
            "Antworten": ["Bhutan", "Indien", "China", "Nepal"],
            "RichtigeAntwort": "Nepal",
            "RichtigeAntwortMöglichkeiten": "Nepal",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mount Everest ist der höchste Berg der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Fuji?",
            "Antworten": ["China", "Südkorea", "Taiwan", "Japan"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Fuji ist der höchste Berg Japans"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Petra?",
            "Antworten": ["Libanon", "Syrien", "Israel", "Jordanien"],
            "RichtigeAntwort": "Jordanien",
            "RichtigeAntwortMöglichkeiten": "Jordanien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Petra ist eine historische Felsenstadt in Jordanien"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Tote Meer?",
            "Antworten": ["Libanon", "Ägypten", "Jordanien", "Israel"],
            "RichtigeAntwort": "Jordanien",
            "RichtigeAntwortMöglichkeiten": "Jordanien Israel",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Tote Meer ist bekannt für seinen hohen Salzgehalt und therapeutische Wirkung"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Halong-Bucht?",
            "Antworten": ["Thailand", "Philippinen", "Malaysia", "Vietnam"],
            "RichtigeAntwort": "Vietnam",
            "RichtigeAntwortMöglichkeiten": "Vietnam",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Halong-Bucht ist berühmt für ihre Kalksteinfelsen und Inseln"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Komodo-Nationalpark?",
            "Antworten": ["Malaysia", "Papua-Neuguinea", "Japan", "Indonesien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Komodo-Nationalpark ist bekannt für seine Komodowarane"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Chocolate Hills?",
            "Antworten": ["Indonesien", "Thailand", "Vietnam", "Philippinen"],
            "RichtigeAntwort": "Philippinen",
            "RichtigeAntwortMöglichkeiten": "Philippinen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Chocolate Hills sind eine geologische Formation auf der Insel Bohol"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Verbotene Stadt?",
            "Antworten": ["China", "Japan", "Südkorea", "Vietnam"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Verbotene Stadt ist ein Palastkomplex in Peking"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Kyotoer Kaiserpalast?",
            "Antworten": ["China", "Südkorea", "Taiwan", "Japan"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Kyotoer Kaiserpalast war der Sitz des japanischen Kaisers"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Taj Mahal?",
            "Antworten": ["Indien", "Pakistan", "Bangladesch", "Nepal"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Taj Mahal ist ein Mausoleum in Agra, Indien"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Blaue Moschee?",
            "Antworten": ["Ägypten", "Libanon", "Israel", "Türkei"],
            "RichtigeAntwort": "Türkei",
            "RichtigeAntwortMöglichkeiten": "Türkei",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Blaue Moschee befindet sich in Istanbul"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Potala-Palast?",
            "Antworten": ["Nepal", "Bhutan", "Mongolei", "China"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Potala-Palast war der Winterpalast des Dalai Lama in Tibet"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Borobudur-Tempel?",
            "Antworten": ["Thailand", "Vietnam", "Myanmar", "Indonesien"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Borobudur-Tempel ist das größte buddhistische Tempelkomplex der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Jeju-Vulkaninsel?",
            "Antworten": ["Japan", "China", "Südkorea", "Vietnam"],
            "RichtigeAntwort": "Südkorea",
            "RichtigeAntwortMöglichkeiten": "Südkorea",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Insel Jeju ist bekannt für ihren erloschenen Vulkan Hallasan"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Lake Baikal?",
            "Antworten": ["China", "Mongolei", "Kasachstan", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Baikalsee ist der tiefste und älteste Süßwassersee der Welt"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Plitvice Nationalpark?",
            "Antworten": ["Slowenien", "Bosnien und Herzegowina", "Serbien", "Kroatien"],
            "RichtigeAntwort": "Kroatien",
            "RichtigeAntwortMöglichkeiten": "Kroatien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Plitvice Nationalpark ist bekannt für seine kaskadenförmigen Seen und Wasserfälle"
        },
    
        /////////////////////////////////AUSTRALIEN///////////////////////////////////////
    
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Sydney Opera House?",
            "Antworten": ["Neuseeland", "Fidschi", "Papua-Neuguinea", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Sydney Opera House ist eines der berühmtesten Gebäude der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt befindet sich das berühmte Opera House in Australien?",
            "Antworten": ["Sydney", "Wellington", "Melbourne", "Canberra"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Sydney Opera House ist eines der berühmtesten Gebäude der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Harbour Bridge?",
            "Antworten": ["Mexiko", "USA", "Großbritanien", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Harbour Bridge überspannt den Hafen von Sydney"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Uluru (Ayers Rock)?",
            "Antworten": ["Neuseeland", "Kanada", "Indonesien", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Uluru ist ein heiliger Berg der Aborigines im Northern Territory"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Great Barrier Reef?",
            "Antworten": ["Madagaskar", "Fidschi", "Neuseeland", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Great Barrier Reef ist das größte Korallenriff der Welt"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Milford Sound?",
            "Antworten": ["Australien", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Milford Sound ist ein Fjord auf der Südinsel Neuseelands"
        },
        { //Sehenswürdigkeiten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Blaue Lagune?",
            "Antworten": ["Australien", "Neuseeland", "Indonesien", "Fidschi"],
            "RichtigeAntwort": "Fidschi",
            "RichtigeAntwortMöglichkeiten": "Fidschi",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Blaue Lagune ist ein beliebtes Tauch- und Schnorchelgebiet"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Franz-Josef-Gletscher?",
            "Antworten": ["Australien", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Franz-Josef-Gletscher liegt auf der Südinsel Neuseelands"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Mount Cook?",
            "Antworten": ["Australien", "Fidschi", "Malaysia", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Mount Cook ist der höchste Berg Neuseelands"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Kakadu-Nationalpark?",
            "Antworten": ["Neuseeland", "Fidschi", "Thailand", "Australien"],
            "RichtigeAntwort": "Australien",
            "RichtigeAntwortMöglichkeiten": "Australien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Kakadu-Nationalpark ist bekannt für seine reiche Tierwelt und Aborigine-Kunst"
        },
        { //Naturwunder
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Tongariro-Nationalpark?",
            "Antworten": ["Australien", "Fidschi", "Kambodscha", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Tongariro-Nationalpark ist Neuseelands ältester Nationalpark und ein UNESCO-Weltnaturerbe"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welcher Stadt Australiens befindet sich das Parliament House?",
            "Antworten": ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            "RichtigeAntwort": "Canberra",
            "RichtigeAntwortMöglichkeiten": "Canberra",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Parliament House ist der Sitz des australischen Parlaments in Canberra"
        },
        { //Historische Bauwerke
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Te Papa Tongarewa Museum?",
            "Antworten": ["Philippinen", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Te Papa Tongarewa Museum ist das Nationalmuseum Neuseelands in Wellington"
        },
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der längste in Südamerika?",
            "Antworten": ["Paraná", "Orinoco", "São Francisco", "Amazonas"],
            "RichtigeAntwort": "Amazonas",
            "RichtigeAntwortMöglichkeiten": "Amazonas",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas ist etwa 7.000 Kilometer lang"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie lange ist der Amazonas (in km)?",
            "Antworten": ["6.400", "1.550", "11.000", "980"],
            "RichtigeAntwort": "6.400km",
            "RichtigeAntwortMöglichkeiten": "6.400km 6400 6.400 sechtausendvierhundert 6000 6tausend 7000 6500 ",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Damit gilt der Amazonas als der 2. längste Fluss der Welt"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie ist der tiefste Punkt des Amazonas (in m)?",
            "Antworten": ["100", "1500", "900", "450"],
            "RichtigeAntwort": "100",
            "RichtigeAntwortMöglichkeiten": "100m 100 hundertmeter hundert",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Amazonas ist der wassereichste Fluss der Welt"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Durch wie viele Länder fließt der Amazonas?",
            "Antworten": ["9", "15", "3", "5"],
            "RichtigeAntwort": "9",
            "RichtigeAntwortMöglichkeiten": "9 neun 9Länder",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Amazonas ist der wassereichste Fluss der Welt"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie breit ist der Amazonas ungefähr (in km)?",
            "Antworten": ["2", "10", "12", "50"],
            "RichtigeAntwort": "50",
            "RichtigeAntwortMöglichkeiten": "50 50km fünfzig fünfzigkilometer",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Breite des Amazonas ist sehr von der Jahreszeit abhängig"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie viel Prozent des weltweiten Süßwassers liefert der Amazonas (in %)?",
            "Antworten": ["<1", "5", "20", "80"],
            "RichtigeAntwort": "20",
            "RichtigeAntwortMöglichkeiten": "20 20% zwanzig zwanzigprozent",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Amazonas führt mehr Wasser als jeder andere Fluss auf der Erde"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie viele Nebenflüsse hat der Amazonas?",
            "Antworten": ["25", "1100", "120", "650"],
            "RichtigeAntwort": "1100",
            "RichtigeAntwortMöglichkeiten": "1100 1000 tausend eintausend tausendeinhundert",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Davon haben 17 eine Länge von mehr als 1.500 Kilometern"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie viele Fischarten gibt es im Amazonas?",
            "Antworten": ["3000", "1100", "500", "200"],
            "RichtigeAntwort": "3000",
            "RichtigeAntwortMöglichkeiten": "3000 dreitausend 3.000",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Es wird angenommen, dass noch viele Fischarten unentdeckt sind"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "In welchem Meer mündet der Amazonas?",
            "Antworten": ["Pazifik", "Schwarze Meer", "Atlantik", "Zonas Meer"],
            "RichtigeAntwort": "Atlantik",
            "RichtigeAntwortMöglichkeiten": "Atlantik Atlantischer",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Es wird angenommen, dass noch viele Fischarten unentdeckt sind"
        },
        { //Amazonas
            "Kategorie": "Geographie",
            "Frage": "Wie weit ins Meer reicht das Süßwasser des Amazonas (in km)?",
            "Antworten": ["150", "8", "1", "45"],
            "RichtigeAntwort": "150",
            "RichtigeAntwortMöglichkeiten": "150km 150 140km 140 130km 130 120km 120",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das liegt daran, dass das Mündungsgebiet des Flusses sehr breit ist"
        },
        { //Längster Fluss der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist der längste Fluss der Welt?",
            "Antworten": ["Amazonas", "Nil", "Jangtsekiang", "Mississippi"],
            "RichtigeAntwort": "Nil",
            "RichtigeAntwortMöglichkeiten": "Nil",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Nil ist mit etwa 6.650 Kilometern der längste Fluss der Welt"
        },
        { //Wasserreichster Fluss der Welt
            "Kategorie": "Geographie",
            "Frage": "Welches ist der wasserreichste Fluss der Welt?",
            "Antworten": ["Nil", "Mississippi", "Amazonas", "Jangtsekiang"],
            "RichtigeAntwort": "Amazonas",
            "RichtigeAntwortMöglichkeiten": "Amazonas",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Amazonas ist der wasserreichste Fluss der Welt und führt mehr Wasser als die nächsten sieben größten Flüsse zusammen"
        },
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "In welchem Land entspringt der Orinoco?",
            "Antworten": ["Kolumbien", "Brasilien", "Peru", "Venezuela"],
            "RichtigeAntwort": "Venezuela",
            "RichtigeAntwortMöglichkeiten": "Venezuela",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Orinoco ist einer der längsten Flüsse Südamerikas und entspringt im venezolanischen Hochland"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "An welche beiden Länder grenzt der Titicaca-See?",
            "Antworten": ["Argentinien und Chile", "Peru und Bolivien", "Brasilien und Paraguay", "Kolumbien und Venezuela"],
            "RichtigeAntwort": "Peru und Bolivien",
            "RichtigeAntwortMöglichkeiten": "Peru Bolivien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Titicaca-See ist der höchstgelegene schiffbare See der Welt"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte See Venezuelas?",
            "Antworten": ["Maracaibo-See", "Valencia-See", "Guri-Stausee", "Laguna de Tacarigua"],
            "RichtigeAntwort": "Maracaibo-See",
            "RichtigeAntwortMöglichkeiten": "Maracaibo-See",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Maracaibo-See ist der größte natürliche See in Südamerika"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist ein bedeutender Nebenfluss des Amazonas?",
            "Antworten": ["Magdalena", "Beni", "Orinoco", "Madeira"],
            "RichtigeAntwort": "Madeira",
            "RichtigeAntwortMöglichkeiten": "Madeira",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Madeira ist der längste Nebenfluss des Amazonas"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt der Fluss Magdalena?",
            "Antworten": ["Brasilien", "Peru", "Argentinien", "Kolumbien"],
            "RichtigeAntwort": "Kolumbien",
            "RichtigeAntwortMöglichkeiten": "Kolumbien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Magdalena-Fluss ist der wichtigste Fluss Kolumbiens"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das längste Gebirge Südamerikas?",
            "Antworten": ["Rockies", "Alpen", "Anden", "Apennin"],
            "RichtigeAntwort": "Anden",
            "RichtigeAntwortMöglichkeiten": "Anden",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Anden erstrecken sich über 7.000 Kilometer entlang der Westküste Südamerikas"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die höchsten Gipfel der Anden?",
            "Antworten": ["Chile", "Ecuador", "Kolumbien", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der höchste Gipfel der Anden ist der Aconcagua in Argentinien"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist für seine weitläufigen Pampas bekannt?",
            "Antworten": ["Kolumbien", "Venezuela", "Peru", "Argentinien"],
            "RichtigeAntwort": "Argentinien",
            "RichtigeAntwortMöglichkeiten": "Argentinien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Pampas sind ausgedehnte Graslandschaften in Argentinien"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Atacama-Wüste?",
            "Antworten": ["Peru", "Bolivien", "Ecuador", "Chile"],
            "RichtigeAntwort": "Chile",
            "RichtigeAntwortMöglichkeiten": "Chile",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Atacama-Wüste gilt als die trockenste Wüste der Welt"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Cotopaxi?",
            "Antworten": ["Peru", "Kolumbien", "Bolivien", "Ecuador"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Cotopaxi ist einer der höchsten aktiven Vulkane der Welt"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die Galápagos-Inseln, die für ihre Vulkane bekannt sind?",
            "Antworten": ["Peru", "Kolumbien", "Ecuador", "Bolivien"],
            "RichtigeAntwort": "Ecuador",
            "RichtigeAntwortMöglichkeiten": "Ecuador",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Galápagos-Inseln sind ein vulkanischer Archipel im Pazifik"
        },
    
        //////////////////////////////NORD AMERIKA/////////////////////////////
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der längste in Nordamerika?",
            "Antworten": ["Mississippi", "Rio Grande", "Yukon", "Missouri"],
            "RichtigeAntwort": "Missouri",
            "RichtigeAntwortMöglichkeiten": "Missouri",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Missouri-Fluss ist etwa 4.370 Kilometer lang und der längste Fluss in Nordamerika"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Durch welche zwei Länder fließt der Yukon-Fluss?",
            "Antworten": ["USA und Kanada", "Mexiko und USA", "Kanada und Grönland", "USA und Mexiko"],
            "RichtigeAntwort": "USA und Kanada",
            "RichtigeAntwortMöglichkeiten": "USA und Kanada",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Yukon-Fluss fließt durch Alaska und das kanadische Yukon-Territorium"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "In welchem Land mündet der Rio Grande ins Meer?",
            "Antworten": ["Kanada", "USA", "Mexiko", "Guatemala"],
            "RichtigeAntwort": "Mexiko",
            "RichtigeAntwortMöglichkeiten": "Mexiko",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Rio Grande bildet die Grenze zwischen den USA und Mexiko und mündet in den Golf von Mexiko"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "An welche beiden Länder grenzt der Große Bärensee?",
            "Antworten": ["Kanada und USA", "USA und Mexiko", "Kanada und Grönland", "Kanada und Alaska"],
            "RichtigeAntwort": "Kanada und Alaska",
            "RichtigeAntwortMöglichkeiten": "Kanada Alaska ",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Große Bärensee ist der viertgrößte See in Nordamerika und liegt vollständig in Kanada"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte Süßwassersee der Welt nach Fläche?",
            "Antworten": ["Lake Huron", "Lake Michigan", "Lake Superior", "Lake Erie"],
            "RichtigeAntwort": "Lake Superior",
            "RichtigeAntwortMöglichkeiten": "Lake Superior",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Lake Superior ist der flächenmäßig größte Süßwassersee der Welt"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist ein bedeutender Nebenfluss des Mississippi?",
            "Antworten": ["Missouri", "Yukon", "Rio Grande", "Kolorado"],
            "RichtigeAntwort": "Missouri",
            "RichtigeAntwortMöglichkeiten": "Missouri",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Missouri-Fluss ist der längste Nebenfluss des Mississippi"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss fließt durch den Grand Canyon?",
            "Antworten": ["Missouri", "Colorado", "Rio Grande", "Snake River"],
            "RichtigeAntwort": "Colorado",
            "RichtigeAntwortMöglichkeiten": "Colorado",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Colorado River hat den Grand Canyon über Millionen von Jahren geformt"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das längste Gebirge Nordamerikas?",
            "Antworten": ["Appalachen", "Sierra Nevada", "Rocky Mountains", "Kaskadenkette"],
            "RichtigeAntwort": "Rocky Mountains",
            "RichtigeAntwortMöglichkeiten": "Rocky Mountains",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Rocky Mountains erstrecken sich über etwa 4.800 Kilometer von Kanada bis New Mexico"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die höchsten Gipfel der Rocky Mountains?",
            "Antworten": ["Kanada", "Mexiko", "USA", "Grönland"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der höchste Gipfel der Rocky Mountains ist der Mount Elbert in Colorado, USA"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welche Wüste erstreckt sich über Teile von Arizona, Kalifornien und Mexiko?",
            "Antworten": ["Sonora-Wüste", "Mojave-Wüste", "Chihuahuan-Wüste", "Great Basin"],
            "RichtigeAntwort": "Sonora-Wüste",
            "RichtigeAntwortMöglichkeiten": "Sonora-Wüste",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Sonora-Wüste ist eine der heißesten Wüsten Nordamerikas"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist für seine ausgedehnte Prärie bekannt?",
            "Antworten": ["Kanada", "Mexiko", "USA", "Grönland"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Prärie ist eine große Graslandschaft, die sich hauptsächlich in den Great Plains der USA erstreckt"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Mount St. Helens?",
            "Antworten": ["Kanada", "Mexiko", "USA", "Guatemala"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Mount St. Helens ist ein aktiver Vulkan im Bundesstaat Washington, USA"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt das Erdbebengebiet der San-Andreas-Verwerfung?",
            "Antworten": ["Kanada", "Mexiko", "USA", "Kuba"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die San-Andreas-Verwerfung ist eine der bekanntesten und aktivsten Verwerfungen der Welt und verläuft durch Kalifornien"
        },
    
        ////////////////////////////////AFIKA//////////////////////////////////
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der längste in Afrika?",
            "Antworten": ["Kongo", "Niger", "Nil", "Sambesi"],
            "RichtigeAntwort": "Nil",
            "RichtigeAntwortMöglichkeiten": "Nil",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Nil ist mit etwa 6.650 Kilometern der längste Fluss der Welt"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "In welchem Land mündet der Niger-Fluss ins Meer?",
            "Antworten": ["Nigeria", "Mali", "Niger", "Südafrika"],
            "RichtigeAntwort": "Nigeria",
            "RichtigeAntwortMöglichkeiten": "Nigeria",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Niger mündet in Nigeria in den Golf von Guinea"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Durch wie viele Länder fließt der Kongo-Fluss?",
            "Antworten": ["3", "5", "7", "9"],
            "RichtigeAntwort": "9",
            "RichtigeAntwortMöglichkeiten": "9 neun",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Kongo-Fluss fließt durch insgesamt neun Länder in Afrika"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "An welche drei Länder grenzt der Viktoriasee?",
            "Antworten": ["Kenia, Uganda, Tansania", "Rwanda, Burundi, Uganda", "Kenia, Sudan, Äthiopien", "Tansania, Mosambik, Malawi"],
            "RichtigeAntwort": "Kenia, Uganda, Tansania",
            "RichtigeAntwortMöglichkeiten": "Kenia Uganda Tansania",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Viktoriasee ist der größte See Afrikas"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der tiefste See in Afrika?",
            "Antworten": ["Malawisee", "Tanganjikasee", "Viktoriasee", "Albertsee"],
            "RichtigeAntwort": "Tanganjikasee",
            "RichtigeAntwortMöglichkeiten": "Tanganjikasee",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Tanganjikasee ist der zweittiefste See der Welt mit einer maximalen Tiefe von etwa 1.470 Metern"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist ein bedeutender Nebenfluss des Nil?",
            "Antworten": ["Limpopo", "Blauer Nil", "Sambesi", "Volta"],
            "RichtigeAntwort": "Blauer Nil",
            "RichtigeAntwortMöglichkeiten": "Blauer Nil",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Blaue Nil entspringt im Tana-See in Äthiopien und ist ein Hauptzufluss des Nils"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher See bildet den Ursprung des Weißen Nils?",
            "Antworten": ["Albertsee", "Kivusee", "Victoriasee", "Malawisee"],
            "RichtigeAntwort": "Victoriasee",
            "RichtigeAntwortMöglichkeiten": "Victoriasee",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Weiße Nil entspringt im Viktoriasee"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das höchste Gebirge Afrikas?",
            "Antworten": ["Atlas", "Ruwenzori", "Drakensberge", "Kilimandscharo"],
            "RichtigeAntwort": "Kilimandscharo",
            "RichtigeAntwortMöglichkeiten": "Kilimandscharo",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Kilimandscharo ist der höchste Berg Afrikas mit einer Höhe von 5.895 Metern"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich das Atlasgebirge?",
            "Antworten": ["Ägypten", "Südafrika", "Marokko", "Äthiopien"],
            "RichtigeAntwort": "Marokko",
            "RichtigeAntwortMöglichkeiten": "Marokko",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Das Atlasgebirge erstreckt sich über Marokko, Algerien und Tunesien"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welche Wüste ist die größte heiße Wüste der Welt?",
            "Antworten": ["Kalahari", "Sahara", "Namib", "Libysche Wüste"],
            "RichtigeAntwort": "Sahara",
            "RichtigeAntwortMöglichkeiten": "Sahara",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Sahara erstreckt sich über Nordafrika und ist die größte heiße Wüste der Welt"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich die Kalahari-Wüste?",
            "Antworten": ["Namibia", "Botswana", "Südafrika", "Simbabwe"],
            "RichtigeAntwort": "Botswana",
            "RichtigeAntwortMöglichkeiten": "Botswana",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Kalahari-Wüste erstreckt sich über Botswana, Namibia und Südafrika"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Nyiragongo?",
            "Antworten": ["Uganda", "Ruanda", "Äthiopien", "Demokratische Republik Kongo"],
            "RichtigeAntwort": "Demokratische Republik Kongo",
            "RichtigeAntwortMöglichkeiten": "Demokratische Republik Kongo",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Nyiragongo ist bekannt für seinen aktiven Lavasee und liegt in der Demokratischen Republik Kongo"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt der Vulkan Mount Kenya?",
            "Antworten": ["Uganda", "Kenia", "Tansania", "Eritrea"],
            "RichtigeAntwort": "Kenia",
            "RichtigeAntwortMöglichkeiten": "Kenia Kenya",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Mount Kenya ist der zweithöchste Berg Afrikas und ein erloschener Vulkan"
        },
    
        //////////////////////////////ASIEN/////////////////////////////////
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der längste in Asien?",
            "Antworten": ["Jangtsekiang", "Ganges", "Indus", "Mekong"],
            "RichtigeAntwort": "Jangtsekiang",
            "RichtigeAntwortMöglichkeiten": "Jangtsekiang Yangtze",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Jangtsekiang ist mit etwa 6.300 Kilometern der längste Fluss Asiens"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "In welchem Land mündet der Indus ins Meer?",
            "Antworten": ["Indien", "Bangladesch", "Pakistan", "China"],
            "RichtigeAntwort": "Pakistan",
            "RichtigeAntwortMöglichkeiten": "Pakistan",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Indus mündet in Pakistan in das Arabische Meer"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte See Asiens nach Fläche?",
            "Antworten": ["Baikalsee", "Aralsee", "Titicacasee", "Kaspisches Meer"],
            "RichtigeAntwort": "Kaspisches Meer",
            "RichtigeAntwortMöglichkeiten": "KaspischesMeer CaspianSea",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Kaspische Meer ist der größte geschlossene See der Erde"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Baikalsee?",
            "Antworten": ["China", "Kasachstan", "Mongolei", "Russland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Baikalsee ist der tiefste und älteste Süßwassersee der Welt und liegt in Russland"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist ein bedeutender Nebenfluss des Ganges?",
            "Antworten": ["Yamuna", "Indus", "Brahmaputra", "Narmada"],
            "RichtigeAntwort": "Yamuna",
            "RichtigeAntwortMöglichkeiten": "Yamuna",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Yamuna ist der größte Nebenfluss des Ganges"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss bildet die Grenze zwischen Russland und China?",
            "Antworten": ["Amur", "Huang He", "Jangtsekiang", "Mekong"],
            "RichtigeAntwort": "Amur",
            "RichtigeAntwortMöglichkeiten": "Amur",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Amur bildet die natürliche Grenze zwischen Russland und China"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das höchste Gebirge der Welt?",
            "Antworten": ["Alpen", "Rocky Mountains", "Karakorum", "Himalaya"],
            "RichtigeAntwort": "Himalaya",
            "RichtigeAntwortMöglichkeiten": "Himalaya",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Himalaya beherbergt den höchsten Gipfel der Welt, den Mount Everest"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der K2, der zweithöchste Berg der Welt?",
            "Antworten": ["Indien", "Nepal", "Pakistan", "Bhutan"],
            "RichtigeAntwort": "Pakistan",
            "RichtigeAntwortMöglichkeiten": "Pakistan",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der K2 liegt im Karakorum-Gebirge an der Grenze zwischen Pakistan und China"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welche Wüste ist die größte in Asien?",
            "Antworten": ["Gobi", "Thar", "Taklamakan", "Karakum"],
            "RichtigeAntwort": "Gobi",
            "RichtigeAntwortMöglichkeiten": "Gobi",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Gobi-Wüste erstreckt sich über Teile der Mongolei und Chinas"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist bekannt für seine ausgedehnten Steppen?",
            "Antworten": ["China", "Indien", "Kasachstan", "Vietnam"],
            "RichtigeAntwort": "Kasachstan",
            "RichtigeAntwortMöglichkeiten": "Kasachstan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Kasachstan ist bekannt für seine weiten, grasbewachsenen Steppen"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Mount Fuji?",
            "Antworten": ["China", "Südkorea", "Japan", "Philippinen"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Mount Fuji ist der höchste Berg Japans und ein aktiver Vulkan"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt der Vulkan Merapi, einer der aktivsten Vulkane der Welt?",
            "Antworten": ["Indien", "Philippinen", "Indonesien", "Malaysia"],
            "RichtigeAntwort": "Indonesien",
            "RichtigeAntwortMöglichkeiten": "Indonesien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Merapi ist ein aktiver Vulkan auf der Insel Java in Indonesien"
        },
    
        /////////////////////////////AUSTRALIEN///////////////////////////////
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der längste Fluss in Australien?",
            "Antworten": ["Murrumbidgee", "Darling", "Lachlan", "Murray"],
            "RichtigeAntwort": "Murray",
            "RichtigeAntwortMöglichkeiten": "Murray",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Murray ist etwa 2.508 Kilometer lang und der längste Fluss in Australien"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss bildet zusammen mit dem Murray das größte Flusssystem Australiens?",
            "Antworten": ["Darling", "Fitzroy", "Cooper Creek", "Gascoyne"],
            "RichtigeAntwort": "Darling",
            "RichtigeAntwortMöglichkeiten": "Darling",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Darling ist ein wichtiger Nebenfluss des Murray und bildet mit ihm das Murray-Darling-Becken"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte See in Australien?",
            "Antworten": ["Lake Eyre", "Lake Victoria", "Lake Torrens", "Lake Gairdner"],
            "RichtigeAntwort": "Lake Eyre",
            "RichtigeAntwortMöglichkeiten": "Lake Eyre",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Lake Eyre ist der größte See Australiens, aber oft ausgetrocknet"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Lake Taupo?",
            "Antworten": ["Australien", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Lake Taupo ist der größte See Neuseelands und liegt in einem Vulkankrater"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das höchste Gebirge in Australien?",
            "Antworten": ["Great Dividing Range", "Flinders Ranges", "MacDonnell Ranges", "Australian Alps"],
            "RichtigeAntwort": "Australian Alps",
            "RichtigeAntwortMöglichkeiten": "Australian Alps",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Australian Alps enthalten die höchsten Berge des australischen Kontinents"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der höchste Gipfel Ozeaniens, der Mount Wilhelm?",
            "Antworten": ["Australien", "Neuseeland", "Papua-Neuguinea", "Fidschi"],
            "RichtigeAntwort": "Papua-Neuguinea",
            "RichtigeAntwortMöglichkeiten": "Papua-Neuguinea",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Mount Wilhelm ist der höchste Gipfel in Papua-Neuguinea und Ozeanien"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welche Wüste ist die größte in Australien?",
            "Antworten": ["Simpson Desert", "Great Victoria Desert", "Gibson Desert", "Tanami Desert"],
            "RichtigeAntwort": "Great Victoria Desert",
            "RichtigeAntwortMöglichkeiten": "Great Victoria Desert",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Great Victoria Desert ist die größte Wüste Australiens"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist bekannt für seine vulkanischen Hochländer?",
            "Antworten": ["Australien", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Neuseeland ist bekannt für seine vulkanischen Hochländer, insbesondere auf der Nordinsel"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Mount Ruapehu?",
            "Antworten": ["Australien", "Fidschi", "Papua-Neuguinea", "Neuseeland"],
            "RichtigeAntwort": "Neuseeland",
            "RichtigeAntwortMöglichkeiten": "Neuseeland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Mount Ruapehu ist ein aktiver Vulkan auf der Nordinsel Neuseelands"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Mount Yasur?",
            "Antworten": ["Fidschi", "Papua-Neuguinea", "Vanuatu", "Neuseeland"],
            "RichtigeAntwort": "Vanuatu",
            "RichtigeAntwortMöglichkeiten": "Vanuatu",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Mount Yasur ist ein aktiver Vulkan auf der Insel Tanna in Vanuatu"
        },
    
        ////////////////////////////////EUROPA////////////////////////////////
    
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist der längste in Europa?",
            "Antworten": ["Donau", "Rhein", "Wolga", "Loire"],
            "RichtigeAntwort": "Wolga",
            "RichtigeAntwortMöglichkeiten": "Wolga Volga",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Wolga ist mit etwa 3.530 Kilometern der längste Fluss Europas"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "Durch wie viele Länder fließt die Donau?",
            "Antworten": ["5", "7", "10", "12"],
            "RichtigeAntwort": "10",
            "RichtigeAntwortMöglichkeiten": "10",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Donau fließt durch insgesamt zehn Länder in Europa"
        },
        { //Fluss durch Paris
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss fließt durch Paris?",
            "Antworten": ["Rhein", "Donau", "Themse", "Seine"],
            "RichtigeAntwort": "Seine",
            "RichtigeAntwortMöglichkeiten": "Seine",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Seine fließt durch Paris und ist einer der bekanntesten Flüsse Frankreichs"
        },
        { //Wichtige Flüsse
            "Kategorie": "Geographie",
            "Frage": "In welchem Land mündet der Rhein ins Meer?",
            "Antworten": ["Deutschland", "Belgien", "Niederlande", "Frankreich"],
            "RichtigeAntwort": "Niederlande",
            "RichtigeAntwortMöglichkeiten": "Niederlande",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Rhein mündet in den Niederlanden in die Nordsee"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte See Europas nach Fläche?",
            "Antworten": ["Genfersee", "Ladogasee", "Bodensee", "Balaton"],
            "RichtigeAntwort": "Ladogasee",
            "RichtigeAntwortMöglichkeiten": "Ladogasee",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Ladogasee ist der größte See Europas und liegt in Russland"
        },
        { //Bedeutende Seen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Bodensee?",
            "Antworten": ["Deutschland", "Österreich", "Schweiz", "Alle drei"],
            "RichtigeAntwort": "Alle drei",
            "RichtigeAntwortMöglichkeiten": "Deutschland Österreich Schweiz",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Bodensee grenzt an Deutschland, Österreich und die Schweiz"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss ist ein bedeutender Nebenfluss der Wolga?",
            "Antworten": ["Dnjepr", "Don", "Oka", "Peipus"],
            "RichtigeAntwort": "Oka",
            "RichtigeAntwortMöglichkeiten": "Oka",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Oka ist der größte Nebenfluss der Wolga"
        },
        { //Flüsse und deren Einzugsgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Fluss bildet die Grenze zwischen Frankreich und Deutschland?",
            "Antworten": ["Elbe", "Oder", "Rhein", "Mosel"],
            "RichtigeAntwort": "Rhein",
            "RichtigeAntwortMöglichkeiten": "Rhein",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Rhein bildet teilweise die Grenze zwischen Frankreich und Deutschland"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "Welches ist das höchste Gebirge Europas?",
            "Antworten": ["Pyrenäen", "Karpaten", "Alpen", "Hymalaya"],
            "RichtigeAntwort": "Alpen",
            "RichtigeAntwortMöglichkeiten": "Alpen",
            "Schwierigkeitsgrad": "leicht",
            "Fakt": "Die Alpen sind das höchste und umfangreichste Gebirge Europas"
        },
        { //Hauptgebirgszüge
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befinden sich die höchsten Gipfel der Alpen?",
            "Antworten": ["Deutschland", "Österreich", "Frankreich", "Schweiz"],
            "RichtigeAntwort": "Frankreich",
            "RichtigeAntwortMöglichkeiten": "Frankreich",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Mont Blanc, der höchste Gipfel der Alpen, liegt an der Grenze zwischen Frankreich und Italien"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welche Wüste ist die einzige in Europa?",
            "Antworten": ["Bardenas Reales", "Tabernas", "Monegros", "Las Vegas"],
            "RichtigeAntwort": "Tabernas",
            "RichtigeAntwortMöglichkeiten": "Tabernas",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Tabernas-Wüste liegt in der Provinz Almería in Spanien und ist die einzige echte Wüste Europas"
        },
        { //Landschaftsarten
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist für seine weitläufigen Tundren bekannt?",
            "Antworten": ["Norwegen", "Russland", "Schweden", "Finnland"],
            "RichtigeAntwort": "Russland",
            "RichtigeAntwortMöglichkeiten": "Russland",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Russland ist bekannt für seine ausgedehnten Tundren in den nördlichen Regionen"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land befindet sich der Vulkan Ätna?",
            "Antworten": ["Griechenland", "Italien", "Portugal", "Spanien"],
            "RichtigeAntwort": "Italien",
            "RichtigeAntwortMöglichkeiten": "Italien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Ätna ist der höchste und aktivste Vulkan Europas und befindet sich auf der Insel Sizilien"
        },
        { //Vulkane und Erdbebenregionen
            "Kategorie": "Geographie",
            "Frage": "In welchem Land liegt die geothermisch aktive Region Hveragerði?",
            "Antworten": ["Island", "Norwegen", "Finnland", "Schweden"],
            "RichtigeAntwort": "Island",
            "RichtigeAntwortMöglichkeiten": "Island",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Hveragerði ist eine geothermisch aktive Region im Süden Islands"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist in der Regel durch wenig Niederschlag und große Temperaturschwankungen zwischen Tag und Nacht gekennzeichnet?",
            "Antworten": ["Tropisch", "Subtropisch", "Arid", "Gemäßigt"],
            "RichtigeAntwort": "Arid",
            "RichtigeAntwortMöglichkeiten": "Arid",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Aride Klimazonen umfassen Wüstenregionen wie die Sahara und die Wüste Gobi"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist durch vier ausgeprägte Jahreszeiten mit kalten Wintern und warmen Sommern gekennzeichnet?",
            "Antworten": ["Tropisch", "Subtropisch", "Gemäßigt", "Arktisch"],
            "RichtigeAntwort": "Gemäßigt",
            "RichtigeAntwortMöglichkeiten": "Gemäßigt",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die gemäßigte Klimazone liegt zwischen den Polarzonen und den Tropen"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist durch ganzjährig niedrige Temperaturen und lange, dunkle Winter gekennzeichnet?",
            "Antworten": ["Subtropisch", "Arktisch", "Tropisch", "Gemäßigt"],
            "RichtigeAntwort": "Arktisch",
            "RichtigeAntwortMöglichkeiten": "Arktisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die arktische Klimazone umfasst die Regionen um den Nordpol"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "In welcher Klimazone liegen die Regenwälder des Amazonas?",
            "Antworten": ["Tropisch", "Subtropisch", "Gemäßigt", "Arktisch"],
            "RichtigeAntwort": "Tropisch",
            "RichtigeAntwortMöglichkeiten": "Tropisch",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Die Amazonas-Regenwälder befinden sich in der tropischen Klimazone"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist durch heiße Sommer und milde Winter gekennzeichnet?",
            "Antworten": ["Subtropisch", "Tropisch", "Arktisch", "Gemäßigt"],
            "RichtigeAntwort": "Subtropisch",
            "RichtigeAntwortMöglichkeiten": "Subtropisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die subtropische Klimazone liegt zwischen den Tropen und den gemäßigten Zonen"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist durch sehr kalte Winter und kühle Sommer gekennzeichnet?",
            "Antworten": ["Tropisch", "Subpolar", "Gemäßigt", "Arktisch"],
            "RichtigeAntwort": "Subpolar",
            "RichtigeAntwortMöglichkeiten": "Subpolar",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die subpolare Klimazone liegt südlich der Arktis und nördlich der gemäßigten Zonen"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "In welcher Klimazone liegt die Sahara?",
            "Antworten": ["Subtropisch", "Tropisch", "Gemäßigt", "Arktisch"],
            "RichtigeAntwort": "Subtropisch",
            "RichtigeAntwortMöglichkeiten": "Subtropisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Sahara liegt in der subtropischen Klimazone"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "In welcher Klimazone liegen die Regenwälder des Kongo-Beckens?",
            "Antworten": ["Tropisch", "Subtropisch", "Gemäßigt", "Arktisch"],
            "RichtigeAntwort": "Tropisch",
            "RichtigeAntwortMöglichkeiten": "Tropisch",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Regenwälder des Kongo-Beckens befinden sich in der tropischen Klimazone"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone hat die meisten Niederschläge im Winter und trockene Sommer?",
            "Antworten": ["Tropisch", "Subtropisch", "Mediterran", "Arktisch"],
            "RichtigeAntwort": "Mediterran",
            "RichtigeAntwortMöglichkeiten": "Mediterran",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Das Mittelmeerklima ist bekannt für seine regnerischen Winter und trockenen Sommer"
        },
        { //Klimazonen
            "Kategorie": "Geographie",
            "Frage": "Welche Klimazone ist durch heiße, trockene Sommer und milde, feuchte Winter gekennzeichnet?",
            "Antworten": ["Tropisch", "Subtropisch", "Arid", "Mediterran"],
            "RichtigeAntwort": "Mediterran",
            "RichtigeAntwortMöglichkeiten": "Mediterran",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Das Mittelmeerklima herrscht in den Küstenregionen rund um das Mittelmeer"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Welcher Kontinent ist für ihre häufigen Tornados bekannt?",
            "Antworten": ["Australien", "Europa", "Nordamerika", "Asien"],
            "RichtigeAntwort": "Nordamerika",
            "RichtigeAntwortMöglichkeiten": "Nordamerika",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Nordamerika, insbesondere die USA, ist für die häufigen Tornados in der sogenannten 'Tornado Alley' bekannt"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Was ist ein El Niño?",
            "Antworten": ["starkes Erdbeben", "Erwärmung des Pazifiks", "tropischer Wirbelsturm", "arktischer Kälteeinbruch"],
            "RichtigeAntwort": "Erwärmung des Pazifiks",
            "RichtigeAntwortMöglichkeiten": "Erwärmung des Pazifiks",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "El Niño ist ein Klimaphänomen, das durch eine Erwärmung der Pazifikoberfläche verursacht wird"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Welche Region ist für ihre intensiven Monsunregen bekannt?",
            "Antworten": ["Afrika", "Europa", "Südamerika", "Südostasien"],
            "RichtigeAntwort": "Südostasien",
            "RichtigeAntwortMöglichkeiten": "Südostasien Ostasien Asien Südasien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Südostasien erlebt jährlich intensive Monsunregen"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Was ist ein La Niña?",
            "Antworten": ["Kälteeinbruch in Europa", "Abkühlung des Pazifiks", "tropischer Wirbelsturm", "Hitzewelle in Afrika"],
            "RichtigeAntwort": "Abkühlung des Pazifiks",
            "RichtigeAntwortMöglichkeiten": "Eine Abkühlung des Pazifiks",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "La Niña ist ein Klimaphänomen, das durch eine Abkühlung der Pazifikoberfläche verursacht wird"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Was ist ein Blizzard?",
            "Antworten": ["Ein starker Regensturm", "Ein tropischer Wirbelsturm", "Ein Schneesturm", "Eine Hitzeperiode"],
            "RichtigeAntwort": "Ein Schneesturm",
            "RichtigeAntwortMöglichkeiten": "Ein Schneesturm Blizzard",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ein Blizzard ist ein starker Schneesturm mit heftigen Winden"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Was ist ein Chinook?",
            "Antworten": ["Ein heißer Wüstenwind", "Ein kalter Polarwind", "Ein warmer Fallwind", "Ein Monsunregen"],
            "RichtigeAntwort": "Ein warmer Fallwind",
            "RichtigeAntwortMöglichkeiten": "Ein warmer Fallwind Chinook",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ein Chinook ist ein warmer, trockener Fallwind, der in den Rocky Mountains auftritt"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "In welcher Region treten häufig Taifune auf?",
            "Antworten": ["Atlantik", "Pazifik", "Indischer Ozean", "Mittelmeer"],
            "RichtigeAntwort": "Pazifik",
            "RichtigeAntwortMöglichkeiten": "Pazifik",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Taifune sind tropische Wirbelstürme, die im westlichen Pazifik auftreten"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Was ist ein Haboob?",
            "Antworten": ["Ein Sandsturm", "Ein Wirbelsturm", "Ein Schneesturm", "Ein Kaltfront"],
            "RichtigeAntwort": "Ein Sandsturm",
            "RichtigeAntwortMöglichkeiten": "Ein Sandsturm Haboob",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Ein Haboob ist ein intensiver Sandsturm, der häufig in Wüstengebieten vorkommt"
        },
        { //Wetterphänomene
            "Kategorie": "Geographie",
            "Frage": "Welche Region ist bekannt für ihre Zyklone?",
            "Antworten": ["Atlantik", "Pazifik", "Indischer Ozean", "Mittelmeer"],
            "RichtigeAntwort": "Indischer Ozean",
            "RichtigeAntwortMöglichkeiten": "Indischer Ozean",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Zyklone sind tropische Wirbelstürme, die im Indischen Ozean auftreten"
        },
        { //Jahreszeiten
            "Kategorie": "Geographie",
            "Frage": "Welche Jahreszeit ist auf der Nordhalbkugel, wenn die Sonne am weitesten südlich steht?",
            "Antworten": ["Winter", "Frühling", "Sommer", "Herbst"],
            "RichtigeAntwort": "Winter",
            "RichtigeAntwortMöglichkeiten": "Winter",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Die Wintersonnenwende markiert den Beginn des Winters auf der Nordhalbkugel"
        },
        { //Jahreszeiten
            "Kategorie": "Geographie",
            "Frage": "In welchen Monaten tritt der Sommer auf der Südhalbkugel auf?",
            "Antworten": ["Dezember bis Februar", "März bis Mai", "Juni bis August", "September bis November"],
            "RichtigeAntwort": "Dezember bis Februar",
            "RichtigeAntwortMöglichkeiten": "Dezember bis Februar",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Sommer auf der Südhalbkugel dauert von Dezember bis Februar"
        },
        { //Jahreszeiten
            "Kategorie": "Geographie",
            "Frage": "Welche Jahreszeit tritt auf der Nordhalbkugel während der Sommersonnenwende ein?",
            "Antworten": ["Winter", "Frühling", "Sommer", "Herbst"],
            "RichtigeAntwort": "Sommer",
            "RichtigeAntwortMöglichkeiten": "Sommer",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Sommersonnenwende markiert den Beginn des Sommers auf der Nordhalbkugel"
        },
        { //Jahreszeiten
            "Kategorie": "Geographie",
            "Frage": "Welche Jahreszeit ist auf der Südhalbkugel, wenn es auf der Nordhalbkugel Herbst ist?",
            "Antworten": ["Winter", "Frühling", "Sommer", "Herbst"],
            "RichtigeAntwort": "Frühling",
            "RichtigeAntwortMöglichkeiten": "Frühling",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Wenn es auf der Nordhalbkugel Herbst ist, ist auf der Südhalbkugel Frühling"
        },
    
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Human Development Index (HDI) weltweit?",
            "Antworten": ["Norwegen", "Schweiz", "Irland", "Deutschland"],
            "RichtigeAntwort": "Norwegen",
            "RichtigeAntwortMöglichkeiten": "Norwegen",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Norwegen hat den höchsten Human Development Index (HDI) weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den niedrigsten Human Development Index (HDI) weltweit?",
            "Antworten": ["Niger", "Zentralafrikanische Republik", "Tschad", "Burkina Faso"],
            "RichtigeAntwort": "Niger",
            "RichtigeAntwortMöglichkeiten": "Niger",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Niger hat den niedrigsten Human Development Index (HDI) weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Lebenserwartung weltweit?",
            "Antworten": ["Japan", "Schweiz", "Singapur", "Australien"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Japan hat die höchste Lebenserwartung weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat das höchste Bruttoinlandsprodukt (BIP) pro Kopf weltweit?",
            "Antworten": ["Luxemburg", "Schweiz", "Norwegen", "Irland"],
            "RichtigeAntwort": "Luxemburg",
            "RichtigeAntwortMöglichkeiten": "Luxemburg",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Luxemburg hat das höchste Bruttoinlandsprodukt (BIP) pro Kopf weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Alphabetisierungsgrad weltweit?",
            "Antworten": ["Finnland", "Norwegen", "Deutschland", "Andorra"],
            "RichtigeAntwort": "Andorra",
            "RichtigeAntwortMöglichkeiten": "Andorra",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Andorra hat den höchsten Alphabetisierungsgrad weltweit mit nahezu 100%"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Geburtenrate weltweit?",
            "Antworten": ["Niger", "Angola", "Afghanistan", "Mali"],
            "RichtigeAntwort": "Niger",
            "RichtigeAntwortMöglichkeiten": "Niger",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Niger hat die höchste Geburtenrate weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Anteil an städtischer Bevölkerung weltweit?",
            "Antworten": ["Singapur", "Monaco", "Kuwait", "Hongkong"],
            "RichtigeAntwort": "Monaco",
            "RichtigeAntwortMöglichkeiten": "Monaco",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Monaco hat den höchsten Anteil an städtischer Bevölkerung, da es vollständig urbanisiert ist"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die geringste Arbeitslosenrate weltweit?",
            "Antworten": ["Japan", "Schweiz", "Qatar", "Island"],
            "RichtigeAntwort": "Qatar",
            "RichtigeAntwortMöglichkeiten": "Qatar",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Qatar hat die geringste Arbeitslosenrate weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Anzahl an Nobelpreisträgern pro Kopf?",
            "Antworten": ["Island", "Luxemburg", "Schweiz", "Schweden"],
            "RichtigeAntwort": "Schweiz",
            "RichtigeAntwortMöglichkeiten": "Schweiz",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Schweiz hat die höchste Anzahl an Nobelpreisträgern pro Kopf"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Alphabetisierungsrate in Afrika?",
            "Antworten": ["Südafrika", "Ägypten", "Seychellen", "Tunesien"],
            "RichtigeAntwort": "Seychellen",
            "RichtigeAntwortMöglichkeiten": "Seychellen",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die Seychellen haben die höchste Alphabetisierungsrate in Afrika mit fast 95%"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land in Asien hat den höchsten HDI (Human Development Index)?",
            "Antworten": ["Japan", "Südkorea", "Singapur", "Hongkong"],
            "RichtigeAntwort": "Hongkong",
            "RichtigeAntwortMöglichkeiten": "Hongkong",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Hongkong hat den höchsten HDI in Asien"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Durchschnittseinkommen pro Kopf in Afrika?",
            "Antworten": ["Südafrika", "Nigeria", "Seychellen", "Äquatorialguinea"],
            "RichtigeAntwort": "Seychellen",
            "RichtigeAntwortMöglichkeiten": "Seychellen",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die Seychellen haben das höchste Durchschnittseinkommen pro Kopf in Afrika"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land in Europa hat die niedrigste Arbeitslosenrate?",
            "Antworten": ["Deutschland", "Schweiz", "Norwegen", "Tschechien"],
            "RichtigeAntwort": "Tschechien",
            "RichtigeAntwortMöglichkeiten": "Tschechien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Tschechien hat die niedrigste Arbeitslosenrate in Europa"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Anteil an Universitätsabsolventen weltweit?",
            "Antworten": ["USA", "Kanada", "Japan", "Israel"],
            "RichtigeAntwort": "Israel",
            "RichtigeAntwortMöglichkeiten": "Israel",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Israel hat den höchsten Anteil an Universitätsabsolventen weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die niedrigste Kindersterblichkeitsrate weltweit?",
            "Antworten": ["Island", "Japan", "Norwegen", "Finnland"],
            "RichtigeAntwort": "Japan",
            "RichtigeAntwortMöglichkeiten": "Japan",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Japan hat die niedrigste Kindersterblichkeitsrate weltweit"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die höchste Lebenserwartung in Afrika?",
            "Antworten": ["Südafrika", "Mauritius", "Seychellen", "Algerien"],
            "RichtigeAntwort": "Seychellen",
            "RichtigeAntwortMöglichkeiten": "Seychellen",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Die Seychellen haben die höchste Lebenserwartung in Afrika"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Anteil an erneuerbaren Energien in seiner Energieerzeugung?",
            "Antworten": ["Norwegen", "Island", "Deutschland", "Brasilien"],
            "RichtigeAntwort": "Island",
            "RichtigeAntwortMöglichkeiten": "Island",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Island hat den höchsten Anteil an erneuerbaren Energien in seiner Energieerzeugung"
        },
        { //Entwicklungsindikatoren
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat das höchste Bruttoinlandsprodukt (BIP) in Europa?",
            "Antworten": ["Deutschland", "Frankreich", "Vereinigtes Königreich", "Italien"],
            "RichtigeAntwort": "Deutschland",
            "RichtigeAntwortMöglichkeiten": "Deutschland",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Deutschland hat das höchste Bruttoinlandsprodukt (BIP) in Europa"
        },
    
    
    
    
    
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist weltweit für die meisten CO2-Emissionen verantwortlich?",
            "Antworten": ["USA", "Indien", "China", "Russland"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "China ist weltweit für die meisten CO2-Emissionen verantwortlich"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Umweltproblem betrifft den Aralsee in Zentralasien?",
            "Antworten": ["Verschmutzung", "Überfischung", "Desertifikation", "Austrocknung"],
            "RichtigeAntwort": "Austrocknung",
            "RichtigeAntwortMöglichkeiten": "Austrocknung",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Der Aralsee in Zentralasien ist aufgrund von Wasserumleitungen stark ausgetrocknet"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größte Fläche an abgeholztem Regenwald?",
            "Antworten": ["Indonesien", "Brasilien", "Kongo", "Malaysia"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Brasilien hat die größte Fläche an abgeholztem Regenwald, insbesondere im Amazonasgebiet"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Meer ist am stärksten von Plastikverschmutzung betroffen?",
            "Antworten": ["Nordsee", "Ostsee", "Mittelmeer", "Pazifischer Ozean"],
            "RichtigeAntwort": "Pazifischer Ozean",
            "RichtigeAntwortMöglichkeiten": "Pazifischer Ozean",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Der Pazifische Ozean ist stark von Plastikverschmutzung betroffen, besonders im Great Pacific Garbage Patch"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größte Fläche an Wüstenbildung durch Desertifikation?",
            "Antworten": ["China", "USA", "Sudan", "Australien"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "China hat eine große Fläche, die von Wüstenbildung durch Desertifikation betroffen ist"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land ist am stärksten von der Luftverschmutzung betroffen?",
            "Antworten": ["China", "Indien", "Pakistan", "Bangladesch"],
            "RichtigeAntwort": "Indien",
            "RichtigeAntwortMöglichkeiten": "Indien",
            "Schwierigkeitsgrad": "extrem",
            "Fakt": "Indien ist eines der am stärksten von Luftverschmutzung betroffenen Länder weltweit"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den größten Wasserfußabdruck pro Kopf?",
            "Antworten": ["USA", "China", "Indien", "Brasilien"],
            "RichtigeAntwort": "USA",
            "RichtigeAntwortMöglichkeiten": "USA Vereinigte Staaten Amerika",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die USA haben den größten Wasserfußabdruck pro Kopf weltweit"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die größte Abfallproduktion pro Kopf?",
            "Antworten": ["Kuwait", "USA", "Kanada", "Deutschland"],
            "RichtigeAntwort": "Kuwait",
            "RichtigeAntwortMöglichkeiten": "Kuwait",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Kuwait hat die größte Abfallproduktion pro Kopf weltweit"
        },
        { //Umweltprobleme
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat die meisten Kohlekraftwerke weltweit?",
            "Antworten": ["USA", "Indien", "China", "Deutschland"],
            "RichtigeAntwort": "China",
            "RichtigeAntwortMöglichkeiten": "China",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "China hat die meisten Kohlekraftwerke weltweit"
        },
    
    
    
    
    
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welches ist das größte Naturschutzgebiet der Welt?",
            "Antworten": ["Yellowstone", "Greenland National Park", "Amazonas-Regenwald", "Great Barrier Reef Marine Park"],
            "RichtigeAntwort": "Greenland National Park",
            "RichtigeAntwortMöglichkeiten": "Greenland National Park",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Der Greenland National Park ist das größte Naturschutzgebiet der Welt"
        },
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den größten Anteil an Naturschutzgebieten weltweit?",
            "Antworten": ["Brasilien", "Australien", "Vereinigte Staaten", "Vereinigtes Königreich"],
            "RichtigeAntwort": "Brasilien",
            "RichtigeAntwortMöglichkeiten": "Brasilien",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Brasilien hat eine große Fläche an Naturschutzgebieten, insbesondere im Amazonasgebiet"
        },
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welches ist das älteste Nationalpark der Welt?",
            "Antworten": ["Yellowstone", "Yosemite", "Banff", "Kruger Nationalpark"],
            "RichtigeAntwort": "Yellowstone",
            "RichtigeAntwortMöglichkeiten": "Yellowstone",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Der Yellowstone-Nationalpark in den USA ist der älteste Nationalpark der Welt, gegründet 1872"
        },
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welches Meeresschutzgebiet ist das größte der Welt?",
            "Antworten": ["Great Barrier Reef Marine Park", "Papahānaumokuākea Marine National Monument", "Chagos Marine Protected Area", "Ross Sea Region MPA"],
            "RichtigeAntwort": "Papahānaumokuākea Marine National Monument",
            "RichtigeAntwortMöglichkeiten": "Papahānaumokuākea Marine National Monument",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Das Papahānaumokuākea Marine National Monument ist das größte Meeresschutzgebiet der Welt"
        },
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welches Land hat den höchsten Anteil seiner Landesfläche als Naturschutzgebiet ausgewiesen?",
            "Antworten": ["Vereinigte Staaten", "Vereinigtes Königreich", "Costa Rica", "Neuseeland"],
            "RichtigeAntwort": "Costa Rica",
            "RichtigeAntwortMöglichkeiten": "Costa Rica",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Costa Rica hat einen hohen Anteil seiner Landesfläche als Naturschutzgebiet ausgewiesen"
        },
        { //Naturschutzgebiete
            "Kategorie": "Geographie",
            "Frage": "Welcher Nationalpark in Europa ist der erste, der als UNESCO-Welterbe anerkannt wurde?",
            "Antworten": ["Plitvicer Seen Nationalpark", "Cinque Terre", "Doñana Nationalpark", "Sächsische Schweiz Nationalpark"],
            "RichtigeAntwort": "Plitvicer Seen Nationalpark",
            "RichtigeAntwortMöglichkeiten": "Plitvicer Seen Nationalpark",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Der Plitvicer Seen Nationalpark in Kroatien war der erste Nationalpark in Europa, der als UNESCO-Welterbe anerkannt wurde"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Definition von Plattentektonik
            "Kategorie": "Wissenschaft",
            "Frage": "Was ist Plattentektonik?",
            "Antworten": ["Die Bewegung der Kontinente", "Die Bewegung der Erdplatten", "Die Bewegung der Ozeane", "Die Bewegung der Atmosphäre"],
            "RichtigeAntwort": "Die Bewegung der Erdplatten",
            "RichtigeAntwortMöglichkeiten": "Bewegung Erdplatten Verschiebung Erdkrusten",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Plattentektonik bezieht sich auf die Bewegung und Wechselwirkung der großen Platten, aus denen die Erdkruste besteht"
        },
        { //Anzahl der großen tektonischen Platten
            "Kategorie": "Wissenschaft",
            "Frage": "Wie viele große tektonische Platten gibt es auf der Erde?",
            "Antworten": ["5", "7", "9", "11"],
            "RichtigeAntwort": "7",
            "RichtigeAntwortMöglichkeiten": "7",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Es gibt sieben große tektonische Platten auf der Erde: Pazifische Platte, Nordamerikanische Platte, Eurasische Platte, Afrikanische Platte, Südamerikanische Platte, Antarktische Platte und Australische Platte"
        },
        { //Pazifische Platte
            "Kategorie": "Wissenschaft",
            "Frage": "Welche tektonische Platte ist die größte?",
            "Antworten": ["Eurasische Platte", "Afrikanische Platte", "Nordamerikanische Platte", "Pazifische Platte"],
            "RichtigeAntwort": "Pazifische Platte",
            "RichtigeAntwortMöglichkeiten": "Pazifische Platte",
            "Schwierigkeitsgrad": "expert",
            "Fakt": "Die Pazifische Platte ist die größte tektonische Platte und bedeckt den größten Teil des Pazifischen Ozeans"
        },
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        { //Größter Flughafen der Welt nach Fläche
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der größte Flughafen der Welt nach Fläche?",
            "Antworten": ["King Fahd International Airport", "Denver International Airport", "Beijing Daxing International Airport", "Dallas/Fort Worth International Airport"],
            "RichtigeAntwort": "King Fahd International Airport",
            "RichtigeAntwortMöglichkeiten": "King Fahd Saudi Arabien",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der King Fahd International Airport in Saudi-Arabien ist der größte Flughafen der Welt nach Fläche"
        },
        { //Ältester internationaler Flughafen
            "Kategorie": "Geographie",
            "Frage": "Welcher ist der älteste internationale Flughafen der Welt?",
            "Antworten": ["Flughafen London Heathrow", "Flughafen Sydney", "Flughafen Berlin Tempelhof", "Flughafen Paris-Le Bourget"],
            "RichtigeAntwort": "Flughafen Paris-Le Bourget",
            "RichtigeAntwortMöglichkeiten": "Flughafen Paris-Le Bourget",
            "Schwierigkeitsgrad": "schwer",
            "Fakt": "Der Flughafen Paris-Le Bourget in Frankreich ist der älteste internationale Flughafen der Welt"
        },
        { //Flughafen mit dem höchsten Passagieraufkommen in Europa
            "Kategorie": "Geographie",
            "Frage": "Welcher Flughafen hat das höchste Passagieraufkommen in Europa?",
            "Antworten": ["Flughafen Frankfurt", "Flughafen Paris-Charles de Gaulle", "Flughafen Amsterdam Schiphol", "Flughafen London Heathrow"],
            "RichtigeAntwort": "Flughafen London Heathrow",
            "RichtigeAntwortMöglichkeiten": "London Heathrow",
            "Schwierigkeitsgrad": "mittel",
            "Fakt": "Der Flughafen London Heathrow hat das höchste Passagieraufkommen in Europa"
        },
    


    
    
    
    
    
    
     
      
      
      
      
      
      
      
      
       
];
