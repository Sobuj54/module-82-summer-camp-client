const ClassCard = ({ Class }) => {
  const { img, name, age_group, schedule, price } = Class;

  return (
    <div className="border-2 border-amber-400 p-5 rounded-lg relative shadow-xl shadow-yellow-400 mt-10">
      <img
        src={img}
        alt={name}
        className="h-56 w-full rounded-lg object-cover"
      />
      <h4 className="absolute bg-yellow-500 top-1.5 w-16 h-16 flex items-center justify-center rounded-full p-3 right-0 text-white font-semibold font-amita">
        $ {price}
      </h4>
      <h2 className="text-center font-bold font-amaranth my-4 text-2xl">
        {name}
      </h2>
      <h6 className="text-center font-amaranth text-lg">{age_group}</h6>
      <p className="text-center font-amaranth text-base my-2">{schedule}</p>
      <div className="flex flex-col sm:flex-row mt-9 mb-5 items-center justify-center gap-8">
        <button className="bg-rose-500 font-semibold w-28 p-3 rounded-lg text-white font-amita">
          Show More
        </button>
        <button className="bg-emerald-500 w-28 p-3 font-semibold rounded-lg text-white font-amita">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
