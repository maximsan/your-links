import { ExternalLink } from 'react-feather';

interface YourLinkProps {
  imageUrl: string;
  url: string;
  title: string;
  category: string;
  description: string;
  id: number;
}

export const YourLink: React.FC<YourLinkProps> = ({
  imageUrl,
  url,
  title,
  category,
  description,
  id,
}) => {
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <img src={imageUrl} />
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm font-bold text-blue-600">{category}</p>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-gray-500">{description}</p>
        <a
          href={url}
          target="_blank"
          className="flex hover:text-blue-500 items-center gap-1"
        >
          {/* removes https from url */}
          {url.replace(/(^\w+:|^)\/\//, '')}
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};
