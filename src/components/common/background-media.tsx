interface BackgroundData {
  isVideo: boolean;
  backgroundUrl: string;
}

export default function BackgroundMedia({
  backgroundData,
  projectName,
}: {
  backgroundData: BackgroundData;
  projectName: string;
}) {
  if(!backgroundData || !backgroundData.backgroundUrl){
    return <div className="absolute z-10 top-0 left-0 w-full h-full object-cover bg-gray-700">

    </div>
  }
  if (backgroundData.isVideo) {
    return (
      <video
        src={backgroundData.backgroundUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <img
      loading="eager"
      alt={projectName}
      src={backgroundData.backgroundUrl}
      className="absolute z-10 top-0 left-0 w-full h-full object-cover"
    />
  );
}