import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://cv-lelo.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // optional: if you use cookies / auth headers
}));

// Connect DB
connectDB();


// Middleware 
app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/resume', resumeRoutes)

app.use('/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, _path) => {
            res.setHeader('Access-Control-Allow-Origin', 'https://cv-lelo.netlify.app');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        }
    })
);


//Routes

app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}` )
})