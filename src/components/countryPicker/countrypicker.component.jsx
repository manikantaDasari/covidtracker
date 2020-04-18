import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './countrypicker.module.css';


import {fetchCountries} from '../../api'


const CountryPicker =({handleChange})=>{
    const [countriesFetched ,setcountriesFetched] =useState([]);
    
    useEffect(()=>{
    const countryCall = async ()=> {
        setcountriesFetched(await fetchCountries())
        
    }
    countryCall()

    }, [setcountriesFetched])

    

    
    
    return(
    <div className={styles.formControl}>
        <FormControl>
            <NativeSelect defaultValue=''onChange={(e)=>handleChange(e.target.value)}>
                <option value=''>Global</option>~
                {
                 countriesFetched.map((country,i)=><option key={i} value={country} >{country}</option> )
                }
            </NativeSelect>
        </FormControl>
    </div>
)
}

export default CountryPicker