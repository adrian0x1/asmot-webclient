import activityImg from "./assets/activity.svg";
import cpuImg from "./assets/cpu.svg";
import diskImg from "./assets/devicehdd.svg";
import memImg from "./assets/memory.svg";
import netImg from "./assets/network.svg";
import sysImg from "./assets/pchorizontal.svg";

export default function SideBar({ setView })
{
    return (
        <div className="SideBar">
            <div className="SideBarOption" onClick={() => setView("rtd")}>
                <img src={activityImg} />
                <p className="SideBarToolTip">Real Time Data</p>
            </div>
            <div className="SideBarOption" onClick={() => setView("cpu")}>
                <img src={cpuImg} />
                <p className="SideBarToolTip">CPU Information</p>
            </div>
            <div className="SideBarOption" onClick={() => setView("disk")}>
                <img src={diskImg} />
                <p className="SideBarToolTip">Disk Information</p>
            </div>
            <div className="SideBarOption" onClick={() => setView("mem")}>
                <img src={memImg} />
                <p className="SideBarToolTip">Memory Information</p>
            </div>
            <div className="SideBarOption" onClick={() => setView("net")}>
                <img src={netImg} />
                <p className="SideBarToolTip">Network Information</p>
            </div>
            <div className="SideBarOption" onClick={() => setView("sys")}>
                <img src={sysImg} />
                <p className="SideBarToolTip">System Information</p>
            </div>
        </div>
    );
}
