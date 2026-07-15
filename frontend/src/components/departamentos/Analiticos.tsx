import React from 'react';
import { MexicoEsMayia } from '../modules/dashboardModules/MexicoEsMayia';

interface AnaliticosProps {
  initialSelectedEstado?: string | null;
}

export const Analiticos: React.FC<AnaliticosProps> = ({ initialSelectedEstado }) => (
  <MexicoEsMayia initialSelectedEstado={initialSelectedEstado} />
);
