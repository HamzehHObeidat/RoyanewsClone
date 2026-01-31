import TopBar from './components/TopBar.jsx'
import MainHeader from './components/MainHeader.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import TrendingSection from './components/TrendingSection.jsx'
import ImportantSection from './components/ImportantSection.jsx'
import GazaSection from './components/GazaSection.jsx'
import CategorySection from './components/CategorySection.jsx'
import RandomNews from './components/RandomNews.jsx'
import SelectedVideos from './components/SelectedVideos.jsx'
import MostCommon from './components/MostCommon.jsx'
import ApiSection from './components/ApiSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <MainHeader />
      <Navbar />
      <main className="mx-auto my-15 flex max-w-7xl flex-col gap-20">
        <HeroSection />
        <TrendingSection />
        <ImportantSection />
        <GazaSection />
        <CategorySection />
        <RandomNews />
        <SelectedVideos />
        <MostCommon />
        <ApiSection />
        <ApiSection />
        <ApiSection />
        <ApiSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
