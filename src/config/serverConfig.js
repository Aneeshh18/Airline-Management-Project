const dotevn = require('dotenv');

dotevn.config();

module.exports = {
    PORT: process.env.PORT
}