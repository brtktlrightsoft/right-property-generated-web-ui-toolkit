export type ParagraphItem = {
  text: string;
};

export type HomePageContentProps = {
  title: string;
  titleColor?: string;
  subtitle: string;
  paragraphs: ParagraphItem[];
  image1: string;
  image2: string;
  image3: string;
};

export type HomeFirstSectionProps = {
  projectName: string;
  projectDescription: string;
  backgroundData?: {
    isVideo: boolean;
    backgroundUrl: string;
  };
  scrollIndicatorText?: string;
  scrollIndicatorOpacity?: number;
};

export type HomeFirstSectionEditableProps = Omit<HomeFirstSectionProps, 'backgroundData'> & {
  mediaType: 'image' | 'video';
  backgroundUrl: string;
};


