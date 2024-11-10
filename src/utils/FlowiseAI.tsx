import axios from 'axios';

async function query(data: any, sessionId: string): Promise<any> {
    // Make sure to pass the sessionId in each request
    const overrideConfig = {
        "sessionId": sessionId,
    };
    const apiUrl = process.env.REACT_APP_API_URL; // Get API URL from env
    const chatId = process.env.CHAT_ID; // Get CHAT_ID from env

    // Sending the chat request
    const response = await axios.post(`${apiUrl}/api/v1/prediction/${chatId}/`, data, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json",
        }
    });

    console.log('Response data:', response.data);
    console.log(`Received sessionId: ${sessionId} for question: ${data}`);

    // Updating the session in Flowise
    await axios.post('http://localhost:3000/api/v1/session', overrideConfig, {
        headers: {
            "Authorization": "Bearer JWT",
            "Content-Type": "application/json"
        }
    });

    return response.data;
}

export default query;
