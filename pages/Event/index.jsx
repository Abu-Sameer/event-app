import FirstPage from '@/src/Event/FirstPage';
import React from 'react';

export default function HomePage({ data }) {
  return <FirstPage data={data} />;
}
export async function getStaticProps() {
  const { events_categories } = await import('@/data/data.json');
  return {
    props: { data: events_categories },
  };
}
