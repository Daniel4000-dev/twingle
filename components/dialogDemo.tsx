import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><span className="text-lg pr-1">+ </span>Add Admin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[445px]">
        <DialogHeader>
          <DialogTitle>Add a new Admin</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col gap-2 py-4">
          <div className="space-y-1 gap-1">
            <Label htmlFor="name" className="text-right text-xs">
             First Name
            </Label>
            <Input id="name" value="First Name" className="col-span-3" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastname" className="text-right text-xs">
              Last Name
            </Label>
            <Input id="lastname" value="Last Name" className="col-span-3" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phonenumber" className="text-right text-xs">
              Phone Number
            </Label>
            <Input id="phonenumber" value="+234" className="col-span-3" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="personalemail" className="text-right text-xs">
              Personal Email
            </Label>
            <Input id="personalemail" value="email@example.com" className="col-span-3" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="role" className="text-right text-xs">
              Role
            </Label>
            <Input id="role" value="Manager" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button className='w-full bg-blue-900' type="submit">Add Admin</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
