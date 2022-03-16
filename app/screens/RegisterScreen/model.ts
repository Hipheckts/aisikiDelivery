import { StackScreenProps } from '@react-navigation/stack';

export default interface UserCredentials {
    name: string;
    password: string;
    referral_code: string;
    latitude: string;
    longitude: string;
    phone: string;
    business_category: number,
    number_of_offices: number,
    logo: string,
    is_corporate: boolean,
    contact_person: string,
    login: string,
    //   food_items: [
    //     0
    //   ]
}

export default interface RegisterProps extends StackScreenProps<any> { }
