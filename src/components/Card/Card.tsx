import Image from "next/image";

interface CardProps {
  imageLink: string;
  altTag: string;
}

const Card = ({ imageLink, altTag }: CardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-400 cursor-pointer group">
      <div className="p-3 flex justify-center items-center ">
        <Image src={imageLink} alt={altTag} width={135} height={45} />
      </div>
      <p className="border-t text-center py-2 border-gray-300 group-hover:text-indigo-500 transition-colors duration-400">
        {altTag}
      </p>
    </div>
  );
};

export default Card;
