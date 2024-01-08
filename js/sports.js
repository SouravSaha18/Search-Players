const searchPlayer = () => {
    const searchField = document.getElementById('search-field');
    const search = searchField.value;
    loadPlayer(search);
    searchField.value = "";
}

const loadPlayer = player => {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.player))
}

const displayPlayer = data => {
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = ``;
    data.forEach(player => {
        if (player.strCutout) {
            console.log(player);
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('col');
            playerDiv.innerHTML = `
        <div onclick="loadDetails('${player.strPlayer}')" class="card">
            <img src=${player.strCutout} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strNationality}</p>
            </div>
        </div>
        `
            playerContainer.appendChild(playerDiv);
        }
    })
}

const loadDetails = player => {
    console.log(player);
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.player[0]))
}

const displayDetails = player => {
    console.log(player);
    const detailsContainer = document.getElementById('detail-container');
    detailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `<div class="card" style="width: 20rem;">
    <img src="${player.strCutout}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${player.strPlayer}</h5>
    <p class="card-text">${player.strNationality}</p>
    <p class="card-text"> Position = ${player.strPosition}</p> 
    <p class="card-text"> Sports= ${player.strSport}</p> 
    <p class="card-text"> Clubs = ${player.strTeam}</p> 
    <p class="card-text"> Jersy Number = ${player.strNumber ? player.strNumber : '18'}</p> 
    <p class="card-text"> Status = ${player.strStatus}</p> 
    </div>
    </div>`
    detailsContainer.appendChild(div);
    //console.log('gvhbnjmk');
}