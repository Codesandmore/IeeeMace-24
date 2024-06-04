import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Execom.css';

const ExecomFull = () => {
    const members = [
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
            image: 'src/assets/execom/pranav.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/amrutha.png'
        },
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
            image: 'src/assets/execom/anamika.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/bifin.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/chacko.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/anand.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/dwarakesh.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/milan.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/kripa.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/hari.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/rohith.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/noyal.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/colin.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/ronal.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/silda.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/shraddha.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/mathew.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/neha.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/akhil.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/jes.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/amritha.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/ameena.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/anu.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/jyothika.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/oliviya.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/naveen.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/nandhana mj.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/nandana jolly.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/siyadh.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Chair',
            image: 'src/assets/execom/sian.png'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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