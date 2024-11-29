import express from 'express';

const app = express();

app.get( 
    '/',(req, res)=> {
        res.send('server is ready');
    }

);

app.get(
    `/ye`,(req,res)=>{
        res.send(
            [
                {
                    id: 1,
                    title: 'One'
                },

                {
                    id: 2,
                    title: 'Two'
                },
                {
                    id:3,
                    title:'Three'
                }

            ]
        );
    }
);




const port = process.env.PORT || 3000; 

app.listen(
    port,()=>{
        console.log(`server is running at http://localhost:${port}`);
    }
);