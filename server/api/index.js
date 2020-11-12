const express = require('express');

const router = express.Router();

router.get('/pokemon', (req, res) => {
    const pokemon = [
        {
            name: 'Pikachu',
            description: 'pike',
            type1: 'Electric',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Scratch',
                    type: 'Normal',
                    power: '30',
                }
            ]
        },
        {
            name: 'Snorlax',
            description: 'snor',
            type1: 'Normal',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Body Slam',
                    type: 'Normal',
                    power: '100',
                }
            ]
        }
    ]
    res.status(200).json({ pokemon });
});

router.post('/pokemon', (req, res) => {
    const { pokemon } = req.body;
    const { name, description, type1, image, moves } = pokemon;
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'Invalid input' });
    } 
    else {
        const punchMoves = moves.filter((move) => move.name.includes('Punch'));
        res.status(200).json({ punchMoves });
    }
});

module.exports = router;