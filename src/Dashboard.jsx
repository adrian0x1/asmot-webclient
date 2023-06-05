function MeasurementDisplay({ description = "N/A", value = "N/A", metric = "N/A" })
{
    return (
        <p className="measurement-display">
            <span className="measurement-description">{description}</span>
            <span className="measurement-value">{value}</span>
            <span className="measurement-metric">{metric}</span>
        </p>
    );
}



export default function Dashboard({ view })
{
    return (
        <div className="Dashboard">

            {/* CPU */}


            <div className="cpu-data">
                <p className="title">CPU</p>
                <div className="usage-and-frequency">
                    <MeasurementDisplay description="usage" value="38.32" metric="%" />
                    <MeasurementDisplay description="frequency" value="1.33" metric="GHz" />
                </div>
                <div className="loadaverage">
                    <MeasurementDisplay description="1" value="21" metric="%" />
                    <MeasurementDisplay description="5" value="14" metric="%" />
                    <MeasurementDisplay description="15" value="2" metric="%" />
                </div>
            </div>

            {/* Memory */}

            <div className="memory-data">
                <p className="title title-mem">Memory</p>
                <div className="memory">
                    <MeasurementDisplay description="used" value="130" metric="MB" />
                    <MeasurementDisplay description="total" value="975" metric="MB" />
                </div>
                <p className="title title-swap">Swap</p>
                <div className="swap">
                    <MeasurementDisplay description="used" value="33.0" metric="MB" />
                    <MeasurementDisplay description="total" value="998" metric="MB" />
                </div>
            </div>

            {/* DiskStats */}

            <div className="disk-net">
                <p className="title title-diskutil">Disk Stats</p>
                <div className="diskutil">
                    <MeasurementDisplay description="read" value="503" metric="KB/s" />
                    <MeasurementDisplay description="wrote" value="247" metric="KB/s" />
                </div>
                <p className="title title-net">Network Stats</p>
                <div className="net">
                    <MeasurementDisplay description="upload" value="187" metric="KB/s" />
                    <MeasurementDisplay description="download" value="89" metric="KB/s" />
                </div>
            </div>

            {/* {view} */}
        </div>);
}