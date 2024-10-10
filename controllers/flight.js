import query from '../config/db.js';

const flightControllers = {
    // Get all the flights
    getAll: async (req, res) => {
        try {
            const strQuery = `SELECT * FROM flights`;
            const result = await query(strQuery);
            res.status(200).send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },

    // Get a flight from ID
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const strQuery = `SELECT * FROM flights WHERE id=?`;
            const params = [id];
            const result = await query(strQuery, params);
            if (result.length === 0) {
                return res.status(404).send('Flight not found');
            }
            res.status(200).send(result[0]);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },

    // Add a flight
    add: async (req, res) => {
        try {
            const { departure, time, arrive, price } = req.body;

            // Validazione semplice
            if (!departure || !time || !arrive || isNaN(price)) {
                return res.status(400).send('All fields are required and price must be a number');
            }

            const sqlQuery = `INSERT INTO flights (departure, time, arrive, price) VALUES (?, ?, ?, ?)`;
            const params = [departure, time, arrive, parseFloat(price)];
            const result = await query(sqlQuery, params);
            res.status(201).send('Flight added successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    // update an existing flight
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { departure, time, arrive, price } = req.body;

            // Validazione semplice
            if (!departure || !time || !arrive || isNaN(price)) {
                return res.status(400).send('All fields are required and price must be a number');
            }

            const sqlQuery = `UPDATE flights SET departure=?, time=?, arrive=?, price=? WHERE id=?`;
            const params = [departure, time, arrive, parseFloat(price), id];
            const result = await query(sqlQuery, params);

            if (result.affectedRows === 0) {
                return res.status(404).send('Flight not found');
            }

            res.status(200).send('Flight updated successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    // Delete from ID
    remove: async (req, res) => {
        try {
            const { id } = req.params;
            const strQuery = `DELETE FROM flights WHERE id=?`;
            const params = [id];
            const result = await query(strQuery, params);

            if (result.affectedRows === 0) {
                return res.status(404).send('Flight not found');
            }

            res.status(200).send('Flight deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};

export default flightControllers;
