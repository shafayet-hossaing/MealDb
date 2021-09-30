import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Meal = (props) => {
    const {idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb} = props.meal
    const history = useHistory()
    const url = `/detail/${idMeal}`
    const getIndividualMeal = () => {
        history.push(url)
    }
    return (
        <Grid sx={{marginTop: 5}} item md={4} xs={12} sm={6}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={strMealThumb}
                    alt={strMeal}
                />
                <CardContent>
                    <Typography sx={{ fontSize: 12 }} variant="h6" gutterBottom component="div">
                        {strMeal}
                    </Typography>
                    <Typography sx={{fontWeight: "medium"}} variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 118)}
                    </Typography>
                </CardContent>
                <CardActions>
                        <Button onClick={getIndividualMeal} sx={{fontSize: 10}} variant="outlined" size="small">Details</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Meal;