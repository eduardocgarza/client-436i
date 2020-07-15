const DEV_BASE_URL = "http://localhost:5000"
const PROD_BASE_URL = "https://api.educonnections.ca"

export const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL