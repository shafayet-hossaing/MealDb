import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';



const Meals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])


    // Search bar handling
    const searchBarhandle = event => {
        const inputValue = event.target.value
        setSearch(inputValue);
    }
    const searchBox = {
        width: "50%",
        padding: "6px",
        borderRadius: "10px",
        border: "3px solid #1976d2",
        marginTop: "10px",
        fontSize: "20px"
    }
    return (
        <div>
            <Container align="center">
            <input style={searchBox} onChange={searchBarhandle} placeholder="Search Your Meals" type="text" />
                <Grid align="left" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }} direction="row">
                    {
                        meals.map((meal, i) => <Meal key={i} meal={meal}></Meal>)
                    }
                </Grid>
            </Container>
            
            
        </div>
    );
};

export default Meals;