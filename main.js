document.addEventListener('DOMContentLoaded', function () {
    //Query Selectors:
    var receiveMessageButton = document.getElementById('button-message')
    var affirmationRadio = document.getElementById('affirmation')
    var mantraRadio = document.getElementById('mantra')
    var messageArea = document.querySelector('.white-box.mantra-zone')
    var addButton = document.getElementById("button-add-message")
    var messageForm = document.querySelector(".messageForm")
    var meditateImage = document.querySelector('.white-box.mantra-zone img')


    //Event Listeners:
    receiveMessageButton.addEventListener('click', getMessage)
    addButton.addEventListener('click', function() {
      if (messageForm.classList.contains('hidden')) {
        messageForm.classList.remove('hidden')
        addButton.style.display = 'none'
        meditateImage.style.display = 'none'
      } else {
        messageForm.classList.add('hidden')
        addButton.style.display = 'block'
        meditateImage.style.display = 'block'
      }
    })

    //Functions:
    function getRandomMessage(messageArray) {
      return messageArray[Math.floor(Math.random() * messageArray.length)]
    }

    function getMessage() {
        var selectedMessageArray
        if (affirmationRadio.checked) {
        selectedMessageArray = affirmations
        } else if (mantraRadio.checked) {
        selectedMessageArray = mantras
        } else {
        alert("⭐Please select a message type!⭐")
        return
        }
    
        var randomMessage = getRandomMessage(selectedMessageArray)
        messageArea.textContent = randomMessage;
        if (randomMessage) {
        mantra.classList.add('show-message')
        } else {
        mantra.classList.remove('show-message')
        }
    }
    })



  
