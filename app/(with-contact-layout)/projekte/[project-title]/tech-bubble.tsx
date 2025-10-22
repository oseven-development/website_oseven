"use client";
import { Project } from "@/projects";
import { motion } from "motion/react";
import Link from "next/link";

function Random() {
  // -50 to 50 random number
  return Math.floor(Math.random() * 101) - 50;
}

function RandomLow() {
  // 0.1 to 1 random number
  return Math.random() * 0.9 + 0.1;
}

export default function TechBubbles({
  technology,
}: {
  technology: Project["technology"];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {technology.map((tech, index) => (
        <motion.div
          suppressHydrationWarning
          key={tech}
          initial={{
            y: Random(),
            x: Random(),
            opacity: 0,
            filter: "blur(5px)",
          }}
          whileInView={{ y: 0, x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: RandomLow(), delay: index * 0.1 }}
        >
          <Link href={`/projekte?query=${tech.toLowerCase()}`}>
            <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary">
              {tech}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
