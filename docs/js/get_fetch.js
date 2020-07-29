const btn = document.querySelector('.btn');
const name = document.querySelector('.name');
const url = 'index.html';

const getFetch = () => {
    const nameVal = name.value;
    const params = {"name": nameVal};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        } 
        console.log("ok!");
        return response.json();
    }).then((data)  => {
        console.log(data);
        // 処理
    }).catch((error) => {
        console.log(error);
    });
};

btn.addEventListener('click', getFetch, false);