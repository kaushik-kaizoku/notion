"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
   const router = useRouter();
   const { user } = useUser();
   const create = useMutation(api.documents.create);

   const onCreate = () => {
      const promise = create({title: "Untitled"})
        .then((documentId) => router.push(`/documents/${documentId}`))

      toast.promise(promise, {
         loading: "Creating note...",
         success: "Note created!",
         error: "Failed to create note."
      });      
   };

   return ( 
        <div className="h-full flex flex-col justify-center items-center space-y-4">  
           <h2>
            Welcome to {user?.firstName}&apos;s Jotion!
           </h2>
           <Button onClick={onCreate}>
              <PlusCircle className="h-6 w-6 mr-2"/>
              Create new note.
           </Button>
        </div>
     );
}
 
export default DocumentsPage;