import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Execom.css';

const ExecomFull = () => {
    const members = [
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'Branch Counselor',
            image: 'src/assets/execom/neethu.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'SB Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'SB Secretary',
            image: 'src/assets/execom/pranav.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'SB Vice Chair',
            image: 'src/assets/execom/amrutha.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'SB Treasurer',
            image: 'src/assets/execom/abhinav.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hanna@gmail.com',
            role: 'SB Joint Secretary',
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
            image: 'src/assets/execom/anand.png'
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
            image: 'src/assets/execom/hari1.png'
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
    ];

    const societies = [
        {
            name: 'Computer Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/leya.png'
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
            ]
        },
        {
            name: 'Communications Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/siddharth.png'
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
            ]
        },
        {
            name: 'Industry Applications Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/bos.png'
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
            ]
        },
        {
            name: 'Power and Energy Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/neema.png'
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
            ]
        },
        {
            name: 'Robotics and Automation Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/siddharth.png'
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
            ]
        },
        {
            name: 'IE/PELS Joint Chapter',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/bos.png'
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
            ]
        },
        {
            name: 'Signal Processing Society',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/reenu.png'
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
            ]
        },
        {
            name: 'Women in Engineering Affinity Group',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/neethu.png'
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
            ]
        },
        {
            name: 'SIGHT Group',
            members: [
                {
                    name: 'Hanna Elza John',
                    email: 'hanna@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/neema.png'
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
            ]
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
            {societies.map((society, index) => (
                <div key={index} className="society-section">
                    <h2 className="society-name">{society.name}</h2>
                    <div className="execom-cards">
                        {society.members.map((member, memberIndex) => (
                            <ExecomCard key={memberIndex} member={member} />
                        ))}
                    </div>
                </div>
            ))}
            <div className="back-container">
                <Link to="/" className="back-button">Back</Link>
            </div>
        </div>
    );
}


export default ExecomFull;