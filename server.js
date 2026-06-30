/*const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simular autenticación básica
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = router.db.getState();
  const user = db.users.find(u => u.username === username && u.password === password);
  
  if (user) {
    res.jsonp({ success: true, user });
  } else {
    res.status(401).jsonp({ error: "Credenciales incorrectas" });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

*/