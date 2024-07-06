"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useraction'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {

    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const SearchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        if (SearchParams.get("paymentdone") == "true") {
            toast('Thanks for the donation!', {
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
        }
        router.push(`/${username}`)
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }
    const pay = async (amount) => {
        //get the order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayKey, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "ChaiCharm!", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <ToastContainer
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative '>
                <Image src={currentUser.coverpic} width={1600} height={1600} alt="" className='object-cover  w-full h-[50vh]' unoptimized />
                <div className='absolute -bottom-[25px] md:-bottom-[55px] right-[40%] md:right-[45%] rounded-full w-[80px] h-[80px] md:w-[150px] md:h-[150px]'>
                    <Image src={currentUser.profilepic} width={100} height={100} alt="" className='rounded-full w-[80px] h-[80px] md:w-[150px] md:h-[150px] border border-purple-950' unoptimized />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-8 md:my-14">
                <div className='font-bold text-xl'>@{username}</div>
                <div className='text-purple-400'>Lets help to {username} to get a chai!</div>
                <div className='text-purple-400'>{payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount / 100, 0)}  raised</div>
            </div>
            <div className="payment flex gap-5 md:flex-row flex-col w-[80vw] mx-auto py-4 ">
                <div className="supportrs w-full md:w-1/2 bg-purple-200 p-2 rounded-lg shadow-[10px_10px_80px_-10px_#b16881] px-5 ">
                    <h2 className='text-xl md:text-2xl font-bold my-4 md:text-left text-center'>Top 10 Supporters</h2>
                    <ul className='text-md md:text-lg  h-[40vh] overflow-auto scrollbar  scrollbar-thumb-purple-950 scrollbar-track-purple-300 scrollbar-rounded-xl'>
                        {payments.length == 0 && <li>No Payment yet.</li>}
                        {payments.map((p, i) => {
                            return <li key={i} className='my-4  flex items-center gap-3 mx-1'>
                                <Image src="/images/avatar.gif" alt='avatar' width={50} height={50} className='bg-gray-400 rounded-full p-2' />
                                <span>{p.name} donated <span className='font-bold text-sm md:text-md'>₹{(p.amount / 100)}</span> with a message "{p.message}"</span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="makePayment w-full md:w-1/2 bg-purple-200 p-2 rounded-lg shadow-[10px_10px_80px_-10px_#b16881] px-5">
                    <h2 className="text-xl md:text-2xl font-bold my-5 text-center md:text-left">Make a Payment</h2>
                    <div className="flex flex-col gap-2">
                        <input type="text" onChange={handleChange} name='name' value={paymentform.name} className='w-full p-1.5 md:p-3 rounded-lg bg-pink-50 ' placeholder='Enter Name' />
                        <input type="text" onChange={handleChange} name='message' value={paymentform.message} className='w-full p-1.5 md:p-3 rounded-lg bg-pink-50 ' placeholder='Enter Message' />
                        <input type="text" onChange={handleChange} name='amount' value={paymentform.amount} className='w-full p-1.5 md:p-3 rounded-lg bg-pink-50 ' placeholder='Enter Amount' />
                        <button onClick={() => pay(paymentform.amount * 100)} type="button" className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 disabled:bg-gradient-to-r disabled:from-purple-300 disabled:to-pink-300  hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 text-center me-2 mb-2 " disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount < 10}>Pay</button>
                    </div>
                    <div className="flex gap-2 md:gap-4 mt-8 items-center md:items-start">
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => pay(1000)}>Pay ₹10</button>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => pay(2000)}>Pay ₹20</button>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => pay(3000)}>Pay ₹30</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
