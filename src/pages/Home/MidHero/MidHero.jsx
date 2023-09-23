import diversity from "../../../assets/midHeroImg/diversity.png";
import nature from "../../../assets/midHeroImg/nature.png";
import trust from "../../../assets/midHeroImg/trustworthy.png";

const MidHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-green-100 dark:from-black dark:to-black">
      <section className="overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[700px] lg:min-h-[700px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-12 2xl:px-24 lg:pt-40 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h6 className="text-2xl text-rose-600 dark:text-teal-300 font-semibold font-amita">
                    Our Benefits
                  </h6>
                  <h1 className="text-4xl mt-4 font-amaranth font-bold text-black dark:text-white/95 sm:text-6xl xl:text-7xl">
                    Why Choose Us
                  </h1>
                  <p className="mt-6 text-base text-black dark:text-white/95 sm:text-xl font-amaranth">
                    Our camp is led by experienced instructors dedicated to
                    nurturing your child&apos;s artistic talents. Our curriculum
                    blends artistic exploration with skill development.We
                    provide a safe, inclusive, and supportive environment for
                    creative expression.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 md:space-y-0 mt-7">
                    <div className="dark:shadow-inner dark:shadow-white rounded-lg">
                      <img src={diversity} alt="diversity" />
                    </div>
                    <div className="dark:shadow-inner dark:shadow-white rounded-lg">
                      <img src={nature} alt="nature" />
                    </div>
                    <div className="dark:shadow-inner dark:shadow-white rounded-lg">
                      <img src={trust} alt="trustworthy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-6/12 flex items-center justify-center lg:order-1 p-5">
            <img
              className="w-full rounded-lg dark:shadow-xl dark:shadow-white"
              src="https://img.freepik.com/free-photo/young-children-making-diy-project-from-upcycled-materials_23-2149391106.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidHero;
