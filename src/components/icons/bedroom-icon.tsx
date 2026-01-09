import type { IconProps } from "@/domain/icon-props";

export default function BedroomIcon({ width = "1.5625rem",className }: IconProps) {
    return <svg style={{ width }} className={className} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.8734 16.0297V9.55908C22.8734 8.45451 21.978 7.55908 20.8734 7.55908H11.2379C10.5692 7.55908 9.94472 7.89328 9.57379 8.44968L8.75576 9.67673L8.68311 9.5501" stroke='currentColor' strokeWidth="2" />
        <path d="M1.69678 3.32397V16.0299M1.69678 23.0887V16.0299M1.69678 19.5593H22.8732M22.8732 23.0887V14.9122C22.8732 14.3599 22.4255 13.9122 21.8732 13.9122H5.88549C4.55941 13.9122 3.28764 14.439 2.34996 15.3767L1.69678 16.0299" stroke='currentColor' strokeWidth="2" strokeLinecap="round" />
        <circle cx="5.93224" cy="10.3827" r="2.52941" stroke='currentColor' strokeWidth="2" />
    </svg>
}