

async function displayData() {
    let res=await fetch("http://localhost:3000/student")
    try {
        if(!res.ok){
            throw new Error("Data Not Getting");
            
        }
        let data=await res.json();
        showdata(data)
    } catch (error) {
        console.log(error)
    }
}

function showdata(data) {

    let container = document.getElementById("container");

    container.innerHTML = data.map(ele => `
        <div class="card">

            <img src="${ele.image}" alt="${ele.name}">

            <div class="details">
                <h2>${ele.name}</h2>
                <p>ID : ${ele.id}</p>

            </div>

        </div>
    `).join("");

}


addEventListener("DOMContentLoaded", displayData)