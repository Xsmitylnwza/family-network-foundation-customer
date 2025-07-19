import { NextRequest, NextResponse } from 'next/server';
import { Blog, Response } from '@/app/type';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Response<Blog>>> {
  const { id } = await params;
  console.log(id);
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_API_URL not configured, returning empty data');
      return NextResponse.json({
        data: {
          id: 0,
          title: '',
          markdownContent: '',
          thumbnailUrl: '',
          attachments: [],
          createdAt: 0,
        },
        message: 'API URL not configured',
        status: 200,
      });
    }

    const response = await fetch(`${apiUrl}/api/v1/articles/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        data: {
          id: 0,
          title: '',
          markdownContent: '',
          thumbnailUrl: '',
          attachments: [],
          createdAt: 0,
        },
        message: 'Failed to fetch blog',
        status: 500,
      },
      { status: 500 }
    );
  }
}
