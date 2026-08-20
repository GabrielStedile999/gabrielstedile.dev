import type { JourneyEntry } from "@/content/journey";
import type { Project, ProjectCategory } from "@/content/projects";
import type { ProofMetric } from "@/content/proof";
import type {
  ResumeEducation,
  ResumeExperience,
  ResumeSkillGroup,
} from "@/content/resume";
import type { WorkingHabit } from "@/content/workingStyle";

export type Locale = "en" | "pt";

export type Dict = {
  locale: Locale;
  htmlLang: string;

  meta: {
    title: string;
    description: string;
  };

  nav: {
    links: { label: string; href: string }[];
    talk: string;
    ariaMain: string;
    ariaHome: string;
    ariaToggleMenu: string;
    ariaOpenPalette: string;
    langToggle: { label: string; href: string; aria: string };
  };

  hero: {
    eyebrow: string;
    titlePre: string;
    titleGradient: string;
    lead: string;
    monoLine: string;
    ctaWork: string;
    ctaResume: string;
    availability: string;
    socialAria: {
      group: string;
      github: string;
      linkedin: string;
      email: string;
    };
    panelLabel: string;
    live: string;
    terminal: {
      deployPrefix: string;
      vitals: string;
      a11yLabel: string;
      a11yValue: string;
      aiLabel: string;
      aiValue: string;
    };
    stats: { years: string; apps: string; clients: string; layers: string };
  };

  marqueeAria: string;
  stackStrip: { title: string };

  profile: {
    eyebrow: string;
    titlePre: string;
    titleGradient: string;
    paragraphs: string[];
    principles: string[];
    asideAria: string;
    photoAlt: string;
    cardTagline: string;
    basedIn: { label: string; value: string };
    deepest: { label: string; value: string };
    expanding: { label: string; value: string };
  };

  journey: {
    eyebrow: string;
    title: string;
    description: string;
    entries: JourneyEntry[];
  };

  work: {
    eyebrow: string;
    title: string;
    description: string;
    filterAria: string;
    categories: { value: ProjectCategory | "all"; label: string }[];
    ndaShort: string;
    ndaTitle: string;
    ndaLong: string;
    viewDetails: string;
    modalContext: string;
    modalWhat: string;
    modalOutcome: string;
    modalLabelSuffix: string;
    modalFallbackLabel: string;
    closeAria: string;
    items: Project[];
  };

  stack: {
    eyebrow: string;
    titlePre: string;
    titleGradient: string;
    titlePost: string;
    description: string;
    areas: { title: string; description: string }[];
  };

  proof: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: ProofMetric[];
  };

  workingStyle: {
    eyebrow: string;
    title: string;
    description: string;
    habits: WorkingHabit[];
  };

  contact: {
    eyebrow: string;
    titlePre: string;
    titleGradient: string;
    description: string;
    openToWork: string;
    copy: string;
    emailBtn: string;
    resumeBtn: string;
  };

  footer: {
    tagline: string;
    ariaLabel: string;
    links: { label: string; href: string; external?: boolean }[];
    rights: string;
  };

  resume: {
    metaTitle: string;
    metaDescription: string;
    path: string;
    actionsAria: string;
    backLabel: string;
    downloadPdf: string;
    print: string;
    langToggle: { label: string; href: string; aria: string };
    roleLine: string;
    availability: string;
    sections: {
      summary: string;
      skills: string;
      experience: string;
      education: string;
      languages: string;
    };
    summary: string;
    skills: ResumeSkillGroup[];
    experience: ResumeExperience[];
    education: ResumeEducation[];
    languages: { language: string; level: string }[];
    preferFile: string;
    downloadLink: string;
  };

  palette: {
    dialogAria: string;
    searchAria: string;
    placeholder: string;
    listAria: string;
    groups: { navigate: string; actions: string };
    noResultsPrefix: string;
    hintNavigate: string;
    hintSelect: string;
    commands: {
      home: string;
      profile: string;
      journey: string;
      work: string;
      stack: string;
      proof: string;
      contact: string;
      resumePage: string;
      notes: string;
      downloadResume: string;
      copyEmail: string;
      copied: string;
      sendEmail: string;
      openGithub: string;
      openLinkedin: string;
    };
    hints: { pdf: string; newTab: string; mailto: string };
  };
};
