/** *
 * Provides API endpoints for searching the books index. 
*/

'use strict'; 
const request = require('request'); 
module.exports = (app, es) => {
    const url = `http://${es.host}:${es.port}/${es.books_index}/book/_search`; 
    /**
     * Search for books by matching a particular field value.
     * Example: /api/search/books/authors/Twain
     */
    app.get('/api/search/books/:field/:query', (req, res) => {

    }); 
}; 