import { NextResponse } from 'next/server';
import { getExperience } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const experience = await getExperience();
    return NextResponse.json(experience);
  } catch (error) {
    console.error('Error fetching experience:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experience' },
      { status: 500 }
    );
  }
}

