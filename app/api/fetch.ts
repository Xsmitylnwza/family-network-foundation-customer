import {
  Activity,
  Annoucement,
  Article,
  Blog,
  InfoGraphic,
  PaginationParams,
  Procurement,
  Response,
  ResponsePagination,
  Video,
} from './type';

export async function getActivitiesHighlight(): Promise<Response<Activity[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities/highlight`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch activities');
  }

  return res.json();
}

export async function getActivitiesShort(): Promise<
  ResponsePagination<Activity[]>
> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities/short`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.log(res);
  }

  return res.json();
}

export async function getActivities(
  params?: PaginationParams
): Promise<ResponsePagination<Activity[]>> {
  const queryParams = new URLSearchParams({
    page: (params?.page || 0).toString(),
    size: (params?.size || 10).toString(),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/activities?${queryParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch activities');
  }

  return res.json();
}

export async function getAnnoucement(): Promise<Response<Annoucement[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/annoucements`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export async function getProcurements(
  params?: PaginationParams
): Promise<ResponsePagination<Procurement[]>> {
  const queryParams = new URLSearchParams({
    page: (params?.page || 0).toString(),
    size: (params?.size || 10).toString(),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/procurements?${queryParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch procurements');
  }

  return res.json();
}

export async function getInfoGraphs(
  params?: PaginationParams
): Promise<ResponsePagination<InfoGraphic[]>> {
  const queryParams = new URLSearchParams({
    page: (params?.page || 0).toString(),
    size: (params?.size || 10).toString(),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/infographs?${queryParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch info graphs');
  }

  return res.json();
}

export async function getInfoGraphsShort(): Promise<
  ResponsePagination<InfoGraphic[]>
> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/infographs/short`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch info graphs');
  }

  return res.json();
}

export async function getVideos(): Promise<Response<Video[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/videos`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  return res.json();
}

export async function getArticles(
  params?: PaginationParams
): Promise<ResponsePagination<Article[]>> {
  const queryParams = new URLSearchParams({
    page: (params?.page || 0).toString(),
    size: (params?.size || 10).toString(),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/articles?${queryParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  return res.json();
}

export async function getBlog(id: string): Promise<Response<Blog>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTEXT_URL}/api/next/blogs/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blog');
  }

  return res.json();
}
