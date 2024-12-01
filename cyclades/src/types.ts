export interface MenuItem {
  label: string;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  href?: string;
}

export const MENU_CONFIG: MenuItem[] = [
  {
    label: 'Accueil',
    subItems: [
      { label: `Retourner à la page d'accueil`, href: '/' },
      { label: 'Tableau de bord', href: '/dashboard' },
      { label: 'Informations générales', href: '/home-info' },
    ],
  },
  {
    label: 'Administration',
    subItems: [
      { label: 'Gestion des utilisateurs', href: '/user-management' },
      { label: 'Paramètres système', href: '/system-settings' },
    ],
  },
  {
    label: 'Réglementation',
    subItems: [
      { label: 'Consulter les règlements', href: '/regulations' },
      { label: 'Mises à jour réglementaires', href: '/regulation-updates' },
    ],
  },
  {
    label: 'Inscription',
    subItems: [
      {
        label: `Gérer les services d'inscription`,
        href: '/inscription-services',
      },
      { label: 'Gérer les inscriptions', href: '/handleSubscription' },
      { label: 'Gérer les mesures handicap', href: '/disability-measures' },
      { label: 'Editer des listes de candidatures', href: '/candidate-lists' },
      {
        label: 'Editer liste des candidats allophones',
        href: '/allophone-candidates',
      },
      {
        label: 'Editer des confirmations d’inscription',
        href: '/registration-confirmations',
      },
      {
        label: 'Gérer les pièces justificatives',
        href: '/supporting-documents',
      },
      { label: 'Editer des statistiques', href: '/statistics' },
      {
        label: 'Editer statistiques générales simples',
        href: '/simple-statistics',
      },
    ],
  },
  {
    label: 'Orga-Affectation',
    subItems: [
      { label: 'Consulter les affectations', href: '/affectations' },
      { label: 'Editer des affectations', href: '/edit-affectations' },
    ],
  },
  {
    label: 'Déroulement',
    subItems: [{ label: 'Consulter le calendrier', href: '/calendar' }],
  },
  {
    label: 'Evaluation (Désactivé en Prod)',
    subItems: [
      { label: 'Consulter les notes', href: '/notes' },
      { label: 'Editer des notes', href: '/edit-notes' },
    ],
  },
  {
    label: 'Délibération (Désactivé en Prod)',
    subItems: [
      { label: 'Consulter les deliberations', href: '/deliberations' },
      { label: 'Editer des deliberations', href: '/edit-deliberations' },
    ],
  },
  {
    label: 'Publication (Désactivé en Prod)',
    subItems: [
      { label: 'Consulter les publications', href: '/publications' },
      { label: 'Editer des publications', href: '/edit-publications' },
    ],
  },
  {
    label: 'Fin de session (Désactivé en Prod)',
    subItems: [
      { label: 'Consulter les sessions', href: '/sessions' },
      { label: 'Editer des sessions', href: '/edit-sessions' },
    ],
  },
  {
    label: 'Document',
    subItems: [
      { label: 'Consulter les documents', href: '/documents' },
      { label: 'Editer des documents', href: '/edit-documents' },
    ],
  },
];

export interface Candidate {
  id: number;
  candidate_number: string;
  inscription_number: string;
  lastname: string;
  firstname: string;
  email: string;
  birthdate: string;
  country_of_birth: string;
  city_of_birth: string;
  gender: string;
  nationality: string;
  phone_number: string;
  country: string;
  city: string;
  school_postal_code: string;
  school_code: string;
  class_division: string | null;
  state: string;
  qualification: string;
  created: string;
  position_id: number;
  artistic_teaching_id: number | null;
}

export interface Position {
  id: number;
  name: 'Inscrit' | 'Non inscrit';
}

export interface ArtisticTeaching {
  id: number;
  name:
    | 'Art - Cinéma audiovisuel'
    | 'Art - Histoire des arts'
    | 'Art - Théâtre'
    | 'Art - Arts du cirque'
    | 'Art - Musique'
    | 'Art - Danse'
    | 'Art - Arts plastiques';
}
