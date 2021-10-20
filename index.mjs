import express, {request} from 'express';


const app = express()
let info = {"server_name": "noel",
  "server_endpoint": "https://sd-emmanuel.herokuapp.com/",
  "descricao": "Projeto de SD. Os seguintes serviços estão implementados: info",
  "versao": "0.1",
  "status": "online",
  "tipo_de_eleicao_ativa": "ring"}

app.get('/hello', (req, res) => {
  if(req.query.name) {
    res.send(`Hello ${req.query.name}!`)
  }
  else {
    res.send('Hello World!')
  }
});

app.get('/clientes', (req, res) => {
  res.send(['Mathias', 'José', 'Thiago'])
});

app.get('/noel', (req, res) => {
  res.send('Hello Noel!')
});

app.get('/', (req, res) => {
  res.send('Escolha a rota: /hello, /clientes, /noel')
});

app.get('/info', (req, res) => {

  res.send(info);
});

app.put('/info',(req, res) => {

})

app.listen(process.env.PORT ||8000, () => {
  console.log('App Started...');
})
