import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state===undefined){
        return {
            lastId : 0,
            list : [
                {
                    id : 0,
                    path: "/intro",
                    title : "INTRO",
                    writer : "yshjft",
                    date : "2020.8.17",
                    subTitle : "SIMPLE BOARD에 대한 간다한 설명입니다.",
                    imgSrc : "/images/intro.png",
                },
                /*
                    id
                    path
                    title
                    writer
                    date
                    subTitle
                    main content(write)
                    password
                */
            ]
        }
    } else if(action.type === "EDIT_LASTID"){
        // let _lastId=action.lastId;
        // return {lastId: _lastId};

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