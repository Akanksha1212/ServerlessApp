'use strict';

module.exports.hello = (event, context, callback) => {
  
  if(event.queryStringParameters && event.queryStringParameters.name)
  {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(
      {
        message: 'Hello ' + event.queryStringParameters.name + ' nice to meet you!',
      }),
    })
  }
  
  if(event.httpMethod=== "POST" && event.body)
  {
    let json = JSON.parse(event.body)

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(
      {
        message: 'Hi I have received an object',
        object: json
      }),
    })
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Yayy! Your function executed successfully!',
        input: event,
      }),
  };

  callback(null, response);

  };