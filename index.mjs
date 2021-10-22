import express from 'express';
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let info = {"server_name": "noel",
  "server_endpoint": "https://sd-emmanuel.herokuapp.com/",
  "descricao": "Projeto de SD. Os seguintes serviços estão implementados: [GET][PUT]/info, [GET]/peers",
  "versao": "0.1",
  "status": "online",
  "tipo_de_eleicao_ativa": "ring"}

let peers = [
  {
    "id": "201720295",
    "nome": "Allana Dos Santos Campos",
    "url": "https://sd-ascampos-20212.herokuapp.com/"
  },
  {
    "id": "201512136",
    "nome": "Annya Rita De Souza Ourives",
    "url": "https://sd-annyaourives-20212.herokuapp.com/hello"
  },
  {
    "id": "201512137",
    "nome": "Daniel Andrade Penêdo Santos",
    "url": ""
  },
  {
    "id": "201710375",
    "nome": "Emmanuel Norberto Ribeiro Dos Santos",
    "url": "https://sd-emmanuel.herokuapp.com/"
  },
  {
    "id": "201420373",
    "nome": "Gabriel Figueiredo Góes",
    "url": ""
  },
  {
    "id": "201710376",
    "nome": "Guilherme Senna Cruz",
    "url": "https://nodejs-sd-guilhermesenna.herokuapp.com/"
  },
  {
    "id": "201710377",
    "nome": "Hiago Rios Cordeiro",
    "url": "https://sd-api-uesc.herokuapp.com/"
  },
  {
    "id": "201810665",
    "nome": "Jenilson Ramos Santos",
    "url": "https://jenilsonramos-sd-20211.herokuapp.com/"
  },
  {
    "id": "201610327",
    "nome": "João Pedro De Gois Pinto",
    "url": "https://sd-joaopedrop-20212.herokuapp.com/"
  },
  {
    "id": "201610337",
    "nome": "Luís Carlos Santos Câmara",
    "url": "https://sd-20212-luiscarlos.herokuapp.com/"
  },
  {
    "id": "201620181",
    "nome": "Matheus Santos Rodrigues",
    "url": ""
  },
  {
    "id": "201620400",
    "nome": "Nassim Maron Rihan",
    "url": "https://sd-nassimrihan-2021-2.herokuapp.com/"
  },
  {
    "id": "201710396",
    "nome": "Robert Morais Santos Broketa",
    "url": "https://pratica-sd.herokuapp.com/"
  },
  {
    "id": "201720308",
    "nome": "Victor Dos Santos Santana",
    "url": "https://sd-victor-20212.herokuapp.com/"
  }
]

app.get('/hello', (req, res) => {
  if(req.query.name) {
    res.send(`Hello ${req.query.name}!`)
  }
  else {
    res.send('Hello World!')
  }
});

app.get('/noel', (req, res) => {
  res.send('Hello Noel!')
});

app.get('/', (req, res) => {
  res.send('Escolha a rota: /hello, /info, /peers')
});

app.get('/info', (req, res) => {

  res.send(info);
});

app.get('/peers',(req,res)=>{

  res.send(peers)

})

app.put('/info',(req, res) => {
  let json = JSON.stringify(req.body);

  console.log(json)

  if (req.body.server_name) {
    info.server_name = req.body.server_name;
  }

  if (req.body.server_endpoint) {
    info.server_endpoint = req.body.server_endpoint;
  }

  if (req.body.descricao) {
    info.descricao = req.body.descricao;
  }

  if (req.body.versao) {
    info.versao = req.body.versao;
  }

  if (req.body.status) {
    info.status = req.body.status;
  }

  if (req.body.tipo_de_eleicao_ativa) {
    info.tipo_de_eleicao_ativa = req.body.tipo_de_eleicao_ativa;
  }

  res.send('As informações foram atualizadas!')
});

app.post('/resolver', (req, res) => {
  let url = {
    'Allana' : 'https://sd-ascampos-20212.herokuapp.com/',
    'Annya' : 'https://sd-annyaourives-20212.herokuapp.com/hello',
    'Emmanuel' : 'https://sd-emmanuel.herokuapp.com/',
    'Guilherme' : 'https://nodejs-sd-guilhermesenna.herokuapp.com/',
    'Hiago' : 'https://sd-api-uesc.herokuapp.com/',
  	'Jenilson' : 'https://jenilsonramos-sd-20211.herokuapp.com/',
    'Joao' : 'https://sd-joaopedrop-20212.herokuapp.com/',
    'Luis' : 'https://sd-20212-luiscarlos.herokuapp.com/',
    'Nassim' : 'https://sd-nassimrihan-2021-2.herokuapp.com/',
    'Robert' : 'https://pratica-sd.herokuapp.com/',
    'Victor' : 'https://sd-victor-20212.herokuapp.com/',
  }
  let nome = req.body.arguments.nome;
  if (!nome) {
    res.send('Por favor, insira um nome!')
  }
  else if (url[`${nome}`] !== undefined) {
    res.send(url[nome]);
  }
  else {
    res.send('Nome nao encontrado.');
  }
});

app.listen(process.env.PORT ||8000, () => {
  console.log('App Started...');
})
