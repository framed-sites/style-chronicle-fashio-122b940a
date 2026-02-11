import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import CategoriesPage from './pages/Categories'
import LookbookPage from './pages/Lookbook'
import ShopEditPage from './pages/ShopEdit'
import AboutPage from './pages/About'
import NewsletterPage from './pages/Newsletter'
import ContactPage from './pages/Contact'
import StyleQuizPage from './pages/StyleQuiz'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/topics" element={<CategoriesPage />} />
        <Route path="/street-style-gallery" element={<LookbookPage />} />
        <Route path="/the-edit-shop-my-picks" element={<ShopEditPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/the-weekly-thread" element={<NewsletterPage />} />
        <Route path="/contact-collaborations" element={<ContactPage />} />
        <Route path="/find-your-style" element={<StyleQuizPage />} />
      </Route>
    </Routes>
  )
}
