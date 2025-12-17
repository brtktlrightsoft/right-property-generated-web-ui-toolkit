import { cn } from "@/lib/utils";

export function Image({ src, alt,width,height, className }: { src: string, alt: string,width: string | number,height: string | number, className?: string }) {
    if (!src) {
        return <div className={cn(className, " bg-gray-400")} style={{ width: width, height: height }}>
        </div>
    }
    return <img src={src} alt={alt} className={className} />;
}