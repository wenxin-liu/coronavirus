function decider(json) {
  let dates = [[0, 'yesterday'], [1, 'dayBeforeYesterday'], [2, 'dayDayBeforeYesterday']]

  dates.forEach(element => deciderLogic(element, json))
}

function deciderLogic(element, json) {
  if (json.data[element[0]].newDeaths > 30) {
    document.getElementById(element[1]).innerHTML = "Not looking good";
  } else {
    document.getElementById(element[1]).innerHTML = "OK";
  }
}

const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newDeaths":"newDeaths28DaysByPublishDate"}'
);

axios.get(endpoint)
  .then(response => {
    console.log(response.data);
    decider(response.data);
  })
  .catch(error => console.error(error));
