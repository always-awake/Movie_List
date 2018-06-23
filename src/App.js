import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//중요! -> 모든 컴포넌트는 render 함수를 갖고 있다.
//render 기능은 '뭔가를 보여주는, 출력하는 기능이다.
class App extends Component {
  render() {
    return (     
      //React에서 자바스크립트 속 html과 유사한 이 문법을 JSX라고 부른다.//
      //JSX는 리액트 컴포넌트를 만들 때 사용하는 언어이다.//
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
