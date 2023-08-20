import { dropDown } from '@/data/header';
import React from 'react';

export default function HomePage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="flex gap-6 font-bold py-2">
        {dropDown.map((link) => (
          <a
            href="/#"
            key={link.name}
            className="hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-500"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
        ducimus, soluta id voluptatum velit doloremque quisquam adipisci
        laboriosam dignissimos nemo, libero tenetur? Nihil eum blanditiis
        ducimus iure alias amet natus obcaecati, voluptatem dolore beatae
        numquam modi sapiente. Id aliquid doloribus necessitatibus numquam
        voluptatibus libero! Rem nulla voluptatibus, cum reprehenderit odio
        expedita omnis magnam corrupti quia? Deleniti natus quidem inventore
        totam modi cupiditate eius, ullam esse incidunt illo commodi quod ut
        praesentium doloribus reprehenderit culpa illum facilis quia veritatis
        cumque sed! Laboriosam tempora ullam, provident possimus odit quaerat
        sed corporis iure alias sunt totam ut beatae autem ex hic maiores quam
        rerum aliquid voluptates nulla nisi ratione fugit consequatur aut.
        Eligendi magni neque dolore quibusdam quisquam beatae cumque natus
        officia suscipit repellat. Libero voluptate eos aliquam est fuga nobis
        perspiciatis, voluptates ipsa praesentium at magni autem! Magnam,
        temporibus. Ipsum molestias possimus eius eveniet aut similique fugiat
        obcaecati dolores! Repellat laudantium ipsa sint voluptas explicabo,
        pariatur consequatur sequi corporis. Illo impedit optio incidunt. Quasi
        laborum eius facilis eum nesciunt sed quae architecto laboriosam. Fugit
        nesciunt eligendi, perferendis voluptatum dicta aliquam corrupti dolores
        esse ad facilis distinctio asperiores earum, iste animi repellendus
        dolor velit modi laboriosam suscipit rem dolorem sint similique
        voluptates? Alias!
      </p>
    </div>
  );
}
