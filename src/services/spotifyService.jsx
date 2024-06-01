import {getAccessToken} from "../services/auth"

const BASE_URL = 'https://api.spotify.com/v1';

const getHeaders = async () => {
    try {
        const token = await getAccessToken();
        return {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    } catch (error) {
        console.error('Error getting headers:', error);
        throw error;
    }
};

export const getArtists = async (id) => {
    try {
        const headers = await getHeaders();
        const response = await fetch(`${BASE_URL}/artists?limit=${id}`, { headers });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching artists:', errorData);
            throw new Error('Failed to fetch artists');
        }

        const data = await response.json();
        return data.artists.items; // Mengembalikan daftar artis dari properti artists.items
    } catch (error) {
        console.error('Error in getArtists:', error);
        throw error;
    }
};

// export const getSearch = async (limit = 20) =>{
//     try {
//         const headers = await getHeaders();
//         const response = await fetch(`${BASE_URL}/browse/search?limit=${limit}`, { headers });

//         if (!response.ok) {
//             const errorData = await response.json();
//             console.error('Error fetching Search:', errorData);
//             throw new Error('Failed to fetch Search');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error in getSearch:', error);
//         throw error;
//     }
// }

export const getAlbum = async (id) => {
    const token = await getAccessToken();
    const response = await fetch(`${BASE_URL}/albums/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch album');
    }

    return response.json();
};

export const getPlaylist = async (id) => {
    const token = await getAccessToken();
    const response = await fetch(`${BASE_URL}/playlists/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch playlist');
    }

    return response.json();
};

export const getNewReleases = async (limit = 20) => {
    try {
        const headers = await getHeaders();
        const response = await fetch(`${BASE_URL}/browse/new-releases?limit=${limit}`, { headers });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching new releases:', errorData);
            throw new Error('Failed to fetch new releases');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in getNewReleases:', error);
        throw error;
    }
};

export const getFeaturedPlaylists = async (limit = 20) => {
    try {
        const headers = await getHeaders();
        const response = await fetch(`${BASE_URL}/browse/featured-playlists?limit=${limit}`, { headers });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching featured playlists:', errorData);
            throw new Error('Failed to fetch featured playlists');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in getFeaturedPlaylists:', error);
        throw error;
    }
};

export const getCategories = async (limit = 20) => {
    try {
        const headers = await getHeaders();
        const response = await fetch(`${BASE_URL}/browse/categories?limit=${limit}`, { headers });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching categories:', errorData);
            throw new Error('Failed to fetch categories');
        }

        return await response.json();
    } catch (error) {
        console.error('Error in getCategories:', error);
        throw error;
    }
};

export const getCategorie = async (id) => {
    const token = await getAccessToken();
    const response = await fetch(`${BASE_URL}/browse/categories/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch getcategorie');
    }

    return response.json();
};
