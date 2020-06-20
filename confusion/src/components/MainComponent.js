import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';
import DishDetails from './DishDetailsComponent';
import Header from './Header';
import Footer from './Footer';
import {Switch, Route,Redirect} from 'react-router-dom';

class Main extends Component {
  
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish:null
    };

  };
  
  render(){

  const HomePage=()=>{
    return(
      <Home/>
    );
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
         <Route exact path="/contactus" component={Contact}/>
         <Redirect to="/home"/>
      </Switch>
       <Footer/>      
    </div>
  );
  }
}

export default Main;
