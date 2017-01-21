

var zodiacs = [
  {
    name: 'Aries',
    dates: '21 March - 20 April',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Taurus',
    dates: '21 April - 21 May',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Gemini',
    dates: '22 May - 21 June',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Cancer',
    dates: '22 June - 22 July',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Leo',
    dates: '23 July - 22 August',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Virgo',
    dates: '23 August - 23 September',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Libra',
    dates: '23 September - 23 October',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Scorpipo',
    dates: '24 October - 22 November',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Sagittarius',
    dates: '23 November - 21 December',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Capricorn',
    dates: '22 December - 20 January',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Aquarius',
    dates: '21 January - 19 February',
    characteristics:'',
    compatability: ''
  },
  {
    name: 'Pisces',
    dates: '20 February - 20 March',
    characteristics:'',
    compatability: ''
  }
];

function getInfo() {
    var zodiac = document.getElementById("ZodiacName").value
    for(var i = 0; i < zodiacs.length; i++) {
      if(zodiac === zodiacs[i].name) {
        document.write("Name: ", zodiacs[i].name)
        document.write("Dates: ", zodiacs[i].dates)
        return
      }
    } document.write("incorrect spelling or capitalization!")
}
