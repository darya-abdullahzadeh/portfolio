// Payload CMS image helper
export function urlFor(image: any): string | null {
  if (!image) return null;
  
  // If it's already a URL string, return it
  if (typeof image === 'string') return image;
  
  // If it's a Payload image object with url property
  if (image.url) return image.url;
  
  // If it's a Payload image object, construct URL from Payload API
  if (image.id) {
    const apiUrl = process.env.PAYLOAD_API_URL || process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api';
    return `${apiUrl}/media/${image.id}`;
  }
  
  return null;
}

