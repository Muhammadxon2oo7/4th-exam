const containerEl=document.getElementById("container")

;(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(api=>api.json())
    .then(date=>{
        date.forEach(person=>{
            const card=document.createElement("div")
            card.className='card'
            containerEl.appendChild(card)

            const imgWrapper=document.createElement("div")
            imgWrapper.className='img__wrapper'
            card.appendChild(imgWrapper)

            const img=document.createElement('img')
            img.src=person.image
            img.className='img'
            imgWrapper.appendChild(img)


            const priceEl=document.createElement("p")
            priceEl.className='texts'
            card.appendChild(priceEl)
            priceEl.textContent="Price : $"+ person.price

            const productDiscountEl=document.createElement("p")
            productDiscountEl.className='texts'
            card.appendChild(productDiscountEl)
            productDiscountEl.textContent="Discount: "+person.rating.count

            const productDescriptionEl=document.createElement("p")
            productDescriptionEl.className='texts'
            card.appendChild(productDescriptionEl)
            productDescriptionEl.textContent="Desc: "+person.description

            const productNameEl=document.createElement("strong")
            productNameEl.className='name'
            card.appendChild(productNameEl)
            productNameEl.textContent="Name: "+person.title

            const imgRemoveIcon=document.createElement("i")
            imgRemoveIcon.className='fa-solid fa-trash removIcon'
            card.appendChild(imgRemoveIcon)
            imgRemoveIcon.src = ""
            
            imgRemoveIcon.addEventListener('click',()=>{
                const agree=confirm("Are you sure you want to delete this product?")
                if(agree){
                    fetch('https://dummyjson.com/products/'+person.id, {
                    method: 'DELETE',
                  })
                  .then(res => res.json())
                  .then(console.log);
                  containerEl.removeChild(card)
                  
                }
            })
        })
        
    })
})() 

