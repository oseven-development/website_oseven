"use client";
import { Project } from "@/projects";
import { motion } from "motion/react";

export default function MetaInfoProject({ data }: { data: Project }) {
  return (
    <div suppressHydrationWarning className="text-white text-right">
      <motion.div
        suppressHydrationWarning
        initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-gray-300 block"> Position:</span>
        <span className="block text-bold text-lg mb-4">{data.position}</span>
      </motion.div>

      <motion.div
        suppressHydrationWarning
        initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-gray-300 block"> Zeitraum:</span>
        <span className="block text-bold text-lg mb-4">
          {new Date(data.duration.start).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
          })}
          {" - "}
          {data.duration.end ? (
            new Date(data.duration.end).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
            })
          ) : (
            <span className="text-gray-400">laufend</span>
          )}
        </span>
      </motion.div>

      <motion.div
        suppressHydrationWarning
        initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-gray-300 block"> Kunde:</span>
        <span className="block text-bold text-lg mb-4">{data.customer}</span>
      </motion.div>

      <motion.div
        suppressHydrationWarning
        initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="text-gray-300 block"> Industrie:</span>
        <span className="block text-bold text-lg">{data.industry}</span>
      </motion.div>
    </div>
  );
}
