import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Home.module.css';

export default function Home() {
  return (
    <main className={css.pageContainer}>
      <section className={css.heroContainer}>
        <h1>Still using paper?</h1>
        <p> Take care of Nature, join the</p>
        <p>Contacts Store</p>
      </section>
      <section className={css.loginContainer}>
        <LoginForm />
      </section>
    </main>
  );
}
