const apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
console.log('Backend URL:', apiUrl);

export async function fetchOneCandidate(id?: string) {
  try {
    const response = await fetch(`${apiUrl}/api/candidate/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, error: ${error.error}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching candidates:', error);
  }
}

export async function fetchAllCandidates() {
  try {
    const response = await fetch(`${apiUrl}/api/candidates`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, error: ${error.error}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching candidates:', error);
  }
}
