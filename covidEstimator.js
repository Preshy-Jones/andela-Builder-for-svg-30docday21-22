let input_data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 28,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
}

let output_data = {
    data: {}, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
}

let covid19ImpactEstimator = (input_data) => {
    let impact = {}
    let severeImpact = {}
    let days = input_data.timeToElapse;
    if (input_data.periodType === "weeks") {
        days = input_data.timeToElapse *= 7
    } else if (input_data.periodType === "months") {
        days = input_data.timeToElapse *= 30
    };

    let factor = Math.floor(days / 3)
    return days;
    //return factor
    //currentlyInfected
    // impact.currentlyInfected = Math.round(input_data.reportedCases * 10);
    // severeImpact.currentlyInfected = Math.round(input_data.reportedCases * 50);

    // //infectionsByRequestedTime
    // impact.infectionsByRequestedTime = Math.round(impact.currentlyInfected * Math.pow(2, factor));
    // severeImpact.infectionsByRequestedTime = Math.round(severeImpact.currentlyInfected * Math.pow(2, factor));

    // //severeCasesByRequestedTime
    // impact.severeCasesByRequestedTime = Math.round(impact.infectionsByRequestedTime * 0.15);
    // severeImpact.severeCasesByRequestedTime = Math.round(severeImpact.infectionsByRequestedTime * 0.15);

    // //hospitalBedsByRequestedTime
    // impact.hospitalBedsByRequestedTime = Math.round((input_data.totalHospitalBeds * 0.35) - impact.severeCasesByRequestedTime);
    // severeImpact.hospitalBedsByRequestedTime = Math.round((input_data.totalHospitalBeds * 0.35) - severeImpact.severeCasesByRequestedTime);

    // impact.casesForICUByRequestedTime = Math.round(impact.infectionsByRequestedTime * 0.5);
    // severeImpact.casesForICUByRequestedTime = Math.round(severeImpact.infectionsByRequestedTime * 0.5);

    // impact.casesForVentilatorsByRequestedTime = Math.round(impact.infectionsByRequestedTime * 0.2);
    // severeImpact.casesForVentilatorsByRequestedTime = Math.round(severeImpact.infectionsByRequestedTime * 0.2);

    // impact.dollarsInFlight = Math.round((impact.infectionsByRequestedTime * input_data.region.avgDailyIncomePopulation * input_data.region.avgDailyIncomeInUSD / days));
    // severeImpact.dollarsInFlight = Math.round((severeImpact.infectionsByRequestedTime * input_data.region.avgDailyIncomePopulation * input_data.region.avgDailyIncomeInUSD) / days);

    // return JSON.stringify({
    //     data: input_data,
    //     impact: impact,
    //     severeImpact: severeImpact
    // })
}

//console.log(covid19ImpactEstimator(input_data));

module.exports = covid19ImpactEstimator