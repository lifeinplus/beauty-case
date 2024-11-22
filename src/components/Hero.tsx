import classNames from "classnames";

const Hero = ({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    image,
}: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    image: string;
}) => (
    <section
        id="hero"
        className={classNames(
            "flex",
            "flex-col-reverse",
            "justify-center",
            "lg:flex-row",
            "p-6",
            "items-center",
            "gap-8",
            "mb-12",
            "scroll-mt-20"
        )}
    >
        <article className="lg:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-5sl lg:text-left text-slate-900 dark:text-white">
                {title}
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center lg:text-left text-slate-700 dark:text-slate-400">
                {subtitle1}{" "}
                <span className="text-indigo-700 dark:text-indigo-300">
                    {subtitle2}
                </span>{" "}
                {subtitle3}
            </p>
        </article>
        <img src={image} alt={title} className="rounded-md" />
    </section>
);

export default Hero;
