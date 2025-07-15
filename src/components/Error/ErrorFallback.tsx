import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Button, Flex } from 'antd';
import type { FallbackProps } from 'react-error-boundary';
import { customThemeColors } from '../../utils/theme';

export function ErrorFallback(props: FallbackProps) {
    const { reset } = useQueryErrorResetBoundary();
    return (
        <Flex role="alert" style={{ height: '100vh' }} align="center" justify="center" vertical>
            <img src="/assets/not-found.png" alt="not-found" />
            <h2 style={{ textAlign: 'center', fontSize: 35, marginTop: 40 }}>{props.error.message || 'Ooops..! Not Found.'}</h2>
            <p style={{ textAlign: 'center', fontSize: 15, marginBottom: 20, marginTop: 10, color: customThemeColors.neutral[60] }}>
                {props.error.name || 'Error'}
            </p>
            <Button href="/" style={{ backgroundColor: customThemeColors.primary.main, color: "#fff", padding: 20 }}>
                Home Page
            </Button>
            <button onClick={reset}>Try again</button>

        </Flex>
    );
}
