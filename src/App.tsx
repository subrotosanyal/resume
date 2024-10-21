import React, { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, GraduationCap, Award, User, Mail, Phone, MapPin, Globe, Github, Linkedin, Heart } from 'lucide-react';
import CVData from './CVData';
import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/Header';
import Section from './components/Section';

const themes = [
  { name: 'Amazon', class: 'theme-amazon' },
  { name: 'Netflix', class: 'theme-netflix' },
  { name: 'Microsoft', class: 'theme-microsoft' },
  { name: 'Google', class: 'theme-google' },
  { name: 'Facebook', class: 'theme-facebook' },
  { name: 'Instagram', class: 'theme-instagram' },
  { name: 'Twitter', class: 'theme-twitter' },
  { name: 'Orkut', class: 'theme-orkut' },
];

function App() {
  const [theme, setTheme] = useState(themes[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = `${theme.class} ${isDarkMode ? 'dark' : 'light'}`;
  }, [theme, isDarkMode]);

  return (
    <div className="min-h-screen p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <Header cv={CVData} />
        <div className="p-8">
          <Section title="About Me" icon={<User />}>
            <p className="text-gray-700 dark:text-gray-300">{CVData.about}</p>
          </Section>

          <Section title="Experience" icon={<Briefcase />}>
            {CVData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company} | {exp.date}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Education" icon={<GraduationCap />}>
            {CVData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution} | {edu.date}</p>
                {edu.details && <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>}
              </div>
            ))}
          </Section>

          <Section title="Skills" icon={<Award />}>
            <div className="flex flex-wrap gap-2">
              {CVData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Certifications" icon={<Award />}>
            {CVData.certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer} | {cert.date}</p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Certificate
                </a>
              </div>
            ))}
          </Section>

          <Section title="Interests" icon={<Heart />}>
            {CVData.interests.map((interest, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{interest.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">{interest.details}</p>
              </div>
            ))}
          </Section>

          <Section title="Languages" icon={<Globe />}>
            <div className="flex flex-wrap gap-2">
              {CVData.languages.map((language, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <ThemeSwitcher 
        themes={themes} 
        currentTheme={theme} 
        setTheme={setTheme}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
}

export default App;