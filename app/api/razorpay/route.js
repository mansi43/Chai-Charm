import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req)=>{
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    //check if razorpay id is present on the server
    let p= await Payment.findOne({oid:body.razorpay_order_id})
    if (!p) {
        return NextResponse.json({sucess:false,message:"Order Id not found"}) 
    }

    //fetch the secret of the user how is getting the payment
    let user = await User.findOne({username:p.to_user})
    const secret =user.razorpaySecret

    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,secret)

    if (xx) {
       //update the payment status
       const updatedPayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:true}) 
       return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({sucess:false,message:"Payment Verification Failed"})
    }
}