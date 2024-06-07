import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Execom.css';

const ExecomFull = () => {
    const members = [
        {
            name: 'Prof. Neethu Salim',
            email: 'neethusalim@mace.ac.in',
            role: 'Branch Counselor',
            image: 'src/assets/execom/neethu.png'
        },
        {
            name: 'Hanna Elza John',
            email: 'hannaelzajohn@ieee.org',
            role: 'SB Chair',
            image: 'src/assets/execom/hanna.png'
        },
        {
            name: 'Pranav Vinoy',
            email: 'pranavvinoy@ieee.org',
            role: 'SB Secretary',
            image: 'src/assets/execom/pranav.png'
        },
        {
            name: 'Amrutha R Nair',
            email: 'amrutha2003@ieee.org',
            role: 'SB Vice Chair',
            image: 'src/assets/execom/amrutha.png'
        },
        {
            name: 'Abhinav S Vijayan',
            email: 'abhinavsvijayan@ieee.org',
            role: 'SB Treasurer',
            image: 'src/assets/execom/abhinav.png'
        },
        {
            name: 'Anamika KP',
            email: 'anamikakp@ieee.org',
            role: 'SB Joint Secretary',
            image: 'src/assets/execom/anamika.png'
        },
        {
            name: 'Bifin James',
            email: 'bifinjames2004@gmail.com',
            role: 'Webmaster',
            image: 'src/assets/execom/bifin.png'
        },
        {
            name: 'Chackochan Jose ',
            email: 'chackochanjose@ieee.org',
            role: 'Webmaster',
            image: 'src/assets/execom/chacko.png'
        },
        {
            name: 'Dwarakesh T Babu',
            email: 'dwarakeshtbabu13@gmail.com',
            role: 'ECC',
            image: 'src/assets/execom/dwarakesh.png'
        },
        {
            name: 'Milan George Mathew',
            email: 'milangeorgem@gmail.com',
            role: 'ECC',
            image: 'src/assets/execom/milan.png'
        },
        {
            name: 'Anand P S',
            email: 'anandps8888@gmail.com',
            role: 'MDC',
            image: 'src/assets/execom/anand.png'
        },
        {
            name: 'Kripa Anna Thomas',
            email: 'kripaanna10@gmail.com',
            role: 'Social Media Manager',
            image: 'src/assets/execom/kripa.png'
        },
        {
            name: 'Harikrishnan Ashok',
            email: 'harikrishnanashok216@gmail.com',
            role: 'Program Coordinator',
            image: 'src/assets/execom/hari.png'
        },
        {
            name: 'Rohith K M',
            email: 'rohithkm945@gmail.com',
            role: 'Technical Coordinator',
            image: 'src/assets/execom/rohith.png'
        },
        {
            name: 'Noyal K Raju',
            email: 'noyalbright77@gmail.com',
            role: 'Projects and Lab Coordinator',
            image: 'src/assets/execom/noyal.png'
        },
    ];

    const societies = [
        {
            name: 'Computer Society',
            members: [
                {
                    name: 'Prof. Leya Elizabeth Sunny',
                    email: 'leyaelizabeth@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/leya.png'
                },
                {
                    name: 'Colin Jimmy',
                    email: 'colinjimmy2004@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/colin.png'
                },
                {
                    name: 'Ronal Shoey George',
                    email: 'ronalshoey@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/ronal.png'
                },
            ]
        },
        {
            name: 'Communications Society',
            members: [
                {
                    name: 'Dr. Siddharth Shelly',
                    email: 'sidhushelly@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/siddharth.png'
                },
                {
                    name: 'Silda Sholly',
                    email: 'sildasholly@ieee.org',
                    role: 'Chair',
                    image: 'src/assets/execom/silda.png'
                },
                {
                    name: 'Shraddha Sasikumar ',
                    email: 'shraddha_sasikumar@yahoo.in',
                    role: 'Secretary',
                    image: 'src/assets/execom/shraddha.png'
                },
            ]
        },
        {
            name: 'Industry Applications Society',
            members: [
                {
                    name: 'Dr. Bos Mathew Jos',
                    email: 'bosmathewjos@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/bos.png'
                },
                {
                    name: 'Amritha M',
                    email: 'amrithamurali70@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/amritha.png'
                },
                {
                    name: 'Ameena R',
                    email: 'ameenarapheeque@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/ameena.png'
                },
            ]
        },
        {
            name: 'Power and Energy Society',
            members: [
                {
                    name: 'Prof. Neethu Salim',
                    email: 'neethusalim@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/neethu.png'
                },
                {
                    name: 'Akhil Sebastian',
                    email: 'sskzm5527@ieee.org',
                    role: 'Chair',
                    image: 'src/assets/execom/akhil.png'
                },
                {
                    name: 'Jes Gigo',
                    email: 'jesgigo10@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/jes.png'
                },
            ]
        },
        {
            name: 'Robotics and Automation Society',
            members: [
                {
                    name: 'Dr. Siddharth Shelly',
                    email: 'sidhushelly@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/siddharth.png'
                },
                {
                    name: 'Mathew Vinu Benny',
                    email: 'mathewvbennyin@ieee.org',
                    role: 'Chair',
                    image: 'src/assets/execom/mathew.png'
                },
                {
                    name: 'Neha Savy',
                    email: 'nehasavy05@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/neha.png'
                },
            ]
        },
        {
            name: 'IE/PELS Joint Chapter',
            members: [
                {
                    name: 'Dr. Bos Mathew Jos',
                    email: 'bosmathewjos@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/bos.png'
                },
                {
                    name: 'Anu Anil',
                    email: 'anu29anil@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/anu.png'
                },
                {
                    name: 'Jyothika Vinod',
                    email: 'jyothikavinod03@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/jyothika.png'
                },
            ]
        },
        {
            name: 'Women in Engineering Affinity Group',
            members: [
                {
                    name: 'Prof. Neethu Salim',
                    email: 'neethusalim@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/neethu.png'
                },
                {
                    name: 'Nandhana M J',
                    email: 'nandhanamj07@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/nandhana mj.png'
                },
                {
                    name: 'Nandana Jolly',
                    email: 'nandanajolly6@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/nandana jolly.png'
                },
            ]
        },
        {
            name: 'Signal Processing Society',
            members: [
                {
                    name: 'Dr. Reenu George',
                    email: 'reenugeorge@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/reenu.png'
                },
                {
                    name: 'Oliviya Jain',
                    email: 'oliviyajainp@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/oliviya.png'
                },
                {
                    name: 'Naveen Prasad',
                    email: 'naveenprasadofficial5@gmail.com',
                    role: 'Secretary',
                    image: 'src/assets/execom/naveen.png'
                },
            ]
        },
        {
            name: 'SIGHT Group',
            members: [
                {
                    name: 'Prof. Neethu Salim',
                    email: 'neethusalim@mace.ac.in',
                    role: 'Advisor',
                    image: 'src/assets/execom/neethu.png'
                },
                {
                    name: 'Siyadh M N',
                    email: 'siyadhmn123@gmail.com',
                    role: 'Chair',
                    image: 'src/assets/execom/siyadh.png'
                },
                {
                    name: 'Sian Lee',
                    email: 'b22ec057@mace.ac.in',
                    role: 'Secretary',
                    image: 'src/assets/execom/sian.png'
                },
            ]
        },
    ];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const ExecomCard = ({ member }) => {
        const roleRef = useRef(null);

        useEffect(() => {
            const adjustFontSize = () => {
                const roleElement = roleRef.current;
                if (roleElement) {
                    const charLength = member.role.length;
                    roleElement.style.setProperty('--char-length', charLength);
                    if (charLength > 21) {
                        roleElement.classList.add('fit');
                    } else {
                        roleElement.classList.remove('fit');
                    }
                }
            };
            adjustFontSize();
        }, [member.role]);

        return (
            <div className="execom-card-container">
                <div ref={roleRef} className="role">{member.role}</div>
                <div className="execom-card">
                    <div className="image-container">
                        <img src={member.image} alt={`${member.name}`} className="profile-image" />
                        <div className="overlay">
                            <div className="text">
                                <p className='pname'>{member.name}</p>
                                <p className='pmail'>{member.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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