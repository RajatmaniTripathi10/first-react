import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      
      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
         <div className="expense-item__price">{props.amount}</div>
         <div className="expense-item">{props.date.toISOString()}</div>
    </div>
  );
}
export default ExpenseItem;
