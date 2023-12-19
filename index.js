

var bookmarkName = document.getElementById('bookName')
var bookmarkLink = document.getElementById('bookUrl')

var list


if(localStorage.getItem('bookmark') != null ){

    list = JSON.parse(localStorage.getItem('bookmark'))
    displayLink(list)
}
else{
    list=[]
}





function add() {
   if (validName() && validLink()) {
    var links = {
        title : bookmarkName.value ,
        link : bookmarkLink.value 
    }
    list.push(links)
    localStorage.setItem('bookmark',JSON.stringify(list))
    displayLink(list)
    clear()
   }
   else{
    document.getElementById('layer').classList.replace('d-none','d-block')
   }
    
}

function displayLink(links){
    var cartona=''

    for (var i = 0; i < list.length; i++) {
        cartona+=`
            <tr>
            <td>${i+1}</td>
            <td>${list[i].title}</td> 
            <td><a href="${list[i].link}" target="_blank" ><button class="visit">Visit</button></a></td>
            <td><button class="delete" onclick=(deleteLink(${i}))>Delete</button></td>
            </tr>   
        `
    }
    document.getElementById('perant').innerHTML=cartona
}


function validName() {
    var regex = /^[A-Z][a-z]{2,7}$/
    if  (regex.test(bookmarkName.value) === false){
       bookmarkName.classList.add('not-valid')
       bookmarkName.style.borderColor='rgba(255, 10, 6, 0.299)'
    }
    else
    {
        bookmarkName.classList.replace('not-valid','valid')
        bookmarkName.style.borderColor='rgba(6, 255, 60, 0.282)'
    }
    return regex.test(bookmarkName.value)
    
}
function validLink() {
    var regex = /^(http:|https:)(\/\/)(.){3,}(\.com)?$/
    if  (regex.test(bookmarkLink.value) === false){
        bookmarkLink.classList.add('not-valid')
        bookmarkLink.style.borderColor='rgba(255, 10, 6, 0.299)'
        
     }
     else
     {
         bookmarkLink.classList.replace('not-valid','valid')
         bookmarkLink.style.borderColor='rgba(6, 255, 60, 0.282)'
         
     }
    return regex.test(bookmarkLink.value)
}

function none() {
    document.getElementById('layer').classList.replace('d-block','d-none')
}

function deleteLink(index) {

        list.splice(index,1)
        displayLink(list)
        localStorage.setItem('bookmark',JSON.stringify(list))
        
    
}

function clear() {
    

    bookmarkLink.value=''
    bookmarkName.value=''


}