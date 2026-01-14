
import { useEffect, useState } from "react"
// TODO upgrade to motion
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import React from "./SkillDescriptions/React"
import Nextjs from "./SkillDescriptions/Nextjs"
import HTML from "./SkillDescriptions/HTML"
import CSS from "./SkillDescriptions/CSS"
import Figma from "./SkillDescriptions/Figma"
import TypeScript from "./SkillDescriptions/TypeScript"
import Nodejs from "./SkillDescriptions/Nodejs"
import Git from "./SkillDescriptions/Git"
import Python from "./SkillDescriptions/Python"
import SQL from "./SkillDescriptions/SQL"
import AWS from "./SkillDescriptions/AWS"
import GCP from "./SkillDescriptions/GCP"
import Astro from "./SkillDescriptions/Astro"
import Rust from "./SkillDescriptions/Rust"
import CPP from "./SkillDescriptions/CPP"
import { FaBasketballBall } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"
import { FaAws } from "react-icons/fa";
import { SiAstro, SiCss3, SiFigma, SiGit, SiGooglecloud, SiHtml5, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRust, SiTypescript } from "react-icons/si"

/*
TODO
You need to remember that screen size and resolution is only 
one aspect of determining available screen space. The user's font size, 
display scale, and zoom settings will have a big impact. 
A user with a large phone who increases font size and zoom can have 
less available area than a user with a small phone who decreases font size and zoom.
If you disregard this fact some users will at best have a design which appears 
broken, like text in a button wrapping to a second line, or be unable to use your 
app, like when a button is placed at the bottom of the design, but the content above fills the entire screen.

TODO
Modal backdrop isn't rendering properly on mobile due to mobile navbars.
*/


export const SKILL_ID = {
  REACT: "react",
  NEXTJS: "next.js",
  HTML: "html",
  CSS: "css",
  TYPESCRIPT: "typescript",
  NODEJS: "node.js",
  GIT: "git",
  PYTHON: "python",
  SQL: "sql",
  AWS: "aws",
  GCP: "gcp",
  FIGMA: "figma",
  ASTRO: "astro",
  RUST: "rust",
  CPP: "cpp",
  JUGGLING: "juggling",
} as const;

type SkillId = typeof SKILL_ID[keyof typeof SKILL_ID];

export interface Technology {
  type: "technology",
  id: SkillId,
  name: string;
  icon: any;
  description: React.ReactNode;
  size: SkillSize;
}

export interface Juggling {
  type: "juggling",
  id: SkillId;
  name: string;
  icon: any;
  description: string;
  size: SkillSize
}

type Skill = Technology | Juggling

type SkillSize = "large" | "regular"

export const SKILLS: Record<SkillId, Skill> = {
  [SKILL_ID.REACT]: {
    type: "technology",
    id: SKILL_ID.REACT,
    name: "React",
    icon: <SiReact size="100%" />,
    description: <React />,
    size: "large",
  },
  [SKILL_ID.NEXTJS]: {
    type: "technology",
    id: SKILL_ID.NEXTJS,
    name: "Next.js",
    icon: <SiNextdotjs size="100%" />,
    description: <Nextjs />,
    size: "large",
  },
  [SKILL_ID.HTML]: {
    type: "technology",
    id: SKILL_ID.HTML,
    name: "HTML",
    icon: <SiHtml5 size="100%" />,
    description: <HTML />,
    size: "regular",
  },
  [SKILL_ID.CSS]: {
    type: "technology",
    id: SKILL_ID.CSS,
    name: "CSS",
    icon: <SiCss3 size="100%" />,
    description: <CSS />,
    size: "regular",
  },
  [SKILL_ID.TYPESCRIPT]: {
    type: "technology",
    id: SKILL_ID.TYPESCRIPT,
    name: "TypeScript",
    icon: <SiTypescript size="100%" />,
    description: <TypeScript />,
    size: "large",
  },
  [SKILL_ID.NODEJS]: {
    type: "technology",
    id: SKILL_ID.NODEJS,
    name: "Node.js",
    icon: <SiNodedotjs size="100%" />,
    description: <Nodejs />,
    size: "regular",
  },
  [SKILL_ID.GIT]: {
    type: "technology",
    id: SKILL_ID.GIT,
    name: "Git",
    icon: <SiGit size="100%" />,
    description: <Git />,
    size: "regular",
  },
  [SKILL_ID.PYTHON]: {
    type: "technology",
    id: SKILL_ID.PYTHON,
    name: "Python",
    icon: <SiPython size="100%" />,
    description: <Python />,
    size: "large",
  },
  [SKILL_ID.SQL]: {
    type: "technology",
    id: SKILL_ID.SQL,
    name: "SQL",
    icon: <SiPostgresql size="100%" />,
    description: <SQL />,
    size: "regular",
  },
  [SKILL_ID.AWS]: {
    type: "technology",
    id: SKILL_ID.AWS,
    name: "AWS",
    icon: <FaAws size="100%" />,
    description: <AWS />,
    size: "regular",
  },
  [SKILL_ID.GCP]: {
    type: "technology",
    id: SKILL_ID.GCP,
    name: "GCP",
    icon: <SiGooglecloud size="100%" />,
    description: <GCP />,
    size: "regular",
  },
  [SKILL_ID.FIGMA]: {
    type: "technology",
    id: SKILL_ID.FIGMA,
    name: "Figma",
    icon: <SiFigma size="100%" />,
    description: <Figma />,
    size: "regular",
  },
  [SKILL_ID.ASTRO]: {
    type: "technology",
    id: SKILL_ID.ASTRO,
    name: "Astro",
    icon: <SiAstro size="100%" />,
    description: <Astro />,
    size: "regular",
  },
  [SKILL_ID.RUST]: {
    type: "technology",
    id: SKILL_ID.RUST,
    name: "Rust",
    icon: <SiRust size="100%" />,
    description: <Rust />,
    size: "regular"
  },
  [SKILL_ID.CPP]: {
    type: "technology",
    id: SKILL_ID.CPP,
    name: "C++",
    icon: <TbBrandCpp size="100%" />,
    description: <CPP />,
    size: "regular"
  },
  [SKILL_ID.JUGGLING]: {
    type: "juggling",
    id: SKILL_ID.JUGGLING,
    name: "Juggling",
    icon: <FaBasketballBall size="100%" />,
    description: "Fun skill",
    size: "regular"
  },
};

const LAYOUT_ORDERS: { [k: string]: { tech: Skill, gridClass: string }[] } = {
  mobile: [
    { tech: SKILLS[SKILL_ID.REACT], gridClass: "col-span-4 row-span-3" },
    { tech: SKILLS[SKILL_ID.HTML], gridClass: "col-span-2 row-span-1" },
    { tech: SKILLS[SKILL_ID.CSS], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.TYPESCRIPT], gridClass: "col-span-6 row-span-2" },
    { tech: SKILLS[SKILL_ID.FIGMA], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.PYTHON], gridClass: "col-span-4 row-span-3" },
    { tech: SKILLS[SKILL_ID.AWS], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.GCP], gridClass: "col-span-2 row-span-1" },
    { tech: SKILLS[SKILL_ID.GIT], gridClass: "col-span-2 row-span-1" },
    { tech: SKILLS[SKILL_ID.NEXTJS], gridClass: "col-span-4 row-span-3" },
    { tech: SKILLS[SKILL_ID.SQL], gridClass: "col-span-2 row-span-3" },
    { tech: SKILLS[SKILL_ID.NODEJS], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.ASTRO], gridClass: "col-span-4 row-span-1" },
    { tech: SKILLS[SKILL_ID.RUST], gridClass: "col-span-4 row-span-2" },
    { tech: SKILLS[SKILL_ID.CPP], gridClass: "col-span-2 row-span-1" },
    { tech: SKILLS[SKILL_ID.JUGGLING], gridClass: "hidden col-span-6 row-span-2 bg-green-600 text-white" },
  ],
  desktop: [
    { tech: SKILLS[SKILL_ID.REACT], gridClass: "col-span-3 row-span-4" },
    { tech: SKILLS[SKILL_ID.HTML], gridClass: "col-span-1 row-span-2" },
    { tech: SKILLS[SKILL_ID.CSS], gridClass: "col-span-2 row-span-3" },
    { tech: SKILLS[SKILL_ID.FIGMA], gridClass: "col-span-2 row-span-3" },
    { tech: SKILLS[SKILL_ID.GIT], gridClass: "col-span-1 row-span-1" },
    { tech: SKILLS[SKILL_ID.TYPESCRIPT], gridClass: "col-span-5 row-span-3" },
    { tech: SKILLS[SKILL_ID.NEXTJS], gridClass: "col-span-2 row-span-3" },
    { tech: SKILLS[SKILL_ID.SQL], gridClass: "col-span-1 row-span-2" },
    { tech: SKILLS[SKILL_ID.RUST], gridClass: "col-span-2 row-span-3" },
    { tech: SKILLS[SKILL_ID.PYTHON], gridClass: "col-span-4 row-span-3" },
    { tech: SKILLS[SKILL_ID.CPP], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.ASTRO], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.GCP], gridClass: "col-span-1 row-span-2" },
    { tech: SKILLS[SKILL_ID.AWS], gridClass: "col-span-3 row-span-2" },
    { tech: SKILLS[SKILL_ID.NODEJS], gridClass: "col-span-2 row-span-2" },
    { tech: SKILLS[SKILL_ID.JUGGLING], gridClass: "hidden col-span-6 row-span-2 bg-green-600 text-white" },
  ]
};

// for (const key of Object.keys(LAYOUT_ORDERS)) {
//   const allKnown = Object.values(SKILL_ID) as SkillId[];
//   const layoutIds = LAYOUT_ORDERS[key].map(({ tech }) => tech.id);
//   const missing = allKnown.filter(id => !layoutIds.includes(id));
//   if (missing.length) {
//     throw new Error(`Missing TECH_IDs from LAYOUT_ORDERS.${key}: ${missing.join(", ")}`);
//   }
//   const hasDuplicates = new Set(layoutIds).size !== layoutIds.length;
//   if (hasDuplicates) {
//     throw new Error(`Duplicate values in LAYOUT_ORDERS.${key}`);
//   }
// }

export type RenderedSkill = {
  numberLabel: string
  id: string
} & Omit<Skill, 'id'>

export function Techbox(skill: RenderedSkill, gridClass: string, onClick: (s: RenderedSkill) => void) {

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      key={skill.id}
      layoutId={skill.id}
      onClick={() => onClick(skill)}
      className={`
              ${gridClass}
              group relative bg-paper-100 border-2 border-border
              hover:border-accent hover:bg-secondary
              transition-colors duration-200 cursor-pointer
              flex flex-col items-center justify-center gap-2 p-4
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
            `}
    >
      {/* Blueprint corner markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-muted-foreground/30 group-hover:border-accent transition-colors" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-muted-foreground/30 group-hover:border-accent transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-muted-foreground/30 group-hover:border-accent transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-muted-foreground/30 group-hover:border-accent transition-colors" />

      {/* Tech ID annotation */}
      <motion.span
        layoutId={`${skill.id}-label`}
        className="absolute top-1 right-2 text-[8px] text-muted-foreground tracking-wider opacity-60"
      >
        {skill.numberLabel}
      </motion.span>

      {/* Icon */}
      <motion.div
        layoutId={`${skill.id}-icon`}
        className={`
              ${skill.size === "large" ? "w-16 h-16" : "w-10 h-10"}
              text-foreground group-hover:text-accent transition-colors
            `}
      >
        {skill.icon}
      </motion.div>

      {/* Name */}
      <motion.span
        layoutId={`${skill.id}-name`}
        className={`
              ${skill.size === "large" ? "text-lg" : "text-base"}
              font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors
            `}
      >
        {skill.name}
      </motion.span>

      {/* Click hint */}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        CLICK TO EXPAND
      </span>
    </motion.button>
  )
}

export function TechBentoGrid() {
  const [selectedSkill, setSelectedSkill] = useState<(RenderedSkill | null)>(null)
  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';

    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSkill]);
  return (
    <>
      <div className="hidden md:grid grid-cols-8 auto-rows-[80px] gap-3 mx-auto">
        {LAYOUT_ORDERS["desktop"].map(({ tech, gridClass }, idx) => Techbox({ ...tech, numberLabel: `TECH-${idx + 1}`, id: `desktop-${tech.id}` }, gridClass, setSelectedSkill))}
      </div>
      <div className="grid grid-cols-6 auto-rows-[80px] gap-3 mx-auto md:hidden">
        {LAYOUT_ORDERS["mobile"].map(({ tech, gridClass }, idx) => Techbox({ ...tech, numberLabel: `TECH-${idx + 1}`, id: `mobile-${tech.id}` }, gridClass, setSelectedSkill))}
      </div>

      <AnimatePresence>
        {selectedSkill && selectedSkill.type === "technology" && (
          <>
            {/* <div className="fixed top-[99vh] left-0 h-dvh w-dvw bg-black z-50 pointer-events-none"></div> */}

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm -top-[30dvh] -bottom-[30dvh]"
            >

              {/* Expanded Card/Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none ">
                <motion.dialog
                  open
                  layoutId={selectedSkill.id}
                  className="relative w-full max-w-lg bg-paper-100 border-2 border-accent shadow-2xl pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Blueprint corner markers - larger for modal */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />

                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <motion.div
                        layoutId={`${selectedSkill.id}-icon`}
                        className="w-10 h-10 flex items-center justify-center text-foreground"
                      >
                        {selectedSkill.icon}
                      </motion.div>
                      <div>
                        <motion.h2
                          layoutId={`${selectedSkill.id}-name`}
                          className="text-lg font-bold text-foreground uppercase tracking-wider"
                        >
                          {selectedSkill.name}
                        </motion.h2>
                        <motion.span
                          layoutId={`${selectedSkill.id}-label`}
                          className="text-[10px] text-muted-foreground tracking-wider"
                        >
                          {selectedSkill.numberLabel}
                        </motion.span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="p-1 hover:bg-muted transition-colors ml-4"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content - fades in after expansion */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 space-y-4"
                  >


                    {/* Description */}
                    <div>
                      <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Description</h3>
                      <div className="text-sm text-foreground leading-relaxed">{selectedSkill.description}</div>
                    </div>
                  </motion.div>

                  {/* Footer annotation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 border-t border-border border-dashed"
                  >
                    <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
                      Technical Details — {selectedSkill.name}
                    </p>
                  </motion.div>
                </motion.dialog>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
