import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


//중요! -> 모든 컴포넌트는 render 함수를 갖고 있다.
//render 기능은 '뭔가를 보여주는, 출력하는 기능이다.
class App extends Component {

//모든 컴포넌트 속 state가 바뀔 때마다, 컴포넌트는 다시 render한다.
//state를 바꿀때는 setState를 이용해서 변경해줘야한다. (바로 this.~ 이런 식으로 쓰면 안된다.)
//state가 변경되면, 새로운 state와 함께 다시 render한다.
  state = {
  }

  componentDidMount(){
    //setTimeout(function(){A}, B)은 B시간 후에 A작업(함수)을 수행시킨다는 의미이다.
    //setTimeout(() => {A}, B) 같은 의미이다.
    setTimeout(() => {
      this.setState({
            //자식 컴포넌트에게 던져줄 데이터를 저장하는 배열이다.
        movies: [
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
          {
            title: "E",
            poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gg1322XX08ATpBCgLDJugxYUw7-qz6MEvMkoDhmnlbHm460n"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
      //map 함수는 각각의 고유한 props를 갖고 있는 <Movie />들의 배열을 출력한다.
    const movies = this.state.movies.map((movie, index) => {
      //index는 현재 cycle 상황에서 movie 안에 들어온 argument의 index이다.
      //즉, movie의 리스트 속 index
      //복수의 child 컴포넌트는 각각 고유한 key값을 갖어야한다.
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (     
      //React에서 자바스크립트 속 html과 유사한 이 문법을 JSX라고 부른다.//
      //JSX는 리액트 컴포넌트를 만들 때 사용하는 언어이다.//
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
 