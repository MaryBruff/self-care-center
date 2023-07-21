document.addEventListener('DOMContentLoaded', function () {
    //Query Selectors:
    var receiveMessageButton = document.getElementById('button-message')
    var affirmationRadio = document.getElementById('affirmation')
    var mantraRadio = document.getElementById('mantra')
    var messageArea = document.querySelector('.white-box.mantra-zone')
    
    //Event Listeners:
    receiveMessageButton.addEventListener('click', getMessage)

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
        // Add or remove 'show-message' class to toggle meditation icon visibility
        if (randomMessage) {
        mantraZone.classList.add('show-message')
        } else {
        mantraZone.classList.remove('show-message')
        }
    }
    })
