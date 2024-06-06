import HomeBgMock from "../../assets/images/homeMockBg.jpg";
import "./pagesStyles.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../assets/images/framer-2-img.jpg";
import Image2 from "../../assets/images/framer-3-img.jpg";
import Image3 from "../../assets/images/framer-4-img.jpg";
import Image4 from "../../assets/images/framer-5-img.jpg";
import Image5 from "../../assets/images/framer-6-img.jpg";
import Image6 from "../../assets/images/framer-7-img.jpg";
import Image7 from "../../assets/images/framer-8-img.jpg";
import Image8 from "../../assets/images/framer-9-img.jpg";
import Lenis from "lenis";
import YellowPlate from "../../assets/images/yellow-container.jpg";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const textSection = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  //   all images available for scroll parallax
  const images: string[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  // using the lenis for a smooth scroll
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  useGSAP(
    () => {
      const splitImage = document.querySelectorAll(".sectionImage img");

      // formal animation
      splitImage.forEach((image) => {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            markers: true,
            onEnter: () =>
              gsap.to(image, { opacity: 1, zIndex: 1, duration: 1 }),
            onLeaveBack: () =>
              gsap.to(image, { opacity: 0.5, zIndex: 0.5, duration: 1 }),
            onEnterBack: () =>
              gsap.to(image, { opacity: 1, zIndex: 1, duration: 1 }),
            onLeave: () =>
              gsap.to(image, { opacity: 0.5, zIndex: 0.5, duration: 1 }),
          },
        });
      });
    },
    { scope: imageContainer }
  );

  useGSAP(
    () => {
      // animation for text down here
      gsap.fromTo(
        ".actualText",
        {
          x: "200px",
        },
        {
          x: "-550px",
          scrollTrigger: {
            trigger: ".actualText",
            start: "top top",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        }
      );
    },
    { scope: textSection }
  );

  return (
    <>
      <div className="heroSection">
        <img src={HomeBgMock} alt="background image" />
        <div className="whiteSection uppercase font-bold">
          <div className="text" ref={textSection}>
            <div className="actualText">IDBUZZ</div>
          </div>
        </div>
        <img
          src={YellowPlate}
          alt="yellow plate"
          className="yellowPlate"
          style={{ width: "12.375rem", height: "16.75rem" }}
        />
      </div>
      {/* making images appear on the scroll animations */}
      <div className="imageContainer" ref={imageContainer}>
        {images.map((image, index) => (
          <div className="sectionImage" key={index}>
            <img
              src={image}
              alt={`image is at ${index}`}
              className="eachImage"
              data-testid={`animation images`}

            />
          </div>
        ))}
      </div>
    </>
  );
};
