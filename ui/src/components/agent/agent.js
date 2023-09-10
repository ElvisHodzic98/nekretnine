import './style.css';

export const Agent = ({agent}) => {
    return <div className="agent-box">
        <div className="image-container">
            <img
                className="image"
                src={agent.slika}
                alt="Real estate Box"
            />
        </div>
        <div className="content">
            <h5 className="title">
               {agent.ime}
            </h5>
            <div className="svojstva">
            <span>Email: {agent.email}</span>
            <span>Telefon: {agent.telefon}</span>
            </div>
        </div>
    </div>
};