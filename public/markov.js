/* Algo de Markov */

const Phrases = [
  "les plus belles plages du monde en Alsace sont sûrement celles le long du Rhin",
  "le blason de l'Alsace est en fait une juxtaposition de deux blasons historiques, celui du landgraviat de Haute-Alsace et celui de Basse-Alsace qui est représenté contourné.",
  "un bon petit vin d'Alsace vaut mieux qu'une ruade d'âne",
  "le pauvre homme n'a que deux amis, sa pomme de terre et son cochon",
  "bonne nourriture coûte, mais mauvaise nourriture coûte encore plus cher",
  "le hibou raille tous les oiseaux parce qu'il en est le plus laid",
  "la moitié d'un œuf vaut mieux qu'une coquille entière",
  "les carpes frites sont une spécialité du Sundgau",
  "la maison à colombage est symbolique de l'Alsace, mais il existe d'autres architectures alsaciennes",
  "la cathédrale de Strasbourg est une cathédrale catholique romaine représentative de l'architecture gothique",
  "la cité du train à Mulhouse est le plus grand musée ferroviaire d'Europe",
  "l'écomusée est un village alsacien traditionnel reconstitué de toutes pièces sur une friche industrielle du bassin potassique",
  "de bonnes promenades sur la route des Crêtes",
  "baeckeoffe, un ragoût de viande marinée cuit lentement avec des pommes de terre et des légumes",
  "pain d'épices, un gâteau épicé et sucré souvent servi en dessert ou comme collation"
]

// Constitution du dictionnaire de mots
let Mots = []
for (let i = 0; i < Phrases.length; i++) {
  Mots = Mots.concat(Phrases[i].split(" "))
}
let MotsUniques = [...new Set(Mots)]

let Dictionnaire = []
for (let j = 0; j < MotsUniques.length; j++) {
  Dictionnaire.push([])
}

let PremierMot

for (let j = 0; j < MotsUniques.length; j++) {
  PremierMot = MotsUniques[j]
  for (let k = 0; k < Phrases.length; k++) {
    let SplitPhrase = Phrases[k].split(" ")
    for (let l = 0; l < SplitPhrase.length; l++) {
      if (SplitPhrase[l] === PremierMot && l + 1 !== SplitPhrase.length) {
        Dictionnaire[j] = Dictionnaire[j].concat(SplitPhrase[l + 1])
      }
    }
  }
}

// Génération
function generate() {
  
  let NouvellePhrase = []
  let Result = []

  for (let m = 0; m < 10; m++) {
    let Choix = Math.floor(Math.random() * (MotsUniques.length - 0) + 0)

    if (Dictionnaire[Choix].length !== 0) {
      let Generation = 1
      PremierMot = MotsUniques[Choix]
      NouvellePhrase = NouvellePhrase.concat(PremierMot)
      let ListeSuivante = Dictionnaire[MotsUniques.indexOf(PremierMot)]

      while (Generation !== 0) {
        Choix = Math.floor(Math.random() * (ListeSuivante.length - 0) + 0)
        let NextWord = ListeSuivante[Choix]
        let NextWordIndex = MotsUniques.indexOf(NextWord)
        if (Dictionnaire[NextWordIndex].length !== 0) {
          NouvellePhrase = NouvellePhrase.concat(NextWord)
          ListeSuivante = Dictionnaire[MotsUniques.indexOf(NextWord)]
          if (ListeSuivante.length === 0) {
            Generation = 0
          }
        } else {
          NouvellePhrase = NouvellePhrase.concat(NextWord)
          Generation = 0
        }
      }
    }

    let PhraseFinale = NouvellePhrase.join(" ")
    if (
      Phrases.includes(PhraseFinale) === false &&
      PhraseFinale.length !== 0
    ) {
      Result.push(PhraseFinale)
    } else {
      m--
    }
    NouvellePhrase = []
  }

  return Result

}

// console.log(generate())
