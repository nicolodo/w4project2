
const form = document.getElementById('form')
const baseURL = 'https://w4project-ppri.onrender.com'
// const baseURL = 'http://localhost:4242'

async function fetchData() {
  const response = await fetch(`${baseURL}/animals`)
  const animals = await response.json()

  console.log(animals)

  return animals
}

async function displayanimals() {
  const animals = await fetchData()

  animals.forEach((animal) => {
    const div = document.createElement('div')
    const creature = document.createElement('p')
    const likes = document.createElement('p')
    const comment = document.createElement('p')

    // userName.textContent = animal.msg_name
    // animalContent.textContent = animal.content

    creature.textContent = animal.animalName
    likes.textContent = animal.likes
    comment.textContent = animal.comment

    // div.append(userName, messageContent)
    div.append(creature,likes,comment)

    display.appendChild(div)
  })
}
displayanimals()

async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)
  const userInputJSON = JSON.stringify(userInput)
  console.log(userInput);

  // {
  //   "msg_name": 'foo',
  //   "content": 'foo'
  // }

  const response = await fetch(`${baseURL}/animals`,{
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  // window.location.reload()
} 

form.addEventListener('submit', handleSubmit)



