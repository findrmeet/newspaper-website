import Image from "next/image";

interface CardProps {
  imageLink: string;
  altTag: string;
}

const Card = ({ imageLink, altTag }: CardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="p-3">
        <Image src={imageLink} alt={altTag} width={135} height={45} />
      </div>
      <p className="border-t text-center py-2 border-gray-300">
        Daily Prothom Alo
      </p>
    </div>
  );
};

export default Card;
