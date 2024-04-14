// withAuth.tsx

import { useRouter } from 'next/router';
import checkIfUserIsLoggedIn from './checkIfUserIsLoggedIn';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const hocComponent = (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const isLoggedIn = checkIfUserIsLoggedIn();

      if (!isLoggedIn) {
        router.push('/login'); // หากไม่ได้เข้าสู่ระบบ ให้เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};

export default withAuth;
