import { IOnboardingSlide, IPresident } from "../../interfaces/interfaces";

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
    occupation: 'Lawyer, Politician, Author',
    brefSpeechAndBio: 'Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and as an Illinois state senator from 1997 to 2004.',
    matchPercent: 54,
    image: require('../../../assets/images/Barack_Obama.jpg'),
    coveredImage: require('../../../assets/images/Barack_Obama.jpg'),

  },
  {
      id: '2',
      firstname: 'George',
      lastname: 'Washington',
      birthdate: 'February 22, 1732',
      gender: 'Male',
      email: 'george@example.com',
      politicalStatus: 'INDEPENDANT',
      occupation: 'Military General, Farmer',
      brefSpeechAndBio: 'George Washington was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. He led the Patriot forces to victory in the Revolutionary War and presided at the Constitutional Convention of 1787, which established the U.S. Constitution. Washington has been called the "Father of His Country" for his manifold leadership in the formative days of the new nation.',
      matchPercent: 35,
      image: require('../../../assets/images/georges_washington.jpg'),
      coveredImage: require('../../../assets/images/georges_washington.jpg'),
  },
  {
      id: '3',
      firstname: 'Abraham',
      lastname: 'Lincoln',
      birthdate: 'February 12, 1809',
      gender: 'Male',
      email: 'abraham@example.com',
      politicalStatus: 'REPUBLICAIN',
      occupation: 'Lawyer, Politician',
      brefSpeechAndBio: 'Abraham Lincoln was an American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865. Lincoln led the nation through its Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis. He preserved the Union, abolished slavery, strengthened the federal government, and modernized the U.S. economy.',
      matchPercent: 90,
      image: require('../../../assets/images/abraham_lilcon.jpg'),
      coveredImage: require('../../../assets/images/abraham_lilcon.jpg'),

  },
  {
      id: '4',
      firstname: 'Thomas',
      lastname: 'Jefferson',
      birthdate: 'April 13, 1743',
      gender: 'Male',
      email: 'thomas@example.com',
      politicalStatus: 'DEMOCRATE',
      occupation: 'Lawyer, Politician, Plantation Owner',
      brefSpeechAndBio: 'Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809. He was the principal author of the Declaration of Independence, and he also served as the second vice president and the first secretary of state under President George Washington.',
      matchPercent: 18,
      image: require('../../../assets/images/thomas_jefferson.jpg'),
      coveredImage: require('../../../assets/images/thomas_jefferson.jpg'),

  },
  {
      id: '5',
      firstname: 'Theodore',
      lastname: 'Roosevelt',
      birthdate: 'October 27, 1858',
      gender: 'Male',
      email: 'theodore@example.com',
      politicalStatus: 'REPUBLICAIN',
      occupation: 'Author, Explorer, Soldier, Politician',
      brefSpeechAndBio: 'Theodore Roosevelt Jr. was an American statesman, politician, conservationist, naturalist, and writer who served as the 26th president of the United States from 1901 to 1909. He previously served as the 25th vice president under William McKinley from March to September 1901 and as the 33rd governor of New York from 1899 to 1900. Roosevelt emerged as a leader of the Republican Party and became a driving force for the Progressive Era in the United States in the early 20th century.',
      matchPercent: 55,
      image: require('../../../assets/images/Theodore_Roosevelt.jpg'),
      coveredImage: require('../../../assets/images/Theodore_Roosevelt.jpg'),

  },
  {
      id: '6',
      firstname: 'Franklin',
      lastname: 'Roosevelt',
      birthdate: 'January 30, 1882',
      gender: 'Male',
      email: 'franklin@example.com',
      politicalStatus: 'DEMOCRATE',
      occupation: 'Lawyer, Politician',
      brefSpeechAndBio: 'Franklin Delano Roosevelt, often referred to by his initials FDR, was an American politician who served as the 32nd president of the United States from 1933 until his death in 1945. He was a central figure in world events during the mid-20th century, leading the United States during a time of worldwide economic depression and total war. His program for relief, recovery, and reform, known as the New Deal, involved a great expansion of the role of the federal government in the economy.',
      matchPercent: 52,
      image: require('../../../assets/images/Franklin_Roosevelt_.jpg'),
      coveredImage: require('../../../assets/images/Franklin_Roosevelt_.jpg'),

  },
  {
      id: '7',
      firstname: 'John',
      lastname: 'Kennedy',
      birthdate: 'May 29, 1917',
      gender: 'Male',
      email: 'john@example.com',
      politicalStatus: 'DEMOCRATE',
      occupation: 'Politician, Author',
      brefSpeechAndBio: 'John Fitzgerald Kennedy, often referred to by his initials JFK, was an American politician who served as the 35th president of the United States from January 1961 until his assassination in November 1963. Kennedy served at the height of the Cold War, and the majority of his work as president concerned relations with the Soviet Union and Cuba. A Democrat, Kennedy represented Massachusetts in both houses of the U.S. Congress prior to becoming president.',
      matchPercent: 67,
      image: require('../../../assets/images/John_F._Kennedy.jpg'),
      coveredImage: require('../../../assets/images/John_F._Kennedy.jpg'),

  },
];

