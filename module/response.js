function decider(json) {
  let dates = [
    [0, 'yesterday'],
    [1, 'twoDaysAgo'],
    [2, 'threeDaysAgo'],
    [3, 'fourDaysAgo'],
    [4, 'fiveDaysAgo'],
    [5, 'sixDaysAgo'],
    [6, 'sevenDaysAgo']
  ]

  dates.forEach(element => deciderLogic(element, json))
}

function deciderLogic(element, json) {
  switch (true) {
    case (json.data[element[0]].newDeaths >= 100 && json.data[element[0]].newDeaths < 200):
      document.getElementById(element[1]).innerHTML = "Could be worse";
      break;
    case (json.data[element[0]].newDeaths >= 200 && json.data[element[0]].newDeaths < 400):
      document.getElementById(element[1]).innerHTML = "Not looking good";
      break;
    case (json.data[element[0]].newDeaths >= 400 && json.data[element[0]].newDeaths < 600):
      document.getElementById(element[1]).innerHTML = "Looking bad";
      break;
    case (json.data[element[0]].newDeaths >= 600 && json.data[element[0]].newDeaths < 800):
      document.getElementById(element[1]).innerHTML = "Severely bad";
      break;
    case (json.data[element[0]].newDeaths >= 800 && json.data[element[0]].newDeaths < 900):
      document.getElementById(element[1]).innerHTML = "Shit is about to hit the fan";
      break;
    case (json.data[element[0]].newDeaths >= 900 && json.data[element[0]].newDeaths < 1000):
      document.getElementById(element[1]).innerHTML = "Apocalypse";
      break;
    case (json.data[element[0]].newDeaths >= 1000 && json.data[element[0]].newDeaths < 1100):
      document.getElementById(element[1]).innerHTML = "Mega apocalypse";
      break;
    case (json.data[element[0]].newDeaths >= 1100 && json.data[element[0]].newDeaths < 1200):
      document.getElementById(element[1]).innerHTML = "Mega mega apocalypse";
      break;
    case (json.data[element[0]].newDeaths >= 1200 && json.data[element[0]].newDeaths < 1300):
      document.getElementById(element[1]).innerHTML = "Super-duper-apocalyptic";
      break;
    case (json.data[element[0]].newDeaths >= 1300 && json.data[element[0]].newDeaths < 1400):
      document.getElementById(element[1]).innerHTML = "Have run out of words for how bad it is";
      break;
    case (json.data[element[0]].newDeaths >= 1400 && json.data[element[0]].newDeaths < 1500):
      document.getElementById(element[1]).innerHTML = "Insane";
      break;
    case (json.data[element[0]].newDeaths >= 1500 && json.data[element[0]].newDeaths < 1600):
      document.getElementById(element[1]).innerHTML = "Record levels of insanity";
      break;
    case (json.data[element[0]].newDeaths >= 1600 && json.data[element[0]].newDeaths < 1700):
      document.getElementById(element[1]).innerHTML = "Insane-mega-super-duper apocalypse";
      break;
    case (json.data[element[0]].newDeaths >= 1700):
      document.getElementById(element[1]).innerHTML = "Just... just stay at home";
      break;
    default:
      document.getElementById(element[1]).innerHTML = "As good as it can be";
  }
}
