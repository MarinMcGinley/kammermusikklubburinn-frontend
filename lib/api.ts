const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchFromAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  concerts: {
    getAll: (params?: Record<string, string>) => {
      const query = params ? `?${new URLSearchParams(params)}` : '';
      return fetchFromAPI(`/concerts${query}`);
    },
    getById: (id: number) => fetchFromAPI(`/concerts/${id}`),
  },
  composers: {
    getAll: (params?: Record<string, string>) => {
      const query = params ? `?${new URLSearchParams(params)}` : '';
      return fetchFromAPI(`/composers${query}`);
    },
    getById: (id: number) => fetchFromAPI(`/composers/${id}`),
  },
  performers: {
    getAll: (params?: Record<string, string>) => {
      const query = params ? `?${new URLSearchParams(params)}` : '';
      return fetchFromAPI(`/performers${query}`);
    },
    getById: (id: number) => fetchFromAPI(`/performers/${id}`),
  },
  pieces: {
    getAll: (params?: Record<string, string>) => {
      const query = params ? `?${new URLSearchParams(params)}` : '';
      return fetchFromAPI(`/pieces${query}`);
    },
    getById: (id: number) => fetchFromAPI(`/pieces/${id}`),
  },
  concertSeasons: {
    getAll: (params?: Record<string, string>) => {
      const query = params ? `?${new URLSearchParams(params)}` : '';
      return fetchFromAPI(`/concertseasons${query}`);
    },
    getById: (id: number) => fetchFromAPI(`/concertseasons/${id}`),
  },
};
