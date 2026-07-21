import express from 'express';

const app = express();

// app.get('/', (req , res) => {
//     res.send('Hello from backend1');
// });


//get a list of 5 users

app.get('/api/users', (req , res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
        { id: 4, name: 'Alice Brown' },
        { id: 5, name: 'Charlie Wilson' }
    ];
    res.json(users);
});

const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log( `server at http://localhost:${port}`);
});







 
