const express = require("express");
const app = express();
require('dotenv').config();
const loginRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js")
const recieverDashboardRouter = require("./routes/recieverDashboardRoutes.js")
const adminDashboardRouter = require("./routes/adminDashboardRoutes")
const donaterRouter = require("./routes/donaterRoutes.js")
const stripeRouter = require("./routes/stripeRoutes.js")
const adminPaymentRouter = require("./routes/adminPaymentRoutes.js")
const donationIntentRouter = require("./routes/donationIntentRoutes.js")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const dbConnect = require('./config/DatabaseConnection.js')

app.use(express.json());
app.use(express.urlencoded({extended : true}))
const port = process.env.PORT || 5000;
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials : true}));

app.use('/api/auth' , loginRouter)
app.use('/api/user' , userRouter)
app.use('/api/recieverDashboard' , recieverDashboardRouter)///api/recieverRequest/getRecieverDashboardData
app.use('/api/adminDashboard' , adminDashboardRouter)
app.use('/api/donater' , donaterRouter)
app.use('/api/stripe' , stripeRouter)
app.use('/api/admin-payments' , adminPaymentRouter)
app.use('/api/donation-intent' , donationIntentRouter)
app.get('/' , (req , res) => {
    res.send('<h2>Welcome to the Home</h2>')
})

app.use(express.static('public'))

app.listen(port , () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

dbConnect();





