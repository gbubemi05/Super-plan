import { useState, useEffect } from "react";

export function Testimonials() {
  const [hovered, setHovered] = useState(false);
  const [slide, setSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote: `"Superplan has revolutionized the way we handle compliance. It's efficient and reliable."`,
      name: "Jane Doe",
      position: "Compliance Officer",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      quote: `"The AI capabilities of Superplan have significantly reduced our workload."`,
      name: "John Smith",
      position: "Financial Advisor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      quote: `"With Superplan, we can focus more on our clients and less on paperwork."`,
      name: "Emily Johnson",
      position: "Wealth Manager",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  });
  return (
    <section className="testimonials">
      {/* <span className="quotation">"</span> */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`testimonials-container ${hovered ? "hover" : ""}`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={
              slide === index
                ? "testimonial"
                : "testimonail testimonial--hidden"
            }
          >
            <p
              className={
                hovered ? "white-color" : "testimonials-container-head"
              }
            >
              {testimonial.quote}
            </p>
            <div
              className={hovered ? "author-info white-color" : "author-info"}
            >
              <img src={testimonial.image} alt={testimonial.name} />
              <span>
                <h4 className="author-name">{testimonial.name}</h4>
                <h4 className="author-position">{testimonial.position}</h4>
              </span>
            </div>
          </div>
        ))}
        <span className="indicators">
          {testimonials.map((_, index) => (
            <button key={index} onClick={() => setSlide(index)}></button>
          ))}
        </span>
      </div>
    </section>
  );
}
