import React from 'react';
import Expenses from "./components/Expenses";

function App(){
// let expenseDate = new Date(2024, 3, 27);
// let expenseTitle = " School Fee";
// let expenseAmount = 300;

let expenses =[
   {
    id :'e1',
    title: 'school',
    amount : 2000,
    date: new Date (2024 , 5, 12)
   },
   {
    id :'e2',
    title: 'rent',
    amount : 4000,
    date: new Date (2024 , 6, 12)
   },
   {
    id :'e3',
    title: 'dress',
    amount : 200,
    date: new Date (2024 , 5, 12)
   },
   {
    id :'e4',
    title: 'food',
    amount : 2000,
    date: new Date (2024 , 7, 12)
   },
   
];
return (<div>
        <h2>hello</h2>
         
         <Expenses item={expenses}/>   
    </div>
    )

}
export default App;
