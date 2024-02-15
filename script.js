const txt_box = document.getElementById("task_detail")
let btn = document.querySelector("button")
let clearall_btn = document.getElementById("clear_btn")
const list_area = document.getElementById("list-area")

let pending_txt = document.getElementById("counter")

function task_counter() {

    let c=0
    for (let i = 0; i < list_area.childElementCount; i++) {
        
        if(list_area.children[i].className == "checked"){

            c+=1
        }
    }

    pending_txt.innerHTML = `You have ${list_area.childElementCount-c} tasks pending!`
}

clearall_btn.addEventListener("click", () => {

    if (list_area.innerHTML == '') {

        alert("No tasks to remove!")
    }
    else {

        list_area.innerHTML = ''
        task_counter()
        saveNotes()
        
    }

})

txt_box.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        if (txt_box.value == '') {

            alert("Please enter the Task!")
        }
        else {

            let li = document.createElement("li")
            li.innerHTML = txt_box.value

            let cross = document.createElement("span")
            cross.innerHTML = "\u00d7"

            li.appendChild(cross)
            list_area.appendChild(li)
            txt_box.value = ''
            task_counter()
            saveNotes()
        }
    }
})

btn.addEventListener("click", () => {

    if (txt_box.value == '') {

        alert("Please enter the Task!")
    }
    else {

        let li = document.createElement("li")
        li.innerHTML = txt_box.value

        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7"

        li.appendChild(cross)
        list_area.appendChild(li)
        txt_box.value = ''
        task_counter()
        saveNotes()
    }
})

list_area.addEventListener("click", (e) => {

    if (e.target.tagName == "LI") {

        e.target.classList.toggle("checked")
        task_counter()
        saveNotes()
        
    }
    else if (e.target.tagName == "SPAN") {

        e.target.parentElement.remove()
        task_counter()
        saveNotes()

    }
})

function saveNotes() {

    localStorage.setItem("name", list_area.innerHTML)
}

function getNotes() {

    list_area.innerHTML = localStorage.getItem("name")
}

getNotes()
task_counter()