class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    let myMap = new Map()
    
    for(let i=0; i < this.words.length; i++){
      let word = this.words[i]
      let nextWrd = this.words[i+1] || null
      
      if (myMap.has(word)) myMap.get(word).push(nextWrd)
      else myMap.set(word, [nextWrd])
    }
    this.myMap = myMap
  }

  makeText(numWords = 100) {
    
  }
}

