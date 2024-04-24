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
import { DrawerRegisterForm } from "./RegisterForm"

interface DrawerLoginFormProps {
  buttonContent: string; 
  buttonStyle:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export function DrawerLoginForm({ buttonContent,buttonStyle }: DrawerLoginFormProps) {
  
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [openLogin, setOpenLogin] = React.useState(false)


  if (isDesktop) {
    return (
      <Dialog open={openLogin} onOpenChange={setOpenLogin}>
        <DialogTrigger asChild>
          <Button className={`${buttonStyle === 'link' && 'text-blue-500'}`} variant={buttonStyle} >{buttonContent}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Veillez vous connectez pour gérer vos réservations.
            </DialogDescription>
          </DialogHeader>
          <LoginForm setOpenLogin={setOpenLogin} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={openLogin} onOpenChange={setOpenLogin} >
      <DrawerTrigger asChild>
        <Button className={`${buttonStyle === 'link' && 'text-blue-500'}`} variant={buttonStyle}>{buttonContent}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Login</DrawerTitle>
          <DrawerDescription>
            Veillez vous connectez pour gérer vos réservations.
          </DrawerDescription>
        </DrawerHeader>
        <LoginForm setOpenLogin={setOpenLogin} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant={buttonStyle}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface LoginFormProps {
  className?: string;
  setOpenLogin: (value: boolean) => void;
}

function LoginForm({ className,setOpenLogin }: LoginFormProps) {
  return (
    <div className="flex flex-col gap-4 w-full">

    <form className={cn("grid items-start gap-5 w-full", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="amstelcar@example.com" />
      </div>
      <div className="grid gap-2 w-full">

        <div className="grid gap-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" placeholder="*********" />
        </div>
        <div  className="flex justify-end">
        <Button variant={'link'}  className=" text-blue-700">Mot de passe oublié?</Button>
        </div>
      </div>
      <Button variant={'primary'} type="submit">Se Connecter</Button>
    </form>
    <div className="text-sm text-right" >
      Vous n&apos;avez pas encore de compte ? 
      <span >
        <DrawerRegisterForm buttonStyle={'link'} buttonContent="crée un ici." />
      </span>
    </div>
    </div>
  )
}
