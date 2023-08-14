import { QuerySnapshot } from 'firebase/firestore';
import React, {useEffect, useState,useRef} from 'react'
import {firestore} from '../firebase'
import {addDoc, collection, doc, getDoc, getDocs} from 'firebase/firestore'





function WebTemplates() {

  const [templates, setTemplates] = useState([]);
  const tepmlatesCollectionRef = collection(firestore,'templates');


  useEffect(() => {
      const getTemplates = async () =>{
      const data = await getDocs(tepmlatesCollectionRef);
      setTemplates(data.docs.map((doc) => ({...doc.data(),id: doc.ID,description: doc.Description,title:doc.Title  })));
      };

      getTemplates();

  }, []);

  return (
    <div className='flex grid-cols-4  h-full  bg-white text-center border-y-2 pt-20'>
      <h1>Templates</h1>
      <div className='w-[1024px] h-full'>
      {templates.map((template) => {
        return <div className='flex'>
        <h1>Template ID: {template.ID}</h1>
        <h1>Template Description: {template.Description}</h1>
        <h1>Template Title: {template.Title}</h1>
        </div>
      })}
      </div>
    </div>
  )
}

export default WebTemplates