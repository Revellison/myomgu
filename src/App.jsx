import { useState } from 'react'
import './App.css'

function App() {
    const users = [
    { id: 1, name: '', email: 'ivan@example.com' },
    { id: 2, name: '', email: 'maria@example.com' },
    { id: 3, name: '', email: 'alex@example.com' },
    { id: 4, name: '', email: 'olga@example.com' },
  ];
return (
    <div style={{ padding: '20px', fontFamily: 'Rubik, sans-serif', backgroundColor: 'black'}}>
      <h1>Список пользователей</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Имя</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: '40px' }}>Тестовые кнопки</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#ff7f00', color: '#000000ff', border: 'none', borderRadius: '5px' }}>Кнопка 1</button>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Кнопка 2</button>
        <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>Кнопка 3</button>
        <button style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px' }}>Кнопка 4</button>
      </div>
    </div>
  );
}

export default App
