export interface Settore {
  slug: string;
  numero: string;
  titolo: string;
  claim: string;
  descrizione: string;
  servizi: string[];
  immagine: string;
}

export const SETTORI: Settore[] = [
  {
    slug: 'audio',
    numero: '01',
    titolo: 'Audio',
    claim: 'Quando il suono è perfetto, nessuno ci pensa. Ed è il nostro più grande complimento.',
    descrizione:
      'Sistemi line array, monitoraggio palco, microfonazione, regia FOH. Dal piccolo evento corporate al concerto live: scegliamo il setup giusto per ogni venue, indoor o outdoor.',
    servizi: [
      'Service audio per concerti live',
      'Conferenze, convention e meeting',
      'Microfonazione e radiomicrofoni',
      'Regia FOH e monitoraggio palco',
      'Diffusione su grandi superfici'
    ],
    immagine:
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'luci',
    numero: '02',
    titolo: 'Luci',
    claim: 'Le luci raccontano l\'evento prima ancora che inizi. Le nostre lo fanno parlare.',
    descrizione:
      'Light design, regia luci, fari moving head, wash, beam, blinder. Studiamo ogni scena per valorizzare artisti, brand e architetture.',
    servizi: [
      'Light design e progettazione scenica',
      'Regia luci live con console grandMA / Avolites',
      'Fari moving head, wash, beam, blinder',
      'Architectural lighting per location',
      'Effetti speciali: hazer, smoke, CO2'
    ],
    immagine:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'video',
    numero: '03',
    titolo: 'Video',
    claim: 'Ledwall, regia multicamera, streaming. Tutto quello che serve perché ogni dettaglio si veda.',
    descrizione:
      'Maxischermi LED indoor e outdoor, regia video multicamera, riprese live e streaming professionale. Per eventi che devono essere visti da tutti, anche da chi non è in sala.',
    servizi: [
      'Ledwall indoor e outdoor (P2.6, P3.9, P4.8)',
      'Regia video multicamera live',
      'Streaming professionale multi-piattaforma',
      'Proiezioni e mapping',
      'Riprese e post-produzione'
    ],
    immagine:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'strutture',
    numero: '04',
    titolo: 'Strutture',
    claim: 'Palchi, americane, coperture. La sicurezza è la prima cosa che monteremo.',
    descrizione:
      'Palchi modulari, americane in alluminio, torri di sostegno, coperture. Tutto a norma, tutto certificato, tutto montato dal nostro team specializzato.',
    servizi: [
      'Palchi modulari fino a 12x10m',
      'Americane truss in alluminio certificato',
      'Torri di sostegno e ground support',
      'Coperture e tendostrutture',
      'Montaggio con tecnici qualificati'
    ],
    immagine:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80'
  }
];

export interface Evento {
  id: string;
  titolo: string;
  tipo: string;
  anno: string;
  immagine: string;
  servizi: string[];
}

export const EVENTI: Evento[] = [
  {
    id: 'e1',
    titolo: 'Festival d\'Estate',
    tipo: 'Festival',
    anno: '2024',
    immagine: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci', 'Strutture']
  },
  {
    id: 'e2',
    titolo: 'Convention Aziendale',
    tipo: 'Corporate',
    anno: '2024',
    immagine: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Video', 'Luci']
  },
  {
    id: 'e3',
    titolo: 'Concerto Live in Piazza',
    tipo: 'Concerto',
    anno: '2024',
    immagine: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci', 'Video', 'Strutture']
  },
  {
    id: 'e4',
    titolo: 'Wedding Esclusivo',
    tipo: 'Wedding',
    anno: '2024',
    immagine: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci']
  },
  {
    id: 'e5',
    titolo: 'Lancio Prodotto Brand',
    tipo: 'Corporate',
    anno: '2023',
    immagine: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Video', 'Luci', 'Strutture']
  },
  {
    id: 'e6',
    titolo: 'Festa di Paese',
    tipo: 'Festival',
    anno: '2023',
    immagine: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci', 'Strutture']
  },
  {
    id: 'e7',
    titolo: 'DJ Set Open Air',
    tipo: 'Concerto',
    anno: '2023',
    immagine: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci']
  },
  {
    id: 'e8',
    titolo: 'Gala di Beneficenza',
    tipo: 'Corporate',
    anno: '2023',
    immagine: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci', 'Video']
  },
  {
    id: 'e9',
    titolo: 'Festival Estivo Outdoor',
    tipo: 'Festival',
    anno: '2023',
    immagine: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
    servizi: ['Audio', 'Luci', 'Video', 'Strutture']
  }
];

export const TIPI_EVENTO = ['Tutti', 'Concerto', 'Corporate', 'Festival', 'Wedding'] as const;
