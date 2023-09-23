import featureImg from "../../../assets/summerCamp/nicePic.avif";

const Features = () => {
  return (
    <div className="relative bg-yellow-500/20 dark:bg-black">
      <section className="overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch ">
          <div className="flex items-center justify-center w-full order-2 lg:order-1 lg:w-7/12">
            <div className="h-full px-4 pt-7 md:pt-24 pb-16 sm:px-6 lg:px-12 2xl:px-24 lg:pb-24">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h6 className="text-2xl text-rose-600 dark:text-cyan-300 font-semibold font-amita">
                    Our Features
                  </h6>
                  <h1 className="text-4xl mt-4 font-amaranth font-bold text-black dark:text-white/95 sm:text-6xl xl:text-7xl">
                    What You Get
                  </h1>
                  <p className="mt-6 dark:text-white/95 text-base text-black sm:text-xl font-amaranth ">
                    Year after year, families tell us why they choose Art &
                    Craft summer camp as a priority place for their kids to
                    spend summer holidays at and to have the best time ever:
                  </p>

                  <ul className="mt-8 flex flex-col gap-8">
                    {/* first list */}
                    <li className="flex gap-5 sm:gap-7 ">
                      <div className="bg-yellow-400/90 h-10 sm:h-14 w-10 sm:w-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-amita font-bold">
                        01.
                      </div>{" "}
                      <div>
                        {" "}
                        <h3 className="text-xl sm:text-2xl dark:text-teal-300 font-medium font-amaranth mb-2">
                          Memories & Friendship
                        </h3>
                        <p className="font-amaranth text-sm sm:text-base dark:text-white/95">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo conseqis
                          aute irur
                        </p>
                      </div>
                    </li>
                    {/* second list */}
                    <li className="flex gap-5 sm:gap-7">
                      <div className="bg-yellow-400/90 h-10 sm:h-14 w-10 sm:w-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-amita font-bold">
                        02.
                      </div>{" "}
                      <div>
                        {" "}
                        <h3 className="text-xl sm:text-2xl dark:text-teal-300 font-medium font-amaranth mb-2">
                          Building Self-Esteem
                        </h3>
                        <p className="font-amaranth text-sm sm:text-base dark:text-white/95">
                          Duis aute irure dolor in reprehendecat cupidatat non
                          proidemd ut perspiciatis unde omnis iste natus error
                          sit voluptatem
                        </p>
                      </div>
                    </li>
                    {/* first list */}
                    <li className="flex gap-5 sm:gap-7">
                      <div className="bg-yellow-400/90 h-10 sm:h-14 w-10 sm:w-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-amita font-bold">
                        03.
                      </div>{" "}
                      <div>
                        {" "}
                        <h3 className="text-xl sm:text-2xl font-medium font-amaranth mb-2 dark:text-teal-300">
                          Healthy Aerobic Exercise
                        </h3>
                        <p className="font-amaranth text-sm sm:text-base dark:text-white/95">
                          Eaque ipsa quae ab illo inventore veritatis et quasi
                          architecto beatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 w-full overflow-hidden lg:w-6/12 flex items-center justify-center lg:order-2 p-5">
            <img className="w-full  rounded-lg" src={featureImg} alt="nature" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
