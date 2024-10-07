
// // // var onerror = function errorHandle(msg , url , l , col, error){ 
// // //     console.log(msg)
// // //     console.log(url)
// // //     console.log(l)
// // //     console.log(i)
// // //     console.log(col)
// // //     console.log(error)
// // //      return false;
// // // }

// // // let updateTime = null; 
// // // let textContent= "";
// // // const FirstParagraph = document.getElementById('pdemo');
// // // const secondParagraph = document.getElementById('p2demo');
// // // const modeIcon = document.querySelector('.mode')


// // // function changeContent(){
// // //     textContent= " The Date Changed "
// // //     FirstParagraph.innerHTML = Date(); 
// // //     secondParagraph.innerHTML= textContent; 
// // // }

// // // function ShowContent(){ 
// // //      updateTime = setInterval(changeContent, 1000);
// // // }


// // // function stopInterval(){ 
// // //     clearInterval(updateTime)
// // //     textContent = " Date Stop";
// // //     secondParagraph.innerHTML= textContent; 
// // // }

// // // function changeFont(){ 
// // //     document.body.style.fontFamily = "Roboto-Regular"; 
// // //     document.body.style.backgroundColor = "lightgreen";
// // //     document.body.style.color='#000'
// // // }

// // // function resetAll(){ 
// // //     document.body.style.fontFamily= "Poppins"; 
// // //     document.body.style.backgroundColor= "#695050"; 

// // // }

// // // function modeChange(){ 
// // //     document.body.style.backgroundColor = "#000";
// // //     document.body.style.color= "#fff"
// // //     modeIcon.style.color= "#fff"
// // // }


// // // console.log(typeof modeIcon); 
// // // console.log(typeof modeChange); 

// // // var myName = 'maged atef arteen';
// // // console.log(myName);
// // // for(var i=0; i<myName.length; i++){ 
// // //     console.log(`The Position: ${i} & \t value : ${myName[i]}`)
// // // }


// // // // let myJob = 4000; 
// // // // let myJob = 'Biochemist';

// // // // const age ; 
// // // // age = "15" ;

// // // // const age = '15'
// // // // window.document.write(maged); 
// // // window.document.write('<h1>maged</h1>');
// // // // window.alert('Maged is Learning JS ');

// // // // document.querySelector('.pdemo').style.color = 'red'; 
// // // // document.getElementById(); 
// // // // document.getElementsByClassName(); 
// // // // document.getElementsByName(); 
// // // // document.getElementsByTagName()

// // // // let data_user = window.prompt('enter data'); 
// // // // console.log(data_user); 

// // // // if(isFinite(data_user)){console.log('data_user: number')}
// // // // else{console.log('data_user: string')}

// // // // let flag = isFinite(data_user) ; 
// // // // if(data_user =="" || data_user.startsWith( " ",0)){
// // // //     console.log('you entered empty value')
// // // // }else
// // // // {
// // // //     switch (flag){ 
    
// // // //         case true:
            
// // // //             console.log("number"); 
// // // //             break;
// // // //         case false:
// // // //             console.log('string')
// // // //             break; 
      
// // // //     }
// // // // }

// // // function makeRadius(){ 
// // //    let btn = document.getElementById('round'); 
// // // //    btn.style.width = "5rem"
// // // //    btn.style.height = "5rem"; 
// // // //    btn.style.fontSize = "1rem"
// // // //    btn.style.borderRadius = "40%"

  
// // // // }

// // // // const pulboff = document.getElementsByClassName('off');
// // // // const pulbon = document.getElementsByClassName('on');


// // // // function lightOn(){
// // // //     console.log('light on');
// // // //     let imgSrc = document.getElementById('imgstat').src = './pic_bulbon.gif';
// // // // }

// // // // function lightoff(){
// // // //     console.log('light off');
// // // //     let imgSrc = document.getElementById('imgstat').src = './pic_bulboff.gif';
// // // // }


// // // // var error = new Error(); 
// // // // error = "all is wrong "
// // // // let myfam = new Array(); 
// // // // myfam['dad'] = 'atef'; 
// // // // myfam['mum'] = 'wedad';
// // // // myfam['wife']= 'katy'; 
// // // // myfam['daughter']='myalexi'; 

// // // // console.log(myfam)

// // // // for(i in myfam){
// // // //    try {
// // // //     console.log('property i : ',i +"\t" + myfam[i] + "\n")
    
// // // //     throw(error)
    
// // // //    } catch (error) {
// // // //     console.log(onerror())
// // // //    }finally{
// // // //     console.log('im done')
// // // //    }
// // // // }


// // // // // ! Object Creation
// // // //     var name0 = {fname: 'maged', job: 'lab chemist'} 
// // // //     var name2 = new Object({name: 'atef', sname:'arteen'})
// // // //     var name3 = Object({name:'atef',sname:'arteen'})


// // // //     console.log(`name0: ${name0.fname} \n`)
// // // //     console.log(`name2: ${name2.name}\n`)
// // // //     console.log(`name3:  ${name3.name}\n`)


// // // //     function Student(ID, Name, Address){

// // // //         this.id = ID; 
// // // //         this.name =Name; 
// // // //         this.address=Address; 
// // // //     }

// // // //     var stu01 = new Student(1,'maged','alex'); 
// // // //     var stu02 = new Student(2,'atef','egypt'); 
// // // //     var stu03 = new Student(3,'arteen','KSA'); 

// // // //     console.log(stu01)


// // // //     function staff(job, age){
// // // //         return {
// // // //             staffjob: job,
// // // //             staffage:age
// // // //         }
// // // //     }

// // // //     var staff01 = staff("maged",35); 
// // // //     console.log(staff01)

// // // //     var obj = new staff('Doctor',40); 
// // // //     console.log(obj)



// // //     var doctor={ 
// // //         div:'gyna',
// // //         rank:4
// // //     }
    
// // //     // console.log(Object.getOwnPropertyNames(doctor))
// // //     // console.log(Object.getOwnPropertyDescriptors(doctor))
// // //     // console.log(Object.values(doctor))
// // //     // console.log(Object.keys(doctor))
// // //     // console.log(Object.getPrototypeOf(doctor))
// // //     // console.log(doctor.hasOwnProperty('div'))
// // //     // console.log(doctor.hasOwnProperty('rank'))
// // //     // console.log(doctor.hasOwnProperty('x'))


// // // // // delete(doctor.div)
// // // // console.log(Object.getOwnPropertyNames(doctor))








// // // var doctor={ 
// // //     div:'gyna',
// // //     rank:4
// // // }

   
// // // // console.log(doctor)

// // // Object.defineProperty(doctor, 'name', { 
// // //     value : 'maged',
// // //     writable:true, configurable:true, enumerable:true
// // // })


// // // Object.defineProperty(doctor, 'name',{
// // //    get: function () {
// // //         return this.name; 
// // //     },

// // //     set:function (value){
// // //         this.name=value; 
// // //     },
// // //     configurable:true,
// // //     enumerable:true
// // // })



// function actoinForm(){ 
//    var opened=  window.open('./home.html',"popup","width=500px,height=700px");

    
// }



// let fname= document.getElementById("firstn"); 

// let sname= document.getElementById("lastn"); 
// let mobile= document.getElementById("mobile"); 
// let pass= document.getElementById("passwd"); 
// let email= document.getElementById("email"); 


// function userInfo(){

//  var product={
//     // firstname :fname.value, 
//     lastname : sname.value,
//     usermobile :mobile.value,
//     userpass :pass.value, 
//     useremai:email.value
//  }
//  console.log("hello", product)
   
   
// }

// var myObj = { 
//     name : 'maged',
//     age:35, 
//     job : 'chemist', 
//     liveIN : 'alexandria'
// }
// // // if(true){
// // //     console.log('true')
// // // }
// // // else{ 
// // //     console.log('false')
// // // }


// // // switch(varibale){ 
// // //     case value01: 
// // //     //code
// // //     break; 

// // //     case value02: 
// // //     //code
// // //     break; 

// // //     case value03:
// // //     case value04:
// // //     //code
// // //     break;

// // //     default:
// // //     //code
// // //     break; 

// // // }
// // // do{
// // //     //code
// // // }while(tru)


// // //     for(;password == 'maged';){ 
// // //         //code
// // //     }

// // var newContent = "";  
// // for (var i=0; i<400; i++){
// //     if (i % 2 == 0 )
// //     { 
// //         newContent +="<p>Maged</p>";
// //     }  
// //     else{
// //     newContent +="<p>atef</p>";

// //     }
// // }

// // document.getElementById('pdemoo').innerHTML = newContent;


// // var drop =document.querySelector('#drop')
// // var values = " "; 

// // for(var i=1990; i<2050 ; i++){
// // values += `  <option value="${i}">${i}</option>`
// // }
// // drop.innerHTML = values; 

// // var fn = function (num,count){ 
// //     return num*count;
// // }

// // console.log(fn(3,2)) //6 

// // var output = fn(2,3)
// // console.log(output)  //

// var x = 20; 

// function HoistingTrick(){ 
//     console.log(x); 
//      x =10; 
//     console.log(x)

// }

// HoistingTrick()
// console.log(x)

// var card = ""; 

// function add(){ 
//     card += `<div class="col-md-4 g-4">
//                 <img src="./IMG-20240616-WA0005.jpg" class="w-100" alt="">
//                 <h2>Lorem, ipsum dolor.</h2>
//             </div>`
//     document.getElementById('data').innerHTML = card; 
// }

// selecting HTML element
const prodName = document.getElementById('prod-name')
const prodPrice = document.getElementById('prod-price')
const prodCategory = document.getElementById('prod-cat')
const prodImg = document.getElementById('prod-img')
const saveChange= document.getElementById('saveChange'); 
const add= document.getElementById('add'); 
const warni = document.getElementById('warn-i')
const warnmsg = document.getElementById('warn-msg')
const spanadd= document.getElementById('spanadd')
const msgDone = document.getElementById('done')
const msgfail = document.getElementById('failed')
const editModeOn = document.getElementById('editModeOn')
const editModeOff = document.getElementById('editModeOff')
var HistoryRecords = document.getElementById('histroyContent')

//global variables
var ProductsList = [] ; 
let flagEmptyField= true;
let Editable = false; 
var prodcutView = document.getElementById('productView'); 
var HistoryList = [] ;
let OperationType ="";
let recordNow ={}; 

//global function
function clearFields(){ 
    prodName.value = ""; 
    prodPrice.value=""; 
    prodCategory.value="";

}
(function viewStock(){ 
   if(localStorage.getItem("Stock") != null){
    ProductsList = JSON.parse(localStorage.getItem("Stock"))
    displayProducts(ProductsList);
   }
 })();

 function HistroyLoad(){
    if (localStorage.getItem("HistoryAll") != null) {
        console.log(HistoryList)
        console.log(JSON.parse(localStorage.getItem('HistoryAll')))

        HistoryList= JSON.parse(localStorage.getItem("HistoryAll"))
        console.log(HistoryList)
        HisView(HistoryList)
        
    }
 }

 function enabledFields(){ 
    prodName.removeAttribute('disabled');
    prodPrice.removeAttribute('disabled');
    prodCategory.removeAttribute('disabled');
    prodImg.removeAttribute('disabled');
   
 }

 function disabledFields(){ 
    
    prodName.setAttribute("disabled","");
    prodPrice.setAttribute("disabled","");
    prodCategory.setAttribute("disabled","");
    prodImg.setAttribute("disabled","");
   
 }
function msgWarning(){ 
    let counter = 10 
 let timer = setInterval(() => {

    warnmsg.innerHTML = ` <i class='fa-solid fa-hourglass'></i>${counter--}`
 }, 1000);

setTimeout(() => {
    clearInterval(timer)
    warnmsg.classList.add('d-none')
}, 10000);
 
}
//Function ADD, Delete & UPDATE
function addProduct(){ 
    
       enabledFields()
       checkInputField();
   
 switch (flagEmptyField){
    case false:
        

        let product= {

            name:prodName.value, 
            price:prodPrice.value,
            category:prodCategory.value,
            image:prodImg
        }
        console.log('Hello Add' , product);
        ProductsList.push(product);
        localStorage.setItem('Stock',JSON.stringify(ProductsList));
        clearFields();
        console.log(ProductsList);
        displayProducts(ProductsList);
        
        warnmsg.classList.add("d-block")
       
        warnmsg.classList.remove('d-none')

        // msgWarning();
    //    const x =  setTimeout(() => {disabledFields()}, 11000);
        spanadd.innerHTML = `<i class="fa-solid fa-plus-square text-white bg-warning p-2 rounded-1 me-2 fs-3" id="add" role="button" onclick="addProduct() "></i>`
       DonePerfectly();
       
       CheckRecordMode();
       let returnRecord = GetTimeRecord(product.name); 
      console.log(returnRecord)
       HistoryList.push(returnRecord);
       localStorage.setItem("HistoryAll",JSON.stringify(HistoryList))
        // HisView(HistoryList)
       Editable =false; 
        break;
    case true:
        window.alert('You Must Fill ALL Data ')

 }
   
}
 function GetTimeRecord(product){
    let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
       let recordDay =new Date().getDate()
       let recordMonth =month [new Date().getMonth()]; 
       let recordYear = new Date().getFullYear(); 
       let recordHours =new Date().getHours();
       let recordMinute =new Date().getMinutes(); 
       let recordsec = new Date().getSeconds(); 
       let TimeOfRecord = recordDay+" - "+recordMonth+" - "+recordYear + '👌' + `${recordHours}:${recordMinute}:${recordsec}` 
       recordNow ={
        record:TimeOfRecord,
        type: OperationType,
        item:product
    }

    return recordNow
}
function DonePerfectly(){ 
    msgDone.classList.remove('d-none')
    msgDone.classList.add('d-block')
    setTimeout(() => {
        msgDone.classList.remove('d-block')
        msgDone.classList.add('d-none')  
    }, 3000);
}

function EditOn(){ 
    editModeOn.classList.remove('d-none')
    editModeOn.classList.add('d-block')
    setTimeout(() => {
        editModeOn.classList.remove('d-block')
        editModeOn.classList.add('d-none')  
    }, 3000);

}
function EditOFF(){ 
    editModeOff.classList.remove('d-none')
    editModeOff.classList.add('d-block')
    setTimeout(() => {
        editModeOff.classList.remove('d-block')
        editModeOff.classList.add('d-none')  
    }, 3000);
}

function FailedPErfectly(){ 
    msgfail.classList.remove('d-none')
    msgfail.classList.add('d-block')
    setTimeout(() => {
        msgfail.classList.remove('d-block')
        msgfail.classList.add('d-none')  
    }, 3000);
}
function EditMode(){ 
    Editable =true; 
    document.getElementById('mode-note').innerHTML =`<p>Edit mode is on</p>`
}
function updateProduct(currentIndex){
  
  switch(Editable){
    case true:
        
        enabledFields(); 
        console.log('Hello Update' , ProductsList[currentIndex])
       
        spanadd.innerHTML = `<i class="fa-solid fa-save text-white bg-warning p-2 rounded-1 me-2 fs-3" id="add" role="button" onclick="addProduct() "></i>`
      
       
         prodName.value      = ProductsList[currentIndex].name; 
         prodPrice.value     = ProductsList[currentIndex].price; 
         prodCategory.value  = ProductsList[currentIndex].category; 
         
         ProductsList.splice(currentIndex,1); 

         displayProducts(ProductsList)
         localStorage.setItem("Stock",JSON.stringify(ProductsList))
         let returnRecord = GetTimeRecord(); 
           HistoryList.push(returnRecord);
           localStorage.setItem("HistoryAll",JSON.stringify(HistoryList))
           
         break;
    case false:
        FailedPErfectly();
        break; 

  }
}

function deleteProduct(currentIndex){ 
    OperationType = "Delete"
    console.log('Hello Delete' ,currentIndex )
    ProductsList.splice(currentIndex,1)
    localStorage.setItem("Stock",JSON.stringify(ProductsList))
    displayProducts(ProductsList)
    DonePerfectly();

    let returnRecord = GetTimeRecord(); 
    HistoryList.push(returnRecord);
    localStorage.setItem("HistoryAll",JSON.stringify(HistoryList))

     
        // HisView(HistoryList)
}

function deletehis(currentIndex){
    HistoryList.splice(currentIndex,1)
    localStorage.setItem("HistoryAll",JSON.stringify(HistoryList))
    HisView(HistoryList)

}

function DeleteAllRecord(){ 
    localStorage.removeItem("Stock");
    DonePerfectly(); 
    displayProducts(ProductsList)
}

function DeleteAllRecordHistory(){
    localStorage.removeItem("HistoryAll");
    DonePerfectly(); 
    
    HisView(HistoryList)
}

function displayProducts(list){ 

    var productCard='' ; 
    for(var i=0; i<list.length; i++){
    productCard += `
        
                          <tr class="tr">
                            <th scope="row">${i+1+" ✔"}</th>
                            <td>${list[i].name}</td>
                            <td>${list[i].price}</td>
                            <td>${list[i].category}</td>
                            
                            <td class='todo d-flex flex-wrap justify-content-center gap-1 align-items-center '> 
                              <i class="fa-solid fa-trash text-white bg-danger p-2 rounded-1 action " role="button"  onclick="deleteProduct(${i})"></i>
                              <i class="fa-solid fa-pencil text-white bg-primary p-2 rounded-1  action" role="button"  onclick="updateProduct(${i})"></i>
                              <i class="fa-solid fa-eye text-white bg-success p-2 rounded-1 action" role="button" ></i>
                            </td>
                           
                          </tr>
                    
                       
    `
    }
    prodcutView.innerHTML = productCard;
}

function checkInputField(){ 
    if(prodName.value =="" || prodPrice.value=="" || prodCategory.value==""){
        flagEmptyField =true  ;
        
    }else{flagEmptyField=false;}
}

function CheckRecordMode(){ 
    if(Editable){
        OperationType= 'Edit';
    }
    else if (!Editable)
    {
        OperationType= 'New Record'
    }
}

function saveChangebtn(){
    add.classList.remove('d-none');
    add.classList.add('d-block')
    saveChange.classList.add('d-none')
    addProduct()
}


function HisView(list){ 
  let HistoryRow = "" ; 
    
    for(var i=0; i<list.length; i++){
        HistoryRow += `<tr class="tr">
                            <th scope="row">${i+1}</th>
                            <td>${list[i].record}</td>
                            <td>${list[i].type}</td>
                            <td>${list[i].item}</td>   
                            <td><i class="fa-solid fa-pencil text-white bg-primary p-2 rounded-1  action" role="button"  onclick="deletehis(${i})"></i></td>
                          </tr>                 
    `
    }
    HistoryRecords.innerHTML = HistoryRow;
}

function OpenHistory(){
    window.open('./History.html',"_blank")
}
