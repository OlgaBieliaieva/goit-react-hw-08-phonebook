//COMPONENTS
import { Hero } from 'components/Hero/Hero';
import { LoginForm } from 'components/LoginForm/LoginForm';


const pageStyles = {
  display: 'flex',
  width: '100%',
  height: '100vh',
};

export default function Home() {
  return (
    <main style={pageStyles}>
      <Hero />      
      <LoginForm />      
    </main>
  );
}
