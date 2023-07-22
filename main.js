document.addEventListener('DOMContentLoaded', function () {
    //Query Selectors:
    var receiveMessageButton = document.getElementById('button-message')
    var affirmationRadio = document.getElementById('affirmation')
    var mantraRadio = document.getElementById('mantra')
    var messageArea = document.querySelector('.white-box.mantra-zone')
    var addButton = document.getElementById("button-add-message");
    var messageForm = document.querySelector(".messageForm");
    var meditateImage = document.querySelector('.white-box.mantra-zone img');


    //Event Listeners:
    receiveMessageButton.addEventListener('click', getMessage)
    addButton.addEventListener('click', function() {
      // Toggle the visibility of the form and button by checking their current state
      if (messageForm.classList.contains('hidden')) {
        messageForm.classList.remove('hidden'); // Display the form
        addButton.style.display = 'none'; // Hide the "Add Your Own Message" button
        meditateImage.style.display = 'none'; // Hide the meditation image
      } else {
        messageForm.classList.add('hidden'); // Hide the form
        addButton.style.display = 'block'; // Show the "Add Your Own Message" button
        meditateImage.style.display = 'block'; // Show the meditation image
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



  
