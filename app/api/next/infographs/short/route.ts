import { NextResponse } from 'next/server';
import { InfoGraphic, ResponsePagination } from '@/app/type';

export async function GET(): Promise<
  NextResponse<ResponsePagination<InfoGraphic[]>>
> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_API_URL not configured, returning empty data');
      return NextResponse.json({
        data: {
          content: [],
          pagination: {
            pageNumber: 0,
            pageSize: 6,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'API URL not configured',
        status: 200,
      });
    }

    const response = await fetch(
      `${apiUrl}/api/v1/articles?type=INFO_GRAPHIC&pageNumber=0&pageSize=6`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching infographs short:', error);
    return NextResponse.json(
      {
        data: {
          content: [],
          pagination: {
            pageNumber: 0,
            pageSize: 6,
            totalElements: 0,
            totalPages: 0,
          },
        },
        message: 'Failed to fetch infographs',
        status: 500,
      },
      { status: 500 }
    );
  }
}
