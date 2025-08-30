// Use the image from the public folder, respecting Vite base path
export const PROFILE_IMAGE_BASE64 = `${import.meta.env.BASE_URL}photo.png`;
export const WELCOME_MESSAGES = [
    "Initialisation du système...",
    "Connexion au réseau...",
    "Authentification...",
    "Chargement des données du profil...",
    "Prêt.",
    "",
    "Bienvenue sur le portfolio d'Abdessamad BIYA.",
    "Tapez 'help' pour voir la liste des commandes disponibles.",
];

export const CV_DATA = {
    about: `Fraîchement diplômé d'un Master CCA, je suis passionné par l'analyse financière et le pilotage de la performance. Rigoureux et organisé, je recherche un stage de pré-embauche pour contribuer aux processus budgétaires dans un environnement structuré. Motivé à m'investir sur le long terme au sein d'une équipe dynamique.`,
    contact: {
        email: "abdessamadbiya11@gmail.com",
        phone: "0639557584",
        location: "CASABLANCA",
        linkedin: "https://www.linkedin.com/in/abdessamadbiya",
    },
    skills: {
        "Outils bureautiques": "Pack Office (Excel avancé), Canva",
        "Langages de programmation": "Python, SQL, VBA",
        "Logiciels comptables": "Sage, SAP",
        "Analyse de données": "Pandas, NumPy, Matplotlib, Power BI",
        "Compétences en finance": "Analyse de données financières, contrôle de gestion, comptabilité, audit",
    },
    experience: [
        {
            role: "Stagiaire PFE – FINANCE",
            company: "GROUPE ZALAR FARMS",
            location: "CASABLANCA",
            period: "Fév. 2025 - Juil. 2025",
            tasks: [
                "Analyse du processus TVA de 20 filiales : identification des blocages et risques impactant la trésorerie.",
                "Préparation et contrôle des dossiers de remboursement TVA.",
                "Analyse de l'impact du crédit TVA sur les indicateurs financiers (BFR, coût de financement).",
            ],
        },
        {
            role: "Stagiaire en Cabinet d'Expertise Comptable et d'Audit",
            company: "PROXIMO EXPERTISE",
            location: "MARRAKECH",
            period: "Janv. 2022 - Mai 2022",
            tasks: [
                "Assisté à la préparation et à la déclaration de la TVA.",
                "Saisie comptable (achats, ventes, charges, immobilisations) et gestion du plan tiers.",
                "Traitement d'opérations spécifiques : crédit-bail, dossiers d'importation.",
                "Suivi de trésorerie : paiements, rapprochements bancaires, reporting hebdomadaire.",
            ],
        },
    ],
    education: [
        {
            degree: "Master Comptabilité, Contrôle, Audit",
            institution: "FEG Beni Mellal",
            location: "Béni Mellal",
            period: "Oct. 2023 - Juil. 2025",
        },
        {
            degree: "Licence Pro. en Informatique et Gestion d'Entreprises",
            institution: "FPO OUARZAZATE",
            location: "OURZAZATE",
            period: "Oct. 2021 – Juin. 2022",
        },
        {
            degree: "Deup en Informatique et Gestion d'Entreprises",
            institution: "FPO OUARZAZATE",
            location: "OURZAZATE",
            period: "Oct. 2019 – Juin. 2021",
        },
    ],
    certifications: [
        "Excel Skills for Business Job Simulation - Goldman Sachs",
        "Data Analytics And visualisation Job Simulation - Accenture North America",
        "IT for Business Success - Hp Life",
        "Attestation Formation Comptable Confirmé - Moriox academy",
    ],
    languages: {
        Arabe: "Courant",
        Français: "Courant",
        Anglais: "Intermédiaire",
    },
    interests: [
        "FinTech",
        "Intelligence Artificielle",
        "Data Visualization",
        "Gestion des Risques Financiers",
    ],
};