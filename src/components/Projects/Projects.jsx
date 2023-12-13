import Button from "../Interface/Button";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="space-y-4">
        <ProjectCard
          href="https://github.com/le0pin/discord-clone"
          image="/placeholder.png"
          title="Discord Clone"
          badge="Planned"
          body="A discord clone project, with real-time chat and user authentication, basically made in Next JS and Tailwind CSS."
        />
        <ProjectCard
          href="https://github.com/le0pin/spotify-clone"
          image="/placeholder.png"
          title="Spotify Clone"
          badge="Planned"
          body="Another amazing clone project. As faithful as possible with the Spotify website. Functional music and identical features."
        />
        <ProjectCard
          href="https://github.com/le0pin/chatgpt-project"
          image="/placeholder.png"
          title="AI Realtime-Chat"
          badge="Planned"
          body="A cool real-time chat project with artificial intelligence. Basically we use the Open AI API to use GPT +3.5 technology."
        />
        <ProjectCard
          href="https://github.com/le0pin/ecommerce-project"
          image="/placeholder.png"
          title="Ecommerce Project"
          badge="Planned"
          body="This complex e-commerce project was made from scratch, I implemented all the features such as cart, checkout, and more."
        />
      </div>
      <div className="mx-auto">
        <Button
          href="https://github.com/le0pin?tab=repositories"
          variant="ghost"
          target="_blank"
        >
          See more projects
        </Button>
      </div>
    </div>
  );
}
