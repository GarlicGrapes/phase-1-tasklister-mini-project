document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)
    form.reset()
  })

  function handleToDo(toDo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ' x '
    p.textContent = `${toDo} `
    p.appendChild(btn)
    document.querySelector("#tasks").appendChild(p)
    console.log(p)
  }


});
//
//document.querySelector('form').addEventListener('', )


// handle delete button
function handleDelete(e){
    e.target.parentNode.remove()
}

//grab x buttons
function addEventListenerToDeleteButtons() {
  let button = document.getElementsByClassName('delete_btn')
  for (let btn of buttons) {
      btn.addEventListener('click', )
  }
}