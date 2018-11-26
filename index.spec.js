const GarminNodeApi = require('./index.js');

async function fetchLotsOfData() {
  let api = new GarminNodeApi('mike.diamant@gmail.com', 'zaq1!QAZ');
  try {
    await api.login();
    console.log(await api.getSteps('2018-11-22', '2018-11-23'));
    console.log(await api.getActivities('2018-11-22', '2018-11-23'));
    console.log(await api.getDailyHeartRate('2018-11-22'));
    console.log(await api.getDailySleep('2018-08-01'));
  } catch (e) {
    console.error(e);
  }
}

(() => {
  fetchLotsOfData();
})();
