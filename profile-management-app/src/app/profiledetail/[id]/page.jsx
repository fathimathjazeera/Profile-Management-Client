'use client'
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Header from '@/components/Header';
import Bio from '@/components/Bio';
import ProgrammingCard from '@/components/ProgrammingCard';
import CaseStudy from '@/components/CaseStudy';
import VisualResume from '@/components/VisualResume';
import Footer from '@/components/Footer';
import axios from 'axios';

const page = ({params}) => {


    

  return (
    <>
    <Navbar />
 <Header profile={singleProfile}/>
 <Bio profile={singleProfile}/>
 <ProgrammingCard profile={singleProfile}/>
 <CaseStudy profile={singleProfile}/>
 <VisualResume profile={singleProfile}/>
 <Footer profile={singleProfile}/>
    </>
  )
}


export default page