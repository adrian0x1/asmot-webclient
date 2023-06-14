export default function MeasurementDisplay({ description = "N/A", value = "N/A", metric = "N/A" })
{
    return (
        <p className="measurement-display">
            <span className="measurement-description">{description}</span>
            <span className="measurement-value">{value}</span>
            <span className="measurement-metric">{metric}</span>
        </p>
    );
}
