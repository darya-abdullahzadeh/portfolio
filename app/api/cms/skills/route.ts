import { NextResponse } from 'next/server';
import { getSkills } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const skills = await getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}

