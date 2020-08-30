REACT SIMPLE BOARD
=========================
### 0. 링크
https://yshjft.github.io/react_simple_board/
<br/>(현재 이미지가 로드되지 않고 있습니다.)

### 1. 간략한 소개
지금까지 배운 React 관련 기술을 정리하여 만든 간단한 게시판(?) 프로젝트 입니다.

### 2. 기술 스택
* React JS(React-Router)
* Redux

### 3. 기능
* 메인페이지(READ)
<img src="./public/images/main_page.gif">
작성된 글들을 확인할 수 있습니다   
<br/>
<br/>

* 글 쓰기(CREATE)
<img src="./public/images/write.gif">
새로운 글을 작성할 수 있습니다. 이후 글 수정이나 삭제를 위해 password를 설정합니다. password의 경우 어떠한 특별한 처리도 하지 않은 단순 문자열 입니다   
<br/>
<br/>


* 글 수정하기(UPDATE)
<img src="./public/images/update.gif">
기존에 작성된 글을 수정할 수 있습니다. 생성된 모달을 통해 기존해 설정해 두었던 password를 입력하여 수정합니다. 수정할 경우 modified라고 날짜에 표시가 됩니다. 사진은 업로드할 수 없습니다.
<br/>
<br/>

* 글 삭제(DELETE)
<img src="./public/images/delete.gif">
기존에 작성된 글을 삭제할 수 있습니다. 생성된 모달을 통해 기존해 설정해 두었던 password를 입력하여 글을 삭제합니다.
<br/>
<br/>

* 페이지네이션(PAGINATION)
<img src="./public/images/pagination.gif">
작성된 글이 많아 보여주게 될 글 목록이 많은 경우 하나의 페이지에 모든 글들을 보여주지 않고 여러 페이지에 나누어 보여줍니다.
<br/>
<br/>

### 4. 이후 계획
1) 현재 사진이 정상적으로 load되지 않으므로 이를 정상 작동하도록 수정할 예정입니다. 
