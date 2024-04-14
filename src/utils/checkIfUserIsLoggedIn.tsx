// ตัวอย่างฟังก์ชัน checkIfUserIsLoggedIn() ที่ใช้งาน Token-based authentication
const checkIfUserIsLoggedIn = () => {
    // ตรวจสอบว่ามี Token การเข้าสู่ระบบที่ถูกเก็บไว้ใน localStorage หรือไม่
    const token = localStorage.getItem('authToken');
  
    // ถ้ามี Token การเข้าสู่ระบบใน localStorage แสดงว่าผู้ใช้งานได้เข้าสู่ระบบแล้ว
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  
  export default checkIfUserIsLoggedIn;
  