const MiniHero = ({ image, title, subTitle }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="h-72 bg-cover bg-no-repeat 2xl:max-w-7xl mx-auto rounded-lg">
      <div className="flex flex-col gap-5 items-center justify-center h-full bg-gradient-to-r from-black/50 to-black/10 rounded-lg">
        <h2 className="text-white  text-5xl font-bold font-amaranth ">
          {title}
        </h2>
        <h4 className="text-white font-amaranth font-medium text-2xl">
          {subTitle}
        </h4>
      </div>
    </section>
  );
};

export default MiniHero;
