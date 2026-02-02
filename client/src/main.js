
const form = document.getElementById('form')
const baseURL = 'https://w4project-ppri.onrender.com/'
// http://localhost:4242

async function fetchData() {
  const response = await fetch(`${baseURL}/animals`)
  const animals = await response.json()

  console.log(animals)

  return animals
}

async function displayanimals() {
  const animals = await fetchData()

  animals.forEach((message) => {
    const div = document.createElement('div')
    const animal = document.createElement('p')
    const likes = document.createElement('p')
    const comment = document.createElement('p')

    // userName.textContent = message.msg_name
    // messageContent.textContent = message.content

    animal.textContent = message.animal
    likes.textContent = textContent.likes
    comment.textContent = document.comment

    // div.append(userName, messageContent)

    display.appendChild(div)
  })
}
displayanimals()

async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)
  const userInputJSON = JSON.stringify(userInput)

  // {
  //   "msg_name": 'foo',
  //   "content": 'foo'
  // }

  const response = await fetch(`${baseURL}/animals`, {
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  window.location.reload()
} 

form.addEventListener('submit', handleSubmit)



