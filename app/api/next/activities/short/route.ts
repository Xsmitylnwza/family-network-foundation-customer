import { NextResponse } from 'next/server';
import { Activity, ResponsePagination } from '@/app/type';

export async function GET(): Promise<
  NextResponse<ResponsePagination<Activity[]>>
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
      `${apiUrl}/api/v1/articles?type=ACTIVITY&pageNumber=0&pageSize=6`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // ไม่ cache ที่ route handler เพราะเราจะ cache ที่ component
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching activities:', error);
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
        message: 'Failed to fetch activities',
        status: 500,
      },
      { status: 500 }
    );
  }
}
