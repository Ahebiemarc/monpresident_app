import { IOnboardingSlide, IPresident, IPresidentAbout } from "../../interfaces/interfaces";

export const DATA_ONBOARDING: IOnboardingSlide[] = [
  {
    key: "3571572",
    title: "Bienvenue aux élections présidentielles",
    description: "Participez à la démocratie en faisant entendre votre voix",
    image: require('../../../assets/images/slide1.png')
  },
  {
    key: "3571747",
    title: "Exprimez votre avenir en votant",
    description: "Rejoignez d'autres citoyens dans l'exercice de leur droit de vote",
    image: require('../../../assets/images/slide2.png')
  },
  {
    key: "3571680",
    title: "Votre voix est essentielle, utilisez-la",
    description: "Chaque vote compte dans la construction d'une société meilleure",
    image: require('../../../assets/images/slid.png')
  }
];

export const President_DATA: IPresident[] = [

  {
    id: '1',
    firstname: 'Barack',
    lastname: 'Obama',
    birthdate: 'August 4, 1961',
    gender: 'Male',
    email: 'barack@example.com',
    politicalStatus: 'DEMOCRATE',
    brefSpeechAndBio: 'Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and as an Illinois state senator from 1997 to 2004.',
    matchPercent: 64,
    address: "123 Main Street",
    city: "Anytown",
    state: "California",
    image: require('../../../assets/images/Barack_Obama.jpg'),
    coveredImage: require('../../../assets/images/Barack_Obama.jpg'),
    aboutPresident: {
      id: "2",
      education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
    ],
      projects: [
          {
              id: "1",
              title: "Education Reform Project",
              theme: { id: "1", theme: "L'education" },
              description: `Chers concitoyens,
              Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
              
              Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
              
              Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
              
              Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
              
              Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
              
              Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
              
              Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
          },
          {
            id: "2",
            title: "Environmental Protection Project",
            theme: { id: "2", theme: "L'environnement" },
            description: `Chers concitoyens,
  
            Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
            
            Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
            
            En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
            
            Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
            
            Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
            
            Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
            
            Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
            
            Cordialement,
            [Votre nom]`
          }
      ],
    },
    

  },
  {
      id: '2',
      firstname: 'George',
      lastname: 'Washington',
      birthdate: 'February 22, 1732',
      gender: 'Male',
      email: 'george@example.com',
      politicalStatus: 'INDEPENDANT',
      brefSpeechAndBio: 'George Washington was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. He led the Patriot forces to victory in the Revolutionary War and presided at the Constitutional Convention of 1787, which established the U.S. Constitution. Washington has been called the "Father of His Country" for his manifold leadership in the formative days of the new nation.',
      matchPercent: 35,
      address: "456 Elm Street",
      city: "Othertown",
      state: "New York",
      image: require('../../../assets/images/georges_washington.jpg'),
      coveredImage: require('../../../assets/images/georges_washington.jpg'),
      aboutPresident: {
        id: "2",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
    ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
    
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
      },
  },
  {
      id: '3',
      firstname: 'Abraham',
      lastname: 'Lincoln',
      birthdate: 'February 12, 1809',
      gender: 'Male',
      email: 'abraham@example.com',
      politicalStatus: 'REPUBLICAIN',
      brefSpeechAndBio: 'Abraham Lincoln was an American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865. Lincoln led the nation through its Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis. He preserved the Union, abolished slavery, strengthened the federal government, and modernized the U.S. economy.',
      matchPercent: 90,
      address: "789 Oak Street",
      city: "Somewhere",
      state: "Texas",
      image: require('../../../assets/images/abraham_lilcon.jpg'),
      coveredImage: require('../../../assets/images/abraham_lilcon.jpg'),
      aboutPresident: {
        id: "2",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
    ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
    
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
      },

  },
  {
      id: '4',
      firstname: 'Thomas',
      lastname: 'Jefferson',
      birthdate: 'April 13, 1743',
      gender: 'Male',
      email: 'thomas@example.com',
      politicalStatus: 'DEMOCRATE',
      brefSpeechAndBio: 'Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809. He was the principal author of the Declaration of Independence, and he also served as the second vice president and the first secretary of state under President George Washington.',
      matchPercent: 18,
      address: "321 Pine Street",
      city: "Nowhere",
      state: "Florida",
      image: require('../../../assets/images/thomas_jefferson.jpg'),
      coveredImage: require('../../../assets/images/thomas_jefferson.jpg'),
      aboutPresident: {
        id: "2",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
      ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
    
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
      },

  },
  {
      id: '5',
      firstname: 'Theodore',
      lastname: 'Roosevelt',
      birthdate: 'October 27, 1858',
      gender: 'Male',
      email: 'theodore@example.com',
      politicalStatus: 'REPUBLICAIN',
      brefSpeechAndBio: 'Theodore Roosevelt Jr. was an American statesman, politician, conservationist, naturalist, and writer who served as the 26th president of the United States from 1901 to 1909. He previously served as the 25th vice president under William McKinley from March to September 1901 and as the 33rd governor of New York from 1899 to 1900. Roosevelt emerged as a leader of the Republican Party and became a driving force for the Progressive Era in the United States in the early 20th century.',
      matchPercent: 55,
      address: "555 Maple Street",
      city: "Everytown",
      state: "Washington",
      image: require('../../../assets/images/Theodore_Roosevelt.jpg'),
      coveredImage: require('../../../assets/images/Theodore_Roosevelt.jpg'),
      aboutPresident: {
        id: "2",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
    ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
    
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
      },

  },
  {
      id: '6',
      firstname: 'Franklin',
      lastname: 'Roosevelt',
      birthdate: 'January 30, 1882',
      gender: 'Male',
      email: 'franklin@example.com',
      politicalStatus: 'DEMOCRATE',
      brefSpeechAndBio: 'Franklin Delano Roosevelt, often referred to by his initials FDR, was an American politician who served as the 32nd president of the United States from 1933 until his death in 1945. He was a central figure in world events during the mid-20th century, leading the United States during a time of worldwide economic depression and total war. His program for relief, recovery, and reform, known as the New Deal, involved a great expansion of the role of the federal government in the economy.',
      matchPercent: 52,address: "777 Cedar Street",
      city: "Sometown",
      state: "Ohio",
      image: require('../../../assets/images/Franklin_Roosevelt_.jpg'),
      coveredImage: require('../../../assets/images/Franklin_Roosevelt_.jpg'),
      aboutPresident: {
        id: "2",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
      experience: [
        {
            id: "1",
            SocietyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/American_University_.png'),
            yearOfexprience: 12
        },
        {
          id: "2",
          SocietyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/law-.png'),
          yearOfexprience: 16
        }
    ],
    occupation: [
        {
            id: "1",
            occupation: "Politician",
            societyName: "Government",
            date: "2010-2022",
            logo: require('../../../assets/images/law-.png')
        },
        {
          id: "2",
          occupation: "Lawyer",
          societyName: "Law Firm",
          date: "2008-2024",
          logo: require('../../../assets/images/American_University_.png'),
        }
      ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
    
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
      },
      

  },
  {
      id: '7',
      firstname: 'John',
      lastname: 'Kennedy',
      birthdate: 'May 29, 1917',
      gender: 'Male',
      email: 'john@example.com',
      politicalStatus: 'DEMOCRATE',
      brefSpeechAndBio: 'John Fitzgerald Kennedy, often referred to by his initials JFK, was an American politician who served as the 35th president of the United States from January 1961 until his assassination in November 1963. Kennedy served at the height of the Cold War, and the majority of his work as president concerned relations with the Soviet Union and Cuba. A Democrat, Kennedy represented Massachusetts in both houses of the U.S. Congress prior to becoming president.',
      matchPercent: 67,
      address: "999 Walnut Street",
      city: "Overthere",
      state: "Illinois",
      image: require('../../../assets/images/John_F._Kennedy.jpg'),
      coveredImage: require('../../../assets/images/John_F._Kennedy.jpg'),
      aboutPresident: {
        id: "1",
        education: [
          {
              id: "1",
              nameOfschool: "University of Politics",
              city: "Washington D.C.",
              date: "2006-2010",
              logo: require('../../../assets/images/American_University_.png'),
          },
          {
            id: "2",
            nameOfschool: "Law School",
            city: "New York City",
            date: "2003-2007",
            logo: require('../../../assets/images/law-.png')
          }
      ],
        experience: [
            {
                id: "1",
                SocietyName: "Government",
                date: "2010-2022",
                logo: require('../../../assets/images/American_University_.png'),
                yearOfexprience: 12
            },
            {
              id: "2",
              SocietyName: "Law Firm",
              date: "2008-2024",
              logo: require('../../../assets/images/law-.png'),
              yearOfexprience: 16
            }
        ],
        occupation: [
            {
                id: "1",
                occupation: "Politician",
                societyName: "Government",
                date: "2010-2022",
                logo: require('../../../assets/images/law-.png')
            },
            {
              id: "2",
              occupation: "Lawyer",
              societyName: "Law Firm",
              date: "2008-2024",
              logo: require('../../../assets/images/American_University_.png'),
            }
        ],
        projects: [
            {
                id: "1",
                title: "Education Reform Project",
                theme: { id: "1", theme: "L'education" },
                description: `Chers concitoyens,
                Il est temps d'investir massivement dans l'avenir de notre pays en réformant notre système éducatif. En tant que candidat à la présidence, je propose un projet ambitieux de réforme de l'éducation qui vise à garantir à chaque enfant et à chaque jeune l'accès à une éducation de qualité, quelle que soit sa situation économique ou géographique.
                
                Notre projet de réforme de l'éducation repose sur plusieurs piliers fondamentaux. Tout d'abord, nous investirons dans la modernisation des infrastructures scolaires et dans l'augmentation des ressources pédagogiques pour offrir des environnements d'apprentissage stimulants et adaptés aux besoins de chaque élève.
                
                Ensuite, nous mettrons en place des programmes de formation continue pour les enseignants afin de garantir qu'ils disposent des compétences et des outils nécessaires pour accompagner au mieux leurs élèves dans leur parcours éducatif. Nous valoriserons également la profession enseignante en reconnaissant son importance cruciale pour l'avenir de notre société.
                
                Par ailleurs, notre projet inclut des mesures visant à promouvoir l'inclusion et l'égalité des chances dans l'éducation. Nous lutterons contre les inégalités sociales en offrant un soutien accru aux élèves issus de milieux défavorisés et en favorisant la diversité et l'inclusion dans nos écoles.
                
                Enfin, nous encouragerons l'innovation et la créativité dans l'éducation en soutenant les initiatives pédagogiques novatrices et en intégrant les nouvelles technologies dans les salles de classe.
                
                Ensemble, nous pouvons bâtir un avenir meilleur pour notre pays en investissant dans l'éducation de nos enfants. Rejoignez-nous dans cette entreprise collective pour construire une société plus juste, plus prospère et plus éclairée pour tous."
                
                Cette description met en valeur les principaux objectifs et engagements du candidat en matière de réforme de l'éducation, tout en appelant à l'adhésion et à l'engagement des électeurs pour soutenir cette vision.`
            },
            {
              id: "2",
              title: "Environmental Protection Project",
              theme: { id: "2", theme: "L'environnement" },
              description: `Chers concitoyens,
  
              Je me présente devant vous aujourd'hui avec un projet crucial pour l'avenir de notre nation : le projet de protection de l'environnement. En tant que candidat à la présidence, je m'engage fermement à placer la préservation de notre planète au cœur de nos priorités et à prendre des mesures décisives pour protéger notre environnement pour les générations futures.
              
              Notre projet de protection de l'environnement repose sur une vision ambitieuse et holistique. Nous nous engageons à lutter contre le changement climatique en réduisant nos émissions de gaz à effet de serre et en favorisant la transition vers des énergies renouvelables et durables. Nous protégerons nos forêts, nos océans et notre biodiversité en mettant en œuvre des politiques de conservation et de restauration des écosystèmes fragiles.
              
              En parallèle, nous encouragerons les initiatives de développement durable et d'économie circulaire pour réduire notre empreinte écologique et promouvoir une croissance économique respectueuse de l'environnement. Nous investirons dans la recherche et l'innovation pour développer des technologies propres et des solutions écologiques pour relever les défis environnementaux auxquels nous sommes confrontés.
              
              Nous sensibiliserons également la population à l'importance de la protection de l'environnement et encouragerons l'adoption de modes de vie plus durables et écologiques. Nous travaillerons en partenariat avec les entreprises, les organisations de la société civile et les gouvernements locaux pour mobiliser toutes les forces vives de la nation dans cette entreprise collective.
              
              Ensemble, nous pouvons préserver la beauté et la richesse de notre planète pour les générations futures. Rejoignez-nous dans cette lutte essentielle pour assurer un avenir meilleur pour tous, dans un monde plus propre, plus sain et plus durable.
              
              Votre soutien est crucial dans cette bataille pour la protection de notre environnement. Ensemble, nous pouvons faire la différence et construire un avenir plus vert et plus prometteur pour notre nation.
              
              Merci de votre attention et de votre engagement en faveur de la protection de l'environnement.
              
              Cordialement,
              [Votre nom]`
            }
        ],
    },

  },
];

