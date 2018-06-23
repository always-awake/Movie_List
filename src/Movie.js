import React, { Component } from 'react';
import './Movie.css';

//컴포넌트는 항상 render을 해야한다. = 컴포넌트는 항상 render()함수를 갖고 있어야 한다.//
//컴포넌트 생성 > 렌터 > 리턴 > JSX (html과 유사) 
class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoster />                
            <h1>Hello world!</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yWk-LBi5L5Vs_qFSU7doEIGPI5oUtBCLqbnFPbp1tkHcZdIfiQ"/>
        );
    }
}


export default Movie;