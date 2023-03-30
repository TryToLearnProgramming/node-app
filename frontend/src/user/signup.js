import React, {useState} from "react";
import Layout from "../core/layout";
const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signUp = (registerValues)=>{
        console.log(registerValues)
    }

    const clickSubmit = (event) =>{
        event.preventDefault();

        const { name, email, password } = values;
        signUp({ name, email, password })
    }

    return (
        <Layout title="Sign Up"
            description="Sign up Node React Ecommerce"
            className="container col-md-8 offset-md-2">

            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" onChange={handleChange('name')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input type="text" onChange={handleChange('email')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" onChange={handleChange('password')} className="form-control"></input>
                </div>

                <button className="btn btn-primary" onClick={clickSubmit}>Submit </button>
            </form>
            
        </Layout>
    )
}

export default Signup