"use client";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const VideoDemo = () => {
  return (
    <section
      id="video"
      className="grid content-center lg:grid-cols-[2fr_1fr] gap-16 px-4 py-20"
    >
      <Video />
      <motion.div>
        <motion.h2
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-medium mb-4"
        >
          Begin your journey
        </motion.h2>
        <motion.p
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg text-neutral-600"
        >
          Garcho is at the forefront of revolutionizing customer engagement
          through innovative AI-powered Agents. Our mission is to enhance user
          experiences by providing tailored solutions for customer service
          Problems, that seamlessly integrate with your website. Founded by a
          team of tech enthusiasts, We are dedicated to helping businesses of
          all sizes reduce support costs, improve response times, and elevate
          customer satisfaction. At Garcho, we believe in the power of
          technology to transform how businesses interact with their customers.
          Our commitment to continuous improvement and customer-centric design
          ensures that our clients receive cutting-edge solutions that meet
          their unique needs. Join us in shaping the future of customer service
          with AI.
        </motion.p>
      </motion.div>
    </section>
  );
};

const Video = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={videoVariants}
    >
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/v=l8knG0BPr-o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
};
