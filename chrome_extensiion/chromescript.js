//let myLead=`["www.awesomelead.com"]`

//myLead=JSON.parse(myLead)

//myLead.push("www.lead2.com")

//myLead=JSON.stringify(myLead)

//console.log(typeof myLead)

let myLead=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')

const ulEl=document.getElementById('ul-el')

const deletebtn=document.getElementById('delete-btn')

const tabbtn=document.getElementById('tab-btn')

//local storage 

//localStorage.setItem('hp','probook4420s@gmail.com')
//console.log(localStorage.getItem('hp'));


//localStorage.clear()

let leadsfromlocalStorage = JSON.parse(localStorage.getItem("myLead"))

//console.log(leadsfromlocalStorage)

if(leadsfromlocalStorage) {
    myLead=leadsfromlocalStorage
    render(myLead)
}

function render(leads) {
    let listitems = ""
    for(let i=0;i<leads.length;i+=1) {
        listitems += `<li> 
                        <a target='_blanck' href='${leads[i]}'> 
                            ${leads[i]} 
                        </a>  
                    </li> `
        
        //listitems+= "<li> <a target='_blank' href='"+myLead[i]+"'> "+myLead[i]+"</a> </li>"
    }
    
    ulEl.innerHTML=listitems
}



inputBtn.addEventListener('click',function() {
    myLead.push(inputEl.value)
    inputEl.value=''

    localStorage.setItem("myLead",JSON.stringify(myLead))

    render(myLead)

    console.log(localStorage.getItem("myLead"))
})


deletebtn.addEventListener("dblclick", function() {
    console.log('double clicked all localStorage is deleted')
    localStorage.clear()    //clear local storage
    myLead=[]               //make array empty
    render(myLead)           //render the function to print nothing.
})


const tabs= [{url: "https://www.amazon.com/sde/babasaheb"}]

tabbtn.addEventListener("click",function() {
   //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //   myLead.push(tabs[0].url)
    //  localStorage.setItem("myLead",JSON.stringify(myLead))
    //  render(myLead)
    //})

    console.log(tabs[0].url)
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
})

// 5 35 17
//template string literals


//local stroage
