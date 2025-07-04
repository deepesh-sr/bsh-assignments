import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchCard from './components/SearchCard'
import FeaturesCard from './components/FeaturesCard'
import TemplateCard from './components/TemplateCard'
import { templatesData } from './data/templates'

const App = () => {
  return (<>
    <div className='px-4 sm:px-[7vw] md:px-[9vw] lg:px-[11vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    <SearchCard />
    <div className='px-4 sm:px-[7vw] md:px-[9vw] lg:px-[11vw]'>

      <FeaturesCard />
      <h2>Premium Templates</h2>
      <div className='flex justify-between py-5  flex-wrap'>

      {templatesData.map(template => (
        
        <TemplateCard
        key={template.id}
        image={template.image}
        title={template.title}
        price={template.price}
        purchases={template.purchases}
        templateUrl={template.templateUrl}
        previewUrl={template.previewUrl}
        />
      ))}
      </div>
    </div>
  </>
  )
}

export default App
