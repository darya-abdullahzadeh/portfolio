const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api';

if (!process.env.PAYLOAD_API_URL && !process.env.NEXT_PUBLIC_PAYLOAD_API_URL) {
  console.warn('PAYLOAD_API_URL or NEXT_PUBLIC_PAYLOAD_API_URL is not set. Defaulting to http://localhost:3001/api');
}

export async function fetchPayload<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${PAYLOAD_API_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Payload API error: ${response.statusText}`);
  }

  return response.json();
}

export const client = {
  fetch: fetchPayload,
};

