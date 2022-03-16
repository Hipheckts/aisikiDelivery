import { StackScreenProps } from '@react-navigation/stack';

export default interface UserCredentials {
    phone: string;
    password: string;
}

export default interface LoginProps extends StackScreenProps<any> {}
