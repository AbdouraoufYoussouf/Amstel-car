import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useMediaQuery from "@/src/hooks/UseMediaQuery"
import { DrawerLoginForm } from "./LoginForm"

interface DrawerDialogProps {
  buttonContent: string;
  buttonStyle: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;

}

export function DrawerRegisterForm({ buttonContent, buttonStyle }: DrawerDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = React.useState(false)


  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className={`${buttonStyle === 'link' && 'text-blue-500'}`} variant={buttonStyle} >{buttonContent}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register</DialogTitle>
            <DialogDescription>
              Veillez créer votre compte et béneficier de nos services de location de voiture.
            </DialogDescription>
          </DialogHeader>
          <RegisterForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} >
      <DrawerTrigger asChild>
        <Button className={`${buttonStyle === 'link' && 'text-blue-500'}`} variant={buttonStyle}>{buttonContent}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Register</DrawerTitle>
          <DrawerDescription>
            Veillez créer votre compte et béneficier de nos services de location de voiture.
          </DrawerDescription>
        </DrawerHeader>
        <RegisterForm setOpen={setOpen} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface RegisterFormProps {
  className?: string;
  setOpen: (value: boolean) => void;
}

export function RegisterForm({ className, setOpen }: RegisterFormProps) {
  return (
    <div className="flex flex-col gap-4 w-full">

      <form className={cn("grid items-start gap-5 w-full", className)}>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Abdouraouf youssouf" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="amstelcar@example.com" />
        </div>

        <div className="grid gap-2 w-full">

          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" placeholder="*********" />
          </div>
        </div>
        <Button className="" type="submit">Se Connecter</Button>
      </form>
      <div className="text-sm text-right">
        Vous avez déjà un compte ?
        <span onClick={() => setOpen(false)}>
          <DrawerLoginForm buttonStyle={'link'} buttonContent={'connectez-vous'} />
        </span>
      </div>
    </div>
  )
}
