import { Dialog, DialogTrigger, DialogContent,
    DialogTitle, DialogFooter, DialogClose, DialogHeader 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { set } from "react-hook-form";

export default function TaskDialog({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        onSubmit({title, description});
        setTitle("");
        setDescription("");
    }

return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Add Task</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Task</DialogTitle>
                </DialogHeader>

                <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Textarea
                    placeholder="Description"
                    className="mt-2"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogFooter>
        </DialogContent>
    </Dialog>
    );
}