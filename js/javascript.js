

var zodiacs = [
  {
    name: 'aries',
    dates: '21 March - 20 April',
    characteristics:'You got a hot head and a love for blood.',
    image: 'img/aries.png'
  },
  {
    name: 'taurus',
    dates: '21 April - 21 May',
    characteristics:'No time for bull sh since you are the bull.',
    image: 'img/taurus.jpg'
  },
  {
    name: 'gemini',
    dates: '22 May - 21 June',
    characteristics:'twins and twin stuff is what you are into.',
    image: 'img/gemini.png'
  },
  {
    name: 'cancer',
    dates: '22 June - 22 July',
    characteristics:'unfortunate name for you haha',
    image: 'img/cancer.jpg'
  },
  {
    name: 'leo',
    dates: '23 July - 22 August',
    characteristics:'the big cat of the gang',
    image: 'img/leo.png'
  },
  {
    name: 'virgo',
    dates: '23 August - 23 September',
    characteristics:'lol i think you are a virgin or something',
    image: 'img/virgo.jpg'
  },
  {
    name: 'libra',
    dates: '23 September - 23 October',
    characteristics:'be free young one hahaha',
    image: 'img/libra.png'
  },
  {
    name: 'scorpipo',
    dates: '24 October - 22 November',
    characteristics:'scorpian life style like that move drive haha',
    image: 'img/scorpipo.png'
  },
  {
    name: 'sagittarius',
    dates: '23 November - 21 December',
    characteristics:'I didnt have much to say about this',
    image: 'img/sagittarius.png'
  },
  {
    name: 'capricorn',
    dates: '22 December - 20 January',
    characteristics:'no clue',
    image: 'img/capricorn.jpg'
  },
  {
    name: 'aquarius',
    dates: '21 January - 19 February',
    characteristics:'be like water',
    image: 'img/aquarius.png'
  },
  {
    name: 'pisces',
    dates: '20 February - 20 March',
    characteristics:'piece of pie',
    image: 'img/pisces.png'
  }
];

function getInfo() {
    var zodiac = document.getElementById("ZodiacName").value.toLowerCase();
    for(var i = 0; i < zodiacs.length; i++) {
      if(zodiac === zodiacs[i].name) {
        document.getElementById("name").innerHTML = ("Name: "+ zodiacs[i].name);
        document.getElementById("dates").innerHTML = ("Dates: " + zodiacs[i].dates);
        document.getElementById("characteristics").innerHTML = ("characteristics: " + zodiacs[i].characteristics);
        document.getElementById("image").src = zodiacs[i].image;
        return
      }
    } document.getElementById("name").innerHTML = ("misspelling or nonexistent sign, try again!")
}
