export interface IconProps {
    className?: string;
    onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
    width?: number|string;
    height? : number|string;
    fill? : string;
    stroke ?: string;
    strokeWidth ?: number;
}