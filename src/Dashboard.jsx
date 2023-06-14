import RtdView from "./views/RtdView";
import CpuInfoView from "./views/CpuInfoView";
import DiskInfoView from "./views/DiskInfoView";
import MemInfoView from "./views/MemInfoView";
import NetInfoView from "./views/NetInfoView";
import SysInfoView from "./views/SysInfoView";

export default function Dashboard({ view })
{
    let SelectedView;
    switch (view)
    {
        case "rtd": SelectedView = <RtdView />; break;
        case "cpu": SelectedView = <CpuInfoView />; break;
        case "disk": SelectedView = <DiskInfoView />; break;
        case "mem": SelectedView = <MemInfoView />; break;
        case "net": SelectedView = <NetInfoView />; break;
        case "sys": SelectedView = <SysInfoView />; break;
        default: SelectedView = <RtdView />; break;
    }

    return (
        <div className="Dashboard">
            {SelectedView}
        </div>);

}
