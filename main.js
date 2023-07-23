// Query Selectors:
var elements = {
  receiveMessageButton: document.getElementById('button-message'),
  affirmationRadio: document.getElementById('affirmation'),
  mantraRadio: document.getElementById('mantra'),
  messageArea: document.querySelector('.white-box.mantra-zone'),
  addButton: document.getElementById("button-add-message"),
  meditateImage: document.querySelector('.white-box.mantra-zone img'),
  messageForm: document.querySelector(".messageForm"),
  mantra: document.querySelector('.white-box.mantra-zone')
}

// Event Listeners:
elements.receiveMessageButton.addEventListener('click', getMessage)
elements.addButton.addEventListener('click', toggleElements)
elements.messageForm.addEventListener('submit', displayUserMessage)

//Global Variables:
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
]

var pushedNewMessage = []

//Functions:
function getRandomMessage(messageArray) {
  return messageArray[Math.floor(Math.random() * messageArray.length)]
}

function getMessage() {
  var selectedMessageArray
  if (elements.affirmationRadio.checked) {
    selectedMessageArray = affirmations
  } else if (elements.mantraRadio.checked) {
    selectedMessageArray = mantras
  } else {
    alert("⭐ Please select a message type! ⭐")
    return
  }

  var randomMessage = getRandomMessage(selectedMessageArray)
  elements.messageArea.textContent = randomMessage
  elements.mantra.classList.toggle('show-message', !!randomMessage)
}

function toggleElements() {
  elements.messageForm.classList.toggle('hidden')
  elements.addButton.style.display = elements.messageForm.classList.contains('hidden') ? 'block' : 'none'
  elements.meditateImage.style.display = elements.messageForm.classList.contains('hidden') ? 'block' : 'none'
}

function displayUserMessage(event) {
  event.preventDefault();

  var messageText = document.getElementById('message-text').value.trim()
  if (!messageText) {
    alert('⭐ Please enter a valid message! ⭐')
    return;
  }

  var messageTypeSelect = document.getElementById('message-type')
  var selectedMessageType = messageTypeSelect.value

  var selectedMessageArray;
  if (selectedMessageType === 'affirmation') {
    selectedMessageArray = affirmations;
  } else if (selectedMessageType === 'mantra') {
    selectedMessageArray = mantras;
  }

  selectedMessageArray.push(messageText)

  elements.messageForm.classList.add('hidden')
  elements.messageArea.textContent = messageText
  elements.mantra.classList.add('show-message')
  elements.addButton.style.display = 'block'
  elements.meditateImage.style.display = 'block'

  elements.messageForm.reset()
}
