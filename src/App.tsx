import React from "react";
import Data from "./Data.json";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from './themes/ThemeProvider';
import { Link, Grid, Card, CardContent, Typography, CssBaseline, CardActionArea, CardActions, CardMedia } from "@mui/material";
import './App.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Container>
          <Grid container spacing={7}>
            {Data.map((result, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Card className="cards"
                  sx={{ 
                    borderRadius: '1vw',
                    marginTop: '3.5vw',
                    border: '1px solid #252222',
                    boxShadow: '0 5px 34px hsla(0, 0%, 0%, .90)',
                    
                  }}>
                    
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="550px"
                        image={result.img}
                        alt={result.alt}
                      />
                      
                      <CardContent className="cards-content" 
                      sx={{ 
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        bottom: '10vw',
                        
                        inset: 0,
                        opacity: 0,
                        backgroundColor: '#3E3737',
                        zIndex: 1
                      }}>
                        <Typography gutterBottom variant="h1" component="div"
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }}>
                          {result.title}
                        </Typography>
                        <Typography
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }}>
                          {result.des}
                          <Link href={result.link} target="_blank" rel="noopener"
                          style={{
                            marginTop: '2vw'
                          }}>
                              Discover More 
                          </Link>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
    </ThemeProvider>
  );
}
