const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Function to send GET request to activate endpoint  
const sendActivateRequest = async () => {
  try {
    const response = await axios.get('https://render-2-s4dl.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request (https://render-2-s4dl.onrender.com/api/activate) :`, error.message);
  }
};

const sendActivateRequestChatBot = async () => {
  try {
    const response = await axios.get('https://vipul-chatbot.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request (https://vipul-chatbot.onrender.com/api/activate) :`, error.message);
  }
};

const sendActivateRequestEngimate = async () => {
  try {
    const response = await axios.get('https://engimate-2.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request (https://engimate-2.onrender.com/api/activate) :`, error.message);
  }
};

const sendActivateRequestPhoneStream = async () => {
  try {
    const response = await axios.get('https://phone-stream.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request (https://phone-stream.onrender.com/api/activate) :`, error.message);
  }
};

const sendActivateRequestBadmintonTest = async () => {
  try {
    const response = await axios.get('https://badminton-test.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request (https://badminton-test.onrender.com) :`, error.message);
  }
};



// Send request immediately on startup  
sendActivateRequest();
sendActivateRequestChatBot();
sendActivateRequestEngimate();
sendActivateRequestPhoneStream();
sendActivateRequestBadmintonTest();

// Set up interval to send request every 5 minutes (300000 milliseconds)
setInterval(sendActivateRequest, 5 * 60 * 1000);
setInterval(sendActivateRequestChatBot, 5 * 60 * 1000);
setInterval(sendActivateRequestEngimate, 5 * 60 * 1000);
setInterval(sendActivateRequestPhoneStream, 5 * 60 * 1000);
setInterval(sendActivateRequestBadmintonTest, 5 * 60 * 1000);
console.log('Automatic activation requests scheduled every 5 minutes');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/activate', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
