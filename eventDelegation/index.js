document.getElementById('my').addEventListener('click',(event) => {
    if(event.target.tagName === 'LI'){
        alert('Clicked on '+ event.target.textContent)
    }
})