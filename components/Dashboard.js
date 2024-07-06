'use client';
import { fetchuser, updateProfile } from '@/actions/useraction';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer,toast,Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Dashboard = () => {
  const { data: session, status ,update} = useSession();
  const router = useRouter();


  useEffect(() => {
    const getData = async () => {
      if (session) {
          const user = await fetchuser(session.user.name);
          setFormData(user);
      }
    };
   
    
    if (status !== 'loading') {
      if (!session) {
        router.push('/loginpage');
      } else {
        getData();
      }
    }
  }, [session, status, router]);

  const [formData, setFormData] = useState({name: '',email: '',username: '',profilePicture: '',coverPicture: '',razorpayKey: '',razorpaySecret: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    update();
    await updateProfile(formData, session.user.name);
    toast('Profile Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
  });

  };


  // Only render the form if the session is present
  return (
    session && (
      <>      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition="Flip" />
      <div className=" p-4 md:p-8 rounded-lg shadow-lg w-[90vw] md:w-[40vw] mx-auto text-purple-950 my-4 md:my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Welcome to your Dashboard</h2>
        <form action={handleSubmit}>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="profilepic">Profile Picture</label>
            <input type="text" id="profilepic" name="profilepic" value={formData.profilepic?formData.profilepic:""}  onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="coverpic">Cover Picture</label>
            <input type="text" id="coverpic" name="coverpic" value={formData.coverpic?formData.coverpic:""} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="razorpayKey">Razorpay Key</label>
            <input type="text" id="razorpayKey" name="razorpayKey" value={formData.razorpayKey} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-2" htmlFor="razorpaySecret">Razorpay Secret</label>
            <input type="text" id="razorpaySecret" name="razorpaySecret" value={formData.razorpaySecret} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-2 flex justify-center items-center">
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Save
            </button>
          </div>
        </form>
      </div>
      </>
    )
  );
};

export default Dashboard;