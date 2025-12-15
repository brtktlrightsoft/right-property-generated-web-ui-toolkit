import type { Data } from '@measured/puck';

export const initialData: Data = {
  content: [
    {
      type: 'VoodvaleHeaderSection',
      props: {
        title: 'A Neighbourhood That Feels Like Home',
        description:
          'Woodvale Quarters brings together the charm of classic British architecture and the convenience of modern living. Surrounded by landscaped gardens and walkable streets, the development celebrates thoughtful design and quality finishes that make every home feel exceptional.',
      },
    },
    {
      type: 'VoodvaleGridSection',
      props: {
        gridData: [
          {
            title: 'Dream Homes Realised',
            increase: '50+',
            description:
              "Families who've found their perfect home in communities like Woodvale Quarters.",
          },
          {
            title: 'Trusted by Homeowners',
            increase: '100%',
            description:
              'Built on lasting trust and attention to detail in every development.',
          },
          {
            title: 'Pride in Every Home',
            increase: '100%',
            description:
              'Resident satisfaction through quality, care, and commitment.',
          },
          {
            title: 'Built on Experience',
            increase: '15+',
            description: 'Years of expertise shaping elegant, well-crafted homes.',
          },
        ],
      },
    },
    {
      type: 'VoodvaleContentSection',
      props: {
        sectionTitle: 'Find Your Dream\nHome Here',
        sectionDescription:
          'Experience the charm and comfort of life at Woodvale Quarters.\n\nBrowse our gallery to explore the architecture, surroundings, and amenities that make this community a beautiful place to call home.',
        contentImage1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=550&h=640&fit=crop',
        contentImage2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=680&h=734&fit=crop',
        contentImage3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=461&h=309&fit=crop',
      },
    },
  ],
  root: { title: 'Voodvale Page' },
};


