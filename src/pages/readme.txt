index.js
    App.js에서 페이지를 불러오는데 페이지를 한꺼번에 import해서 불러올 수 있게 하는 게 index.js임

새로운 페이지를 위해 js 를 추가할 경우
1. index.js 에 export 추가
2. App.js에
    import  {Main, [새로운 js 파일명]}  from './pages';
    추가