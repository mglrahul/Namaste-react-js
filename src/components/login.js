import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

const Login = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            onSubmit ={ async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                console.log(JSON.stringify(values, null, 2))
                localStorage.setItem('isLoggedIn', true);
                navigate("/");
            }}
        >
            <Form>
                <Field id="username" type="text" name="username" placeholder="Username"></Field>
                <Field id="password" type="text" name="password" placeholder="password"></Field>
                <button className="btn-submit">Submit</button>
            </Form>
        </Formik>
        // <div className="login">
        //     <div>
        //         <input type="text" name="username" placeholder="Username" />
        //     </div>
        //     <div>
        //         <input type="password" name="password" placeholder="Password" />
        //     </div>
        //     <div>
        //         <button className="btn-submit">Submit</button>
        //     </div>
        // </div>
    )
}

export default Login