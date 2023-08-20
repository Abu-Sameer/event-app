import Documents from '@/src/Docs/Documents';
import Head from 'next/head';
import React from 'react';

export default function Docs() {
  return (
    <div>
      <Head>
        <title>Document</title>
      </Head>
      <Documents />
    </div>
  );
}
