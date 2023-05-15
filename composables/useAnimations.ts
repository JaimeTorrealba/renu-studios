import gsap from "gsap";

export const useAppear = (node: HTMLElement, options: any) => {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.out",
      opacity: 0,
      y: -50,
      delay: 0.5,
    },
  });
  tl.from(node, { ...options });
  return tl;
};
