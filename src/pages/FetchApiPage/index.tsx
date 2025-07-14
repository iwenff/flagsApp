import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const ApiPage = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [loader, setLoader] = useState(true);
  const [thisUser, setThisUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((e) => console.log(e))
      .finally(() => setLoader(false));
  }, []);

  if (loader) return <p>Загрузка...</p>;

  return (
    <div>
      <strong>Выбрать сучку</strong>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {userData.map((item) => (
          <li
            key={item.id}
            onClick={() => setThisUser(item)}
            style={{
              cursor: 'pointer',
              padding: '8px 12px',
              borderBottom: '1px solid #ccc',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {thisUser && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setThisUser(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              padding: '24px 32px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              minWidth: '300px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '12px' }}>Информация по сучке {thisUser.name}</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>Email: {thisUser.email}</p>
            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>Телефон: {thisUser.phone}</p>
            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>
              Сайт: <a href={`https://${thisUser.website}`}>{thisUser.website}</a>
            </p>
            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>Город: {thisUser.address.city}</p>
            <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 500 }}>Улица: {thisUser.address.street}</p>
            <button
              onClick={() => setThisUser(null)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Обратно
      </button>
    </div>
  );
};

export default ApiPage;
