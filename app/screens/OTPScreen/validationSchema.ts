import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    pin: Yup.string().required().label('pin'),
});

export default validationSchema;
