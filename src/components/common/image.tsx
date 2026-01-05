import { cn } from "@/lib/utils";

export function Image({ src,fallbackSrc, alt,width,height, className }: { src: string,fallbackSrc?: string, alt: string,width: string | number,height: string | number, className?: string }) {
    if (!src) {
        return <div className={cn(className, " bg-gray-400")} style={{ width: width, height: height }}>
        </div>
    }
    if(fallbackSrc){
        return <img src={fallbackSrc} alt={alt} className={className} />;
    }
    return <img src={src} alt={alt} className={className} />;
}