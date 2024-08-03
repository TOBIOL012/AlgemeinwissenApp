const questions = [
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist das größte Land der Welt nach Fläche?",
        "Antworten": ["Kanada", "USA", "China", "Russland"],
        "RichtigeAntwort": "Russland",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches Land hat die meisten Inseln?",
        "Antworten": ["Schweden", "Kanada", "Indonesien", "Norwegen"],
        "RichtigeAntwort": "Schweden",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welcher Fluss fließt durch Paris?",
        "Antworten": ["Thames", "Seine", "Donau", "Elbe"],
        "RichtigeAntwort": "Seine",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist das größte Binnenland der Welt?",
        "Antworten": ["Kasachstan", "Mongolei", "Bolivien", "Tschad"],
        "RichtigeAntwort": "Kasachstan",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Mensch auf dem Mond?",
        "Antworten": ["Yuri Gagarin", "John Glenn", "Steve Jobs", "Neil Armstrong"],
        "RichtigeAntwort": "Neil Armstrong",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete der Zweite Weltkrieg?",
        "Antworten": ["1945", "1944", "1939", "1947"],
        "RichtigeAntwort": "1945",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste römische Kaiser?",
        "Antworten": ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        "RichtigeAntwort": "Augustus",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann die französische Revolution?",
        "Antworten": ["1789", "1799", "1776", "1804"],
        "RichtigeAntwort": "1789",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Musik",
        "Frage": "Wer sang das Lied 'Thriller'?",
        "Antworten": ["Prince", "Madonna", "Michael Jackson", "Elvis Presley"],
        "RichtigeAntwort": "Michael Jackson",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Was ist die chemische Formel von Wasser?",
        "Antworten": ["H2O", "CO2", "O2", "N2"],
        "RichtigeAntwort": "H2O",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Wer entwickelte die Relativitätstheorie?",
        "Antworten": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        "RichtigeAntwort": "Albert Einstein",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Wie viele Planeten hat unser Sonnensystem?",
        "Antworten": ["7", "9", "10", "8"],
        "RichtigeAntwort": "8",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Welches Element hat das chemische Symbol 'Fe'?",
        "Antworten": ["Kupfer", "Gold", "Silber", "Eisen"],
        "RichtigeAntwort": "Eisen",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?",
        "Antworten": ["10", "12", "9", "11"],
        "RichtigeAntwort": "11",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welchem Jahr fanden die ersten modernen Olympischen Spiele statt?",
        "Antworten": ["1900", "1892", "1896", "1888"],
        "RichtigeAntwort": "1896",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hat die meisten Grand Slam Titel im Herrentennis gewonnen?",
        "Antworten": ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
        "RichtigeAntwort": "Roger Federer",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Wer schrieb 'Romeo und Julia'?",
        "Antworten": ["Charles Dickens", "Jane Austen", "Mark Twain", "William Shakespeare"],
        "RichtigeAntwort": "William Shakespeare",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer ist bekannt für das Gemälde 'Sternennacht'?",
        "Antworten": ["Claude Monet", "Vincent van Gogh", "Edvard Munch", "Pablo Picasso"],
        "RichtigeAntwort": "Vincent van Gogh",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Künstler ist für seine surrealistischen Werke bekannt?",
        "Antworten": ["Pablo Picasso", "Henri Matisse", "Georges Braque", "Salvador Dalí"],
        "RichtigeAntwort": "Salvador Dalí",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Technologie",
        "Frage": "Wer erfand das Telefon?",
        "Antworten": ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi", "Alexander Graham Bell"],
        "RichtigeAntwort": "Alexander Graham Bell",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Technologie",
        "Frage": "In welchem Jahr wurde das World Wide Web erfunden?",
        "Antworten": ["1991", "1995", "1985", "1989"],
        "RichtigeAntwort": "1989",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Technologie",
        "Frage": "Wer gilt als Erfinder des Computers?",
        "Antworten": ["Alan Turing", "John von Neumann", "Steve Jobs", "Charles Babbage"],
        "RichtigeAntwort": "Charles Babbage",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Technologie",
        "Frage": "Welches war das erste Programm, das auf einem Computer ausgeführt wurde?",
        "Antworten": ["Ein Algorithmus zur Primzahlberechnung", "Ein Algorithmus zur Faktorisierung", "Ein Algorithmus zur Fibonacci-Berechnung", "Ein Algorithmus zur Berechnung von Bernoulli-Zahlen"],
        "RichtigeAntwort": "Ein Algorithmus zur Berechnung von Bernoulli-Zahlen",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Natur",
        "Frage": "Welches ist das größte Säugetier der Welt?",
        "Antworten": ["Elefant", "Giraffe", "Nashorn", "Blauwal"],
        "RichtigeAntwort": "Blauwal",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Natur",
        "Frage": "Welcher Vogel kann nicht fliegen?",
        "Antworten": ["Adler", "Papagei", "Krähe", "Strauß"],
        "RichtigeAntwort": "Strauß",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Natur",
        "Frage": "Welches ist das schnellste Landtier?",
        "Antworten": ["Löwe", "Antilope", "Pferd", "Gepard"],
        "RichtigeAntwort": "Gepard",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Natur",
        "Frage": "Welches ist das giftigste Tier der Welt?",
        "Antworten": ["Pfeilgiftfrosch", "Inlandtaipan", "Seewespe", "Schwarzspitzen-Riffhai"],
        "RichtigeAntwort": "Inlandtaipan",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches Land hat die meisten Nachbarländer?",
        "Antworten": ["Russland", "Deutschland", "Brasilien", "China"],
        "RichtigeAntwort": "China",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist der längste Fluss der Welt?",
        "Antworten": ["Amazonas", "Yangtze", "Mississippi", "Nil"],
        "RichtigeAntwort": "Nil",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist der höchste Berg der Welt?",
        "Antworten": ["K2", "Kangchendzönga", "Lhotse", "Mount Everest"],
        "RichtigeAntwort": "Mount Everest",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist der tiefste Punkt der Erde?",
        "Antworten": ["Totes Meer", "Kongo-Becken", "Große Riftvalley", "Marianengraben"],
        "RichtigeAntwort": "Marianengraben",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Präsident der Vereinigten Staaten?",
        "Antworten": ["Abraham Lincoln", "Thomas Jefferson", "John Adams", "George Washington"],
        "RichtigeAntwort": "George Washington",
        "Schwierigkeitsgrad": "leicht"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr begann der Erste Weltkrieg?",
        "Antworten": ["1918", "1914", "1916", "1912"],
        "RichtigeAntwort": "1914",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der letzte Kaiser von Russland?",
        "Antworten": ["Peter der Große", "Alexander II.", "Nikolaus II.", "Iwan der Schreckliche"],
        "RichtigeAntwort": "Nikolaus II.",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wann wurde die Berliner Mauer abgerissen?",
        "Antworten": ["1989", "1990", "1988", "1991"],
        "RichtigeAntwort": "1989",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Musik",
        "Frage": "Wer hat das Album 'Thriller' veröffentlicht?",
        "Antworten": ["Prince", "Michael Jackson", "Madonna", "Elvis Presley"],
        "RichtigeAntwort": "Michael Jackson",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Musik",
        "Frage": "Wer komponierte die Oper 'Don Giovanni'?",
        "Antworten": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Joseph Haydn"],
        "RichtigeAntwort": "Wolfgang Amadeus Mozart",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer gewann die FIFA-Weltmeisterschaft 2018?",
        "Antworten": ["Brasilien", "Deutschland", "Frankreich", "Argentinien"],
        "RichtigeAntwort": "Frankreich",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welchem Jahr fand der erste Super Bowl statt?",
        "Antworten": ["1960", "1967", "1970", "1975"],
        "RichtigeAntwort": "1967",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hat die meisten Punkte in einem einzigen NBA-Spiel erzielt?",
        "Antworten": ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"],
        "RichtigeAntwort": "Wilt Chamberlain",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hält den Weltrekord im 100-Meter-Lauf der Männer?",
        "Antworten": ["Tyson Gay", "Asafa Powell", "Justin Gatlin", "Usain Bolt"],
        "RichtigeAntwort": "Usain Bolt",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Was ist das chemische Symbol für Sauerstoff?",
        "Antworten": ["O", "S", "C", "N"],
        "RichtigeAntwort": "O",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welche Stadt liegt am Bosporus?",
        "Antworten": ["Istanbul", "Athen", "Rom", "Kairo"],
        "RichtigeAntwort": "Istanbul",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist die größte Wüste der Welt?",
        "Antworten": ["Sahara", "Gobi", "Antarktis", "Kalahari"],
        "RichtigeAntwort": "Antarktis",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches Land hat die größte Bevölkerung in Afrika?",
        "Antworten": ["Ägypten", "Südafrika", "Nigeria", "Äthiopien"],
        "RichtigeAntwort": "Nigeria",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welcher Fluss ist der längste in Europa?",
        "Antworten": ["Donau", "Rhein", "Wolga", "Themse"],
        "RichtigeAntwort": "Wolga",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste amerikanische Präsident, der ermordet wurde?",
        "Antworten": ["Abraham Lincoln", "James Garfield", "William McKinley", "John F. Kennedy"],
        "RichtigeAntwort": "Abraham Lincoln",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Premierminister von Indien?",
        "Antworten": ["Indira Gandhi", "Jawaharlal Nehru", "Mahatma Gandhi", "Rajiv Gandhi"],
        "RichtigeAntwort": "Jawaharlal Nehru",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde die UNO gegründet?",
        "Antworten": ["1945", "1950", "1960", "1940"],
        "RichtigeAntwort": "1945",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete den Ersten Weltkrieg?",
        "Antworten": ["Vertrag von Versailles", "Vertrag von Paris", "Vertrag von Wien", "Vertrag von Tordesillas"],
        "RichtigeAntwort": "Vertrag von Versailles",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist schrieb die 'Unvollendete' Symphonie?",
        "Antworten": ["Beethoven", "Mozart", "Schubert", "Haydn"],
        "RichtigeAntwort": "Schubert",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer gewann die Tour de France die meisten Male?",
        "Antworten": ["Eddy Merckx", "Lance Armstrong", "Miguel Indurain", "Bernard Hinault"],
        "RichtigeAntwort": "Eddy Merckx",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wie viele Spieler sind in einer Baseballmannschaft auf dem Feld?",
        "Antworten": ["9", "10", "11", "12"],
        "RichtigeAntwort": "9",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer ist der einzige Boxer, der im Schwergewicht ungeschlagen blieb?",
        "Antworten": ["Rocky Marciano", "Muhammad Ali", "Mike Tyson", "George Foreman"],
        "RichtigeAntwort": "Rocky Marciano",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welches Land hat die meisten Medaillen bei den Olympischen Winterspielen gewonnen?",
        "Antworten": ["USA", "Deutschland", "Norwegen", "Kanada"],
        "RichtigeAntwort": "Norwegen",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Welcher Planet ist der heißeste in unserem Sonnensystem?",
        "Antworten": ["Merkur", "Venus", "Mars", "Jupiter"],
        "RichtigeAntwort": "Venus",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Was ist das chemische Symbol für Gold?",
        "Antworten": ["Ag", "Au", "Pb", "Fe"],
        "RichtigeAntwort": "Au",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Welches Vitamin wird durch Sonnenlicht in der Haut produziert?",
        "Antworten": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "RichtigeAntwort": "Vitamin D",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer malte 'Das letzte Abendmahl'?",
        "Antworten": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        "RichtigeAntwort": "Leonardo da Vinci",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist das bevölkerungsreichste Land der Welt?",
        "Antworten": ["Indien", "USA", "Indonesien", "China"],
        "RichtigeAntwort": "Indien",
        "Schwierigkeitsgrad": "mittel"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welcher Kontinent hat die meisten Länder?",
        "Antworten": ["Asien", "Afrika", "Europa", "Südamerika"],
        "RichtigeAntwort": "Afrika",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches ist der tiefste See der Welt?",
        "Antworten": ["Baikalsee", "Tanganjikasee", "Kaspisches Meer", "Victoria-See"],
        "RichtigeAntwort": "Baikalsee",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geographie",
        "Frage": "Welches Land hat die längste Küstenlinie?",
        "Antworten": ["Australien", "Indien", "Kanada", "Chile"],
        "RichtigeAntwort": "Kanada",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Kaiser von China?",
        "Antworten": ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Mao Zedong"],
        "RichtigeAntwort": "Qin Shi Huang",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ die Große Pyramide von Gizeh erbauen?",
        "Antworten": ["Tutanchamun", "Ramses II.", "Cheops", "Echnaton"],
        "RichtigeAntwort": "Cheops",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde die Magna Carta unterzeichnet?",
        "Antworten": ["1215", "1315", "1415", "1515"],
        "RichtigeAntwort": "1215",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der erste Premierminister von Kanada?",
        "Antworten": ["John A. Macdonald", "Wilfrid Laurier", "William Lyon Mackenzie King", "Lester B. Pearson"],
        "RichtigeAntwort": "John A. Macdonald",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hat die meisten Tore in einer einzigen Fußball-Weltmeisterschaft erzielt?",
        "Antworten": ["Pele", "Just Fontaine", "Gerd Müller", "Ronaldo"],
        "RichtigeAntwort": "Just Fontaine",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer gewann die erste Rugby-Weltmeisterschaft im Jahr 1987?",
        "Antworten": ["England", "Neuseeland", "Australien", "Südafrika"],
        "RichtigeAntwort": "Neuseeland",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hat die meisten Punkte in einem einzigen NBA-Finale-Spiel erzielt?",
        "Antworten": ["Michael Jordan", "Elgin Baylor", "Kobe Bryant", "Shaquille O'Neal"],
        "RichtigeAntwort": "Elgin Baylor",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Sport",
        "Frage": "Wer hat die meisten Assists in einer einzigen NHL-Saison?",
        "Antworten": ["Wayne Gretzky", "Mario Lemieux", "Bobby Orr", "Jaromir Jagr"],
        "RichtigeAntwort": "Wayne Gretzky",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Welcher Wissenschaftler entdeckte die Gesetze der Planetenbewegung?",
        "Antworten": ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Nicolaus Copernicus"],
        "RichtigeAntwort": "Johannes Kepler",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Welches ist das häufigste Element im Universum?",
        "Antworten": ["Kohlenstoff", "Helium", "Wasserstoff", "Sauerstoff"],
        "RichtigeAntwort": "Wasserstoff",
        "Schwierigkeitsgrad": "schwer"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Wer entdeckte die Elektronen?",
        "Antworten": ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Max Planck"],
        "RichtigeAntwort": "J.J. Thomson",
        "Schwierigkeitsgrad": "extrem"
    },
    {
        "Kategorie": "Wissenschaft",
        "Frage": "Was ist die Einheit der elektrischen Kapazität?",
        "Antworten": ["Ohm", "Volt", "Farad", "Henry"],
        "RichtigeAntwort": "Farad",
        "Schwierigkeitsgrad": "extrem"
    },
];