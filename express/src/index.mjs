// the imported module is a  top level function
// so we need to call the function in order to create an express app
import express from 'express'; 


const app = express();  // we invoke the function 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});