import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//이미 처음부터 props를 사용하기 때문에 this.~ 가 필요없다.
function Movie({title, poster, genres, synopsis}){
    console.log(genres)
    return (
        <div className="Movie">

            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>

                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    );
}

//Dumb Component: state가 없는 컴포넌트
//return만을 위한 컴포넌트이다.
//컴포넌트 lifecycle이 없다. 또한 functional render도 없다.
function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}


//Dumb Component에서 PropTypes를 설정하는 방법
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;