import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DataEntry = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Assuming you store user info here

  useEffect(() => {
    switch (user.department) {
      case 'dengue':
        navigate('/data-entry/dengue');
        break;
      case 'influenza':
        navigate('/data-entry/influenza');
        break;
      case 'polio':
        navigate('/data-entry/polio');
        break;
      // Add other departments here
      default:
        navigate('/unauthorized');
    }
  }, [user, navigate]);

  return null; // Optional loading spinner
};

export default DataEntry;
