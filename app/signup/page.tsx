import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

export default function AuthenticationSignup() {
    return (
        <Container size={420} my={150}>
            <Title ta="center" >
                Sign up
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Already have an account?{' '}
                <Anchor href="/login" size="sm">
                    Login Now
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Username" placeholder="username" />
                <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Text size="sm" mt="md">By continuing, you agree to our{' '}
                    <Anchor href="/" size="sm">
                        terms of service
                    </Anchor>
                </Text>
                <Button fullWidth mt="xl">
                    Sign up
                </Button>
            </Paper>
        </Container>
    );
}