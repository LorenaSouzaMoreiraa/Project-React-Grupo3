import React, { useState } from 'react';
import { Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import Header from "../../components/Header";
import classnames from 'classnames';
import "./admin.css"
import { allJogadores } from '../../database/jogadores';
import { allTimes, id_Time, jogador_times, times_jogadores } from '../../database/time';
import TableJogadores from '../../components/TableJogador';
import TableTime from '../../components/TableTime';

//import {nameJogador} from '../../database/jogadores';

function Admin() {
  /*
    const data = require("../../db.json");
    console.log(data);
    const theme = useTheme();

    return (
        <div className="app">
            <Header />
            <h1> admin</h1>
            
            <h1> Jogadores</h1>
            <p>{data.jogadores[0].nome}</p>

            <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="../assets/time/brasil.jpg"
        alt="Live from space album cover"
      />
    </Card>
            <EnhancedTable />
        </div>
    )
    */

    const [datajogadores, setDatajogadores] = useState(allJogadores());
    const [dataTimes, setDataTimes] = useState(allTimes());

    const [jogadores, setJogadores] = useState(false);
    const [times, setTimes] = useState(false);


    const showJogadores = () => setJogadores(!jogadores);
    const showTimes = () => setTimes(!times);

    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
  
    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    const cidades = (require("../../database/db.json")).cidades;
    const esportes = (require("../../database/db.json")).esportes;
  
    //console.log( nameJogador("Fred"));

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const [nometime, setNomeTime] = useState('');
    const [anotime, setAnoTime] = useState('');
    const [verba, setVerba] = useState('');
    const [dono, setDono] = useState('');

    const handleSignupJogador = (event) => {
      event.preventDefault()
      console.log({nome, idade, peso, salario, altura})

      let emptyValues = Object.values(Form).some(obj => obj == "");
      SetEmptyValue(emptyValues)

      if(!emptyValues){
        fetch("http://localhost:3000/admin", {method: "POST", body: JSON.stringify(Form)})
        event.currentTarget.submit()
      }
    }

    const handleSignupTime = (event) => {
      event.preventDefault()
      console.log({nometime, anotime, verba, dono})

      let emptyValues = Object.values(Form).some(obj => obj == "");
      SetEmptyValue(emptyValues)

      if(!emptyValues){
        fetch("http://localhost:3000/admin", {method: "POST", body: JSON.stringify(Form)})
        event.currentTarget.submit()
      }
    }


    return(
      <div className="app">
        <Header/> 
        <div class="container admin">
          <div class="row py-3">
            <Nav tabs>
              <NavItem>
                <NavLink                    
                  className={classnames({
                    active:
                        currentActiveTab === '1'
                  })}
                  onClick={() => { toggle('1'); }}
                >
                  Jogadores
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink                 
                  className={classnames({
                    active:
                        currentActiveTab === '2'
                  })}
                  onClick={() => { toggle('2'); }}
                >
                  Times
                </NavLink>
              </NavItem>
            </Nav>
          </div>

              
          <TabContent activeTab={currentActiveTab}>
            <TabPane tabId="1">
              <div class="row ">
                <div class="col-7 text-start">
                  <button onClick={showJogadores} type="button" data-toggle="jogadores" data-target="#jogadores" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">+ Adicionar jogador</button>
                </div>
                <div class="col-4 text-end">
                  <form class="form-inline">
                    <div class="input-group search">
                      <input class="form-control  mr-sm-2" type="search" placeholder="Digite o nome do jogador" aria-label="Search"/>
                      <button class="btn-search" type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-2x ri-search-fill"></i> </span></button>
                    </div>
                  </form>
                </div>
                <div class="col-1 text-end align-self-center">
                  <i class="ri-2x ri-filter-2-fill"></i>
                </div>
              </div>
              <TableJogadores data={datajogadores}></TableJogadores>
            </TabPane>
            <TabPane tabId="2">
              <div class="row ">
                <div class="col-7 text-start">
                  <button onClick={showTimes} type="button" data-toggle="jogadores" data-target="#jogadores" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">+ Adicionar time</button>
                </div>
                <div class="col-4 text-end">
                  <form class="form-inline">
                    <div class="input-group search">
                      <input class="form-control  mr-sm-2" type="search" placeholder="Digite o nome do time" aria-label="Search"/>
                      <button class="btn-search" type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-2x ri-search-fill"></i> </span></button>
                    </div>
                  </form>
                </div>
                <div class="col-1 text-end align-self-center">
                  <i class="ri-2x ri-filter-2-fill"></i>
                </div>
              </div>
                <TableTime data={allTimes()}></TableTime>
            </TabPane>
          </TabContent>

          <Modal isOpen={jogadores} toggle={showJogadores} backdrop={'static'} scrollable={true} size={"lg"}>
            <ModalHeader toggle={showJogadores}>
            <h1>Cadastro de Jogadores</h1>
            </ModalHeader>
            <ModalBody>
              <h2><span>Dados jogador</span></h2>
              <Form method="post" id="insert_data" onSubmit={handleSignupJogador}>
                  <div class="row admin cadastro">
                    <div class="col-8">
                      <FormGroup>
                        <Label>
                          Nome
                        </Label>
                        <Input
                          name="nome"
                          placeholder="Nome"
                          type="text"
                          required
                          value={nome}
                          onChange={(event) => setNome(event.target.value)}
                        />
                        { emptyValue && Form["nome"] == "" ? <span className="emptytext">O Nome é Obrigatório </span> : "" }
                      </FormGroup>
                    </div>
                    <div class="col-4 file">
                      <FormGroup>
                        <Label for="examplePassword">
                          Imagem
                        </Label>
                        <div class="input-group file">
                          <div class="input-group-prepend">
                            <button type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-1x ri-image-add-fill"></i> </span></button>
                          </div>
                          <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                          />
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                
                  <div class="row admin cadastro">
                    <div class="col-2">
                      <FormGroup>
                        <Label>
                          Idade
                        </Label>
                        <Input
                          name="idade"
                          placeholder="Idade"
                          type="number"
                          required
                          value={idade}
                          onChange={(event) => setIdade(event.target.value)}
                        />
                        { emptyValue && Form["idade"] == "" ? <span className="emptynumber">A Idade é Obrigatória </span> : "" } 
                      </FormGroup>
                    </div>
                    <div class="col-3">
                      <FormGroup>
                        <Label>
                          Peso
                        </Label>
                        <div class="input-group">
                          <Input
                            name="peso"
                            placeholder="Peso"
                            type="number"
                            required
                            value={peso}
                            onChange={(event) => setPeso(event.target.value)}
                          />
                          { emptyValue && Form["peso"] == "" ? <span className="emptynumber">O Peso é Obrigatório </span> : "" }
                          <span class="input-group-text">Kg</span>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-3">
                      <FormGroup>
                        <Label for="examplePassword">
                          Altura
                        </Label>
                        <div class="input-group">
                          <Input
                            name="altura"
                            placeholder="Altura"
                            type="number"
                            required
                            value={altura}
                            onChange={(event) => setAltura(event.target.value)}
                          />
                          { emptyValue && Form["altura"] == "" ? <span className="emptynumber">A Altura é Obrigatória </span> : "" }
                          <span class="input-group-text">m</span>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-4 btn-modal text-end align-self-center">
                      <button onClick={showJogadores} type="button" data-toggle="modal" data-target="#cadastro" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">Salvar</button>
                    </div>
                  </div>

                  <h2><span>Times do jogador</span></h2>
                  <div class="row">
                    <div class="btn-modal text-end align-self-center">
                        <button onClick={showJogadores} type="button" data-toggle="modal" data-target="#cadastro" class="border-0 text-uppercase mb-2 shadow-sm">+ Adicionar</button>
                    </div>
                  </div>
                  <div class="row">
                    <TableTime data={jogador_times(0)}></TableTime>
                  </div>
              </Form>
            </ModalBody>
          </Modal>

          <Modal isOpen={times} toggle={showTimes} backdrop={'static'} scrollable={true} size={"lg"}>
            <ModalHeader toggle={showTimes}>
            <h1>Cadastro de Times</h1>
            </ModalHeader>
            <ModalBody>
              <h2><span>Dados do time</span></h2>
              <Form onSubmit={handleSignupTime}>
                <div class="row admin cadastro">
                  <div class="col-8">
                    <FormGroup>
                      <Label>
                        Nome
                      </Label>
                      <Input
                        name="nometime"
                        placeholder="Nome"
                        type="text"
                        required
                        value={nometime}
                        onChange={(event) => setNomeTime(event.target.value)}
                      />
                      { emptyValue && Form["nometime"] == "" ? <span className="emptytext">O Nome do Time é Obrigatório </span> : "" }
                    </FormGroup>
                  </div>
                  <div class="col-4 file">
                    <FormGroup>
                      <Label for="examplePassword">
                        Imagem
                      </Label>
                      <div class="input-group file">
                        <div class="input-group-prepend">
                          <button type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-1x ri-image-add-fill"></i> </span></button>
                        </div>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="password"
                        />
                      </div>
                    </FormGroup>
                  </div>
                </div>
                
                <div class="row admin cadastro">
                  <div class="col-3">
                    <FormGroup>
                      <Label>
                        Ano de criação
                      </Label>
                      <Input
                        name="anotime"
                        placeholder="Ano"
                        type="number"
                        required
                        value={anotime}
                        onChange={(event) => setAnoTime(event.target.value)}
                      />
                      { emptyValue && Form["anotime"] == "" ? <span className="emptynumber">O Ano de Criação é Obrigatório </span> : "" }
                    </FormGroup>
                  </div>
                  <div class="col-5">
                    <FormGroup>
                      <Label for="examplePassword">
                        Cidade
                      </Label>
                      <div class="input-group">
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="select"
                        >
                        {cidades.map((row, index) => {
                                return (
                                  <option
                                  value={row.id}
                                  >{row.nome}</option>
                                )
                            })
                        };    
                        </Input>
                        { emptyValue && Form["cidade"] == "" ? <span className="emptyselect">A Cidade de Origem é Obrigatória </span> : "" }
                      </div>    
                    </FormGroup>
                  </div>
                  <div class="col-4 tex-start">
                    <FormGroup>
                      <Label>
                        Verba mensal
                      </Label>
                      <div class="input-group">
                        <span class="input-group-text">R$</span>
                        <Input
                          name="verba"
                          placeholder="Verba"
                          type="number"
                          required
                          value={verba} 
                          onChange={(event) => setVerba(event.target.value)}
                        />
                        { emptyValue && Form["verba"] == "" ? <span className="emptynumber">A Verba Mensal é Obrigatória </span> : "" }
                      </div>
                    </FormGroup>
                  </div>
                </div>

                <div class="row admin cadastro">
                  <div class="col-6">
                    <FormGroup>
                      <Label>
                        Dono
                      </Label>
                      <Input
                        name="dono"
                        placeholder="Dono"
                        type="text"
                        required
                        value={dono}
                        onChange={(event) => setDono(event.target.value)}
                      />
                      { emptyValue && Form["dono"] == "" ? <span className="emptytext">O Nome Dono do Time é Obrigatório </span> : "" }
                    </FormGroup>
                  </div>
                  <div class="col-3">
                    <FormGroup>
                      <Label for="examplePassword">
                        Esporte
                      </Label>
                      <div class="input-group">
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="select"
                        >
                          {esportes.map((row, index) => {
                                return (
                                  <option
                                  value={row.id}
                                  >{row.nome}</option>
                                )
                            })
                          };                          
                        </Input>
                        { emptyValue && Form["esporte"] == "" ? <span className="emptyselect">O Esporte é Obrigatório </span> : "" }
                      </div>
                    </FormGroup>
                  </div>
                  <div class="col-3 btn-modal text-end align-self-center">
                    <button onClick={showTimes} type="button" data-toggle="modal" data-target="#cadastro" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">Salvar</button>
                  </div>
                </div>

                <h2><span>Jogadores do time</span></h2>
                <div class="row">
                  <div class="btn-modal text-end align-self-center">
                      <button onClick={showTimes} type="button" data-toggle="modal" data-target="#cadastro" class="border-0 text-uppercase mb-2 shadow-sm">+ Adicionar</button>
                  </div>
                </div>
                <div class="row">
                  <TableJogadores data={times_jogadores(1)}></TableJogadores>
                </div>
              </Form>

            </ModalBody>
          </Modal>

        </div>
      </div>

    )
}

export default Admin;