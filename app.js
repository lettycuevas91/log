const express = require('express')
const app = express()

const { getAll, create } = require('./controllers/user')

// views
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.urlencoded())

// routes
app.get('/', async (req, res) => res.render('login'))
app.post("/login", async (req, res, next) => {
    try {
      const user = await User.authenticate(req.body.email, req.body.password);
      if (user) {
        req.userId = user._id;
        return res.redirect("/");
      }else {
        res.redirect("/login")
      }
    } catch (e) {
      return next(e)
    }
  });
app.get('/register', async (req, res) => res.render('register'))
app.post('/register', create)

app.get('/logout', async (req, res) => res.render('register'))




app.listen(3000, () => console.log('Listening on port 3000!'))

