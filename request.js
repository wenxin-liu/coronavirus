var time = new Date((Date.now() - 86400000));

var year = time.getFullYear();

var month = time.getMonth()+1;
if (month < 10) {
  month = `0${month}`
} else month

var day = time.getDate();

var yesterday = `${year}-${month}-${day}`;

const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    `filters=areaType=nation;areaName=england;date=${yesterday}&` +
    'structure={"date":"date","newDeaths":"newDeathsByDeathDate"}'
);


const getData = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData


const main = async () => {

    const result = await getData(endpoint);

    if (result.data[0].newDeaths > 400) {
      document.getElementById("covid").innerHTML = "Not looking good";
    } else {
      document.getElementById("covid").innerHTML = "OK";
    }


};  // main


main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});
