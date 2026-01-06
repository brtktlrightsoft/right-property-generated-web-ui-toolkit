import type { Config } from '@measured/puck';
import React from 'react';
import { HeaderSectionWrapper } from '@/components/voodvale/HeaderSectionWrapper';
import { GridSectionWrapper } from '@/components/voodvale/GridSectionWrapper';
import { ContentSectionWrapper } from '@/components/voodvale/ContentSectionWrapper';
import { VoodvaleHomeFirstSectionWrapper } from '@/components/voodvale/VoodvaleHomeFirstSectionWrapper';
import { VoodvaleHomeSecondSectionWrapper } from '@/components/voodvale/VoodvaleHomeSecondSectionWrapper';
import { HomePageContentWrapper } from '@/components/default/HomePageContentWrapper';
import { HomeFirstSectionWrapper } from '@/components/default/HomeFirstSectionWrapper';
import { SkyscrapperHomeFirstSectionWrapper } from '@/components/skyscrapper/SkyscrapperHomeFirstSectionWrapper';
import { SkyscrapperHomesSecondSectionWrapper } from '@/components/skyscrapper/SkyscrapperHomesSecondSectionWrapper';
import { VoodvalePlotsShowcaseWrapper } from '@/components/voodvale/VoodvalePlotsShowcaseWrapper';
import { PlotsShowcaseWrapper } from '@/components/default/PlotsShowcaseWrapper';
import { SkyscrapperPlotsShowcaseWrapper } from '@/components/skyscrapper/SkyscrapperPlotsShowcaseWrapper';
import { ColorPickerField } from '@/components/editor/ColorPickerField';
import { PlanViewWrapper } from '@/components/common/PlanViewWrapper';
import type { Components } from '@/types/puck.types';
type Category =
  | 'voodvale'
  | 'default'
  | 'skyscrapper';
export const puckConfig: Config<Components, object, Category>  = {
  categories: {
    voodvale: {
      title: 'Voodvale',
      components: [
        'VoodvaleHeaderSection',
        'VoodvaleGridSection',
        'VoodvaleContentSection',
        'VoodvaleHomeFirstSection',
        'VoodvaleHomeSecondSection',
        'VoodvalePlotsShowcase',
      ],
    },
    default: {
      title: 'Default',
      components: ['HomePageContent', 'HomeFirstSection', 'PlotsShowcase', 'SitePlan'],
    },
    skyscrapper: {
      title: 'Skyscrapper',
      components: ['SkyscrapperHomeFirstSection', 'SkyscrapperHomesSecondSection', 'SkyscrapperPlotsShowcase'],
    },
  },
  components: {
    VoodvaleHeaderSection: {
      fields: {
        title: { type: 'text', label: 'Title', contentEditable: true },
        description: { type: 'textarea', label: 'Description', contentEditable: true },
        animationEase: {
          type: 'select',
          label: 'Animation Ease',
          options: [
            { label: 'Linear', value: 'linear' },
            { label: 'Ease In', value: 'easeIn' },
            { label: 'Ease Out', value: 'easeOut' },
            { label: 'Ease In Out', value: 'easeInOut' },
            { label: 'Circ In', value: 'circIn' },
            { label: 'Circ Out', value: 'circOut' },
            { label: 'Circ In Out', value: 'circInOut' },
            { label: 'Back In', value: 'backIn' },
            { label: 'Back Out', value: 'backOut' },
            { label: 'Back In Out', value: 'backInOut' },
            { label: 'Anticipate', value: 'anticipate' },
          ],
        },
      },
      defaultProps: {
        title: 'Default Title',
        description: 'Default description',
        animationEase: 'easeOut',
      },
      render: HeaderSectionWrapper,
    },
    VoodvaleGridSection: {
      fields: {
        gridData: {
          type: 'array',
          label: 'Grid Items',
          arrayFields: {
            title: { type: 'text', label: 'Title', contentEditable: true },
            increase: { type: 'text', label: 'Increase/Number', contentEditable: true },
            description: { type: 'textarea', label: 'Description', contentEditable: true },
          },
          defaultItemProps: {
            title: 'New Item',
            increase: '0',
            description: 'Description',
          },
        },
      },
      defaultProps: {
        gridData: [],
      },
      render: GridSectionWrapper,
    },
    VoodvaleContentSection: {
      fields: {
        sectionTitle: {
          type: 'textarea',
          label: 'Section Title (use \\n for line breaks)',
          contentEditable: true,
        },
        sectionDescription: {
          type: 'textarea',
          label: 'Section Description (use \\n for line breaks)',
          contentEditable: true,
        },
        contentImage1: { type: 'text', label: 'Content Image 1 URL' },
        contentImage2: { type: 'text', label: 'Content Image 2 URL' },
        contentImage3: { type: 'text', label: 'Content Image 3 URL' },
      },
      defaultProps: {
        sectionTitle: 'Section Title',
        sectionDescription: 'Section description',
        contentImage1: '',
        contentImage2: '',
        contentImage3: '',
      },
      render: ContentSectionWrapper,
    },
    VoodvaleHomeSecondSection: {
      fields: {
        title: { type: 'text', label: 'Title', contentEditable: true },
        description: { type: 'textarea', label: 'Description', contentEditable: true },
        gridData: {
          type: 'array',
          label: 'Grid Items',
          arrayFields: {
            title: { type: 'text', label: 'Title', contentEditable: true },
            increase: { type: 'text', label: 'Increase/Number', contentEditable: true },
            description: { type: 'textarea', label: 'Description', contentEditable: true },
          },
          defaultItemProps: {
            title: 'New Item',
            increase: '0',
            description: 'Description',
          },
        },
        sectionTitle: {
          type: 'textarea',
          label: 'Section Title (use \\n for line breaks)',
          contentEditable: true,
        },
        sectionDescription: {
          type: 'textarea',
          label: 'Section Description (use \\n for line breaks)',
          contentEditable: true,
        },
        contentImage1: { type: 'text', label: 'Content Image 1 URL' },
        contentImage2: { type: 'text', label: 'Content Image 2 URL' },
        contentImage3: { type: 'text', label: 'Content Image 3 URL' },
      },
      defaultProps: {
        title: 'A Neighbourhood That Feels Like Home',
        description:
          'Woodvale Quarters brings together the charm of classic British architecture and the convenience of modern living. Surrounded by landscaped gardens and walkable streets, the development celebrates thoughtful design and quality finishes that make every home feel exceptional.',
        gridData: [
          {
            title: 'Dream Homes Realised',
            increase: '50+',
            description: "Families who've found their perfect home in communities like Woodvale Quarters.",
          },
          {
            title: 'Trusted by Homeowners',
            increase: '100%',
            description: 'Built on lasting trust and attention to detail in every development.',
          },
          {
            title: 'Pride in Every Home',
            increase: '100%',
            description: 'Resident satisfaction through quality, care, and commitment.',
          },
          {
            title: 'Built on Experience',
            increase: '15+',
            description: 'Years of expertise shaping elegant, well-crafted homes.',
          },
        ],
        sectionTitle: 'Find Your Dream\nHome Here',
        sectionDescription:
          'Experience the charm and comfort of life at Woodvale Quarters.\n\nBrowse our gallery to explore the architecture, surroundings, and amenities that make this community a beautiful place to call home.',
        contentImage1: '',
        contentImage2: '',
        contentImage3: '',
      },
      render: VoodvaleHomeSecondSectionWrapper,
    },
    VoodvaleHomeFirstSection: {
      fields: {
        projectName: { type: 'text', label: 'Project Name', contentEditable: true },
        heading: { type: 'textarea', label: 'Heading', contentEditable: true },
        subheading: { type: 'textarea', label: 'Subheading', contentEditable: true },
        buttonLabel: { type: 'text', label: 'Button Label', contentEditable: true },
        buttonHref: { type: 'text', label: 'Button Href' },
        backgroundUrl: { type: 'text', label: 'Background Media URL' },
        mediaType: {
          type: 'select',
          label: 'Background Type',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
          ],
        },
        scrollIndicatorText: { type: 'text', label: 'Scroll Text', contentEditable: true },
      },
      defaultProps: {
        projectName: 'Voodvale',
        heading: 'A New Benchmark of Refined Living.',
        subheading:
          'Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.',
        buttonLabel: 'Explore Listing',
        buttonHref: '/availability',
        backgroundUrl: '',
        mediaType: 'image',
        scrollIndicatorText: 'Scroll down',
      },
      render: VoodvaleHomeFirstSectionWrapper,
    },
    HomePageContent: {
      fields: {
        title: { type: 'text', label: 'Title', contentEditable: true },
        titleColor: {
          type: 'custom',
          label: 'Title Color',
          render: ({ name, label, value, onChange }: { name: string; label: string; value: string | undefined; onChange: (value: string | undefined) => void }) =>
            React.createElement(ColorPickerField, {
              name,
              label,
              value: value as string,
              onChange: (val: string) => onChange(val),
            }),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        subtitle: { type: 'textarea', label: 'Subtitle', contentEditable: true },
        paragraphs: {
          type: 'array',
          label: 'Paragraphs',
          arrayFields: {
            text: { type: 'textarea', label: 'Paragraph', contentEditable: true },
          },
          defaultItemProps: {
            text: '',
          },
        },
        image1: { type: 'text', label: 'Main Image URL' },
        image2: { type: 'text', label: 'Image 2 URL' },
        image3: { type: 'text', label: 'Image 3 URL' },
      },
      defaultProps: {
        title: 'Right Homes',
        titleColor: '#1a1a1a',
        subtitle:
          'Right Homes has been transforming the city for over a century, and our latest project, Right Homes at a charming location, continues this tradition. With 30 houses nestled amidst schools, medical centers, and entertainment hubs, our development offers unparalleled convenience and comfort for modern living.',
        paragraphs: [
          {
            text: 'Discover 30 meticulously crafted homes designed for comfort and style. With schools, medical centers, and entertainment just around the corner, Right Homes at this charming location offers the perfect blend of convenience and tranquility.',
          },
          {
            text: 'At Right Homes, sustainability is at the core of our values. Our prestige project is constructed using eco-friendly materials and practices, ensuring a greener future for generations to come. Experience the beauty of sustainable living at Right Homes, where every detail is designed with the planet in mind.',
          },
          {
            text: 'At Right Homes, we understand the importance of finding your dream home. With our prestige project, we offer discerning homeowners a rare opportunity to indulge in the finest urban living experience. From the elegant aesthetics to the thoughtful amenities, every facet of Right Homes at this charming location has been crafted to exceed expectations. Come, be a part of this extraordinary journey, and make Right Homes your ultimate destination for luxury living.',
          },
        ],
        image1: '',
        image2: '',
        image3: '',
      },
      render: HomePageContentWrapper,
    },
    HomeFirstSection: {
      fields: {
        projectName: { type: 'text', label: 'Project Name', contentEditable: true },
        projectDescription: { type: 'textarea', label: 'Project Description', contentEditable: true },
        backgroundUrl: { type: 'text', label: 'Background Media URL' },
        mediaType: {
          type: 'select',
          label: 'Background Type',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
          ],
        },
        scrollIndicatorText: { type: 'text', label: 'Scroll Text', contentEditable: true },
      },
      defaultProps: {
        projectName: 'Right Property',
        projectDescription:
          'Discover thoughtfully designed homes with seamless connections and serene green spaces.',
        backgroundUrl: '',
        mediaType: 'image',
        scrollIndicatorText: 'Scroll down',
      },
      render: HomeFirstSectionWrapper,
    },
    SkyscrapperHomeFirstSection: {
      fields: {
        projectName: { type: 'text', label: 'Project Name', contentEditable: true },
        heading: { type: 'textarea', label: 'Heading', contentEditable: true },
        subheadingLine1: { type: 'text', label: 'Subheading Line 1', contentEditable: true },
        subheadingLine2: { type: 'text', label: 'Subheading Line 2', contentEditable: true },
        description: { type: 'textarea', label: 'Description', contentEditable: true },
        buttonLabel: { type: 'text', label: 'Button Label', contentEditable: true },
        buttonHref: { type: 'text', label: 'Button Href' },
        backgroundUrl: { type: 'text', label: 'Background Media URL' },
        mediaType: {
          type: 'select',
          label: 'Background Type',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
          ],
        },
        scrollIndicatorText: { type: 'text', label: 'Scroll Text', contentEditable: true },
      },
      defaultProps: {
        projectName: 'Skyscrapper',
        heading: 'A New Peak.',
        subheadingLine1: 'in the City',
        subheadingLine2: 'of Impossibles',
        description:
          'Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.',
        buttonLabel: 'Explore Listing',
        buttonHref: '/availability',
        backgroundUrl: '',
        mediaType: 'image',
        scrollIndicatorText: 'Scroll down',
      },
      render: SkyscrapperHomeFirstSectionWrapper,
    },
    SkyscrapperHomesSecondSection: {
      fields: {
        introText: { type: 'textarea', label: 'Intro Text', contentEditable: true },
        image1: { type: 'text', label: 'Image 1 URL' },
        image2: { type: 'text', label: 'Image 2 URL' },
        image3: { type: 'text', label: 'Image 3 URL' },
        gridTitle: { type: 'text', label: 'Grid Title', contentEditable: true },
        gridLead: { type: 'textarea', label: 'Grid Lead', contentEditable: true },
        gridItems: {
          type: 'array',
          label: 'Grid Items',
          arrayFields: {
            increase: { type: 'text', label: 'Increase', contentEditable: true },
            description: { type: 'textarea', label: 'Description', contentEditable: true },
          },
          defaultItemProps: {
            increase: '0',
            description: '',
          },
        },
      },
      defaultProps: {
        introText:
          'A new icon rises on Dubai’s horizon — a sculpted tower where architecture, luxury, and imagination collide.',
        image1: '',
        image2: '',
        image3: '',
        gridTitle: 'In the Numbers',
        gridLead:
          'Our numbers reflect steady growth, strong engagement, and increasing trust from our\nusers. Here’s a quick look at the key metrics driving our progress.',
        gridItems: [
          {
            increase: '50+',
            description: "Families who've found their perfect home in communities like Woodvale Quarters.",
          },
          {
            increase: '100%',
            description: 'Built on lasting trust and attention to detail in every development.',
          },
          {
            increase: '100%',
            description: 'Resident satisfaction through quality, care, and commitment.',
          },
          {
            increase: '15+',
            description: 'Years of expertise shaping elegant, well-crafted homes.',
          },
        ],
      },
      render: SkyscrapperHomesSecondSectionWrapper,
    },
    VoodvalePlotsShowcase: {
      resolveData: async ({ props }) => {
        const response = await fetch('https://api-test.rightproperty.app/api/v1/web/main?language=en',{
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbi10eXBlIjoiV2ViU2l0ZSIsIm5hbWUiOiJlNWYxNDIyYi1jMTAzLTRjZGItYjJkMy00ZWY4NTVmNGZmNmMiLCJ0b2tlbi10eXBlIjoiT3RoZXIiLCJqdGkiOiJhY2FkNTQzYS04YmI1LTRkMmMtYjA3MC00YjI1Yjg4Y2YyZmMiLCJuYmYiOjE3Njc2MTg3NzQsImV4cCI6MTc3MDIxMDc3NCwiaWF0IjoxNzY3NjE4Nzc0LCJpc3MiOiJSaWdodFNvZnRJc3N1ZXIiLCJhdWQiOiJSaWdodFNvZnRBdWRpZW5jZSJ9.e3lVxA5DgJTQaj3Z-k-hoSw2RroI6_ecC50d0AaNaDI',
          },
        })
        const data = await response.json();
        return {
          props: {
            ...props,
            plots: data.availablePlots,
          },
        };
      },
      render: props => {
        return React.createElement(VoodvalePlotsShowcaseWrapper, props);
      },
    },
    PlotsShowcase: {
      resolveData: async ({ props }) => {
        const response = await fetch('https://api-test.rightproperty.app/api/v1/web/main?language=en',{
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbi10eXBlIjoiV2ViU2l0ZSIsIm5hbWUiOiJlNWYxNDIyYi1jMTAzLTRjZGItYjJkMy00ZWY4NTVmNGZmNmMiLCJ0b2tlbi10eXBlIjoiT3RoZXIiLCJqdGkiOiJhY2FkNTQzYS04YmI1LTRkMmMtYjA3MC00YjI1Yjg4Y2YyZmMiLCJuYmYiOjE3Njc2MTg3NzQsImV4cCI6MTc3MDIxMDc3NCwiaWF0IjoxNzY3NjE4Nzc0LCJpc3MiOiJSaWdodFNvZnRJc3N1ZXIiLCJhdWQiOiJSaWdodFNvZnRBdWRpZW5jZSJ9.e3lVxA5DgJTQaj3Z-k-hoSw2RroI6_ecC50d0AaNaDI',
          },
        })
        const data = await response.json();
        return {
          props: {
            ...props,
            plots: data.availablePlots,
          },
        };
      },
      render: props => {
        return React.createElement(PlotsShowcaseWrapper, props);
      },
    },
    SkyscrapperPlotsShowcase: {
      resolveData: async ({ props }) => {
        const response = await fetch('https://api-test.rightproperty.app/api/v1/web/main?language=en',{
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbi10eXBlIjoiV2ViU2l0ZSIsIm5hbWUiOiJlNWYxNDIyYi1jMTAzLTRjZGItYjJkMy00ZWY4NTVmNGZmNmMiLCJ0b2tlbi10eXBlIjoiT3RoZXIiLCJqdGkiOiJhY2FkNTQzYS04YmI1LTRkMmMtYjA3MC00YjI1Yjg4Y2YyZmMiLCJuYmYiOjE3Njc2MTg3NzQsImV4cCI6MTc3MDIxMDc3NCwiaWF0IjoxNzY3NjE4Nzc0LCJpc3MiOiJSaWdodFNvZnRJc3N1ZXIiLCJhdWQiOiJSaWdodFNvZnRBdWRpZW5jZSJ9.e3lVxA5DgJTQaj3Z-k-hoSw2RroI6_ecC50d0AaNaDI',
          },
        })
        const data = await response.json();
        return {
          props: {
            ...props,
            plots: data.availablePlots,
          },
        };
      },
      render: props => {
        return React.createElement(SkyscrapperPlotsShowcaseWrapper, props);
      },
    },
    SitePlan: {
      resolveData: async ({ props }) => {
        const response = await fetch(`https://api-test.rightproperty.app/api/v1/web/availability/siteplan`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbi10eXBlIjoiV2ViU2l0ZSIsIm5hbWUiOiJlNWYxNDIyYi1jMTAzLTRjZGItYjJkMy00ZWY4NTVmNGZmNmMiLCJ0b2tlbi10eXBlIjoiT3RoZXIiLCJqdGkiOiJhY2FkNTQzYS04YmI1LTRkMmMtYjA3MC00YjI1Yjg4Y2YyZmMiLCJuYmYiOjE3Njc2MTg3NzQsImV4cCI6MTc3MDIxMDc3NCwiaWF0IjoxNzY3NjE4Nzc0LCJpc3MiOiJSaWdodFNvZnRJc3N1ZXIiLCJhdWQiOiJSaWdodFNvZnRBdWRpZW5jZSJ9.e3lVxA5DgJTQaj3Z-k-hoSw2RroI6_ecC50d0AaNaDI',
          },
        });
        const sitePlan = await response.json();
        return {
          props: {
            ...props,
            planId: sitePlan.plan.id,
            objects: sitePlan.plan.objects,
            items: sitePlan.plan.items,
            background: sitePlan.plan.backgroundAsset,
            color: sitePlan.plan.backgroundColor,
          },
        };
      },
      render: props => {
        return React.createElement(PlanViewWrapper, props);
      },
    },
  },
};


