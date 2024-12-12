
export interface Chambre {
  id: number;
  selectedAdults: string;
  selectedEnfants: string;
  selectedLitBebe: string;
}

export interface HotelFormData {
  dateRange: {
    start: string; 
    end: string;   
  };
  pension: string; 
  chambres: Chambre[]; 
}

export interface Periode {
    periode?: string;
    tarif?: number;
    _key: string;
  }
export interface Hotel {
    hotel?: string;
    prix?: number;
    _key: string;
  }
  