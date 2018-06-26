import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//이미 처음부터 props를 사용하기 때문에 this.~ 가 필요없다.
function Movie({title, poster}){
    return (
        <div>
        <MoviePoster poster={poster} />
        <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

//Dumb Component: state가 없는 컴포넌트
//return만을 위한 컴포넌트이다.
//컴포넌트 lifecycle이 없다. 또한 functional render도 없다.
function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}



//Dumb Component에서 PropTypes를 설정하는 방법
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}


export default Movie;