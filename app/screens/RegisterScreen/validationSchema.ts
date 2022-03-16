import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    phone: Yup.string().required().label('Telephone'),
    password: Yup.string().required().min(4).label('Password')
});

export default validationSchema;
