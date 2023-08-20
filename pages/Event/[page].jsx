import Pages from '@/src/Event/Pages';
import React from 'react';

export default function Page({ data }) {
  return <Pages data={data} />;
}

export async function getStaticProps(context) {
  const page = context?.params.page;
  const { allEvents } = await import('@/data/data.json');
  const data = allEvents.filter((event) => event.city === page);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { events_categories } = await import('@/data/data.json');
  const paths = events_categories.map((event) => {
    return {
      params: {
        page: event.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
