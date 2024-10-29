import React, { useState, useEffect } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimelineElement.css';
import { TimelineElementProps } from '../types/TimelineElementProps';

const TimelineElement: React.FC<TimelineElementProps> = ({ startDate, endDate, company, role, details, icon, isOpen, companyIcon }) => {
  const [isCardOpen, setIsCardOpen] = useState(isOpen);

  useEffect(() => {
    setIsCardOpen(isOpen);
  }, [isOpen]);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <VerticalTimelineElement
      className="custom-timeline-element"
      icon={<i className={`fas ${icon}`}></i>}
      iconStyle={{
        background: 'var(--color-primary)',
        color: '#fff',
        border: '2px solid var(--color-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      contentStyle={{ background: 'var(--color-background)', color: 'var(--color-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color-primary)' }}
      date={`${startDate} ${endDate ? `- ${endDate}` : ''}`}
    >
      <div className="cursor-pointer flex justify-between items-center" onClick={toggleCard}>
        <div>
          <h3 className="text-lg font-bold">{role}</h3>
          <h4 className="text-md font-medium text-secondary">{company}</h4>
        </div>
        {companyIcon && <img src={companyIcon} alt={`${company} logo`} className="company-icon" />}
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