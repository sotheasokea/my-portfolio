import "./Hero.css";
import { ProfileIntro } from "./ProfileIntro";
import { ProfileImaage } from "./ProfileImage";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <ProfileIntro />
      <ProfileImaage />
    </section>
  );
}
