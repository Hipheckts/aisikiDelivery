import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
});

export default validationSchema;
