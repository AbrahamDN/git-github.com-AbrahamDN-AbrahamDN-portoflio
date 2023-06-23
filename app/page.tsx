import TechStackSection from "./components/TechStackSection";
import ProjectCard from "./components/ProjectCard";
import Email from "./components/Email";

const Test = () => {
  return (
    <main className="w-full min-h-screen relative snap-mandatory snap-y ">
      <section className="container-sm section relative after:content-['SCROLL_DOWN'] after-text">
        <cite className="h5 not-italic z-20">
          Abraham <abbr title="Dieudonne">D</abbr> Ndinga -
        </cite>

        <div className="flex items-end">
          <h1 className="h1">
            <span className="">Building </span>
            <br />
            <span className="text-accent">Web apps</span>
            <span className="ml-2 mb-3 text-base md:text-lg heading normal-case whitespace-nowrap">
              Since 2019
            </span>
          </h1>
        </div>

        <p className="body max-w-[420px] mt-10 leading-[21.6px]">
          Experienced <mark>web developer</mark> with 3 years of proven
          expertise, demonstrating a relentless commitment to accessibility,
          performance optimization, and elevating user experience with{" "}
          <mark>UI/UX</mark> skills.
        </p>

        <video
          src="https://res.cloudinary.com/abrahamdn/video/upload/v1687372979/abrahamdn/code_matrix_fcb4sc.mp4"
          className="absolute top-0 left-0 -z-20 w-full h-screen object-cover"
          autoPlay
          muted
          loop
        />

        <div className="h-32 w-full absolute left-0 -bottom-16 bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
      </section>

      <TechStackSection />

      <section id="projects" className="section">
        <h2 className="h5 container-sm mb-12">Projects</h2>

        <div className="relative">
          <ProjectCard
            title="Flair"
            image="https://res.cloudinary.com/abrahamdn/image/upload/v1686716728/abrahamdn/flair-desktop.png"
            skills={[
              "TYPESCRIPT",
              "NEXTJS 13",
              "SANITY CMS",
              "STRIPE",
              "TAILWINDCSS",
            ]}
            preview="https://flair.abrahamdn.com/"
            code="https://github.com/AbrahamDN/flair-ecom"
          />
          <ProjectCard
            title="Travel"
            image="https://res.cloudinary.com/abrahamdn/image/upload/v1686716729/abrahamdn/travel-desktop.png"
            skills={["JavaScript", "CSS", "HTML5"]}
            preview="https://travel.abrahamdn.com/"
            code="https://github.com/AbrahamDN/travel"
          />
          <ProjectCard
            title="PokeDets"
            image="https://res.cloudinary.com/abrahamdn/image/upload/v1686718907/abrahamdn/pokedets-desktop.png"
            skills={["React", "Typescript", "Framer Motion", "Poke API"]}
            preview="https://pokedets.abrahamdn.com/"
            code="https://github.com/AbrahamDN/pokedets"
          />
        </div>
      </section>

      <section id="contact" className="section container-sm">
        <h2 className="h5">Contact me</h2>

        <div className="pt-28 grid">
          <h3 className="h2 text-center text-accent mb-16 md:mb-28">
            LET’S WORK <br />
            TOGETHER
          </h3>

          <div className="mx-auto grid sm:grid-cols-2 gap-6 text-center">
            <div className="">
              <label className="h4">Email</label>
              <Email />
            </div>

            <div className="">
              <form action="">
                <label className="h4" htmlFor="email">
                  Phone
                </label>
                <div className="mt-2 md:mt-4">
                  <input
                    type="email"
                    name="email"
                    id="lead-email"
                    placeholder="Your email"
                    className="bg-transparent border border-primary text-primary rounded-full py-2 px-4 placeholder-primary opacity-80 focus-within:opacity-100 -outline-offset-1"
                    required
                  />
                  <p className="text-xs md:text-sm opacity-80">
                    Receive my number in seconds
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Test;
