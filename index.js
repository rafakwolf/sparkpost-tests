const http = require('http');
const SparkPost = require('sparkpost');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    var client = new SparkPost('e7091a223229e018d4cd045ddd2afeab73b88fc6');
    client.transmissions.send({
        options: {
          sandbox: true
        },
        content: {
          from: 'testing@sparkpostbox.com',
          subject: 'Hello, World!',
          html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
        },
        recipients: [
          {address: 'rafael.wolf@wedeploy.com'}
        ]
      })
      .then(data => {
        console.log('Woohoo! You just sent your first mailing!');
        console.log(data);
      })
      .catch(err => {
        console.log('Whoops! Something went wrong');
        console.log(err);
      });

    res.write('sending...');
    res.end();
});

server.listen(3009, '127.0.0.1', () => {
    console.log('Listening on port 3009');
});
