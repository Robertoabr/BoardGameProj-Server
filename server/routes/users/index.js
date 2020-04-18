'use strict';

// const { baseUrl } = require('../../../utilities');
// const { handleGet } = require('./methods/get');
// const {
//   handlePost,
//   handleFetchingTrendsByChartId,
// } = require('./methods/post');
// const { handlePut } = require('./methods/put');
// const { handleDelete } = require('./methods/delete');
// const {
//   params,
//   chartRequestBody,
//   chartResponseBody,
// } = require('./schema');
// const { trendsResponse } = require('../trends/schema');
// const {
//   responseTypes,
//   modifyResponseType,
// } = require('../../../utilities');
// const tags = ['api', 'v1', 'charts'];
// const chartsBaseUrl = `${baseUrl}/v1/charts`;

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

