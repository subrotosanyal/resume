import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;