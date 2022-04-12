import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required().label('Telephone'),
    password: Yup.string().required().min(4).label('Password')
});

export default validationSchema;
