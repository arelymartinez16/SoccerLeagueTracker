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

app.get("/league/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const standings = await axios.get(`https://api-football-standings.azharimm.dev/leagues/${id}/standings?season=2022`);
        res.json(standings.data);
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));