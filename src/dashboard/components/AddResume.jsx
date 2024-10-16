import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { data } from 'autoprefixer'
import { title } from 'process'

  

function AddResume() {
    const [openDialog,setOpenDialog]=useState(false)
    const[resumeTitle,setResumeTitle]=useState(false);
    const {user}=useUser();

    const onCreate=async ()=>{
        const uuid =uuidv4();  
        const data = {
          data:{
            title:resumeTitle,
            resumeId:uuid,
            userEmail:user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName 
          }

        };
 /*       try {
          await GlobalApi.CreateNewResume(data);
          // Close the dialog if the resume creation is successful
          setOpenDialog(false);
          // Reset the form (optional)
          setResumeTitle('');
      } catch (error) {
          console.error("Failed to create resume:", error);
      }*/
        
    }
  return (
    <div>
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}>
            <PlusSquare/>
        </div>
        <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for new resume</p>
       <Input className ="mt-2" 
       placeholder="Ex.Full Stack resume"
       onChange={(e)=>setResumeTitle(e.target.value)}
       />
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={()=>setOpenDialog(false)} 
        variant="ghost">Cancel</Button>
        <Button 
        disabled={!resumeTitle}
        onClick={()=>onCreate()}>Create</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume