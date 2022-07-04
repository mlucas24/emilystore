import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MediaQuery from 'react-responsive';
const HomePage = () => {
    return (
        <div>
            <MediaQuery query="(max-width: 720px)">
                <Box display="flex" justifyContent="center">
                    <Card id="main-card" sx={{ maxWidth: 390 }}>
                        <CardMedia
                            component="img"
                            image="https://i.etsystatic.com/isla/ac4898/42628358/isla_500x500.42628358_k9slqq1t.jpg?version=0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                MarleyMaeCreations is a customized, homemade shop. Everything is made to order with attention to detail.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Shop All Items</Button>
                        </CardActions>
                    </Card>
                </Box>
            </MediaQuery>
            <MediaQuery query="(min-width: 721px)">
                <Grid container spacing={0}>
                    <Grid item xs={5}>
                        <img src="https://i.etsystatic.com/isla/ac4898/42628358/isla_500x500.42628358_k9slqq1t.jpg?version=0" />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography gutterBottom variant="h4" component="div">
                            MarleyMaeCreations is a customized, homemade shop. Everything is made to order with attention to detail.
                        </Typography>
                        <Button size="large">Shop All Items</Button>
                    </Grid>
                </Grid>
            </MediaQuery>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage;