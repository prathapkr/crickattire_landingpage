import './App.css'
import { motion } from 'framer-motion'
import logo from './logo.jpeg'; 

const App = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      }
    }
  }

  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: 'easeInOut',
      }
    }
  }

  const explainProduct = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 2.2,
        ease: "easeInOut"
      }
    }
  }

  const buttonProduct = {
    hidden: { opacity: 0, scaleX: 0 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: .8,
        delay: 2.3,
        type: 'tween'
      }
    }
  }

  const imgProduct1 = {
    hidden: {
      opacity: 0,
      y: '400px',
      width: '80px'
    },
    show: {
      opacity: 1,
      y: 0,
      width: '250px',
      transition: {
        duration: 1,
        delay: 2.5,
        ease: "easeInOut"
      }
    }
  }

  const imgProduct2 = {
    hidden: {
      opacity: 0,
      y: '400px',
      x: '50px',
      width: '80px'
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      width: '250px',
      transition: {
        duration: 1,
        delay: 3.4,
        ease: "easeInOut"
      }
    }
  }

  const navAnimation = {
    show: {
      transition: {
        staggerChildren: .4,
        delayChildren: 3.8,
        ease: "easeInOut"
      }
    }
  }

  const navText = {
    hidden: {
      opacity: 0,
      y: '-10px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut"
      }
    }
  }

  const starAnimation = {
    hidden: {
      opacity: 0,
      x: '-50px'
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: .4,
        delayChildren: 3.8,
      }
    }
  }

  const starItem = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeIn"
      }
    }
  }

  return (
    <div className='container'>
      <nav className='nav'>
        <motion.ul variants={navAnimation} initial="hidden" animate="show">
        </motion.ul>
      </nav>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <section className='section'>
        <div className='left'>
          <motion.h1 className='text' variants={typingContainer} initial="hidden" animate="show">
            {
              Array.from("CRIC ATTIRE").map((word, i) => (
                <motion.span key={i} variants={typingText}>{word}</motion.span>
              ))
            }
          </motion.h1>
          <div className='explain-product'>
            <motion.p variants={explainProduct} initial="hidden" animate="show">
              CricAttire: Elevate Your Cricket Style to Champion Status. Discover premium cricket apparel tailored for champions. For cricket enthusiasts, we deliver unparalleled quality and style.
            </motion.p>
          </div>
          <div className='button'>
            <motion.button className='btn-order' variants={buttonProduct} initial="hidden" animate="show">Order now</motion.button>
          </div>
          <motion.div className='star-square' variants={starAnimation} initial="hidden" animate="show">
          </motion.div>
        </div>
        <div className='right'>
          <motion.img src="/images/img2.png" alt="nature" className='img1' variants={imgProduct1} initial="hidden" animate="show" />
          <motion.img src="/images/img1.png" alt="coffee" className='img2' variants={imgProduct2} initial="hidden" animate="show" />
        </div>
      </section>

      <section className='contact-info'>
        <h2>Contact Us</h2>
        <p>For inquiries and support, feel free to reach out to us through our social media platforms:</p>
        <div className='social-links'>
          <a href="https://www.facebook.com/172554072604346" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/groups/14345532" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/CricAttire" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>

      <section className='performance-wear'>
        <h2>Performance Wear for Cricket Champions</h2>
        <p>Win Your Matches In Style With Your Custom-Designed Cricket Outfits!</p>
        <p>GO TO THE DESIGN LAB STUDIO FOR CUSTOMIZING YOUR APPAREL</p>
        <p>MAKE CRICATTIRE CLOTHING YOUR PLATFORM FOR CRICKET ART!</p>
      </section>

      <section className='store-timing'>
        <h2>CricAttire's Store</h2>
        <p>Hotline: +1 720 770 0505</p>
        <p>Faxline: +1 917 396 7063</p>
        <p>Hours</p>
        <p>Mon-Fri: 09:00 am - 05:00 pm</p>
        <p>Sat-Sun: Closed</p>
      </section>
    </div>
  )
}

export default App
