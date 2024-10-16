const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Click to open: http://localhost:${PORT}/api/products`);
});
