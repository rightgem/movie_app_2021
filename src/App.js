import React from 'react';
import Potato from './Potato';

function Tomato(props) {
  return <h3> Tomato in App component, prop : {props.fav} </h3>
}

function MapFunc({name, dat}){
  //구조 분해 할당 사용
  return (
    <div>
      <h1> 구조분해할당 변수 : {name}</h1>
      <p> 이미지 태그는 img src='링크'로 쓰는거 잊지말기... {dat}</p>
    </div>
  )
}

const mapFunctionTest = [
  {
    name: 'data1',
    image : 'asd'
  },
  {
    name: 'data2',
    image : 'sd'
  },
  {
    name: 'data3',
    image : 'd'
  },
]

function App() {
  return ( 
    <div> 
      <h1>Hello World</h1>
      {/* <Potato /> */}
      {/* <Tomato fav="ketchup" /> */}
      {mapFunctionTest.map(i => (<MapFunc name={i.name} dat={i.image} />) )}
    </div>
  );
}

export default App;
