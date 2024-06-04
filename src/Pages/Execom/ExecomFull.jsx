import React from 'react';
import { Link } from 'react-router-dom';
import './Execom.css';

const ExecomFull = () => {
    const members = [
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/abhinav.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hanna.png'
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
            <div className="back-container">
                <Link to="/" className="back-button">Back</Link>
            </div>
        </div>
    );
}

export default ExecomFull;