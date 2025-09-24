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

    const pbjs = window.pbjs;
    if (!pbjs.que) pbjs.que = [];

    const renderWinningBids = () => {
        const winners = pbjs.getHighestCpmBids();
        for (const bid of winners) {
            const iframe = document.getElementById(bid.adUnitCode);
            if (iframe?.contentWindow) {
                const doc = iframe.contentWindow.document;
                pbjs.renderAd(doc, bid.adId);
                console.log(
                    `[Prebid] Rendered ${bid.adUnitCode} | Bidder: ${bid.bidderCode} | CPM: ${bid.cpm}`,
                );
            }
        }
    };

    const requestBids = () => {
        pbjs.requestBids({
            timeout: 1000,
            bidsBackHandler: () => renderWinningBids(),
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

        setInterval(() => {
            requestBids();
        }, 30000);
    });
}

initPrebid();

// У нас не срабатывал рендеринг рекламы на события BidWon,
// потому что к моменту события iframe ещё не был создан
