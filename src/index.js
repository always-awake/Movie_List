import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM은 리액트를 웹사이트에 출력(render)하는 것을 도와주는 model이다.
//DOM = Document Odject Model을 의미한다.
//리액트 =라이브러리, 리액트돔=라이브러리를 웹사이트에 출력해줌
//리액트 네이티브=라이브러리를 모바일앱에 출력해줌
//'ReactDOM이 id가 root인 곳에 App 컴포넌트를 출력한다.'라는 의미
//자세히: ReactDom이 App이라는 컴포넌트를 index.html 문서 속 id가 root인 element가 있는 곳에서 출력한다.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
