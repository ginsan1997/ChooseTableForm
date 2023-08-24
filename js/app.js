let textT = document.querySelectorAll('.textT')
let blockTableItem = document.querySelectorAll('.blockTableItem')
let tablePlaceholder = document.querySelectorAll('.tablePlaceholder')


blockTableItem.forEach(item=>{
    

    item.addEventListener('click',()=>{
        blockTableItem.forEach(item=>{
            item.firstChild.style.opacity = 0
        })


        item.firstChild.style.opacity = 1

        tablePlaceholder.forEach(tablePlaceholder=>{
            tablePlaceholder.innerText = item.firstChild.innerText
        })
        
        
    })
})

