import React, { Component } from 'react';
import '../App.css';
// import createFragment from 'react-addons-create-fragment';




import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


// const front= [{
// id: 1,
// name: 'frontalis'
// },
// {
// id: 2,
// name: 'frontalis'
// },
// {
// id: 3,
// name: 'temporalis'
// },
// {
// id: 4,
// name: 'temporalis'
// },
// {
// id: 5,
// name: 'sternocleidomastoid'
// },
// {
// id: 6,
// name: 'sternocleidomastoid'
// },
// {
// id: 7,
// name: 'trapezius'
// },
// {
// id: 8,
// name: 'trapezius'
// },
// {
// id: 9,
// name: 'deltoid'
// },
// {
// id: 10,
// name: 'deltoid'
// },
// {
// id: 11,
// name: 'pectoralis-major'
// },
// {
// id: 12,
// name: 'pectoralis-major'
// },
// {
// id: 13,
// name: 'biceps-brachii'
// },
// {
// id: 14,
// name: 'biceps-brachii'
// },
// {
// id: 15,
// name: 'biceps-brachii'
// },
// {
// id: 16,
// name: 'biceps-brachii'
// },
// {
// id: 17,
// name: 'triceps-brachii'
// },
// {
// id: 18,
// name: 'triceps-brachii'
// },
// {
// id: 19,
// name: 'brachialis'
// },
// {
// id: 20,
// name: 'brachialis'
// },
// {
// id: 21,
// name: 'pronator-teres'
// },
// {
// id: 22,
// name: 'pronator-teres'
// },
// {
// id: 23,
// name: 'brachioradialis'
// },
// {
// id: 24,
// name: 'brachioradialis'
// },
// {
// id: 25,
// name: 'flexor-carpi-radialis'
// },
// {
// id: 26,
// name: 'flexor-carpi-radialis'
// },
// {
// id: 27,
// name: 'flexor-digitorum-superficialis'
// },
// {
// id: 28,
// name: 'flexor-digitorum-superficialis'
// },
// {
// id: 29,
// name: 'flexor-carpi-ulnaris'
// },
// {
// id: 30,
// name: 'flexor-carpi-ulnaris'
// },
// {
// id: 31,
// name: 'iliacus'
// },
// {
// id: 32,
// name: 'iliacus'
// },
// {
// id: 33,
// name: 'psoas-major'
// },
// {
// id: 34,
// name: 'psoas-major'
// },
// {
// id: 35,
// name: 'pectineus'
// },
// {
// id: 36,
// name: 'pectineus'
// },
// {
// id: 37,
// name: 'adductor-longus'
// },
// {
// id: 38,
// name: 'adductor-longus'
// },
// {
// id: 39,
// name: 'extensor-hallucis-longus'
// },
// {
// id: 40,
// name: 'extensor-hallucis-longus'
// },
// {
// id: 41,
// name: 'flexor-digitorum-longus'
// },
// {
// id: 42,
// name: 'flexor-digitorum-longus'
// },
// {
// id: 43,
// name: 'soleus'
// },
// {
// id: 44,
// name: 'soleus'
// },
// {
// id: 45,
// name: 'gastronemius'
// },
// {
// id: 46,
// name: 'gastronemius'
// },
// {
// id: 47,
// name: 'tibialis-anterior'
// },
// {
// id: 48,
// name: 'tibialis-anterior'
// },
// {
// id: 49,
// name: 'extensor-digitorum-longus'
// },
// {
// id: 50,
// name: 'extensor-digitorum-longus'
// },
// {
// id: 51,
// name: 'peroneus-longus'
// },
// {
// id: 52,
// name: 'peroneus-longus'
// },
// {
// id: 53,
// name: 'vastus-medialis'
// },
// {
// id: 54,
// name: 'vastus-medialis'
// },
// {
// id: 55,
// name: 'rectus-femoris'
// },
// {
// id: 56,
// name: 'rectus-femoris'
// },
// {
// id: 57,
// name: 'vastus-lateralis'
// },
// {
// id: 58,
// name: 'vastus-lateralis'
// },
// {
// id: 59,
// name: 'sartorius'
// },
// {
// id: 60,
// name: 'sartorius'
// },
// {
// id: 61,
// name: 'gracilis'
// },
// {
// id: 62,
// name: 'gracilis'
// },
// {
// id: 63,
// name: 'external-oblique'
// },
// {
// id: 64,
// name: 'external-oblique'
// },
// {
// id: 65,
// name: 'rectus-abdominus'
// },
// {
// id: 66,
// name: 'serratus-anterior'
// },
// {
// id: 67,
// name: 'serratus-anterior'
// },
// {
// id: 68,
// name: 'latissimus-dorsi'
// }]
//



const front= ['frontalis','deltoid','brachioradialis','adductor-longus','sternocleidomastoid','external-oblique','rectus-abdominus','gastronemius', 'soleus']


function generateGuess(array) {
  var currentIndex = array.length
  var randomIndex = Math.floor(Math.random() * currentIndex);
  var temporaryValue = array[randomIndex];

  return temporaryValue;


}




export default class Getmuscle extends Component{
  constructor(props) {
    super(props);
    this.state = {muscle: ""};
    this.onClick= this.onClick.bind(this)
  }







  // componentDidMount() {
  //   this.muscleID = generateGuess(front);
  //
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.muscleID);
  // }

  onClick(){
    generateGuess(front)
    console.log(this)
  }





  render() {
    return (
      <div>
          <button onClick={this.onClick}>Start</button>
        <h2>Find {generateGuess(front)}</h2>

      </div>
    );
  }
}
