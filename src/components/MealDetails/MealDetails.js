import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const {MealId} = useParams()
    const [meal, setMeal] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => setMeal(data?.meals))
    },[])

    const history = useHistory()
    const getBack = () => {
        history.push('/home')
    }
    return (
        <div>
            {
                meal.map((food, i) => {
                    return (
                        <div>
                            <Container  sx={{marginTop: 4}} align="center" fixed>
                                <Grid container item md={4} xs={12} sm={6}>
                                    <Card align="left">
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={food.strMealThumb}
                                            alt={food.strMeal}
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 12 }} variant="h6" gutterBottom component="div">
                                                {food.strMeal}
                                            </Typography>
                                            <Typography sx={{fontWeight: "medium"}} variant="body2" color="text.secondary">
                                                {food.strInstructions.slice(0, 118)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Button onClick={getBack} sx={{fontSize: 10}} variant="outlined" size="small">See All Foods</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Container>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default MealDetails;