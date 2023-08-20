import { header } from '@/data/header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <nav className="px-10 flex justify-between items-center bg-black h-20 border-b-white/30 border-b-2">
      <ul className="flex items-center gap-8">
        {header.map((head) => (
          <Link href={head.path} key={head.id}>
            <li
              className={`${
                router.pathname === head.path
                  ? 'text-blue-800'
                  : 'text-white/60 hover:text-white transition-all duration-300'
              }`}
            >
              {head.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          className="py-1 px-3 rounded-md bg-white/20 outline-none text-white"
          placeholder="Search documentation..."
        />
        <button className="border-white/10 border-solid border-2 transition-all duration-300 hover:bg-white hover:text-black ml-2 text-white py-1 px-6 rounded-md font-bold">
          Feedback
        </button>
        <button
          onClick={() => setShow(!show)}
          className="ml-2 bg-white transition-all duration-300 hover:bg-white/20 hover:text-white py-1 px-4 rounded-md"
        >
          Learn
        </button>
      </div>
    </nav>
  );
}
