import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required().min(11).label('Telephone'),
    password: Yup.string().required().min(6).label('Password')
});

export default validationSchema;
