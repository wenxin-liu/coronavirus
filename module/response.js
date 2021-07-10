function decider(json) {
  let dates = [
    [0, 'yesterday'],
    [1, 'twoDaysAgo'],
    [2, 'threeDaysAgo'],
    [3, 'fourDaysAgo'],
    [4, 'fiveDaysAgo']
  ]

  dates.forEach(element => deciderLogic(element, json))
}

function deciderLogic(element, json) {
  if (json.data[element[0]].newDeaths > 30) {
    document.getElementById(element[1]).innerHTML = "Not looking good";
  } else {
    document.getElementById(element[1]).innerHTML = "OK";
  }
}
