const btn = document.getElementById('addbtn')
const inputField = document.getElementById('input-field')
const addTodoHere = document.getElementById('root')

let allTodos = []


const handleChange = (e) => {
    allTodos.unshift(e.target.value)
    handleAllTodos()
}

const handleAllTodos = () => {
    addTodoHere.textContent = ``
    allTodos.forEach((todo) => {
        if(todo != ""){
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            li.textContent = `${todo}`
            ul.appendChild(li);
            addTodoHere.appendChild(li)
        }
    })
    inputField.value = ''
}

const handleTodo = (e) => {
    handleChange(e)
}

inputField.addEventListener('change', handleChange)
btn.addEventListener('click', handleTodo)