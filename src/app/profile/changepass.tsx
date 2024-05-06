/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import Swal from "sweetalert2";

function changepass() {
  const newpassword = document.getElementById(
    "newpassword"
  ) as HTMLInputElement;
  const confirmpassword = document.getElementById(
    "confirmpassword"
  ) as HTMLInputElement;

  if (newpassword.value === "" || confirmpassword.value === "") {
    Swal.fire({
      icon: "error",
      title: "กรุณากรอกข้อมูลให้ครบ",
    });
    return;
  }

  if (newpassword.value !== confirmpassword.value) {
    Swal.fire({
      icon: "error",
      title: "รหัสผ่านใหม่ไม่ตรงกัน",
    });
    return;
  }

  axios
    .post("/api/changepass", {
      newpassword: newpassword.value,
    })
    .then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "เปลียนรหัสผ่านสำเร็จ",
        });
        newpassword.value = "";
        confirmpassword.value = "";
      } else {
        Swal.fire({
          icon: "error",
          title: "เปลียนรหัสผ่านไม่สำเร็จ",
        });
      }
    });
}

const Changepass: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[10px] text-2xl">เปลียนรหัสผ่าน</div>
      <div className="flex flex-col w-[50rem] mt-[10px]">
        <div className="flex flex-col mt-[10px]">
          <label htmlFor="newpassword" className="text-lg">
            รหัสผ่านใหม่
          </label>
          <input
            type="password"
            id="newpassword"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col mt-[10px]">
          <label htmlFor="confirmpassword" className="text-lg">
            ยืนยันรหัสผ่านใหม่
          </label>
          <input
            type="password"
            id="confirmpassword"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex justify-center mt-[10px]">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => {
              changepass();
            }}
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default Changepass;
