import Image from 'next/image';

export const header = [
  {
    id: 1,
    name: (
      <Image src={'/white-a.png'} height={50} width={50} alt="Label name" />
    ),
    path: '/',
  },
  { id: 2, name: 'Showcase', path: '/Showcase' },
  { id: 3, name: 'Docs', path: '/Docs' },
  { id: 4, name: 'Blog', path: '/Blog' },
  { id: 4, name: 'Analytics', path: '/Analytics' },
  { id: 4, name: 'Event', path: '/Event' },
  { id: 4, name: 'Enterprise', path: '/Enterprises' },
];

export const dropDown = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Jscript' },
  { name: 'React JS' },
  { name: 'Next JS' },
  { name: 'BootStrap' },
  { name: 'Tailwind' },
];
