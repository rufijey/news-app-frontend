import { useEffect, useRef, useState } from "react";

interface PbjsBid {
    adUnitCode?: string;
    bidderCode?: string;
    cpm?: number;
    width?: number;
    height?: number;
}

interface PrebidEvent {
    event: string;
    adUnitCode?: string;
    bidderCode?: string;
    info?: string;
    id: string;
}

interface PbjsWindow {
    pbjs: {
        que: Array<() => void>;
        onEvent: (eventName: string, callback: (bid: PbjsBid) => void) => void;
    };
}

declare global {
    interface Window extends PbjsWindow {}
}

export default function PrebidLogs() {
    const [logs, setLogs] = useState<PrebidEvent[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const handlersRegistered = useRef(false);

    useEffect(() => {
        if (!window.pbjs || handlersRegistered.current) return;
        handlersRegistered.current = true;

        const pbjs = window.pbjs;
        if (!pbjs.que) pbjs.que = [];

        const addLog = (log: Omit<PrebidEvent, "id">) => {
            setLogs((prev) => {
                const exists = prev.find(
                    (l) =>
                        l.event === log.event &&
                        l.adUnitCode === log.adUnitCode &&
                        l.bidderCode === log.bidderCode &&
                        l.info === log.info,
                );
                if (exists) return prev;
                return [...prev, { ...log, id: Date.now() + Math.random().toString() }];
            });
        };

        pbjs.que.push(() => {
            const events = [
                "auctionInit",
                "bidRequested",
                "bidResponse",
                "bidWon",
                "auctionEnd",
                "noBid",
            ];

            for (const eventName of events) {
                pbjs.onEvent(eventName, (data: PbjsBid) => {
                    let info: string | undefined;
                    if (eventName === "bidResponse" || eventName === "bidWon") {
                        info = `CPM: ${data.cpm} | Size: ${data.width}x${data.height}`;
                    }
                    if (eventName === "noBid") info = "No bid received";

                    addLog({
                        event: eventName,
                        adUnitCode: data.adUnitCode,
                        bidderCode: data.bidderCode,
                        info,
                    });
                });
            }
        });
    }, []);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-xl font-bold mb-4">Prebid Auction Logs</h1>
            <div
                ref={containerRef}
                className="bg-white p-4 rounded shadow h-[70vh] overflow-auto font-mono text-sm"
            >
                {logs.length === 0 && <p>Logs will appear here...</p>}
                {logs.map((log) => (
                    <p key={log.id} className="mb-1">
                        <strong>{log.event}</strong>
                        {log.adUnitCode ? ` | AdUnit: ${log.adUnitCode}` : ""}
                        {log.bidderCode ? ` | Bidder: ${log.bidderCode}` : ""}
                        {log.info ? ` | ${log.info}` : ""}
                    </p>
                ))}
            </div>
        </div>
    );
}
