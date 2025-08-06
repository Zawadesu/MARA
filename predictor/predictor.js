let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// model part

let selectedOrgan = null;

function selectOrgan(organ) {
    selectedOrgan = organ;
    document.getElementById('default-message').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
}

async function predict() {
    const age = document.getElementById('age').value;
    if (!age || !selectedOrgan) {
        alert('Please enter a number between 40-69!');
        return;
    }

    const sex = document.getElementById('sex').value;
    if (sex.toLowerCase() !== 'male' && sex.toLowerCase() !== 'female') {
        alert('Please enter \'male\' or \'female\'!');
        return;
    }
}

    