'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';

const features = [
  {
    title: 'Music-Based Compatibility',
    description:
      'MixMatch matches users based on shared music taste, including common artists, genres, and anthem choices, so connections start from meaningful similarities instead of only appearance.',
  },
  {
    title: 'AI-Assisted Match Scoring',
    description:
      'The system uses AI to analyze compatibility between users and generate a match score based on music preferences and profile information. This helps improve recommendation quality without making AI the only factor in matching.',
  },
  {
    title: 'Guided Onboarding Filters',
    description:
      'Users complete a structured onboarding process that collects key profile details such as dating intention, gender preference, age range, location, distance, lifestyle, education, and music interests.',
  },
  {
    title: 'Mode-Based Discovery',
    description:
      'MixMatch separates discovery into Dating and Friend modes, allowing users to explore connections based on their intention while keeping the matching experience organized and intentional.',
  },
  {
    title: 'Profile Cards with Music Identity',
    description:
      'The main matching screen presents each user with profile photos, personal details, and music identity, making it easier to understand both attraction and shared interests before interacting.',
  },
  {
    title: 'Progressive Messaging Experience',
    description:
      'Matched users can chat in real time, and deeper interaction features such as voice calls are introduced after enough conversation, encouraging users to build trust before moving forward.',
  },
];

const processItems = [
  {
    step: '01',
    title: 'Concept Development',
    text:
      'MixMatch began as a senior project focused on building a more immersive and visually cohesive matching experience. The goal was to create an app that felt more intentional, polished, and identity-driven.',
  },
  {
    step: '02',
    title: 'UI and Flow Design',
    text:
      'A major part of development centered on refining the user interface across the home screen, likes system, messaging experience, and profile management flow. The goal was to make the app feel modern, organized, and presentation-ready.',
  },
  {
    step: '03',
    title: 'Feature Refinement',
    text:
      'As development progressed, the team refined the scope of the project to better match the current implementation. This included focusing on the features actively represented in the app and improving the clarity of the overall user flow.',
  },
  {
    step: '04',
    title: 'Current Build',
    text:
      'The current version of MixMatch highlights categorized browsing, interactive profile presentation, real-time messaging, and a consistent visual system that ties the mobile experience together.',
  },
];

const stack = [
  'React Native',
  'Expo',
  'Firebase',
  'TypeScript',
  'Google Gemini',
  'iTunes API',
  'GitHub',
  'UI / UX Prototyping',
];

const screenshots = [
  {
    src: '/home.jpg',
    title: 'Home Matching Screen',
    desc: 'The main discovery view presents users through large profile cards, anthem-based identity, and segmented interaction filters.',
  },
  {
    src: '/likes.jpg',
    title: 'Likes Screen',
    desc: 'The likes interface organizes connections into All, Date, and Friend categories for a cleaner and more flexible browsing experience.',
  },
  {
    src: '/feed.jpg',
    title: 'Feed Screen',
    desc: 'The feed screen highlights user anthems and music-related events, helping users discover new songs, interests, and shared experiences.',
  },
  {
    src: '/profile.jpg',
    title: 'Profile Screen',
    desc: 'The profile page centralizes account management, profile editing, and personalization in a polished and consistent layout.',
  },
];

const teamMembers = [
  {
    name: 'Dean Husan',
    role: 'Backend & Frontend',
    description:
      'Handled backend development including Gemini integration, Firebase configuration, iTunes API, and TypeScript service files. Also contributed to the profile screen, UI polish, bug fixes, and the final report.',
  },
  {
    name: 'Jennifer Kwon',
    role: 'Frontend',
    description:
      'Contributed to the frontend by transitioning Canva designs into React Native screens. Led color theming, overall design direction, and created the final presentation slides.',
  },
  {
    name: 'Keerthi Kapavarapu',
    role: 'Frontend',
    description:
      'Contributed to the frontend by transitioning Canva designs into React Native screens. Worked on privacy screens, led the app identity direction, and contributed to the final report.',
  },
  {
    name: 'Rabdeep Singh',
    role: 'Website',
    description:
      'Built the initial login and registration screens, implemented the 100-message interaction limit, and developed the project website using Next.js before deploying it on Vercel.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.18, 0.24, 0.18] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-purple-700/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute right-[-5%] top-[260px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-0 left-[18%] h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-3xl"
        />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Mix<span className="text-purple-400">Match</span>
            </h1>
            <p className="text-sm text-white/45">Senior Project Showcase</p>
          </div>

          <div className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#overview" className="transition hover:text-purple-300">Overview</a>
            <a href="#features" className="transition hover:text-purple-300">Features</a>
            <a href="#screens" className="transition hover:text-purple-300">Screens</a>
            <a href="#process" className="transition hover:text-purple-300">Process</a>
            <a href="#stack" className="transition hover:text-purple-300">Stack</a>
            <a href="#team" className="transition hover:text-purple-300">Team</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid items-center gap-12 md:grid-cols-2">

    {/* LEFT SIDE (TEXT) */}
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300"
      >
        Matching Users Through Music, Not Just Looks
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl"
      >
        Focused on
        <span className="text-purple-400"> shared taste over appearance</span>
        , MixMatch helps users discover more meaningful connections through structured profiles, AI-assisted matching, and real-time messaging.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-lg leading-9 text-white/70"
      >
        MixMatch is a full-stack mobile app built with React Native and Firebase, featuring structured profiles, guided interaction flows, and a cohesive mobile UI. 
        The project emphasizes a more immersive and intentional matching experience that goes beyond the typical swipe model.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <a
          href="#screens"
          className="rounded-full bg-purple-500 px-6 py-3 font-semibold text-white hover:bg-purple-400 transition"
        >
          View Screens
        </a>

        <a
          href="#process"
          className="rounded-full border border-purple-400/40 px-6 py-3 font-semibold text-purple-200 hover:bg-white/5 transition"
        >
          Development Process
        </a>
      </div>
    </div>

    {/* RIGHT SIDE (GIF) */}
    <div className="flex justify-center">
      <div className="bg-black p-3 rounded-[2rem] shadow-2xl">
        <img
          src="/matching.gif"
          alt="Matching Demo"
          className="rounded-[1.5rem] w-[280px] md:w-[320px]"
        />
      </div>
    </div>

  </div>
</section>

      <section id="overview" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Project Overview
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">What is MixMatch?</h3>
            <p className="mt-6 text-lg leading-8 text-white/70">
              MixMatch is a full-stack mobile application that rethinks online dating by shifting from appearance-based swiping to music-centered compatibility. Instead of relying only on photos, the app connects users through shared artists, genres, profile details, and AI-assisted match scoring.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Built with React Native and Firebase, the system supports real-time messaging, guided onboarding, and modular user flows for discovery, likes, and communication.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/25"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Why MixMatch?
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">Beyond Appearance-Based Matching</h4>
                <p className="mt-2 leading-7 text-white/65">
                  Traditional dating apps prioritize visuals, often leading to low-quality matches. MixMatch focuses on shared interests to improve compatibility.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white">More Intentional Interaction</h4>
                <p className="mt-2 leading-7 text-white/65">
                  Users connect through shared interests and build conversations over time. Voice calls are introduced after sufficient interaction to support deeper connections.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white">AI-Assisted Match Relevance</h4>
                <p className="mt-2 leading-7 text-white/65">
                  Matches are influenced by shared artists and genres, with AI-assisted scoring to better capture similarity in user taste and improve match relevance beyond surface-level preferences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Core Features
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">What the app currently emphasizes</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch focuses on profile-driven browsing, structured match exploration, direct
              messaging, and a cohesive visual system designed for a more engaging mobile experience.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.07]"
              >
                <h4 className="text-2xl font-semibold text-purple-300">{feature.title}</h4>
                <p className="mt-4 leading-7 text-white/65">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              App Screens
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Current interface preview</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              The following screens reflect the current visual direction of MixMatch. The app uses a
              black-and-purple theme, segmented views, rounded layouts, and a consistent mobile-first
              design language across discovery, likes, messaging, and profile management.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {screenshots.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/25"
              >
                <div className="flex justify-center">
                  <div className="rounded-[32px] border border-white/10 bg-black p-3 shadow-lg shadow-purple-950/30 transition duration-300 hover:scale-[1.02]">
                    <Image
                      src={item.src}
                      alt=""
                      width={350}
                      height={720}
                      className="rounded-[26px]"
                    />
                  </div>
                </div>
                <h4 className="mt-6 text-2xl font-semibold text-purple-300">{item.title}</h4>
                <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Development Process
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">How the project evolved</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              The project developed through multiple rounds of refinement, balancing design polish,
              implementation clarity, and alignment with the current working app.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {processItems.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Step {item.step}
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-4 leading-8 text-white/65">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 rounded-[30px] border border-purple-400/20 bg-gradient-to-r from-purple-900/25 to-fuchsia-900/10 p-8"
          >
            <h4 className="text-2xl font-semibold text-purple-200">Current Focus</h4>
            <p className="mt-4 max-w-4xl leading-8 text-white/70">
              The current focus of the project is refining the main user experience by improving
              match card presentation, strengthening categorized likes views, enhancing the chat
              interface, and making profile management feel more complete and polished.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Technology Stack
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Tools used in development</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch is being developed as a mobile application with a strong focus on frontend
              presentation, organized navigation, and modern development workflows.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-purple-200"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="team" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Team
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Project Contributors</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch is the result of collaborative planning, development, refinement, and
              presentation across the senior project team.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:border-purple-400/30"
              >
                <h4 className="mt-3 text-xl font-semibold text-white">{member.name}</h4>
                
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                  {member.role}
                </p>
                <p className="mt-3 min-h-[110px] text-sm leading-7 text-white/60">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MixMatch Senior Project</p>
          <p>Designed to reflect the current app interface and development direction.</p>
        </div>
      </footer>
    </main>
  );
}