import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData= async (country)=>{
    let changableUrl = url 

    if(country){
        changableUrl = `${url}/countries/${country}`
    }
    else{
        changableUrl = `${url}`
    }

    try {
        const {data:{confirmed, recovered, deaths, lastUpdate}}= await axios(changableUrl);
        return{confirmed, recovered,deaths, lastUpdate}

    } catch (error) {
        console.log(error);
        
        
    }
}


export const fetchDailyData= async ()=>{
    try {
        const {data} = await axios(`${url}/daily`);
        
        const mappedData= data.map((data)=>({
            confirmed :data.confirmed.total,
            recovered : data.recovered.total,
            deaths : data.deaths.total,
            date: data.reportDate

        }))
         
        return mappedData;
        

    } catch (error) {
        console.log(error);
        
        
    }
}


export const fetchCountries= async ()=>{
    try {
        const {data:{countries}} = await axios(`${url}/countries`);
        const mappedData= countries.map((country)=> country.name)
        
        return mappedData;        

    } catch (error) {
        console.log(error);
        
        
    }
}