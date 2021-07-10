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
