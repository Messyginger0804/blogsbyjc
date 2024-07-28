
import AboutCover from "@/components/About/AboutCover";
import Portfolio from "@/components/About/Portfolio";
import Professional from "@/components/About/Professional";
import Skills from "@/components/About/Skills";
import Link from "next/link";


export const metadata = {
    title: "Portfolio",
    description: `This is Jeremy Ashley's portfolio. Learn about me, projects and the technologies I use.`,
};

export default function About() {
    return (
        <>
            <AboutCover />
            <Skills />
            <section id="portfolio">
                <Professional />
                <Portfolio />
            </section>
            <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
                Have a project in mind? Reach out to me  <a href="tel:2149493126">📞</a> from <Link href="/contact" className="!underline underline-offset-2"   >here</Link> and let's make it happen.
            </h2>
        </>
    );
}