import { Input } from '@/components/Input'
import { InputCallback } from '@/components/InputCallback'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const DEFAULT_MESSAGE_RULE = "Campo obrigatório."

const regras = z.object({
        nome: z.string().min(1, DEFAULT_MESSAGE_RULE),
        email: z.email(),
        // cpfcnpj: z.string().min(1, DEFAULT_MESSAGE_RULE).max(14, "Limite de 14 caracteres"),
        // sexo: z.string().min(1, DEFAULT_MESSAGE_RULE).max(1, "Limite de 1 caracteres."),
        // cep: z.string().min(1, DEFAULT_MESSAGE_RULE).max(9, "Cep inválido."),
        // rua: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // bairro: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // cidade: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // estado: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // numero: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // complemento: z.string().min(1, DEFAULT_MESSAGE_RULE),
    })

    export type FormType = z.infer<typeof regras>

export default function CadastrarClientes() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(regras)
    })

    function onSubmit(data: FormType){
        // console.log('DATA DENTRO DO ONSUBMIT', data)
    }
    // console.log('Error', errors)

    return(
        <>
            <h1>Cadastrar Cliente</h1>
            <div className='w-full flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='grid grid-cols-12'>
                    {/* <div className='relative col-span-12 flex flex-col'>
                        <label>Nome<span className='text-red-500'>*</span>: </label>
                        <input {...register('nome')} className='border rounded-md px-2 py-1 text-zinc-100'/>
                        <span className='absolute top-16 text-xs text-red-500'>{errors.nome?.message}</span>
                    </div> */}
                    <Input 
                        errors={errors}
                        label='Nome'
                        name='nome'
                        register={register}
                        required
                        size={12}
                    />
                    <InputCallback
                        errors={errors}
                        label='Email'
                        name='email'
                        register={register}
                        required
                        size={12}
                        funcaoParaSerMostrada={() => console.log('EU SOU A CALLBACK FUNCTION')}
                    />
                    <button className='mt-10'>Enviar</button>
                </form>
            </div>
        </>
    )
}