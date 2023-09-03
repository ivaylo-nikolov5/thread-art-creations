// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
// var fs = require('fs');

async function removeBg(imgUrl) {
    request.post({
        url: 'https://clippingmagic.com/api/v1/images',
        formData: {
          'image.url': imgUrl, // TODO: Replace with your image
          format: 'result',
          test: 'true', // TODO: Remove for production
          // TODO: Add more upload options here
        },
        auth: {user: '17361', pass: '95v0ktc492n2ju1pshmkhp8il5ii7gp27q2j44311icvvl9v14tb'},
        followAllRedirects: true,
        encoding: null
      }, function(error, response, body) {
        if (error) {
          console.error('Request failed:', error);
        } else if (!response || response.statusCode != 200) {
          console.error('Error:', response && response.statusCode, body.toString('utf8'));
        } else {
          // Store these if you want to be able to use the Smart Editor
        //   let imageId = response.caseless.get('x-amz-meta-id');
        //   let imageSecret = response.caseless.get('x-amz-meta-secret');
      
          // Save result
          return body;
        }
      });
}

export default removeBg;