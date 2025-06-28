import { Toaster } from "@/components/ui/sonner"
import './App.css'
import Layout from './layout.tsx';
import Usage from './usage.tsx';

function App() {
  return (
    <>
      <Toaster />
      <Layout >
        <Usage />
      </Layout>
    </>
  )
}

export default App
