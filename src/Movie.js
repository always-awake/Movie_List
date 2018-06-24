import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


//컴포넌트는 항상 render을 해야한다. = 컴포넌트는 항상 render()함수를 갖고 있어야 한다.//
//컴포넌트 생성 > 렌터 > 리턴 > JSX (html과 유사) 

class Movie extends Component{
    //App(father)이 보내준 props가 Movie(child)가 원하는 데이터 tpye인지 체크하는 부분
    //보내준 props type과 원하는 props type이 다르다면, console에서 Error 메세지가 뜬다. 
    static propTypes = {
        //"title props는 string type으로만 출력한다."의미
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }
    //child component에서 father component가 준 props에 접근하는 방법
    // -> By calling '{this.props.~}'
    render(){
        return(
            <div>
            <MoviePoster poster={this.props.poster}/>           
            <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    //Movie(father)이 보내준 props가 MoviePoster(child)가 원하는 데이터 tpye인지 체크하는 부분
    //보내준 props type과 원하는 props type이 다르다면, console에서 Error 메세지가 뜬다. 
    static propTypes = {
        poster: PropTypes.string
    }

    render(){
        return(
            //{}속에 해당 porps를 지정해줘야한다.    
            <img src={this.props.poster} alt="Movie Poster" />
        );
    }
}


export default Movie;