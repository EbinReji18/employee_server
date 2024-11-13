require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router=require('./Routes/route')
require('./Connection/db')


const empServer = express();


empServer.use(cors())
empServer.use(express.json())
empServer.use(router)

const PORT=3000 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server is running at :  ${PORT}`);
});

// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const router = require('./Routes/route');
// require('./Connection/db');

// const empServer = express();

// empServer.use(cors({
//   origin: 'https://employee-front-henna.vercel.app', // Only allows requests from this origin
// }));

// empServer.use(express.json());
// empServer.use(router);

// const PORT = process.env.PORT || 3000;

// empServer.listen(PORT, () => {
//   console.log(`Server is running at: ${PORT}`);
// });
