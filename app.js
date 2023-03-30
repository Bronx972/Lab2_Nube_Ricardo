import express from 'express'

const app= express()

app.get('/', (req,res)=>{
    console.log('Listo, conexión lista');
    res.end('Ricardo Guerrero');
})

app.listen(3000)
console.log('Server on port 3000')