
import React from 'react';
import './Execom.css';

const Execom = () => {
    const members = [
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/HANNA ELZA JOHN1.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/HANNA ELZA JOHN.jpg'
        },
       
    ];

    const ExecomCard = ({ member }) => {
        return (
            <div className="execom-card-container">
                <div className="role">{member.role}</div>
                <div className="execom-card">
                    <div className="image-container">
                        <img src={member.image} alt={`${member.name}`} className="profile-image" />
                        <div className="overlay">
                            <div className="text">
                                <p>{member.name}</p>
                                <p>{member.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="execom">
            <h1 className="section-heading">Execom</h1>
            <div className="execom-cards">
                {members.map((member, index) => (
                    <ExecomCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

export default Execom;
