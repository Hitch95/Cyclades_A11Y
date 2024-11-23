const apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
console.log('Backend URL:', apiUrl);

const fetchOneCandidate = async (id?: string) => {
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
};

const fetchAllCandidates = async () => {
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
};

const fetchAllPositions = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/positions`, {
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
    console.error('Error fetching positions:', error);
  }
};

const fetchAllArtisticTeachings = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/artistic-teachings`, {
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
    console.error('Error fetching artistic teachings:', error);
  }
};

export {
  fetchOneCandidate,
  fetchAllCandidates,
  fetchAllPositions,
  fetchAllArtisticTeachings,
};
