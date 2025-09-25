import type React from "react";

interface AdSlotProps {
    code: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ code }) => {
    const setRef = (iframe: HTMLIFrameElement | null) => {
        if (!iframe || !window.pbjs) return;

        window.pbjs.que.push(() => {
            window.pbjs?.requestBids({
                adUnitCodes: [code],
                timeout: 1500,
                bidsBackHandler: () => {
                    const winners = window.pbjs?.getHighestCpmBids(code);
                    if (!winners?.length) return;

                    const bid = winners[0];
                    if (iframe.contentWindow) {
                        window.pbjs?.renderAd(iframe.contentWindow.document, bid.adId);
                        console.log(`[Prebid] Rendered ${code} | Bidder: ${bid.bidderCode}`);
                    }
                },
            });
        });
    };

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
