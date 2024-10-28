import React, { useState, useEffect } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


interface TimelineElementProps {
  startDate: string;
  endDate?: string;
  company: string;
  role: string;
  details: string[];
  icon: string;
  isOpen: boolean;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ startDate, endDate, company, role, details, icon, isOpen }) => {
  const [isCardOpen, setIsCardOpen] = useState(isOpen);

  useEffect(() => {
    setIsCardOpen(isOpen);
  }, [isOpen]);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
      <VerticalTimelineElement
          icon={<i className={`fas ${icon}`}></i>}
          iconStyle={{
            background: 'var(--color-primary)',
            color: '#fff',
            border: '2px solid var(--color-secondary)',
          }}
          contentStyle={{ background: 'var(--color-background)', color: 'var(--color-text)', width: '100%' }}
          contentArrowStyle={{ borderRight: '7px solid var(--color-primary)' }}
      >
        <div className="cursor-pointer flex justify-between items-center" onClick={toggleCard}>
          <div>
            <h3 className="text-lg font-bold">{role}</h3>
            <h4 className="text-md font-medium text-secondary">{company}</h4>
          </div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {startDate} {endDate ? `- ${endDate}` : ''}
          </div>
        </div>

        {isCardOpen && (
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
        )}
      </VerticalTimelineElement>
  );
};

export default TimelineElement;
