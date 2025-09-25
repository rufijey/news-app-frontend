import type React from "react";

interface AdSlotProps {
    code: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ code }) => {
    const setRef = (iframe: HTMLIFrameElement | null) => {
        if (iframe) {
            window.pbjs?.loadAndRenderAd?.(code, iframe);
        }
    };

    if (!window.pbjs) {
        return null;
    }

    return (
        <iframe
            ref={setRef}
            id={code}
            title={code}
            className="border-0 w-[300px] h-[600px] overflow-hidden"
            scrolling="no"
        />
    );
};

export default AdSlot;
