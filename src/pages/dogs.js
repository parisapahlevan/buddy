import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import DogComponent from "../components/Dog/dog";
import { CardDeck, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import fakeDogs from '../FakeDataBase';

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: [] 
    };
  }

  componentWillMount() {
    this.setState({ results: this.createDogCardDecks()});
  }

  render() {
    console.log("this.results: ", this.state.results);
    return (
      <div>
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <div className="myDogs">
          {this.state.results}
        </div>
        <div className="myFooter">
        <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }

  createDogCardDecks = () => {
    let table = []
    let k = 0
    for (let i = 0; i < fakeDogs.length; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        if(fakeDogs[k])
          children.push(<DogComponent key={k} dogsId={k} name={fakeDogs[k].name} age={fakeDogs[k].age} breed={fakeDogs[k].breed} image={fakeDogs[k].image}></DogComponent>)
        else
          children.push(<Card></Card>)
        k++
        i=k-1;
      }
      table.push(<CardDeck>{children}</CardDeck>)
    }
    return table
  }
  
}

export default withRouter(Dogs);