const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

if (!client_id || !client_secret) {
    console.error('Missing client_id or client_secret:', { client_id, client_secret });
    throw new Error('Missing client_id or client_secret');
}

export const getAccessToken = async () => {
    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(client_id + ':' + client_secret)}`,
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching access token:', errorData);
            throw new Error('Failed to fetch access token');
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error in getAccessToken:', error);
        throw error;
    }
};
