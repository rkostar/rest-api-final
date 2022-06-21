// const get=  document.getElementById('get');
let wkCont= document.getElementById('wkCont');
const arr= Array.from(document.getElementsByClassName('cell'));

console.log(arr);
get
function getAll(event){
    event.preventDefault();
    window.open('http://localhost:8080/api/')
    
}



//getBin
function getBin(event){
    event.preventDefault();
    const binId= document.getElementById("id").value;
    let html=``;
    url = `http://localhost:8080/api/${binId}`
    
        fetch(url).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            const propertyKeys =  Object.keys(data);
            const provertyValues= Object.values(data);
            for(let i=0;i<propertyKeys.length;i++){
                html+=`<div class="val" style="display: block">${propertyKeys[i]}: ${provertyValues[i]} </div> `
            }

            wkCont.innerHTML=`<div class="wk-inner-container">${html}</div>` 
        }).catch(() => {
            console.log("sorry")
        })
}
//post


const htmlArr=[
    `
    <form onsubmit="getAll(event)">
        <button id="btn">get</button>
    </form>
    `,
    `
    <form onsubmit="getBin(event)">
        <label for="id">Enter BIN</label>
        <input type="text" id="id">
        <input type="submit" value="get details">
    </form>
    `
]

arr.map(button=>{

    button.addEventListener("click", ()=>{
        wkCont.innerHTML=""
        wkCont.style.height="70vh"
        console.log(button.innerText)
        for(var i=0;i<arr.length;i++){
            if(arr[i].innerText==button.innerText)
                break;
        }
        console.log(i)
        wkCont.innerHTML+=htmlArr[i];
    })
})

