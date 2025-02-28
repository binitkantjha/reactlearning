export const Simmer = () => {
    return (
        <div className="simmer-container">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="simmer-dummy"></div>
            ))}
            
        </div>
    )
}