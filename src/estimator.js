/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// import reportedCases from './data';

// const covid19ImpactEstimator = (data) =>{
//     data,
//     impact:{
//         currentlyInfected: data * 10,
//         infectionsByRequestedTime;

//     },
//     severeImpact:{
//         currentlyInfected: data * 50,
//         infectionsByRequestedTime;
//     }
// };

// export default covid19ImpactEstimator;

const impact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0,
    infectedPeoplePerDay: 0,
    infectedPeoplePer30Days: 0
};
const severeImpact ={
    currentlyInfected: 0,
    infectionsByRequestedTime: 0,
    infectedPeoplePerDay: 0,
    infectedPeoplePer30Days: 0,
};
const Data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };

  const covid19ImpactEstimator = (data) => {
      const input = data;
      impact.currentlyInfected = input.reportedCases *10;
      severeImpact.currentlyInfected = input.reportedCases * 50;
      impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
      severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;
      impact.infectedPeoplePerDay = Math.round(impact.infectionsByRequestedTime / 28);
      impact.infectedPeoplePer1weeek = impact.infectedPeoplePerDay * 7;
      impact.infectedPeoplePer30days = impact.infectedPeoplePerDay * 30;
      severeImpact.infectedPeoplePerDay = Math.round(severeImpact.infectionsByRequestedTime / 28);
      severeImpact.infectedPeoplePer1weeek = severeImpact.infectedPeoplePerDay * 7;
      severeImpact.infectedPeoplePer30days = severeImpact.infectedPeoplePerDay * 30;

      return {
          data: input,
          impact: {
              impact: impact.currentlyInfected,
              impactOver28Days: impact.infectionsByRequestedTime,
              impactPerDay: impact.infectedPeoplePerDay,
              impactOver1Week: impact.infectedPeoplePer1weeek,
              impactOver1Month: impact.infectedPeoplePer30days
          },
          severeImpact: {
              severeImpact: severeImpact.currentlyInfected,
              severeImpactOver28Days: severeImpact.infectionsByRequestedTime,
              severeImpactPerDay: severeImpact.infectedPeoplePerDay,
              severeImpactOver1Week: severeImpact.infectedPeoplePer1weeek,
              severeImpactOver1Month: severeImpact.infectedPeoplePer30days
          }
      };
  };
  export default covid19ImpactEstimator;

