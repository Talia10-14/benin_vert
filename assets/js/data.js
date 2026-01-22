export const data = {
    nurseries: [
        {
            id: 1,
            name: "Fleurs de Calavi",
            manager: "Jean-Baptiste Koffi",
            neighborhood: "Zogbadjè",
            specialty: "Fleurs et plantes décoratives",
            phone: "+229 97 12 34 56",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
            isLabelVert: true
        },
        {
            id: 2,
            name: "Jardin d'Éden",
            manager: "Aline Dossou",
            neighborhood: "Arconville",
            specialty: "Arbres fruitiers exotiques",
            phone: "+229 97 23 45 67",
            image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
            isLabelVert: true
        },
        {
            id: 3,
            name: "La Main Verte",
            manager: "Pierre Hounkponou",
            neighborhood: "Akassato",
            specialty: "Plantes ornementales et fruitières",
            phone: "+229 97 34 56 78",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
            isLabelVert: false
        },
        {
            id: 4,
            name: "Pépinière du Bonheur",
            manager: "Clarisse Agbo",
            neighborhood: "Togba",
            specialty: "Plantes médicinales et aromates",
            phone: "+229 97 45 67 89",
            image: "https://images.unsplash.com/photo-1598512214470-36b13977dc05?w=600&h=400&fit=crop",
            isLabelVert: true
        },
        {
            id: 5,
            name: "Vert Paradis",
            manager: "Marc Zinsou",
            neighborhood: "Zogbadjè",
            specialty: "Aménagement paysager",
            phone: "+229 97 56 78 90",
            image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
            isLabelVert: false
        }
    ],
    plants: [
        {
            id: 1,
            commonName: "Aloe Vera",
            scientificName: "Aloe barbadensis miller",
            type: "Médicinal",
            conditions: { light: "Soleil", water: "Peu d'eau", soil: "Drainé" },
            image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&h=600&fit=crop",
            description: "Plante succulente aux multiples vertus médicinales, idéale pour les débutants.",
            care: {
                watering: "Arroser modérément tous les 15-20 jours. Laisser sécher complètement entre deux arrosages.",
                fertilizing: "Engrais liquide dilué une fois par mois en période de croissance (mars-septembre).",
                pruning: "Retirer les feuilles mortes ou abîmées à la base. Couper les rejets pour la multiplication.",
                temperature: "18-25°C optimal. Supporte jusqu'à 5°C minimum.",
                repotting: "Tous les 2-3 ans au printemps dans un pot légèrement plus grand."
            },
            benefits: ["Cicatrisant naturel", "Hydratant pour la peau", "Purifie l'air", "Soulage les brûlures"],
            pests: ["Cochenilles", "Pourriture des racines (excès d'eau)"],
            difficulty: "Facile"
        },
        {
            id: 2,
            commonName: "Basilic Africain",
            scientificName: "Ocimum gratissimum",
            type: "Aromatique",
            conditions: { light: "Soleil/Mi-ombre", water: "Régulier", soil: "Riche" },
            image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=600&h=600&fit=crop",
            description: "Herbe aromatique tropicale aux propriétés médicinales, utilisée en cuisine et médecine traditionnelle.",
            care: {
                watering: "Arroser régulièrement pour maintenir le sol humide mais pas détrempé. 2-3 fois par semaine.",
                fertilizing: "Compost organique tous les mois. Éviter l'excès d'azote qui réduit l'arôme.",
                pruning: "Pincer régulièrement les extrémités pour favoriser la ramification. Retirer les fleurs.",
                temperature: "20-30°C optimal. Sensible au froid (minimum 15°C).",
                repotting: "Renouveler tous les 6 mois ou cultiver en annuelle."
            },
            benefits: ["Propriétés antibactériennes", "Répulsif naturel contre les moustiques", "Aide digestive", "Aromatise les plats"],
            pests: ["Pucerons", "Limaces", "Mildiou"],
            difficulty: "Facile"
        },
        {
            id: 3,
            commonName: "Bougainvillier",
            scientificName: "Bougainvillea",
            type: "Ornemental",
            conditions: { light: "Plein soleil", water: "Modéré", soil: "Ordinaire" },
            image: "https://images.unsplash.com/photo-1562599236-4c4897c88210?w=600&h=600&fit=crop",
            description: "Plante grimpante spectaculaire aux bractées colorées, parfaite pour les pergolas et clôtures.",
            care: {
                watering: "Arroser modérément. Laisser sécher entre deux arrosages. Réduire en hiver.",
                fertilizing: "Engrais riche en potassium toutes les 2 semaines pendant la floraison.",
                pruning: "Tailler après la floraison pour contrôler la forme. Supporte une taille sévère.",
                temperature: "15-30°C. Protéger du froid (minimum 5°C).",
                repotting: "Tous les 2-3 ans. Préfère être à l'étroit pour mieux fleurir."
            },
            benefits: ["Floraison spectaculaire", "Brise-vue naturel", "Attire les papillons", "Résistant à la sécheresse"],
            pests: ["Pucerons", "Cochenilles", "Araignées rouges"],
            difficulty: "Moyen"
        },
        {
            id: 4,
            commonName: "Citronnelle",
            scientificName: "Cymbopogon citratus",
            type: "Médicinal",
            conditions: { light: "Soleil", water: "Abondant", soil: "Frais" },
            image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&h=600&fit=crop",
            description: "Graminée tropicale au parfum citronné, utilisée en cuisine et comme répulsif naturel.",
            care: {
                watering: "Arroser abondamment 3-4 fois par semaine. Maintenir le sol constamment humide.",
                fertilizing: "Compost riche en azote tous les mois pour favoriser la croissance des feuilles.",
                pruning: "Couper les feuilles extérieures au ras du sol. Diviser les touffes tous les 2 ans.",
                temperature: "20-35°C optimal. Sensible au froid (minimum 10°C).",
                repotting: "Diviser et replanter au printemps si cultivée en pot."
            },
            benefits: ["Répulsif anti-moustiques", "Infusion digestive", "Propriétés antibactériennes", "Aromatise les plats asiatiques"],
            pests: ["Rouille (champignon)", "Pucerons"],
            difficulty: "Facile"
        },
        {
            id: 5,
            commonName: "Manguier",
            scientificName: "Mangifera indica",
            type: "Fruitier",
            conditions: { light: "Soleil", water: "Régulier", soil: "Profond" },
            image: "https://images.unsplash.com/photo-1601493700631-2b16ec4f4716?w=600&h=600&fit=crop",
            description: "Arbre fruitier tropical produisant des mangues juteuses et sucrées.",
            care: {
                watering: "Arroser régulièrement les jeunes plants. Adultes : arroser en saison sèche uniquement.",
                fertilizing: "Engrais NPK équilibré 3 fois par an (début, milieu et fin de saison des pluies).",
                pruning: "Tailler pour former la structure les 3 premières années. Ensuite, élagage d'entretien.",
                temperature: "24-30°C optimal. Sensible au gel.",
                repotting: "Planter en pleine terre. Espacement minimum 8-10m."
            },
            benefits: ["Fruits nutritifs riches en vitamines", "Ombre généreuse", "Bois utilisable", "Fleurs mellifères"],
            pests: ["Mouches des fruits", "Anthracnose", "Cochenilles"],
            difficulty: "Moyen"
        },
        {
            id: 6,
            commonName: "Hibiscus",
            scientificName: "Hibiscus rosa-sinensis",
            type: "Ornemental",
            conditions: { light: "Soleil", water: "Régulier", soil: "Riche" },
            image: "https://images.unsplash.com/photo-1559869686-224497ee358f?w=600&h=600&fit=crop",
            description: "Arbuste tropical aux fleurs spectaculaires, symbole des régions tropicales.",
            care: {
                watering: "Arroser régulièrement pour maintenir le sol humide. Quotidien en saison chaude.",
                fertilizing: "Engrais riche en potassium toutes les 2 semaines pendant la floraison.",
                pruning: "Tailler légèrement après la floraison. Rabattre d'1/3 en fin d'hiver.",
                temperature: "18-30°C. Protéger du froid (minimum 10°C).",
                repotting: "Tous les 2 ans au printemps dans un substrat riche."
            },
            benefits: ["Floraison abondante", "Attire les colibris", "Haie décorative", "Fleurs comestibles (infusion)"],
            pests: ["Pucerons", "Aleurodes", "Cochenilles"],
            difficulty: "Facile"
        },
        {
            id: 7,
            commonName: "Menthe",
            scientificName: "Mentha",
            type: "Aromatique",
            conditions: { light: "Mi-ombre", water: "Abondant", soil: "Humide" },
            image: "https://images.unsplash.com/photo-1628556270448-9d4bc94a581f?w=600&h=600&fit=crop",
            description: "Plante aromatique vivace à croissance rapide, idéale pour les infusions et la cuisine.",
            care: {
                watering: "Arroser abondamment pour maintenir le sol constamment humide. Quotidien en été.",
                fertilizing: "Compost organique au printemps. Éviter l'excès d'engrais.",
                pruning: "Couper régulièrement pour stimuler la croissance. Rabattre avant l'hiver.",
                temperature: "15-25°C optimal. Rustique (supporte -15°C).",
                repotting: "Diviser les touffes tous les 2-3 ans pour rajeunir."
            },
            benefits: ["Infusions digestives", "Répulsif naturel", "Aromatise desserts et boissons", "Propriétés rafraîchissantes"],
            pests: ["Rouille", "Pucerons", "Limaces"],
            difficulty: "Très facile"
        },
        {
            id: 8,
            commonName: "Papayer",
            scientificName: "Carica papaya",
            type: "Fruitier",
            conditions: { light: "Soleil", water: "Régulier", soil: "Drainé" },
            image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&h=600&fit=crop",
            description: "Arbre fruitier à croissance rapide produisant des papayes riches en enzymes digestives.",
            care: {
                watering: "Arroser régulièrement 2-3 fois par semaine. Éviter l'eau stagnante.",
                fertilizing: "Engrais organique riche en azote tous les mois. Compost au pied.",
                pruning: "Pas de taille nécessaire. Retirer les feuilles mortes uniquement.",
                temperature: "21-33°C optimal. Sensible au froid (minimum 15°C).",
                repotting: "Planter en pleine terre. Fructification dès 6-12 mois."
            },
            benefits: ["Fruits riches en papaïne", "Croissance rapide", "Feuilles médicinales", "Production abondante"],
            pests: ["Mouches des fruits", "Oïdium", "Virus de la mosaïque"],
            difficulty: "Facile"
        },
        {
            id: 9,
            commonName: "Sansevieria",
            scientificName: "Sansevieria trifasciata",
            type: "Ornemental",
            conditions: { light: "Ombre/Soleil", water: "Rare", soil: "Sec" },
            image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?w=600&h=600&fit=crop",
            description: "Plante d'intérieur increvable, excellente pour purifier l'air, idéale pour débutants.",
            care: {
                watering: "Arroser très modérément tous les 15-20 jours. Moins en hiver (1 fois/mois).",
                fertilizing: "Engrais cactées dilué 1 fois au printemps et 1 fois en été.",
                pruning: "Retirer les feuilles abîmées à la base. Pas de taille nécessaire.",
                temperature: "15-30°C. Supporte bien les variations.",
                repotting: "Tous les 3-5 ans seulement. Préfère être à l'étroit."
            },
            benefits: ["Purifie l'air (formaldéhyde, benzène)", "Produit de l'oxygène la nuit", "Très résistante", "Nécessite peu d'entretien"],
            pests: ["Cochenilles (rare)", "Pourriture (excès d'eau)"],
            difficulty: "Très facile"
        },
        {
            id: 10,
            commonName: "Moringa",
            scientificName: "Moringa oleifera",
            type: "Médicinal",
            conditions: { light: "Soleil", water: "Modéré", soil: "Pauvre" },
            image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop",
            description: "Arbre miracle aux feuilles ultra-nutritives, toutes les parties sont comestibles et médicinales.",
            care: {
                watering: "Arroser modérément 1-2 fois par semaine. Très résistant à la sécheresse.",
                fertilizing: "Peu exigeant. Compost organique 2 fois par an suffit.",
                pruning: "Tailler régulièrement pour favoriser la ramification et la récolte de feuilles.",
                temperature: "25-35°C optimal. Sensible au gel.",
                repotting: "Planter en pleine terre. Croissance très rapide (3-4m/an)."
            },
            benefits: ["Feuilles super-nutritives", "Graines purificatrices d'eau", "Propriétés anti-inflammatoires", "Toutes parties comestibles"],
            pests: ["Chenilles", "Termites (tronc)"],
            difficulty: "Facile"
        }
    ],
    gardeners: [
        {
            id: 1,
            name: "Michel Soton",
            neighborhood: "Akassato",
            phone: "+229 96 00 11 22",
            specialty: "Jardins potagers et permaculture",
            experience: "12 ans",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            name: "Sabine Togni",
            neighborhood: "Togba",
            phone: "+229 96 22 33 44",
            specialty: "Aménagement paysager",
            experience: "8 ans",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
        },
        {
            id: 3,
            name: "Eric Mensah",
            neighborhood: "Zogbadjè",
            phone: "+229 96 44 55 66",
            specialty: "Entretien d'espaces verts",
            experience: "15 ans",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
        },
        {
            id: 4,
            name: "Fatima Koudjo",
            neighborhood: "Arconville",
            phone: "+229 96 55 66 77",
            specialty: "Jardins thérapeutiques",
            experience: "6 ans",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
        },
        {
            id: 5,
            name: "Kofi Adande",
            neighborhood: "Akassato",
            phone: "+229 96 66 77 88",
            specialty: "Arboriculture fruitière",
            experience: "20 ans",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
        }
    ],
    materials: [
        {
            id: 1,
            name: "Terreau Universel Bio",
            category: "Terre et Substrats",
            price: "2500 FCFA",
            unit: "sac de 20L",
            supplier: "Agro-Bénin",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
        },
        {
            id: 2,
            name: "Arrosoir 10L",
            category: "Outils",
            price: "3500 FCFA",
            unit: "pièce",
            supplier: "Jardin Plus",
            image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            name: "Pots en Terre Cuite",
            category: "Contenants",
            price: "1500 FCFA",
            unit: "pièce (Ø 25cm)",
            supplier: "Poterie Locale",
            image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=400&fit=crop"
        },
        {
            id: 4,
            name: "Engrais Organique",
            category: "Fertilisants",
            price: "4000 FCFA",
            unit: "sac de 5kg",
            supplier: "Bio-Calavi",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
        },
        {
            id: 5,
            name: "Sécateur Professionnel",
            category: "Outils",
            price: "6500 FCFA",
            unit: "pièce",
            supplier: "Jardin Plus",
            image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=400&fit=crop"
        },
        {
            id: 6,
            name: "Compost Maison",
            category: "Fertilisants",
            price: "1800 FCFA",
            unit: "sac de 10L",
            supplier: "Eco-Jardin",
            image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=400&fit=crop"
        }
    ]
};
