import {
  faCalendarCheck,
  faClock,
  faFileCircleCheck,
  faFileZipper,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import type { Collaborator, Route, Timeline, WhyAttendData } from "./types";
import { CURLogo, IJCSR, UniversitasLogo } from "./assets/images";

import {
  faHandshake,
  faLightbulb,
  faMicrophone,
  faUserGear,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

export const WHY_ATTEND: Array<WhyAttendData> = [
  {
    title: "Networking Opportunities",
    icon: faHandshake,
  },

  {
    title: "Unique Resource Speakers",
    icon: faMicrophone,
  },

  {
    title: "Innovative Learning",
    icon: faLightbulb,
  },

  {
    title: "Global Reach",
    icon: faGlobe,
  },

  {
    title: "Impactful Researches",
    icon: faUserGear,
  },

  {
    title: "Discover new Tech",
    icon: faWrench,
  },
];

export const COLLABORATORS: Collaborator[] = [
  {
    icon: CURLogo,
    text: "UMak Center for University Research",
    link: "https://umak.edu.ph/centers/research",
  },

  {
    icon: UniversitasLogo,
    text: "UMak Universitas",
    link: "https://journals.umak.edu.ph",
  },
  {
    icon: IJCSR,
    text: "International Journal of Computing Science Research",
    link: "https://stepacademic.net/ijcsr",
  },
];

export const TIMELINE: Timeline[] = [
  {
    date: "Mar. 11, 2024",
    description: "Start of Paper Submission.",
    icon: faFileCircleCheck,
  },

  {
    date: "Apr. 7, 2024",
    description: "Deadline of Paper Submission.",
    icon: faFileZipper,
  },
  {
    date: "Apr. 28, 2024",
    description: "Deadline of Registration.",
    icon: faClock,
  },
  {
    date: "May 10, 2024",
    description: "11th ICT Research Congress.",
    icon: faCalendarCheck,
  },
];

export const ROUTES: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/mechanics",
    name: "Mechanics",
  },
  {
    path: "/gallery",
    name: "Gallery",
  },
  {
    path: "/about",
    name: "About",
  },
];
