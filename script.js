function fun() {
    let a = document.getElementById('p');
    // let t = document.getElementById('text').value;
    let b = document.getElementById('b');
    let url = fetch('https://dog.ceo/api/breeds/image/random')
    url.then(data => data.json()).then((d) => {
        console.log(d);
        a.innerHTML = `<img src="${d.message}" alt="" width="400" height="400">`;
    })
}