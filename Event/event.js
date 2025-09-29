const links = document.querySelectorAll(".link")
console.log(links)
links.forEach(function (link){
    link.addEventListener('click',(e) =>{
        link.remove();
    });

});