const getData = () =>{
    const searchInput = document.getElementById('search-input');
    const searchInputText = searchInput.value;
    searchInput.value = '';
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchInputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data));
}
const displayData = (phoneData) =>{
    console.log(phoneData);
     phoneData.forEach(phone =>{
         const cardField = document.getElementById('card');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`<div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">${phone.phone_name}</p>
        </div>
      </div>`; 
      cardField.appendChild(div);

    }) 
}
