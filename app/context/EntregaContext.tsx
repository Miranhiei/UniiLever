import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Entrega = {
  id: string;
  origem: string;
  destino: string;
  tipoCarga: string;
  horario: string;
  status: 'Pendente' | 'Confirmada' | 'Cancelada' | 'Em trânsito' | 'Concluída';
  tempoEstimado: string;
};

type EntregaContextType = {
  entregas: Entrega[];
  adicionarEntrega: (novaEntrega: Entrega) => void;
  atualizarStatus: (id: string, novoStatus: Entrega['status']) => void;
};

const EntregaContext = createContext<EntregaContextType | undefined>(undefined);

export const EntregaProvider = ({ children }: { children: ReactNode }) => {
  const [entregas, setEntregas] = useState<Entrega[]>([
    {
      id: '3150',
      origem: 'Centro de Distribuição',
      destino: 'Unidade Industrial',
      tipoCarga: 'Paletes',
      horario: '14:00',
      status: 'Em trânsito',
      tempoEstimado: '30 min',
    },
    {
      id: '3151',
      origem: 'Fábrica 1',
      destino: 'Depósito',
      tipoCarga: 'Matéria-prima',
      horario: '09:00',
      status: 'Pendente',
      tempoEstimado: '1 hora',
    },
  ]);

  const adicionarEntrega = (novaEntrega: Entrega) => {
    setEntregas((prev) => [...prev, novaEntrega]);
  };

  const atualizarStatus = (id: string, novoStatus: Entrega['status']) => {
    setEntregas((prev) =>
      prev.map((entrega) =>
        entrega.id === id ? { ...entrega, status: novoStatus } : entrega
      )
    );
  };

  return (
    <EntregaContext.Provider value={{ entregas, adicionarEntrega, atualizarStatus }}>
      {children}
    </EntregaContext.Provider>
  );
};

export const useEntregas = () => {
  const context = useContext(EntregaContext);
  if (!context) {
    throw new Error('useEntregas deve ser usado dentro de um EntregaProvider');
  }
  return context;
};
