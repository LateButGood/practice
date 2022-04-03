const listupnewgood = function() {
    const newlist = document.createElement('div');
    const typedvalue = document.querySelector('#goods').value;
    const itemlist = document.querySelector('#listitems');
    newlist.className = 'list';
    itemlist.appendChild(newlist); 
    // 반드시 'div' 태그를 할당한 변수를 appendChild로 추가해야 한다. //
    newlist.innerHTML = typedvalue;
    // trash-can 감싸는 div 태그 추가 - 아직 완성 못했으니 여기서부터 시작//
    const trashclick = document.createElement('span');
    trashclick.className = 'trashdelete';
    trashclick.setAttribute('onclick', 'getridof()');
    trashclick.setAttribute('onfocus', 'this.blur()');
    newlist.appendChild(trashclick);
    // trash-can을 trashclick 스팬 태그의 하위태그로 추가 //
    const trashicon = document.createElement('i');
    trashicon.className = "fa fa-trash";
    trashicon.setAttribute('aria-hidden', 'true');
    trashclick.appendChild(trashicon);
}

/* 1. HTML input태그에 넣는 방법  
onkeyup="if(window.event.keyCode==13){listupnewgood()}"
*/

// 2. JS에 넣는 방법
window.onload = function() {
    const uploadtag = document.querySelector('#goods');
    uploadtag.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            listupnewgood();
        }
    })
    const upload = document.querySelector('.plusicon');
    upload.addEventListener('click', () => {
        listupnewgood();
    })    
}

/* 상품 업로드하는 함수 내용 .plusticon에 Attribute로 onclick = "listupgoods()"넣어야함
function listupgoods() {
    const newlist = document.createElement('div');
    const typedvalue = document.querySelector('#goods').value;
    const itemlist = document.querySelector('#listitems');
    newlist.className = 'list';
    itemlist.appendChild(newlist); 
    // 반드시 'div' 태그를 할당한 변수를 appendChild로 추가해야 한다. //
    newlist.innerHTML = typedvalue;
    // trash-can 감싸는 div 태그 추가 - 아직 완성 못했으니 여기서부터 시작//
    const trashclick = document.createElement('span');
    trashclick.className = 'trashdelete';
    trashclick.setAttribute('onclick', 'getridof()');
    trashclick.setAttribute('onfocus', 'this.blur()');
    newlist.appendChild(trashclick);

    // trash-can을 trashclick 스팬 태그의 하위태그로 추가 //
    const trashicon = document.createElement('i');
    trashicon.className = "fa fa-trash";
    trashicon.setAttribute('aria-hidden', 'true');
    trashclick.appendChild(trashicon);
    

}
*/


function getridof() {
    const firstlist = document.querySelector('.list');
    firstlist.remove();
}




/* 아이콘 클릭 시 리스트에 상품명 추가
function plusButton() {
    const plusIcon = document.getElementsByClassName('fa-plus-circle');
    plusIcon.addEventListener('click', ()=> {
        document.querySelector('.list').innerHtml="출력";
        
    })
}
*/

/* 상품고르기 버튼 클릭 시 '출력' 나옴
const list = document.querySelector('.putValue');
list.addEventListener('click', () => {
    document.querySelector('.list').innerHTML = "출력";
})
*/



