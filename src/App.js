import './App.css';
import Edit from './components/Edit';

function App() {
  // const populateFields = () => {
  //   const initialData = {
  //     name: 'Phoenix Wright',
  //     role: 'Defense Attorney',
  //     contact: '09123345554',
  //     address: 'Wright Anything Agency, Los Angeles',
  //     email: 'theaceattorney12#@gmail.com',
  //     site: 'https://github.com/daphoenix12#',
  //   };

  //   document.querySelectorAll(InputContainer).forEach((cont) => {
  //     for (let key in initialData) {
  //       if (key === cont.childNodes[1].name)
  //         cont.childNodes[1].value = initialData[key];
  //     }
  //   });
  // };
  return (
    <div className="App">
      {/* <button onClick={populateFields}>Fill All Fields</button> */}
      <Edit />
    </div>
  );
}

export default App;
