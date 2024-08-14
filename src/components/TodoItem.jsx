import React from 'react';
import { Button } from '@/components/ui/button';
import { Paw } from 'lucide-react';

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
      <span className="text-gray-800">{todo.text}</span>
      <Button variant="ghost" size="icon" onClick={() => onRemove(todo.id)}>
        <Paw className="h-4 w-4 text-purple-500" />
      </Button>
    </li>
  );
};

export default TodoItem;