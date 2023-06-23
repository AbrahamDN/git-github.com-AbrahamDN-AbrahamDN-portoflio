const sections = document.querySelectorAll("section[id]");

export const scrollActive = () => {
  if (typeof window === "undefined") return;

  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = (current as HTMLElement).offsetHeight,
      sectionTop = (current as HTMLElement).offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    console.info();

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add("active-link");
      sectionsClass?.classList.remove("opacity-change");
    } else {
      sectionsClass?.classList.remove("active-link");
      sectionsClass?.classList.add("opacity-change");
    }
  });
};
