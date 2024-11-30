const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch data!");
  }
  return response.json();
};

export { baseURL, handleResponse };
