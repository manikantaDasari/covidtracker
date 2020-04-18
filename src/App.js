import React from 'react';

import Cards from './components/cards/cards.component';
import Charts from './components/charts/charts.component';
import CountryPicker from './components/countryPicker/countrypicker.component';

import Logo from './images/image.png'

import {fetchData}  from './api/'

import styles from './App.module.css';

class App extends React.Component{
  state={
    data:{},
    country:''
  }

  
  async componentDidMount(){
    const datafetched = await fetchData();

      this.setState({data:datafetched})
  }

  handleChange= async (country)=>{
    const datafetched = await fetchData(country);

    this.setState({data:datafetched, country:country})
    
    
  }

  render(){
    const {data, country}= this.state 
    
    
    return(
      <div className={styles.container}>
        <img src= {Logo }className={styles.image} alt='covid-19'/>
        <Cards data= {data}/>
        <CountryPicker handleChange={this.handleChange}/>
        <Charts data={data} country={country} />
      </div>
    )
  }

}

export default App;
