let btn = document.getElementById('btn');
let output = document.getElementById('output');
let possessive = ["dog", "cat", "horse", "monkey", "old man", "uncle", "santa", "leader", "vandal", "dictator", "chancellor", "kitten", "chambermaid", "chevy", "bob", "jimmy", "martha", "winston", "bismark", "orson", "dandy" ];
let possession = ["stick", "wig", "spoon", "can", "pajamas", "trousers", "grenade", "foot", "shoe", "knickers", "button", "toy", "wheels", "jacket", "coat", "handles", "sting", "knee", "right-hand", "lick" ];

btn.addEventListener('click', function(){
  let phrase = "You're the '" + possessive[Math.floor(Math.random() * possessive.length)] + "'s " + possession[Math.floor(Math.random() * possession.length)] + "'!!"
  output.innerHTML = phrase;
})
                                     
                                







  

  
  

  






