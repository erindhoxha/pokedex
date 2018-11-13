var pokemons = {
        names: [
          {
            name: "Charizard",
            type: "Flying, Fire",
            weakness: "Electric, Water, Rock",
            wclass: "weakness weakness-electric weakness-water weakness-rock",
            ability: "Blaze",
            evolvesFrom: "Charmeleon",
            image:"charizard.png",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
            class: "type flying fire",
            flies: "yes"
          },
          {
            name: "Charmelleon",
            type: "Fire",
            class: "type fire",
            ability:"Blaze",
            weakness: "Water, Ground, Rock",
            wclass: "weakness weakness-water weakness-ground weakness-rock",
            evolvesFrom:"Charmander",
            evolvesTo:"Charizard",
            image: "charmelleon.png"
          },
          {
          name: "Charmander",
          type: "Fire",
          class: "type fire",
          wclass: "weakness weakness-water weakness-ground weakness-rock",
          ability:"Blaze",
          weakness: "Water, Ground, Rock",
          evolvesTo:"Charmeleon",
          image: "charmander.png",
          flying: "Yes",
          flies: "yes"
          }, 
          {
            name: "Bulbasaur",
            type: "Grass, Poison",
            class: "type grass poison",
            ability:"Overgrow",
            weakness: "Psychic, Ice, Flying, Fire",
            wclass: "weakness weakness-psychic weakness-ice weakness-flying weakness-fire",
            evolvesTo:"Ivysaur",
            image: "bulbasaur.png"
          }, {
            name: "Blastoise",
            type: "Water",
            class: "type water",
            ability:"Torrent",
            wclass: "weakness weakness-electric weakness-grass",
            weakness: "Electric, Grass",
            image: "blastoise.png",
            evolvesFrom:"Wartortle",
            flying: "Yes"
          }, {
            name: "Celebi",
            type: "Psychic, Grass",
            wclass: "weakness weakness-dark weakness-bug weakness-ice weakness-poison weakness-flying weakness-fire weakness-ghost",
            class: "type psychic grass",
            ability:"Natural Cure",
            weakness: "Dark, Bug, Ice, Poison, Flying, Fire, Ghost",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
            image: "celebi.png"
          },{
            name: "Dragonite",
            type: "Flying, Dragon",
            class: "type flying dragon",
            wclass: "weakness weakness-rock weakness-ice weakness-dragon weakness-fairy",
            ability:"Inner Focus",
            weakness: "Rock, Ice, Dragon, Fairy",
            evolesFrom:"Dragonair",
            image: "dragonite.png",
            flying: "<i style='color:green' class='fas fa-check-square'></i>",
          },{
            name: "Eevee",
            type: "Normal",
            class: "type normal",
            ability:"Adaptability, Run Away",
            wclass: "weakness weakness-fighting",
            emojiType: "<i class='fas fa-fire'></i>",
            weakness: "Fighting",
            evolvesTo:"Espeon, Umbreon, Sylveon, Vaporeon, Flareon, Jolteon, Leafeon, Glaceon",
            image: "eevee.png"
          },{
            name: "Pichu",
            type: "Electric",
            class: "type electric",
            wclass: "weakness weakness-ground",
            ability:"Static",
            weakness: "Ground",
            image: "pichu.png",
            evolvesTo:"Pikachu"
          },{
            name: "Ditto",
            type: "Normal",
            wclass: "weakness weakness-fighting",
            class: "type normal",
            ability:"Limber",
            abilityHidden:"Imposter",
            weakness: "Fighting",
            image: "ditto.png"
          },{
            name: "Gengar",
            type: "Poison, Ghost",
            wclass: "weakness weakness-psychic weakness-dark weakness-ghost",
            class: "type poison ghost",
            abiliy:"Cursed Body, Levitate",
            weakness: "Psychic, Dark, Ghost",
            image: "gengar.png",
            evolesFrom:"Haunter"
          },
          {
            name: "Magikarp",
            class: "type water",
            type: "Water",
            wclass: "weakness weakness-electric weakness-grass",
            ability:"Swift Swim",
            weakness: "Electric, Grass",
            evolvesTo:"Gyarados",
            image: "magikarp.png"
          },
          {
            name: "Jigglypuff",
            type: "Normal, Fairy",
            class: "type normal fairy",
            wclass: "weakness weakness-poison weakness-steel",
            ability:"Cute Charm, Competitive",
            weakness: "Poison, Steel",
            evolvesFrom:"Igglybuff",
            evolvesTo:"Wigglytuff",
            image: "jigglypuff.png"
          },
          {
            name: "Mew",
            type: "Psychic",
            class: "type psychic",
            wclass: "weakness weakness-dark weakness-bug weakness-ghost",
            abiliy:"Synchronize",
            weakness: "Dark, Bug, Ghost",
            image: "mew.png"
          },
          {
            name: "Mewtwo",
            type: "Psychic",
            class: "type psychic",
            wclass: "weakness weakness-dark weakness-bug weakness-ghost",
            ability:"Pressure",
            weakness: "Dark, Bug, Ghost",
            image: "mewtwo.png"
          },
          {
            name: "Raichu",
            type: "Electric",
            class: "type electric",
            wclass: "weakness weakness-ground",
            ability:"Static",
            weakness: "Ground",
            image: "raichu.png",
            evolesFrom:"Pikachu"
          }, 
          {
            name: "Pikachu",
            type: "Electric",
            wclass: "weakness weakness-ground",
            class: "type electric",
            ability:"Static",
            weakness: "Ground",
            image: "pikachu.png",
            evolesFrom:"Pichu"
          },  
          {
            name: "Snorlax",
            type: "Normal",
            wclass: "weakness weakness-fighting",
            class: "type normal",
            ability:"Thick Fat, Immunity",
            weakness: "Fighting",
            image: "snorlax.png",
            evolesFrom:"Munchlax"
          },        
          {
            name: "Lapras",
            type: "Water, Ice",
            wclass: "weakness weakness-eletric weakness-rock weakness-grass weakness-fighting",
            class: "type normal",
            ability:"Shell Armor, Water Absorb",
            weakness: "Electric, Rock, Grass, Fighting",
            image: "lapras.png",
          },  
          {
            name: "Gyarados",
            type: "Water, Flying",
            class: "type normal",
            wclass: "weakness weakness-eletric weakness-rock",
            ability:"Intimidate",
            weakness: "Electric, Rock",
            image: "gyarados.png",
            evolvesFrom: "Magikarp"
          },
        ]
      };
