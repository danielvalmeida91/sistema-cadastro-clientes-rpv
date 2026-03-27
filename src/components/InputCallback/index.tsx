import { FormType } from "@/pages/clientes/criar"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

type TInput<T extends FieldValues> = {
    required: boolean
    label: string
    name: keyof T
    register: UseFormRegister<T>
    errors: FieldErrors<T>
    size: number
    funcaoParaSerMostrada: () => void
}

export function InputCallback({
    errors,
    label,
    name,
    register,
    required,
    size,
    funcaoParaSerMostrada
}: TInput<FormType>) {
    console.log('eerors component', name)

    return(
        <div className={`relative col-span-${size} flex flex-col my-5`}>
            <label>{label}{required && (<span className='text-red-500'>*</span>)}: </label>
            <input {...register(name)} onBlur={funcaoParaSerMostrada} className='border rounded-md px-2 py-1 text-zinc-100'/>
            <span className='absolute top-16 text-xs text-red-500'>{errors[name]?.message}</span>
        </div>
    )
}