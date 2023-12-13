import Button from "../Interface/Button";
import Typography from "../Interface/Typography";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Typography type="subtitle">Get in Touch</Typography>
        <Typography type="paragraph">
          I&apos;m currently looking to show my work to the world. Send me a
          message by some means below and let&apos;s talk.
        </Typography>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 rounded-lg border border-zinc-800 p-4">
          <Typography type="subtitle">Freelancing Platforms</Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Button href="#" variant="filled">
              Workana
            </Button>
            <Button href="#" variant="filled">
              Fiverr
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-zinc-800 p-4">
          <Typography type="subtitle">Contact Ways</Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Button href="mailto:work.leoaugusto@gmail.com" variant="filled">
              E-mail
            </Button>
            <Button href="https://www.linkedin.com/in/le0pin/" variant="filled">
              Linkedin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
