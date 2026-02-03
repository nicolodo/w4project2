
const form = document.getElementById('form')
const baseURL = 'https://w4project-ppri.onrender.com'
// const baseURL = 'http://localhost:4242'

async function fetchData() {
  const response = await fetch(`${baseURL}/guests`)
  const guests = await response.json()

  console.log(guests)

  return guests
}

async function displayguests() {
  const guests = await fetchData()
  const display = document.getElementById('app'); 

  guests.forEach((guest) => {
    const div = document.createElement('div')

    const creature = document.createElement('p')
    const length_of_stay = document.createElement('p')
    const comment = document.createElement('p')

    // userName.textContent = guest.msg_name
    // guestContent.textContent = guest.content

    creature.textContent = guest.guest_name
    length_of_stay.textContent = guest.length_of_stay
    comment.textContent = guest.comment

    // div.append(userName, messageContent)
    div.append(creature,length_of_stay,comment)

    display.appendChild(div)
  })
}
displayguests()

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

  const response = await fetch(`${baseURL}/guests`,{
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  console.log("I have sent a post")
  // window.location.reload()
} 

form.addEventListener('submit', handleSubmit)



