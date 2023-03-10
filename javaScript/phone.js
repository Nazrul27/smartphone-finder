
const getData = () =>{
    const searchInput = document.getElementById('search-input');
    const searchInputText = searchInput.value;
    spinnerLoading('block');
    searchInput.value = '';
    if(searchInputText.length == ''){
      errorMessage('block');
      spinnerLoading('none');
    }else{   
      const url =`https://openapi.programming-hero.com/api/phones?search=${searchInputText}`
      fetch(url)
      .then(res => res.json())
      .then(data => displayData(data.data));
    }
    
    
}
 const displayData = (phoneData) =>{
  const cardField = document.getElementById('card');
  cardField.textContent = '';
     phoneData.forEach(phone =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`<div onclick ="getDetails('${phone.slug}')" class="card">
        <img  src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">${phone.phone_name}</p>
        </div>
      </div>`; 
      cardField.appendChild(div);

    }) 
    errorMessage('none');
    spinnerLoading('none');
}
const getDetails = (detail) =>{    
     const url = `https://openapi.programming-hero.com/api/phone/${detail}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayGetDetails(data.data)) 
}
  const displayGetDetails = (data) =>{
    const detailField = document.getElementById('details');
    detailField.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="card">
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.releaseDate ? data.releaseDate:'No release date yet'}</h5>
      <p class="card-text">Display: ${data.mainFeatures.displaySize}</p>
      <p class="card-text">Storage: ${data.mainFeatures.storage}</p>
      <p class="card-text">Sensor: ${data.mainFeatures.sensors}</p>
    </div>
  </div>`;
  detailField.appendChild(div);
} 
// error handle
const errorMessage =displayError =>{
  document.getElementById('error').style.display = displayError;
}
// spinner
const spinnerLoading = displaySpinner =>{
document.getElementById('spinner').style.display = displaySpinner;
}

