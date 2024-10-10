import query from '../config/db.js';

// create a new flights table
const createFlightsTable = async () => {
    try {
        const sql = ` 
            CREATE TABLE IF NOT EXISTS flights (
                id INT PRIMARY KEY AUTO_INCREMENT,
                departure VARCHAR(255) NOT NULL,
                time INT NOT NULL,
                arrive VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        // Assuming 'query' is your function to execute SQL queries
        const result = await query(sql);
        console.log(result);  // Log the result of the table creation
    } catch (error) {
        console.error(error);  // Log any errors that occur
    }
};
export default createFlightsTable;
