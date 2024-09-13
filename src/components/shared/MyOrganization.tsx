import React from 'react';
import { useRouter } from 'next/navigation';
import CreateOrganizationDialog from '@/components/shared/CreateOrganizationForm';

interface Organization {
  id: number;
  name: string;
  logo: string;
}

const adminOrganizations: Organization[] = [
  { id: 1, name: 'Accelchain', logo: '/images/accelchain.png' },
  { id: 2, name: 'Microsoft', logo: '/images/Microsoftlogo.png' },
  { id: 3, name: 'Apple', logo: '/images/apple.png' },
];

const memberOrganizations: Organization[] = [
  { id: 4, name: 'Reliance', logo: '/images/reliance.png' },
  { id: 5, name: 'Tata', logo: '/images/tata.png' },
  { id: 6, name: 'MitAdt', logo: '/images/mit.png' },
];

const MyOrganizations: React.FC = () => {
  const router = useRouter();

  const handleOrgClick = () => {
    router.push('/Proposals'); 
  };

  return (
    <div className="p-12 text-white max-w-screen-xl mx-auto">
      
      <CreateOrganizationDialog />

      <div
        className="mb-10 p-6 rounded-lg border-2"
        style={{
          background: 'rgba(218, 216, 216, 0.11)',
          borderColor: '#497CFF',
          borderWidth: '2px', 
          borderStyle: 'solid',
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-[#BFBABA] text-center">
          Organizations You Admin
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {adminOrganizations.map((org) => (
            <div
              key={org.id}
              className="relative flex flex-col items-center shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl group"
              style={{
                width: '300px',
                height: '280px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))',
              }}
              onClick={handleOrgClick}
            >
              <div className="relative w-full h-3/4 overflow-hidden">
                <img src={org.logo} alt={org.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-3 text-center">
                <h2 className="text-md font-semibold text-white">{org.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-6 rounded-lg border-2"
        style={{
          background: 'rgba(218, 216, 216, 0.11)',
          borderColor: '#B07AE9',
          borderWidth: '2px', 
          borderStyle: 'solid',
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-[#BFBABA] text-center">
          Organizations You’re a Member Of
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {memberOrganizations.map((org) => (
            <div
              key={org.id}
              className="relative flex flex-col items-center shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl group"
              style={{
                width: '300px',
                height: '280px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))',
              }}
              onClick={handleOrgClick}
            >
              <div className="relative w-full h-3/4 overflow-hidden">
                <img src={org.logo} alt={org.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-3 text-center">
                <h2 className="text-md font-semibold text-white">{org.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrganizations;
