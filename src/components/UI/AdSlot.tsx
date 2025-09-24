import type React from "react";
import { useRef } from "react";
import "virtual:plugins";

interface AdSlotProps {
    code: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ code }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    return (
        <iframe
            ref={iframeRef}
            id={code}
            title={code}
            className="border-0 w-[300px] h-[600px] overflow-hidden"
            scrolling="no"
        />
    );
};

export default AdSlot;
