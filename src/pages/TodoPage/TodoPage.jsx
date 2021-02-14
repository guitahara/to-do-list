import React from 'react';
import './todo.css';
import { NavbarComponent } from '../../components/index';

function TodoPage() {
  return (
    <section>
      <NavbarComponent />
      <h1>To Do</h1>
    </section>
  );
}

export default TodoPage;