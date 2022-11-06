const formEl=document.getElementById("form")
const searchInput=document.getElementById("search__input")
const resultWrapper=document.getElementById("result__wrapper")
const textName=document.getElementById("textName")
const descriptionEl=document.getElementById("description")
const infoWrapper=document.getElementById("info__wrapper")


formEl.addEventListener("submit",dictonary)

function dictonary(e){
    e.preventDefault()
    infoWrapper.innerHTML=''
    ;(()=>{
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+searchInput.value)
        .then(api=>api.json())
        .then(date=>{
            date.forEach(person=>{
                console.log(person);
                textName.textContent=person.word + ' - ' + person.phonetics[1].text.split('/').join('');
                const dec=document.createElement('p')
                dec.className='description'
                infoWrapper.appendChild(dec)
                dec.textContent=person.meanings[0].definitions[0].definition
            
                if(person.meanings[0].definitions[0].example != undefined){
                    const example=document.createElement('p')
                    example.className='example'
                    infoWrapper.appendChild(example)
                    example.textContent="Example"+person.meanings[0].definitions[0].example
                }

                const audioEl=document.createElement("audio")
                audioEl.className="audioEl"
                infoWrapper.appendChild(audioEl)
                person.phonetics.forEach(music => {
                    audioEl.src = music.audio;
                    audioEl.setAttribute("controls", "")
                })
                console.log(audioEl);
            })

        })
    })()
    searchInput.value=''
}

searchInput.addEventListener("mouseover",()=>{
    searchInput.style.boxShadow='0px 0px 4px 2px dodgerblue';
})
searchInput.addEventListener("mouseleave",()=>{
    searchInput.style.boxShadow='';
})


