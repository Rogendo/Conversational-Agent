import axios from 'axios';

async function query(data: any): Promise<any> {
   const apiUrl = process.env.REACT_APP_API_URL; // Get API URL from env
   const chatId = process.env.PREGNANCY_BOT_CHAT_ID; 

    // Sending the chat request
    const response = await axios.post(`${apiUrl}/api/v1/prediction/${chatId}/`, data, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json",
        }
    });

    console.log('Response data:', response.data);
   // console.log("Received sessionId: ${sessionId} for question: ${data}");
    console.log("This is test");

    return response.data;
}

export default query;