import axios from 'axios';
async function getResults(query){
    try{
        const Res =await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const Results = Res.data.recipes;
        console.log(Results);
    }
    catch(error){
        alert(error)
    }
} 
getResults('pizza');