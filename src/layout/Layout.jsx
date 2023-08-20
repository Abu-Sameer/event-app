import Header from '@/src/Header/Header';

export default function Layout({ Children }) {
  return (
    <>
      <Header />
      {Children}
    </>
  );
}
