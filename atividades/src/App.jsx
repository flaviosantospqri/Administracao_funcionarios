import { useState } from 'react';
import './App.css';

function App() {
  const [atividade_list, setAtividade_in_list] = useState([
    {
      id: 1,
      descricao: 'Isto é uma ativade',
    },
    {
      id: 2,
      descricao: 'Isto é uma atividade',
    },
  ]);
  const addAtividade = (e) => {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    setAtividade_in_list([...atividade_list, { ...atividade }]);
    console.log(atividade_list);
  };

  return (
    <div className='App'>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='descricao' className='form-label'>
            Descrição
          </label>
          <input type='text' className='form-control' id='descricao' />
        </div>

        <div className='col-md-6'>
          <label htmlFor='id' className='form-label'>
            Id
          </label>
          <input type='text' className='form-control' id='id' />
        </div>

        <br />

        <button className='btn btn-outline-primary' onClick={addAtividade}>
          + Inserir
        </button>
      </form>
      <br />
      <div>
        <ul className='list-group'>
          {atividade_list.map((a) => (
            <li key={a.id} className='list-group-item'>
              {a.id} - {a.descricao}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
