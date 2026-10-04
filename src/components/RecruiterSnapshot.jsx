import React from 'react';
import { Briefcase, Code, GraduationCap, Compass, Layers, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function RecruiterSnapshot() {
  const { recruiterSnapshot, personal } = portfolioData;

  const items = [
    {
      icon: GraduationCap,
      label: 'Currently',
      value: recruiterSnapshot.currently,
      sub: 'Federal University Dutsin-Ma'
    },
    {
      icon: Code,
      label: 'Core Focus',
      value: recruiterSnapshot.focus,
      sub: 'APIs, Relational DBs & Frontends'
    },
    {
      icon: Layers,
      label: 'Primary Stack',
      value: recruiterSnapshot.primaryStack,
      sub: 'JavaScript ecosystem'
    },
    {
      icon: Briefcase,
      label: 'Seeking',
      value: recruiterSnapshot.seeking,
      sub: 'Full-Time / Internship'
    },
    {
      icon: Compass,
      label: 'Featured Work',
      value: recruiterSnapshot.flagshipWork,
      sub: 'Live on Render'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      sub: 'Open to Remote / Hybrid'
    }
  ];

  return (
    <div className="container">
      <div className="snapshot-bar" role="region" aria-label="Recruiter Quick Snapshot">
        <div className="snapshot-grid">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="snapshot-item">
                <div className="snapshot-header">
                  <IconComponent size={14} color="var(--accent-cyan)" />
                  <span>{item.label}</span>
                </div>
                <div className="snapshot-value">{item.value}</div>
                <div className="snapshot-sub">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
