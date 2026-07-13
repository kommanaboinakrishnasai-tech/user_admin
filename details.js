
async function fetchData() {
    let res = await fetch("http://localhost:3000/student");
    try   {
        if (!res.ok) {
            throw new Error("Data not fetching");
        }
        let data = await res.json();
        showdata(data);
    } catch (error) {
        console.log(error);
    }
}
function showdata(data) {
    let container = document.getElementById("container")
    //let item = document.createElement("div");
 container.innerHTML= data.map((student) => {
        return `
        <div class="card">
    <img src="${student.image}" alt="${student.name}">

    <div class="details">
        <h2>${student.name}</h2>
        <p><strong>ID:</strong> ${student.id}</p>

        <div class="buttons">
            <button class="edit" id="edit${student.id}">
                Edit
            </button>

            <button class="delete" id="delete${student.id}">
                Delete
            </button>
        </div>
    </div>
</div>
        `

    }).join("");
    
    //container.appendChild(item);
data.forEach(student => {
    let deletebtn=document.getElementById(`delete${student.id}`)
    let editbtn=document.getElementById(`edit${student.id}`)
    deletebtn.onclick=()=>{
        deleteData(student.id);
    }
    editbtn.onclick=()=>{
        editData(student.id)
    }
    
});
}
//Deleting the Data
async function deleteData(id) {
    let res=await fetch(`http://localhost:3000/student/${id}`,{"method":"DELETE"})
    try {
        if(!res.ok){
            throw new Error("Data Not Deleted");
            
        }
        alert("data Deleted")
    } catch (error) {
        
    }
}

//editing the data
async function editData(id) {
    let studentId=document.getElementById("id");
    let stName=document.getElementById("name");
    let image=document.getElementById("image")
    let res=await fetch(`http://localhost:3000/student/${id}`)
    try {
        if(!res.ok){
            throw new Error("Data not getting in inputfields");          
        }
        let data=await res.json();
        studentId.value=data.id;
        stName.value=data.name;
        image.value=data.image

    } catch (error) {
        console.log(error)
    }
}
//save data

async function savedata(){
   let studentId=document.getElementById("id").value;
   let name=document.getElementById("name").value;
   let image=document.getElementById("image").value;

   let obj={
    "name":name,
    "image":image
   }

   let StudentMethod=studentId?"PUT":"POST";
   const URL=studentId?`http://localhost:3000/student/${studentId}`:"http://localhost:3000/student"

   let res=await fetch(URL,{
    "method":StudentMethod,
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(obj)
   })
   try {
    if(!res.ok){
        throw new Error("Data Not Updated");
        
    }
    alert("data Updated Successfully")
   } catch (error) {
    
   }
}
addEventListener("DOMContentLoaded", fetchData)