import React, { useState } from 'react';
import { PlusCircle, MinusCircle, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FinanceDashboard = () => {
  const [balance, setBalance] = useState(1000);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAddIncome = () => {
    if (income > 0) {
      setBalance(prevBalance => prevBalance + income);
      setHistory(prevHistory => [...prevHistory, { type: 'Income', amount: income, date: new Date().toLocaleString() }]);
      setIncome(0);
    }
  };

  const handleAddExpense = () => {
    if (expense > 0) {
      setBalance(prevBalance => prevBalance - expense);
      setHistory(prevHistory => [...prevHistory, { type: 'Expense', amount: expense, date: new Date().toLocaleString() }]);
      setExpense(0);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Finance Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-4 flex items-center">
            <DollarSign className="mr-2" />
            {balance.toFixed(2)}
          </div>
          <div className="space-y-4">
            <div>
              <Input
                type="number"
                value={income}
                onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                placeholder="Enter income"
                className="mb-2"
              />
              <Button onClick={handleAddIncome} className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Income
              </Button>
            </div>
            <div>
              <Input
                type="number"
                value={expense}
                onChange={(e) => setExpense(parseFloat(e.target.value) || 0)}
                placeholder="Enter expense"
                className="mb-2"
              />
              <Button onClick={handleAddExpense} variant="destructive" className="w-full">
                <MinusCircle className="mr-2 h-4 w-4" /> Add Expense
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {history.map((transaction, index) => (
              <li key={index} className={`flex justify-between items-center p-2 rounded ${transaction.type === 'Income' ? 'bg-green-100' : 'bg-red-100'}`}>
                <span>{transaction.type}</span>
                <span>${transaction.amount.toFixed(2)}</span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceDashboard;
