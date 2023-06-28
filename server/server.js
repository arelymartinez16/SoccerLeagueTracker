const PORT = process.env.PORT ?? 8000;
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express();
const pool = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')

app.use(cors())
app.use(express.json())

// try to show league standings from the 2022-2023 season
app.get("/league/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const standing = await axios.get(`https://api-football-standings.azharimm.dev/leagues/${id}/standings?season=2022&sort=asc`);
        const data = standing.data.data.standings
        res.json(data);
    } catch (err) {
        console.error(err)
    }
}) 

// get recent news from each league
app.get("/news/:id", async (req, res) => {
    const { id } = req.params;

    const options = {
        method: 'GET',
        url: `https://football98.p.rapidapi.com/${id}/news`,
        headers: {
          'X-RapidAPI-Key': `${process.env.API_KEY}`,
          'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
      };

    try {
        const recentNews = await axios.get(options)
        res.json(recentNews.data)
    } catch (err) {
        console.error(err)
    }
}) 

// get recent videos for home page
app.get("/home", async (req, res) => {
    try {
        const videos = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${process.env.ACCESS_TOKEN}`)
        const data = videos.data.response;
        res.json(data)
    } catch (err) {
        console.error(err)
    }
})

// Credit for the signup and login endpoint: Ania Kubow
// signup endpoint
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {
        const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`, [email, hashedPassword])
        const token = jwt.sign({ email }, "secret", { expiresIn: '1hr' })
        res.json({ email, token })
    } catch (err) {
        console.error(err);
        if (err) {
            res.json({detail: err.detail})
        }
    }
})

// login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if (!users.rows.length) {
            return res.json({ detail: "User does not exist." })
        }
        
        const success = await bcrypt.compare(password, users.rows[0].hashed_password)
        const token = jwt.sign({ email }, "secret", { expiresIn: '1hr' })

        if (success) {
            res.json({ 'email' : users.rows[0].email, token })
        }
        else {
            res.json({ detail: "Login failed" })
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));