const adUnits = [
    {
        code: "ad-frame",
        sizes: [[300, 600]],
        bidder: "adtelligent",
        params: { aid: 350975 },
    },
    {
        code: "ad-frame1",
        sizes: [[300, 600]],
        bidder: "bidmatic",
        params: { source: 886409 },
    },
];

function loadPrebid() {
    return new Promise((resolve, reject) => {
        if (window.pbjs) return resolve();

        const script = document.createElement("script");
        script.src = "/prebid10.10.0.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Prebid.js"));
        document.head.appendChild(script);
    });
}

async function initPrebid() {
    await loadPrebid();

    const pbjs = window.pbjs || {};
    pbjs.que = pbjs.que || [];

    const renderWinningBids = (adUnitCode, expectedType = "banner") => {
        const winners = pbjs.getHighestCpmBids(adUnitCode);

        for (const bid of winners) {
            if (bid.mediaType === expectedType) {
                const iframe = document.getElementById(bid.adUnitCode);
                if (iframe?.contentWindow) {
                    const doc = iframe.contentWindow.document;
                    pbjs.renderAd(doc, bid.adId);
                    console.log(
                        `[Prebid] Rendered ${bid.adUnitCode} | Bidder: ${bid.bidderCode} | CPM: ${bid.cpm}`,
                    );
                }
            }
        }
    };

    const requestBids = () => {
        pbjs.requestBids({
            timeout: 1500,
            bidsBackHandler: () => {
                for (const adUnit of adUnits) {
                    renderWinningBids(adUnit.code, "banner");
                }
            },
        });
    };

    pbjs.loadAndRenderAd = (code, iframe) => {
        pbjs.requestBids({
            adUnitCodes: [code],
            timeout: 1500,
            bidsBackHandler: () => {
                const winners = pbjs.getHighestCpmBids(code);
                if (!winners?.length) return;

                const bid = winners[0];
                if (iframe?.contentWindow) {
                    pbjs.renderAd(iframe.contentWindow.document, bid.adId);
                    console.log(
                        `[Prebid] Rendered ${code} | Bidder: ${bid.bidderCode} | CPM: ${bid.cpm}`,
                    );
                }
            },
        });
    };

    pbjs.que.push(() => {
        pbjs.addAdUnits(
            adUnits.map((adUnit) => ({
                code: adUnit.code,
                mediaTypes: { banner: { sizes: adUnit.sizes } },
                bids: [{ bidder: adUnit.bidder, params: adUnit.params }],
            })),
        );

        requestBids();
    });
}

initPrebid();
