import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full py-64 text-lg">
        <div className="w-full px-6 sm:px-12 md:px-40 lg:px-60 xl:px-80">
          <div className="w-full font-heading font-extrabold uppercase">
            <cite className="text-sm lg:text-base not-italic">
              Abraham D Ndinga -{" "}
            </cite>

            <h1 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] 3xl:text-[13rem] tracking-normal leading-none">
              <span>Building </span>
              <br />
              <span className="text-accent mt-6">Web Apps</span>
              <span className="text-base md:text-xl lowercase">
                {" "}
                since 2019.
              </span>
            </h1>
          </div>
          <p className="max-w-md mt-12">
            Experienced web developer with 3 years of proven expertise,
            demonstrating a relentless commitment to accessibility, performance
            optimization, and elevating user experience with UI/UX skills.
          </p>
        </div>
      </section>
    </main>
  );
}
