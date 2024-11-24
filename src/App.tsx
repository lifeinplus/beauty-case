import BottomNavBar from './components/BottomNavBar'
import Brushes from './components/Brushes'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Stages from './components/Stages'
import data from './data/data.json'

const App = () => (
    <div>
        <Header />
        <main className="mx-auto max-w-4xl sm:ms-10 sm:ps-8">
            <Hero
                title={data.title}
                subtitle={data.subtitle}
                image={data.image}
            />
            <Stages stages={data.stages} />
            <Brushes brushes={data.brushes} />
        </main>
        <BottomNavBar />
        <Footer />
    </div>
)

export default App
