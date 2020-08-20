import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state===undefined){
        return {
            lastId : 0,
            intro :{
                id : 0,
                path: "/intro",
                title : "INTRO",
                writer : "yshjft",
                date : "2020.8.17",
                subTitle : "SIMPLE BOARD에 대한 간다한 설명입니다.",
                imgSrc : "/images/intro.png",
            },
            list : [
                {
                    id : 0,
                    path: "/0",
                    title : "FIRST EXAMPLE",
                    writer : "yshjft",
                    date : "2020.8.20",
                    subTitle : "첫번째 예시입니다.",
                    write : "SIMPLE BOARD의 WRITE를 통하여 원하는 내용을 입력한 경우 첫번째 예시와 같이 내용이 나타납니다.",
                    password : "111111"
                },
            ]
        }
    } else if(action.type === "EDIT_LASTID"){
        return {...state, lastId : action.lastId}
    }
    else if(action.type === "WRITE"){
        let originalList=state.list;
        let _list=originalList.concat({
            id : action.id,
            path : "/"+action.id,
            title : action.title,
            writer: action.writer,
            date : action.date,
            subTitle : action.subTitle,
            write : action.write,
            password : action.password,
        });

        return {...state, list : _list};
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());