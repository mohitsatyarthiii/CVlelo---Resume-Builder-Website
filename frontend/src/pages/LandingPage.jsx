import HeroSection from './HeroSection'
import Footer from './Footer'
import ResumeBuilderSection from './WriterSection'
import CTASection from './CTASection'
import CVBuilderBentoGrid from './GridSection'
import FAQSection from './FAQSection'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <CVBuilderBentoGrid/>
      <ResumeBuilderSection/>
      <FAQSection/>
      
      

      <CTASection/>
      <Footer/>
    </div>
  )
}

export default LandingPage