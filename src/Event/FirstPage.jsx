import Link from 'next/link';
import React from 'react';

export default function FirstPage({ data }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {data.map((event) => (
        <Link
          href={`/Event/${event.id}`}
          key={event.id}
          className=" border-2 border-sky-400 rounded-md p-3"
        >
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-justify">{event.description}</p>
        </Link>
      ))}
    </div>
  );
}
