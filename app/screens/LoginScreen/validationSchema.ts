import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required().label('Phone'),
    password: Yup.string().required().min(4).label('Password')
});

export default validationSchema;
