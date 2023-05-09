import { MainNavigation } from '../MainNavigation/MainNavigation';
import { Footer } from '../Footer/Footer';
import { Home } from '../../pages/Home';
import { About } from '../../pages/about/About';
import { Facials } from '../../pages/facials/Facials';


export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="content">
        <Home/>
        <Facials />
      </main>
      <Footer />
    </>
  )
}