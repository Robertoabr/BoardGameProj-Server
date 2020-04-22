// 'use strict';

// // bring in baseURL from a utilities file
// const { baseUrl } = require('../../../utilities');

// // bring in all the handler functions from the methods folders
// const { handleGet } = require('./methods/get');
// const {
//   handlePost,
//   handleFetchingTrendsByChartId,
// } = require('./methods/post');
// const { handlePut } = require('./methods/put');
// const { handleDelete } = require('./methods/delete');

// // bring in the required schema objects
// const {
//   params,
//   chartRequestBody,
//   chartResponseBody,
// } = require('./schema');
// const { trendsResponse } = require('../trends/schema');

// // some sort of plugin setup / need to look up hapi-swaggered??
// const {
//   responseTypes,
//   modifyResponseType,
// } = require('../../../utilities');

// // not sure what these tags do , I think this is for documentation
// const tags = ['api', 'v1', 'charts'];

// // building the final URL step by step
// const chartsBaseUrl = `${baseUrl}/v1/charts`;

// // export this big 'route object' as array with all other user route objs
// module.exports = [
//   {
//     method: 'GET',
//     path: `${chartsBaseUrl}/{id}`,
//     handler: handleGet,
//     options: {
//       description: 'Get a chart by id',
//       notes: 'Returns the chart object with given id',
//       tags,
//       validate: {
//         params,
//       },
//       response: {
//         schema: chartResponseBody,
//         failAction: 'error',
//       },
//       plugins: {
//         'hapi-swaggered': {
//           responses: responseTypes.all,
//         },
//       },
//     },
//   },
// ];
