var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var formButton=document.getElementById("submitButton");
var updateButton= document.getElementById("update");


var productsContainer;
if(localStorage.getItem("productsList")==null)
{
    productsContainer=[];
}
else{
    productsContainer=JSON.parse(localStorage.getItem("productsList"));
    displayProducts();
}

function addProduct() {
 if(checkInput()== true){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("productsList",JSON.stringify(productsContainer));
    displayProducts();
     clearForm();
     }
 else{
window.alert("sorry all fields are required");
 }  
}

function clearForm() {
  productNameInput.value = "";
    productPriceInput.value = "";
    productDescInput.value = "";
    productCategoryInput.value = "";
}
 


function checkInput(){
    if (productNameInput.value!= "" && 
    productPriceInput.value!=""&&
    productCategoryInput.value!=""&&
     productDescInput.value!="")
     {
         return true;
     }
     else{
         return false;
     }
}
function displayProducts(){
    var cartoona = ``;
    for(var i=0; i<productsContainer.length; i++){
        cartoona+=`<tr>
        <td>${i}</td>
         <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price} </t>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="updatePoroduct(${i})" class="btn btn-outline-warning"> update</button></td>
        <td><button onclick="deletePoroducts(${i})" class="btn btn-outline-danger"> delete</button></td>
       </tr> `;
    }
    document.getElementById("tablebody").innerHTML=cartoona;
}

function searchProducts(term){
        var cartoona = ``;
     for(var i=0; i<productsContainer.length; i++){
         if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
         {
            cartoona+=`<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price} </t>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button  class="btn btn-outline-warning"> update</button></td>
            <td><button  onclick="deletePoroducts(${i})" class="btn btn-outline-danger"> delete</button></td>
           </tr> `;
         }
        }
        document.getElementById("tablebody").innerHTML=cartoona;
    }
    
function deletePoroducts(index){
    productsContainer.splice(index,1);
    displayProducts();
    localStorage.setItem("productsList",JSON.stringify(productsContainer));
}


function updatePoroduct(index){
    productNameInput.value = productsContainer[index].name;
    productPriceInput.value = productsContainer[index].price;
    productCategoryInput.value = productsContainer[index].category;
    productDescInput.value = productsContainer[index].desc;
    updateButton.style.display="inline";
    formButton.style.display="none";
    updatedIndex=index;
     }
     function editProduct(){
        var updatedproduct = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value,
            }
            //  productsContainer.splice(updatedIndex,1,updatedproduct);
            productsContainer[updatedIndex]=updatedproduct;
             localStorage.setItem("productsList",JSON.stringify(productsContainer));
             updateButton.style.display="none";
             formButton.style.display="inline";
             clearForm();
             displayProducts();
     } 



