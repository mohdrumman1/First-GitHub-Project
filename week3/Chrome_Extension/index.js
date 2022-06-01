let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        //listItems += "<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i]  + "</a></li>"
        listItems += `
                    <li>
                        <a href='${leads[i]}' target = '_blank'>${leads[i]}</a>
                    </li>
                    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})


