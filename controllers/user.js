import query from '../config/db.js';

const userControllers = {
    getAll: async (req, res) => {
        try {
            const strQuery = `SELECT * FROM users`;
            const result = await query(strQuery);
            res.status(200).send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send('internal server error');
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const strQuery = `SELECT * FROM users WHERE id=?`;
            const params = [id];
            const result = await query(strQuery, params);
            res.status(200).send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send('internal server error');
        }
    },
    add: async (req, res) => {
        try {
            // La query SQL corretta
            const sqlQuery = `INSERT INTO users (email, password) VALUES (?, ?)`;

            // I parametri da inserire nella query
            const params = ['carletto@gmail.com', '2qa1w4e3r6t'];

            // Eseguire la query passando i parametri
            const result = await query(sqlQuery, params);

            // Rispondere con il risultato della query
            res.status(201).send('User added successfully');
        } catch (error) {
            console.error(error); // Stampa l'errore in console
            res.status(500).send('Internal Server Error'); // Invia una risposta di errore
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const sqlQuery = `Update users set email=? ,password=? where id=?`;
            const params = ['stupidmail@gmail.com', '1qa2ws3ed4rf5tg', id];
            const result = await query(sqlQuery, params);
            console.log(result);
            res.status(200).send('User updated successfully');
        } catch (error) {
            console.error(error); // Stampa l'errore in console
            res.status(500).send('Internal Server Error'); // Invia una risposta di errore
        }
    },
    remove: async (req, res) => {
        try {
            const { id } = req.params;
            const strQuery = `DELETE  FROM users WHERE id=?`;
            const params = [id];
            const result = await query(strQuery, params);
            res.status(200).send('User deleted successfully');
            console.log(result);
        } catch (error) {
            console.error(error); // Stampa l'errore in console
            res.status(500).send('Internal Server Error'); // Invia una risposta di errore
        }
    }
};

export default userControllers;
