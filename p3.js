const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const json = JSON.parse(data);
    const cleanObject = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string') {
          if (obj[key] === 'N/A' || obj[key] === '-' || obj[key] === '') {
            delete obj[key];
          }
        } else if (Array.isArray(obj[key])) {
          obj[key] = obj[key].filter((item) => {
            return item !== 'N/A' && item !== '-' && item !== '';
          });
        } else if (typeof obj[key] === 'object') {
          cleanObject(obj[key]);
        }
      });
    };

    
    cleanObject(json);
    console.log(JSON.stringify(json));
  });
}).on('error', (error) => {
  console.error('Error:', error.message);
});
