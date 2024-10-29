export interface TimelineElementProps {
  startDate: string;
  endDate?: string;
  company: string;
  role: string;
  details: string[];
  icon: string;
  isOpen: boolean;
  companyIcon?: string; // Add this line
}