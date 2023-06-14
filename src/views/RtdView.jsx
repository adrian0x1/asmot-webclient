import MeasurementDisplay from "../components/MeasurementDisplay";
import { useState, useEffect } from "react";

export default function RtdView()
{
    const [data, setData] = useState({});

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            async function fetchData()
            {
                const [usage, freq, loadavg, mem, disk, net] = [
                    await fetch("/cpupercent"),
                    await fetch("/cpufreq"),
                    await fetch("/cpuloadavg"),
                    await fetch("/mu"),
                    await fetch("/diskioc"),
                    await fetch("/netioc"),
                ];

                const [usageData, freqData, loadavgData, memData, diskData, netData] = [
                    await usage.json(),
                    await freq.json(),
                    await loadavg.json(),
                    await mem.json(),
                    await disk.json(),
                    await net.json()
                ];

                setData({
                    usage: usageData.cpuPercent,
                    frequency: (parseFloat(freqData.current) / 1000.0).toFixed(2).toString(),
                    load1: loadavgData.one,
                    load5: loadavgData.five,
                    load15: loadavgData.fifteen,
                    memUsed: (parseFloat(memData.vmem.used) / 10 ** 9).toFixed(2).toString(),
                    memTotal: (parseFloat(memData.vmem.total) / 10 ** 9).toFixed(2).toString(),
                    swapUsed: (parseFloat(memData.swap.used) / 10 ** 9).toFixed(2).toString(),
                    swapTotal: (parseFloat(memData.swap.total) / 10 ** 9).toFixed(2).toString(),
                    diskRead: isNaN(window.localStorage.getItem("rb")) ? "0" : (((parseInt(diskData.readBytes) - parseInt(window.localStorage.getItem("rb"))) / (10 ** 6) / 2)).toFixed(2),
                    diskWrote: isNaN(window.localStorage.getItem("wb")) ? "0" : (((parseInt(diskData.writeBytes) - parseInt(window.localStorage.getItem("wb"))) / (10 ** 6) / 2)).toFixed(2),
                    netUp: isNaN(window.localStorage.getItem("bs")) ? "0" : (((parseInt(netData.bytesSent) - parseInt(window.localStorage.getItem("bs"))) / (10 ** 6)) / 2).toFixed(2),
                    netDown: isNaN(window.localStorage.getItem("br")) ? "0" : (((parseInt(netData.bytesRecv) - parseInt(window.localStorage.getItem("br"))) / (10 ** 6)) / 2).toFixed(2)
                });

                // The previous data is stored in local storage so the values can be calculated
                window.localStorage.setItem("rb", diskData.readBytes);
                window.localStorage.setItem("wb", diskData.writeBytes);
                window.localStorage.setItem("br", netData.bytesRecv);
                window.localStorage.setItem("bs", netData.bytesSent);
            }

            fetchData();
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="cpu-data">
                <p className="title">CPU</p>
                <div className="usage-and-frequency">
                    <MeasurementDisplay description="usage" value={data.usage} metric="%" />
                    <MeasurementDisplay description="frequency" value={data.frequency} metric="GHz" />
                </div>
                <div className="loadaverage">
                    <MeasurementDisplay description="L1" value={data.load1} metric="%" />
                    <MeasurementDisplay description="L5" value={data.load5} metric="%" />
                    <MeasurementDisplay description="L15" value={data.load15} metric="%" />
                </div>
            </div>

            <div className="memory-data">
                <p className="title title-mem">Memory</p>
                <div className="memory">
                    <MeasurementDisplay description="used" value={data.memUsed} metric="GB" />
                    <MeasurementDisplay description="total" value={data.memTotal} metric="GB" />
                </div>
                <p className="title title-swap">Swap</p>
                <div className="swap">
                    <MeasurementDisplay description="used" value={data.swapUsed} metric="GB" />
                    <MeasurementDisplay description="total" value={data.swapTotal} metric="GB" />
                </div>
            </div>

            <div className="disk-net">
                <p className="title title-diskutil">Disk Stats</p>
                <div className="diskutil">
                    <MeasurementDisplay description="read" value={data.diskRead} metric="MB/s" />
                    <MeasurementDisplay description="wrote" value={data.diskWrote} metric="MB/s" />
                </div>
                <p className="title title-net">Network Stats</p>
                <div className="net">
                    <MeasurementDisplay description="upload" value={data.netUp} metric="MB/s" />
                    <MeasurementDisplay description="download" value={data.netDown} metric="MB/s" />
                </div>
            </div>
        </>);
}
