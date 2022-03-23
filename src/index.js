console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', () => {
    //const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then (resp => resp.json())
    .then (data => { 
        //img = document.createElement ("img")
        data.message.forEach( message => {
            const img = document.createElement ("img")
            const container = document.querySelector("#dog-image-container")
            img.src = message
            container.append(img)
            }
        )})})

        fetch ('https://dog.ceo/api/breeds/list/all')
        .then (resp => resp.json())
        .then (data => {
            for (const breed in data.message) {
               const dog = document.createElement('li')
               const list = document.querySelector('#dog-breeds')
               dog.textContent = breed
               list.append(dog)
               dog.addEventListener('click', () => {
                dog.style.color = 'blue';
            })
            
            }
            
            const lttrslct = document.getElementById('breed-dropdown');
            
            lttrslct.addEventListener('change',(e) => {
                const letter = e.target.value
                const allLi = document.querySelectorAll('li')
                allLi.forEach(dog => {
                    if (dog.innerText.startsWith(letter)) {
                        dog.style.display = ""
                    } else {
                        dog.style.display = "none"
                    }
    
                })
            })
            
           
            

        })