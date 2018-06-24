import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//자식 컴포넌트에게 던져줄 데이터를 저장하는 배열이다.
const movies = [
  {
    title: "A",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDeaFigARYsk5br4eRZpYsShV_W3o1tP-bJsZtay3p3gHV1oCvg"
  },
  {
    title: "B",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBMNAiNcY0svwf-PbgaaxRoBoQfAqKU9j_D1xSISa4hw-HExe"
  },  
  {
    title: "C",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQQyELeg2UEu0BWuiR8253WKVdDqrpHD0BzTfm6PK9jF8mDBOnA"
  },
  {
    title: "D",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3M1nKRdp5IEj9XJGTBXLZ6aNzCFSIb3JRO95m0XHVFoTYMo-wg"
  },
]


//중요! -> 모든 컴포넌트는 render 함수를 갖고 있다.
//render 기능은 '뭔가를 보여주는, 출력하는 기능이다.
class App extends Component {
  render() {
    return (     
      //React에서 자바스크립트 속 html과 유사한 이 문법을 JSX라고 부른다.//
      //JSX는 리액트 컴포넌트를 만들 때 사용하는 언어이다.//
      <div className="App">
        {movies.map((movie, index) => {
          //index는 현재 cycle 상황에서 movie 안에 들어온 argument의 index이다.
          //즉, movie의 리스트 속 index
          //복수의 child 컴포넌트는 각각 고유한 key값을 갖어야한다.
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
