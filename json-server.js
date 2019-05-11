const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser);
server.use(middlewares);

const testUser = {
  email: 'feyyaz@test.com',
  password: '1234'
};

const testProfile = {
  email: 'feyyaz@test.com',
  firstName: 'Feyyaz',
  lastName: 'Akkuş'
};

const testToken = 'example-token';

const authUser = (req) => {
  return req.body.email === testUser.email && req.body.password === testUser.password;
}

server.post('/auth', (req, res) => {
  if (authUser(req)) {
    res.status(200).json({
      success: true,
      token: testToken,
      profile: testProfile
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Email or password incorrect'
    });
  }
});

server.post('/register', (req, res) => {
  res.status(200).json({
    success: true
  });
});

server.get('/profile', (req, res) => {
  console.log(req.headers);
  res.status(200).json({
    success: true,
    profile: testProfile
  });
});

server.listen(5000, () => {
  console.log('JSON Server is running..');
});
