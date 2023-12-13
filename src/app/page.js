import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Layout/Container";
import Section from "@/components/Layout/Section";
import Sidebar from "@/components/Layout/Sidebar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Section id="about">
        <Container>
          <div className="flex min-h-[400px] w-full flex-col sm:flex-row">
            <Sidebar className="hidden py-10 text-zinc-400 sm:block sm:py-20">
              About
            </Sidebar>
            <Container className="items-start justify-start border-zinc-900 px-0 py-10 sm:border-l sm:px-5 sm:py-20">
              <About />
            </Container>
          </div>
        </Container>
      </Section>
      <Section id="projects">
        <Container>
          <div className="flex min-h-[400px] w-full flex-col sm:flex-row">
            <Sidebar className="hidden py-10 text-zinc-400 sm:block sm:py-20">
              Projects
            </Sidebar>
            <Container className="items-start justify-start border-zinc-900 px-0 py-10 sm:border-l sm:px-5 sm:py-20">
              <Projects />
            </Container>
          </div>
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <div className="flex min-h-[400px] w-full flex-col sm:flex-row">
            <Sidebar className="hidden py-10 text-zinc-400 sm:block sm:py-20">
              Contact
            </Sidebar>
            <Container className="items-start justify-start border-zinc-900 px-0 py-10 sm:border-l sm:px-5 sm:py-20">
              <Contact />
            </Container>
          </div>
        </Container>
      </Section>
    </>
  );
}
