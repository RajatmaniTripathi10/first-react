import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expense=[
    {
    id:'e1',
    title:'Car Insurance',
    amount:1200,
    date:new Date(2022, 4,28),
  },
  {
    id:'e2',
    title:'Fruits',
    amount:500,
    date:new Date(2022, 6,28),
  },
  {
    id:'e3',
    title:'Bike Service',
    amount:1200,
    date:new Date(2023, 1,15),
  },
  {
    id:'e4',
    title:'Birthday Bash',
    amount:1400,
    date:new Date(2023, 1,10),
  },
]
  return (
   <><ExpenseItem
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}></ExpenseItem>
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}></ExpenseItem>
          <ExpenseItem
            title={expense[3].title}
            amount={expense[3].amount}
            date={expense[3].date}>
              </ExpenseItem></>
   
  );
}

export default App;
