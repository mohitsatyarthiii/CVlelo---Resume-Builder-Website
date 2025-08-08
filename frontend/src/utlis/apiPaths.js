// Use environment variable for base URL or fall back to localhost for development
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

//Routes used for frontend
export const API_PATHS = {

    AUTH: {
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        GET_PROFILE: '/api/auth/profile',
    },
    RESUME: {
        CREATE: '/api/resume',
        GET_ALL: '/api/resume',
        GET_BY_ID: (id) => `/api/resume/${id}`,

        UPDATE: (id) => `/api/resume/${id}`,
        DELETE: (id) => `/api/resume/${id}`,
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,

    },
    image: {
        UPLOAD_IMAGE: '/api/image/upload-image'
    }
}