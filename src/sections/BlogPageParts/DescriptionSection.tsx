
const DescriptionSection: React.FC<{ description: string[] }> = ({ description }) => {
    return (
        <div className="flex flex-col gap-3">
            {description.map((text, index) => (
                <p key={index} className="leading-6 text-gray01 mb-3">{text}</p>
            ))}
        </div>)
}

export default DescriptionSection