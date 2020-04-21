// const CURRENT_VERSION = 1;

// /**
//  * Map the API chart object to be what the database expects
//  * @param {object} chart - the API chart config
//  *
//  * @return {object} - chart config the db expects
//  * */
// const mapChartForDB = ({ compare, data, ...chart }) => ({
//   ...chart,
//   // move "compare" type into "data" column and add "version"
//   data: { ...data, compare },
//   version: CURRENT_VERSION,
// });

// /**
//  * Map the db chart object to be what the API expects
//  * @param {object} record - db record of the chart, or
//  *                          null if no record was found
//  *
//  * @return {object} - chart config the API expects
//  * */
// const mapChartFromDB = (record) => {
//   if (!record) return;
//   // bring "compare" type to top level and omit "version"
//   const {
//     version,
//     data: { compare, ...data },
//     ...chart
//   } = record;
//   return {
//     ...chart,
//     compare,
//     data,
//   };
// };

// module.exports = {
//   mapChartForDB,
//   mapChartFromDB,
// };
