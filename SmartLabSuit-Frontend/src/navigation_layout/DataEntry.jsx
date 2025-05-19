import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DataEntry = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Assuming you store user info here

  useEffect(() => {
    switch (user.department) {
      case 'Dengue':
        navigate('/data-entry/dengue');
        break;
      case 'Influenza':
        navigate('/data-entry/influenza');
        break;
      case 'Polio':
        navigate('/data-entry/polio');
        break;
      case 'Nipah':
        navigate('/data-entry/nipah');
        break;
      case 'Hepatitis':
        navigate('/data-entry/hepatitis');
        break;
      case 'Chikungunya':
        navigate('/data-entry/chikungunya');
        break;
      case 'Enteric Virus':
        navigate('/data-entry/entric-virus');
        break;
      // Add other departments here
      default:
        navigate('/unauthorized');
    }
  }, [user, navigate]);

  return null; // Optional loading spinner
};

export default DataEntry;
