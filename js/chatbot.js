var chatbotButton = document.getElementById("chatbot-button");
var chatbotPopup = document.getElementById("chatbot-popup");
var chatbotConversation = document.getElementById("chatbot-conversation");
var chatbotInput = document.getElementById("chatbot-input");
var chatbotSend = document.getElementById("chatbot-send");

chatbotButton.onclick = function () {
  chatbotPopup.style.display = "block";
};

chatbotSend.onclick = function () {
  var userMessage = chatbotInput.value;
  chatbotConversation.innerHTML +=
    "<div class='user-message'>" + userMessage + "</div>";
  chatbotInput.value = "";

  /* Add code here to call an API or retrieve information from a database
     to generate a response for the user's message */
  var botResponse =
    "The educational institution is a well-known school that has been providing quality education for many years. It offers a wide range of programs in different fields and has a diverse student body. It also has excellent facilities and highly qualified faculty members.";

  chatbotConversation.innerHTML +=
    "<div class='bot-response'>" + botResponse + "</div>";
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
};
``;
