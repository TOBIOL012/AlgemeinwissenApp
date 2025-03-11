const dailyTasks = [
  {
    ueberschrift: "Beantworte 10 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geschichte",
    art: "geschichte",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },


  {
    ueberschrift: "Beantworte 10 Fragen in Geographie",
    art: "geographie",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geographie",
    art: "geographie",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geographie",
    art: "geographie",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Geographie",
    art: "geographie",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geographie",
    art: "geographie",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geographie",
    art: "geographie",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Geographie",
    art: "geographie",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Geographie",
    art: "geographie",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Geographie",
    art: "geographie",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Musik",
    art: "musik",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Musik",
    art: "musik",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Musik",
    art: "musik",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Musik",
    art: "musik",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Musik",
    art: "musik",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Musik",
    art: "musik",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Musik",
    art: "musik",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Musik",
    art: "musik",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Musik",
    art: "musik",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Wissenschaft",
    art: "wissenschaft",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Kunst",
    art: "kunst",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Kunst",
    art: "kunst",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Kunst",
    art: "kunst",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Kunst",
    art: "kunst",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Kunst",
    art: "kunst",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Kunst",
    art: "kunst",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Kunst",
    art: "kunst",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Kunst",
    art: "kunst",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Kunst",
    art: "kunst",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Sport",
    art: "sport",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Sport",
    art: "sport",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Sport",
    art: "sport",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Sport",
    art: "sport",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Sport",
    art: "sport",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Sport",
    art: "sport",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Sport",
    art: "sport",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Sport",
    art: "sport",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Sport",
    art: "sport",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Biologie",
    art: "biologie",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Biologie",
    art: "biologie",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Biologie",
    art: "biologie",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Biologie",
    art: "biologie",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Biologie",
    art: "biologie",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Biologie",
    art: "biologie",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Biologie",
    art: "biologie",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Biologie",
    art: "biologie",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Biologie",
    art: "biologie",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Astronomie",
    art: "astronomie",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Politik",
    art: "politik",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Politik",
    art: "politik",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Politik",
    art: "politik",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Politik",
    art: "politik",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Politik",
    art: "politik",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Politik",
    art: "politik",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Politik",
    art: "politik",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Politik",
    art: "politik",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Politik",
    art: "politik",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Literatur",
    art: "literatur",
    anzahl: 10,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Literatur",
    art: "literatur",
    anzahl: 15,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Literatur",
    art: "literatur",
    anzahl: 20,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Literatur",
    art: "literatur",
    anzahl: 10,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Literatur",
    art: "literatur",
    anzahl: 15,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Literatur",
    art: "literatur",
    anzahl: 20,
    belohnungsart: "xp",
    belohnungsmenge: 90
  },
  {
    ueberschrift: "Beantworte 10 Fragen in Literatur",
    art: "literatur",
    anzahl: 10,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Beantworte 15 Fragen in Literatur",
    art: "literatur",
    anzahl: 15,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Beantworte 20 Fragen in Literatur",
    art: "literatur",
    anzahl: 20,
    belohnungsart: "token",
    belohnungsmenge: 8
  }

];

const warscheinlicher = [
  {
    ueberschrift: "Sammle 100 XP",
    art: "xp",
    anzahl: 100,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Sammle 100 XP",
    art: "xp",
    anzahl: 100,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Sammle 50 XP",
    art: "xp",
    anzahl: 50,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Sammle 50 XP",
    art: "xp",
    anzahl: 50,
    belohnungsart: "coins",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Sammle 150 XP",
    art: "xp",
    anzahl: 150,
    belohnungsart: "coins",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Sammle 150 XP",
    art: "xp",
    anzahl: 150,
    belohnungsart: "token",
    belohnungsmenge: 10
  },

//////


  {
    ueberschrift: "Spiele 3 Spiele",
    art: "game",
    anzahl: 3,
    belohnungsart: "token",
    belohnungsmenge: 3
  },
  {
    ueberschrift: "Spiele 3 Spiele",
    art: "game",
    anzahl: 3,
    belohnungsart: "xp",
    belohnungsmenge: 40
  },
  {
    ueberschrift: "Spiele 3 Spiele",
    art: "game",
    anzahl: 3,
    belohnungsart: "coins",
    belohnungsmenge: 20
  },
  {
    ueberschrift: "Spiele 4 Spiele",
    art: "game",
    anzahl: 4,
    belohnungsart: "coins",
    belohnungsmenge: 25
  },
  {
    ueberschrift: "Spiele 4 Spiele",
    art: "game",
    anzahl: 4,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Spiele 4 Spiele",
    art: "game",
    anzahl: 4,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Spiele 5 Spiele",
    art: "game",
    anzahl: 5,
    belohnungsart: "token",
    belohnungsmenge: 8
  },
  {
    ueberschrift: "Spiele 5 Spiele",
    art: "game",
    anzahl: 5,
    belohnungsart: "xp",
    belohnungsmenge: 100
  },
  {
    ueberschrift: "Spiele 5 Spiele",
    art: "game",
    anzahl: 5,
    belohnungsart: "coins",
    belohnungsmenge: 30
  },

/////////////

  {
    ueberschrift: "Spiele 1 Fehlerfreies Spiel",
    art: "perfectgame",
    anzahl: 1,
    belohnungsart: "coins",
    belohnungsmenge: 15
  },
  {
    ueberschrift: "Spiele 1 Fehlerfreies Spiel",
    art: "perfectgame",
    anzahl: 1,
    belohnungsart: "xp",
    belohnungsmenge: 30
  },
  {
    ueberschrift: "Spiele 1 Fehlerfreies Spiel",
    art: "perfectgame",
    anzahl: 1,
    belohnungsart: "token",
    belohnungsmenge: 5
  },
  {
    ueberschrift: "Spiele 2 Fehlerfreie Spiele",
    art: "perfectgame",
    anzahl: 2,
    belohnungsart: "token",
    belohnungsmenge: 10
  },
  {
    ueberschrift: "Spiele 2 Fehlerfreie Spiele",
    art: "perfectgame",
    anzahl: 2,
    belohnungsart: "xp",
    belohnungsmenge: 60
  },
  {
    ueberschrift: "Spiele 2 Fehlerfreie Spiele",
    art: "perfectgame",
    anzahl: 2,
    belohnungsart: "coins",
    belohnungsmenge: 30
  },

];


  for (let i = 0; i < 9; i++) {
    dailyTasks.push(...warscheinlicher);
  }
  
