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

// Update CORS configuration to accept multiple origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://cvlelo.netlify.app',
  'https://incomparable-praline-4597b3.netlify.app'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
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
      const origin = res.req.headers.origin;
      if (allowedOrigins.includes(origin)) {
        res.set('Access-Control-Allow-Origin', origin);
      }
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