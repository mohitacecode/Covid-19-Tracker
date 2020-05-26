import React from "react"
import {Cards, CountryPicker, Chart} from "./components"
import styles from "./App.module.css"
import {fetchdata} from "./api"
import coronaImage from "./images/image.png"
class App extends React.Component{

constructor(){

    super()
    this. state = {
      data:{},
      country:'',
    }
}

   handleCountryChange = async (country) =>{
    const fetchedData = await fetchdata(country);
    this.setState({data:fetchedData,country:country})

  }
  async componentDidMount(){
    const fetchedData = await fetchdata();
    this.setState(
      {
        data:fetchedData
      }
    )
  }
  render(){
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <img className = {styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data = {data} country = {country}/>
      </div>
    )
  }
}

export default App
