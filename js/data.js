var pokemons = {
        names: [
          {
            name: "Charizard",
            type: "Flying, Fire",
            weakness: "Electric, Water, Rock",
            ability: "Blaze",
            evolvesFrom: "Charmeleon",
            image:"charizard.png",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
            class: "flying fire"
          },
          {
            name: "Charmelleon",
            type: "Fire",
            class: "fire",
            ability:"Blaze",
            weakness: "Water, Ground, Rock",
            evolvesFrom:"Charmander",
            evolvesTo:"Charizard",
            image: "charmelleon.png"
          },
          {
          name: "Charmander",
          type: "Fire",
          class: "fire",
          ability:"Blaze",
          weakness: "Water, Ground, Rock",
          evolvesTo:"Charmeleon",
          image: "charmander.png",
          flying: "Yes"
          }, 
          {
            name: "Bulbasaur",
            type: "Grass, Poison",
            class: "grass poison",
            ability:"Overgrow",
            weakness: "Psychic, Ice, Flying, Fire",
            evolvesTo:"Ivysaur",
            image: "bulbasaur.png"
          }, {
            name: "Blastoise",
            type: "Water",
            class: "water",
            ability:"Torrent",
            weakness: "Electric, Grass",
            image: "blastoise.png",
            evolvesFrom:"Wartortle",
            flying: "Yes"
          }, {
            name: "Celebi",
            type: "Psychic, Grass",
            class: "psychic grass",
            ability:"Natural Cure",
            weakness: "Dark, Bug, Ice, Poison, Flying, Fire, Ghost",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
            image: "celebi.png"
          },{
            name: "Dragonite",
            type: "Flying, Dragon",
            class: "flying dragon",
            ability:"Inner Focus",
            weakness: "Rock, Ice, Dragon, Fairy",
            evolesFrom:"Dragonair",
            image: "dragonite.png",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
          },{
            name: "Eevee",
            type: "Normal",
            class: "normal",
            ability:"Adaptability, Run Away",
            emojiType: "<i class='fas fa-fire'></i>",
            weakness: "Fighting",
            evolvesTo:"Espeon, Umbreon, Sylveon, Vaporeon, Flareon, Jolteon, Leafeon, Glaceon",
            image: "eevee.png"
          },{
            name: "Pichu",
            type: "Electric",
            class: "electric",
            ability:"Static",
            weakness: "Ground",
            image: "pichu.png",
            evolvesTo:"Pikachu"
          },{
            name: "Ditto",
            type: "Normal",
            class: "normal",
            ability:"Limber",
            abilityHidden:"Imposter",
            weakness: "Fighting",
            image: "ditto.png"
          },{
            name: "Gengar",
            type: "Poison, Ghost",
            class: "poison ghost",
            abiliy:"Cursed Body, Levitate",
            weakness: "Psychic, Dark, Ghost",
            image: "gengar.png",
            evolesFrom:"Haunter"
          },
          {
            name: "Magikarp",
            class: "water",
            type: "Water",
            ability:"Swift Swim",
            weakness: "Electric, Grass",
            evolvesTo:"Gyarados",
            image: "magikarp.png"
          },
          {
            name: "Jigglypuff",
            type: "Normal, Fairy",
            class: "normal fairy",
            ability:"Cute Charm, Competitive",
            weakness: "Poison, Steel",
            evolvesFrom:"Igglybuff",
            evolvesTo:"Wigglytuff",
            image: "jigglypuff.png"
          },
          {
            name: "Mew",
            type: "Psychic",
            class: "psychic",
            abiliy:"Synchronize",
            weakness: "Dark, Bug, Ghost",
            image: "mew.png"
          },
          {
            name: "Mewtwo",
            type: "Psychic",
            class: "psychic",
            ability:"Pressure",
            weakness: "Dark, Bug, Ghost",
            image: "mewtwo.png"
          },
          {
            name: "Raichu",
            type: "Electric",
            class: "electric",
            ability:"Static",
            weakness: "Ground",
            image: "raichu.png",
            evolesFrom:"Pikachu"
          }, 
          {
            name: "Pikachu",
            type: "Electric",
            class: "electric",
            ability:"Static",
            weakness: "Ground",
            image: "pikachu.png",
            evolesFrom:"Pichu"
          },  
          {
            name: "Snorlax",
            type: "Normal",
            class: "normal",
            ability:"Thick Fat, Immunity",
            weakness: "Fighting",
            image: "snorlax.png",
            evolesFrom:"Munchlax"
          },        
          {
            name: "Lapras",
            type: "Water, Ice",
            class: "normal",
            ability:"Shell Armor, Water Absorb",
            weakness: "Electric, Rock, Grass, Fighting",
            image: "lapras.png",
          },  
          {
            name: "Gyarados",
            type: "Water, Flying",
            class: "normal",
            ability:"Intimidate",
            weakness: "Electric, Rock",
            image: "gyarados.png",
            evolvesFrom: "Magikarp"
          },
        ]
      };
