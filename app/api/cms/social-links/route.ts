import { NextResponse } from 'next/server';
import { getSocialLinks } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const socialLinks = await getSocialLinks();
    return NextResponse.json(socialLinks);
  } catch (error) {
    console.error('Error fetching social links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social links' },
      { status: 500 }
    );
  }
}

