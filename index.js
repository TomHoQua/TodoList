const inputField = document.getElementById("inputField");
const addButon = document.getElementById("addButon");
const container = document.getElementById("container");



// addButon.addEventListener('click',()=> {
//     if(inputField.value != ""){
//         let paragraph = document.createElement('li'); /*1, creates paragraph as an empty li or p or other tags*/
//         paragraph.classList.add('paragraph-styling'); /* styles my tag*/ 
//         paragraph.innerText = inputField.value; /*3, saves value of inputfield and puts the text in paragraph*/ 
//         container.appendChild(paragraph); /** 2, appends into my div container */
//         inputField.value = "";  /**empties my input value right after */
    
//         paragraph.addEventListener('click',()=> {/**listener that will react when i click on paragraph-> the added item*/
//             paragraph.style.textDecoration = 'line-through'; /**accesses style */
//         })
//         paragraph.addEventListener('dblclick',()=> { /**listener that will react when i click on paragraph-> the added item*/
//             container.removeChild(paragraph); /**removes from my div container*/
//         })
//     }

//     else{
//         alert("YOU DIDN'T ADD ANYTHING");
//     }
// }) 


addButon.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.textContent = inputField.value;
    container.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',()=>{
        container.removeChild(paragraph);
    })

    if(paragraph.textContent ==""){
        container.removeChild(paragraph);
    }
})