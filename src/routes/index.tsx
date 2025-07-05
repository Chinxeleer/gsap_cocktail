import { useGSAP } from "@gsap/react";
import { createFileRoute } from "@tanstack/react-router";
import { ScrollTrigger, SplitText, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  useGSAP(() => {
    gsap.to(".title", { x: 350, duration: 1, ease: "power1.inOut" });
  });
  return (
    <div className="flex-center noisy h-[100vh]">
      <div className="text-3xl">Hello from Mockito</div>
    </div>
  );
}
