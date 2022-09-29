import Header from "../../components/Header";
import "./custom.css"

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

    return(
      <div className="app">
        <Header/> 
        <div class="container">
          <div class="row ">
            <ul class="nav nav-tabs pt-5 " id="myTab" role="tablist">
              <li class="nav-item " role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Jogadores</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Times</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Admin;