import { useState, useEffect, useCallback } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award, User, Heart, Globe, ChevronDown, ChevronUp, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CVData from './CVData';
import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/Header';
import Section from './components/Section';
import TimelineElement from './components/TimelineElement';
import { Theme } from './types/Theme'; // Import Theme interface

const themes: Theme[] = [
  { name: 'Forest', class: 'theme-forest' },
  { name: 'Ocean', class: 'theme-ocean' },
  { name: 'Mountain', class: 'theme-mountain' },
  { name: 'River', class: 'theme-river' },
  { name: 'Sunset', class: 'theme-sunset' },
  { name: 'Desert', class: 'theme-desert' },
  { name: 'Rainforest', class: 'theme-rainforest' },
  { name: 'Aurora', class: 'theme-aurora' },
];

function App() {
  const [theme, setTheme] = useState<Theme>(themes[7]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [areAllCardsOpen, setAreAllCardsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleAllCards = () => {
    setAreAllCardsOpen(prevState => !prevState);
  };

  const downloadPDF = useCallback(async () => {
    try {
      setIsDownloading(true);
      setAreAllCardsOpen(true); // Ensure all cards are open

      // Wait for state update to propagate
      await new Promise(resolve => setTimeout(resolve, 100));

      const content = document.getElementById('resume-content');
      if (!content) return;

      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width * 0.5, canvas.height * 0.5]
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width * 0.5, canvas.height * 0.5);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  useEffect(() => {
    document.body.className = `${theme.class} ${isDarkMode ? 'dark' : 'light'}`;
  }, [theme, isDarkMode]);

  return (
      <div className="min-h-screen p-8 transition-colors duration-300">
        <div id="resume-content" className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <Header cv={CVData} />
          <div className="p-8">
            <Section title="About Me" icon={<User />}>
              <p className="text-gray-700 dark:text-gray-300">{CVData.about}</p>
            </Section>

            <Section title="Experience" icon={<Briefcase />}>
              <VerticalTimeline>
                {CVData.experience.map((exp, index) => (
                    <TimelineElement
                        key={index}
                        date={exp.date}
                        company={exp.company}
                        role={exp.position}
                        details={exp.responsibilities}
                        icon="fa-briefcase"
                        isOpen={areAllCardsOpen}
                    />
                ))}
              </VerticalTimeline>
              <div className="flex justify-center mt-4">
                <button
                    className="bg-primary text-white px-4 py-2 rounded-full"
                    onClick={toggleAllCards}
                >
                  {areAllCardsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
            </Section>

            <Section title="Education" icon={<GraduationCap />}>
              <VerticalTimeline>
                {CVData.education.map((edu, index) => (
                    <TimelineElement
                        key={index}
                        date={edu.date}
                        company={edu.institution}
                        role={edu.degree}
                        details={edu.details ? [edu.details] : []}
                        icon="fa-graduation-cap"
                        isOpen={areAllCardsOpen}
                    />
                ))}
              </VerticalTimeline>
              <div className="flex justify-center mt-4">
                <button
                    className="bg-primary text-white px-4 py-2 rounded-full"
                    onClick={toggleAllCards}
                >
                  {areAllCardsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
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
                    <div className="flex flex-wrap gap-2">
                      {interest.details.split(",").map((detail, counter) => (
                          <span
                              key={counter}
                              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {detail.trim()}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </Section>

            <Section title="Languages" icon={<Globe />}>
              <div className="flex flex-wrap gap-2">
                {CVData.languages.map((language, counter) => (
                    <span key={counter} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {language}
                </span>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
              onClick={downloadPDF}
              disabled={isDownloading}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
              title="Download PDF"
          >
            {isDownloading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
                <Download size={24} />
            )}
          </button>
        </div>

        <ThemeSwitcher
            themes={themes}
            currentTheme={theme}
            setTheme={setTheme as (theme: Theme) => void}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
        />
      </div>
  );
}

export default App;