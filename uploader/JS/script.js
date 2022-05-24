let dropElm = document.querySelector(".drop-elm");

let table = document.querySelector(".table");

let tbody = table.querySelector("tbody");

let th = tbody.querySelector("th");

let upload = document.querySelector(".fa-cloud-arrow-up");

console.log(upload);

let removes = "";

let id=1;

let allfiles = [];

dropElm.ondragover =(e)=>e.preventDefault();

if(tbody.rows.length > 0){
    table.classList.remove("d-none")
}
else{
    table.classList.add("d-none");
}

upload.addEventListener("click",function(){
    document.querySelector(".browse").click();
})

document.querySelector(".browse").addEventListener("change",function(e){
    uploadFiles(e.target.files);
})


dropElm.addEventListener("drop",function(e){
    e.preventDefault();

    uploadFiles([...e.dataTransfer.files])

    if(tbody.rows.length > 0){
        table.classList.remove("d-none")
    }
    else{
        table.classList.add("d-none");
    }


    let files = [...e.dataTransfer.files];

    
})

function uploadFiles (files){
    for (let i = 0; i < files.length; i++) {

        allfiles.push(files[i].name);

        // console.log(allfiles);

        files[i].id =0;

        let reader = new FileReader();
        reader.addEventListener("loadend",function(e){

            for (let j = 0; j < allfiles.length; j++) {
                if(allfiles[j] == files[i].name){
                    files[i].id = j+1;
                }
            }

            

            let tableContent = `<tr>
                                    <th scope="row">${files[i].id}</th>
                                    <td>
                                        <img src="${e.target.result}" alt="image">
                                    </td>
                                    <td>${files[i].name}</td>
                                    <td>${files[i].size}</td>
                                    <td>
                                        <i class="fa-solid fa-square-xmark"></i>
                                    </td>
                                </tr>`

            tbody.innerHTML += tableContent;


            removes = tbody.querySelectorAll(".fa-square-xmark");

            console.log(removes);

            [...removes].forEach(remove=>{
                remove.addEventListener("click",function(e){

                    let removeI = e.target.parentNode.parentNode.rowIndex;
                    tbody.deleteRow(removeI-1);  
                
                for (let u = 0; u < tbody.rows.length; u++) {
                    if(tbody.rows.item(u).cells.item(0).innerText != u){
                        tbody.rows.item(u).cells.item(0).innerText = u+1;
                    }
                }

                if(tbody.rows.length > 0){
                    table.classList.remove("d-none")
                }
                else{
                    table.classList.add("d-none");
                }
                
            })
            })

            

            if(tbody.rows.length > 0){
                // table.style.cssText += "visibility:visible;";
                table.classList.remove("d-none")
            }
            else{
                // table.style.cssText += "visibility:hidden;";
                table.classList.add("d-none");
            }
        })
        reader.readAsDataURL(files[i]);
    }
}


// [...e.dataTransfer.files].forEach(file=>{
//     let reader = new FileReader();
//     reader.addEventListener("loadend",function(e){
//         let tableContent = `<tr>
//                                 <th scope="row">1</th>
//                                 <td>
//                                     <img src="${e.target.result}" alt="image">
//                                 </td>
//                                 <td>${file.name}</td>
//                                 <td>${file.size}</td>
//                                 <td>
//                                     <i class="fa-solid fa-square-xmark"></i>
//                                 </td>
//                             </tr>`
//         tbody.innerHTML += tableContent;

//         remove = tbody.querySelector(".fa-square-xmark");

//         remove.addEventListener("click",function(){
//             table.deleteRow()
//         })

//         if(tbody.innerHTML.trim() != ""){
//             table.style.cssText += "visibility:visible;";
//         }
//     })
//     reader.readAsDataURL(file);
// })


//v2

// dropElm.addEventListener("drop",function(e){
//     e.preventDefault();

//     if(tbody.innerHTML.trim() == ""){
//         table.style.cssText += "visibility:hidden;";
//     }

//     let files = [...e.dataTransfer.files];


//     allfiles.push(files);

//     console.log(allfiles);

//     for (let i = 0; i < files.length; i++) {

//         let reader = new FileReader();
//         reader.addEventListener("loadend",function(e){

//             files[i].idnumber = 0;

//             for (let i = 1; i <= allfiles.length; i++) {
//                 for (let j = 0; i < tbody.rows.length; i++) {
//                     allfiles[i].files[i].idnumber = i;
//                 }
//             }

//             let tableContent = `<tr>
//                                     <th scope="row">${files[i].idnumber}</th>
//                                     <td>
//                                         <img src="${e.target.result}" alt="image">
//                                     </td>
//                                     <td>${files[i].name}</td>
//                                     <td>${files[i].size}</td>
//                                     <td>
//                                         <i class="fa-solid fa-square-xmark"></i>
//                                     </td>
//                                 </tr>`
//             tbody.innerHTML += tableContent;


//             remove = tbody.querySelector(".fa-square-xmark");

//             remove.addEventListener("click",function(){
//                 tbody.deleteRow(files[i].id);
//             })

//             if(tbody.innerHTML.trim() != ""){
//                 table.style.cssText += "visibility:visible;";
//             }
//             else if(tbody.innerHTML.trim() == ""){
//                 table.style.cssText += "visibility:hidden;";
//             }
//         })
//         reader.readAsDataURL(files[i]);
//     }
// })

