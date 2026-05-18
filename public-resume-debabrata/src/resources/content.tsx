import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Debabrata",
  lastName: "Sanyal",
  name: "Dr. Debabrata Sanyal",
  role: "Head – Quality Management, Regulatory Affairs & Digital Transformation",
  avatar: "/images/avatar.png",
  email: "sanyaldeb@gmail.com",
  location: "Asia/Kolkata",
  languages: ["Bengali", "Hindi", "English", "Gujarati"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <></>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dr-debabrata-sanyal-39447742/",
    essential: true,
  },
  {
    name: "Resume",
    icon: "globe",
    link: "https://portfolio.sanyal.net/debabrata.sanyal/preview",
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
    "PhD chemist and pharmaceutical quality leader with 24 years across regulatory affairs and multi-site API quality assurance, including Corporate QA across 11 manufacturing sites and USFDA, EMA, COFEPRIS, and ANVISA inspection experience.",
  headline: <>Making compliance a capability, not a constraint</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Pharma QA</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Global Regulatory · API Quality · Digital Systems
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      24 years across regulatory affairs and multi-site quality assurance in pharmaceutical
      manufacturing. Led Corporate QA across 11 sites at MSN Laboratories, headed an oncology API
      quality team of 80, and navigated inspections from USFDA, EMA, COFEPRIS, and ANVISA. Now
      building the quality and compliance function at Ami Lifesciences — from governance frameworks
      to EDMS, LIMS, and data integrity systems.
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
        24 years in pharmaceutical quality across regulatory affairs, API quality assurance, and
        corporate quality leadership. At MSN Laboratories, led Corporate QA across 11 manufacturing
        sites and managed an API quality team of 80 covering Oncology, General, and Prostaglandin
        divisions — from technology transfer and facility qualification through to commercial
        production. Guided organisations through inspections from USFDA, EMA, COFEPRIS, RUSSIA, and
        ANVISA. Holds a PhD in Chemistry and an MBA in Operations Management. Currently heading
        Quality and Compliance at Ami Lifesciences, establishing governance frameworks, inspection
        readiness, and end-to-end digitalisation of quality systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Career Journey",
    experiences: [
      {
        company: "Ami Lifesciences Pvt. Ltd.",
        timeframe: "2025 – Present",
        role: "Head – Quality and Compliance",
        achievements: [
          <>Lead entire quality functions across all manufacturing sites.</>,
          <>
            Define and implement quality, compliance, and regulatory strategy for the organisation.
          </>,
          <>Build scalable quality systems, governance, and risk-based compliance frameworks.</>,
          <>Drive global regulatory filings, post-approval changes, and inspection readiness.</>,
          <>Lead digitalisation through EDMS, QMS, LIMS, and data integrity systems.</>,
          <>Establish quality and compliance KPIs and review performance across sites.</>,
        ],
        images: [],
      },
      {
        company: "MSN Laboratories",
        timeframe: "April 2023 – July 2025",
        role: "Senior General Manager – Corporate Quality Assurance",
        achievements: [
          <>Led regulatory inspection and audit excellence across the organisation.</>,
          <>Drove quality system harmonisation across all manufacturing sites.</>,
          <>Spearheaded advanced digital quality transformation initiatives.</>,
          <>Led training and development programmes for inspection readiness.</>,
          <>Identified and rectified system gaps through trending and tracking.</>,
          <>Eliminated operational redundancies to improve efficiency.</>,
        ],
        images: [],
      },
      {
        company: "MSN Laboratories",
        timeframe: "October 2022 – March 2023",
        role: "General Manager – Corporate Quality Assurance",
        achievements: [
          <>Led enterprise-wide Corporate Quality Assurance across 11 manufacturing sites.</>,
          <>Aligned site quality operations with corporate standards and policies.</>,
          <>Mentored site quality teams to strengthen quality culture organisation-wide.</>,
          <>Strengthened audit readiness across all manufacturing sites.</>,
        ],
        images: [],
      },
      {
        company: "MSN Laboratories",
        timeframe: "April 2020 – October 2022",
        role: "General Manager – Quality Assurance API (Head QA)",
        achievements: [
          <>Managed API quality systems across Oncology, General, and Prostaglandin divisions.</>,
          <>Led technology transfer for API projects from R&D to commercial production.</>,
          <>Ensured regulatory and customer audit compliance with an audit-ready approach.</>,
          <>Led and developed a quality team of 80 across training and capability building.</>,
          <>Oversaw systems commissioning, qualification, validation, and operation.</>,
          <>Managed vendor relationships for raw materials and customer coordination.</>,
        ],
        images: [],
      },
      {
        company: "MSN Laboratories",
        timeframe: "April 2018 – March 2020",
        role: "Deputy General Manager – Quality Assurance API (Head QA)",
        achievements: [<>Led site quality assurance for the Oncology API site.</>],
        images: [],
      },
      {
        company: "MSN Laboratories",
        timeframe: "March 2017 – March 2018",
        role: "Assistant General Manager – Quality Assurance API (Head QA)",
        achievements: [<>Led site quality assurance for the Oncology API site.</>],
        images: [],
      },
      {
        company: "Amoli Organics Limited",
        timeframe: "May 2014 – February 2017",
        role: "General Manager – Regulatory Affairs and Compliance API (Group Head)",
        achievements: [
          <>Led the organisation's regulatory and compliance function across all sites.</>,
          <>Formulated and implemented regulatory and compliance strategies.</>,
          <>Managed global regulatory needs for assigned generic APIs.</>,
          <>Served as primary regulatory interface for agencies and customers.</>,
          <>Mentored regulatory affairs staff to enhance competency.</>,
        ],
        images: [],
      },
      {
        company: "Amoli Organics Limited",
        timeframe: "November 2011 – April 2014",
        role: "Deputy General Manager – Regulatory Affairs and Compliance API",
        achievements: [
          <>
            Developed regulatory submissions for US, EU, EDQM, Canada, Japan, TGA, and ROW markets.
          </>,
          <>Managed change management and approvals for regulatory compliance.</>,
          <>Ensured responses to regulatory and customer deficiencies.</>,
          <>Managed product lifecycle including amendments, annual reports, and renewals.</>,
          <>Provided audit and inspection support towards regulatory compliance.</>,
        ],
        images: [],
      },
      {
        company: "Dishman Pharmaceuticals",
        timeframe: "March 2011 – November 2011",
        role: "Senior Manager – Regulatory Affairs and Compliance",
        achievements: [
          <>Guided the regulatory affairs team in achieving defined objectives.</>,
          <>
            Developed regulatory submissions for generic API and disinfectants for international
            projects.
          </>,
          <>
            Reviewed technical data including method validation, tech-transfer documentation, and
            process validation.
          </>,
          <>Conducted employee training on regulatory aspects.</>,
        ],
        images: [],
      },
      {
        company: "MSN Labs Ltd.",
        timeframe: "September 2007 – March 2011",
        role: "Manager – Regulatory Affairs (Group Head)",
        achievements: [
          <>Led the organisation's regulatory affairs function across 4 sites.</>,
          <>Managed regulatory submissions for generic API for international projects.</>,
          <>Addressed regulatory deficiencies from EDQM, USFDA, EU, Canada, Brazil, and others.</>,
          <>Developed systems and protocols for effective regulatory functions.</>,
          <>Resolved customer queries on regulatory projects from marketing.</>,
        ],
        images: [],
      },
      {
        company: "Aurobindo Pharma Ltd.",
        timeframe: "January 2005 – September 2007",
        role: "Assistant Manager – International Regulatory Affairs",
        achievements: [
          <>Developed regulatory submissions for international projects.</>,
          <>Advised project teams on pre-market regulatory requirements.</>,
          <>Maintained regulatory documentation databases and systems.</>,
          <>Participated in internal and external audits.</>,
        ],
        images: [],
      },
      {
        company: "Torrent Pharmaceuticals Ltd.",
        timeframe: "April 2004 – January 2005",
        role: "Scientist II – Regulatory Affairs",
        achievements: [
          <>
            Coordinated and prepared formulation regulatory submissions for international projects.
          </>,
          <>Prepared additional information and responses as requested by regulatory agencies.</>,
          <>Reviewed technical data for regulatory submissions and responses.</>,
        ],
        images: [],
      },
      {
        company: "Cadila Pharmaceuticals Limited",
        timeframe: "March 2003 – April 2004",
        role: "Technical Supervisor – Quality Assurance",
        achievements: [
          <>Performed in-process quality assurance (IPQA) for formulations.</>,
          <>Assisted in preparation for international audits.</>,
          <>Developed and tracked quality metrics.</>,
          <>Reviewed quality documentation and wrote standard operating procedures.</>,
        ],
        images: [],
      },
      {
        company: "PharmAlliance",
        timeframe: "May 2001 – March 2003",
        role: "Executive – QA Systems and Regulatory Affairs",
        achievements: [
          <>Prepared SOPs for client companies on quality systems.</>,
          <>
            Developed Drug Master File submissions for Europe, US, Canada, Japan, and ROW markets.
          </>,
          <>Addressed regulatory deficiencies received on client DMFs.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Academic Foundations & Professional Credentials",
    institutions: [
      {
        name: "Pacific University Udaipur",
        description: <>Doctor of Philosophy (PhD) in Chemistry, 2013–2017.</>,
      },
      {
        name: "Indira Gandhi National Open University",
        description: <>Master of Business Administration (MBA) in Operations Management, 2016.</>,
      },
      {
        name: "Gujarat University",
        description: <>MSc in Environmental Science, Biochemistry and Chemistry, 1999–2001.</>,
      },
      {
        name: "St. Xavier's College",
        description: <>BSc in Biochemistry and Biotechnology, 1996–1999.</>,
      },
      {
        name: "Certifications",
        description: (
          <>
            Scrum Master Certificate · ISO 9001 Lead Auditor – Quality Certification · Digital
            Transformation Certificate.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Domain Expertise",
    skills: [
      {
        title: "Quality Management",
        description: (
          <>
            Expert-level capability across Corporate Quality Assurance, API quality systems, and
            inspection readiness. Managed quality functions spanning multiple manufacturing sites
            with teams of up to 80 professionals.
          </>
        ),
        tags: [
          { name: "Corporate QA" },
          { name: "API Quality Systems" },
          { name: "Inspection Readiness" },
        ],
        images: [],
      },
      {
        title: "Regulatory Affairs",
        description: (
          <>
            Extensive experience managing regulatory submissions and audit compliance across global
            markets. Led responses to inspections from USFDA, EMA, EDQM, ANVISA, COFEPRIS, and other
            major regulatory agencies.
          </>
        ),
        tags: [
          { name: "USFDA" },
          { name: "EMA" },
          { name: "EDQM" },
          { name: "ANVISA" },
          { name: "COFEPRIS" },
          { name: "ROW Submissions" },
        ],
        images: [],
      },
      {
        title: "Digital Transformation",
        description: (
          <>
            Led harmonisation and implementation of global quality IT systems to enable
            digitalisation, improve compliance, and optimise operational workflows across multi-site
            pharmaceutical organisations.
          </>
        ),
        tags: [
          { name: "EDMS" },
          { name: "QMS" },
          { name: "LIMS" },
          { name: "QAMS" },
          { name: "Data Integrity" },
        ],
        images: [],
      },
      {
        title: "Computer System Validation",
        description: (
          <>
            Proficient in qualification, validation, and compliance systems for computerised systems
            in regulated pharmaceutical environments.
          </>
        ),
        tags: [{ name: "Qualification" }, { name: "Validation" }, { name: "Compliance Systems" }],
        images: [],
      },
      {
        title: "Process Excellence & Continuous Improvement",
        description: (
          <>
            Delivered operational excellence through quality system governance, risk-based
            compliance frameworks, and elimination of process redundancies across global sites.
          </>
        ),
        tags: [
          { name: "Operational Excellence" },
          { name: "Risk-based Compliance" },
          { name: "Process Optimisation" },
        ],
        images: [],
      },
      {
        title: "Team Management & Leadership",
        description: (
          <>
            Built and led quality organisations across enterprise pharmaceutical settings. Mentored
            site quality heads, developed training programmes, and established cross-functional
            alignment across regulatory, operations, and engineering teams.
          </>
        ),
        tags: [
          { name: "Leadership" },
          { name: "Cross-functional Alignment" },
          { name: "Training and Development" },
        ],
        images: [],
      },
      {
        title: "Publications",
        description: (
          <>
            <em>
              Risk Assessment – Genotoxic Impurities in Celecoxib [Class – COX-2 Selective
              Inhibitor]
            </em>
            <br />
            <em>Genotoxic Impurities in Active Pharmaceutical Ingredients</em>
          </>
        ),
        tags: [
          { name: "Peer-reviewed Research" },
          { name: "Genotoxic Impurities" },
          { name: "Pharmaceutical Chemistry" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Projects",
  description: "",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Gallery",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
