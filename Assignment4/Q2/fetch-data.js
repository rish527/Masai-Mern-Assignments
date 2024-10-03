
var palce=document.getElementById('data');
var getData=document.getElementById('fetch');
function putImages(arr){
    var id=1;
    arr.forEach(element => {
        palce.innerHTML+=`
            <img src=${element.download_url} class="size-72 p-2 m-3"></img>
        `;
    });
}
getData.addEventListener('click',()=>{
    fetch('https://picsum.photos/v2/list?pages=1&limit=12')
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data);
        putImages(data);
    })
    .catch((error)=>{
        console.error('Error:',error);
        palce.innerHTML+=`<h3>Api failed to fetch data</h3>`;
    })
})
