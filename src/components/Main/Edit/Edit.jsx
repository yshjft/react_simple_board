import React from 'react';

function editPage(){
    return(
        <div className="Main">
            <form id="writeForm" className="writeForm">
                <div className="form">
                    <input type="txt" placeholder="Title" className="input title" name="title" required></input>
                </div>
                <div className="form">
                    <input type="txt" placeholder="Subtitle" className="input subTitle" name="subTitle" required></input>
                </div>
                <div className="form">
                    <input type="txt" placeholder="Writer" className="input writer" name="writer" required></input>
                </div>
                <div className="form">
                    <input className="input date" name="date" readOnly></input>
                </div>
                <div className="form">
                    <textarea placeholder="write something" className="write" name="write" required></textarea>
                </div>
                <div className="form">
                    <input type="password" placeholder="password for Edit or Delete"className="input password" name="password"></input>
                </div>
                <div className="form">
                    <input type="submit" value="SUBMIT" className="submitBtn"></input>
                </div>
            </form>
        </div>
    )
}

export default editPage;