import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hooks/useUserActions"

export function CreateNewUser() {
    const { addUser } = useUserActions()

    const [result, setResult] = useState<'ok' | 'ko' | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setResult(null)
        const form = event.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github) {
            return setResult('ko')
        }

        addUser({ name, email, github })
        setResult('ok')
        form.reset()
    }
    return (
        <Card style={{ marginTop: '16px' }}>
            <Title>Create New User</Title>

            <form className="" onSubmit={handleSubmit}>
                <TextInput placeholder="Aqui el nombre" name="name">
                </TextInput>
                <TextInput placeholder="Aqui el email" name="email">
                </TextInput>
                <TextInput placeholder="Aqui el usuario" name="github">
                </TextInput>
                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: '16px' }}
                    >
                        Crear usuario
                    </Button>
                    <span>
                        {result === 'ok' && <Badge color="green">Guardado</Badge>}
                        {result === 'ko' && <Badge color="red">Error al guardar</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}