const questions = [

//Erdgeschichte
    { 
        "Kategorie": "Geschichte",
        "Frage": "Vor wie vielen Milliarden Jahren entstand die Erde?",
        "Antworten": ["4,5 Milliarden", "3,2 Milliarden", "5 Milliarden", "3,6 Milliarden"],
        "RichtigeAntwort": "4,5 Milliarden",
        "RichtigeAntwortMöglichkeiten": "4 4.5 4,5 4,54 4.54 4000000000 4.000.000.000 vier",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Entstehungszeit der Erde konnte man durch untersuchungen an Meteoriten und Mondgestein festellen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Vor wie vielen Milliarden Jahren entstand das Universum?",
        "Antworten": ["14 Milliarden", "13,8 Milliarden", "8,6 Milliarden", "7,9 Milliarden"],
        "RichtigeAntwort": "13,8 Milliarden",
        "RichtigeAntwortMöglichkeiten": "14 13 13.8 13,8 13,82 13.82 13.000.000.000 13000000000 dreizehn vierzehn",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Das Universum soll aus einem unendlich winzigem Punkt vor rund 13,82 Milliarden Jahren entstanden sein"
    },
    
    { 
        "Kategorie": "Geschichte",
        "Frage": "In Welchem Zeitalter lebeten die ersten dinosaurier?",
        "Antworten": ["Kreide", "Perm", "Trias", "Jura"],
        "RichtigeAntwort": "Trias",
        "RichtigeAntwortMöglichkeiten": "Triaszeit Trias",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Mesozoikum erstreckte sich über die Trias, Jura und Kreidezeit"
    },
    { 
        "Kategorie": "Geschichte",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Im Känozoikum begann das Zeitalter der Säugetiere"
    },


    { //Menschengeschichte
        "Kategorie": "Geschichte",
        "Frage": "Wie nennt man das Zeitalter der Altsteinzeit?",
        "Antworten": ["Eisenzeit", "Paläozoikum", "Bronzezeit", "Neolithikum"],
        "RichtigeAntwort": "Paläozoikum paläo",
        "RichtigeAntwortMöglichkeiten": "Paläozoikum",
        "Schwierigkeitsgrad": "extrem",
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
        "RichtigeAntwortMöglichkeiten": "Mesopotamien",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Induszivilation blühte im damaligen Gebiet von Nordwestindien"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche alte Dynastie entwickelte sich erstmalig entlang des Gelben Flusses in China?",
        "Antworten": ["Shang", "Min", "Quin", "Indus"],
        "RichtigeAntwort": "Shang",
        "RichtigeAntwortMöglichkeiten": "Shang Shang-Dynastie",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Chinesische Mauer gilt nicht als eines der Antiken Weltwunder"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welches der 7 Weltwunder wurde von Phidias, einem berühmten Bildhauer, erschaffen?",
        "Antworten": ["Statue des Zeus", "Mausoleum von Halikarnassos", "Koloss von Rhodos", "Hängende Gärten der Semiramis"],
        "RichtigeAntwort": "Statue des Zeus",
        "RichtigeAntwortMöglichkeiten": "Statue Zeus Phidias",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Die Statue des Zeus befand sich in Olympia"
    },
    { //Karthago
        "Kategorie": "Geschichte",
        "Frage": "Welche Zivilisation baute das antike Handelszentrum Karthago?",
        "Antworten": ["Phönizier", "Perser", "Hethiter", "Assyrer"],
        "RichtigeAntwort": "Die Phönizier",
        "RichtigeAntwortMöglichkeiten": "Phönizier",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Karthago war eine mächtige Handelsstadt die großen Einfluss im Mittelmeerraum hatte."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche antike Zivilisation entwickelte das Konzept der Null und fortgeschrittene mathematische Systeme?",
        "Antworten": ["Maya", "Römer", "Ägypter", "Griechen"],
        "RichtigeAntwort": "Die Maya",
        "RichtigeAntwortMöglichkeiten": "Maya, Maya-Zivilisation",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Kyros der Große gründete das achämenidische Perserreich"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike Herrscher eroberte das Perserreich und beendete die achämenidische Dynastie?",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Katzen wurden in Ägypten verehrt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie heißt die berühmte Statue mit dem Körper eines Löwen und dem Kopf eines Pharaos?",
        "Antworten": ["Sphinx", "Obelisk", "Kolosseum", "Zikkurat"],
        "RichtigeAntwort": "Sphinx",
        "RichtigeAntwortMöglichkeiten": "Sphinx",
        "Schwierigkeitsgrad": "leicht",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Horus wurde oft mit einem Geierkopf dargestellt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Gott des alten Ägyptens war der Gott des Todes?",
        "Antworten": ["Ra", "Osiris", "Isis", "Anubis"],
        "RichtigeAntwort": "Anubis",
        "RichtigeAntwortMöglichkeiten": "Anubis",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Anubis war der Gott des Totenkults, des Einbalsamierens und der Begleitung ins Jenseits."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Gott des alten Ägyptens war der Gott des Todes?",
        "Antworten": ["Ra", "Osiris", "Isis", "Anubis"],
        "RichtigeAntwort": "Anubis",
        "RichtigeAntwortMöglichkeiten": "Anubis",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Grab von Tutanchamun im Tal der Könige war damalsnahezu unversehrt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische General war einer der Liebhaber von Cleopatra VII.?",
        "Antworten": ["Julius Caesar", "Augustus", "Mark Anton", "Nero"],
        "RichtigeAntwort": "Julius Caesar",
        "RichtigeAntwortMöglichkeiten": "Julius Caesar Caesar",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Die Beziehung der beiden hatte einen großen politischen und militärischen Einfluss auf Ägypten und Rom"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wie hieß Cleopatras berühmtes Grabmal, das in der Antike besonders berühmt war?",
        "Antworten": ["Mausoleum von Alexandria", "Grab von Alexander dem Großen", "Pyramiden von Gizeh", "Nekropole von Theben"],
        "RichtigeAntwort": "Mausoleum von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Mausoleum Alexandria",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Ramses II. war für den ersten bekannten Friedensvertrag mit den Hethitern berühmt."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao führte den Monotheismus in Ägypten ein?",
        "Antworten": ["Amenhotep IV.", "Thutmosis I.", "Ramses III.", "Chephren"],
        "RichtigeAntwort": "Amenhotep IV. (Echnaton)",
        "RichtigeAntwortMöglichkeiten": "Amenhotep IV. Echnaton",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Amenhotep IV. führte die Verehrung des Gottes Aton ein"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao war der erste, der den Titel 'Pharao' offiziell annahm?",
        "Antworten": ["Ahmose I.", "Thutmosis I.", "Amenhotep I.", "Hatschepsut"],
        "RichtigeAntwort": "Ahmose I.",
        "RichtigeAntwortMöglichkeiten": "Ahmose I. Ahmose",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Ahmose I. war der erste Pharao der 18. Dynastie und befreite Ägypten von den Hyksos"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ den monumentalen Obelisken in Karnak errichten?",
        "Antworten": ["Hatschepsut", "Thutmosis III.", "Ramses II.", "Amenhotep III."],
        "RichtigeAntwort": "Hatschepsut",
        "RichtigeAntwortMöglichkeiten": "Hatschepsut",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die 26. Dynastie war die als letzte große Periode des alten Ägypten"
    },
    { //Griechenland
        "Kategorie": "Geschichte",
        "Frage": "In welcher Schlacht besiegten die Griechen 490 v. Chr. die Perser?",
        "Antworten": ["Schlacht von Marathon", "Schlacht von Thermopylae", "Schlacht von Salamis", "Schlacht von Plataiai"],
        "RichtigeAntwort": "Schlacht von Marathon",
        "RichtigeAntwortMöglichkeiten": "Marathon Schlacht",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Schlacht von Marathon war bedeutender Erfolg der athenischen Truppen"
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Philipp II. legte die Grundlagen für Alexanders spätere Eroberungen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche Stadt war die Hauptstadt des Makedonischen Reiches unter Philipp II. und Alexander dem Großen?",
        "Antworten": ["Pella", "Athen", "Theben", "Sparta"],
        "RichtigeAntwort": "Pella",
        "RichtigeAntwortMöglichkeiten": "Pella",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Pella war das politische Zentrum unter Philipp II. und seinem Sohn Alexander dem Großen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welche wichtige Seeschlacht während der Perserkriege führte zu einem entscheidenden Sieg der Griechen über die persische Flotte?",
        "Antworten": ["Schlacht von Salamis", "Schlacht von Marathon", "Schlacht von Plataiai", "Schlacht von Mykale"],
        "RichtigeAntwort": "Schlacht von Salamis",
        "RichtigeAntwortMöglichkeiten": "Salamis",
        "Schwierigkeitsgrad": "extrem",
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
        "Kategorie": "Geografie",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Das Rad wurde erstmals in Mesopotamien entwickelt, im heutigen Irak."
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph war der Lehrer von Platon?",
        "Antworten": ["Sokrates", "Aristoteles", "Pythagoras", "Heraklit"],
        "RichtigeAntwort": "Sokrates",
        "RichtigeAntwortMöglichkeiten": "Sokrates",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Sokrates entwickelte die sokratische Methode, die auf Fragen und Dialog basiert"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph gilt als Begründer der westlichen Philosophie?",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Aristoteles war maßgeblich an der Entwicklung der heutigen Wissenschaft beteiligt"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Wer führte die Idee der Atome ein?",
        "Antworten": [" Leukipp", "Anaxagoras", "Thales", "Pythagoras"],
        "RichtigeAntwort": " Leukipp",
        "RichtigeAntwortMöglichkeiten": "Leukipp Demokrit",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Leukipp entwickelte entwickelte zusammen mit seinem Schüler Demokrit die Lehre von den Atomen"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Erfinder entwickelte die ersten Dampfmaschinen-Prototypen?",
        "Antworten": ["Heron von Alexandria", "Archimedes", "Pythagoras", "Euklid"],
        "RichtigeAntwort": "Heron von Alexandria",
        "RichtigeAntwortMöglichkeiten": "Heron Alexandria",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Heron von Alexandria entwarf eine einfache Dampfmaschine"
    },
    { 
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Philosoph entwickelte die Theorie der 4 Grundelemente?",
        "Antworten": ["Empedokles", "Anaximander", "Thales von Milet", "Heraklit"],
        "RichtigeAntwort": "Empedokles",
        "RichtigeAntwortMöglichkeiten": "Empedokles",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Aphrodite wurde als Göttin der Liebe, Schönheit und Fruchtbarkeit verehrt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war der Bote der Götter?",
        "Antworten": ["Hermes", "Apollo", "Dionysos", "Hephaistos"],
        "RichtigeAntwort": "Hermes",
        "RichtigeAntwortMöglichkeiten": "Hermes",
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Hermes war der Götterbote mit seinen geflügelten Sandalen."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Göttin war für die Jagd und den Mond verantwortlich?",
        "Antworten": ["Artemis", "Athena", "Hera", "Demeter"],
        "RichtigeAntwort": "Artemis",
        "RichtigeAntwortMöglichkeiten": "Artemis",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Artemis war die Zwillingsschwester von Apollo"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott regierte die Unterwelt?",
        "Antworten": ["Hades", "Poseidon", "Zeus", "Ares"],
        "RichtigeAntwort": "Hades",
        "RichtigeAntwortMöglichkeiten": "Hades",
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Hades herrschte über das Reich der Toten"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher griechische Gott war der Gott des Feuers und der Schmiedekunst?",
        "Antworten": ["Hephaistos", "Apollo", "Hermes", "Ares"],
        "RichtigeAntwort": "Hephaistos",
        "RichtigeAntwortMöglichkeiten": "Hephaistos",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Hephaistos erschuf die Waffen der Götter auf dem Olymp"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche griechische Göttin war für die Fruchtbarkeit der Erde verantwortlich?",
        "Antworten": ["Demeter", "Aphrodite", "Athena", "Hera"],
        "RichtigeAntwort": "Demeter",
        "RichtigeAntwortMöglichkeiten": "Demeter",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Der Minotaurus wurde von Theseus getötet wurde."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche drei griechische Schicksalsgöttinnen bestimmten das Leben und den Tod der Menschen?",
        "Antworten": ["Moiren", "Musen", "Harpien", "Gorgonen"],
        "RichtigeAntwort": "Moiren",
        "RichtigeAntwortMöglichkeiten": "Moiren",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Moiren wurden auch Schicksalsgöttinnen genannt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches mythische Pferd entsprang laut griechischer Mythologie dem Blut von Medusa?",
        "Antworten": ["Pegasus", "Bucephalus", "Trojanisches Pferd", "Kleon"],
        "RichtigeAntwort": "Pegasus",
        "RichtigeAntwortMöglichkeiten": "Pegasus",
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Kirke verwandelte die Gefährten von Odysseus in Schweine bevor Odysseus sie überzeugen konnte den Zauber aufzuheben."
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie lautet der Name des Helden der bekannt für seine abenteuerliche Rückkehr nach dem Trojanischen Krieg ist?",
        "Antworten": ["Odysseus", "Achilles", "Hercules", "Perseus"],
        "RichtigeAntwort": "Odysseus",
        "RichtigeAntwortMöglichkeiten": "Odysseus",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Frage": "Wo fanden die ersten antiken Olympischen Spiele statt?",
        "Antworten": ["Athen", "Sparta", "Olympia", "Korinth"],
        "RichtigeAntwort": "Olympia",
        "RichtigeAntwortMöglichkeiten": "Olympia",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die antiken Olympischen Spiele fanden alle vier Jahre statt"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wie oft wurden die antiken Olympischen Spiele abgehalten?",
        "Antworten": ["Jährlich", "Alle 2 Jahre", "Alle 4 Jahre", "Alle 10 Jahre"],
        "RichtigeAntwort": "Alle 4 Jahre",
        "RichtigeAntwortMöglichkeiten": "4 vierjährig vier",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "schwer",
        "Fakt": "Romulus gilt als der mythische Gründer Roms"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher antike römische König war der erste König von Rom?",
        "Antworten": ["Romulus", "Numa Pompilius", "Tarquinius Priscus", "Servius Tullius"],
        "RichtigeAntwort": "Romulus",
        "RichtigeAntwortMöglichkeiten": "Romulus",
        "Schwierigkeitsgrad": "schwer",
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
        "Schwierigkeitsgrad": "extrem",
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
        "Schwierigkeitsgrad": "extrem",
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
        "RichtigeAntwortMöglichkeiten": "Alba Longa Lavinium",
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
        "Antworten": ["Perser", "Hethiter", "Sumerer", "Medes"],
        "RichtigeAntwort": "Perser",
        "RichtigeAntwortMöglichkeiten": "Perser Persische",
        "Schwierigkeitsgrad": "extrem",
        "Fakt": "Die Perser wurden mehrmahls von Rom oder Griechenland angegriffen"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Volk aus Skandinavien ist bekannt für seine Seefahrten und Eroberungen in Europa?",
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
        "Frage": "Welcher osmanische Sultan führte die Eroberung von Konstantinopel an?",
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
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Das Kloster von St. Katharina am Sinai stammt aus dem 6. Jahrhundert n. Chr. und beherbergt eine der ältesten Bibliotheken der Welt."
    },
    { //Nero
        "Kategorie": "Geschichte",
        "Frage": "Welcher römische Kaiser ist für das große Feuer in Rom im Jahr 64 n. Chr. berüchtigt?",
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
        "Schwierigkeitsgrad": "mittel",
        "Fakt": "Diogenes beschwerte sich oft über die damaligen Normen und der Gesellschafft" 
    },
    {//Berserker
        "Kategorie": "Geschichte",
        "Frage": "Wie nannte man die nordischen in Tierfellen gehüllten Krieger in einem unkontrollierbaren Wutrausch?",
        "Antworten": ["Berserker", "Jarls", "Druiden", "Skalden"],
        "RichtigeAntwort": "Berserker",
        "RichtigeAntwortMöglichkeiten": "Berserker",
        "Schwierigkeitsgrad": "leicht",
        "Fakt": "Der Begriff 'Berserker' stammt vom altnordischen Wort 'berserkr', was so viel wie 'Bärenhemd' bedeutet."
    },
    {//Porzellan
        "Kategorie": "Geschichte",
        "Frage": "In welchem Land wurde das erste echte Porzellan entwickelt?",
        "Antworten": ["China", "Japan", "Persien", "Ägypten"],
        "RichtigeAntwort": "China",
        "RichtigeAntwortMöglichkeiten": "China",
        "Schwierigkeitsgrad": "leicht",
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
        "Frage": "Welcher Beruf im Mittelalter war für die Pflege und das Management von Tieren zuständig?",
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
        "Frage": "Wie nennt man den Bereich einer Burg, der oft als Lager für Waffen und Rüstungen diente?",
        "Antworten": ["Waffenkammer", "Speisekammer", "Speicher", "Bunker"],
        "RichtigeAntwort": "Waffenkammer",
        "RichtigeAntwortMöglichkeiten": "Waffenkammer kammer",
        "Schwierigkeitsgrad": "sehr leicht",
        "Fakt": "In der Waffenkammer wurden Waffen und Rüstungen aufbewahrt und gewartet"
    },


    
    
    
    
    
    
     
      
      
      
      
      
      
      
      
       
];
