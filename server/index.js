const express = require('express');

const app = express();
const cors = require('cors');
const { dbConnection } = require('./model/dbConnection');


app.use(express.json());
app.use(cors());
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Home page api');
})

app.post('/register', async (req, res) => {
    try{
        let myDb = await dbConnection();
        let users = myDb.collection('users');
        let insertRes = await users.insertOne(req.body)
        console.log(insertRes);
        res.json({success: true, message: 'Signed up successfully'})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error while signing up"})
    }
})

app.post('/login', async (req, res) => {
    let myDb = await dbConnection();
    let users = myDb.collection('users');
    const {email, password} = req.body;
    let userRes = await users.findOne({email: email}).then(user => {
        if(user){
            if(user.password === password){
                res.json({status: 'Success', message : 'Login Successful!', email: user.email});
            }
            else{
                res.json({status: 'Error', message : 'Password is incorrect'});
            }
        }
        else{
            res.json({status: 'Error', message : 'User not found'});
        }
    })
})

app.post('/add', async (req, res) => {
    try {
        let {email, task} = req.body;
        if(!email || !task){
            return res.status(400).json({success: false, message: "Email and task are required"})
        }
        let myDb = await dbConnection();
        const todos = myDb.collection('todos');
        let insertRes = await todos.insertOne({ email, task });

        console.log(insertRes);
        res.json({ success: true, message: "Task added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding task" });
    }

});

app.get('/todos/:email', async (req, res) => {
    try{
        let userEmail = req.params.email;
        console.log(userEmail)
        if (!userEmail) {
            return res.status(400).json({ message: 'User email is required' });
        }
        let myDb = await dbConnection();
        let todos = myDb.collection('todos');
        let allTodos = await todos.find({email: userEmail}).toArray();
        res.json(allTodos);
    }catch(erorr){
        console.erorr(erorr);
        res.status(500).json({message: "Error while fetching tasks"});
    }
})

app.post('/delete', async (req, res) => {
    try{
        let {email, taskDone} = req.body;
        let myDb = await dbConnection();
        let todos = myDb.collection('todos');
        let deleteTodo = await todos.deleteOne({email: email, task : taskDone});
        res.json(deleteTodo);
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "erorr while deleting the record"})
    }
})


app.listen(process.env.PORT);
