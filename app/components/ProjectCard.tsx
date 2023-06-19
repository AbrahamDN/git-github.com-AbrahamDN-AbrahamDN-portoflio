import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  title: string;
  skills: string[];
  preview: string;
  code: string;
  className?: string;
};

function ProjectCard({
  image,
  title,
  skills,
  preview,
  code,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={clsx(
        `container-sm grid sm:grid-cols-[1fr_2fr] lg:flex flex-col min-[530px]:flex-row gap-5 md:gap-10`,
        "opacity-change border-b border-line first:border-t",
        "pb-10 sm:pb-0",
        className
      )}
    >
      <Link
        href={preview}
        className="w-[100%] lg:w-[30%] aspect-[16/9] relative"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={image}
          alt="project"
          // width={258}
          // height={193}
          fill
        />
      </Link>

      <div className="flex flex-col justify-around py-2">
        <div className="mb-4">
          <h3 className="h3 mb-4">
            <Link href={preview} tabIndex={1} target="_blank" rel="noreferrer">
              {title}
            </Link>
          </h3>

          <p className="heading uppercase text-sm">
            {skills.toString().replace(/,(?=[^\s])/g, ", ")}
          </p>
        </div>

        <div className="flex">
          <Link
            href={preview}
            className="uppercase font-medium"
            target="_blank"
            rel="noreferrer"
          >
            View site
          </Link>
          <span className="mx-2">|</span>
          <Link
            href={code}
            className="uppercase font-medium"
            target="_blank"
            rel="noreferrer"
          >
            View site
          </Link>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
