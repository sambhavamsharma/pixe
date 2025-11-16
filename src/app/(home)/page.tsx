"use client";

import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <main className="relative flex flex-col items-center w-full overflow-hidden">
      {/* Background glow (non-blocking, below everything) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-240 h-240 bg-linear-to-tr from-indigo-500/25 via-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center py-32 md:py-44 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/logo.svg"
            alt="Pixe"
            width={64}
            height={64}
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            text-3xl md:text-6xl font-bold 
            bg-linear-to-r 
            from-indigo-500 to-purple-500 
            dark:from-indigo-300 dark:to-purple-300 
            bg-clip-text text-transparent
          "
        >
          Turn pixels into possibilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mt-4"
        >
          Transform your ideas into pixel-perfect apps — powered by intelligent automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-3xl mx-auto w-full mt-10"
        >
          <ProjectForm />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px w-full max-w-5xl bg-linear-to-r from-transparent via-border to-transparent mb-16 relative z-10" />

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl px-4 relative z-10"
      >
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center">
          Your Recent Creations
        </h2>
        <ProjectsList />
      </motion.section>
    </main>
  );
};

export default Page;