/**
 * Resolves the backend API base URL based on the environment and current location.
 * Helps ensure the app works on mobile devices testing on the same local network.
 */
export const getBaseUrl = () => {
    if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
        return process.env.NEXT_PUBLIC_API_URL;
    }

    if (typeof window !== 'undefined') {
        const { hostname, protocol } = window.location;

        // Handle local network testing (e.g., accessing from mobile on the same Wi-Fi)
        const isLocalNetwork = hostname.match(/^192\.168\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^127\./) ||
            hostname.includes('.local');

        if (hostname !== 'localhost' && hostname !== '127.0.0.1' && isLocalNetwork) {
            return `${protocol}//${hostname}:5000`;
        }

        // For true production, if NEXT_PUBLIC_API_URL isn't set, it will likely fail 
        // unless the backend is on the same host/port (unlikely for this setup).
        if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
            console.warn("[API] URL not configured for production domain. Defaulting to localhost:5000");
        }
    }

    return 'http://localhost:5000';
};
