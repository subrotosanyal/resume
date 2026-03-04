import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Subroto",
  lastName: "Sanyal",
  name: "Subroto Sanyal",
  role: "Technical Lead | Engineering Leader",
  avatar: "/images/avatar.png",
  email: "sanyalsubroto@gmail.com",
  location: "Europe/Berlin",
  languages: ["English", "Hindi", "Bengali"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Writing on engineering, systems, and execution.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/subrotosanyal/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/subrotosanyal",
    essential: true,
  },
  {
    name: "Resume",
    icon: "globe",
    link: "https://portfolio.sanyal.net/sanyal.subroto/preview",
    essential: true,
  },
  {
    name: "BrainBrew",
    icon: "book",
    link: "https://brainbrew.sanyal.net/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Portfolio`,
  description:
    "Engineering leadership portfolio covering compliance enablement, team scaling, open-source platform work, and self-hosted infrastructure.",
  headline: <>Driving innovation, scalable systems, and engineering excellence</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Core Expertise</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Leadership, compliance, platform engineering
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I lead engineering organizations and build practical systems across cloud infrastructure,
      product delivery, and AI-enabled automation. I also run a self-hosted homelab and enjoy
      tinkering with Raspberry Pi.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profile",
    description: (
      <>
        Berlin-based engineering leader with 17+ years in distributed systems, data platforms, and
        cloud-native product engineering. I focus on execution quality, organizational clarity,
        measurable outcomes, and practical AI adoption in delivery teams.
      </>
    ),
  },
  work: {
    display: true,
    title: "Leadership Journey",
    experiences: [
      {
        company: "StratifAI",
        timeframe: "2025 - Present",
        role: "Technical Lead",
        achievements: [
          <>Lead technical strategy and end-to-end engineering execution.</>,
          <>
            Own AWS platform architecture, CI/CD, API delivery, and secure SDLC for regulated
            product development.
          </>,
          <>
            Drive AI-led development patterns, including engineering copilots, automation-first
            workflows, and AI-assisted quality gates in delivery pipelines.
          </>,
        ],
        images: [],
      },
      {
        company: "Sightview Software",
        timeframe: "2023 - 2025",
        role: "VP of Engineering",
        achievements: [
          <>Improved engineering productivity by 79% through process and automation.</>,
          <>
            Reduced cloud cost by 32% and shortened release cycle from 6-7 months to 30 days.
          </>,
        ],
        images: [],
      },
      {
        company: "Automation Hero",
        timeframe: "2017 - 2023",
        role: "Head of Engineering / Senior Architect",
        achievements: [
          <>
            Built and scaled teams from startup phase to mature delivery organizations, including
            hiring, mentoring, and grooming new leaders.
          </>,
          <>
            Led cross-business-unit communication and collaboration across engineering, product,
            security, and operations.
          </>,
          <>
            Introduced AI-assisted engineering workflows to improve delivery speed, quality, and
            developer productivity.
          </>,
        ],
        images: [],
      },
      {
        company: "Datameer, Huawei & Market Logic Software",
        timeframe: "2008 - 2017",
        role: "Software Engineer / Big Data Architect",
        achievements: [
          <>
            Built deep hands-on software engineering expertise in distributed indexing, search, and
            large-scale data processing systems.
          </>,
          <>
            Developed and operated production systems using Solr, Hadoop, MapReduce, Spark, Tez,
            HDFS, and ZooKeeper across on-premise and cloud-like environments.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Compliance & Certification Enablement",
    institutions: [
      {
        name: "Standards and Frameworks",
        description: (
          <>
            Practical delivery experience supporting ISO 27001, ISO 27071, SOC 2, GDPR, HIPAA,
            IEC 62304, and ISO 13485-aligned engineering processes.
          </>
        ),
      },
      {
        name: "Tooling and Evidence",
        description: (
          <>
            Experience with security-by-design SDLC, audit evidence workflows, risk registers,
            policy controls, traceability, CI/CD controls, AI-assisted documentation workflows, and
            observability-driven operations.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "AI-led Development and Automation",
        description: (
          <>
            Practical adoption of AI across software delivery, including developer copilots,
            workflow automation, faster documentation generation, AI-assisted incident triage, and
            improved decision support for engineering leadership.
          </>
        ),
        tags: [
          { name: "AI-assisted SDLC" },
          { name: "Automation" },
          { name: "Developer Productivity" },
        ],
        images: [],
      },
      {
        title: "Open Source Data Platforms",
        description: (
          <>
            Hands-on work with active open-source ecosystems including <a href="https://hadoop.apache.org/">Hadoop</a>, <a href="https://solr.apache.org/">Solr</a>, <a href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html">MapReduce</a>, <a href="https://spark.apache.org/">Spark</a>, and <a href="https://tez.apache.org/">Tez</a>. Deployed and operated these stacks on-premise and in cloud environments.
          </>
        ),
        tags: [
          { name: "Hadoop" },
          { name: "Solr" },
          { name: "Spark" },
          { name: "Tez" },
        ],
        images: [],
      },
      {
        title: "Containerization and Cloud",
        description: (
          <>
            Extensive use of Docker and Docker Compose with AWS-first platform patterns. Built and
            operate a homelab stack for NAS-connected services, secure routing, identity brokering,
            automation, and AI-hosted workloads. Applied AI in engineering operations for
            incident triage, developer assistance, and workflow automation.
          </>
        ),
        tags: [
          { name: "Docker" },
          { name: "Docker Compose" },
          { name: "AWS" },
          { name: "Traefik" },
          { name: "Keycloak" },
        ],
        images: [],
      },
      {
        title: "Organization and Team Scaling",
        description: (
          <>
            Led teams across startup and mature-company contexts, including scale-up, scale-down,
            capability development, and leadership coaching for new managers and senior engineers.
          </>
        ),
        tags: [
          { name: "Org Design" },
          { name: "Mentorship" },
          { name: "Cross-functional Collaboration" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "https://brainbrew.sanyal.net/",
  label: "Blog",
  title: "BrainBrew",
  description: `Writing and notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Selected Personal Projects",
  description: "Personal websites and self-hosted platform engineering projects.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Gallery",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
