
const submitFormBtn = document.getElementById('submitFormBtn');

const getUserMessage = () => {
  const messageInput = document.getElementById('message').value;

  if (!messageInput) {
    return;
  };

  return messageInput;
}

const showUserMessage = message => {
  const lastMessageContainer = document.getElementById('lastMessage');
  message = getUserMessage();

  if (!message) {
    alert(' You have to type something on the box');
  }
  else {
    lastMessageContainer.innerHTML = message;
  }

}

submitFormBtn.addEventListener('click', showUserMessage);