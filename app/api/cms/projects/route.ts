import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

