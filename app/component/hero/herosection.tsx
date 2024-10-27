
import React from 'react';

const Hero = () => {
    return (
        <section style={{
            backgroundImage: 'url(/images/your-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            textAlign: 'center',
            padding: '10px',
        }}>
            <div style={{
                backgroundColor: 'rgba(0, ,0 , 0.5)',
                padding: '20px',
                borderRadius: '10px'
            }}>
                <h1 style={{ fontSize: '3em', margin: '0' }}><b>Welcome to Pets Care</b></h1>
                <p style={{ fontSize: '1.5em', margin: '10px 0' }}>Book your pet's appoinment now</p>
                <button style={{
                    backgroundColor: '#730099',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '20px',
                    borderRadius: '5px',
                }}>
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
