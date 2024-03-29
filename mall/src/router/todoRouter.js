import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

const todoRouter = () => {
  const Loading = <div className="bg-red-700">Loading...</div>;

  const TodoList = lazy(() => import('../pages/todo/ListPage'));
  const TodoRead = lazy(() => import('../pages/todo/ReadPage'));
  const TodoAdd = lazy(() => import('../pages/todo/AddPage'));
  const TodoModify = lazy(() => import('../pages/todo/ModifyPage'));

  return [
    // 하위 라우팅을 분기
    {
      path: 'list',
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: '',
      element: <Navigate replace={true} to={'list'} />, // Navigate 설정을 통해 리다이렉션을 수행할 수 있음 replace가 true이므로 뒤로가기가 불가능하고 루트로 이동함
    },
    {
      path: 'read/:tno', // url 파라미터 설정
      element: (
        <Suspense fallback={Loading}>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: 'add', // url 파라미터 설정
      element: (
        <Suspense fallback={Loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: 'modify/:tno', // url 파라미터 설정
      element: (
        <Suspense fallback={Loading}>
          <TodoModify />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
