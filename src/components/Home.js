import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/login');
  };

  return (
    <main>
      <h1>Welcome Home!</h1>
      <p>You are now logged in. Feel free to explore.</p>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}

export default Home;
