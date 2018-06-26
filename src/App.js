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
  };

  componentDidMount(){
    this._getMovies();
  }

  
  _renderMovies = () => {
      //map 함수는 각각의 고유한 props를 갖고 있는 <Movie />들의 배열을 출력한다.
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      console.log(movie.genres)
      //index는 현재 cycle 상황에서 movie 안에 들어온 argument의 index이다.
      //즉, movie의 리스트 속 index
      //복수의 child 컴포넌트는 각각 고유한 key값을 갖어야한다.
      return (
        <Movie 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres}
          synopsis={movie.synopsis} 
          />
        );    
    });
    return movies;
  };


  _getMovies = async () => {
    //await = callApi()가 끝날 때까지 기다린다(성공여부와 상관없이)
    //callApi()가 return한 값을 movies 배열안에 대입한다.
    const movies = await this._callApi();
    this.setState({
      movies : movies
    })
  }
  
  _callApi = () => {
    //fetch는 url을 AJAX로 불러올 수 있다는 장점이 있다.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    //fetch작업이 끝나면(성공적 수행이 아니더라도), then을 불러온다.
    //fetch 작업이 완료되면, fetch된 값을 reponser에 저장하고, 0101 바이너라 코드로 된
    // response를 json으로 변형해준다.
    .then(response => response.json()) 
    //=> : return 의미가 내재되어 있는 표현법이다.(최신 자바스크립트 문법)
    .then(json => json.data.movies)
    //fetch작업이 에러가 난다면, catch를 실행시키고, console에 err를 표시
    .catch(err => console.log(err))
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
 