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
import "./admin.css"

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

    const [jogadores, setJogadores] = useState(false);
    const [times, setTimes] = useState(false);


    const showJogadores = () => setJogadores(!jogadores);
    const showTimes = () => setTimes(!times);


    return(
      <div className="app">
        <Header/> 
        <div class="container">
          <div class="row py-3">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className="active"
                  onClick={function noRefCheck(){}}
                >
                  Jogadores
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className=""
                  onClick={function noRefCheck(){}}
                >
                  Times
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab="1">
            <TabPane tabId="1">
              <div class="row ">
                <div class="col-7 text-start">
                  <button onClick={showJogadores} type="button" data-toggle="jogadores" data-target="#jogadores" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">+ Adicionar novo</button>
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
              
              <button onClick={showTimes} type="button" data-toggle="jogadores" data-target="#jogadores" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">+ Adicionar novo</button>
                
            </TabPane>
            <TabPane tabId="2">
              <h1>funciona</h1>
            </TabPane>
          </TabContent>

          <Modal isOpen={jogadores} toggle={showJogadores} backdrop={'static'} scrollable={true} size={"lg"}>
            <ModalHeader toggle={showJogadores}>
            <h1>Cadastro de Jogadores</h1>
            </ModalHeader>
            <ModalBody>
              <h2><span>Dados jogador</span></h2>
              <Form>
                <div class="row cadastro">
                  <div class="col-8">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Nome
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </div>
                  <div class="col-4">
                    <FormGroup>
                      <Label for="examplePassword">
                        Imagem
                      </Label>
                      <div class="input-group file">
                        <div class="input-group-prepend">
                          <button class="btn-search" type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-2x ri-image-add-fill"></i> </span></button>
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
                
                <div class="row cadastro">
                  <div class="col-2">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Idade
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </div>
                  <div class="col-3">
                    <FormGroup>
                      <Label for="examplePassword">
                        Peso
                      </Label>
                      <div class="input-group">
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="password"
                        />
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
                          id="examplePassword"
                          name="password"
                          placeholder="password placeholder"
                          type="password"
                        />
                        <span class="input-group-text">m</span>
                      </div>
                    </FormGroup>
                  </div>
                  <div class="col-4 btn-modal text-end align-self-center">
                    <button onClick={showJogadores} type="button" data-toggle="modal" data-target="#cadastro" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">Salvar</button>
                  </div>
                </div>

                <h2><span>Times do jogador</span></h2>
                
                <div class="btn-modal text-end align-self-center">
                    <button onClick={showJogadores} type="button" data-toggle="modal" data-target="#cadastro" class="border-0 text-uppercase mb-2 shadow-sm">+ Adicionar</button>
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
              <Form>
                <div class="row cadastro">
                  <div class="col-8">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Nome
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </div>
                  <div class="col-4">
                    <FormGroup>
                      <Label for="examplePassword">
                        Imagem
                      </Label>
                      <div class="input-group file">
                        <div class="input-group-prepend">
                          <button class="btn-search" type="submit"><span class="input-group-text" id="basic-addon1"><i class="ri-2x ri-image-add-fill"></i> </span></button>
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
                
                <div class="row cadastro">
                  <div class="col-3">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Ano de criação
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
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
                          type="password"
                        />
                      </div>
                    </FormGroup>
                  </div>
                  <div class="col-4 tex-start">
                    <FormGroup>
                      <Label for="examplePassword">
                        Verba mensal
                      </Label>
                      <div class="input-group">
                        <span class="input-group-text">R$</span>
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

                <div class="row cadastro">
                  <div class="col-6">
                    <FormGroup>
                      <Label for="exampleEmail">
                        Dono
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
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
                          <option>
                            1
                          </option>
                          <option>
                            2
                          </option>
                          <option>
                            3
                          </option>
                        </Input>
                      </div>
                    </FormGroup>
                  </div>
                  <div class="col-3 btn-modal text-end align-self-center">
                    <button onClick={showTimes} type="button" data-toggle="modal" data-target="#cadastro" class=" btn-block border-0 text-uppercase mb-2 shadow-sm">Salvar</button>
                  </div>
                </div>

                <h2><span>Jogadores do time</span></h2>
                
                <div class="btn-modal text-end align-self-center">
                    <button onClick={showTimes} type="button" data-toggle="modal" data-target="#cadastro" class="border-0 text-uppercase mb-2 shadow-sm">+ Adicionar</button>
                </div>
              </Form>
            </ModalBody>
          </Modal>

        </div>
      </div>
    )
}

export default Admin;