import axios from 'axios'
import { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Modal from '../../components/Modal'
import { ToastContainer, toast } from 'react-toastify';
import SideBar from '../../components/SideBar';

{/* REACT ICONS */}
import { IoInformation } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function ListPage() {
  return(
    <div>
      <SideBar/>
      <h1>OI</h1>
    </div>
  )
}