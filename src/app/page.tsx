import { links } from '../../data/links';
import { YourLink } from '@/components/YourLink';

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl my-20">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((link) => (
          <YourLink
            key={link.id}
            url={link.url}
            id={link.id}
            category={link.category}
            title={link.title}
            description={link.description}
            imageUrl={link.imageUrl}
          />
        ))}
      </ul>
    </main>
  );
}
