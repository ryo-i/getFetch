const fetchForm = document.querySelector('.fetchForm');
const btn = document.querySelector('.btn');
const name = document.querySelector('.name');
const url = 'json/res.json';

const getFetch = () => {
    let formData = new FormData(fetchForm);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        } 
        console.log("ok!");
        return response.json();
    }).then((data)  => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
};

btn.addEventListener('click', getFetch, false);