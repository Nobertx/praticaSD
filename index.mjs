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

//get_info OK!
app.get('/info', (req, res) => {

  res.send(info);
});

//put_info OK!
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

//get_peers OK!
app.get('/peers',(req,res)=>{

  res.send(peers)

})

//post_peers OK!
app.post('/peers', (req, res) => {

  let peers_novo = [
    'id',
    'nome',
    'url'
  ];

  console.log(req.body)

  let check = true;

        if (check) {
          let conteudo = JSON.stringify(req.body);

          // Checa se foram inseridas as 3 chaves
          if (!peers_novo.every(element => conteudo.includes(element))) {
            check = false
            return res.status(400).json({ status: 400, message: `Não foram inseridas todas as chaves!` });
          }
        }

        if (check) {
          if (!(typeof req.body.nome === 'string' || req.body.nome instanceof String) || !(typeof req.body.url === 'string' || req.body.url instanceof String)) {
            check = false;
            return res.status(400).json({ status: 400, message: `ID e/ou nome não é string` });
          }
        }
      if (check) {
        for (var i = 0; i < peers.length; i++) {
          if (peers[i].id == req.body.id && peers[i].nome == req.body.nome) {
            check = false;
            return res.status(409).json({ status: 409, message: `ID e nome inseridos já existe` });
          }
          else if (peers[i].id == req.body.id) {
            check = false;
            return res.status(409).json({ status: 409, message: `ID inserido já existe` });
          } else if (peers[i].nome == req.body.nome) {
            check = false;
            return res.status(409).json({ status: 409, message: `Esse nome já existe` });
          }
        }
      }

        peers.push(req.body);
        let json = JSON.stringify(peers_novo);

        res.send(req.body);

});

//ta feito (eu acho)
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
