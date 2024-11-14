import Image from "next/image";

const ElevatePropertyCard = ({ card }) => {
  return (
    <div>
      <div className="w-[304px] h-[372px] xl:w-[485px] xl:h-[580px] rounded-2xl relative">
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          className="object-cover w-[304px] h-[372px] xl:w-[485px] xl:h-[580px] rounded-2xl "
        />
        <div
          className="absolute top-0 left-0 right-0 opacity-90 w-full h-full rounded-2xl"
          style={{
            background:
              "linear-gradient(0deg, #000000 3.31%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
          <h4 className="text-lg md:text-[32px] font-bold text-white">{card.title}</h4>
          <h5 className="text-xs md:text-sm text-white/[90%]">{card.description}</h5>
        </div>
      </div>
    </div>
  );
};

export default ElevatePropertyCard;
