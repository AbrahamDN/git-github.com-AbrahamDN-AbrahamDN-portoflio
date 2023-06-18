const Test = () => {
  return (
    <main className="w-full min-h-[600px] h-screen">
      <section className="container-sm section relative after:content-['SCROLL_DOWN'] after-text">
        <cite className="h5 not-italic">Abraham D Ndinga</cite>

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
          Experienced <span className="text-highlight">web developer</span> with
          3 years of proven expertise, demonstrating a relentless commitment to
          accessibility, performance optimization, and elevating user experience
          with <span className="text-highlight">UI/UX</span> skills.
        </p>
      </section>
    </main>
  );
};
export default Test;
