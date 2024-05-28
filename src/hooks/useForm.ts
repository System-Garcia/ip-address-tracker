import { ChangeEvent, useState } from "react"


export const useForm = <T extends {[key: string]: any}>(initialState: T) => {
    
    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setFormState(initialState);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
